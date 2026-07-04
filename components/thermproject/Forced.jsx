import React from 'react';
import { SEO } from '../SEO'; 
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, CheckCircle2, Cpu, BarChart3, ShieldAlert } from 'lucide-react';

export default function ForcedCirculation() {
  return (
    <>
    <SEO 
  title="Forced Circulation Evaporators" 
  description="High-velocity, pressurized boiling suppression evaporator systems engineered to concentrate heavily fouling industrial fluids, crystalline slurries, and high-TDS reject streams."
  url="/thermproject/forced"
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
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Thermal Processing Technologies</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
              Forced Circulation Evaporators
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              High-velocity, pressurized boiling suppression networks engineered to concentrate heavily fouling fluids, crystalline slurries, and high-TDS streams.
            </p>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          <section className="bg-card border border-border rounded-2xl p-8 lg:p-12 space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
              <Cpu className="text-primary h-6 w-6" /> Technology Overview & Working Principle
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed text-justify">
              <p>
                Forced Circulation Evaporators are heavy-duty thermal processing systems engineered specifically to handle materials where boiling inside the heat exchanger tubes would lead to catastrophic scaling or immediate plugging. The core design centers around an external, high-capacity axial or mixed-flow recirculation pump that drives the process fluid through the tube bundle at extremely high linear velocities (typically between 2.0 m/s and 3.5 m/s). 
              </p>
              <p>
                By maintaining a high hydrostatic head and backpressure over the top tube sheet, the system suppresses boiling entirely within the heat exchanger. The fluid remains in a liquid phase throughout its transit across the calendria, absorbing sensible heat. Boiling is only permitted when the superheated liquid enters the lower pressure zone of the flash separation vessel. The solvent flashes off instantly, forcing solid crystallization or rapid concentration safely away from the primary heat transfer surfaces.
              </p>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <BarChart3 className="text-primary h-5 w-5" /> Operational Target & Purpose
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                This configuration is the standard choice for aggressive industrial environments such as chemical salt crystallization, zero liquid discharge (ZLD) arrays, textile reject streams, and pulp black liquor concentrations. Because the extreme fluid velocity creates a continuous mechanical scouring effect against the inner metal tube boundaries, it actively suppresses the deposition of hard mineral scales and dense crystal structures.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <ShieldAlert className="text-primary h-5 w-5" /> Key Structural Benefits
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                The primary benefit of Forced Circulation is its high reliability when processing fluids that display non-Newtonian behavior or high solid suspensions. By avoiding internal tube evaporation, localized hot spots are completely eliminated. This enables chemical plants to continuously operate close to fluid saturation limits and successfully manage heavy solid slurs that would instantly choke conventional falling or rising film systems.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
              Design Innovations & Engineering Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "High-Capacity Axial Recirculation Pumps",
                "Boiling Suppression Hydrostatic Control",
                "Turbulent Self-Scouring Linear Velocities",
                "Heavy-Duty Crystallization Vessel Balance",
                "Corrosion-Proof Thick Walled Tube Bundles",
                "Advanced Slurry Level Density Regulators",
                "Multi-Tier Centrifugal Vapor Demisters",
                "Automated Slurry Intermittent Purging",
                "Optimized Low Maintenance Calendria Profiles"
              ].map((tech, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-semibold text-card-foreground">{tech}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
              Forced Circulation Verification Matrix (FAQs)
            </h2>
            <div className="grid gap-4">
              {[
                { q: "How does forced circulation actively eliminate internal tube scaling?", a: "By maintaining high pump pressure and static liquid heads, we push the boiling point above the fluid temperature inside the tubes. Evaporation occurs exclusively as a clean flash inside the separate collection drum away from metal walls." },
                { q: "What linear fluid velocity boundaries are maintained inside the tubes?", a: "We size internal axial pumps to strictly generate linear flow velocities of 2.0 m/s to 3.0 m/s, producing turbulent boundaries that scour away solid aggregates." },
                { q: "Can this technology function as a dedicated salt crystallizer?", a: "Yes. It is the premier selection for crystallization lines. The continuous flash drop inside the separator handles high crystal slurries up to 40-50% solids by volume." },
                { q: "What is the typical energy footprint compared to film-type evaporators?", a: "Because it relies on high-power recirculation pumps to maintain high fluid velocities, its electrical power overhead is higher than falling film systems, though it offsets this with drastically lower downtime when processing severe fouling liquids." },
                { q: "What materials of construction are offered for abrasive slurries?", a: "We build layouts out of Duplex 2205 stainless steel, Super Duplex, or solid Titanium to completely counter mechanical slurry erosion and chloride stress corrosion." },
                { q: "How does the system handle rapid fluctuations in solid density?", a: "We integrate continuous automated nuclear or differential-pressure density sensors that toggle pneumatic bleed valves, discharging concentrated slurry blocks without halting production loops." },
                { q: "Can forced circulation loops combine with Mechanical Vapor Recompression?", a: "Yes. The vapor flashed inside the separator can route directly to an MVR mechanical compressor, stepping up pressure levels to heat the shell side cleanly." },
                { q: "What configuration prevents solid carryover into the clean condensate lines?", a: "We build highly elevated flash drums featuring multi-tier chevron demister packs to thoroughly block micro-droplet carryover, keeping distillate water clear." },
                { q: "What typical maintenance windows are achieved in ZLD applications?", a: "Thanks to boiling suppression logic, our systems continuously run for 25 to 35 days under high TDS conditions before requiring a brief water wash cycle." },
                { q: "How do you optimize flow distribution inside the bottom entry header?", a: "We model localized fluid entries with computational software to position internal target deflectors, preventing localized vortex erosion and providing uniform tube distribution." }
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