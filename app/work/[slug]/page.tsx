import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getProjectBySlug, getProjectHref, projects } from '@/lib/projects'
import { SiteHeader } from '@/components/site-header'
import { ProjectInfo } from '@/components/project-info'
import { ContactFooter } from '@/components/contact-footer'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const result = getProjectBySlug(slug)
  if (!result) return { title: 'Project not found — SOOMIN' }
  return {
    title: `${result.project.title} — SOOMIN`,
    description: result.project.description,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const result = getProjectBySlug(slug)
  if (!result) notFound()

  const { project, index, prev, next } = result

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-10 md:pb-24 md:pt-32">
        <Link
          href="/#index"
          className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-foreground"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
          목록으로 돌아가기
        </Link>

        <article aria-labelledby={`${project.slug}-title`} className="mt-10 md:mt-14">
          <ProjectInfo
            project={project}
            index={index}
            total={projects.length}
            headingLevel="h1"
            className="max-w-3xl"
          />

          <figure className="mt-14 md:mt-20">
            <Image
              src={project.image || '/placeholder.svg'}
              alt={project.imageAlt}
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="h-auto w-full rounded-3xl bg-muted"
            />
            <figcaption className="mt-4 flex justify-between text-xs text-muted-foreground">
              <span>
                {project.title} — {project.subtitle}
              </span>
              <span className="tabular-nums">{project.year}</span>
            </figcaption>
          </figure>
        </article>

        <nav aria-label="다른 프로젝트" className="mt-16 grid gap-3 border-t border-border pt-10 sm:grid-cols-2 md:mt-24">
          <Link
            href={getProjectHref(prev.slug)}
            className="group flex flex-col gap-1 rounded-2xl border border-border p-5 transition-colors hover:border-foreground"
          >
            <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <ArrowLeft className="size-3.5" aria-hidden="true" />
              이전 프로젝트
            </span>
            <span className="text-xl font-extrabold tracking-tight">{prev.title}</span>
            <span className="text-sm font-light text-muted-foreground">{prev.subtitle}</span>
          </Link>
          <Link
            href={getProjectHref(next.slug)}
            className="group flex flex-col items-end gap-1 rounded-2xl border border-border p-5 text-right transition-colors hover:border-foreground"
          >
            <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              다음 프로젝트
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </span>
            <span className="text-xl font-extrabold tracking-tight">{next.title}</span>
            <span className="text-sm font-light text-muted-foreground">{next.subtitle}</span>
          </Link>
        </nav>
      </main>
      <ContactFooter />
    </>
  )
}
