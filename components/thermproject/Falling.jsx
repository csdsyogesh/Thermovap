import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, CheckCircle2, Cpu, BarChart3, ShieldAlert } from 'lucide-react';
import { SEO } from '../SEO'; 

export default function Falling() {
  return (
    <>
      {/* GOOGLE CORE INDEXING METRICS */}
      <SEO 
        title="Falling Film Evaporators" 
        description="High-efficiency vertical gravity climbing-film calandria bundles engineered for heat-sensitive food, dairy, and chemical concentration lines with optimal steam economy."
        url="/thermproject/falling"
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
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">Thermal Processing Technologies</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
                Falling Film Evaporators
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                High-efficiency, low thermal-residence mass transfer systems engineered for cross-industry concentration of heat-sensitive, low-viscosity solutions.
              </p>
            </div>
          </section>

          {/* Main Content Body */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            
            {/* Detailed Engineering Methodology */}
            <section className="bg-card border border-border rounded-2xl p-8 lg:p-12 space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
                <Cpu className="text-primary h-6 w-6" /> Technology Overview & Working Principle
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed text-justify">
                <p>
                  A Falling Film Evaporator is an industrial shell-and-tube heat exchanger engineered to concentrate solutions by boiling off a volatile solvent (typically water) from a dilute feed. The defining feature of this technology is that the process fluid enters from the very top header of the calandria. It is routed through a specialized, highly precise liquid distribution system that splits the stream evenly across the tube sheet, creating a uniform, continuous thin liquid film that flows downward along the internal tube walls under the force of gravity.
                </p>
                <p>
                  As the liquid film tracks downward, it absorbs latent heat from the heating medium (such as live steam or recycled vapor) passing through the shell side. This triggers rapid boiling, causing partial vaporization of the solvent. The vapor generated travels concurrently down the center core of the tubes alongside the liquid film. At the base of the calandria bundle, the co-current mixture discharges into a massive vapor-liquid separator chamber where the dense concentrate drops out cleanly while the clean vapor stream is pulled from the top header for enthalpy recovery.
                </p>
              </div>
            </section>

            {/* Core Technical Deep Dives */}
            <section className="grid gap-8 lg:grid-cols-2">
              <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                  <BarChart3 className="text-primary h-5 w-5" /> Why It Is Used & Operational Purpose
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  This technology is widely chosen for industries handling heat-sensitive matrices—such as milk, whey, fruit juices, pharmaceutical active ingredients, and botanical extractions. Because the liquid drops down the tube walls rapidly at high velocities under a gravity vector, the total thermal residence time inside the heating zone is minimized to mere seconds. This single-pass short duration prevents product degradation, color tracking, loss of nutritional properties, or flavor scorching, while still allowing for high scaling volume turndowns.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                  <ShieldAlert className="text-primary h-5 w-5" /> Key Thermodynamic Benefits
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  Falling Film systems operate by holding process temperatures below 55°C and optimizing the shell heating side and the boiling fluid side. This low driving force requirement makes them ideal for multi-stage configurations, allowing many effects to be stacked sequentially to maximize steam economy. Furthermore, the absence of a large liquid hydrostatic head reduces boiling point elevations (BPE) within the tubes, requiring lower capital energy outlays compared to standard flooded or rising-film evaporators.
                </p>
              </div>
            </section>

            {/* Architecture Checklist Matrix */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
                Design Innovations & Engineering Features
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "High-Precision Liquid Distribution Trays",
                  "Ultra-Short Material Residence Times",
                  "Deep-Vacuum Low Temperature Controls",
                  "Low Delta-T Heat Transfer Profiles",
                  "Seamless Integration with MVR/TVR Loops",
                  "Sanitary cGMP Electro-Polished Options",
                  "Centrifugal Co-Current Vapor Separators",
                  "Full Clean-in-Place (CIP) Self-Draining Layout",
                  "Minimized Hydrostatic Boiling Penalties"
                ].map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-semibold text-card-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Targeted FAQ Grid */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
                Falling Film Verification Matrix (FAQs)
              </h2>
              <div className="grid gap-4">
                {[
                  { 
                    q: "What defines the residence time inside a Falling Film Evaporator?", 
                    a: "Because the fluid tracks down the inner walls as a highly accelerated thin film under gravity rather than flooding the tubes, the total heating residence time is typically under 10 to 30 seconds per pass. This prevents thermal degradation in heat-sensitive products." 
                  },
                  { 
                    q: "Why is uniform liquid distribution critical at the top header?", 
                    a: "If the distribution tray fails to split the feed evenly, some tubes will receive inadequate wetting. These under-wetted tubes will dry out rapidly, causing local product overheating, rapid organic fouling, scale baking, and loss of heat transfer area." 
                  },
                  { 
                    q: "What viscosity limits apply to standard Falling Film Evaporators?", 
                    a: "They operate best with low-to-medium viscosity fluids, typically below 100 to 150 cP. As viscosity rises, the gravity film becomes thicker and moves slower, which drops the convective heat transfer coefficient (U) and prompts scaling." 
                  },
                  { 
                    q: "How does the lack of hydrostatic head lower operational energy costs?", 
                    a: "Unlike flooded or rising-film systems where the liquid at the bottom of the tube experiences boiling point elevation from the fluid column's weight, falling film tubes have no liquid column weight. The fluid boils exactly at the saturation temperature of the separator's operating pressure." 
                  },
                  { 
                    q: "Can Falling Film units be combined with Mechanical Vapor Recompression (MVR)?", 
                    a: "Yes. In fact, their low required temperature difference (Delta-T = 4°C - 6°C) makes them perfectly suited for MVR integration. The mechanical compressor only needs to add a small amount of energy to step up the vapor temperature before reintroducing it to the shell side." 
                  },
                  { 
                    q: "What typical steam economy values are reached in multi-effect systems?", 
                    a: "A standard 4-effect Falling Film system can yield a steam economy ratio of roughly 3.8 to 4.2 (evaporating 4 kg of water per 1 kg of live steam consumed). Integrating TVR or MVR arrays can boost this efficiency equivalent to 8+ thermal effects." 
                  },
                  { 
                    q: "How does the co-current flow pattern benefit the process?", 
                    a: "Both the liquid film and the generated vapor travel downward together in the same direction. The rushing vapor forms a high-velocity core that exerts shear stress on the liquid film, pushing it faster down the tube wall and increasing turbulence for better heat transfer." 
                  },
                  { 
                    q: "What materials of construction (MOC) are used for corrosive configurations?", 
                    a: "Based on fluid chemistry, we manufacture configurations using SS304L, SS316L, Duplex Stainless Steel (such as alloy 2205), or Titanium to completely mitigate chloride stress cracking or aggressive corrosion." 
                  },
                  { 
                    q: "How is Clean-in-Place (CIP) handled in these configurations?", 
                    a: "The vertical, single-pass layout is inherently self-draining. We integrate dedicated CIP spray balls into the top vapor head to thoroughly flood the distribution plates, ensuring regular cleaning chemical distribution across all tube paths." 
                  },
                  { 
                    q: "What steps prevent droplet entrainment in the separated vapor line?", 
                    a: "The lower discharge chamber uses an engineered centrifugal wrap design. The heavy liquid drops slide along the walls, while the rising vapor passes through a multi-tier structural chevron or mesh demister block to trap remaining micro-droplets." 
                  },
                  {
                    q: "What is the function of the bottom liquor recirculation loop in these installations?",
                    a: "When operating parameters fluctuate or feed rates fall below design thresholds, a dedicated recirculation loop maintains the minimum wetting rate inside the calandria tubes, stopping thin film breakage and dry spot formation."
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

        /* Footer Block */
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