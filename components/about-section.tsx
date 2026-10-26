const steps = [
  {
    step: '01',
    title: 'Research',
    body: '인터뷰, 설문, 행동 데이터로 사용자가 실제로 겪는 문제를 찾아냅니다.',
  },
  {
    step: '02',
    title: 'Design',
    body: '가설을 빠르게 프로토타입으로 만들고, 시스템 단위로 일관성을 설계합니다.',
  },
  {
    step: '03',
    title: 'Measure',
    body: '출시 이후의 지표를 추적하며 다음 개선의 근거를 만듭니다.',
  },
]

const experience = [
  { period: '2024 — Now', company: 'Studio Clear', role: 'Lead Product Designer' },
  { period: '2022 — 2024', company: 'Pulse Research', role: 'Product Designer' },
  { period: '2021 — 2022', company: 'Tripline Labs', role: 'UI Designer' },
]

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20 border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-sm font-semibold text-accent">About</p>
          <h2 id="about-title" className="mt-3 text-balance text-3xl tracking-tight md:text-5xl">
            <span className="font-extrabold">Clarity</span>
            <span className="font-light text-muted-foreground"> over decoration.</span>
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-foreground/80">
            보기 좋은 화면보다 이해하기 쉬운 화면을 먼저 생각합니다. 스포츠, 여행, 데이터처럼 서로 다른 도메인에서도
            사용자가 다음에 무엇을 해야 할지 망설이지 않는 경험을 만드는 것이 목표입니다.
          </p>

          <ul className="mt-10 divide-y divide-border border-y border-border">
            {experience.map((item) => (
              <li key={item.company} className="grid grid-cols-[110px_1fr] gap-4 py-4 text-sm">
                <span className="tabular-nums text-muted-foreground">{item.period}</span>
                <span>
                  <span className="font-semibold">{item.company}</span>
                  <span className="font-light text-muted-foreground"> · {item.role}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ol className="grid gap-4 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-1">
          {steps.map((item) => (
            <li
              key={item.step}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 lg:flex-row lg:items-center lg:gap-10 lg:p-8"
            >
              <span className="text-sm font-bold tabular-nums text-accent">{item.step}</span>
              <h3 className="text-2xl font-extrabold tracking-tight lg:w-40 lg:shrink-0">{item.title}</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
