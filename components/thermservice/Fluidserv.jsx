import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../SEO';
import { ArrowLeft, HelpCircle, Wind, Activity } from 'lucide-react';

export default function FluidBedDryers() {
  return (
    <>
      <SEO 
        title="Fluid Bed Dryer Engineering & Minimum Fluidization Sizing" 
        description="Industrial fluid bed drying units designed using precise Ergun hydrodynamic equations. Custom grid plate pressure-drop tuning for uniform particulate moisture reduction."
        url="/services/fluid-bed-dryers"
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
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">Particulate Hydrodynamics</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
                Fluid Bed Drying (FBD) & Processing Units
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Thermal engineering of fluidized systems designed to achieve highly uniform moisture reduction across crystalline solids, granular matrices, and heat-sensitive particulate masses.
              </p>
            </div>
          </section>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">1. Technical Core Boundaries</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                  <h3 className="text-xl font-bold text-primary">Grid Plate Pressure-Drop Tuning</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Proper gas distribution prevents localized channeling. We explicitly tune the structural pressure drop (ΔP) across the perforated distribution plate to guarantee a stable, non-collapsing fluid bed layer across the entire surface area.
                  </p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                  <h3 className="text-xl font-bold text-primary">Minimum Fluidization Velocity Sizing</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We compute precise hydrodynamic profiles to establish operating gas velocities safely above the minimum fluidization threshold while avoiding terminal entrainment velocities that cause excessive dust carryover.
                  </p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                  <h3 className="text-xl font-bold text-primary">Vibrating & Multi-Zone Configurations</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    For cohesive materials with poor natural fluidization, we integrate mechanical vibrating assemblies (VFBD) paired with multi-zone temperature isolation grids to handle distinct heating, soaking, and final cooling loops.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card border border-border rounded-2xl p-8 lg:p-12 space-y-4">
              <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
                <Activity className="text-primary h-6 w-6" /> Ergun Hydrodynamic Threshold Equation
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Calculating the exact point where a static bed transition occurs into a fully fluidized state involves evaluating particle sphericity, void fractions (ε), and Reynolds numbers (Re) via the Ergun equation baseline:
              </p>
              <div className="my-4 p-4 bg-muted/30 rounded-lg text-center font-mono text-sm border border-border text-primary">
                ΔP / L = 150 · [μ · (1-ε)² · U] / [φ² · dp² · ε³] + 1.75 · [ρ · (1-ε) · U²] / [φ · dp · ε³]
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our engineering algorithms utilize this relationship to match plenum pressures perfectly, preventing unstable bubbling, slugging beds, or material scorching from localized hot spots.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">2. Exhaustive Technical FAQ Matrix</h2>
              <div className="grid gap-4">
                {[
                  { q: "What indicates a need for a vibrating fluid bed dryer over a static fluid bed?", a: "Static beds require free-flowing materials with a uniform size range. If your product features wide particle distributions, high stickiness, or low cohesive strength, a vibrating fluid bed (VFBD) is required to mechanically assist fluidization." },
                  { q: "How do you eliminate material bypassing or 'channeling' in fluid bed plates?", a: "Channeling happens if the distribution plate pressure drop is too low. We eliminate it by ensuring the grid plate pressure differential is calculated to be at least 15-20% of the total bed pressure drop." },
                  { q: "What criteria define the selection of the gas velocity bounds in an FBD system?", a: "The operational gas velocity must always stay above the minimum fluidization velocity (Umf) to prevent bed collapse, but must remain well below the terminal velocity (Ut) of the particles to stop unwanted dust carryover." },
                  { q: "How does multi-zone temperature integration benefit heat-sensitive polymers?", a: "It splits the processing profile. High-temperature gas drives off surface moisture in zone one, medium-temperature gas targets internal moisture in zone two, and ambient air cools the product in zone three to prevent clumping." },
                  { q: "What styles of gas distribution plates does Thermovap design for sticky feeds?", a: "We design directional gill-plate or overlapping Conidur plates. These force the gas horizontally along the tray, continuously pushing solids forward while preventing weeping or back-sifting into the plenum chamber." },
                  { q: "How do you calculate particle residence time within a continuous fluid bed dryer?", a: "Residence time is a factor of the material bed height, feed rate, bulk density, and total length of the drying deck. We adjust internal weir gates to maintain exact material depths matching required thermal hold times." },
                  { q: "What design features prevent product degradation or scorching in thermal zones?", a: "By maintaining high convective fluidization coefficients, the particles are enveloped in gas, preventing localized stagnation. Feedback loops instantly reduce air heater loads if bed temperatures exceed specific product tolerances." },
                  { q: "Can an industrial fluid bed system be integrated with an inert gas loop?", a: "Yes. For combustible powders or products containing organic solvents, we design closed-loop configurations using nitrogen as the fluidizing medium, paired with vapor condensation loops." },
                  { q: "What causes fluid bed 'slugging' and how does your sizing prevent it?", a: "Slugging occurs when air bubbles expand to equal the bed width, causing massive pressure shifts and physical shaking. We prevent this by keeping bed height-to-width geometric ratios within safe hydrodynamic thresholds." },
                  { q: "How do cyclone assemblies match fine dust recovery constraints in fluid beds?", a: "We calculate cyclone inlet velocities based on the terminal settling profiles of dust carryover. High-efficiency single or multi-cyclone configurations remove finer particulate bounds before exhaust gas goes to scrubbers." },
                  { q: "What role do adjustable internal baffles play inside the drying deck?", a: "Adjustable baffles establish a plug-flow pattern across the continuous bed path. This layout layout limits shortcutting, ensuring all passing crystals receive uniform exposure to the thermal cross-flow." }
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