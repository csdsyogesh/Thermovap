import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, ClipboardCheck, Eye, ShieldAlert } from 'lucide-react';

export default function TechnicalAudits() {
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
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Diagnostic Process Review</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
              Comprehensive Technical & Energy Audits
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Evaluating plant-wide thermal balances, quantifying utility losses, and delivering actionable engineering audit reports to restore original design performance.
            </p>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          
          <section className="bg-card border border-border rounded-2xl p-8 lg:p-12 space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
              <ClipboardCheck className="text-primary h-6 w-6" /> Quantifying Losses, Restoring Plant Baseline
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Over years of continuous operation, industrial systems slowly drift away from their original design performance metrics. This decline is typically caused by gradual scale accumulation inside hidden tube bundles, worn vacuum pumps, or micro-leaks along complex vapor piping networks. Our technical audits combine detailed on-site physical evaluations with advanced remote process diagnostic logging to accurately capture current operational health.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We mathematically trace enthalpy inputs across every stage of your evaporation, drying, and heat transfer loops. By uncovering hidden inefficiencies, identifying non-condensable build-ups, and assessing condenser water balances, we deliver clear, data-driven engineering pathways to eliminate performance degradation and bring your system back to peak design efficiency.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">Technical Audit FAQ Matrix</h2>
            <div className="grid gap-4">
              {[
                { q: "What parameters are measured and evaluated during a typical Thermovap technical audit?", a: "We monitor steam flow rates, inlet and discharge fluid pressures, temperature steps across individual effect stages, cooling water flow dynamics, and non-condensable gas extraction profiles to pinpoint exactly where performance deviations occur." },
                { q: "How can a thermal audit help reduce operating costs for an evaporator line?", a: "By identifying unrecovered thermal energy. We map real stream qualities to discover if condensate flash steam or vapor venting can be captured and used to replace live boiler steam, reducing utility expenses." },
                { q: "Can audits be executed remotely, or is an on-site presence required?", a: "We offer flexible auditing options. We can execute remote diagnostic audits by analyzing your historical SCADA/DCS data logs, or perform full on-site physical inspections." },
                { q: "How frequently should an industrial plant schedule a thermal system audit?", a: "We recommend conducting a detailed technical audit every 12 to 18 months to catch gradual scale accumulation, track vacuum system wear, and optimize cleaning intervals before severe capacity loss occurs." },
                { q: "What specific insights do your audit reports provide to plant managers?", a: "Our final reports outline current versus original design performance metrics, document actual heat transfer coefficients, trace exact energy losses, and provide a prioritized list of corrective adjustments complete with return-on-investment (ROI) estimates." },
                { q: "How do audits help pinpoint hidden scale accumulation before a system clogs?", a: "By tracking changes in the overall heat transfer coefficient ($U$) over time at constant temperature configurations. A steady drop in $U$ alongside rising pressure inputs is a clear indicator of growing scale layers inside the tubes." },
                { q: "What safety factors and compliance issues are verified during your process reviews?", a: "We inspect vessel vacuum ratings, check for proper non-condensable gas venting, evaluate condensate discharge contamination risks, and check utility balance guidelines against environmental regulations." },
                { q: "How much downtime is required to perform a standard system audit?", a: "Most tracking and data gathering is performed while your plant is running normally under typical load conditions, keeping production disruptions to an absolute minimum." }
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
            <a href="/#expertise" className="hover:text-primary transition-colors">Expertise</a>
            <a href="/#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}