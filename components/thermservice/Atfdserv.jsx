import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../SEO';
import { ArrowLeft, HelpCircle, Layers, Activity } from 'lucide-react';

export default function AtfdSystems() {
  return (
    <>
    <SEO 
  title="Agitated Thin Film Dryer (ATFD) Sizing & Thermal Design" 
  description="High-viscosity conductive thin-film thermal processing loops. Our ATFD systems optimize rotor blade clearances to suppress scaling and enable single-pass drying."
  url="/services/atfd-systems"
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
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Conductive Thin-Film Dynamics</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
              Agitated Thin Film Dryers (ATFD / VTFD)
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Rigorous thermal designs configured explicitly for highly viscous, sticky, heat-sensitive, or fouling-prone fluids moving down to bone-dry solids in a single pass.
            </p>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">1. Mechanical & Process Parameters</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                <h3 className="text-xl font-bold text-primary">High-Viscosity Slurry Thermal Loops</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  ATFD systems bypass traditional liquid-phase restrictions. Our designs compute precise heat fluxes required to manage the rapid phase changes from concentrated liquid feeds into pastes, and finally into free-flowing dry crystals.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                <h3 className="text-xl font-bold text-primary">Rotor Blade Clearance & Turbulence Sizing</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  By optimizing mechanical blade clearances against the inner jacket wall, the high-speed rotor continuously generates an intensely turbulent bow-wave film, suppressing the thermal resistance typically caused by product fouling.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                <h3 className="text-xl font-bold text-primary">Single-Pass Crystallization Processing</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  By matching raw thermal work against controlled film transit times, our systems execute multi-stage concentration and solid recovery steps inside a single vertical or horizontal processing chamber.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                <h3 className="text-xl font-bold text-primary">Vacuum-Assisted Thermal Management</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For thermal-sensitive structures, we build tight vacuum seals into the rotor shaft lines. Lowering internal absolute pressures allows flashing to proceed at minimized temperatures, protecting delicate compounds.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 lg:p-12 space-y-4">
            <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
              <Layers className="text-primary h-6 w-6" /> Conductive Heat Flux Modeling
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Evaluating thin-film conductive processing involves establishing the precise thermal area ($A$) required to counter variable product film coefficients ($h_f$) as the fluid moisture drops away:
            </p>
            <div className="my-4 p-4 bg-muted/30 rounded-lg text-center font-mono text-sm border border-border text-primary">
              Q = U · A · ΔT<sub>lm</sub>  where  1/U = 1/h<sub>steam</sub> + x<sub>wall</sub>/k<sub>wall</sub> + 1/h<sub>film</sub>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Thermovap maintains high values for $h_{film}$ by sizing high tip-speed rotors that continuously peel back and renew the product boundary layer, providing high heat transfer rates across short exposure times.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">2. Exhaustive Technical FAQ Matrix</h2>
            <div className="grid gap-4">
              {[
                { q: "What typical clearance dimension is maintained between the rotor blades and the heating jacket?", a: "We maintain a tight mechanical clearance of $1.0\\text{ mm}$ to $2.0\\text{ mm}$ depending on the shell diameter, ensuring the rotor blades intensely agitate the product film without contacting the metal wall." },
                { q: "How does an ATFD handle the highly sticky 'paste zone' during drying profiles?", a: "The high mechanical shear of the rotating blades breaks up the paste phase, converting it into a turbulent film and preventing it from scaling onto the heat-exchange surfaces." },
                { q: "Why choose a vertical ATFD configuration over a horizontal model?", a: "Vertical configurations rely on gravity to drive the film downward, making them ideal for high-throughput crystallization. Horizontal versions are preferred when longer, adjustable residence times are necessary." },
                { q: "What style of shaft seal is utilized to maintain deep vacuum conditions?", a: "We utilize custom-engineered, liquid-cooled double mechanical seals to prevent air leakage along the high-speed rotating rotor shaft." },
                { q: "How are volatile or toxic solvent vapors safely reclaimed from an ATFD shell?", a: "The vapor stream passes directly out of a wide vapor outlet into a closely coupled shell-and-tube surface condenser, recovering 99%+ of volatile solvents under vacuum." }
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
