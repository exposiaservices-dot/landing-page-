/**
 * Header — transparent floating bar over the aurora.
 * Right (RTL): glowing 4-point star + Exposia wordmark · Center: anchor
 * navigation · Left: translucent glass "تواصل معنا" pill.
 */
const NAV: { label: string; href: string }[] = [
  { label: 'الرئيسية', href: '#top' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'أعمالنا', href: '#work' },
  { label: 'كيف نعمل', href: '#process' },
]

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Exposia — الرئيسية">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 drop-shadow-[0_0_10px_rgba(139,120,255,0.9)] transition-transform duration-300 group-hover:scale-110"
            aria-hidden
          >
            <defs>
              <linearGradient id="slf-logo-star" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#8be9ff" />
                <stop offset="0.5" stopColor="#6d6dff" />
                <stop offset="1" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <path d="M12 1.5l2.7 7.8 7.8 2.7-7.8 2.7L12 22.5l-2.7-7.8-7.8-2.7 7.8-2.7z" fill="url(#slf-logo-star)" />
          </svg>
          <span className="slf-display-en text-[19px] font-bold tracking-tight text-white">Exposia</span>
        </a>

        {/* Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex" aria-label="التنقل الرئيسي">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13.5px] font-medium text-[#aab6d9] transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className="slf-btn slf-btn-pill-glass h-10 px-6 text-[13.5px]">
          تواصل معنا
        </a>
      </div>
    </header>
  )
}
