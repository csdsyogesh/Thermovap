import React from 'react';
import { SEO } from '../SEO'; 
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, CheckCircle2, Cpu, BarChart3, ShieldAlert } from 'lucide-react';

export default function SprayDryer() {
  return (
    <>
    <SEO 
  title="Industrial Spray Dryers" 
  description="High-capacity atomization flash drying systems engineered to transform low-viscosity liquid feeds and milk concentrates directly into high-purity, free-flowing powders."
  url="/thermproject/spray"
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
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Thermal Dehydration Systems</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
              Industrial Spray Dryers
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              High-capacity atomization flash drying systems engineered to transform liquid feeds and milk concentrates directly into high-purity, free-flowing powders.
            </p>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          <section className="bg-card border border-border rounded-2xl p-8 lg:p-12 space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
              <Cpu className="text-primary h-6 w-6" /> Technology Overview & Working Principle
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed text-justify">
              <p>
                Spray Dryers operate by atomizing a liquid feed into a fine mist inside a large drying chamber, where it contacts a high-velocity stream of hot air. The process begins by pumping the liquid feed or evaporator concentrate through a top-mounted high-speed rotary atomizer disk or precision pressure nozzles, breaking the fluid down into millions of micro-droplets.
              </p>
              <p>
                This massive increase in surface area enables exceptionally rapid convective heat and mass transfer. As the droplets descend through the hot air stream, their moisture flashes off almost instantly, cooling the surrounding air and protecting the core particle temperature. The dried powder settles cleanly into the conical base of the chamber, while secondary cyclone loops extract fine particles from the exhaust air to maximize total product yield.
              </p>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <BarChart3 className="text-primary h-5 w-5" /> Operational Target & Purpose
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                This technology is the standard choice for manufacturing heat-sensitive powders such as milk powders, whey proteins, coffee extracts, herbal solids, and complex chemical pigments. The exceptionally short moisture flash time ensures that valuable product characteristics, flavors, and nutritional profiles remain completely undamaged.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <ShieldAlert className="text-primary h-5 w-5" /> Key Atomization Benefits
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                The primary benefit of spray drying is its ability to produce highly uniform, free-flowing powders with consistent particle size distributions. Adjusting the atomizer speed or nozzle configuration gives operators precise control over particle morphology, bulk density, and solubility characteristics, streamlining downstream packaging.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
              Design Innovations & Engineering Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "High-Speed Precision Rotary Atomizers",
                "Instant Convective Moisture Flash Dynamics",
                "Spacious Conical Bottom Drying Chambers",
                "High-Efficiency Product Recovery Cyclones",
                "Sanitary cGMP Electro-Polished Finishes",
                "Advanced Psychrometric Air Control Skids",
                "Pneumatic Chamber Wall Powder Dislodgers",
                "Multi-Tier Air Filtration Assemblies",
                "Automated Clean-In-Place Internal Spray Bars"
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
              Spray Dryer Verification Matrix (FAQs)
            </h2>
            <div className="grid gap-4">
              {[
                { q: "How does spray drying protect heat-sensitive dairy nutrients?", a: "The rapid evaporation of surface moisture creates a cooling effect on the individual particles, keeping the core product temperature well below the surrounding air temperature to prevent thermal damage." },
                { q: "What is the difference between rotary atomizers and pressure nozzles?", a: "Rotary atomizers use a high-speed spinning disk to handle variable feed rates and abrasive slurries smoothly, while pressure nozzles are ideal for producing larger, highly uniform particle sizes." },
                { q: "What feed parameters are required for reliable atomization?", a: "The liquid feed must be pumpable and free of large aggregates, typically operating best with total solid concentrations between 35% and 55%." },
                { q: "How do your designs prevent powder from sticking to the chamber walls?", a: "We optimize the hot air distribution vectors and air disperser geometries, incorporating pneumatic air hammers to clear the walls continuously." },
                { q: "What powder moisture levels can be reached with dairy products?", a: "Our spray dryers consistently achieve precise final moisture profiles, delivering values between 3.5% and 5.0% to extend product shelf life." },
                { q: "What materials of construction are offered for food-grade systems?", a: "We fabricate units using premium SS316L stainless steel, satisfying strict cGMP and food safety sanitation guidelines." },
                { q: "How do you recover fine powder particles from the exhaust air stream?", a: "Exhaust gases are routed through high-efficiency cyclones or automated bag filters to capture and return fine particles to the discharge stream." },
                { q: "Can the system handle continuous long-term operations?", a: "Yes, our designs support extended operating periods of 20 to 25 days before requiring a standard automated CIP cleaning cycle." },
                { q: "What air heating systems can be integrated into the layout?", a: "The installation can utilize direct gas-fired heaters, steam radiators, or indirect hot air exchangers based on facility utility configurations." },
                { q: "How do you control the final bulk density of the powder?", a: "We regulate the inlet air temperature profiles, feed concentration levels, and atomization pressures to achieve consistent bulk density values." }
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