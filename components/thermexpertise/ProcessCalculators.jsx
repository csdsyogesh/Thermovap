import React from 'react';
import { SEO } from '../SEO'; 
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, Calculator, Activity, Layers } from 'lucide-react';

export default function ProcessCalculates() {
  return (
    <><SEO 
  title="Thermal Design & Process Calculations Support" 
  description="Rigorous mathematical modeling, industrial heat balance grids, and equipment sizing datasets compiled to verify mass balances before fabrication."
  url="/expertise/process-calculations"
/>
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
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Mathematical Process Sizing</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
              Process Calculations & Sizing Support
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Executing meticulous thermal balances, fluid velocity evaluations, and heat transfer equations to establish an unshakeable mathematical baseline for your equipment.
            </p>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          
          <section className="bg-card border border-border rounded-2xl p-8 lg:p-12 space-y-4">
            <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
              <Calculator className="text-primary h-6 w-6" /> The Mathematics of Heat & Mass Transfer
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every reliable industrial plant configuration is anchored by sound mathematical calculations. Guesswork or relying on rough estimates during initial phase sizing creates immediate operational risks, often resulting in underperforming components or high utility costs. At Thermovap Engineering, our process calculation framework applies strict thermodynamic and fluid mechanic equations to model your entire system configuration.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We determine exact heat transfer values using the core equation $Q = U \cdot A \cdot \Delta T_{'lm'}$, mapping non-linear boiling point elevations ($\text{'BPE'}$), fluid velocities, and proper fouling allowances. This rigorous approach defines optimal tube pitches, accurate shell dimensioning, and balanced vapor routing, giving OEMs and plant operators full technical confidence before fabrication begins.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">Process Calculations FAQ Matrix</h2>
            <div className="grid gap-4">
              {[
                { q: "What specific calculations are included in a Thermovap design support package?", a: "We deliver full thermal mass and energy balances, accurate heat transfer area ($A$) sizing, Log Mean Temperature Difference ($\Delta T_{lm}$) metrics, tube bundle counts matching your pass requirements, and shell thickness checks calculated to meet standard safety codes." },
                { q: "Why is calculating the exact Boiling Point Elevation (BPE) critical for MEE sizing?", a: "BPE raises the real boiling point of a solution as concentration levels grow. If this isn't precisely modeled, the effective temperature driving force ($\Delta T_{eff}$) collapses, causing downstream evaporator effects to stall completely." },
                { q: "How do you calculate fouling factors when sizing a new heat exchanger?", a: "We select fouling factors based on standard industrial data registries combined with historical on-site processing records for your specific fluid type. This ensures the unit retains sufficient thermal capacity even after long production runs." },
                { q: "Can Thermovap execute process calculations for highly viscous or non-Newtonian fluids?", a: "Yes. We model fluid velocity fields using adjusted Reynolds and Nusselt equations tailored for non-Newtonian rheologies, ensuring the system maintains adequate turbulence without triggering excessive pressure drops." },
                { q: "What is Log Mean Temperature Difference (LMTD), and how does it influence equipment sizing?", a: "LMTD defines the average temperature driving force between the hot and cold streams along the length of a heat exchanger. A larger LMTD reduces the total physical surface area required to achieve your target heat load." },
                { q: "How do you calculate and verify shell-side pressure drops?", a: "We apply advanced fluid flow calculations to evaluate baffle configurations, spacing patterns, and bypass clearance profiles. This ensures optimal fluid distribution across the tube bundle while keeping pressure losses within your pump's capabilities." },
                { q: "Do you provide mechanical wall thickness sizing along with thermal design calculations?", a: "Yes. We complement our thermal designs with mechanical calculations to determine appropriate shell, tube sheet, and nozzle wall thicknesses that satisfy industrial internal vacuum and pressure safety rules." },
                { q: "What raw data does a plant operator need to provide to start a calculation study?", a: "We require clear details on fluid properties (density, viscosity, thermal conductivity), targeted mass flow rates, inlet and target outlet temperatures, and your preferred utility properties (such as available steam pressure)." }
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
    </>
  );
}