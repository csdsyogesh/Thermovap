import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../SEO';
import { ArrowLeft, HelpCircle, Thermometer, Activity } from 'lucide-react';

export default function SpinFlashDryers() {
  return (
    <>
    <SEO 
  title="Spin Flash Dryer Sizing for Filter Cakes & Sticky Pastes" 
  description="Advanced thermodynamic design of spin flash dryers for cohesive filter cakes. High-shear mechanical disintegrators paired with internal classifier rings."
  url="/services/spin-flash-dryers"
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
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">High-Shear Deagglomeration</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
              Spin Flash Drying Systems for Cohesive Cakes
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Advanced thermodynamic configurations designed to continuously break down and dry sticky filter cakes, dense pastes, and high-density sludges.
            </p>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">1. Structural Disintegration Dynamics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                <h3 className="text-xl font-bold text-primary">Mechanical Disintegration of Dense Cakes</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cohesive filter cakes cannot be fluidised by air alone. Our setups use heavy, bottom-driven mechanical agitator rotors to shear raw cake feed apart into fine particles, instantly maximizing the surface area exposed to heat.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                <h3 className="text-xl font-bold text-primary">Vortex-Induced Convective Calculations</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hot process air enters the base of the drying chamber through a precise tangential nozzle array. This sets up a high-velocity, high-temperature swirl zone that lifts and dries damp solids instantly.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
                <h3 className="text-xl font-bold text-primary">Continuous Pressure-Drop Optimization</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  As moisture flashes off, particle weights drop. We calculate continuous air-loop configurations to balance pressure drops across the chamber height, establishing stable velocity boundaries for continuous operation.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 lg:p-12 space-y-4">
            <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
              <Thermometer className="text-primary h-6 w-6" /> Internal Classifier Ring Kinematics
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To guarantee that only bone-dry fine powders exit the drying chamber, we integrate an adjustable structural classifier ring near the top outlet deck to manage particle size cutoff boundaries:
            </p>
            <div className="my-4 p-4 bg-muted/30 rounded-lg text-center font-mono text-sm border border-border text-primary">
              d<sub>cutoff</sub> ∝ [μ · D<sub>chamber</sub> / (ρ<sub>solid</sub> · v<sub>tangential</sub><sup>2</sup>)]<sup>0.5</sup>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Heavier, damp clumps are physically thrown outward by centrifugal forces and rejected by the classifier ring, tumbling back down into the high-shear vortex zone for further milling and drying, while fine dry powder passes through.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">2. Exhaustive Technical FAQ Matrix</h2>
            <div className="grid gap-4">
              {[
                { q: "What types of material feeds are ideal for Spin Flash Drying systems?", a: "Spin flash dryers are engineered specifically for high-cohesion feeds like centrifuge cakes, filter press cakes, highly viscous sludges, and sticky organic pigments that clog conventional dryers." },
                { q: "How is the moisture content of the final discharging powder controlled?", a: "We control product moisture by adjusting the chamber exhaust air temperature via a feedback loop connected directly to the primary hot-air generator or variable-speed feed screw." },
                { q: "What mechanism prevents large, damp chunks from short-circuiting out of the drying chamber?", a: "The internal classifier ring acts as a physical barrier. Only particles small enough and light enough to match the terminal velocity of the upward air stream can exit the chamber." },
                { q: "Does the aggressive mechanical agitator cause high metal wear over time?", a: "We protect high-wear zones by constructing the bottom disintegrator blades from hardened tool steel or by applying hard stellite facing to handle abrasive solids." },
                { q: "What typical retention time do particles experience within a spin flash unit?", a: "The retention time is short—typically lasting only a few seconds. This rapid flash drying profile prevents thermal degradation of heat-sensitive compounds." }
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