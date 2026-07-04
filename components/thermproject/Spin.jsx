import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../SEO'; 
import { ArrowLeft, HelpCircle, CheckCircle2, Cpu, BarChart3, ShieldAlert } from 'lucide-react';

export default function SpinFlash() {
  return (
    <>
    <SEO 
  title="Spin Flash Dryers" 
  description="High-shear flash dehydration systems engineered to pulverize and dry highly cohesive filter press cakes, dense chemical pigments, and industrial wastewater sludges."
  url="/thermproject/spin"
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
              Spin Flash Dryers
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              High-shear flash dehydration systems engineered to pulverize and dry highly cohesive filter press cakes, dense pastes, and industrial sludges.
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
                Spin Flash Dryers utilize mechanical shear and intense hot air vortices to continuously dry dense, cohesive materials like filter cakes and sludges. The feed material enters via a variable-speed screw conveyor into the base of a vertical drying chamber. This bottom zone features a high-speed mechanical disintegrator coupled with tangential hot air inlets.
              </p>
              <p>
                The mechanical agitator pulverizes cohesive lumps into tiny particles, while the tangential airflow forces them into a swirling, high-velocity vortex. This rapid reduction in particle size creates a massive surface area, allowing moisture to flash off instantly. The rising air vortex carries the lightweight, dry particles upward through an internal classifier ring for clean discharge, while heavier, moist particles remain in the bottom zone for further drying.
              </p>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <BarChart3 className="text-primary h-5 w-5" /> Operational Target & Purpose
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                This technology is highly effective for processing sticky cakes, chemical pigments, wastewater sludges, and dense organic pastes that cannot be pumped or atomized. Pulverizing materials mechanically inside a high-velocity vortex isolates fine, dry powders in a single, continuous step without requiring upstream dilution.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                <ShieldAlert className="text-primary h-5 w-5" /> Key Processing Benefits
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                The primary benefit of a Spin Flash system is its rapid moisture flash capability. The intense air vortex dries pulverized materials instantly, minimizing the thermal exposure of the core product. This high convective efficiency ensures uniform final moisture content while significantly reducing total plant utility overheads.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">
              Design Innovations & Engineering Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "High-Shear Mechanical Agitator Bases",
                "Tangential Vortex Hot Air Distributors",
                "Instant Convective Moisture Flash Loops",
                "Internal Particle Classification Rings",
                "Variable Speed Feed Screw Conveyors",
                "High-Volume Product Recovery Cyclones",
                "Corrosion-Proof Heavy Wall Metallurgy",
                "Advanced Process Thermal Heat Controls",
                "Minimized Footprint Vertical Layouts"
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
              Spin Flash Verification Matrix (FAQs)
            </h2>
            <div className="grid gap-4">
              {[
                { q: "How does the spin flash dryer process non-pumpable filter cakes?", a: "The feed screw conveyor transfers cohesive cakes directly to a high-shear mechanical disintegrator, pulverizing the material into small particles that dry instantly in the hot air vortex." },
                { q: "What is the function of the internal classifier ring?", a: "The classifier ring acts as a structural boundary, allowing only sufficiently light, dry particles to pass upward while returning heavier, moist particles to the bottom zone." },
                { q: "Can this technology safely handle temperature-sensitive pigments?", a: "Yes, the rapid moisture flash creates a cooling effect that protects the core particle temperature, preventing thermal damage during transit." },
                { q: "What typical moisture reductions can be achieved with wastewater sludges?", a: "Our spin flash units continuously dry heavy sludges down from 60-70% incoming moisture to stable final moisture levels below 8-10%." },
                { q: "What materials of construction are offered for abrasive chemical cakes?", a: "We fabricate units using heavy-walled SS316L, Duplex stainless steels, or wear-resistant alloy linings to counter mechanical erosion." },
                { q: "How do you control the final particle size of the powder output?", a: "We adjust the rotor speed of the bottom disintegrator and optimize the hot air vortex velocity to regulate particle sizes." },
                { q: "How is product recovery handled at the exhaust stage?", a: "Exhaust streams route through high-efficiency cyclones paired with pulse-jet bag filters to capture and discharge fine powders cleanly." },
                { q: "What heating sources can be paired with the installation?", a: "The layout can utilize direct gas-fired hot air generators or steam radiators based on your facility's utility configurations." },
                { q: "Does the system require upstream feed dilution or pre-mixing?", a: "No, the high-shear disintegrator handles dense cakes and sticky pastes directly, eliminating the need for upstream water dilution." },
                { q: "What typical maintenance protocols apply to the high-speed bottom rotor?", a: "We integrate heavy-duty external bearing blocks with continuous lubrication channels, keeping maintenance requirements straightforward." }
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