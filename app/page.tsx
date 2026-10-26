import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ProjectIndex } from '@/components/project-index'
import { WorkSection } from '@/components/work-section'
import { AboutSection } from '@/components/about-section'
import { ContactFooter } from '@/components/contact-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProjectIndex />
        <WorkSection />
        <AboutSection />
      </main>
      <ContactFooter />
    </>
  )
}
