import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../SEO';
import { ArrowLeft, HelpCircle, Cpu } from 'lucide-react';

export default function EvaporationSystems() {
  return (
    <>
      <SEO 
        title="Multi-Effect Evaporators & MVR/TVR System Design | Thermovap" 
        description="Industrial thermal engineering for Multi-Effect Evaporators (MEE). We optimize specific steam consumption (SSC) using TVR & MVR vapor recompression integration physics."
        url="/services/evaporation-systems"
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
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">Thermodynamic Sizing Matrix</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
                Industrial Evaporation & Multi-Effect Concentration
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Engineering advanced thermal loops designed to maximize global heat transfer coefficients (U) across changing liquor viscosities, delivering critical drops in specific steam consumption (SSC).
              </p>
            </div>
          </section>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">1. Process Fluid Architecture</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                  <h3 className="text-xl font-bold text-primary">Falling Film Evaporators (FFE)</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Operates by feeding dilute liquor through custom distribution trays at the upper tube sheet. The liquid forms a thin, highly turbulent film that flows downward under gravity along the inner walls of the 31.75 mm OD tubes. This layout yields maximum heat transfer coefficients (U-values of 1800 - 2400 W/m²·K) under low temperature differences (ΔT).
                  </p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                  <h3 className="text-xl font-bold text-primary">Forced Circulation Evaporators (FCE)</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Engineered specifically for heavy crystallizing arrays or thick non-Newtonian liquids. High-capacity axial pumps drive fluid through the tube core at high linear velocities (2.0 m/s to 2.5 m/s). Hydrostatic head suppresses boiling inside the tubes, forcing flash evaporation and solid crystal dropout to happen strictly inside the separator vessel.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card border border-border rounded-2xl p-8 lg:p-12 space-y-4">
              <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
                <Cpu className="text-primary h-6 w-6" /> Sizing Parameters & Boiling Point Elevation (BPE)
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The boiling point elevation (BPE) climbs as a solution grows more concentrated. If this elevation is undercalculated during system design, the effective temperature driving force collapses entirely:
              </p>
              <div className="my-4 p-4 bg-muted/30 rounded-lg text-center font-mono text-sm border border-border text-primary">
                ΔT_eff = T_heating_steam - T_vapor - ∑BPE
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Thermovap prevents system stalls by tailoring layout density. We utilize calculated triangular tube pitches (60-degree orientation) paired with exact wetting rates to prevent local dry spots, managing salt formation and maximizing continuous operation runtime.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">2. Exhaustive Technical FAQ Matrix</h2>
              <div className="grid gap-4">
                {[
                  { q: "What parameters dictate choosing an FFE versus a Forced Circulation system?", a: "Fluid viscosity and crystal generation are the primary factors. FFEs are ideal for clean, heat-sensitive feeds with low scaling tendencies under 100 cP. The moment crystals drop out or viscosities climb above 150-200 cP, a Forced Circulation evaporator is required to prevent tube clogging." },
                  { q: "What causes regular vacuum drops in MEE systems, and how do you resolve it?", a: "Vacuum drops are usually caused by an accumulation of non-condensable gases, structural leaks along the seals, or low cooling water flow at the condenser. We isolate these issues by setting up multi-stage steam ejectors and continuous vents at dead zones in the shell." },
                  { q: "How does Thermovap optimize Specific Steam Consumption (SSC)?", a: "We improve steam economy by adding additional effects, integrating Thermal Vapor Recompressors (TVR), and routing raw feed inputs through preheaters that reclaim heat from outgoing condensate lines." },
                  { q: "How do you handle product entrainment or liquid carryover into vapor headers?", a: "High vapor velocities can drag droplets into clean lines. We prevent this carryover by designing centrifugal vapor-liquid separation chambers and high-density wire mesh demister pads into the flash head." },
                  { q: "What cleaning frequency should be expected for a multi-effect system?", a: "Depending on your specific stream composition (organic wastes, calcium salts, or silicates), automated Clean-In-Place (CIP) cycles using dilute caustic or acid solutions are typically scheduled every 7 to 15 days." },
                  { q: "Why is a 31.75 mm OD with 1.2 mm thickness used as the tube baseline?", a: "This configuration provides a balanced area-to-volume ratio for optimized heat flux while maintaining the structural strength needed to prevent collapsing under full vacuum conditions." },
                  { q: "How does the layout arrangement affect heat transfer efficiency?", a: "A 60-degree triangular pitch packs up to 15% more heat transfer area inside the same shell diameter compared to a square pitch layout, maximizing thermal output." },
                  { q: "Can an existing multi-effect system be upgraded for higher capacities?", a: "Yes. We can expand capacity by adding a pre-heater stage, installing an initial falling film effect, or retrofitting a Mechanical Vapor Recompression (MVR) fan loop." },
                  { q: "What is the primary difference between MVR and TVR steam integration setups?", a: "Mechanical Vapor Recompression (MVR) uses an electrical blower fan to compress clean process vapor for reuse, requiring no live boiler steam during operation. Thermal Vapor Recompression (TVR) utilizes high-pressure motive steam inside an ejector nozzle to pull and compress a portion of the exhaust vapor." },
                  { q: "How are non-condensable gas traps localized within an active calandria shell?", a: "Our field engineering teams trace surface temperature drops along the shell envelope. Cooler, stagnant areas reveal non-condensable air blocks, which are removed by re-routing secondary vent orificing lanes." },
                  { q: "What purpose do liquid distribution trays serve at the top of a falling film effect?", a: "Distribution trays split incoming liquor streams into exact volumetric feeds across every individual tube core. Proper calculation of this layout pattern limits dry spots, tube fouling, and localized overheating bounds." }
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