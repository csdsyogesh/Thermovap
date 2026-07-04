import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, Recycle, Droplet, ShieldCheck, Activity } from 'lucide-react';

export default function ZldSolutionsPage() {
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
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Environmental Process Sizing</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
              Zero Liquid Discharge (ZLD) Infrastructure
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Integrated pre-concentration loops and crystal separation systems engineered to close industrial plant water loops, reclaiming pure distillate while yielding dry solid salts.
            </p>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">1. Core ZLD Sub-Systems</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-2xl border border-border space-y-3">
                <Recycle className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-card-foreground">Brine Concentration</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Processes highly corrosive reject streams carrying high Total Dissolved Solids (TDS). We apply advanced thermal models to concentrate wastewater arrays safely up to their saturation thresholds.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border space-y-3">
                <Droplet className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-card-foreground">Forced Crystallizers</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The final mechanical step where solid salts are precipitated. By suppressing boiling inside the tube core and allowing flashing inside a vacuum vessel, crystals form cleanly for dewatering.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border space-y-3">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-card-foreground">Distillate Reclamation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Recovers low-conductivity condensate water, returning high-purity distillate back into plant cooling towers and boilers to reduce overall raw water intake needs.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 lg:p-12 space-y-4">
            <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
              <Activity className="text-primary h-6 w-6" /> Engineering Against Tube Scaling
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Uncontrolled scaling from calcium, silicates, or sulfates onto tube inner walls is the leading cause of downtime in standard ZLD plants. Thermovap eliminates this risk by maintaining strict fluid velocities ($&gt;2.2 \text{ 'm/s'}$) combined with high hydrostatic heads. This layout configuration ensures boiling and salt precipitation occur inside the separator flash tank rather than inside the heat exchanger tubes.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">2. Exhaustive ZLD FAQ Matrix</h2>
            <div className="grid gap-4">
              {[
                { q: "Why do ZLD lines require forced circulation crystallizers instead of film evaporators?", a: "Film evaporators rely on clean liquid sheets. As ZLD brine crosses saturation limits, salts precipitate instantly. Standard film evaporators would scale and clog within hours, whereas forced circulation systems keep crystals suspended." },
                { q: "What specific materials are selected to counter heavy brine corrosion?", a: "High chloride payloads pose severe stress-corrosion and pitting hazards. We build wet process areas using Duplex Stainless Steel (SS2205), Super Duplex (SS2507), or Titanium Alloys based on chemical profiles." },
                { q: "Can MVR loops be integrated into an industrial ZLD setup?", a: "Yes. Integrating Mechanical Vapor Recompression (MVR) ahead of the final crystallizer stage compresses and reuses exhaust vapors, lowering boiler steam demand by up to 60%." },
                { q: "How are solid crystalline salts collected from the crystallizer loop?", a: "Concentrated slurry from the crystallizer cone is routed to a hydrocyclone separator. The thickened stream then drops into an industrial centrifuge to isolate dry salt cakes." },
                { q: "What typical pretreatments are needed before effluent enters a ZLD system?", a: "Pretreatments include pH adjustment to manage acidity, chemical softening to remove calcium/magnesium hardness, and oil filtration to prevent foaming inside the system." },
                { q: "How does Thermovap handle high boiling point elevation (BPE) in brine mixes?", a: "Concentrated wastewater often displays massive BPE spikes ($10 \text{ }^\circ\text{C}$ to $18 \text{ }^\circ\text{C}$). We design our multi-stage vacuum settings to maintain a healthy temperature driving force ($\Delta T$)." },
                { q: "What are the typical operating costs associated with thermal ZLD systems?", a: "Operating costs depend on your energy source. Using MVR systems lowers costs significantly by replacing live steam demands with high-efficiency electrical fan energy." },
                { q: "How does Thermovap ensure high purity in recovered distillate water?", a: "We size large vapor separation chambers paired with advanced mesh demisters to eliminate liquid carryover, keeping distillate conductivity consistently low." }
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