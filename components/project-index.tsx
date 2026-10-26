'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { getProjectHref, projects, type Project } from '@/lib/projects'
import { cn } from '@/lib/utils'

function formatNumber(n: number) {
  return String(n).padStart(2, '0')
}

function CardInfo({ project, className }: { project: Project; className?: string }) {
  return (
    <div
      className={cn(
        'absolute inset-x-3 bottom-3 flex items-end justify-between gap-4 rounded-xl border border-background/40 bg-background/75 p-4 backdrop-blur-md transition-all duration-500 md:inset-x-4 md:bottom-4 md:p-5',
        className,
      )}
    >
      <div className="min-w-0">
        <p className="text-xs font-medium text-muted-foreground">
          {project.category} · {project.year}
        </p>
        <p className="mt-1 truncate text-xl font-extrabold tracking-tight md:text-2xl">{project.title}</p>
        <p className="mt-0.5 truncate text-sm font-light">{project.subtitle}</p>
      </div>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-colors group-hover:bg-accent">
        <ArrowUpRight className="size-4" aria-hidden="true" />
        <span className="sr-only">{project.title} 자세히 보기</span>
      </span>
    </div>
  )
}

function DesktopAccordion() {
  const [active, setActive] = useState(0)

  return (
    <ol className="hidden h-[560px] gap-3 md:flex">
      {projects.map((project, i) => {
        const isActive = active === i
        return (
          <li
            key={project.slug}
            onMouseEnter={() => setActive(i)}
            className={cn(
              'group relative h-full min-w-0 basis-0 overflow-hidden rounded-2xl bg-muted transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
              isActive ? 'grow-[5]' : 'grow',
            )}
          >
            <Link
              href={getProjectHref(project.slug)}
              onFocus={() => setActive(i)}
              className="absolute inset-0 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-accent"
            >
              <Image
                src={project.image || '/placeholder.svg'}
                alt={project.imageAlt}
                fill
                sizes="60vw"
                className={cn(
                  'object-cover transition-all duration-700',
                  isActive ? 'scale-100' : 'scale-110 opacity-70 grayscale',
                )}
                priority={i < 3}
              />

              <span
                aria-hidden="true"
                className={cn(
                  'absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground/60 to-transparent transition-opacity duration-500',
                  isActive ? 'opacity-0' : 'opacity-100',
                )}
              />

              <span className="absolute left-4 top-4 rounded-full bg-background/90 px-2.5 py-1 text-xs font-bold tabular-nums backdrop-blur">
                {formatNumber(i + 1)}
              </span>

              <span
                aria-hidden={isActive}
                className={cn(
                  'absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-bold text-background transition-opacity duration-300 [writing-mode:vertical-rl]',
                  isActive ? 'opacity-0' : 'opacity-100',
                )}
              >
                {project.title}
              </span>

              <CardInfo
                project={project}
                className={isActive ? 'translate-y-0 opacity-100 delay-200' : 'pointer-events-none translate-y-4 opacity-0'}
              />
            </Link>
          </li>
        )
      })}
    </ol>
  )
}

function MobileSlider() {
  const trackRef = useRef<HTMLOListElement>(null)
  const [current, setCurrent] = useState(0)
  const total = projects.length

  const getStep = () => {
    const track = trackRef.current
    const first = track?.children[0] as HTMLElement | undefined
    if (!track || !first) return 0
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    return first.offsetWidth + gap
  }

  const handleScroll = () => {
    const track = trackRef.current
    const step = getStep()
    if (!track || !step) return
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2
    const index = atEnd ? total - 1 : Math.round(track.scrollLeft / step)
    setCurrent(Math.min(Math.max(index, 0), total - 1))
  }

  const goTo = (index: number) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.min(Math.max(index, 0), total - 1)
    track.scrollTo({ left: clamped * getStep(), behavior: 'smooth' })
  }

  return (
    <div className="md:hidden" role="region" aria-roledescription="carousel" aria-label="프로젝트 슬라이드">
      <ol
        ref={trackRef}
        onScroll={handleScroll}
        className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-px-5 px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, i) => (
          <li
            key={project.slug}
            aria-roledescription="slide"
            aria-label={`${formatNumber(i + 1)} / ${formatNumber(total)}`}
            className="group relative h-96 w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl bg-muted sm:h-[28rem] sm:w-[70%]"
          >
            <Link
              href={getProjectHref(project.slug)}
              className="absolute inset-0 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-accent"
            >
              <Image
                src={project.image || '/placeholder.svg'}
                alt={project.imageAlt}
                fill
                sizes="85vw"
                className="object-cover"
                priority={i < 2}
              />
              <span className="absolute left-4 top-4 rounded-full bg-background/90 px-2.5 py-1 text-xs font-bold tabular-nums backdrop-blur">
                {formatNumber(i + 1)}
              </span>
              <CardInfo project={project} />
            </Link>
          </li>
        ))}
      </ol>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          {projects.map((project, i) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${project.title} 슬라이드로 이동`}
              aria-current={current === i}
              className="flex h-6 items-center"
            >
              <span
                className={cn(
                  'block h-1.5 rounded-full transition-all duration-300',
                  current === i ? 'w-6 bg-foreground' : 'w-1.5 bg-border',
                )}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-bold tabular-nums" aria-live="polite">
            {formatNumber(current + 1)}
            <span className="font-light text-muted-foreground"> / {formatNumber(total)}</span>
          </span>
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            aria-label="이전 프로젝트"
            className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground disabled:opacity-30"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(current + 1)}
            disabled={current === total - 1}
            aria-label="다음 프로젝트"
            className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground disabled:opacity-30"
          >
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}

export function ProjectIndex() {
  return (
    <section id="index" aria-labelledby="index-title" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-16 md:px-10 md:py-24">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold text-accent">Index</p>
          <h2 id="index-title" className="mt-3 text-3xl tracking-tight md:text-5xl">
            <span className="font-extrabold">Selected Work</span>
            <span className="font-light text-muted-foreground"> 2023 — 2026</span>
          </h2>
        </div>
        <p className="hidden text-sm text-muted-foreground md:block">카드에 마우스를 올려 미리보기 · 클릭하여 상세 보기</p>
        <p className="text-sm text-muted-foreground md:hidden">좌우로 넘겨 프로젝트를 둘러보세요</p>
      </div>

      <DesktopAccordion />
      <MobileSlider />
    </section>
  )
}
