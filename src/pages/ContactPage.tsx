import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <div className="noise min-h-screen" style={{ background: '#050508' }}>
      <SEO
        title="Contact Us | Start Your Project"
        description="Contact Nvilo Infotech today for a free consultation. Let's work together to build stunning digital experiences."
        canonical="https://nviloinfotech.in/contact"
      />
      <Navbar />
      <PageHero
        title="Get In Touch"
        subtitle="Contact Us"
        description="Ready to start your digital transformation? Let's discuss how we can help bring your vision to life."
      />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}