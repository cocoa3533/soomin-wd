import { ArrowDown } from 'lucide-react'

const stats = [
  { value: '06', label: 'Selected projects' },
  { value: '5+', label: 'Years of practice' },
  { value: '2.4M', label: 'Users reached' },
]

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-44">
      <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        2026년 새로운 프로젝트 협업 가능
      </div>

      <h1 className="mt-8 max-w-5xl text-balance text-[2.6rem] leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
        <span className="font-light text-muted-foreground">복잡한 문제를 </span>
        <span className="font-extrabold">명료한 경험</span>
        <span className="font-light text-muted-foreground">으로 </span>
        <span className="font-extrabold">디자인합니다.</span>
      </h1>

      <div className="mt-12 grid gap-10 border-t border-border pt-8 md:mt-20 md:grid-cols-12">
        <p className="text-pretty text-base leading-relaxed text-muted-foreground md:col-span-5 md:text-lg">
          <strong className="font-semibold text-foreground">프로덕트 디자이너 SOOMIN</strong>입니다. 리서치에서
          출발해 데이터로 검증하고, 사람이 오래 머무는 인터페이스를 만듭니다.
        </p>

        <dl className="grid grid-cols-3 gap-4 md:col-span-6 md:col-start-7">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <dt className="order-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="order-1 text-3xl font-bold tabular-nums tracking-tight md:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#index"
        className="mt-14 inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-accent"
      >
        목차 보기
        <ArrowDown className="size-4" aria-hidden="true" />
      </a>
    </section>
  )
}
