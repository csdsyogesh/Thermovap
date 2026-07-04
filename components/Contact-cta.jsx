import { motion } from 'motion/react'
import { Phone, Mail, MapPin, ArrowRight, Send, Target } from 'lucide-react'
import { Reveal } from './Reveal'


const CONTACTS = [
  { icon: Phone, label: 'Call us', value: '+91 92172 27372', href: 'tel:+919217227372' },
  {
    icon: Mail,
    label: 'Email us',
    value: 'thermovapengineering@gmail.com',
    href: 'mailto:thermovapengineering@gmail.com',
  },
  {
    icon: Send,
    label: 'LinkedIn',
    target: "_blank",
    value: 'Thermovap Engineering',
    href: 'https://www.linkedin.com/company/thermovap-engineering/',
  },
  { icon: MapPin, label: 'Location', value: 'Faridabad, Haryana', href: '#' },
]

export function ContactCTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 sm:p-12 lg:p-16">
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-[100px]"
            />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Let&apos;s engineer your next{' '}
                  <span className="text-primary">thermal system</span>
                </h2>
                <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                  Tell us about your process challenge — evaporation, drying,
                  ZLD or heat transfer. We&apos;ll get back with a practical,
                  cost-effective approach.
                </p>
                <a
                  href="tel:+919217227372"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  Start a conversation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="grid gap-4">
                {CONTACTS.map((c, i) => (
                  <Reveal key={c.label} delay={i}>
                    <a
                      href={c.href}
                      target={c.target}
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-background/50 p-5 transition-colors hover:border-primary/50"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary transition-transform group-hover:scale-110">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                          {c.label}
                        </span>
                        <span className="text-sm font-semibold text-foreground sm:text-base">
                          {c.value}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
