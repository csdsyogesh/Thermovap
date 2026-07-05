import React from 'react';
import { SEO } from '../SEO'; 
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, CheckCircle2, Cpu, BarChart3, ShieldAlert } from 'lucide-react';

export default function PharmaBiotech() {
  return (
    <>
      <SEO 
        title="Pharmaceutical & Biotech Thermal Systems" 
        description="Sanitary-grade cGMP evaporation configurations engineered for continuous crystallization, solvent recovery, and pure water reclamation."
        url="/thermindust/pharma-biotech"
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
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">Specialized Industry Applications</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
                Pharmaceuticals & Biotech
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Sanitary-grade thermal processing configurations designed for continuous crystallization, solvent recovery, and pure water reclamation matching strict regulatory hygiene parameters and low-conductivity requirements.
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
                  Pharmaceutical processing demands strict adherence to cGMP requirements, combining absolute sanitary design with high thermal flexibility. Our evaporator and dryer installations feature premium electro-polished fluid contact surfaces and self-draining geometric profiles to completely eliminate dead legs and prevent batch cross-contamination or microbial growth.
                </p>
                <p>
                  To isolate hazardous active pharmaceutical ingredients (APIs) and treat toxic process rejects, we deploy specialized closed-loop Agitated Thin Film Evaporators (ATFD) operating under deep vacuum. The system strips volatile organic solvents from the waste stream, condensing them cleanly while reducing the residual mass to dry crystals. This precise thermodynamic path yields clean condensates matching strict plant reuse guidelines, while securely containing hazardous chemical residues.
                </p>
              </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-2">
              <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                  <BarChart3 className="text-primary h-5 w-5" /> Sanitary Condensation & Mass Safety
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  Our distillation and recovery systems incorporate double tube-sheet configurations within the main vapor condensers. This defensive mechanical strategy isolates utility cooling water from pure solvent distillates, guaranteeing zero process cross-contamination even in the event of a structural tube failure.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                  <ShieldAlert className="text-primary h-5 w-5" /> cGMP Sterilization Profiles
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  Thermovap systems integrate seamless cleaning parameters, including automated Clean-In-Place (CIP) and Steam-In-Place (SIP) routing arrays. Internal spray balls are systematically positioned to achieve 360-degree coverage across all vapor heads and separation vessels, ensuring rapid, reliable validation sweeps between batch runs.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
                Deployed Hardware Architectures
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "cGMP Electro-Polished ATFDs",
                  "Double Tube-Sheet Condensers",
                  "Sanitary Fractionating Columns",
                  "Pure Clean-Steam Reboilers",
                  "Self-Draining Evaporation Loops",
                  "Automated CIP/SIP Spray Blocks",
                  "High-Vacuum Solvent Strippers",
                  "Biotech Multi-Stage Evaporators",
                  "Zero Dead-Leg Product Piping"
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
                Pharma & Biotech Verification Matrix (FAQs)
              </h2>
              <div className="grid gap-4">
                {[
                  { q: "How do your systems satisfy cGMP standards?", a: "We utilize premium electro-polished SS316L contact zones, self-draining internal geometries, and certified zero dead-leg path architectures to fulfill stringent regulatory standards." },
                  { q: "What is the typical surface finish achieved for pharmaceutical product paths?", a: "All internal surfaces undergo precise mechanical polishing followed by electro-polishing to achieve a surface roughness rating under 0.4 to 0.5 micrometers." },
                  { q: "Can your systems recover volatile organic solvents from API manufacturing rejects?", a: "Yes. Our high-vacuum solvent fractionating columns split and reclaim up to 97 percent of volatile compounds like acetone or toluene for direct facility reuse." },
                  { q: "How does the double tube-sheet design secure product safety?", a: "It provides a physical air barrier between the cooling fluid and the pure solvent vapor. If a tube seal leaks, the fluid drains safely outward rather than mixing into the product." },
                  { q: "What drying technology is deployed for heat-sensitive antibiotic slurries?", a: "We deploy deep-vacuum ATFD units that use continuous rotating scraping blades to dry antibiotic slurries in a single pass under low operational temperatures." },
                  { q: "Are your cleaning protocols fully automated?", a: "Yes. The systems integrate automated multi-tier CIP/SIP sequences that control wash times, temperature levels, and chemical concentrations." },
                  { q: "How do you manage the recovery of high-purity water?", a: "Our vapor separators combine spacious velocity drops with multi-stage demister pads to isolate clean water condensates with conductivity levels under 1.5 micro-Siemens per centimeter." },
                  { q: "Can your systems process toxic API waste down to zero liquid discharge?", a: "Yes. Our closed-loop thin-film dryers convert hazardous pharmaceutical effluents into manageable dry salt cakes, achieving complete ZLD compliance." },
                  { q: "What mechanisms prevent cross-contamination during product switches?", a: "The self-draining profile guarantees complete material evacuation, while our targeted CIP spray balls wash the entire vapor system, leaving zero batch cross-over." },
                  { q: "Do you supply complete validation documentation for regulatory audits?", a: "Yes. We deliver full DQ, IQ, and OQ validation support documentation alongside material trace certificates to ensure rapid regulatory compliance." },
                  { q: "What instrumentation loops control thermal exposure parameters during enzyme broth concentration?", a: "We combine multi-tier absolute pressure cascades with variable-frequency product feed pumps to hold fluid vaporization bounds completely uniform, preventing enzymatic degradation." }
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