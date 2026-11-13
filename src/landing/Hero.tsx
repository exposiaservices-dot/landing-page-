/**
 * Hero — cinematic split: Arabic headline block on the right (RTL),
 * floating tilted editor mockup on the left, with an aurora ribbon
 * cascading down the edge.
 */
import { ArrowLeft } from 'lucide-react'
import { EditorMockup } from './EditorMockup'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-10 pt-32 md:pt-40 lg:pb-14 lg:pt-44">
      {/* hero-local aurora accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-visible">
        {/* ribbon cascading down the left edge */}
        <div
          className="slf-ribbon slf-ribbon-violet"
          style={{ top: '-18%', left: '-22%', width: '48%', height: '125%', rotate: '58deg', opacity: 0.65 }}
        />
        <div
          className="slf-glow"
          style={{ top: '30%', left: '-6%', width: '30%', height: 340, background: 'radial-gradient(closest-side, rgba(232,121,249,0.16), transparent)' }}
        />
      </div>

      <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-8 xl:gap-12">
        {/* ---- copy (right in RTL) ---- */}
        <Reveal className="lg:order-1">
          <h1 className="slf-display text-[42px] font-extrabold leading-[1.3] text-white sm:text-[52px] lg:text-[54px] xl:text-[58px]">
            <span className="block drop-shadow-[0_0_28px_rgba(190,210,255,0.25)]">نصنع عروضًا تقديمية</span>
            <span className="slf-grad-cyan block drop-shadow-[0_0_36px_rgba(94,180,255,0.35)]">تُقنع قبل أن تُشرح.</span>
          </h1>

          <p className="mt-6 max-w-lg text-[15.5px] leading-8 text-[#9aa7cc] md:text-[16.5px]">
            Exposia استوديو متخصص في تصميم العروض التقديمية — نحوّل أفكاركم إلى قصص بصرية مؤثرة
            للشركات والمؤسسات ورواد الأعمال.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="slf-btn slf-btn-primary h-12 px-7 text-[15px]">
              ابدأ مشروعك
              <ArrowLeft className="h-4 w-4" strokeWidth={2.4} aria-hidden />
            </a>
            <a href="#work" className="slf-btn slf-btn-glass h-12 px-7 text-[15px]">
              شاهد أعمالنا
            </a>
          </div>
        </Reveal>

        {/* ---- deck mockup (left in RTL) ---- */}
        <Reveal delay="140ms" className="lg:order-2">
          <div className="mx-auto w-full max-w-[620px] pb-8 lg:max-w-none">
            <EditorMockup />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
