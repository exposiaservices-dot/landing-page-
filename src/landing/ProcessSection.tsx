/**
 * ProcessSection — how Exposia works.
 * Right: "منهجية واضحة… ونتيجة تُقنع" + paragraph with a gradient phrase,
 * four step chips in one row (تحليل المحتوى / بناء الحكاية / التصميم
 * البصري / المراجعة والتسليم) and a "تواصل معنا لمناقشة مشروعك" link.
 * Left: floating composition — aurora image cards with an "A+" glass badge
 * and a project brief card ("Start a Project", نوع المشروع / عدد الشرائح /
 * الأسلوب البصري، زر «اطلب عرض سعر») tilted over a violet bloom.
 */
import { ArrowLeft, ChevronDown, ClipboardCheck, ListChecks, Palette, PenLine, Sparkles, X } from 'lucide-react'
import { AuroraScene } from './AuroraScene'
import { Reveal } from './Reveal'

const STEPS = [
  { icon: ListChecks, title: 'تحليل المحتوى' },
  { icon: PenLine, title: 'بناء الحكاية' },
  { icon: Palette, title: 'التصميم البصري' },
  { icon: ClipboardCheck, title: 'المراجعة والتسليم' },
]

export function ProcessSection() {
  return (
    <section id="process" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-20 md:py-24">
      {/* dramatic violet field */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="slf-glow"
          style={{ top: '0%', left: '6%', width: '52%', height: '90%', background: 'radial-gradient(closest-side, rgba(213,92,252,0.28), transparent)' }}
        />
        <div
          className="slf-glow"
          style={{ bottom: '-6%', right: '4%', width: '38%', height: '70%', background: 'radial-gradient(closest-side, rgba(249,121,234,0.14), transparent)', animationDelay: '-8s' }}
        />
      </div>

      <div className="relative grid items-center gap-16 lg:grid-cols-2 lg:gap-10 xl:gap-14">
        {/* ---- headline + steps (right in RTL) ---- */}
        <Reveal className="lg:order-1">
          <h2 className="slf-display text-[28px] font-extrabold leading-snug text-white md:text-[34px]">
            منهجية واضحة… ونتيجة تُقنع
          </h2>
          <p className="mt-4 max-w-lg text-[14.5px] leading-8 text-[#b593cb] md:text-[15.5px]">
            من فهم رسالتك إلى الشريحة الأخيرة — نعمل بمسار واضح يجمع بين الاستراتيجية والسرد القصصي
            والتصميم، <span className="slf-grad-soft font-semibold">لتصل إلى جمهورك بالشكل الذي تستحقه</span>.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STEPS.map(({ icon: Icon, title }, i) => (
              <Reveal key={title} delay={`${i * 80}ms`} className="h-full">
                <div className="flex h-full items-center gap-2.5 rounded-xl border border-white/8 bg-white/[0.04] px-3 py-2.5">
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/12 bg-white/[0.05]"
                    style={{ boxShadow: '0 0 16px -6px rgba(217,92,246,0.8), inset 0 1px 0 rgba(255,255,255,0.1)' }}
                  >
                    <Icon className="h-4 w-4 text-[#ebc5f6]" strokeWidth={2} aria-hidden />
                  </span>
                  <span className="text-[11.5px] font-semibold leading-5 text-[#f0e0fa]">{title}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <a href="#contact" className="mt-9 inline-flex items-center gap-2 text-[13px] font-medium text-[#b593cb] transition-colors hover:text-white">
            تواصل معنا لمناقشة مشروعك
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
          </a>
        </Reveal>

        {/* ---- floating visual + brief card (left in RTL) ---- */}
        <Reveal delay="140ms" className="lg:order-2">
          <div className="relative mx-auto w-full max-w-[600px]">
            <div
              aria-hidden
              className="slf-glow"
              style={{ top: '4%', left: '8%', width: '72%', height: '92%', background: 'radial-gradient(closest-side, rgba(217,92,246,0.4), transparent)', filter: 'blur(60px)' }}
            />

            <div dir="ltr" className="relative flex items-center justify-center">
              {/* small aurora card — far left */}
              <div aria-hidden className="slf-glass z-0 hidden w-[96px] -rotate-6 rounded-xl p-1.5 sm:block md:-me-6 md:mt-20">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <AuroraScene variant="blue" />
                </div>
              </div>

              {/* big aurora card + A+ badge */}
              <div className="relative z-10 -rotate-3">
                <div className="slf-glass w-[186px] rounded-2xl p-2 md:w-[210px]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                    <AuroraScene variant="pink" />
                  </div>
                </div>
                <div
                  aria-hidden
                  className="slf-glass absolute -right-9 -top-8 grid h-14 w-14 rotate-6 place-items-center rounded-2xl"
                  style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 0 34px -6px rgba(217,92,246,0.9)' }}
                >
                  <span className="slf-display-en relative text-[19px] font-extrabold text-white">
                    A+
                    <Sparkles className="absolute -left-2.5 -top-2 h-3.5 w-3.5 text-[#ebc5f6]" />
                  </span>
                </div>
              </div>

              {/* project brief card */}
              <div dir="rtl" className="slf-glass relative z-20 ms-4 w-[272px] shrink-0 rotate-[1.5deg] rounded-2xl p-4 md:ms-5">
                <span
                  dir="ltr"
                  className="absolute -top-3.5 end-4 flex items-center gap-1.5 rounded-full border border-[#d48eff]/40 bg-[#2f1440] px-3 py-1 text-[10.5px] font-semibold text-[#ead6f8]"
                  style={{ boxShadow: '0 0 22px -6px rgba(193,99,255,0.9)' }}
                >
                  <Sparkles className="h-3 w-3 text-[#d99dff]" aria-hidden />
                  Start a Project
                </span>

                <div className="mt-1.5 space-y-3">
                  <div className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-[#1d0a2a]/70 px-3 py-2.5">
                    <span className="text-[11.5px] text-[#d9c8e5]">أخبرنا عن مشروعك وفكرتك</span>
                    <X className="h-3.5 w-3.5 shrink-0 text-[#af8dc6]" aria-hidden />
                  </div>
                  <FormRow label="نوع المشروع" value="عرض استثماري" />
                  <FormRow label="عدد الشرائح" value="12" />
                  <FormRow label="الأسلوب البصري" value="عصري هادئ" />
                  <a href="#contact" className="slf-btn slf-btn-primary mt-1 block h-11 w-full text-center text-[14px] leading-[44px]">
                    اطلب عرض سعر
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function FormRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-[11.5px] text-[#af8dc6]">{label}</span>
      <span className="flex items-center gap-1.5 rounded-lg border border-white/12 bg-white/[0.06] px-2.5 py-1.5 text-[11.5px] font-medium text-[#f0e0fa]">
        {value}
        <ChevronDown className="h-3 w-3 text-[#af8dc6]" aria-hidden />
      </span>
    </div>
  )
}
