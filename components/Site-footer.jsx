import { Flame } from 'lucide-react'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground">
                <img src="/Logo.jpg" className=" h-10 w-10 border rounded-xl"/>
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-sm font-bold tracking-widest text-foreground">
                  THERMOVAP
                </span>
                <span className="text-[10px] font-medium tracking-[0.3em] text-muted-foreground">
                  ENGINEERING
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Your trusted partner for thermal systems, evaporation, heat
              transfer and process optimization with industry-focused
              engineering support.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Get in Touch</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>+91 92172 27372</li>
              <li>thermovapengineering@gmail.com</li>
              <li>Thermal Engineering &amp; Design Company</li>
              <li>Faridabad, Haryana</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Thermovap Engineering. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Engineered for efficiency, reliability &amp; sustainability.
          </p>
        </div>
      </div>
    </footer>
  )
}
