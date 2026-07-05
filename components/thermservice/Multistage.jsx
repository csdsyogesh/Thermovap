import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../SEO';
import { ArrowLeft, HelpCircle, Settings, Activity } from 'lucide-react';

export default function MultiStageDryers() {
  return (
    <>
    <SEO 
  title="Multi-Stage Dryer Plant Design & Energy Cascading Systems" 
  description="Integrated spray dryer and fluid bed drying configurations. We lower specific heat consumption (SHC) through aggressive air-to-air enthalpy recovery loops."
  url="/services/multi-stage-dryers"
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
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Thermal System Cascading</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
              Multi-Stage Drying Infrastructure & Energy Cascading
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive plant designs built to link primary drying stages with secondary conditioning beds, maximizing global fuel efficiencies.
            </p>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">1. Multi-Tier Process Architecture</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                <h3 className="text-xl font-bold text-primary">Integrated FBD & Spray Dryer Combinations</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Instead of forcing full moisture removal inside a single large spray chamber, we discharge partially dried powder ($8\% - 12\%$ moisture) into an integrated fluid bed base. This optimizes overall volume requirements.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                <h3 className="text-xl font-bold text-primary">Multi-Tier Moisture Profiling</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We split drying configurations into separate thermal zones. High-velocity surface evaporation occurs inside the co-current spray zone, while slow, bound internal water is drawn out in lower-temperature secondary fluid beds.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                <h3 className="text-xl font-bold text-primary">Energy Recovery via Exhaust Pre-Heating</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Drying loops discard significant low-grade heat. We integrate gas-to-liquid air preheaters and heat pumps to capture exhaust enthalpy, redirecting energy back into initial raw air inlet configurations.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                <h3 className="text-xl font-bold text-primary">Agglomeration Physics & Secondary Conditioning</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  By returning recovered fine particles from the cyclones back into the atomization cloud, we promote liquid-bridge agglomeration. This yields larger, porous particle structures with excellent rehydration profiles.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 lg:p-12 space-y-4">
            <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
              <Settings className="text-primary h-6 w-6" /> Specific Heat Consumption Reduction Indices
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Splitting the drying curve across multi-stage configurations lowers the specific heat consumption index ($SHC$) by avoiding the low thermal efficiency regions found at the tail-end of single-stage convective systems:
            </p>
            <div className="my-4 p-4 bg-muted/30 rounded-lg text-center font-mono text-sm border border-border text-primary">
              SHC<sub>total</sub> = [Q<sub>stage 1</sub> + Q<sub>stage 2</sub> - Q<sub>recovered</sub>] / m<sub>water evaporated</sub>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Thermovap designs achieve overall utility savings of up to $20\% - 30\%$ compared to standalone single-stage installations by cascading air enthalpies through downstream vibrating configurations.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">2. Exhaustive Technical FAQ Matrix</h2>
            <div className="grid gap-4">
              {[
                { q: "What is the primary operational advantage of a 3-stage drying configuration?", a: "A 3-stage system optimizes energy use and powder structure. Stage 1 flash dries the liquid down to a sticky paste; Stage 2 handles the falling-rate drying zone in an integrated bed; Stage 3 achieves final moisture goals and cools the powder." },
                { q: "How does fine-particle recycling back to the atomization cloud yield agglomerated structures?", a: "Dry fine dust particles collide with fresh liquid droplets under sticky surface conditions, adhering to form porous clusters with excellent instant dissolving properties." },
                { q: "What design measures prevent condensation inside energy-recovery air preheaters?", a: "We maintain air velocities above the dew-point boundary layer or integrate automated water washing nozzles to periodically clean fine dust deposits from the exchanger plates." },
                { q: "Can distinct materials or additives be introduced into the secondary bed stage?", a: "Yes. The secondary fluid bed can be configured with separate dosing ports to add dry vitamins, stabilizers, or secondary powder components directly into the product stream." },
                { q: "How does a multi-stage plant setup reduce the structural footprint of the factory building?", a: "By shifting the slow final drying phase to a compact fluid bed, the required height and diameter of the primary spray drying tower are significantly reduced." }
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