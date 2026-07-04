import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, CheckCircle2, Cpu, BarChart3, ShieldAlert } from 'lucide-react';

export default function PaddleDryer() {
  return (
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
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Thermal Dehydration Systems</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
              Industrial Paddle Dryers
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Heavy-duty indirect contact thermal dryers designed to process high-volume sludges, crystalline cakes, and dense chemical residues.
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
                Paddle Dryers are heavy-duty, indirect-contact thermal drying systems engineered to process high-volume solids, sludges, and filter cakes without requiring large air vectors. The core design consists of a horizontal jacketed trough enclosing twin counter-rotating shafts fitted with specialized wedge-shaped hollow paddles. The heating medium (such as live steam or hot thermal oil) flows continuously inside both the jacket and the hollow paddles.
              </p>
              <p>
                As material enters the trough, the interlocking wedge-shaped paddles rotate slowly, thoroughly mixing the mass and optimizing contact with the heated surfaces. The specialized paddle profile maximizes the available surface area for indirect heat transfer while generating an intermeshing mechanical movement that keeps the material moving forward, preventing wall pasting or stagnant accumulation.
              </p>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <BarChart3 className="text-primary h-5 w-5" /> Operational Target & Purpose
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                This technology is highly effective for heavy processing duties like municipal sludge drying, chemical cake concentration, and hazardous waste reduction. Processing materials via indirect heat transfer eliminates the need for massive air circulation loops, significantly reducing off-gas treatment costs.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <ShieldAlert className="text-primary h-5 w-5" /> Key Thermal Benefits
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                The primary benefit of a Paddle Dryer is its highly efficient thermal design. Circulating the heating medium inside both the jacket and the hollow paddles achieves excellent heat transfer rates per square meter of equipment volume. This compact footprint lowers heat losses, helping facilities reduce total utility expenses.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
              Design Innovations & Engineering Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Intermeshing Twin Counter-Rotating Shafts",
                "Hollow Wedge-Shaped Heating Paddles",
                "Indirect Contact Jacketed Thermal Troughs",
                "High-Surface Contact Energy Efficiencies",
                "Low Off-Gas Volumetric Air Footprints",
                "Continuous Interlocking Self-Cleaning Actions",
                "Heavy-Duty Solid Exit Weir Regulators",
                "Corrosion-Proof Heavy Wall Metallurgy",
                "Vacuum Assisted Low-Temp Option Modules"
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
              Paddle Dryer Verification Matrix (FAQs)
            </h2>
            <div className="grid gap-4">
              {[
                { q: "How does the paddle dryer transfer heat without large air vectors?", a: "The heating medium circulates inside the hollow paddles and the outer jacket, transferring heat indirectly via conduction when the material contacts the hot metal surfaces." },
                { q: "Why do the wedge-shaped paddles utilize a hollow design?", a: "The hollow design allows steam or hot thermal oil to circulate through the paddles, maximizing the heated surface area within a compact machine volume." },
                { q: "What types of materials are best suited for paddle dryers?", a: "They excel at processing non-pumpable, heavy solids, including municipal sludges, hazardous chemical wastes, and filter cakes." },
                { q: "How does the intermeshing design prevent wall pasting?", a: "The counter-rotating shafts create an interlocking movement where the paddles continuously clear material from each other, preventing sticky buildup." },
                { q: "What typical volume reductions can be achieved with industrial sludges?", a: "Our paddle dryers routinely achieve significant volume reductions, shrinking heavy sludges by up to 70-80% to lower disposal overheads." },
                { q: "What heating media can be deployed inside the shafts?", a: "The system is versatile, utilizing live steam, hot water, or thermal fluid based on your facility's utility availability." },
                { q: "How is dust carryover managed if the airflow is minimized?", a: "The low air velocity inside the trough minimizes dust generation, requiring only a compact exhaust filter to maintain clean operations." },
                { q: "What materials of construction are offered for corrosive chemical residues?", a: "We build units using heavy-walled SS316L or Duplex stainless steels to secure the trough and paddles against aggressive corrosion." },
                { q: "Can the residence time be regulated for continuous drying?", a: "Yes, we integrate adjustable overflow weir plates at the discharge gate to precisely control material levels and retention times." },
                { q: "What mechanical seal configurations secure the rotating shafts?", a: "We deploy heavy-duty packing glands or mechanical face seals to ensure absolute containment and maintain high vacuum boundaries." }
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
  );
}