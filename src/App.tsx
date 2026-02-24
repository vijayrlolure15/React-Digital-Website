import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Technologies from './components/Technologies';
import About from './components/About';
import Cities from './components/Cities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import CareerPage from './pages/CareerPage';
import PortfolioPage from './pages/PortfolioPage';
import TechnologiesPage from './pages/TechnologiesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import LeadFormPopup from './components/LeadFormPopup';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import SEO from './components/SEO';

import WelcomePopup from './components/WelcomePopup';
import WhatsAppButton from './components/WhatsAppButton';
import CursorGlow from './components/CursorGlow';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <div className="noise min-h-screen" style={{ background: '#050508' }}>
      <SEO
        title="Nvilo Infotech | Expert Web Development & IT Services"
        description="Award-winning IT agency specializing in custom web design, SEO, and digital transformation. Start your digital journey with Nvilo Infotech today."
      />
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Nvilo Infotech",
              "image": "https://nviloinfotech.in/images/og-image.jpg",
              "@id": "https://nviloinfotech.in",
              "url": "https://nviloinfotech.in",
              "telephone": "+919130696011",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pune, Maharashtra",
                "addressLocality": "Pune",
                "addressRegion": "MH",
                "postalCode": "411001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.5204,
                "longitude": 73.8567
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/nviloinfotech",
                "https://www.linkedin.com/company/nviloinfotech",
                "https://twitter.com/nviloinfotech"
              ]
            }
          `}
        </script>
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Technologies />
        <About />
        <Cities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [showLeadForm, setShowLeadForm] = useState(false);

  useEffect(() => {
    const handleOpen = () => setShowLeadForm(true);
    window.addEventListener('openLeadForm', handleOpen);
    return () => window.removeEventListener('openLeadForm', handleOpen);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <CursorGlow />
      <WelcomePopup />
      <WhatsAppButton />
      <LeadFormPopup isOpen={showLeadForm} onClose={() => setShowLeadForm(false)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
      </Routes>
    </Router>
  );
}
