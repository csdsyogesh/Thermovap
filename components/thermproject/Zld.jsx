import React from 'react';
import { SEO } from '../SEO.jsx'; 
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, CheckCircle2, Cpu, BarChart3, ShieldAlert } from 'lucide-react';

export default function ZldPlant() {
  return (
    <>
      <SEO 
        title="Zero Liquid Discharge (ZLD) Plants" 
        description="Completely integrated industrial wastewater reclamation networks combining thermal brine concentration and crystallization to achieve total liquid containment compliance."
        url="/thermproject/zld"
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
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">Environmental Engineering</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
                Zero Liquid Discharge Plants (ZLD)
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Completely integrated wastewater reclamation networks combining thermal brine concentration and crystallization to achieve total liquid containment compliance.
              </p>
            </div>
          </section>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            <section className="bg-card border border-border rounded-2xl p-8 lg:p-12 space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
                <Cpu className="text-primary h-6 w-6" /> Integrated System Architecture & Process Flow
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed text-justify">
                <p>
                  A Zero Liquid Discharge (ZLD) Plant is a comprehensive industrial wastewater treatment infrastructure engineered to recover clean water from high-TDS effluents while reducing dissolved solids to solid salt cakes. The process flow begins by treating membrane filtration rejects (such as RO brine) using multi-stage thermal pre-concentrators or brine concentrators. These systems systematically evaporate water volume under vacuum, concentrating the stream close to salt saturation limits.
                </p>
                <p>
                  Once the brine approaches saturation, it routes into a dedicated Forced Circulation Crystallizer or an Agitated Thin Film Dryer (ATFD). Sensible heat and vapor separation mechanisms isolate solid crystals from the remaining liquid, which then feed continuously into decanter centrifuges to extract dry salt cakes for disposal. The clean vapor generated across all thermal stages is condensed into low-conductivity water, returning back into the facility production loop.
                </p>
              </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-2">
              <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                  <BarChart3 className="text-primary h-5 w-5" /> Operational Target & Purpose
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  ZLD installations are essential for heavy manufacturing sectors—such as chemical plants, textile dye houses, pharmaceutical facilities, and pulp mills—operating under strict local environmental discharge limits. The integrated system eliminates the need for large evaporation ponds and prevents toxic wastewater from leaching into local groundwater supplies.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                  <ShieldAlert className="text-primary h-5 w-5" /> Key Water Recovery Benefits
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  The primary benefit of a well-engineered ZLD plant is its high water reclamation rate, regularly recovering up to 95-98% of the incoming effluent volume as high-purity distillate water. This clean water is perfectly suited for reuse in high-duty boiler or cooling tower loops, insulating facilities from regional water scarcity and lowering total water acquisition overheads.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
                Design Innovations & Engineering Features
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Multi-Stage Integrated Thermal Evaporation",
                  "Forced Circulation Brine Crystallization",
                  "High-Recovery Low-Conductivity Condensates",
                  "Seamless MVR Mechanical Energy Recycling",
                  "Continuous Automated Decanter Slurry Output",
                  "Anti-Fouling Tube Geometric Balancing",
                  "Spacious Entrainment Vapor Separation Drums",
                  "Automated Multi-Stage CIP Cleaning Skids",
                  "Complete Closed-Loop Wastewater Containment"
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
                ZLD Plant Verification Matrix (FAQs)
              </h2>
              <div className="grid gap-4">
                {[
                  { q: "What defines a complete Zero Liquid Discharge plant configuration?", a: "An integrated system combining brine concentration, crystallization, and mechanical solid separation to recover clean distillate water while converting all dissolved impurities into dry, manageable salt cakes." },
                  { q: "What water purity metrics does the recovered water display?", a: "The recovered water exhibits electrical conductivity under 30-50 micro-Siemens/cm, making it ideal for immediate recycle into manufacturing operations." },
                  { q: "How do your ZLD designs optimize energy efficiency?", a: "We integrate Mechanical Vapor Recompression (MVR) blowers or multi-tier TVR ejectors that recompress exhaust vapors, reducing live steam demands by up to 65% during steady-state runs." },
                  { q: "How does the system counteract severe mineral scale buildup?", a: "We deploy high-velocity forced circulation loops (greater than 2.2 m/s) in the crystallization stages to suppress localized internal boiling and minimize scale formation on tube walls." },
                  { q: "What materials of construction are offered for high-salt wastewater?", a: "We utilize robust alloys like Duplex 2205, Super Duplex, or solid Titanium based on chloride loading to completely prevent pitting corrosion." },
                  { q: "Can the ZLD system adapt to changes in wastewater volume?", a: "Yes, our plants incorporate automated flow tracking and adjustable liquid balancing loops to manage volumetric swings up to 25% smoothly." },
                  { q: "What mechanism handles the final salt solids separation?", a: "The dense crystal slurry from the crystallization stage routes continuously to a decanter centrifuge or pusher centrifuge to produce solid salt cakes." },
                  { q: "What typical maintenance intervals do your configurations support?", a: "Our anti-fouling hydraulic designs allow ZLD facilities to maintain steady operations for 20 to 28 days between quick CIP cleaning cycles." },
                  { q: "How do you control foaming tendencies inside the vapor drums?", a: "We integrate mechanical foam breakers and automated anti-foam dosing assemblies inside our spacious vapor separation chambers." },
                  { q: "Do you supply pre-assembled modular skids to simplify on-site setup?", a: "Yes, we engineer and construct pre-assembled structural skids to streamline mechanical installation and reduce on-site commissioning times." },
                  { q: "What primary biochemical metrics limit initial membrane recovery steps prior to the thermal block?", a: "We carefully trace silica saturation limits, calcium sulfate hardness potentials, and ambient organic carbon loading indices to prevent irreversible downstream calandria crystallization blocks." }
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