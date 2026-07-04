import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Droplet, 
  Wind, 
  ShieldAlert, 
  Settings, 
  FileDown, 
  CheckCircle2,
  Mail,
  Phone,
  Layers,
  Thermometer
} from 'lucide-react';
import { Reveal } from './Reveal';

const CORE_SERVICES = [
  {
    icon: Droplet,
    title: 'Evaporation Systems & Recompression Technologies',
    id: 'evapor',
    href: '/services/evaporation-systems',
    highlights: [
      'Multiple Effect Evaporators (MEE) thermal calculations',
      'Falling Film, Forced Circulation, & Custom Loop Design',
      'TVR & MVR Vapor Recompression integration physics',
      'High-Density Caustic Recovery & Concentration Units'
    ],
    desc: 'Thermal engineering of multi-stage evaporators-tailored to the rheological behavior and boiling point elevation (BPE) profiles of industrial liquids. We construct advanced mass and energy balances that balance multi-effect configurations to extract maximum thermal work from primary steam. By integrated high-efficiency Thermal Vapor Recompressors (TVR) or Mechanical Vapor Recompressors (MVR), our layouts capture and recompress low-pressure boiling vapors, recycling the latent heat back into the calendriaa shell. This approach optimizes the overall heat transfer coefficient, drastically driving down Specific Steam Consumption (SSC) while keeping product exposure temperatures within safe limits.'
  },
  {
    icon: ShieldAlert,
    title: 'Zero Liquid Discharge (ZLD) Infrastructure',
    id: 'zld',
    href: '/services/zld-solutions',
    highlights: [
      'Integrated Evaporator + Driven Crystallizer Systems',
      'High-Corrosion Brine Concentration Loop Sizing',
      'Low-Conductivity High-Purity Distillate Water Recovery',
      'Systemic MEE/ZLD Bottleneck Analysis & Revamp Sizing'
    ],
    desc: 'Comprehensive environmental process packages engineered to completely close industrial wastewater loops, helping plants achieve total compliance with strict regulatory frameworks. Our systems take heavily concentrated, high-Total Dissolved Solids (TDS) industrial reject streams and run them through high-pressure brine concentrators linked directly with forced circulation crystallizers. By maintaining high boundary-layer velocities and controlling hydrostatic heads, we suppress boiling inside the tubes and force salt precipitation to occur cleanly inside the separation flash vessel. This prevents scale deposition from taking root, recovers crystal salts via centrifuging, and yields clean water for reuse.'
  },
  {
    icon: Wind, // Assuming Wind or a similar icon from lucide-react
    title: 'Industrial Spray Drying & Atomization Engineering',
    id: 'spray',
    href: '/services/spray-dryers',
    highlights: [
      'Co-Current & Counter-Current chamber configuration modeling',
      'Nozzle & Rotary Disk Atomizer micro-profiling',
      'Detailed Psychrometric Enthalpy balances & RH boundary limits',
      'High-efficiency Cyclone & Pulse-Jet Fabric Bag filter layouts'
    ],
    desc: 'Precise thermal and convective heat and mass transfer calculations of Spray dryers designed to transform low-viscosity liquid feeds into free-flowing, stable engineered powders. We establish rigorous psychrometric balances to chart exact hot-air input vectors against precise exhaust air relative humidity parameters, eliminating chamber wall pasting, moisture entrapment, and product degradation. Our structural blueprints customize atomization parameters—optimizing droplet surface-to-volume distribution ratios—while integrating high-efficiency multi-cyclone separators and sanitary bag collectors to maximize total product recovery and fulfill strict particulate emission guidelines.'
  },
  {
    icon: Wind, // Uses the Wind icon, or substitute with another relevant Lucide icon like Layers
    title: 'Fluid Bed Drying (FBD) & Processing Units',
    id: 'fluid',
    href: '/services/fluid-bed-dryers',
    highlights: [
      'Precise distribution grid plate pressure-drop ($\Delta P$) tuning',
      'Minimum fluidization velocity ($U_{mf}$) hydrodynamic sizing',
      'Continuous vibrating & multi-zone temperature processing',
    ],
    desc: 'Thermal design of fluid bed dryers engineered to achieve highly uniform moisture reduction across crystalline solids, granular materials, and heat-sensitive particulate matrices. We calculate precise fluidization dynamics to establish steady hydro-dynamic boundaries, ensuring gas velocities remain consistently above the minimum fluidization threshold  without triggering unwanted material entrainment or terminal channel bypassing. Our structural configurations feature multi-zone temperature grids, allowing for distinct heating, soaking, and ambient cooling cycles within a single continuous system, while custom-perforated gas distribution plates ensure uniform air distribution to eliminate localized hot spots and material scorching.'
  },
  {
    icon: Layers, // Assuming Layers or similar icon
    title: 'Agitated Thin Film Dryers (ATFD / VTFD)',
    id: 'atfd',
    href: '/services/atfd-systems',
    highlights: [
      'High-Viscosity & High-Solid concentration thermal loops',
      'Dynamic Rotor Blade clearance & thin-film turbulence sizing',
      'Continuous single-pass crystallization & paste processing',
      'Vacuum-assisted processing for extreme heat-sensitive materials'
    ],
    desc: 'Rigorous engineering of conductive thin-film thermal ATFD units tailored explicitly for highly viscous, sticky, heat-sensitive, or fouling-prone fluids. By computing precise mechanical clearances for high-speed dynamic rotor assemblies, our configurations maintain an intensely turbulent, continuously renewed boundary layer along the jacketed heating wall. This aggressive mechanical agitation suppresses the severe thermal resistance typically caused by product scaling, forcing rapid single-pass evaporation and crystallization that drives incoming slurry feeds down to bone-dry solids while minimizing overall residence time.'
  },
  {
    icon: Thermometer, // Assuming Thermometer or similar icon
    title: 'Spin Flash Drying Systems for Cohesive Cakes',
    id: 'spin',
    href: '/services/spin-flash-dryers',
    highlights: [
      'High-shear mechanical disintegration of dense filter cakes',
      'Vortex-induced convective heat transfer calculations',
      'Continuous pressure-drop and fluidization velocity optimization'
    ],
    desc: 'Advanced thermodynamic sizing of high-throughput convective thermal drying chamber designed to continuously process highly cohesive filter cakes, thick pastes, and high-density sludges. Our layouts couple an aggressive bottom-driven mechanical agitator with high-velocity tangential hot air streams to induce a severe, high-shear swirling fluidization zone. This breakdown mechanism maximizes the exposed surface area of the damp solid matrix, achieving instant moisture flashing. An adjustable integrated internal classifier ring structurally regulates the boundary limits, automatically recycling heavier, damp particles back into the high-temperature vortex zone while allowing dry, fine powder to exit cleanly.'
  },
  {
    icon: Settings, 
    title: 'Multi-Stage Drying Infrastructure & Energy Cascading',
    id: 'multi',
    href: '/services/multi-stage-dryers',
    highlights: [
      'Integrated Fluidized Bed (FBD) & Spray Dryer combinations',
      'Multi-tier cascading thermal zone moisture profiling',
      'Aggressive energy recovery loops via exhaust air pre-heating',
      'Agglomeration physics & secondary powder structural conditioning'
    ],
    desc: 'Comprehensive structural design of complex, multi-tiered drying plants designed to achieve precise ultimate moisture content targets while significantly optimizing utility consumption profiles. By strategically combining primary spray drying chambers with secondary integrated or vibrating fluid bed systems, we split the drying curve into highly efficient distinct segments. High-velocity moisture removal occurs inside the primary co-current spray chamber, while bound internal moisture is systematically drawn out in secondary lower-temperature fluid bed zones. This cascading enthalpy structure allows for extensive air-to-air energy recovery integration, lowering specific fuel demands and enabling premium structural powder agglomeration.'
  },
  {
    icon: ShieldAlert,
    title: 'Technical Audits, Troubleshooting & Plant Optimization',
    id: 'audits',
    href: '/services/technical-auditing',
    highlights: [
      'Rigorous on-site & remote enthalpy path tracing audits',
      'Rapid tube scaling, vacuum decay, & foaming diagnostics',
      'Local mass-energy balance validation & capacity debottlenecking',
      'Comprehensive PFD/P&ID verification and upgrade blueprinting'
    ],
    desc: 'Direct, on-site engineering interventions and process optimization sweeps specifically executed across your active Multi-Effect Evaporator (MEE) networks and industrial drying systems. Instead of generalized audits, we conduct real-time enthalpy path tracing, non-condensable gas trap detection, and localized vacuum decay mapping directly on your operating lines to pinpoint the root causes of thermal efficiency losses, high specific steam consumption (SSC), and chamber wall pasting. Our highly targeted engineering deliverables supply your team with validated, priority-ranked remediation blueprints—including exact tube-sheet geometric re-alignments, optimized liquor distribution adjustments, and psychrometric mass-balance tuning—designed to completely eliminate operational bottlenecks, restore design capacities, and lower utility costs for your specific hardware assets.'},
  {
    icon: Settings,
    title: 'Process Equipment Engineering & Thermal Design',
    id: 'optimization',
    href: '/services/process-equipment',
    highlights: [
      'Rigorous Thermal Sizing & LMTD Corrections (Delta T)',
      'Metallurgy Selection (MOC) matching fluid corrosivity',
      'Advanced Geometric Pitch Tuning & Wall Thickness checks',
      'Industrial Wastewater Ion Balancing & Scaling Solutions'
    ],
    desc: 'Advanced thermodynamic optimization, thermal rating for multi-stage evaporation configurations and specialized process units. We perform rigorous mass, enthalpy, and temprature profiling across varied configurations—including Falling Film, Forced Circulation, and Rising Film evaporators—to optimize structural Overall Heat Transfer Coefficients (U-values) against boiling point elevation (BPE) limitations. By accurately computing localized vapor velocities, liquid film distributions, and pressure drops (Delta P), our designs systematically eliminate thermal bottlenecks, suppress fouling kinetics, and maximize latent heat recovery. These balancing methods are explicitly tuned to integrate state-of-the-art Thermal or Mechanical Vapor Recompression (TVR/MVR) loops, driving multi-effect steam economy to its thermodynamic limit while protecting heat-sensitive product streams.'
   }
];

