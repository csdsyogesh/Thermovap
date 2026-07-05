import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../SEO'; 
import { ArrowLeft, HelpCircle, CheckCircle2, Cpu, BarChart3, ShieldAlert } from 'lucide-react';

export default function AgitatedThinFilm() {
  return (
    <>
      <SEO 
        title="Agitated Thin Film Dryers (ATFD)" 
        description="Industrial vertical thin-film dehydration systems engineered with precision scraping blades to convert high-TDS concentrates straight into dry powder solids."
        url="/thermproject/atfd"
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
                Agitated Thin Film Dryers (ATFD)
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Industrial vertical thin-film dehydration systems engineered to convert high-TDS concentrates and chemical liquids straight into dry solids.
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
                  An Agitated Thin Film Dryer (ATFD) consists of a vertical jacketed heating vessel enclosing a high-precision internal rotor assembly fitted with specialized scraping blades. Liquid feed or dense evaporator concentrate enters from the upper section of the cylinder. As the feed contacts the thermal wall, the high-speed rotating blades instantly spread the liquid into a highly turbulent, ultra-thin film.
                </p>
                <p>
                  As this thin film tracks down the jacketed heating wall, it undergoes rapid thermodynamic transitions—passing from a liquid solution to a thick paste, then a cohesive slurry, and finally converting into dry crystalline or amorphous solids. The vapor generated travels upward into a vapor separator, while the rotating blades continuously scrap the dry solids off the thermal walls, discharging them cleanly from the bottom exit port without allowing localized product baking or scale accumulation.
                </p>
              </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-2">
              <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                  <BarChart3 className="text-primary h-5 w-5" /> Operational Target & Purpose
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  ATFD installations serve as a critical component in Zero Liquid Discharge (ZLD) systems, chemical manufacturing facilities, and pharmaceutical processing lines. The technology is designed to receive high-TDS rejects or mineral concentrates and isolate dry salts in a single, automated operational step, completely eliminating the need for large, inefficient convection drying arrays.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                  <ShieldAlert className="text-primary h-5 w-5" /> Key Efficiency Benefits
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  The primary benefit of an ATFD is its highly efficient heat transfer performance. Spreading the material into a thin, turbulent film across the jacketed wall achieves excellent heat transfer coefficients (U). This ensures rapid evaporation rates and low energy losses, allowing heavy processing facilities to scale down total utility footprints.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
                Design Innovations & Engineering Features
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Mechanically Driven Internal Rotor Scraping",
                  "Single-Pass Dehydration to Powder Form",
                  "High-Turbulence Conductive Heat Transfer",
                  "Deep-Vacuum Low Temperature Controls",
                  "Jacketed Uniform Steam Thermal Barriers",
                  "Heavy-Duty Automatic Powder Exit Ports",
                  "Corrosion-Proof Heavy Wall Metallurgy",
                  "Integrated Vapor Demister Condensers",
                  "Anti-Baking Internal Blade Clearances"
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
                ATFD Verification Matrix (FAQs)
              </h2>
              <div className="grid gap-4">
                {[
                  { q: "How does the ATFD achieve dry powder from a liquid feed in a single step?", a: "The internal scraping blades spread the liquid into a thin film against the heated wall. As it moves downward, moisture flashes off, converting the material from a liquid to a paste, and finally into a dry powder at the discharge port." },
                  { q: "Why is this technology preferred for final Zero Liquid Discharge stages?", a: "It continuously handles the extreme fouling phases that occur as mineral concentrates turn into dry salts, avoiding the pipe choking issues common in traditional tube evaporators." },
                  { q: "What clearance is maintained between the rotor blades and the heated wall?", a: "We engineer precise clearances, utilizing either fixed or floating blade designs tailored to the specific rheological behavior of your product." },
                  { q: "Can an ATFD safely process heat-sensitive materials?", a: "Yes, by operating under deep vacuum conditions, we keep the operational boiling point low, preventing thermal damage to the material." },
                  { q: "What typical moisture levels are achieved in the discharged powder?", a: "Our ATFD systems routinely achieve exceptionally dry output profiles, delivering final moisture levels between 5% and 8% depending on the properties of the salt feed." },
                  { q: "What materials of construction are offered for high-chloride chemical brine?", a: "We build units using heavy-walled SS316L, Duplex 2205 stainless steel, or Hastelloy to secure hardware against pitting and stress corrosion cracking." },
                  { q: "How are the internal vapor pathways configured?", a: "Vapors flow counter-currently or co-currently upward through integrated demisters at the top, ensuring efficient droplet separation before routing to the condenser." },
                  { q: "What typical maintenance intervals do your ATFD units support?", a: "The continuous mechanical wiping action keeps the heating surfaces clear, allowing our systems to run for 20 to 30 days before requiring a quick cleaning cycle." },
                  { q: "What heating medium can be deployed inside the primary jacket?", a: "The system is versatile, utilizing live steam or hot thermal oil depending on the target processing temperatures." },
                  { q: "How do you protect the rotor assembly against mechanical stress?", a: "We construct our rotors out of single-piece forged shafts, dynamically balancing them to minimize vibration and extend the service life of the bearings and seals." },
                  { q: "What is the typical processing limit for feed viscosity inside an ATFD system?", a: "Our systems are configured to process highly dense fluids and sludge configurations with operating viscosities scaling up to 50,000 cP without clogging the jacket thermal wall bounds." }
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