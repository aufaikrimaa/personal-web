// lib/projectsApi.ts
// @ts-nocheck
import { Client, isFullPage } from '@notionhq/client';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { compareAsc, compareDesc } from 'date-fns';
import { getPlaiceholder } from 'plaiceholder';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export type Project = {
  id: string;
  title: string;
  slug: string;
  techStack: string[];
  description: string;
  status: string;
  logo: {
    url: string;
    placeholder?: string;
    size?: { width: number; height: number };
  } | null;
  link?: {
    label: string;
    href: string;
  };
  isPublished: boolean;
  publishedAt: string;
};

const CompareFunctionLookup = {
  asc: compareAsc,
  desc: compareDesc,
};

class ProjectsApi {
  constructor(
    private readonly notion: Client,
    private readonly databaseId: string,
  ) {}

  async getProjects(sortOrder: 'asc' | 'desc' = 'desc', limit?: number) {
    const projects = await this.getDatabaseContent(this.databaseId);

    return projects
      .sort((a, b) =>
        CompareFunctionLookup[sortOrder](new Date(a.publishedAt), new Date(b.publishedAt)),
      )
      .slice(0, limit);
  }

  async getProject(id: string) {
    return this.getPageContent(id);
  }

  private getDatabaseContent = async (databaseId: string): Promise<Project[]> => {
    const db = await this.notion.databases.query({ database_id: databaseId });

    while (db.has_more && db.next_cursor) {
      const { results, has_more, next_cursor } = await this.notion.databases.query({
        database_id: databaseId,
        start_cursor: db.next_cursor,
      });
      db.results = [...db.results, ...results];
      db.has_more = has_more;
      db.next_cursor = next_cursor;
    }

    return db.results
      .filter(isFullPage)
      .map((page) => {
        const logoFile = page.properties.logo?.files?.[0] ?? null;

        let logo = null;
        if (logoFile) {
          const src = logoFile.type === 'external' ? logoFile.external.url : logoFile.file.url;

          logo = {
            // lewat proxy API
            url: `/api/notion-proxy?url=${encodeURIComponent(src)}`,
            size: { width: 800, height: 600 },
          };
        }

        return {
          id: page.id,
          title: page.properties.title.title?.[0]?.plain_text || '',
          slug: page.properties.slug.rich_text?.[0]?.plain_text || '',
          techStack: page.properties.techStack.multi_select.map((t) => t.name),
          description: page.properties.description.rich_text?.[0]?.plain_text || '',
          status: page.properties.status?.select?.name || '',
          logo,
          link:
            page.properties.linkHref?.url && page.properties.linkLabel?.rich_text?.[0]
              ? {
                  label: page.properties.linkLabel.rich_text[0].plain_text,
                  href: page.properties.linkHref.url,
                }
              : null,
          isPublished: page.properties.isPublished.checkbox || false,
          publishedAt: page.properties.publishedAt.date?.start || '',
        };
      })
      .filter((p) => p.isPublished);
  };

  private getPageContent = async (pageId: string) => {
    const blocks = await this.notion.blocks.children.list({ block_id: pageId });

    const fetchChildren = async (block: BlockObjectResponse): Promise<any> => {
      if ('has_children' in block && block.has_children) {
        const childrenResp = await this.notion.blocks.children.list({
          block_id: block.id,
        });
        const children = await Promise.all(childrenResp.results.map(fetchChildren));
        return { ...block, children };
      }

      // Image / Video handling → lewat proxy
      if (block.type === 'image') {
        const src =
          block.image.type === 'external' ? block.image.external.url : block.image.file.url;
        block.image.localUrl = `/api/notion-proxy?url=${encodeURIComponent(src)}`;
      }

      if (block.type === 'video') {
        const src =
          block.video.type === 'external' ? block.video.external.url : block.video.file.url;

        if (src.includes('youtube.com') || src.includes('youtu.be') || src.includes('vimeo.com')) {
          block.video.localUrl = src; // embed langsung
        } else {
          block.video.localUrl = `/api/notion-proxy?url=${encodeURIComponent(src)}`;
        }
      }

      return block;
    };

    return Promise.all(blocks.results.map(fetchChildren));
  };
}

export const projectsApi = new ProjectsApi(notion, process.env.NOTION_PROJECTS_DATABASE_ID!);
