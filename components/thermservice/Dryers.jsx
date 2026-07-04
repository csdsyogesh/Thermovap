import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, Wind, Sun, Layers, ShieldAlert } from 'lucide-react';

export default function IndustrialDryers() {
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
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Thermal Dehydration Systems</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
              Industrial Drying Plants & Dehydration Engineering
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Advanced hot air processing and psychrometric sizing layouts matched to liquid or cake feeds, producing stable powders with precise residual moisture control.
            </p>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">1. Drying Frameworks</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-2xl border border-border space-y-3">
                <Wind className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-card-foreground">Spray Dryers</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Converts liquid concentrates into ultra-fine droplets using high-speed rotary atomizers or high-pressure nozzles. Fast moisture evaporation happens within seconds of contact with hot process air, protecting sensitive product qualities.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border space-y-3">
                <Sun className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-card-foreground">Rotary Dryers</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Built with internal lifter flights inside a heavy rotating drum shell. The configuration lifts and showers damp aggregates or sludges directly through high-volume convective hot air streams.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border space-y-3">
                <Layers className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-card-foreground">Fluidized Bed Dryers</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Forces clean hot air through an engineered distribution grid plate, lifting granular materials into a floating fluid-like state. This delivers rapid, uniform drying across all particle surfaces.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 lg:p-12 space-y-4">
            <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
              <ShieldAlert className="text-primary h-6 w-6" /> Mastering Psychrometric Limits
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Drying operations depend directly on the interaction between air humidity saturation points and product equilibrium moisture states. If exhaust air temperatures drop too close to the dew point, the air saturates completely, causing wet powder to drop out and form a thick paste on chamber walls. Thermovap calculates exact hot air distribution curves and exhaust properties to ensure stable, continuous drying runs.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground tracking-tight border-l-4 border-primary pl-3">2. Exhaustive Drying FAQ Matrix</h2>
            <div className="grid gap-4">
              {[
                { q: "What causes chamber wall pasting in spray dryers, and how do you prevent it?", a: "Pasting happens when atomized droplets strike the wall before drying completely, or if the product drops below its sticky point temperature. We mitigate this by tuning air vectors and using pneumatic air-sweeps." },
                { q: "How can energy consumption be reduced in high-heat drying systems?", a: "We integrate heavy-duty air-to-air recuperators that capture heat from the exhaust air stream and use it to preheat incoming fresh air, lowering fuel demand by up to 15-20%." },
                { q: "When is a rotary atomizer preferred over a pressure nozzle?", a: "Rotary disks excel with abrasive slurries and high feed rates, allowing easy adjustment of particle sizes. Pressure nozzles are selected when you need a narrow particle distribution or larger granules." },
                { q: "How do you control product temperature in a Fluidized Bed Dryer?", a: "We regulate temperature by adjusting the material's residence time via discharge weirs and implementing automated control loops tied to air volume inputs." },
                { q: "Why is co-current flow used for heat-sensitive materials in spray drying?", a: "In co-current designs, the wet feed meets the hottest air first. Rapid evaporation absorbs the thermal energy instantly, keeping the product at its cool wet-bulb temperature." },
                { q: "How are fine powder particles collected from exhaust air?", a: "Exhaust streams travel through high-efficiency collection cyclones to capture the bulk solids, followed by pulse-jet fabric bag houses to ensure clean emissions." },
                { q: "What parameters are key for sizing a rotary dryer drum?", a: "We size drums based on wet feed moisture levels, particle density, material angle of repose, and the required hot air velocity needed to prevent drop out." },
                { q: "Can your systems handle sticky feedstocks or sludge filtration cakes?", a: "Yes. For sticky materials, we incorporate internal conditioning systems or back-mix a portion of dry product into the incoming wet feed to ensure smooth handling." }
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