import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, ClipboardCheck, Calculator, Wrench, ShieldCheck } from 'lucide-react'
import { Reveal } from './Reveal'

const FEATURES = [
  {
    icon: Sparkles,
    href: "/expertise/design-optimization",
    title: 'Design & Optimization',
    desc: 'Custom design and performance optimization for maximum efficiency.',
  },
  {
    icon: ClipboardCheck,
    href: "/expertise/technical-audits",
    title: 'Technical Audits',
    desc: 'On-site & remote audits for energy flow and utility optimization.',
  },
  {
    icon: Calculator,
    href: "/expertise/process-calculations",
    title: 'Process Calculations',
    desc: 'Thermal design, heat balance, and equipment sizing support.',
  },
  {
    icon: Wrench,
    href: "/expertise/troubleshooting",
    title: 'Troubleshooting',
    desc: 'Resolve scaling, foaming, and recovery concerns fast.',
  },
]

export function Expertise() {
  return (
    <section id="expertise" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Grid Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
                <img
                  src="/expertise.png"
                  alt="Stainless steel heat exchanger and process piping"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-6 left-6 rounded-2xl border border-border bg-card/90 p-5 shadow-xl backdrop-blur-md"
              >
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="mt-1 max-w-[10rem] text-xs leading-snug text-muted-foreground">
                  Plant-focused, applied process engineering
                </p>
              </motion.div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                Our expertise
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Applied process knowledge, from concept to commissioning
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                We bridge practical plant-level knowledge with advanced process
                engineering — aligning system design with real operational
                requirements to boost throughput, energy efficiency and reliable
                performance.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={i}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <Link 
                      to={f.href} 
                      className="group flex h-full gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50 cursor-pointer"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary transition-transform group-hover:scale-110">
                        <f.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-card-foreground">
                          {f.title}
                        </h3>
                        <p className="mt-1 text-sm leading-snug text-muted-foreground">
                          {f.desc}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Comprehensive Applied Engineering Analytical Text Section */}
        <Reveal delay={3}>
          <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 space-y-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-primary h-6 w-6 shrink-0" />
              <h3 className="text-xl font-bold text-card-foreground tracking-tight">
                Rigorous Thermodynamic Sizing & Operational Compliance
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-sm text-muted-foreground leading-relaxed text-justify">
              <p>
                At Thermovap Engineering, our design methodology is deeply rooted in rigorous mathematical models and applied chemical physics. We look beyond generic configurations to perform explicit mass and energy balance evaluations tailored specifically to the unique properties of your process fluid. By accounting for complex variable shifts—such as non-linear boiling point elevations (BPE), fluid shear dependencies, and high temperature gradients—we deliver blueprints that maximize primary utility cycles. This meticulous attention to engineering metrics prevents early fouling risks, addresses column foaming, and eliminates system shortfalls that routinely plague standard designs.
              </p>
              <p>
                Our specialized field troubleshooting parameters bridge the gap between initial concept metrics and continuous on-site plant operations. We work in close alignment with chemical producers, food processors, and original equipment manufacturers (OEMs) to analyze existing machinery layouts, execute detailed energy stream audits, and resolve operational bottlenecks. Whether we are optimizing a multi-effect falling film layout, reducing the specific fuel requirements of a continuous convective spray dryer chamber, or implementing zero liquid discharge water recovery loops, our mission remains the same: transforming complex thermal liabilities into reliable, high-performing, and sustainable industrial assets.
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}