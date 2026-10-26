'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/projects'
import { cn } from '@/lib/utils'

export function ProjectIndex() {
  const [active, setActive] = useState(0)

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
        <p className="hidden text-sm text-muted-foreground md:block">카드에 마우스를 올려 미리보기</p>
      </div>

      <ol className="flex flex-col gap-3 md:h-[560px] md:flex-row">
        {projects.map((project, i) => {
          const isActive = active === i
          return (
            <li
              key={project.slug}
              onMouseEnter={() => setActive(i)}
              className={cn(
                'group relative h-64 overflow-hidden rounded-2xl bg-muted transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-80 md:h-full md:min-w-0 md:basis-0',
                isActive ? 'md:grow-[5]' : 'md:grow',
              )}
            >
              <a
                href={`#${project.slug}`}
                onFocus={() => setActive(i)}
                className="absolute inset-0 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-accent"
              >
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className={cn(
                    'object-cover transition-all duration-700',
                    isActive ? 'scale-100' : 'md:scale-110 md:grayscale md:opacity-70',
                  )}
                  priority={i < 3}
                />

                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute inset-x-0 bottom-0 hidden h-1/2 bg-gradient-to-t from-foreground/60 to-transparent transition-opacity duration-500 md:block',
                    isActive ? 'opacity-0' : 'opacity-100',
                  )}
                />

                <span
                  className={cn(
                    'absolute left-4 top-4 rounded-full bg-background/90 px-2.5 py-1 text-xs font-bold tabular-nums backdrop-blur',
                  )}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span
                  aria-hidden={isActive}
                  className={cn(
                    'absolute bottom-6 left-1/2 hidden -translate-x-1/2 whitespace-nowrap text-sm font-bold text-background transition-opacity duration-300 [writing-mode:vertical-rl] md:block',
                    isActive ? 'opacity-0' : 'opacity-100',
                  )}
                >
                  {project.title}
                </span>

                <div
                  className={cn(
                    'absolute inset-x-3 bottom-3 flex items-end justify-between gap-4 rounded-xl border border-background/40 bg-background/75 p-4 backdrop-blur-md transition-all duration-500 md:inset-x-4 md:bottom-4 md:p-5',
                    isActive
                      ? 'translate-y-0 opacity-100 md:delay-200'
                      : 'md:pointer-events-none md:translate-y-4 md:opacity-0',
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
              </a>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
