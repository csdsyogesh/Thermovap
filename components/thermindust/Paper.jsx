import React from 'react';
import { SEO } from '../SEO'; 
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, CheckCircle2, Cpu, ScrollText, BarChart3, ShieldAlert } from 'lucide-react';

export default function PulpPaper() {
  return (
    <>
    <SEO 
  title="Pulp & Paper Mill Black Liquor Evaporators" 
  description="High-efficiency multiple-effect evaporator layouts optimized to manage extreme viscosities and maximize solid concentration in black liquor."
  url="/thermindust/pulp-paper"
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
              Pulp & Paper Mill Effluents
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              High-efficiency multiple-effect black liquor concentration layouts optimized to manage extreme viscosities, maximize black liquor solids, and sustain clean evaporator tube heat-flux boundaries.
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
                Concentrating black liquor requires addressing its non-Newtonian, highly viscous behavior as total solids push past $65\%$. Our engineers handle these demanding rheological properties by structuring multi-stage setups that combine rising-film and forced circulation evaporation loops. By distributing the liquid through custom internal channels and adjusting thermal exposures sequentially, we maintain high convective heat transfer parameters over extended runs.
              </p>
              <p>
                To control the rapid deposition of silica and organic scaling components, we design high-velocity liquid paths paired with automated Clean-In-Place (CIP) configurations. The system isolates pure condensate water for straight reuse inside pulp washing steps, while stepping up the dense residual liquor to high solids concentrations, preparing it for efficient recovery boiler operations.
              </p>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <BarChart3 className="text-primary h-5 w-5" /> Enthalpy Cascading & Efficiency
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                Our mill configurations leverage comprehensive multi-effect configurations (typically 5 to 7 effects) to maximize energy integration. We integrate Thermal Vapor Recompression (TVR) setups that draw on high-pressure boiler steam to entrain lower-pressure vapors, substantially reducing fuel costs across the complete evaporation line.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <ShieldAlert className="text-primary h-5 w-5" /> High-Solids Scale Control
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                As black liquor reaches high concentration limits, mineral fouling accelerates. We manage this risk by structuring our heat-exchangers with spacious internal tubes and deploying heavy-duty recirculation pumps to sustain continuous turbulent scouring action across all internal walls.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
              Deployed Hardware Architectures
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "High-Solids Forced Circulation Loops",
                "Black Liquor Rising Film Evaporators",
                "Multi-Stage Steam Tube Pre-heaters",
                "Automated Multi-Stage CIP Networks",
                "Spacious High-Volume Separator Drums",
                "Silica Scale Fouling Mitigation Skids",
                "Heavy-Duty Liquor Transfer Pumps",
                "TVR Integrated Vapor Recompressors",
                "Sanitary Condensate Extraction Units"
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
              Pulp & Paper Verification Matrix (FAQs)
            </h2>
            <div className="grid gap-4">
              {[
                { q: "How do your designs manage the high viscosity of black liquor?", a: "We couple late-stage evaporation effects with high-capacity forced circulation pumps, ensuring strong fluid velocities to handle thick, non-Newtonian liquor behavior." },
                { q: "What total solid concentration baseline can your systems achieve?", a: "Our multiple-effect evaporation configurations can continuously step up standard black liquor from 15% solids up to over 70-75% total solids concentration." },
                { q: "How do you counteract rapid silica scaling on the inner tube walls?", a: "We maintain turbulent flow regimes ($>2.2\text{ m/s}$) combined with automated washing loops to sweep away silica elements before they bind to heat-transfer surfaces." },
                { q: "What steam economies are typically achieved in your paper mill systems?", a: "By deploying 6 or 7 distinct evaporation effects integrated with TVR arrays, we regularly achieve steam economy metrics greater than 5.5 to 6.0." },
                { q: "What materials of construction are used for aggressive black liquor processing?", a: "We deploy premium alloys, using heavy-walled SS304L or SS316L stainless steel to safeguard components against organic acid attacks and erosion." },
                { q: "Can your systems handle sudden variations in incoming feed concentration?", a: "Yes. We incorporate automated level controls and liquor recirculation loops to absorb volumetric and concentration adjustments up to 25% safely." },
                { q: "How do you recover pure water for pulp washing loops?", a: "Spacious vapor separators remove droplet carryover, yielding clean condensate streams that can route back to pulp washers to reduce clean water footprints." },
                { q: "What typical maintenance intervals do your configurations support?", a: "Our high-velocity scouring configurations allow paper mills to sustain continuous operating cycles of 25 to 30 days between standard CIP cleans." },
                { q: "How does the system handle non-condensable gas (NCG) venting?", a: "We incorporate specific NCG extraction points across the calendria shells to continuously purge non-condensable gases, ensuring high heat-transfer efficiency." },
                { q: "Do you offer engineering solutions for brown secondary fiber mill effluents?", a: "Yes. We custom design MEE and ZLD layouts specifically to concentrate highly abrasive brown paper mill waste streams down to dry solids." }
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