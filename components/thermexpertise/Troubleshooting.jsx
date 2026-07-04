import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, Wrench, ShieldAlert, Activity } from 'lucide-react';

export default function Troubleshooting() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col justify-between">
      <div>
        {/* Navigation Header */}
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
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Critical Process Intervention</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
              Rapid Plant Troubleshooting & Operational Support
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Resolving chronic plant issues—such as severe tube scaling, liquid entrainment foaming, and product moisture variations—to minimize unscheduled downtime.
            </p>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          
          <section className="bg-card border border-border rounded-2xl p-8 lg:p-12 space-y-4">
            <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
              <Wrench className="text-primary h-6 w-6" /> Diagnosing Root Causes under Full Plant Load
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              When a core component experiences an operational upset—whether it is an evaporator losing its design vacuum, a spray dryer suffering from severe wall pasting, or a crystallizer experiencing rapid tube scaling—finding the fix requires deep technical knowledge. Treating the surface symptoms without addressing the underlying root cause often leads to repeated failures, higher maintenance costs, and costly production losses.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Thermovap's troubleshooting methodology focuses on identifying the true physical and chemical drivers behind system upsets. We analyze boundary layers, evaluate pressure differentials, and audit non-condensable venting behavior under real operating loads. This data-driven approach allows us to pinpoint the source of the breakdown and deliver permanent modifications that keep your plant running smoothly.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">Operational Troubleshooting FAQ Matrix</h2>
            <div className="grid gap-4">
              {[
                { q: "What are the primary causes of excessive foaming inside evaporation bodies, and how do you fix it?", a: "Foaming is typically triggered by organic compounds, saponification risks at high pH values, or excessive vapor velocities through the liquor pool. We resolve this by optimizing internal operating levels, adjusting vacuum profiles to manage flashing, or incorporating targeted mechanical breaking baffles." },
                { q: "How does Thermovap identify the root cause of frequent tube blockages in forced circulation systems?", a: "We check the recalculation pump's current draw, verify real linear flow velocities inside the tubes, and cross-check hydrostatic head properties. Clogging typically occurs if linear velocities fall below certain limits or if boiling suppresses fail, allowing flashing to take place directly on the tube surfaces." },
                { q: "What steps are taken to diagnose and eliminate chamber pasting inside continuous spray dryers?", a: "We trace the atomization profile, check for nozzle wear or disk imbalances, and monitor inlet air distribution patterns. Pasting is typically corrected by fine-tuning hot air vectors to keep damp particles away from the chamber boundaries." },
                { q: "What typical issues cause a multi-effect evaporator to lose capacity over a processing shift?", a: "Capacity drops are generally driven by rapid scale accumulation on heat-retaining areas, air leaks into vacuum seals, or water-side fouling in the main condenser. We isolate the cause by calculating individual stage heat transfer coefficients ($U$) sequentially." },
                { q: "How can a plant operator identify if a non-condensable gas leak is hurting thermal performance?", a: "An accumulation of non-condensable gases creates stagnant insulating pockets on the shell side, causing a noticeable drop in the shell temperature profile compared to clean steam saturation metrics. We resolve this by optimizing your vent placement and sizing." },
                { q: "What causes high product entrainment into clean distillate paths, and how is it addressed?", a: "Entrainment happens when high vapor velocities drag liquid droplets out of the separator. We troubleshoot this by evaluating vapor separation volumes, adjusting vacuum configurations, or retrofitting high-performance wire-mesh demister components." },
                { q: "How do you resolve uneven moisture profiles in continuous fluidized bed dryers?", a: "Uneven drying usually stems from poor air distribution across the grid plate or product channeling inside the fluid bed. We correct this by evaluating and redesigning the air distribution plate geometries to match your solid's fluidization properties." },
                { q: "How quickly can Thermovap intervene when an operational plant crisis occurs?", a: "We provide immediate technical reviews by analyzing your DCS/SCADA process data logs remotely, and can dispatch engineering experts to your site quickly depending on the location and urgency of the issue." }
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

      {/* Local Page Navigation Footer */}
      <footer className="bg-card border-t border-border mt-20 py-8 text-center text-sm text-muted-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Thermovap Engineering. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <a href="/#expertise" className="hover:text-primary transition-colors">Expertise</a>
            <a href="/#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}