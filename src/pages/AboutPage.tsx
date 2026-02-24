import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import About from '../components/About';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <div className="noise min-h-screen" style={{ background: '#050508' }}>
      <SEO
        title="About Us | Nvilo Infotech"
        description="Discover the story behind Nvilo Infotech. Our mission is to provide cutting-edge IT services and digital transformation to global businesses."
        canonical="https://nviloinfotech.in/about"
      />
      <Navbar />
      <PageHero
        title="About Nvilo Infotech"
        subtitle="Our Story"
        description="Learn about our journey, values, and commitment to delivering exceptional digital solutions that drive business growth."
      />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}