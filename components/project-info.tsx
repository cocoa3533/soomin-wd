import type { Project } from '@/lib/projects'

type ProjectInfoProps = {
  project: Project
  index: number
  total: number
  headingLevel?: 'h1' | 'h3'
  className?: string
}

export function ProjectInfo({ project, index, total, headingLevel = 'h3', className }: ProjectInfoProps) {
  const number = String(index + 1).padStart(2, '0')
  const Heading = headingLevel

  return (
    <div className={className}>
      <div className="flex items-center justify-between text-sm">
        <span className="font-bold tabular-nums">
          {number}
          <span className="font-light text-muted-foreground"> / {String(total).padStart(2, '0')}</span>
        </span>
        <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold">{project.category}</span>
      </div>

      <Heading id={`${project.slug}-title`} className="mt-8 text-5xl font-extrabold tracking-tight md:text-6xl">
        {project.title}
      </Heading>
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
  )
}