const TECHNICAL_CONSULTING_DETAILED = [
  {
    title: 'Thermal Sizing & Mathematical Modeling',
    text: 'Formulating rigorous mass and energy balance grids for Multi-Effect Evaporators, Zero Liquid Discharge systems, and industrial dryers. We deliver verified data sheets defining exact surface areas (A), log mean temperature metrics, and required utility flow envelopes before fabrication.'
  },
  {
    title: 'Technical & Energy Audits (On-Site & Remote)',
    text: 'Tracing complete enthalpy flows across active plant lines to identify performance drops. We identify non-condensable gas buildup locations, trace heat loss boundaries, measure localized vacuum decay, and supply prioritized action plans to recover energy and lower fuel consumption.'
  },
  {
    title: 'Troubleshooting & Operational Stabilization',
    text: 'Providing immediate engineering support to resolve critical issues, including rapid tube scaling, foaming in vapor heads, severe tube choking, low steam economy profiles, condensate entrainment, and accelerated metal corrosion, restoring design capacities quickly.'
  },
  {
    title: 'Commissioning Support & Engineering Blueprint Generation',
    text: 'Delivering comprehensive technical documentation, including Process Flow Diagrams (PFDs), Piping & Instrumentation Diagrams (P&IDs), Equipment GA drawings, Valve List, Line List, Utility List and on-site alignment supervision to guide your asset smoothly from concept to commissioning.'
  }
];

