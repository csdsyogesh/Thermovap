import React from 'react';
import { SEO } from '../SEO'; 
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, CheckCircle2, Cpu, BarChart3, ShieldAlert } from 'lucide-react';

export default function WaterTreatment() {
  return (
    <>
      <SEO 
        title="Industrial Water Treatment Evaporators & ETP/STP" 
        description="Advanced environmental process loops combining high-velocity brine concentrators and crystallizers to recover pure low-conductivity distillate."
        url="/thermindust/water-treatment"
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
                Industrial Water Treatment (ETP/STP)
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Advanced environmental process loops combining high-velocity brine concentrators and driven crystallizers to recover pure, low-conductivity distillate water from complex industrial wastewater rejects.
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
                  Managing heavy reverse osmosis (RO) brine rejects and complex Effluent Treatment Plant (ETP) wastewater requires robust thermal processing infrastructure to close the recycling loop completely. We engineer highly efficient brine concentrators and forced circulation crystallization modules that continuously reduce waste volumes by upwards of 95 percent. Our design approaches map specific scale boundaries to maximize clean water yield while maintaining process stability.
                </p>
                <p>
                  To reduce facility power overheads, these systems incorporate state-of-the-art Mechanical Vapor Recompression (MVR) or multi-effect cascading architectures. The secondary low-pressure steam generated from wastewater concentration is captured, recompressed, and fed back into the heating system. This minimizes primary steam demand, yielding high-purity, low-conductivity distillate water ready for immediate manufacturing reuse while separating solid waste salts cleanly.
                </p>
              </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-2">
              <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                  <BarChart3 className="text-primary h-5 w-5" /> Mass Integration & Water Reclaim
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  Our environmental layouts emphasize reliable water reclamation matrices. By incorporating wide vapor flow channels and multi-tier structural mist eliminators, we eliminate liquid carries, producing clean distillate water to insulate plants from local water shortages.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                  <ShieldAlert className="text-primary h-5 w-5" /> Dynamic Fouling Suppression
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  Wastewater streams show complex scaling chemistries. We mitigate mineral deposition risks by maintaining high internal tube flow rates and utilizing automated cleaning-in-place (CIP) controls to maintain consistent heat transfer performance across extended continuous runs.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
                Deployed Hardware Architectures
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "MVR Powered Brine Concentrators",
                  "Forced Circulation ETP Crystallizers",
                  "High-Efficiency Structural Demisters",
                  "Multi-Stage Condensate Heat Reclaimers",
                  "Corrosion-Resistant Titanium Bundles",
                  "Automated Slurry Density Handlers",
                  "Spacious Vapor Separation Drums",
                  "Sanitary CIP Chemical Skids",
                  "Closed-Loop Water Recycling Arrays"
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
                Water Treatment Verification Matrix (FAQs)
              </h2>
              <div className="grid gap-4">
                {[
                  { q: "What water purity standards does the recovered distillate meet?", a: "The recovered distillate routinely shows electrical conductivity under 20 to 50 micro-Siemens per centimeter, making it fully compatible with raw cooling tower or boiler feed loops." },
                  { q: "How does the configuration manage heavy reverse osmosis (RO) reject streams?", a: "We utilize multi-stage brine concentrators to handle high baseline TDS, driving down liquid volumes until the salts can be crystallized out cleanly." },
                  { q: "What is the primary energy saving mechanism in your ZLD layouts?", a: "We integrate high-efficiency MVR mechanical blowers that recompress exhaust vapors, reducing live steam demands by up to 70 percent during continuous operations." },
                  { q: "How do your designs prevent calcium sulfate scaling inside the heat exchanger?", a: "By maintaining tube velocities over 2.2 meters per second and keeping hydrostatic heads adjusted, we suppress internal boiling and prevent scale formation inside the tubes." },
                  { q: "What materials of construction are offered for high-salt ETP waste lines?", a: "We offer premium materials, utilizing heavy-walled Duplex stainless steel or solid Titanium configurations to counter chloride corrosion." },
                  { q: "Can the system adapt to changes in wastewater feed volume?", a: "Yes. Our systems feature automated flow tracking and adjustable recirculation controls to manage volumetric variations up to 30 percent smoothly." },
                  { q: "How are concentrated salt solids extracted from the system?", a: "The dense crystal slurry from the crystallization stage routes continuously to decanter centrifuges or pusher centrifuges to produce solid salt cakes." },
                  { q: "What typical maintenance intervals do your configurations support?", a: "Our anti-fouling fluid profiles allow treatment facilities to maintain steady operations for 20 to 28 days between CIP sweeps." },
                  { q: "How do you control foaming tendencies in industrial wastewater?", a: "We integrate custom mechanical foam breakers and chemical anti-foam dosing assemblies inside our spacious vapor separation chambers." },
                  { q: "Do you supply pre-assembled modular skids to simplify on-site setup?", a: "Yes. We design and build pre-assembled structural skids to streamline mechanical installation and reduce on-site commissioning times." },
                  { q: "What primary operational parameter monitors scaling thresholds in biological sewage treatment plant effluents?", a: "We continuously track real-time changes in total dissolved organic carbon and hardness values within the primary pre-heating line, adjusting automated anti-scalant dosing scales to prevent organic fouling along the thermal tubes." }
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