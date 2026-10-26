import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/lib/projects'
import { getProjectHref } from '@/lib/projects'
import { ProjectInfo } from '@/components/project-info'

type ProjectDetailProps = {
  project: Project
  index: number
  total: number
}

export function ProjectDetail({ project, index, total }: ProjectDetailProps) {
  return (
    <article
      id={project.slug}
      aria-labelledby={`${project.slug}-title`}
      className="grid scroll-mt-20 gap-10 border-t border-border py-16 md:py-24 lg:grid-cols-12 lg:gap-12"
    >
      <div className="lg:col-span-5">
        <ProjectInfo project={project} index={index} total={total} className="lg:sticky lg:top-28" />
      </div>

      <figure className="lg:col-span-7">
        <Link
          href={getProjectHref(project.slug)}
          className="relative block aspect-[4/5] overflow-hidden rounded-3xl bg-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:aspect-[4/3] lg:aspect-[4/5]"
        >
          <Image
            src={project.image || '/placeholder.svg'}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
          />
          <span className="sr-only">{project.title} 상세 페이지로 이동</span>
        </Link>
        <figcaption className="mt-4 flex justify-between text-xs text-muted-foreground">
          <span>
            {project.title} — {project.subtitle}
          </span>
          <span className="tabular-nums">{project.year}</span>
        </figcaption>
      </figure>
    </article>
  )
}
