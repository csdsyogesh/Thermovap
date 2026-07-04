import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, CheckCircle2, Cpu, FlaskConical, BarChart3, ShieldAlert } from 'lucide-react';

export default function ChemicalProcess() {
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
              Chemical & Process Industries
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Heavy-duty concentration systems built with specialized corrosion-resistant alloys (MOC) to safely handle high-density volatile streams, aggressive inorganic acids, and complex mixed-chemical waste lines.
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
                Handling highly concentrated chemical waste streams requires precise physical modeling to counter rapid crystallization limits and aggressive corrosion kinematics. We design multi-tier thermal networks matching specific fluid behaviors, evaluating complex Boiling Point Elevations across every operational step. By utilizing optimized $60^\circ$ triangular tube sheets and adjusting baffle cut clearances, we maintain high heat flux boundaries while suppressing shell-side pressure drops.
              </p>
              <p>
                Our structural engineering emphasizes exact Material of Construction (MOC) selection to mitigate stress corrosion cracking and localized erosion. Depending on localized chemical parameters, we configure setups out of SS316L, Duplex, Super Duplex, or solid Titanium. High boundary-layer fluid velocities  are maintained inside the tube bundles via high-capacity axial flow pumps, forcing scaling minerals to remain in suspension until they enter the vapor separation vessel for clean separation.
              </p>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <BarChart3 className="text-primary h-5 w-5" /> Enthalpy Cascading & Vapor Optimization
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                Chemical processing layouts leverage advanced thermal cascading strategies to drive steam economies to their thermodynamic limits. We integrate Mechanical Vapor Recompression (MVR) blowers or multi-stage TVR units that compress volatile product vapors, recycling the latent heat energy directly back into the primary stage calendria to dramatically cut plant utility overheads.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <ShieldAlert className="text-primary h-5 w-5" /> Ion Balancing & Fouling Suppression
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                Our design methods incorporate careful ion-balancing projections to map hard mineral scaling limits before fabrication begins. By utilizing specific internal fluid velocity boundaries and controlling hydrostatic heads, our systems effectively suppress premature chemical precipitation along critical thermal interfaces, resulting in longer operating windows.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
              Deployed Hardware Architectures
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Titanium Forced Circulation Loops",
                "High-Velocity Brine Evaporators",
                "Triangular Pitch Shell & Tube Bundles",
                "Duplex Stainless Steel Separators",
                "MVR Vapor Recompression Networks",
                "Heavy-Duty Axial Flow Recirculators",
                "High-Vacuum Chemical Condensers",
                "Customized Baffle-Cut Heat Exchangers",
                "Corrosion-Proof Fluid Handling Skids"
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
              Chemical Process Verification Matrix (FAQs)
            </h2>
            <div className="grid gap-4">
              {[
                { q: "How do your chemical evaporators resist accelerated corrosion?", a: "We select specialized metallurgy based on raw fluid chemistry metrics, deploying materials like Duplex 2205, Titanium, or Hastelloy to secure hardware against aggressive chloride and acid configurations." },
                { q: "What is the primary method used to prevent salt scaling inside the tubes?", a: "We maintain high internal tube velocities ($>2.2\text{ m/s}$) paired with precise hydrostatic heads. This approach suppresses localized boiling inside the tube bundle, forcing crystal precipitation to occur inside the flash vessel." },
                { q: "Can your systems process highly concentrated inorganic acid waste streams?", a: "Yes. Our structural configurations match the thermo-physical parameters of aggressive acids, utilizing specific anti-corrosion linings and custom layouts to manage high boiling point elevations safely." },
                { q: "What energy optimization options are available for high-capacity chemical plants?", a: "We integrate specialized MVR mechanical blowers or TVR ejectors to capture and recompress secondary vapors, reducing live steam demands by up to 65% during steady-state runs." },
                { q: "How do you calculate the optimal baffle spacing for shell-and-tube exchangers?", a: "We utilize rigorous fluid dynamics calculations to establish high convective heat transfer coefficients ($U$) while keeping shell-side pressure drops ($\Delta P$) low." },
                { q: "What solid contents can be reached when processing chemical brine rejects?", a: "Our heavy-duty forced circulation crystallizers can continually concentrate raw brine solutions up to a thick 50-60% slurry phase, ideal for direct centrifugal separation." },
                { q: "How does the system handle high Boiling Point Elevation (BPE)?", a: "We balance the multi-effect temperature stages sequentially, providing adequate thermal driving forces ($\Delta T$) across later stages to offset high BPE variables." },
                { q: "Are your chemical processing plants compliant with zero-leak environmental safety codes?", a: "Yes. All vessels undergo rigorous testing protocols and incorporate double-sealed gaskets alongside premium flange designs to ensure absolute containment." },
                { q: "What typical maintenance intervals do your configurations support?", a: "Due to high-velocity scouring and ion-balanced design configurations, our chemical units routinely sustain continuous operating windows of 3 to 5 weeks between cleaning sweeps." },
                { q: "Can you retro-fit or upgrade existing chemical systems built by other vendors?", a: "Yes. We execute technical audits to identify localized bottlenecks, re-engineering internal details or adding recompression stages to boost overall plant output." }
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