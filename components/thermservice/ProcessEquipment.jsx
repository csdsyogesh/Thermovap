import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, Settings, Grid, Activity, Layers } from 'lucide-react';

export default function ProcessEquipment() {
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
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Mechanical & Fluid Computations</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
              Process Equipment Engineering & Thermal Sizing
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Rigorous thermal calculations, tube-bundle layout optimization, and customized vacuum vessel designs engineered to standard industrial manufacturing codes.
            </p>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">1. Sizing Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-2xl border border-border space-y-3">
                <Settings className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-card-foreground">Shell & Tube Units</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Custom layout configurations including fixed tube sheets, floating head setups, and U-tube designs. Optimized baffle geometries maximize fluid interaction while managing shell-side pressure drops.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border space-y-3">
                <Grid className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-card-foreground">Separation Vessels</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sizing parameters calculated for flash separators and vapor headers. Integrated with high-density wire mesh demisters, these units isolate liquid entrainments to keep vapor paths clean.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border space-y-3">
                <Activity className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-card-foreground">Design Computations</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Complete documentation detailing Log Mean Temperature Difference ($\Delta T_{'lm'}$), fouling resistances, tube layouts matching specified pass numbers, and shell thickness allowances.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 lg:p-12 space-y-4">
            <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
              <Layers className="text-primary h-6 w-6" /> Shell-Side Velocity Mechanics
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Poorly planned shell interiors create low-velocity dead zones that accelerate sediment drops and fouling. Conversely, excessive cross-flow velocities risk inducing fluid-elastic tube vibrations, leading to structural failures. Thermovap calculates precise baffle cuts and tube pitches ($31.75\text{'mm'}$ OD $\times 1.2\text{'mm'}$ thickness elements) to achieve uniform flow patterns and extend equipment life.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">2. Exhaustive Mechanical FAQ Matrix</h2>
            <div className="grid gap-4">
              {[
                { q: "What advantages does a $60^\circ$ triangular tube pitch offer over a square pitch layout?", a: "A triangular arrangement packs up to 15% more heat transfer area inside the same shell diameter compared to a square pitch, maximizing thermal density. Square layouts are typically selected when mechanical cleaning lanes are required." },
                { q: "How does Thermovap evaluate and prevent fluid-induced tube vibration?", a: "We calculate cross-flow velocities at the shell inlet and bundle entry points, checking them against the natural frequency of the tubes. We then adjust baffle spacing to shorten unsupported tube spans." },
                { q: "Why is a $1.2\text{mm}$ thickness standard for $31.75\text{mm}$ OD evaporator tubes?", a: "This configuration provides an optimized wall thickness that balances required mechanical strength under full vacuum with low thermal resistance for high heat transfer rates." },
                { q: "What purpose do baffle plates serve shell-side, and how is their spacing determined?", a: "Baffles support the tubes structurally to prevent sagging and redirect fluid flow to create high turbulence. We optimize the baffle cut (typically 20-25%) to balance heat transfer against pressure drops." },
                { q: "How do you calculate the required heat transfer area for a shell-and-tube unit?", a: "We size the heat transfer area ($A$) using the total heat load ($Q$), the global heat transfer coefficient ($U$), and the calculated Log Mean Temperature Difference ($\Delta T_{lm}$) through the formula: $Q = U \cdot A \cdot \Delta T_{lm}$." },
                { q: "How do your vapor-liquid separators ensure high separation efficiency?", a: "Our separation vessels combine reduced vapor velocities with changes in flow direction to drop out heavy droplets. The vapor stream then passes through a demister pad to trap remaining fine mists." },
                { q: "What data is required to generate an accurate heat exchanger specification sheet?", a: "We require the physical properties of your fluids (density, viscosity, conductivity), mass flow rates, inlet and target outlet temperatures, and allowable pressure drop limits." },
                { q: "Can Thermovap design heat exchangers to match custom equipment skid footprints?", a: "Yes. We model tube lengths, shell passes, and nozzle orientations to deliver configurations that integrate seamlessly into your existing site space." }
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