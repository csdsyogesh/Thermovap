import { 
  Milk, Vegan, FlaskConical, Shirt, Pill, ScrollText, GlassWater, Leaf,
  Cpu, Activity, Zap, Layers, RefreshCw, Wind, Flame, MoveRight, HelpCircle,
  Sparkles, ClipboardCheck, Calculator, Wrench, Droplet, ShieldAlert, Settings, Thermometer
} from 'lucide-react';

export const BLOG_POSTS = [
  // ==========================================
  // 🌟 1. INDUSTRIES PAGES SECTION
  // ==========================================
  {
    id: 'food-dairy-industry',
    category: 'Industries',
    title: 'Food & Dairy Processing Infrastructure',
    desc: 'Deep vacuum, low-temperature thermal profiles engineered to prevent protein denaturation and Maillard reactions in milk and whey lines.',
    icon: Milk,
    href: '/thermindust/food-dairy'
  },
  {
    id: 'herbal-catechu-industry',
    category: 'Industries',
    title: 'Herbal, Extraction & Catechu Matrix',
    desc: 'Preserving active biochemical botanical structures using high-vacuum forced circulation loops and solvent recovery columns.',
    icon: Vegan,
    href: '/thermindust/herbal-catechu'
  },
  {
    id: 'chemical-process-industry',
    category: 'Industries',
    title: 'Chemical & Process Industry Systems',
    desc: 'Heavy-duty concentration installations built with specialized anti-corrosion MOC to manage aggressive acids and high-TDS lines.',
    icon: FlaskConical,
    href: '/thermindust/chemical-process'
  },
  {
    id: 'textiles-dyeing-industry',
    category: 'Industries',
    title: 'Textiles & Dyeing Infrastructure Layouts',
    desc: 'Advanced environmental loops built to isolate high-TDS salts and achieve zero liquid discharge boundary targets.',
    icon: Shirt,
    href: '/thermindust/textiles-dyeing'
  },
  {
    id: 'pharma-biotech-industry',
    category: 'Industries',
    title: 'Pharmaceuticals & Biotech Configurations',
    desc: 'Sanitary cGMP electro-polished networks optimized for continuous crystallization and high-purity water reclamation.',
    icon: Pill,
    href: '/thermindust/pharma-biotech'
  },
  {
    id: 'pulp-paper-industry',
    category: 'Industries',
    title: 'Pulp & Paper Mill Effluent Systems',
    desc: 'High-efficiency multiple-effect black liquor concentration layouts optimized to overcome exponential viscosity steps.',
    icon: ScrollText,
    href: '/thermindust/pulp-paper'
  },
  {
    id: 'water-treatment-industry',
    category: 'Industries',
    title: 'Industrial Water Treatment (ETP/STP)',
    desc: 'Advanced thermal brine concentrators designed to achieve 95% clean distillate water reclamation from RO reject lines.',
    icon: GlassWater,
    href: '/thermindust/water-treatment'
  },
  {
    id: 'agro-distilleries-industry',
    category: 'Industries',
    title: 'Agro, Distilleries & By-products Recovery',
    desc: 'Cascading evaporators designed to process spent wash and slops into commercial animal feed or bio-fertilizers.',
    icon: Leaf,
    href: '/thermindust/agro-distilleries'
  },

  // ==========================================
  // 🌟 2. EXPERTISE CORE SERVICES SECTION
  // ==========================================
  {
    id: 'expertise-design-optimization',
    category: 'Expertise',
    title: 'Design & Performance Optimization',
    desc: 'Custom thermal design and operational performance adjustments executed to unlock maximum equipment thermodynamic output.',
    icon: Sparkles,
    href: '/expertise/design-optimization'
  },
  {
    id: 'expertise-technical-audits',
    category: 'Expertise',
    title: 'Technical Energy Audits',
    desc: 'Comprehensive on-site and remote audits analyzing plant energy flows, non-condensable accumulations, and utility balances.',
    icon: ClipboardCheck,
    href: '/expertise/technical-audits'
  },
  {
    id: 'expertise-process-calculations',
    category: 'Expertise',
    title: 'Process Calculations & Structural Sizing',
    desc: 'Rigorous thermal modeling, precise heat balances, and chemical processing equipment structural sizing support.',
    icon: Calculator,
    href: '/expertise/process-calculations'
  },
  {
    id: 'expertise-troubleshooting',
    category: 'Expertise',
    title: 'Industrial Process Troubleshooting',
    desc: 'Rapid engineering intervention methods to resolve severe tube scaling, vacuum decay, and foaming concerns inside operating plants.',
    icon: Wrench,
    href: '/expertise/troubleshooting'
  },

  // ==========================================
  // 🌟 3. PROJECT & HARDWARE SECTION
  // ==========================================
  {
    id: 'falling-film-project',
    category: 'Equipment',
    title: 'Falling Film Evaporator Principles',
    desc: 'Working mechanisms and heat-flux parameters behind low-residence vertical gravity climbing-film calendria bundles.',
    icon: Layers,
    href: '/thermproject/falling'
  },
  {
    id: 'forced-circulation-project',
    category: 'Equipment',
    title: 'Forced Circulation Evaporator Networks',
    desc: 'Boiling suppression mechanics using high-velocity axial loops to control hard mineral scale accumulation in fouling lines.',
    icon: Activity,
    href: '/thermproject/forced'
  },
  {
    id: 'rising-film-project',
    category: 'Equipment',
    title: 'Rising Film Evaporator Adaptations',
    desc: 'Natural thermo-siphon climbing-film evaporation processes designed to mitigate foaming tendencies and manage dilute liquids.',
    icon: RefreshCw,
    href: '/thermproject/rise'
  },
  {
    id: 'scraped-surface-project',
    category: 'Equipment',
    title: 'Scraped Surface Evaporator Engineering',
    desc: 'Mechanically driven thin-film agitation methods built to handle highly cohesive, sticky, and ultra-viscous fluids.',
    icon: Cpu,
    href: '/thermproject/ssc'
  },
  {
    id: 'agitated-thin-film-project',
    category: 'Equipment',
    title: 'Agitated Thin Film Dryer (ATFD) Systems',
    desc: 'Continuous wiping blade profiles designed to transition high-TDS concentrates directly into dry powder solids in a single pass.',
    icon: Zap,
    href: '/thermproject/atfd'
  },
  {
    id: 'zld-plant-project',
    category: 'Equipment',
    title: 'Zero Liquid Discharge (ZLD) Configurations',
    desc: 'Integrated environmental wastewater processing plants configured for maximum high-purity distillate water reclamation.',
    icon: GlassWater,
    href: '/thermproject/zld'
  },
  {
    id: 'fluid-bed-dryer-project',
    category: 'Equipment',
    title: 'Fluid Bed Dryer (FBD) Systems',
    desc: 'Convective fluidization drying systems engineered to process granular food matrices and crystals uniformly.',
    icon: Wind,
    href: '/thermproject/fluid'
  },
  {
    id: 'spray-dryer-project',
    category: 'Equipment',
    title: 'Industrial Spray Drying Infrastructure',
    desc: 'High-speed rotary and pressure nozzle atomization designs engineered to turn liquid concentrates into uniform free-flowing powders.',
    icon: RefreshCw,
    href: '/thermproject/spray'
  },
  {
    id: 'multi-stage-dryer-project',
    category: 'Equipment',
    title: 'Multi Stage Dryer (MSD) Systems',
    desc: 'Advanced multi-tier drying topologies integrating atomizing loops with fluid bed floors to secure highly soluble granules.',
    icon: Layers,
    href: '/thermproject/multi'
  },
  {
    id: 'spin-flash-dryer-project',
    category: 'Equipment',
    title: 'Spin Flash Dryer Technology',
    desc: 'High-shear mechanical disintegrators and vortex hot air loops designed to dehydrate non-pumpable cake presses and dense sludges.',
    icon: Flame,
    href: '/thermproject/spin'
  },
  {
    id: 'paddle-dryer-project',
    category: 'Equipment',
    title: 'Indirect Contact Paddle Dryers',
    desc: 'Twin counter-rotating interlocking hollow shafts optimized for efficient thermal sludge volume reductions with zero air loops.',
    icon: Activity,
    href: '/thermproject/paddle'
  },
  {
    id: 'conveying-systems-project',
    category: 'Equipment',
    title: 'Industrial Conveying & Flight Systems',
    desc: 'Dust-tight enclosed screw flights and material transfer links designed to cleanly loop crystallization arrays to drying bays.',
    icon: MoveRight,
    href: '/thermproject/screw'
  },

  // ==========================================
  // 🌟 4. DETAILED SERVICES SECTION
  // ==========================================
  {
    id: 'service-evaporation-recompression',
    category: 'Expertise',
    title: 'Evaporation Systems & Recompression Technologies',
    desc: 'Thermal engineering of multi-stage evaporators configured with integrated TVR/MVR recompression architectures to lower Specific Steam Consumption.',
    icon: Droplet,
    href: '/services/evaporation-systems'
  },
  {
    id: 'service-zld-infrastructure',
    category: 'Expertise',
    title: 'Zero Liquid Discharge (ZLD) Infrastructure Packages',
    desc: 'Comprehensive process packages built to close industrial wastewater loops using high-pressure brine concentrators and crystallizers.',
    icon: ShieldAlert,
    href: '/services/zld-solutions'
  },
  {
    id: 'service-spray-drying-atomization',
    category: 'Expertise',
    title: 'Industrial Spray Drying & Atomization Engineering',
    desc: 'Precise convective heat and mass transfer calculation profiles mapping exact psychrometric charts to eliminate chamber wall pasting.',
    icon: Wind,
    href: '/services/spray-dryers'
  },
  {
    id: 'service-fluid-bed-processing',
    category: 'Expertise',
    title: 'Fluid Bed Drying (FBD) Processing Systems',
    desc: 'Thermal sizing metrics tracking minimum fluidization velocity boundaries to ensure uniform moisture reductions without entrainment shortcuts.',
    icon: Wind,
    href: '/services/fluid-bed-dryers'
  },
  {
    id: 'service-atfd-vtfd-systems',
    category: 'Expertise',
    title: 'Agitated Thin Film Dryers (ATFD / VTFD)',
    desc: 'Rigorous convective boundary sizing for dynamic rotor blade assemblies processing high-viscosity fouling slurries to bone-dry solids.',
    icon: Layers,
    href: '/services/atfd-systems'
  },
  {
    id: 'service-spin-flash-dehydration',
    category: 'Expertise',
    title: 'Spin Flash Drying Systems for Cohesive Cakes',
    desc: 'Thermodynamic optimization coupling high-shear mechanical disintegrators with tangential vortex airflow patterns to dry dense cakes.',
    icon: Thermometer,
    href: '/services/spin-flash-dryers'
  },
  {
    id: 'service-multi-stage-cascading',
    category: 'Expertise',
    title: 'Multi-Stage Drying Infrastructure & Energy Cascading',
    desc: 'Splitting the standard evaporation curve by linking primary spray drying drums to secondary lower-temperature fluid bed collectors.',
    icon: Settings,
    href: '/services/multi-stage-dryers'
  },
  {
    id: 'service-technical-audits-troubleshooting',
    category: 'Expertise',
    title: 'Technical Audits, Troubleshooting & Plant Debottlenecking',
    desc: 'Real-time enthalpy path tracing, vacuum decay mapping, and liquor distribution adjustments designed to restore hardware capacities.',
    icon: ShieldAlert,
    href: '/services/technical-auditing'
  },
  {
    id: 'service-process-equipment-thermal-design',
    category: 'Expertise',
    title: 'Process Equipment Engineering & Thermal Design',
    desc: 'Advanced Mass, Enthalpy, and Temperature profiling built to maximize structural heat transfer coefficients against BPE boundaries.',
    icon: Settings,
    href: '/services/process-equipment'
  }
];