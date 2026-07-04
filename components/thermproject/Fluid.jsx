import React from 'react';
import { SEO } from '../SEO'; 
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, CheckCircle2, Cpu, BarChart3, ShieldAlert } from 'lucide-react';

export default function FluidBed() {
  return (
    <>
    <SEO 
  title="Fluid Bed Dryers (FBD)" 
  description="High-duty convective fluidization thermal dryers engineered to handle granular solids, crystalline matrices, and dairy-food powders with uniform moisture reduction."
  url="/thermproject/fluid"
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
              Fluid Bed Dryers (FBD)
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              High-duty convective fluidization dryers engineered to handle granular solids, dairy-food powders, and crystalline matrices.
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
                Fluid Bed Dryers utilize a convective mass transfer principle to gently dry particulate solids by suspending them in an upward-flowing stream of conditioned air. The wet granular material enters onto a specialized perforated distributor plate. Hot, filtered process air forces upward through these openings at specific velocities calculated to overcome the gravity vector of the solid particles.
              </p>
              <p>
                Once this velocity threshold is reached, the solid bed transitions into a highly turbulent, fluidized state that behaves dynamically like a boiling liquid. This fluidization ensures that every particle is completely surrounded by the drying air stream, maximizing the contact area for heat and mass transfer. Moisture flashes off instantly, while integrated cyclone loops capture fine dust particles, discharging highly uniform, free-flowing dry granules.
              </p>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <BarChart3 className="text-primary h-5 w-5" /> Operational Target & Purpose
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                This technology is widely chosen for processing heat-sensitive materials like dairy powders, granular food ingredients, salt crystals, and pharmaceutical aggregates. Because fluidization achieves highly uniform temperature distribution across the entire material bed, localized overheating is prevented, protecting valuable product quality characteristics.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <ShieldAlert className="text-primary h-5 w-5" /> Key Convective Benefits
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                The primary benefit of Fluid Bed drying is its rapid mass transfer performance. Suspended particles exchange moisture with the air stream instantly, resulting in very short processing times. This high convective efficiency ensures uniform final moisture content throughout the batch while keeping energy consumption low.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
              Design Innovations & Engineering Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Turbulent Convective Fluidization Mechanics",
                "Perforated High-Distribution Air Plates",
                "Uniform Temperature Bed Balance Controls",
                "Integrated Fine Dust Cyclone Separators",
                "Sanitary cGMP Food-Grade Stainless Steels",
                "Adjustable Residence Time Weir Gates",
                "Advanced HEPA Hot Air Filtration Skids",
                "Vibratory Assisted Fluidization Enhancers",
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
              Fluid Bed Verification Matrix (FAQs)
            </h2>
            <div className="grid gap-4">
              {[
                { q: "What defines fluidization inside these drying systems?", a: "Fluidization occurs when an upward hot air stream matches the settling velocity of the solid particles, suspending the material bed so it behaves like a turbulent, boiling liquid." },
                { q: "How does the system ensure uniform drying across the batch?", a: "The fluidized state maintains continuous particle movement, ensuring every grain receives equal exposure to the hot air stream and eliminating localized hot spots." },
                { q: "What particle sizes are best suited for fluid bed dryers?", a: "They operate exceptionally well with granular materials and crystals ranging from 50 microns up to 5 millimeters in size." },
                { q: "Can fluid bed dryers safely process heat-sensitive milk or food powders?", a: "Yes, the high convective efficiency allows for moderate drying air temperatures, preventing thermal damage to sensitive proteins and sugars." },
                { q: "What mechanism captures fine powder dust from escaping?", a: "We integrate high-efficiency cyclones or automated pulse-jet bag filters at the top of the chamber to trap and return fine particles to the product stream." },
                { q: "What final moisture levels can be reached with crystalline products?", a: "Our FBD units routinely deliver highly uniform drying profiles, achieving precise final moisture levels below 0.5% for crystalline salts." },
                { q: "How is the material residence time controlled in continuous systems?", a: "We incorporate adjustable internal weir gates and vibratory drive tuners to precisely regulate the material's transit speed across the bed." },
                { q: "What materials of construction are offered for food-grade systems?", a: "We build units using premium electro-polished SS316L stainless steel, satisfying strict cGMP and food safety sanitation standards." },
                { q: "Can the system be configured for closed-loop inert gas drying?", a: "Yes, for volatile solvent-laden solids, we can configure the system to circulate nitrogen gas securely, incorporating integrated condensation recovery loops." },
                { q: "How do you prevent the material from blinding the perforated plate?", a: "We custom design the plate hole geometry and layout based on your material's friction angle, preventing clogging and ensuring stable airflow distribution." }
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