import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, CheckCircle2, Cpu, Leaf, BarChart3, ShieldAlert } from 'lucide-react';

export default function AgroDistilleries() {
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
              Agro, Distilleries & By-products
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Value-recovery cascading systems designed to handle spent wash, distillery slops, and corn steep liquors, converting sticky organic side-streams into nutritious commercial animal feed or bio-fertilizers.
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
                Processing distillery spent wash and organic agro-liquors presents intense design challenges due to high dissolved solids, rapid organic fouling, and steep viscosity changes. We deploy custom multi-effect evaporation arrays optimized with high-efficiency Thermal Vapor Recompressors (TVR). By using high-pressure boiler steam to entrain and compress lower-pressure vapor from the separator heads, our layouts maximize plant energy integration.
              </p>
              <p>
                The concentrated organic syrup ($55-60\%$ solids) is continually managed using specific forced circulation finishing stages to maintain steady flow profiles across all inner tube surfaces. This thick material is then combined with carrier fibers and routed into industrial drying systems—such as spin flash dryers or steam tube rotary calciners—to turn sticky process wastes into dry commercial animal feed or bio-fertilizer compounds.
              </p>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <BarChart3 className="text-primary h-5 w-5" /> Enthalpy Integration & Solid Recovery
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                Our agro-processing layouts link fluid concentration stages directly with downstream convective drying units. We configure integrated pre-heaters that use hot waste condensates to heat incoming raw feed, reducing the primary fuel load and enhancing overall plant steam economy.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <ShieldAlert className="text-primary h-5 w-5" /> Organic Fouling Control
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                High carbohydrate concentrations generate aggressive fouling tendencies along heat transfer walls. Our systems counteract this by maintaining steady turbulent scouring regimes and deploying automated CIP sequences to sustain high evaporative flux rates.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
              Deployed Hardware Architectures
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "TVR Integrated Spent Wash Evaporators",
                "High-Viscosity Forced Circulation Loops",
                "Heavy-Duty Steam Tube Rotary Dryers",
                "Spin Flash Drying Systems",
                "High-Velocity Liquor Distribution Heads",
                "Automated Multi-Stage CIP Arrays",
                "Spacious Entrainment Separators",
                "Organic Slop Pre-heating Matrices",
                "Sanitary Condensate Extraction Skids"
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
              Agro & Distillery Verification Matrix (FAQs)
            </h2>
            <div className="grid gap-4">
              {[
                { q: "How do your configurations handle the high organic fouling of spent wash?", a: "We employ high-velocity forced circulation loops to generate constant scouring action across all internal tube walls, keeping solids in suspension and delaying scale deposition." },
                { q: "What solid concentration baseline is reached before the drying phase?", a: "Our multi-effect pre-concentrators safely increase standard distillery slops from 8% starting solids up to a dense 55-60% total solids syrup." },
                { q: "What is the primary advantage of utilizing TVR systems in distilleries?", a: "The TVR uses high-pressure motive steam to entrain and reuse low-pressure exhaust vapors, reducing live steam demands and significantly boosting overall steam economy ratios." },
                { q: "Can your systems process high-viscosity corn steep liquors?", a: "Yes. We model shifting non-Newtonian viscosity boundaries to size final evaporation effects with appropriate recirculation capacities, ensuring reliable operations." },
                { q: "What materials of construction are offered for acidic agro-industrial slops?", a: "We utilize robust stainless steel configurations, deploying heavy-walled SS316L or specific anti-corrosion materials to protect components against organic acid attacks." },
                { q: "How do your drying systems convert concentrated syrup into commercial animal feed?", a: "The dense syrup is blended with carrier fibers and processed in high-efficiency spin flash or rotary dryers to continuously produce stable, free-flowing granules." },
                { q: "How is product carryover controlled inside the large vapor separation drums?", a: "We size spacious vapor chambers fitted with custom chevron demister assemblies to completely trap micro-droplets, preventing organic losses into the condensate." },
                { q: "What typical maintenance windows do your agro-industrial setups support?", a: "Thanks to robust hydraulic designs and automated washing controls, our distillery systems easily sustain continuous runs of 18 to 24 days between standard CIP cleans." },
                { q: "Does the system support variations in distillery plant throughput volumes?", a: "Yes. We integrate automated turndown controls and flexible recirculation configurations to handle variations in volumetric feed rates up to 25% smoothly." },
                { q: "Can recovered condensates route back to fermentation loops?", a: "Yes. The high-efficiency separation processes isolate clean condensates with low volatile fatty acid signatures, ideal for direct reuse in recycling loops." }
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