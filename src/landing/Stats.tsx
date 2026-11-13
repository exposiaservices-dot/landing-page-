/**
 * Stats — one premium glass strip with thin dividers, white bold values
 * and muted labels — Exposia's delivered work at a glance.
 */
const STATS = [
  { value: '+250', label: 'مشروع مُسلَّم' },
  { value: '+120', label: 'عميل ومؤسسة' },
  { value: '98%', label: 'رضا العملاء' },
  { value: '+8', label: 'سنوات خبرة' },
]

export function Stats() {
  return (
    <div className="slf-glass relative mt-10 overflow-hidden rounded-2xl">
      <div className="relative grid grid-cols-2 sm:grid-cols-4">
        {STATS.map(({ value, label }, i) => (
          <div
            key={label}
            className={[
              'flex flex-col items-center gap-1.5 border-white/10 px-3 py-6 text-center',
              i % 2 === 1 ? 'max-sm:border-s' : '',
              i >= 2 ? 'max-sm:border-t' : '',
              i > 0 ? 'sm:border-s' : '',
            ].join(' ')}
          >
            <span className="slf-display-en text-[26px] font-extrabold leading-none tracking-tight text-white md:text-[30px]">
              {value}
            </span>
            <span className="text-[11.5px] text-[#b593cb]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
