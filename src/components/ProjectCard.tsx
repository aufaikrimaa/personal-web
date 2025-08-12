import Image from 'next/image';

import { Project } from '../lib/projectsApi';
import { Badge } from './Badge';
import { Card } from './Card';
import { LinkIcon } from './icons/LinkIcon';
import Link from 'next/link';

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <Card className="h-full" key={project.title}>
      <div className="relative z-10 flex h-16 w-16 p-2 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={project.logo?.url || '/default-logo.png'}
          alt={`Logo of ${project.title}`}
          width={project.logo?.size?.width || 40}
          height={project.logo?.size?.height || 40}
          className="object-contain p-1"
          unoptimized
        />
      </div>
      <div className="mt-6">
        <Card.Title href={`/projects/${project.slug}`}>{project.title}</Card.Title>
      </div>
      <Card.Description>{project.description}</Card.Description>
      <p className="mt-6 font-mono flex flex-wrap gap-1 z-10 mb-6">
        {project.techStack.map((techStackItem) => (
          <Badge key={techStackItem}>{techStackItem}</Badge>
        ))}
      </p>
      <div className="relative z-40 mt-auto flex text-sm font-medium text-zinc-400 transition group-hover:text-primary dark:text-zinc-200">
        {project.link ? (
          <Link
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <LinkIcon className="h-6 w-6 flex-none" />
            <span className="ml-2">{project.link.label}</span>
            <span className="ml-2 rounded-full bg-green-700 w-1 h-1" />
          </Link>
        ) : (
          <p className="text-zinc-400 flex items-center gap-x-2">
            Shut down <span className="rounded-full bg-red-700 w-1 h-1" />
          </p>
        )}
      </div>
    </Card>
  );
};
