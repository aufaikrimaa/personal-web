// pages/projects.tsx
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';

import { PageLayout } from 'src/components/PageLayout';
import { ProjectCard } from 'src/components/ProjectCard';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from 'src/lib/animation';
import { projectsApi, Project } from 'src/lib/projectsApi';

const seoTitle = 'Projects';
const seoDescription = 'Things I’ve built along the way.';

type ProjectsPageProps = {
  currentProjects: Project[];
  pastProjects: Project[];
};

export default function Projects({ currentProjects, pastProjects }: ProjectsPageProps) {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/projects`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <PageLayout
        title="Things I’ve built along the way."
        intro="A list of projects I've worked on, I'm working on and I will work on."
      >
        <h2 className="text-2xl font-bold tracking-tight">Now</h2>
        <p className="mt-2 text-base">Projects I currently work on.</p>
        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {currentProjects.map((project) => (
            <motion.li
              key={project.id}
              initial={ANIMATION_FROM_PROPS}
              whileInView={ANIMATION_TO_PROPS}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </ul>

        <h2 className="mt-24 text-2xl font-bold tracking-tight">Past</h2>
        <p className="mt-2 text-base">
          Projects I worked on. Due to nature of internet businesses not all of them are still
          online.
        </p>
        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {pastProjects.map((project) => (
            <motion.li
              key={project.id}
              initial={ANIMATION_FROM_PROPS}
              whileInView={ANIMATION_TO_PROPS}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </ul>
      </PageLayout>
    </>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   // Ambil semua projects dari Notion
//   const allProjects = await projectsApi.getProjects('desc');

//   const currentProjects = allProjects.filter((p) => p.status === 'current');
//   const pastProjects = allProjects.filter((p) => p.status === 'past');

//   return {
//     props: {
//       currentProjects,
//       pastProjects,
//     },
//     revalidate: 60, // regenerate tiap 1 menit
//   };
// };

export const getServerSideProps = async () => {
  const allProjects = await projectsApi.getProjects('desc');

  const currentProjects = allProjects.filter((p) => p.status === 'current');
  const pastProjects = allProjects.filter((p) => p.status === 'past');

  return {
    props: {
      currentProjects,
      pastProjects,
    },
  };
};