const INDUSTRIES_DETAILED = [
  { name: 'Food & Dairy', desc: 'Low-temperature vacuum processing layouts designed to handle heat-sensitive liquids like milk, whey, and juice concentrates while fully preserving product characteristics.' },
  { name: 'Chemical & Process', desc: 'Heavy-duty concentration and separation systems built with specialized corrosion resistant materials to handle volatile compounds and aggressive chemicals safely.' },
  { name: 'Textiles & Pharma', desc: 'High-recovery thermal loops configured to treat complex chemical dye rejects and isolate active pharmaceutical compounds while maintaining pure water recycle paths.' },
  { name: 'Effluent Treatment (ETP/ZLD)', desc: 'Industrial infrastructure designed to separate pure, low-conductivity water from complex mixed-salt wastes, enabling plants to achieve zero liquid discharge.' },
  { name: 'Agro & By-products', desc: 'Value recovery extraction systems that process spent wash, corn steep liquor, and organic process side-streams into nutritious animal feed or bio-fertilizers.' },
  { name: 'Specialty Chemicals', desc: 'Custom thermal configurations engineered with flexible operating boundaries to safely handle non-Newtonian rheologies, high viscosities, and sticky materials.' }
];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-background text-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Section Header */}
        <div className="max-w-4xl">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Our Operations Matrix</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-card-foreground">
              Applied Engineering Solutions for Complex Process Infrastructure
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Thermovap Engineering bridges practical field experience with advanced thermodynamic principles. We conceptualize, calculate, and optimize industrial thermal loops, helping plants achieve stable material concentration and solid recovery outcomes across varied operating conditions.
            </p>
          </Reveal>
        </div>

        {/* 1. Core Services: Comprehensive 4-Column Text Heavy Grid */}
        <div className="grid gap-8 lg:grid-cols-1">
          {CORE_SERVICES.map((service, index) => (
            <div 
              id={service.id} 
              key={service.id || index} 
              className="scroll-mt-28"
            >
              <Reveal delay={index}>
                <div className="group rounded-3xl border border-border bg-card p-8 shadow-xs transition-colors hover:border-primary/40 grid md:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Block: Icon, Title and Long Desc */}
                  <div className="md:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                        <service.icon className="h-6 w-6" />
                      </span>
                      <h3 className="text-xl font-bold text-card-foreground tracking-tight">{service.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed text-justify">{service.desc}</p>
                  </div>

                  {/* Right Block: Sizing Highlights list & Link */}
                  <div className="md:col-span-4 h-full flex flex-col justify-between space-y-4 md:border-l md:border-border/60 md:pl-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Core Sizing Capabilities</h4>
                      <ul className="space-y-2.5">
                        {service.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start text-xs text-card-foreground/90 font-medium leading-tight">
                            <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4">
                      <Link 
                        to={service.href} 
                        className="inline-flex h-9 items-center justify-center rounded-xl border border-border bg-background px-4 text-xs font-semibold text-primary shadow-xs hover:bg-muted/50 transition-colors"
                      >
                        Explore Full Technical Specifications →
                      </Link>
                    </div>
                  </div>

                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* 2. Consulting & Technical Services (Detailed Grid Block) */}
        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-3">
            <h3 className="text-2xl font-bold text-card-foreground tracking-tight">Consulting & Field Technical Services</h3>
            <p className="text-sm text-muted-foreground mt-1">Direct engineering assessments to boost throughput, lower operating expenses, and resolve process deviations.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {TECHNICAL_CONSULTING_DETAILED.map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-2xl p-6 space-y-2">
                <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {item.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* E-Brochure Download Action Block */}
        <Reveal delay={2}>
          <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold tracking-wider uppercase">
                Updated Verification Matrix
              </div>
              <h3 className="text-lg font-bold text-card-foreground tracking-tight">Download Thermovap Engineering Capabilities Brochure</h3>
              <p className="text-xs text-muted-foreground max-w-2xl leading-relaxed">
                Access full heat-exchanger sizing parameters, multi-effect evaporation sizing metrics, and complete environmental zero liquid discharge technical blueprints directly.
              </p>
              
              {/* Confirmed Contact Rows */}
              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-1.5 pt-2 text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-primary" /> thermovapengineering@gmail.com
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-primary" /> +91 92172 27372
                </span>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <a 
                href="/Thermovap_Capabilites_Brochure.pdf" 
                download
                className="flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors w-full md:w-auto"
              >
                <FileDown className="h-4 w-4" />
                Download E-Brochure
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}