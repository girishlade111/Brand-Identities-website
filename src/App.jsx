import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import AboutSection from './components/AboutSection';
import ProcessSection from './components/ProcessSection';
import ServicesSection from './components/ServicesSection';
import ClientReviews from './components/ClientReviews';
import FAQSection from './components/FAQSection';
import FooterCTA from './components/FooterCTA';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <PortfolioGrid />
        <AboutSection />
        <ProcessSection />
        <ServicesSection />
        <ClientReviews />
        <FAQSection />
        <FooterCTA />
      </main>
    </>
  );
}

export default App;
