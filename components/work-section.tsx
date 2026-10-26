import { projects } from '@/lib/projects'
import { ProjectDetail } from '@/components/project-detail'

export function WorkSection() {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-7xl scroll-mt-20 px-5 pt-8 md:px-10">
      <div className="pb-12 md:pb-16">
        <p className="text-sm font-semibold text-accent">Work</p>
        <h2 id="work-title" className="mt-3 max-w-3xl text-balance text-3xl tracking-tight md:text-5xl">
          <span className="font-light text-muted-foreground">문제를 정의하고, </span>
          <span className="font-extrabold">숫자로 증명한 작업들.</span>
        </h2>
      </div>
      {projects.map((project, i) => (
        <ProjectDetail key={project.slug} project={project} index={i} total={projects.length} />
      ))}
    </section>
  )
}
