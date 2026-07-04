import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Reveal } from './Reveal'

// All asset references are kept as standard static root strings.
// Make sure these files are sitting inside your root "/public" directory.
const PROJECTS = [
  {
    src: '/project-1.png',
    title: 'Falling Film Evaporator',
    href: '/thermproject/falling',
    tag: 'Dairy & Food | Chemical | Textiles | Pharmaceutical | Pulp & Paper | Wastewater | Herbal & Catechu',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: '/force2.webp',
    title: 'Forced Circulation Evaporator',
    href: '/thermproject/forced',
    tag: 'Chemical | Textiles | Pharmaceutical | Pulp & Paper | Wastewater',
    span: '',
  },
  {
    src: '/rise.webp',
    title: 'Rising Film Evaporator',
    href: '/thermproject/rise',
    tag: 'Dairy & Food | Chemical | Textiles | Pharmaceutical | Pulp & Paper | Wastewater | Herbal & Catechu',
    span: '',
  },
  {
    src: '/ssc.webp',
    title: 'Scraped Surface Evaporator',
    href: '/thermproject/ssc',
    tag: 'Dairy & Food | Pharmaceutical',
    span: '',
  },
  {
    src: '/ATFD-System.jpg',
    title: 'Agitated Thin Film Dryer (ATFD)',
    href: '/thermproject/atfd',
    tag: 'Chemical | Textiles | Pharmaceutical | Pulp & Paper | Wastewater',
    span: '',
  },
  {
    src: '/ZLD.webp',
    title: 'Zero Liquid Discharge Plant (ZLD)',
    href: '/thermproject/zld',
    tag: 'Chemical | Textiles | Pharmaceutical | Pulp & Paper | Wastewater',
    span: '',
  },
  {
    src: '/fluid.jpg',
    href: '/thermproject/fluid',
    title: 'Fluid Bed Dryer (FBD)',
    tag: 'Dairy & Food',
    span: '',
  },
  {
    src: '/spray.jpg',
    title: 'Spray Dryer',
    href: '/thermproject/spray',
    tag: 'Dairy & Food | Chemical | Herbal & Catechu',
    span: '',
  },
  {
    src: '/multistage.png',
    title: 'Multi Stage Dryer',
    href: '/thermproject/multi',
    tag: 'Dairy & Food | Chemical | Herbal & Catechu',
    span: '',
  },
  {
    src: '/spin.jpg',
    title: 'Spin Flash Dryer',
    href: '/thermproject/spin',
    tag: 'Wastewater | Sludge | Food',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: '/paddle.avif',
    title: 'Paddle Dryer',
    href: '/thermproject/paddle',
    tag: 'Dairy & Food | Chemical | Wastewater | Herbal & Catechu',
    span: '',
  },
  {
    src: '/screw.jpg',
    title: 'Conveying Systems',
    href: '/thermproject/screw',
    tag: 'General Industrial Equipment',
    span: '',
  },
]

// Instantiating the Link wrapper with motion.create to align with modern Framer Motion specs
const MotionLink = motion.create(Link);

export function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Component Header Block */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Reveal>
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                Projects
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Engineering services <span className='text-primary'>provided</span>, across different industries
              </h2>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <p className="max-w-sm text-sm text-muted-foreground">
              Field installations and process equipment engineered for
              throughput, energy recovery and long-term reliability.
            </p>
          </Reveal>
        </div>

        {/* Dynamic Grid Layout View */}
        <div className="mt-12 grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i}
              className={`group ${p.span}`}
            >
              <MotionLink
                to={p.href || '#'}
                whileHover={{ scale: 0.985 }}
                className="relative block h-full w-full overflow-hidden rounded-2xl border border-border cursor-pointer shadow-sm"
              >
                {/* Visual Equipment Image */}
                <img
                  src={p.src}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Dynamic Content Mask overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                
                {/* Content Overlay Layout */}
                <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col items-start gap-1.5">
                  <span className="inline-block rounded-lg border border-border bg-background/75 px-2.5 py-1 text-[10px] font-bold tracking-wide text-primary backdrop-blur-xs max-w-full line-clamp-1 text-ellipsis">
                    {p.tag}
                  </span>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                </div>
              </MotionLink>
            </Reveal>
          ))}
        </div>
        
      </div>
    </section>
  )
}