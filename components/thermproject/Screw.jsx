import React from 'react';
import { SEO } from '../SEO'; 
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, CheckCircle2, Cpu, BarChart3, ShieldAlert } from 'lucide-react';

export default function ConveyingSystems() {
  return (
    <>
    <SEO 
  title="Industrial Conveying Systems" 
  description="Heavy-duty material transport solutions, including enclosed screw flights and shaftless screws, engineered to link thermal concentration and downstream drying stages."
  url="/thermproject/screw"
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
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">General Industrial Equipment</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
              Industrial Conveying Systems
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Heavy-duty material transport solutions, including enclosed screw flights and modular conveyors, engineered to link thermal concentration and downstream drying stages.
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
                Industrial Conveying Systems provide the critical material transport infrastructure required to bridge thermal concentration units with downstream drying and packaging phases. The primary configurations focus on enclosed screw conveyors featuring precision-welded helical flights mounted inside U-shaped or cylindrical troughs. As the drive motor rotates the internal shaft, the helical flights push bulk solids, dewatered filter cakes, or dry powders forward along the trough.
              </p>
              <p>
                To handle demanding materials like sticky sludges or abrasive crystals, our designs customize flight pitches, flight edge thicknesses, and internal shaft tolerances. The enclosed trough configurations ensure absolute containment, preventing dust emissions or ambient moisture absorption. This provides reliable material movement, protecting product integrity throughout the plant layout.
              </p>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <BarChart3 className="text-primary h-5 w-5" /> Operational Target & Purpose
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                This material handling equipment is essential for linking primary process stages—such as feeding filter cakes into spin flash dryers, transferring salts from centrifuges, or routing powders from spray drying bases. The robust mechanical design ensures continuous, automated transport, eliminating manual handling bottleneck hazards.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <ShieldAlert className="text-primary h-5 w-5" /> Key Material Handling Benefits
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                The primary benefit of our conveying systems is their high reliability when handling challenging bulk solids. By implementing shaftless screw designs or hard-faced flight edges, our equipment moves sticky or abrasive materials smoothly, preventing material buildup and lowering plant maintenance demands.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
              Design Innovations & Engineering Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Precision-Welded Helical Screw Flights",
                "Dust-Tight Enclosed Trough Geometries",
                "Heavy-Duty Solid Gear motor Drive Units",
                "Shaftless Screws for Sticky Sludges",
                "Abrasive-Resistant Hard Faced Edges",
                "Sanitary cGMP Food-Grade Stainless Steels",
                "Modular Drop-Out Maintenance Panels",
                "Integrated Safety Rotation Speed Sensors",
                "Custom Pitch Incline Transport Options"
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
              Conveying Systems Verification Matrix (FAQs)
            </h2>
            <div className="grid gap-4">
              {[
                { q: "What variables guide the sizing of an industrial screw conveyor?", a: "We calculate the target screw sizing based on your material's bulk density, maximum mass flow rate requirements, particulate friction angle, and specific abrasiveness class." },
                { q: "Why are shaftless screw configurations chosen for wastewater sludges?", a: "The absence of a central structural shaft eliminates areas where sticky, cohesive sludges could wrap and accumulate, preventing clogs and maintaining steady material flow." },
                { q: "How do your designs prevent dust emissions during powder transport?", a: "We utilize completely enclosed trough geometries fitted with heavy-duty gaskets and sealed flanged connections to ensure absolute dust containment." },
                { q: "Can these conveying configurations handle inclined transport angles?", a: "Yes, we custom engineer screw flights with tighter pitches and specialized configurations to handle incline vectors up to 30-45 degrees smoothly." },
                { q: "What wear-resistant upgrades are available for handling sharp salt crystals?", a: "We apply specialized hard-facing alloys (like Stellite) to the flight edges and incorporate ultra-high-molecular-weight (UHMW) polyethylene liners to protect the trough." },
                { q: "What materials of construction are offered for food-grade systems?", a: "We construct units using premium SS304 or SS316L stainless steel, satisfying strict cGMP and food safety sanitation guidelines." },
                { q: "How are the conveyor drive systems secured against mechanical overload?", a: "We integrate electronic torque limiters and mechanical shear pins to isolate the drive motor instantly if a foreign object causes a jam." },
                { q: "Are modular inspection hatches provided along the conveyor trough?", a: "Yes, we position bolt-on or quick-clamp inspection hatches at key intervals to simplify routine maintenance checks." },
                { q: "How do you manage thermal expansion when transporting hot dryer powders?", a: "We incorporate specialized expansion joints and flexible end bearings to absorb structural expansion without compromising component alignment." },
                { q: "What electrical safety certifications match your gear motor drives?", a: "We supply heavy-duty IP55 rated gear motors, offering explosion-proof ATEX enclosures tailored to hazardous operating environments." }
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