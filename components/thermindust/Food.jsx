import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../SEO'; 
import { ArrowLeft, HelpCircle, CheckCircle2, Cpu, BarChart3, ShieldAlert } from 'lucide-react';

export default function Food() {
  return (
    <>
      <SEO 
        title="Food & Dairy Processing Infrastructure" 
        description="Low-temperature vacuum evaporation and fallback thermal profiles designed to concentrate milk, whey, and protein matrices without thermal degradation."
        url="/thermindust/food-dairy"
      />
      <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col justify-between">
        <div>
          {/* Header Block */}
          <header className="bg-card border-b border-border sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <span>Return to Home</span>
              </Link>
              <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Thermovap Engineering</span>
            </div>
          </header>

          {/* Hero Banner Section */}
          <section className="relative py-24 border-b border-border overflow-hidden">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
            </div>
            <div className="relative max-w-5xl mx-auto px-4 text-center">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">Specialized Industry Applications</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
                Food & Dairy Processing Infrastructure
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Low-temperature vacuum evaporation and specialized thermal configurations designed to process heat-sensitive liquids like milk, whey, and protein concentrates while fully preserving premium organoleptic properties.
              </p>
            </div>
          </section>

          {/* Main Content Body */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            
            {/* Detailed Engineering Methodology */}
            <section className="bg-card border border-border rounded-2xl p-8 lg:p-12 space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
                <Cpu className="text-primary h-6 w-6" /> Technical Implementation & Thermal Balance
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed text-justify">
                <p>
                  Processing dairy fractions and food-grade suspensions requires a strict departure from standard boiling parameters due to the highly sensitive chemical structures involved. We deploy customized multi-effect Falling Film Evaporators operating under deep vacuum boundaries to lower the absolute operating pressure, keeping process boiling temperatures safely below 55 degrees Celsius. By optimizing the design of our liquid gravity distribution plates at the top header, we establish a perfectly uniform, continuous wetting film down the inside of the tubes. This prevents dry spots, minimizes thermal residence times to mere seconds, and completely eliminates the root causes of protein denaturation, Maillard browning discoloration, and product scorching.
                </p>
                <p>
                  To achieve industry-leading energy efficiency metrics, these multi-stage evaporator layouts are tightly integrated with Mechanical Vapor Recompression (MVR) or high-efficiency Thermal Vapor Recompression (TVR) setups. By compressing and recycling the low-pressure secondary clean vapor generated from the product side, we reintroduce its latent enthalpy back into the calandria shell as the primary heating medium. This process loop maintains a highly uniform, ultra-low temperature difference (Delta-T = 4 degrees Celsius to 6 degrees Celsius) across all heat transfer boundaries. This extreme thermal precision drives down Specific Steam Consumption close to zero, allowing heavy processing plants to dramatically lower utility footprints while strictly maintaining sanitary cGMP processing profiles.
                </p>
              </div>
            </section>

            {/* Mass Balance & Fouling Control */}
            <section className="grid gap-8 lg:grid-cols-2">
              <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                  <BarChart3 className="text-primary h-5 w-5" /> Enthalpy Integration & Powder Processing
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  Downstream dehydration of high-solids concentrates requires specialized convective mass transfer control. Our multi-stage spray drying loops utilize detailed psychrometric chart calculations to establish strict boundaries for hot air inputs and exhaust relative humidity limits. By matching the atomization velocity profiles—utilizing high-speed rotary disks or specialized pressure nozzles—to the product's specific moisture binding energy, we isolate free-flowing powders with tightly controlled residual moisture targets while completely eliminating chamber wall pasting.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                  <ShieldAlert className="text-primary h-5 w-5" /> Fouling Mitigation & Rheological Modeling
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  As dairy liquids concentrate, their non-Newtonian viscosity profiles rise exponentially, significantly increasing localized Boiling Point Elevation (BPE). Our design protocols account for these shifting boundary conditions by sizing late-stage effects with enhanced liquor distribution mechanisms or auxiliary Forced Circulation finishing loops. Maintaining high fluid shear rates against the electro-polished surfaces effectively suppresses calcium phosphate scaling and organic protein fouling, allowing for extended continuous operating cycles between Clean-In-Place (CIP) sweeps.
                </p>
              </div>
            </section>

            {/* Architecture Checklist Matrix */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
                Deployed Hardware Architectures
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "MVR Falling Film Evaporator Loops",
                  "Sanitary Multi-Stage Spray Dryers",
                  "Low-Temperature Deep Vacuum Pans",
                  "High-Density Whey Concentrators",
                  "Integrated Clean-In-Place (CIP) Geometry",
                  "Electro-polished Tube Sheet Bundles",
                  "TVR Ejector Thermal Recovery Bundles",
                  "High-Shear Liquid Distribution Plates",
                  "Sanitary Demisters & Vapor Separators"
                ].map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-semibold text-card-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Targeted Industry FAQ Grid */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
                Food & Dairy Verification Matrix (FAQs)
              </h2>
              <div className="grid gap-4">
                {[
                  { 
                    q: "How do your evaporators preserve delicate dairy product nutrients?", 
                    a: "By operating under low absolute pressures, we drop the boiling point below critical thresholds (typically 50 degrees Celsius to 55 degrees Celsius). This configuration, paired with continuous falling film distribution, eliminates localized hotspots and ensures milk proteins, vitamins, and flavor properties undergo zero thermal degradation or Maillard browning." 
                  },
                  { 
                    q: "What is the typical baseline energy savings of MVR in dairy lines?", 
                    a: "Mechanical Vapor Recompression (MVR) configurations reuse the latent heat of vaporization by mechanically compressing exhaust vapors. This loop eliminates continuous live steam dependencies during steady-state runs, achieving up to a 60-70% reduction in utility expenses compared to conventional multi-effect thermal networks." 
                  },
                  { 
                    q: "How does the design address sanitary standards and prevent bacterial contamination?", 
                    a: "All product contact zones are manufactured with premium, electro-polished stainless steel (MOC matching SS316L with a surface roughness Ra < 0.8 micrometers). The layout features self-draining geometric paths with no dead-legs, explicitly tuned to interface seamlessly with multi-stage automated CIP loops for daily sterilization." 
                  },
                  { 
                    q: "Can your systems process high-viscosity dairy side-streams like concentrated whey?", 
                    a: "Yes. We model the precise non-Newtonian viscosity changes and boiling point elevations (BPE) that occur as solids concentrate. By balancing falling film velocity thresholds with forced circulation finishing stages, we safely push solid concentrations past normal industry clogging points." 
                  },
                  { 
                    q: "What is the specific steam consumption ratio for your multi-stage TVR systems?", 
                    a: "When a pure MVR setup isn't practical due to utility limitations, our customized multi-effect configurations integrated with high-efficiency Thermal Vapor Recompressors (TVR) use high-pressure motive steam to entrain low-pressure vapor, achieving steam economy ratios exceeding 1:6." 
                  },
                  { 
                    q: "How do your spray dryers manage powder texture and ultimate moisture parameters?", 
                    a: "We compute precise psychrometric balances to establish tight control limits over inlet temperature profiles and exhaust relative humidity. Paired with fine nozzle atomization adjustments, this eliminates chamber wall pasting and yields highly uniform, free-flowing sanitary powders." 
                  },
                  {
                    q: "What is the function of the liquid distribution plate in a dairy falling film evaporator?",
                    a: "The distribution plate ensures that the incoming liquid feed is split perfectly evenly across all tubes in the bundle. A uniform film thickness is critical; if the film breaks or flows unevenly, under-wetted tubes will experience localized overheating, leading to rapid protein baking, fouling, and structural capacity drops."
                  },
                  {
                    q: "How do you handle the high Boiling Point Elevation (BPE) in late-stage dairy effects?",
                    a: "As the concentration of lactose and minerals rises, the solution's BPE increases, narrowing the effective thermal driving force (Delta-T). We overcome this by strategically configuring the final stages with higher heating parameters or utilizing dedicated booster TVR units to ensure stable evaporation fluxes."
                  },
                  {
                    q: "What typical CIP cycles and durations are supported by your configurations?",
                    a: "Our food and dairy systems are built for multi-step automated Clean-In-Place cycles, supporting sequential caustic washes (1.5 to 2.0 percent NaOH at 75 to 80 degrees Celsius), acid rinses (0.5 to 1.0 percent HNO3), and high-purity water flushes, minimizing downtime to keep operations continuous."
                  },
                  {
                    q: "How is vapor-liquid entrainment managed to prevent product loss into the condensate?",
                    a: "We integrate large-volume centrifugal vapor separation chambers paired with structural mesh or chevron-type mist eliminators. This ensures that liquid droplets are thoroughly separated from the migrating vapor stream, keeping recovered condensates clean and minimizing product loss."
                  },
                  {
                    q: "What design features protect heat-sensitive flavor fractions during fruit juice processing?",
                    a: "We couple our low-temperature vacuum evaporation blocks with specialized aromatic essence recovery units, separating volatile oils early in the flash matrix to condense and reintroduce them directly back into the concentrated syrup paste."
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="bg-card p-6 rounded-xl border border-border">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-card-foreground">{faq.q}</h4>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>

        {/* Footer Block */}
        <footer className="bg-card border-t border-border mt-20 py-8 text-center text-sm text-muted-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Thermovap Engineering. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <a href="/#services" className="hover:text-primary transition-colors">Services</a>
              <a href="/#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}