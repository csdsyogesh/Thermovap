import React from 'react';
import { SEO } from '../SEO'; 
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, CheckCircle2, Cpu, BarChart3, ShieldAlert } from 'lucide-react';

export default function ScrapedSurface() {
  return (
    <>
      <SEO 
        title="Scraped Surface Evaporators" 
        description="Mechanically driven thin-film thermal evaporators built to process high-viscosity materials, sticky matrices, and highly temperature-sensitive organic concentrates."
        url="/thermproject/ssc"
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
                Scraped Surface Evaporators
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Mechanically driven thermal thin-film evaporators built to handle high-viscosity materials, sticky matrices, and temperature-sensitive concentrates.
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
                  Scraped Surface Evaporators use continuous mechanical agitation to process highly viscous or sticky solutions that would cause standard tube heat exchangers to fail. The core design consists of a large vertical or horizontal heating jacket containing a precision-engineered internal rotor assembly. The process fluid is fed directly into this jacketed zone, where high-speed rotating scraping blades constantly spread it across the internal thermal walls.
                </p>
                <p>
                  The scraping blades maintain close tolerances with the heated jacket wall, continuously spreading the fluid into an ultra-thin, highly turbulent film. This constant mechanical movement enhances heat transfer rates and prevents stagnant boundary layers from forming. Water or solvent flashes off instantly under vacuum, while the specialized blade profiles continuously sweep the thick, concentrated paste or crystal slurry toward the exit port, preventing localized product burning or wall scale buildup.
                </p>
              </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-2">
              <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                  <BarChart3 className="text-primary h-5 w-5" /> Operational Target & Purpose
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  This technology is ideal for highly viscous materials like gelatin, pure lecithin, fruit purees, sugary syrups, and complex polymer intermediates. The continuous mechanical agitation breaks down fluid resistance, allowing plants to achieve exceptionally high concentration levels without risking product scorching or scale formation.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                  <ShieldAlert className="text-primary h-5 w-5" /> Key Processing Benefits
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  The primary benefit of Scraped Surface designs is their ability to process heat-sensitive, high-viscosity materials in a single, rapid pass. By maintaining thin-film geometry and high mechanical turbulence, the system achieves strong evaporation rates while minimizing thermal exposure, preserving valuable product characteristics.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
                Design Innovations & Engineering Features
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Mechanically Driven Internal Rotor Assemblies",
                  "Precision Dynamic Scraping Blade Arrays",
                  "High-Viscosity Thin Film Geometry",
                  "Jacketed Uniform Thermal Distribution",
                  "Deep-Vacuum Low Temperature Processing",
                  "Continuous Wall Scraping Action",
                  "Heavy-Duty Solid Exit Discharge Ports",
                  "Sanitary cGMP Electro-Polished Finishes",
                  "Minimized Thermal Boundary Resistance"
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
                Scraped Surface Verification Matrix (FAQs)
              </h2>
              <div className="grid gap-4">
                {[
                  { q: "How do your scraping blades prevent product scale and scorching?", a: "The blades constantly clear the boundary layer off the heated walls, maintaining fluid movement and eliminating hot spots to prevent product burning." },
                  { q: "What viscosity ranges can these systems safely handle?", a: "They excel with highly viscous fluids, routinely processing sticky materials and heavy pastes ranging from 5,000 cP up to 50,000 cP." },
                  { q: "Can this technology operate under deep vacuum boundaries?", a: "Yes, we run these systems under high vacuum to keep operational temperatures low, protecting heat-sensitive compounds from thermal stress." },
                  { q: "What blade materials are offered for sanitary processing?", a: "We provide specialized food-grade polymers like PTFE, or premium stainless steel configurations tailored to your process requirements." },
                  { q: "How does the single-pass design protect product quality?", a: "The combination of thin-film geometry and rapid rotor transport limits total thermal residence time to mere seconds, preserving natural colors and active ingredients." },
                  { q: "What typical solid concentrations can be reached with organic purees?", a: "Our scraped surface evaporators can concentrate organic purees and sugary syrups up to 75-80% total solids in a single pass." },
                  { q: "How are the internal rotor shafts sealed against high vacuum?", a: "We integrate heavy-duty mechanical seals with continuous cooling flushes to prevent vacuum leaks and secure clean processing." },
                  { q: "Are these configurations compatible with automated CIP cycles?", a: "Yes, the internal rotor rotates during the cleaning cycle, allowing CIP fluids to clean all thermal walls thoroughly." },
                  { q: "What heating media can be utilized inside the external jacket?", a: "The jacket can be configured to use live steam, hot water, or thermal oil depending on your target operational temperatures." },
                  { q: "How do you mitigate blade wear over extended processing runs?", a: "We utilize advanced wear-resistant polymers and balanced floating-blade mountings to maintain consistent wall contact while extending blade life." },
                  { q: "What primary design metric determines whether a vertical or horizontal installation layout is selected?", a: "Vertical layouts leverage gravity to accelerate transit down the heating zone and are favored for fouling crystal recovery loops. Horizontal setups provide adjustable residence time parameters for thick, non-flowing polymer concentrates." }
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