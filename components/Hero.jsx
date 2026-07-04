import { motion } from 'motion/react'
import { AlarmSmoke, ArrowRight, CloudRain, Cog, Droplets, Fan, Gauge, Hourglass, Recycle, WavesHorizontal, Wrench } from 'lucide-react'

const STATS = [
  { value: '15+', label: 'Years of field expertise' },
  { value: '80+', label: 'Services delivered' },
  { value: '30%', label: 'Avg. energy savings' },
]

const FLOATS = [
  { icon: Droplets, href: '#evapor', label: 'Multiple Effect Evaporators', className: 'left-[70%] top-[05%]' },
  { icon: Hourglass, href: '#audits', label: 'Technical Audits & Troubleshooting', className: 'left-[70%] top-[75%]' },
  { icon: CloudRain, href: '#spray', label: 'Spray Dryer', className: 'left-[70%] top-[25%]' },
  { icon: WavesHorizontal, href: '#fluid', label: 'Fluid Bed Dryer', className: 'left-[70%] top-[35%]' },
  { icon: Cog, href: '#atfd', label: 'Agittated Thin Film Dryer (ATFD/VTFD)', className: 'left-[70%] top-[45%]' },
  { icon: Fan, href: '#spin', label: 'Spin Flash Dryer', className: 'left-[70%] top-[55%]' },
  { icon: AlarmSmoke, href: '#multi', label: 'Multi Stage Drying', className: 'left-[70%] top-[65%]' },
  { icon: Recycle, href: '#zld', label: 'Zero Liquid Discharge (ZLD)', className: 'left-[70%] top-[15%]' },
  { icon: Gauge, href: '#optimization', label: 'Process Optimization', className: 'left-[70%] top-[86%]' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 lg:pt-40 lg:pb-24"
    >
      {/* animated ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.15, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-primary/20 blur-[120px]"
        />
        <motion.div
          animate={{ opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-15%] left-[-10%] h-[460px] w-[460px] rounded-full bg-primary/10 blur-[120px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Process Engineering &amp; Superior consultancing
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Designing high-efficiency
            <span className="text-primary"> thermal evaporation</span> for a
            modern manufacturing
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Engineering smarter, high-efficiency thermal systems tailored for modern industrial processes. We specialize in delivering precision thermal designs that optimize heat and mass transfer operations.By maximizing energy recovery in complex evaporation, drying, and ZLD systems, we significantly reduce plant utility costs.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-bold text-foreground sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border sm:aspect-[4/4.2]">
            <img
              src="/hero-plant.png"
              alt="Industrial stainless steel evaporation plant"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>

          {FLOATS.map((f, i) => (
            <motion.a
              key={f.label}
              href={f.href || '#'}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { delay: 0.6 + i * 0.2, duration: 0.5 },
                y: {
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.4,
                },
              }}
              // UPDATED CLASSNAME BELOW WITH HOVER SCALE AND TRANSITION EFFECTS
              className={`absolute z-10 flex items-center gap-2 rounded-xl border border-border bg-card/80 px-3 py-2 shadow-lg backdrop-blur-md cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:bg-secondary hover:border-primary/50 hover:shadow-xl ${f.className}`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <f.icon className="h-4 w-4" />
              </span>
              <span className="text-xs font-semibold text-foreground">
                {f.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
