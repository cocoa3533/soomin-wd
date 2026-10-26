import Image from 'next/image'
import type { Project } from '@/lib/projects'

type ProjectDetailProps = {
  project: Project
  index: number
  total: number
}

export function ProjectDetail({ project, index, total }: ProjectDetailProps) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <article
      id={project.slug}
      aria-labelledby={`${project.slug}-title`}
      className="grid scroll-mt-20 gap-10 border-t border-border py-16 md:py-24 lg:grid-cols-12 lg:gap-12"
    >
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <div className="flex items-center justify-between text-sm">
            <span className="font-bold tabular-nums">
              {number}
              <span className="font-light text-muted-foreground"> / {String(total).padStart(2, '0')}</span>
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold">{project.category}</span>
          </div>

          <h3 id={`${project.slug}-title`} className="mt-8 text-5xl font-extrabold tracking-tight md:text-6xl">
            {project.title}
          </h3>
          <p className="mt-2 text-xl font-light text-muted-foreground md:text-2xl">{project.subtitle}</p>

          <p className="mt-6 text-pretty leading-relaxed text-foreground/80">{project.description}</p>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-1 bg-card p-5">
                <dt className="order-2 text-xs font-medium text-muted-foreground">{metric.label}</dt>
                <dd className="order-1 text-3xl font-bold tabular-nums tracking-tight md:text-4xl">{metric.value}</dd>
              </div>
            ))}
          </dl>

          <dl className="mt-8 grid grid-cols-[88px_1fr] gap-y-3 text-sm">
            <dt className="text-muted-foreground">Client</dt>
            <dd className="font-medium">{project.client}</dd>
            <dt className="text-muted-foreground">Role</dt>
            <dd className="font-medium">{project.role}</dd>
            <dt className="text-muted-foreground">Year</dt>
            <dd className="font-medium tabular-nums">{project.year}</dd>
            <dt className="text-muted-foreground">Tools</dt>
            <dd className="flex flex-wrap gap-1.5">
              {project.tools.map((tool) => (
                <span key={tool} className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium">
                  {tool}
                </span>
              ))}
            </dd>
          </dl>
        </div>
      </div>

      <figure className="lg:col-span-7">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted sm:aspect-[4/3] lg:aspect-[4/5]">
          <Image
            src={project.image || '/placeholder.svg'}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
          />
        </div>
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
