import React from 'react';
import { SEO } from '../SEO'; 
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, CheckCircle2, Cpu, BarChart3, ShieldAlert } from 'lucide-react';

export default function MultiStageDryer() {
  return (
    <>
    <SEO 
  title="Multi Stage Dryers (MSD)" 
  description="Advanced multi-tier dehydration loops combining spray drying headers and integrated fluid bed bases to manufacture high-solubility agglomerated particles."
  url="/thermproject/multi"
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
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Thermal Dehydration Systems</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
              Multi Stage Dryers (MSD)
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Advanced multi-tier dehydration loops combining spray drying headers and integrated fluid bed bases to manufacture high-solubility agglomerated particles.
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
                Multi Stage Dryers (MSD) combine two distinct drying technologies into a single, high-efficiency dehydration process. The primary stage consists of a top spray drying header where liquid feed is atomized into micro-droplets. These droplets dry partially as they fall through the primary chamber, retaining enough surface moisture to remain slightly sticky.
              </p>
              <p>
                These partially dried, sticky particles land directly onto an integrated fluid bed dryer base built into the bottom of the main chamber. The fluid bed introduces a secondary conditioned air stream, gently removing bound moisture while prompting the particles to collide and bind into larger, porous clusters. This multi-tier process produces agglomerated granules with excellent instant solubility characteristics.
              </p>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <BarChart3 className="text-primary h-5 w-5" /> Operational Target & Purpose
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                MSD installations are the premier choice for manufacturing premium food and dairy compounds like infant formulas, instant whole milk powders, and high-purity nutritional mixes. The controlled, multi-stage drying profile prevents surface case hardening, yielding porous particle structures that dissolve instantly in liquids.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <ShieldAlert className="text-primary h-5 w-5" /> Key Agglomeration Benefits
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                The primary benefit of a Multi Stage system is its high thermal efficiency when processing sensitive concentrates. By shifting the final, energy-intensive drying phase to a highly efficient fluid bed base, the main spray chamber can operate at lower exhaust temperatures, reducing fuel consumption and protecting product quality.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
              Design Innovations & Engineering Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Integrated Multi-Tier Drying Chambers",
                "Top Atomization Spray Drying Headers",
                "Bottom Fluidized Bed Agglomerators",
                "Porous High-Solubility Granule Control",
                "Low Temperature Primary Thermal Exhausts",
                "Sanitary cGMP Stainless Steel Finishes",
                "High-Volume Product Recovery Cyclones",
                "Advanced Psychrometric Air Balancing",
                "Automated Clean-In-Place Spray Systems"
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
              Multi Stage Dryer Verification Matrix (FAQs)
            </h2>
            <div className="grid gap-4">
              {[
                { q: "What defines the process flow inside a Multi Stage Dryer?", a: "The system combines top-mounted spray atomization for primary moisture removal with an integrated bottom fluid bed that completes the drying phase and promotes particle agglomeration." },
                { q: "Why does this technology yield superior powder solubility?", a: "Leaving the particles slightly sticky at the end of the first stage prompts them to form porous clusters in the fluid bed, creating granules that dissolve instantly." },
                { q: "How does the system optimize overall energy efficiency?", a: "Shifting the final moisture removal to the fluid bed base allows the primary spray chamber to run at lower exhaust temperatures, reducing total fuel usage." },
                { q: "Can this system handle sticky or hygroscopic ingredients?", a: "Yes, the multi-stage configuration allows operators to adjust air conditions at each step, making it ideal for processing challenging, high-sugar formulas." },
                { q: "What materials of construction are utilized for infant formula?", a: "We construct these systems entirely from electro-polished SS316L stainless steel, meeting strict sanitary cGMP compliance guidelines." },
                { q: "How is the final particle size distribution managed?", a: "We regulate the top atomizer speeds, nozzle angles, and bottom fluidization velocities to maintain a highly consistent particle size profile." },
                { q: "What powder moisture levels are typically achieved?", a: "Our MSD units routinely deliver highly consistent outputs, achieving precise final moisture levels between 2.5% and 4.0%." },
                { q: "What maintenance intervals do these integrated units support?", a: "The balanced thermodynamic profile reduces wall accumulation, allowing the system to run continuously for 18 to 22 days before a CIP cycle." },
                { q: "How do you recover fine powder particles from the exhaust loop?", a: "Exhaust gases are routed through high-efficiency cyclones that continuously return separated fines back to the wet zone to support agglomeration." },
                { q: "Do you supply customized automated control software?", a: "Yes, we deliver comprehensive PLC-based SCADA integration to monitor and balance airflow conditions across all drying stages automatically." }
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