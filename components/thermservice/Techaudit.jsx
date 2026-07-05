import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../SEO';
import { ArrowLeft, HelpCircle, ShieldAlert } from 'lucide-react';

export default function TechnicalAuditing() {
  return (
    <>
      <SEO 
        title="Industrial Evaporator Audits & MEE Troubleshooting | Thermovap" 
        description="Line-level engineering interventions for multi-effect evaporators and dryers. Real-time enthalpy path tracing, vacuum decay mapping, and tube scaling diagnostics."
        url="/services/technical-auditing"
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
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">Line-Level Interventions</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
                Technical Audits, Troubleshooting & Plant Optimization
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Direct engineering interventions and process optimization sweeps executed across operating Multi-Effect Evaporator (MEE) networks and industrial drying lines.
              </p>
            </div>
          </section>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">1. Diagnostic Scope & Deliverables</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                  <h3 className="text-xl font-bold text-primary">Enthalpy Path Tracing Audits</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We deploy thermal tracking and ultrasonic flow sensors directly onto your active utility headers, tracing heat distribution inefficiencies and identifying exact enthalpy leak locations across all effects.
                  </p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                  <h3 className="text-xl font-bold text-primary">Tube Scaling & Vacuum Decay Diagnostics</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Through localized vacuum decay mapping and temperature monitoring, we locate non-condensable gas traps, structural air leaks, and underlying tube fouling trends before they cause a plant stall.
                  </p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                  <h3 className="text-xl font-bold text-primary">Mass-Energy Balance Validation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our engineers build localized mass balances across your active piping systems, checking true processing limits against design specifications to outline low-cost capacity debottlenecking blueprints.
                  </p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                  <h3 className="text-xl font-bold text-primary">PFD / P&ID Verification</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We audit legacy field piping against existing Process Flow Diagrams (PFD) and Piping & Instrumentation Diagrams (P&ID), correcting instrumentation layouts to support automation upgrades.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card border border-border rounded-2xl p-8 lg:p-12 space-y-4">
              <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
                <ShieldAlert className="text-primary h-6 w-6" /> Localized Heat Exchanger Fouling Metrics
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                When evaluating a degradation trend inside an active evaporator effect, our technical teams calculate the localized fouling resistance index (Rf) to isolate hardware issues from operational parameters:
              </p>
              <div className="my-4 p-4 bg-muted/30 rounded-lg text-center font-mono text-sm border border-border text-primary">
                Rf = (1 / U_dirty) - (1 / U_clean)
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Tracking changes in this value over consecutive shifts allows our team to identify issues like improper liquor distribution, poor wetting rates, or sub-optimal CIP chemical dosing, providing clear remediation steps.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">2. Exhaustive Technical FAQ Matrix</h2>
              <div className="grid gap-4">
                {[
                  { q: "What typical issues trigger a progressive loss of operating vacuum in a multi-effect system?", a: "Vacuum drops are usually caused by an accumulation of non-condensable gases, structural leaks along the seals, or low cooling water flow at the condenser. We isolate these issues by setting up multi-stage steam ejectors and continuous vents at dead zones in the shell." },
                  { q: "How can a plant determine if low evaporation capacity is caused by tube scaling or short steam supply?", a: "We calculate the dynamic U-value across each effect. A high temperature difference (ΔT) coupled with a declining U-value points directly to tube-side scaling rather than steam input starvation." },
                  { q: "What diagnostic approach isolates non-condensable gas (NCG) pockets within a calandria shell?", a: "We trace surface temperature variations across the shell body. Unusually cool zones indicate NCG pockets, which can be cleared by updating venting orifice locations." },
                  { q: "How do you resolve high product entrainment or liquid carryover into vapor lines during high-capacity runs?", a: "High vapor velocities can drag droplets into clean lines. We prevent this carryover by designing centrifugal vapor-liquid separation chambers and high-density wire mesh demister pads into the flash head." },
                  { q: "Can a field audit identify scaling causes without opening the evaporator bodies?", a: "Yes. By analyzing temperature profiles, feed concentration indices, and pressure changes (ΔP) across specific loops over consecutive shifts, we can infer scaling trends." },
                  { q: "What parameters outline a comprehensive vacuum decay test protocol?", a: "The system is brought down to maximum target vacuum under isolated ambient conditions, the extraction utilities are isolated, and the absolute pressure change is recorded over a fixed hour layout to pinpoint leak volume indices." },
                  { q: "How do field teams isolate thermodynamic inefficiencies within individual shell effects?", a: "We install ultrasonic stream flow instruments and thermal wells to map terminal enthalpy profiles, checking actual latent heat conversion metrics against your original design mass balances." },
                  { q: "What role does dynamic P&ID validation play prior to a plant automation expansion?", a: "Verifying current field configurations against legacy drawings prevents instrumentation placement errors, ensuring newly integrated automated control loops collect high-precision process variable data." },
                  { q: "How does improper liquor wetting inside a calandria affect overall equipment lifespans?", a: "Wetting levels below core parameters create dry spots inside tube surfaces. This triggers localized salt crystallization, rapid metal scale accumulation, and severe stress pitting bounds." },
                  { q: "What optimization approach isolates short-circuiting patterns within cooling towers?", a: "We map thermal stratification arrays across your basin and fill headers. Tracking these profiles allows our engineers to balance flow distributions and maximize your system's overall heat rejection capacity." },
                  { q: "How does Thermovap identify condensate contamination backflows during an audit?", a: "We place continuous electrical conductivity monitoring arrays onto your steam recovery circuits. Sudden conductivity spikes expose split tube walls or liquid carryover across the separation spaces." }
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