import React from 'react';
import { SEO } from '../SEO'; 
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, Cpu } from 'lucide-react';

export default function DesignOptimization() {
  return (
    <>
      <SEO 
        title="Custom Process Design & Performance Optimization" 
        description="Custom thermal engineering and system optimization layouts designed to maximize plant thermodynamic efficiency and steam economy limits."
        url="/expertise/design-optimization"
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
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">Thermal Lifecycle Optimization</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
                Custom Process Design & System Optimization
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Transforming fundamental mass and energy concepts into customized, heavy-duty thermal systems optimized for peak efficiency, operational flexibility, and reduced utility footprints.
              </p>
            </div>
          </section>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            
            <section className="bg-card border border-border rounded-2xl p-8 lg:p-12 space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
                <Cpu className="text-primary h-6 w-6" /> Our Methodology: Engineering for Maximum Efficiency
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed text-justify">
                <p>
                  Generic solutions inherently create waste because they fail to account for the unique thermodynamic behavior of specialized process fluids. At Thermovap Engineering, our process optimization approach maps custom thermal mechanics directly to your specific material stream parameters. By calculating precise heat flux boundaries, optimizing liquid distribution networks, and implementing high-efficiency recovery configurations, we ensure that every square meter of heat transfer area delivers maximum performance.
                </p>
                <p>
                  We look beyond individual components to optimize the entire thermal plant lifecycle. Our team models vapor recompression paths, plans multi-stage staging balances, and introduces advanced structural geometry parameters—such as optimized 60-degree triangular tube sheets—to turn complex industrial heat liabilities into reliable, high-yield, and low-consumption assets.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
                Design & Optimization FAQ Matrix
              </h2>
              <div className="grid gap-4">
                {[
                  { q: "How does Thermovap approach custom process design for grassroot plants?", a: "We begin with your basic chemical or physical feed data—such as mass flow rates, composition, inlet properties, and targeted final values. Our engineers construct complete mass and energy balance models, select optimized metallurgy, size individual components, and generate detailed process flow diagrams (PFDs) to ensure reliable operations right from commissioning." },
                  { q: "What parameters are evaluated to determine if an existing thermal system can be optimized?", a: "We analyze current utility consumption profiles, trace temperature profiles across individual stages, calculate the current overall heat transfer coefficient (U), and evaluate fouling rates. This lets us pinpoint exactly where energy is being lost or where bottlenecking occurs." },
                  { q: "How do your optimization strategies directly lower plant carbon and utility footprints?", a: "By maximizing heat integration. We design recovery loops that use warm condensate or low-pressure flash vapor to preheat incoming cold feed material, reducing primary boiler load demands and minimizing cooling tower heat dumping." },
                  { q: "Can Thermovap optimize a system designed by another equipment vendor?", a: "Yes. We frequently audit and re-engineer third-party evaporator, dryer, and crystallizer installations to address design shortfalls, increase production capacity, or modify them to process entirely new feed materials." },
                  { q: "What role does dynamic fluid modeling play in your equipment optimization process?", a: "We calculate local fluid dynamics to verify velocity profiles shell-side and tube-side. This ensures the fluid maintains adequate turbulence for high heat transfer coefficients while avoiding excessive velocities that trigger tube vibration or premature erosion." },
                  { q: "How do your custom designs handle variations or scaling in plant production volumes?", a: "We build healthy turndown ratios and modular staging into our thermal systems. This allows the process loops to run efficiently and maintain stable flow patterns even when operating well below or above nominal design limits." },
                  { q: "What metrics define an optimized multi-effect evaporator (MEE) configuration?", a: "A highly optimized MEE balances the total number of thermal effects against capital costs, maximizing steam economy ratios (kg of water evaporated per kg of steam consumed) while keeping individual stage temperature differences (Delta-T) functional against boiling point elevations." },
                  { q: "How long does a typical process optimization study take to execute?", a: "Depending on system complexity and the availability of stable operating logs, a comprehensive engineering assessment and optimization blueprint is completed within 2 to 4 weeks." },
                  { q: "What advantages does an optimized 60-degree triangular tube layout bring over square pitch sheets?", a: "The triangular configuration allows for a higher packaging density of calandria tubes per unit shell area. This configuration yields a larger heat transfer area in a smaller structural volume while building uniform multi-pass stream distributions." },
                  { q: "How do you mitigate boiling point elevation (BPE) penalties during multi-stage design optimization?", a: "We utilize precise physical property curves to step down operational stage pressures incrementally. This sequence preserves a positive thermal driving force across downstream stages even as the mineral concentrations scale up." },
                  { q: "What specific parameter regulates liquid distribution balancing during custom calandria optimization?", a: "We apply rigorous hydraulic modeling to configure the exact head heights and hole counts on the upper tray manifolds, preventing thin-film breakages and stopping localized dry spot baking." }
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
    </>
  );
}