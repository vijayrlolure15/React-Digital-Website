import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import Career from '../components/Career';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function CareerPage() {
  return (
    <div className="noise min-h-screen" style={{ background: '#050508' }}>
      <SEO
        title="Careers | Join Nvilo Infotech"
        description="Looking for an exciting career in tech? Join Nvilo Infotech and work on global projects with a talented team of developers and designers."
        canonical="https://nviloinfotech.in/career"
      />
      <Navbar />
      <PageHero
        title="Join Our Team"
        subtitle="Careers"
        description="Be part of a dynamic team shaping the future of digital solutions. Explore exciting opportunities and grow with us."
      />
      <main>
        <Career />
      </main>
      <Footer />
    </div>
  );
}