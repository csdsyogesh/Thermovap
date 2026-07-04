import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Milk, FlaskConical, Shirt, Leaf, Vegan, Pill, GlassWater, ScrollText } from 'lucide-react'
import { Reveal } from './Reveal'

const INDUSTRIES = [
  { 
    icon: Milk, 
    href: '/thermindust/food-dairy',
    title: 'Food & Dairy Processing', 
    desc: 'Low-temperature vacuum evaporation and fallback thermal profiles designed to handle heat-sensitive liquids like milk, whey, and protein concentrates while protecting volatile product characteristics from thermal degradation.' 
  },
  { 
    icon: Vegan, 
    href: '/thermindust/herbal-catechu',
    title: 'Herbal, Extraction & Catechu', 
    desc: 'Specialized thermal concentration networks engineered to process organic extracts, plant mass liquors, and high-purity catechu solutions without compromising delicate biochemical structures or active ingredients.' 
  },
  { 
    icon: FlaskConical, 
    href: '/thermindust/chemical-process',
    title: 'Chemical & Process Industries', 
    desc: 'Heavy-duty concentration systems built with specialized corrosion-resistant alloys (MOC) to safely handle high-density volatile streams, aggressive inorganic acids, and complex mixed-chemical waste lines.' 
  },
  { 
    icon: Shirt, 
    href: '/thermindust/textiles-dyeing',
    title: 'Textiles & Dyeing Infrastructure', 
    desc: 'High-recovery thermal separation loops engineered to treat complex chemical dye rejects, recover operational solvents, and isolate high-TDS salts to achieve complete zero liquid discharge (ZLD) boundaries.' 
  },
  { 
    icon: Pill, 
    href: '/thermindust/pharma-biotech',
    title: 'Pharmaceuticals & Biotech', 
    desc: 'Sanitary-grade thermal processing configurations designed for continuous crystallization, solvent recovery, and pure water reclamation matching strict regulatory hygiene parameters and low-conductivity requirements.' 
  },
  { 
    icon: ScrollText,
    href: '/thermindust/pulp-paper', 
    title: 'Pulp & Paper Mill Effluents', 
    desc: 'High-efficiency multiple-effect black liquor concentration layouts optimized to manage extreme viscosities, maximize black liquor solids, and sustain clean evaporator tube heat-flux boundaries.' 
  },
  { 
    icon: GlassWater, 
    href: '/thermindust/water-treatment',
    title: 'Industrial Water Treatment (ETP/STP)', 
    desc: 'Advanced environmental process loops combining high-velocity brine concentrators and driven crystallizers to recover pure, low-conductivity distillate water from complex industrial wastewater rejects.' 
  },
  { 
    icon: Leaf, 
    href: '/thermindust/agro-distilleries',
    title: 'Agro, Distilleries & By-products', 
    desc: 'Value-recovery cascading systems designed to handle spent wash, distillery slops, and corn steep liquors, converting sticky organic side-streams into nutritious commercial animal feed or bio-fertilizers.' 
  },
];

const MotionLink = motion(Link);

export function Industries() {
  return (
    <section id="industries" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Sectors we serve
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Industries we serve
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.title} delay={i}>
              <MotionLink
                to={ind.href || '#'}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-border bg-card p-8 text-center cursor-pointer transition-colors hover:border-primary/30"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ind.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {ind.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{ind.desc}</p>
              </MotionLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}