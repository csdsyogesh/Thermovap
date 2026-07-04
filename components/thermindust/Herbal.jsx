import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../SEO'; 
import { ArrowLeft, HelpCircle, CheckCircle2, Cpu, Vegan, BarChart3, ShieldAlert } from 'lucide-react';

export default function HerbalCatechu() {
  return (
    <>
    <SEO 
  title="Herbal, Extraction & Catechu Evaporation Systems" 
  description="Specialized high-vacuum thermal concentration networks engineered to safely process delicate organic plant extracts and high-purity catechu solutions."
  url="/thermindust/herbal-catechu"
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
              Herbal, Extraction & Catechu
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Specialized thermal concentration networks engineered to process organic extracts, plant mass liquors, and high-purity catechu solutions without compromising delicate biochemical structures or active ingredients.
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
                Botanical matrix concentration demands strict operational boundaries due to the rapid degradation kinetics of active phytochemicals under sustained thermal stress. We engineer custom multi-stage falling film or rising film configurations running under high vacuum levels to suppress boiling points well below $50^\circ\text{'C'}$. By utilizing specific internal distribution mechanisms and short-path geometric clearances, we force absolute minimum residence times, preventing degradation of complex tannic chains, alkaloids, and volatile polyphenols.
              </p>
              <p>
                For highly viscous intermediate syrups like raw catechu cuts, we implement vacuum-assisted Forced Circulation loops. High fluid velocities  generate adequate shear rates across the inner tube walls to counteract the natural high-fouling profile of concentrated plant sugars. The concentrated liquor is then directly linked to closed-loop Agitated Thin Film Dryers (ATFD) or customized vacuum dryers to flash off remaining bound liquids instantly, producing high-purity solids while preserving complete product bio-activity.
              </p>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <BarChart3 className="text-primary h-5 w-5" /> Solvent Stripping & Mass Integration
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                Botanical raw lines frequently rely on organic hydro-alcoholic or pure solvent extraction streams. Our engineering blueprints incorporate precision multi-tier fractionating columns and high-duty vacuum condensers that strip volatile solvents (such as ethanol, methanol, or hexane) from the primary extract mass. This dual mass-enthalpy loop maximizes product purity while yielding clean solvent distillates for direct plant recycling.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <ShieldAlert className="text-primary h-5 w-5" /> Caking & Viscosity Boundary Control
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                As herbal concentrates lose moisture, their rheological profiles shift rapidly into highly cohesive, non-Newtonian phases. We resolve these issues by introducing modular scraping blades in our thin-film arrays and implementing automated high-shear fluidization techniques. This keeps sticky, high-viscosity products moving smoothly, preventing wall pasting, material charring, and premature system blockages.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
              Deployed Hardware Architectures
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Deep Vacuum Falling Film Loops",
                "Forced Circulation Catechu Concentrators",
                "Scraped-Surface Vacuum ATFD Units",
                "Closed-Loop Solvent Distillation Columns",
                "High-Vacuum Shell & Tube Condensers",
                "Non-Scorching Liquid Distribution Heads",
                "Adiabatic Low-Temp Vapor Separators",
                "High-Shear Extract Finishing Pans",
                "Multi-Stage Clean solvent Pre-heaters"
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
              Herbal & Catechu Verification Matrix (FAQs)
            </h2>
            <div className="grid gap-4">
              {[
                { q: "How do your thermal systems protect temperature-sensitive botanical extracts?", a: "We operate our evaporator networks under deep vacuum profiles, which significantly reduces the internal boiling point to $45^\circ\text{C}-50^\circ\text{C}$. This approach, combined with single-pass short residence times, ensures delicate bio-molecules experience zero thermal breakdown." },
                { q: "How does the configuration prevent sticky extract accumulation on heat transfer walls?", a: "In late-stage loops where sugars and resins become sticky, we implement Scraped Surface Thin Film layouts or high-velocity Forced Circulation systems to continuously sweep the boundary layers." },
                { q: "What efficiency metrics can be expected for volatile solvent recovery?", a: "Our completely sealed vacuum vapor condensing loops isolate and reclaim up to 98% of volatile processing solvents like ethanol, minimizing raw material losses." },
                { q: "Can your systems continuously handle highly viscous catechu syrups?", a: "Yes. By calculating localized non-Newtonian viscosity variations and utilizing heavy-duty internal rotor blade geometries, our ATFD arrays continuously process thick syrups directly into dry solids." },
                { q: "What materials of construction are offered for organic acid extraction processes?", a: "We deliver hardware matching SS316L, or specialized Hastelloy configurations when handling highly corrosive organic extracts or aggressive chemical solvents." },
                { q: "What is the primary advantage of using TVR arrays in herbal processing?", a: "A Thermal Vapor Recompressor (TVR) allows the plant to entrain and reuse low-pressure exhaust vapors, doubling steam economy without exposing heat-sensitive components to higher temperature levels." },
                { q: "How is volatile carryover controlled in vapor separation vessels?", a: "We size spacious vapor chambers with custom-baffled chevron demisters to fully trap micro-droplets, preventing active extract components from escaping into the condensate loop." },
                { q: "Are your systems fully self-draining to allow for quick batch modifications?", a: "Yes. Our botanical process setups utilize highly sanitary, self-draining geometric profiles to ensure complete product recovery and clean batch changes." },
                { q: "What is the typical solid content baseline achieved before final drying stages?", a: "Our multi-effect pre-concentrators safely step up typical extract streams from a low 5-10% starting baseline up to 45-55% total solids prior to finishing operations." },
                { q: "How do you manage potential foaming problems during high-vacuum distillation?", a: "We integrate custom internal mechanical foam breakers and chemical injection ports within our vapor heads to keep the fluid boundaries stable." }
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