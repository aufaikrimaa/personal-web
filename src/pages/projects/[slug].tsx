// pages/projects/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { ProjectLayout } from '../../components/ProjectLayout';
import { Project as ProjectType, projectsApi } from '../../lib/projectsApi';
import { NotionBlockRenderer } from '../../components/notion/NotionBlockRenderer';

type Props = {
  project: ProjectType;
  projectContent: any[];
};

export default function ProjectPage({ project, projectContent }: Props) {
  return (
    <ProjectLayout
      meta={{ title: project.title, description: project.description, date: project.publishedAt }}
    >
      {projectContent.map((block) => (
        <NotionBlockRenderer key={block.id} block={block} />
      ))}
    </ProjectLayout>
  );
}

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (ctx) => {
  const slug = ctx.params?.slug;
  const projects = await projectsApi.getProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return { notFound: true };

  const projectContent = await projectsApi.getProject(project.id);

  return { props: { project, projectContent }, revalidate: 10 };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await projectsApi.getProjects();
  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    fallback: 'blocking',
  };
};
