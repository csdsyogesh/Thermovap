import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../SEO';
import { ArrowLeft, HelpCircle, Wind } from 'lucide-react';

export default function SprayDryers() {
  return (
    <>
      <SEO 
        title="Industrial Spray Dryer Design & Atomization Engineering" 
        description="Rigorous psychrometric enthalpy balances and nozzle profiling for industrial spray dryers. Eliminate chamber wall pasting and maximize product powder recovery."
        url="/services/spray-dryers"
      />
      <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col justify-between">
        <div>
          <header className="bg-card border-b border-border sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <span>Return to Home</span>
              </Link>
              <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Thermovap Engineering</span>
            </div>
          </header>

          <section className="relative py-24 border-b border-border overflow-hidden">
            <div className="relative max-w-5xl mx-auto px-4 text-center">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">Convective Heat & Mass Transfer</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
                Industrial Spray Drying & Atomization Engineering
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Precise thermodynamic configurations designed to transform low-viscosity industrial liquid feeds into stable, uniform, free-flowing engineered powders.
              </p>
            </div>
          </section>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">1. Architectural Scope</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                  <h3 className="text-xl font-bold text-primary">Chamber Configuration Modeling</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We analyze co-current, counter-current, and mixed-flow air configurations. By mapping air entry dynamics against droplet trajectory lines, our designs establish maximum residence times without letting damp powder collide with structural chamber walls.
                  </p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                  <h3 className="text-xl font-bold text-primary">Nozzle & Rotary Disk Atomizer Micro-Profiling</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Atomization directly controls particle morphology. We size and profile pressure nozzles, two-fluid nozzles, and high-speed rotary disk wheels to maximize the liquid surface-area-to-volume ratio, ensuring narrow droplet size distributions.
                  </p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                  <h3 className="text-xl font-bold text-primary">Psychrometric Enthalpy Balances</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every dryer layout is backed by highly rigorous psychrometric charts. We match air mass flow rates against exact evaporative loads to keep exhaust air relative humidity (RH) safely below boundary limits, avoiding damp powder clotting.
                  </p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                  <h3 className="text-xl font-bold text-primary">High-Efficiency Cyclone & Bag Filter Layouts</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To secure maximum product yield and comply with emission mandates, we integrate custom-sized multi-cyclone clusters paired with automated pulse-jet fabric bag filters to handle fine dust recovery with minimal pressure drops.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card border border-border rounded-2xl p-8 lg:p-12 space-y-4">
              <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
                <Wind className="text-primary h-6 w-6" /> Volumetric Evaporation Rate Profiling
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sizing the absolute interior volume of a spray drying chamber requires solving continuous heat and mass transfer loops across short droplet lifespans. We calculate the volumetric evaporation rate (qv) to establish strict boundary constraints:
              </p>
              <div className="my-4 p-4 bg-muted/30 rounded-lg text-center font-mono text-sm border border-border text-primary">
                qv = (mw · λ) / (V_chamber · ΔT_lm)
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Where mw is the water evaporation mass flow, λ represents latent heat, and ΔT_lm is the log-mean temperature difference. Tuning this ensures complete core moisture removal occurs before particles reach the lower discharge cone.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">2. Exhaustive Technical FAQ Matrix</h2>
              <div className="grid gap-4">
                {[
                  { q: "How do you decide between a rotary disk atomizer and a pressure nozzle layout?", a: "Rotary disk atomizers excel at handling fluctuating feed rates and abrasive slurries without wear, whereas pressure nozzles are selected when narrow particle size distributions or distinct coarse, granular powders are required." },
                  { q: "What mechanisms prevent powder wall pasting inside the drying chamber?", a: "We prevent pasting by applying cold air wall-sweeping systems, optimizing air-disperser fluid dynamics to shape a protective air envelope, and maintaining proper drying chamber height-to-diameter geometric ratios." },
                  { q: "Why is exhaust air relative humidity (RH) critical in spray dryer operations?", a: "If the exhaust air RH rises too high (typically above 35-40%), the powder re-absorbs moisture instantly. This triggers localized stickiness, forming hard chunks that plug the discharge cone and cyclones." },
                  { q: "Can heat-sensitive biological products or flavors be spray dried safely?", a: "Yes. Despite high inlet air temperatures, the actual wet-bulb cooling effect keeps product core temperatures low as long as free water is actively evaporating." },
                  { q: "What optimization approaches does Thermovap apply to reduce spray dryer energy footprints?", a: "We incorporate air-to-air heat exchangers that utilize clean exhaust air energy to pre-heat cold atmospheric process air before it arrives at the main utility air heater." },
                  { q: "What dictates the specific selection of co-current versus counter-current air flow configurations?", a: "Co-current flow introduces hot air directly to the wet feed, making it ideal for heat-sensitive products because evaporation keeps particle temperatures low. Counter-current flow exposes the driest powder to the hottest air, which is highly efficient for non-heat-sensitive items requiring very low residual moisture." },
                  { q: "How do two-fluid nozzles differ from high-pressure single-fluid nozzles in processing setups?", a: "Two-fluid nozzles use compressed air to break up the feed liquid, which allows them to handle smaller trial batches or highly viscous fluids at low pressures. High-pressure single-fluid nozzles rely entirely on hydraulic energy and are chosen for high-capacity, heavy-duty industrial scale configurations." },
                  { q: "What steps are taken to avoid the thermal degradation of protein structures during atomization?", a: "We precisely calibrate the inlet hot air patterns and optimize the droplets' residence time. This guarantees that rapid surface water flashing dynamically cools the particle core, keeping it below denaturing heat thresholds." },
                  { q: "How does feed slurry concentration affect particle size distributions in the final output?", a: "Higher solids percentages increase feed viscosity, which typically creates larger, denser droplets during atomization. This results in coarser finished powders with higher bulk densities after moisture extraction." },
                  { q: "What role do explosion vents and dynamic suppression panels play in industrial spray tower layouts?", a: "When drying organic powders or solvent-based matrices that can create combustible dust, we size calculation boundaries for light rupture panels or chemical suppression barriers to discharge overpressure conditions safely." },
                  { q: "How is mechanical clogging minimized at the feed entry nozzle lines?", a: "We design high-pressure line circuits with inline duplex filtration screens and implement variable frequency drive loops on positive displacement pumps to manage pulse-free fluid velocity profiles directly to the orifice head." }
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