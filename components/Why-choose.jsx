import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'
import { Reveal } from './reveal'

const REASONS = [
  'Strong field experience in Thermal Design and  heat & mass transfer',
  'Practical, plant-focused engineering solutions',
  'Fast turnaround for design and troubleshooting',
  'Cost-effective solutions for OEMs and end users',
]

const MARQUEE = [
  'Falling Film Evaporators',
  'MVR Systems',
  'Spray Dryers',
  'Crystallizers',
  'Heat Exchangers',
  'Brine Concentration',
  'ATFD',
  'Process Vessels',
]

export function WhyChoose() {
  return (
    <section id="why" className="relative overflow-hidden py-20 sm:py-28">
      {/* marquee */}
      <div className="relative flex overflow-hidden border-y border-border py-5">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="flex shrink-0 items-center gap-10 pr-10"
        >
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span
              key={i}
              className="flex items-center gap-10 whitespace-nowrap text-lg font-semibold text-muted-foreground/60"
            >
              {m}
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <Reveal>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Why Thermovap
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              A reliable engineering partner for complex process environments
            </h2>
          </Reveal>
        </div>

        <ul className="grid gap-4">
          {REASONS.map((r, i) => (
            <Reveal key={r} delay={i}>
              <li className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                <span className="text-sm font-medium text-card-foreground sm:text-base">
                  {r}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
