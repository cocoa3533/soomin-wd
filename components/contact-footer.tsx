import { ArrowUpRight } from 'lucide-react'

const links = [
  { href: 'https://www.linkedin.com', label: 'LinkedIn' },
  { href: 'https://www.behance.net', label: 'Behance' },
  { href: 'https://www.instagram.com', label: 'Instagram' },
]

export function ContactFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <p className="text-sm font-semibold text-accent">Contact</p>
        <h2 className="mt-3 text-balance text-4xl tracking-tight md:text-7xl">
          <span className="font-light text-muted-foreground">함께 만들 </span>
          <span className="font-extrabold">다음 프로젝트</span>
          <span className="font-light text-muted-foreground">를 기다립니다.</span>
        </h2>

        <a
          href="mailto:hello@soomin.design"
          className="group mt-12 inline-flex items-center gap-3 border-b-2 border-foreground pb-2 text-2xl font-bold transition-colors hover:border-accent hover:text-accent md:text-4xl"
        >
          hello@soomin.design
          <ArrowUpRight
            className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:size-8"
            aria-hidden="true"
          />
        </a>

        <div className="mt-20 flex flex-col justify-between gap-6 border-t border-border pt-8 text-sm md:flex-row md:items-center">
          <span className="font-extrabold tracking-[0.18em]">SOOMIN</span>
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="text-muted-foreground">© 2026 SOOMIN. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
