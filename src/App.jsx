import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Blog from '../components/Blog.jsx';

// Layout & Core Global UI
import { SiteHeader } from '../components/Site-header.jsx';
import { Hero } from '../components/Hero.jsx';
import { Services } from '../components/Services.jsx';
import { Expertise } from '../components/Expertise.jsx';
import { Projects } from '../components/Project.jsx';
import { WhyChoose } from '../components/Why-choose.jsx';
import { Industries } from '../components/Industries.jsx';
import { ContactCTA } from '../components/Contact-cta.jsx';
import { SiteFooter } from '../components/Site-footer.jsx';

// 🔗 Services Subpages
import EvaporationSystems from '../components/thermservice/Evaporation.jsx';
import Sprayserv from '../components/thermservice/Sprayserv.jsx';
import Atfdserv from '../components/thermservice/Atfdserv.jsx';
import Fluidserv from '../components/thermservice/Fluidserv.jsx';
import Multistage from '../components/thermservice/Multistage.jsx';
import Spinflash from '../components/thermservice/Spinflash.jsx';
import Techaudit from '../components/thermservice/Techaudit.jsx';
import ZldSolutionsPage from '../components/thermservice/Zldserv.jsx';
import ProcessEquipment from '../components/thermservice/ProcessEquipment.jsx';

// 🔗 Industries Subpages (Sitting inside thermindust folder)
import Food from '../components/thermindust/Food.jsx';
import Herbal from '../components/thermindust/Herbal.jsx';
import Agro from '../components/thermindust/Agro.jsx';
import Chemical from '../components/thermindust/Chemical.jsx';
import Paper from '../components/thermindust/Paper.jsx';
import Water from '../components/thermindust/Water.jsx';
import Textile from '../components/thermindust/Textile.jsx';
import Pharma from '../components/thermindust/Pharma.jsx';



import Atfd from '../components/thermproject/Atfd.jsx';
import Falling from '../components/thermproject/Falling.jsx';
import Fluid from '../components/thermproject/Fluid.jsx';
import Forced from '../components/thermproject/Forced.jsx';
import Multi from '../components/thermproject/Multi.jsx';
import Paddle from '../components/thermproject/Paddle.jsx';
import Rise from '../components/thermproject/Rise.jsx';
import Screw from '../components/thermproject/Screw.jsx';
import Spin from '../components/thermproject/Spin.jsx';
import Spray from '../components/thermproject/Spray.jsx';
import Ssc from '../components/thermproject/Ssc.jsx';
import Zld from '../components/thermproject/Zld.jsx';


// 🔗 Expertise Subpages
import DesignOptimization from '../components/thermexpertise/DesignOptimization.jsx';
import TechnicalAudits from '../components/thermexpertise/TechnicalAudits.jsx';
import ProcessCalculates from '../components/thermexpertise/ProcessCalculators.jsx';
import Troubleshooting from '../components/thermexpertise/Troubleshooting.jsx';

/**
 * 💡 Window Layout Helper Component:
 * Automatically resets viewport context coordinates back to (0,0) 
 * on every single route parameter jump.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// 🏠 The main homepage layout bundle
function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Expertise />
      <Projects />
      <WhyChoose />
      <Industries />
      <ContactCTA />
      <Blog />
      <SiteFooter />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Active Scroll Restoration */}
      <ScrollToTop />

      <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
        {/* Global site header remains active across all pages */}
        <SiteHeader />

        <main className="flex-grow">
          <Routes>
            {/* Main Homepage Route */}
            <Route path="/" element={<HomePage />} />

            {/* 🛠️ Services Subpage View Routes */}
            <Route path="/services/evaporation-systems" element={<EvaporationSystems />} />
            <Route path="/services/spray-dryers" element={<Sprayserv />} />
            <Route path="/services/zld-solutions" element={<ZldSolutionsPage />} />
            <Route path="/services/fluid-bed-dryers" element={<Fluidserv/>} />
            <Route path="/services/atfd-systems" element={<Atfdserv />} />
            <Route path="/services/spin-flash-dryers" element={<Spinflash />} />
            <Route path="/services/multi-stage-dryers" element={<Multistage />} />
            <Route path="/services/technical-auditing" element={<Techaudit />} />
            <Route path="/services/process-equipment" element={<ProcessEquipment />} />

            {/* 🌟 Thermindust Sector Routing Layer (Matched to lowercase card hrefs) */}
            <Route path="/thermindust/food-dairy" element={<Food />} />
            <Route path="/thermindust/herbal-catechu" element={<Herbal />} />
            <Route path="/thermindust/agro-distilleries" element={<Agro />} />
            <Route path="/thermindust/chemical-process" element={<Chemical />} />
            <Route path="/thermindust/pulp-paper" element={<Paper />} />
            <Route path="/thermindust/pharma-biotech" element={<Pharma />} />
            <Route path="/thermindust/textiles-dyeing" element={<Textile/>} />
            <Route path="/thermindust/water-treatment" element={<Water />} />


            <Route path="/thermproject/falling" element={<Falling />} />
            <Route path="/thermproject/atfd" element={<Atfd />} />
            <Route path="/thermproject/fluid" element={<Fluid />} />
            <Route path="/thermproject/forced" element={<Forced />} />
            <Route path="/thermproject/multi" element={<Multi />} />
            <Route path="/thermproject/paddle" element={<Paddle />} />
            <Route path="/thermproject/rise" element={<Rise />} />
            <Route path="/thermproject/screw" element={<Screw />} />
            <Route path="/thermproject/spin" element={<Spin />} />
            <Route path="/thermproject/spray" element={<Spray />} />
            <Route path="/thermproject/ssc" element={<Ssc />} />
            <Route path="/thermproject/zld" element={<Zld />} />



            {/* 🔬 Expertise Subpage View Routes */}
            <Route path="/expertise/design-optimization" element={<DesignOptimization />} />
            <Route path="/expertise/technical-audits" element={<TechnicalAudits />} />
            <Route path="/expertise/process-calculations" element={<ProcessCalculates />} />
            <Route path="/expertise/troubleshooting" element={<Troubleshooting />} />
            <Route path='/blog' element={<Blog />}/>
            {/* Fallback Catch-All Redirect */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}