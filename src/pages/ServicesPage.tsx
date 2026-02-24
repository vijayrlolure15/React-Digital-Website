import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import AllServices from '../components/AllServices';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function ServicesPage() {
  return (
    <div className="noise min-h-screen" style={{ background: '#050508' }}>
      <SEO
        title="Our Services | Full-Service IT Agency"
        description="Explore our range of IT services: Custom Web Development, SEO, App Development, and UI/UX Design. Scalable solutions for modern businesses."
        canonical="https://nviloinfotech.in/services"
      />
      <Navbar />
      <PageHero
        title="Our Services"
        subtitle="What We Do"
        description="Comprehensive digital solutions tailored to transform your business and accelerate growth in the modern marketplace."
      />
      <main>
        <AllServices />
      </main>
      <Footer />
    </div>
  );
}