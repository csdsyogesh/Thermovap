import React from 'react';
import { SEO } from '../SEO'; 
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, CheckCircle2, Cpu, BarChart3, ShieldAlert } from 'lucide-react';

export default function RisingFilm() {
  return (
    <>
    <SEO 
  title="Rising Film Evaporators" 
  description="Thermo-siphon driven climbing-film evaporators engineered for high-duty concentration of low-viscosity solutions and effective mechanical foam breaking processing."
  url="/thermproject/rise"
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
              Rising Film Evaporators
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Thermo-siphon driven climbing-film evaporators engineered for high-duty processing of low-viscosity solutions and foaming effluents.
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
                Rising Film (or Climbing Film) Evaporators utilize a natural thermo-siphon principle to lift and concentrate solutions inside vertical shell-and-tube configurations. The liquid feed enters from the bottom header of the calendria and fills the lower segments of the tube bundle. As steam passes through the outer shell side, heat transfer triggers rapid localized boiling at the base of the inner tubes, producing expanding vapor bubbles.
              </p>
              <p>
                As these vapor bubbles multiply and rush upward, they form a high-velocity core that acts as a pneumatic piston. This vapor core grips the liquid boundaries, pressing the fluid against the tube walls and forcing it upward as a continuous climbing film. This co-current flow matches high convective heat transfer parameters, discharging the mixture from the top header into a primary separation drum where the liquid drops out cleanly and the clean steam vapor vents for recompression loops.
              </p>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <BarChart3 className="text-primary h-5 w-5" /> Operational Target & Purpose
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                Rising Film layouts are highly effective for processing low-viscosity streams and highly foaming wastewater lines. The high-velocity vapor core traveling up the center of the tube shears and breaks down liquid foam bubbles mechanically during transit, suppressing foam carryover without requiring intensive chemical anti-foam dosing treatments.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <ShieldAlert className="text-primary h-5 w-5" /> Key Thermodynamic Benefits
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                A major advantage of this technology is its simple, reliable design. Because the natural thermo-siphon mechanism lifts the fluid automatically, mechanical pumping requirements are minimized. This makes Rising Film systems exceptionally cost-effective to install and maintain, while still delivering excellent evaporation rates for high-volume process environments.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
              Design Innovations & Engineering Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Natural Thermo-Siphon Ascending Forces",
                "Mechanical Foam Breaking Core Velocities",
                "Reduced Pumping Operational Overheads",
                "High Convective Heat Flux Transfer",
                "Compact Structural Floor Stand Boundaries",
                "Top-Mounted High Separation Flash Drums",
                "Integrated Live Steam Balancing Loops",
                "Sanitary Bottom Distribution Headers",
                "Automated Level Liquid Control Systems"
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
              Rising Film Verification Matrix (FAQs)
            </h2>
            <div className="grid gap-4">
              {[
                { q: "What drives the liquid upward in a rising film evaporator?", a: "Localized boiling at the bottom creates vapor bubbles that expand quickly. This vapor stream forms a high-speed core that pushes the liquid up the inner walls as a climbing film." },
                { q: "How does this technology naturally manage highly foaming fluids?", a: "The high-velocity vapor core applies mechanical shear stresses to foam structures inside the tube, actively breaking down bubbles during their ascent." },
                { q: "What are the viscosity limitations for climbing film designs?", a: "They are optimized for low-viscosity streams, typically under 20-30 cP. Thick liquids move too slowly, which breaks the film and can cause scaling." },
                { q: "Can rising film systems run under vacuum conditions?", a: "Yes, they frequently operate under vacuum boundaries to lower the boiling point, making them safe for heat-sensitive matrices." },
                { q: "What is the typical tube length for these installations?", a: "We engineer long tube formats, typically between 6 to 8 meters, to give the vapor core enough distance to fully develop and lift the film." },
                { q: "How do your designs handle the initial system startup?", a: "We integrate automated bottom-feed preheating loops to establish steady localized boiling immediately, starting the climbing film lift quickly." },
                { q: "What materials of construction are offered for chemical rejects?", a: "We fabricate configurations out of SS316L, Duplex stainless steels, or Hastelloy based on the chemical profile of the feed." },
                { q: "How is product cross-contamination managed between batch runs?", a: "The bottom entry and vertical alignment allow for complete gravity drainage, facilitating straightforward cleaning and rapid batch transitions." },
                { q: "Can this technology connect with Thermal Vapor Recompressors (TVR)?", a: "Yes. Top-vented vapors can be routed directly through a TVR ejector loop to reuse latent heat energy and optimize steam economy." },
                { q: "What maintenance intervals are typical for clean effluent streams?", a: "With low-scaling fluids, our climbing film units routinely maintain stable operational profiles for 30 to 45 days between CIP cleans." }
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