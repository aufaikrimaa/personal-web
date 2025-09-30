// projects.api.ts
// @ts-nocheck
import { Client, isFullPage } from '@notionhq/client';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { compareAsc, compareDesc } from 'date-fns';
import { getPlaiceholder } from 'plaiceholder';
import fs from 'fs-extra';
import path from 'path';
import fetch from 'node-fetch';

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

const PUBLIC_PROJECTS_PATH = path.join(process.cwd(), 'public', 'projects');

// helper download file
async function downloadFile(url: string, filename: string): Promise<string> {
  const filePath = path.join(PUBLIC_PROJECTS_PATH, filename);

  // ✅ kalau file udah ada, return langsung tanpa download ulang
  if (await fs.pathExists(filePath)) {
    return `/projects/${filename}`;
  }

  // kalau belum ada, baru download
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  const buffer = await res.arrayBuffer();

  await fs.ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, Buffer.from(buffer));

  return `/projects/${filename}`;
}

class ProjectsApi {
  constructor(
    private readonly notion: Client,
    private readonly databaseId: string,
  ) {}

  async getProjects(sortOrder: 'asc' | 'desc' = 'desc', limit?: number) {
    const projects = await this.getDatabaseContent(this.databaseId);

    return projects
      .sort((a, b) => {
        return CompareFunctionLookup[sortOrder](new Date(a.publishedAt), new Date(b.publishedAt));
      })
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

    return await Promise.all(
      db.results.filter(isFullPage).map(async (page) => {
        const logoFile = page.properties.logo?.files?.[0] ?? null;

        let logo = null;
        if (logoFile) {
          const imageUrl = logoFile.type === 'external' ? logoFile.external.url : logoFile.file.url;

          try {
            const ext = path.extname(imageUrl.split('?')[0]) || '.png';
            const localUrl = await downloadFile(imageUrl, `logos/${page.id}${ext}`);

            const buffer = await fs.readFile(
              path.join(PUBLIC_PROJECTS_PATH, `logos/${page.id}${ext}`),
            );
            const {
              base64,
              metadata: { width, height },
            } = await getPlaiceholder(buffer, { size: 64 });

            logo = {
              url: localUrl,
              placeholder: base64,
              size: { width, height },
            };
          } catch (err) {
            console.error('Logo download failed', err);
          }
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
      }),
    ).then((projects) => projects.filter((p) => p.isPublished));
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

      // ⬇️ download file kalau block image / video
      if (block.type === 'image') {
        const src =
          block.image.type === 'external' ? block.image.external.url : block.image.file.url;
        const ext = path.extname(src.split('?')[0]) || '.jpg';
        try {
          const localUrl = await downloadFile(src, `images/${block.id}${ext}`);
          block.image.localUrl = localUrl;
        } catch (err) {
          console.error('Image download failed', err);
        }
      }
      if (block.type === 'video') {
        const src =
          block.video.type === 'external' ? block.video.external.url : block.video.file.url;
        // skip youtube/vimeo (embed langsung aja)
        if (
          !src.includes('youtube.com') &&
          !src.includes('youtu.be') &&
          !src.includes('vimeo.com')
        ) {
          const ext = path.extname(src.split('?')[0]) || '.mp4';
          try {
            const localUrl = await downloadFile(src, `videos/${block.id}${ext}`);
            block.video.localUrl = localUrl;
          } catch (err) {
            console.error('Video download failed', err);
          }
        }
      }
      return block;
    };

    return Promise.all(blocks.results.map(fetchChildren));
  };
}

export const projectsApi = new ProjectsApi(notion, process.env.NOTION_PROJECTS_DATABASE_ID!);
