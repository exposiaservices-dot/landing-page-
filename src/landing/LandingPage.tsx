/**
 * Landing — the Exposia marketing page: an introductory landing page for a
 * studio specialized in presentation design.
 * Aurora / northern-lights aesthetic over deep midnight navy: layered light
 * ribbons, glass panels, glowing CTAs, a floating tilted deck mockup, and a
 * cinematic landscape finale. Composed from focused components in `src/landing/`.
 *
 * CTA wiring: all "ابدأ مشروعك" / "اطلب عرض سعر" actions resolve to the
 * contact section (#contact) or the contact mailto — the page is fully
 * static with no backend.
 */
import { AuroraBackground } from './AuroraBackground'
import { FinalCTA } from './FinalCTA'
import { Footer } from './Footer'
import { Header } from './Header'
import { Hero } from './Hero'
import { ProcessSection } from './ProcessSection'
import { ServicesStrip } from './ServicesStrip'
import { WhyUs } from './WhyUs'
import { WorkShowcase } from './WorkShowcase'
import './landing.css'

export function LandingPage() {
  return (
    <div id="top" className="slf-root relative min-h-full overflow-x-clip">
      <AuroraBackground />

      <Header />

      <main className="relative z-10">
        <Hero />
        <ServicesStrip />
        <WorkShowcase />
        <ProcessSection />
        <WhyUs />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}
