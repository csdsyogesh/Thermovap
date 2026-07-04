import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, CheckCircle2, Cpu, Shirt, BarChart3, ShieldAlert } from 'lucide-react';

export default function TextilesDyeing() {
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
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Specialized Industry Applications</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
              Textiles & Dyeing Infrastructure
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              High-recovery thermal separation loops engineered to treat complex chemical dye rejects, recover operational solvents, and isolate high-TDS salts to achieve complete zero liquid discharge (ZLD) boundaries.
            </p>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          <section className="bg-card border border-border rounded-2xl p-8 lg:p-12 space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
              <Cpu className="text-primary h-6 w-6" /> Technical Implementation & Thermal Balance
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed text-justify">
              <p>
                Dye house wash rejects contain heavy mixtures of sodium sulfate or sodium chloride alongside viscous organic fixing agents. We approach this processing challenge by implementing integrated Multi-Effect Evaporator (MEE) networks linked straight to driven crystallizers. Our setups maintain extreme liquid circulation rates, keeping fluid shear boundaries stable to manage scaling tendencies.
              </p>
              <p>
                By engineering precise hydrostatic heads over the vertical heat exchanger tubes, we suppress boiling inside the metal bundle. Evaporation occurs exclusively as a clean flash inside the separator drum, preventing salt scaling from taking root on the heat transfer walls. The separated vapor stream passes through high-efficiency demister blocks to deliver clean, low-conductivity water for direct reuse inside the dye bath arrays, fully closing the industrial loop.
              </p>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <BarChart3 className="text-primary h-5 w-5" /> Mass Integration & Water Recovery
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                Achieving a complete zero liquid discharge (ZLD) boundary requires balancing heavy mass loops. Our thermal configurations isolate mixed-salt solids via continuous centrifuge loops while recovering up to 95% of process water volume, protecting operations from water scarcity and local environmental restrictions.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <ShieldAlert className="text-primary h-5 w-5" /> Salt Recovery Optimization
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                Our crystallizers optimize thermodynamic parameters to manage salt precipitation kinetics efficiently. By integrating automated slurry discharge assemblies and continuous density monitoring, we ensure consistent crystal separation without risking sudden pipeline blockage or performance drops.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
              Deployed Hardware Architectures
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Multi-Effect Dye Reject Evaporators",
                "Forced Circulation Brine Crystallizers",
                "High-Efficiency Mesh Demister Blocks",
                "Automated Slurry Discharge Loops",
                "Low-Conductivity Condensate Reclaimers",
                "Corrosion-Resistant SS316L Exchangers",
                "Vapor Compressor Enthalpy Loops",
                "Continuous Decanter Centrifuge Skids",
                "Anti-Fouling Internal Tube Geometries"
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
              Textile & ZLD Verification Matrix (FAQs)
            </h2>
            <div className="grid gap-4">
              {[
                { q: "What water quality metrics does the recovered condensate meet?", a: "The recovered water exhibits an electrical conductivity under $30\ \mu\text{S/cm}$ and minimal TDS, allowing immediate reuse inside sensitive textile dyeing operations." },
                { q: "How do your designs prevent tube clogging from sodium sulfate salts?", a: "We utilize specific forced circulation velocities ($>2.0\text{ m/s}$) paired with static head pressure to prevent boiling inside the heat exchanger, shifting precipitation safely to the flash drum." },
                { q: "What is the baseline water recovery efficiency of your textile ZLD systems?", a: "Our setups regularly recover between 92% and 96% of the incoming effluent volume as clean distillate, leaving only a highly dense slurry for salt separation." },
                { q: "Can your configurations handle complex organic dyes and sizing chemicals?", a: "Yes. The forced circulation loop keeps organic chemicals and sizing starches thoroughly mixed in suspension, avoiding wall baking and fouling." },
                { q: "What materials of construction are used for high-chloride textile rejects?", a: "We employ highly robust materials, using Duplex stainless steel or specialized internal alloy coatings to guard components against chloride-induced pitting." },
                { q: "How do you optimize specific steam consumption (SSC) in textile plants?", a: "We engineer multi-effect configurations (typically 3 to 5 stages) integrated with TVR ejector blocks to maximize thermal efficiency and reuse waste vapors." },
                { q: "What mechanism handles the final salt solids separation?", a: "The dense crystal slurry from the crystallizer flash vessel routes continuously into a decanter centrifuge or hydrocyclone system to produce dry salt cakes." },
                { q: "How long can the system run before requiring a CIP flush?", a: "Thanks to our anti-fouling hydraulic designs, our textile installations easily achieve continuous runs of 20 to 25 days before a standard water wash is required." },
                { q: "Does the system support variations in dye house effluent volume?", a: "Yes. We incorporate automated turndown controls and flexible liquid balancing loops to manage volumetric swings up to 30% smoothly." },
                { q: "What space considerations are required for your modular ZLD skids?", a: "We engineer compact layout blueprints, pre-assembling main fluid handling skids to simplify on-site installation within existing ETP footprints." }
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