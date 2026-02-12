import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Work } from './pages/Work';
import { Ventures } from './pages/Ventures';
import { ArchitecturalEngineering } from './pages/disciplines/ArchitecturalEngineering';
import { ExperienceDesign } from './pages/disciplines/ExperienceDesign';
import { IntelligenceSystems } from './pages/disciplines/IntelligenceSystems';
import { PerformanceEdge } from './pages/disciplines/PerformanceEdge';

// New Service Detail Pages
import { EngineeringDetail } from './pages/services/EngineeringDetail';
import { CommerceDetail } from './pages/services/CommerceDetail';
import { IntelligenceDetail } from './pages/services/IntelligenceDetail';
import { MobileDetail } from './pages/services/MobileDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="min-h-screen selection:bg-foreground selection:text-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/ventures" element={<Ventures />} />
          <Route path="/about" element={<About />} />
          
          {/* Disciplines */}
          <Route path="/disciplines/architectural-engineering" element={<ArchitecturalEngineering />} />
          <Route path="/disciplines/experience-design" element={<ExperienceDesign />} />
          <Route path="/disciplines/intelligence-systems" element={<IntelligenceSystems />} />
          <Route path="/disciplines/performance-edge" element={<PerformanceEdge />} />

          {/* Service Details */}
          <Route path="/services/engineering" element={<EngineeringDetail />} />
          <Route path="/services/commerce" element={<CommerceDetail />} />
          <Route path="/services/intelligence" element={<IntelligenceDetail />} />
          <Route path="/services/mobile" element={<MobileDetail />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
