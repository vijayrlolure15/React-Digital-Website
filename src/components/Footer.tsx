import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import NviloLogo from './NviloLogo';
import Reveal from './Reveal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Services: [
      { label: 'Website Development', href: '/services' },
      { label: 'Ecommerce Development', href: '/services' },
      { label: 'SEO Services', href: '/services' },
      { label: 'Logo Designing', href: '/services' },
      { label: 'Company Profile Designing', href: '/services' },
      { label: 'UI / UX Design', href: '/services' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Work', href: '/portfolio' },
      { label: 'Technologies', href: '/technologies' },
      { label: 'Contact Us', href: '/contact' },
    ],
    Cities: [
      'Pune',
      'Delhi',
      'Chennai',
      'Bangalore',
      'Mumbai',
      'Hyderabad',
      'Kolkata',
    ],
  };

  return (
    <footer className="relative border-t overflow-hidden" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <Reveal animation="fade-right" duration={700} className="lg:col-span-2">
            <div>
              <div className="mb-6">
                <NviloLogo size="lg" />
              </div>
              <p className="font-body text-sm text-[#8888a8] leading-relaxed mb-6 max-w-xs">
                Empowering businesses through innovative IT solutions and digital transformation strategies. A decade of excellence, a future of possibilities.
              </p>
              <a
                href="mailto:info@nviloinfotech.in"
                className="inline-flex items-center gap-2 text-sm font-body text-[#4f6ef7] hover:text-[#7b93ff] transition-colors group"
              >
                info@nviloinfotech.in
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </Reveal>

          {/* Links */}
          {Object.entries(links).map(([category, items], i) => (
            <Reveal key={category} animation="fade-up" delay={i * 80} duration={600}>
              <div>
                <h4 className="font-display font-700 text-xs text-[#f0f0f8] uppercase tracking-widest mb-5">{category}</h4>
                <ul className="space-y-3">
                  {items.map((item, j) => {
                    if (typeof item === 'string') {
                      return (
                        <li key={item}>
                          <span className="text-sm font-body text-[#8888a8]">{item}</span>
                        </li>
                      );
                    }
                    return (
                      <li key={j}>
                        <Link
                          to={item.href}
                          className="text-sm font-body text-[#8888a8] hover:text-[#f0f0f8] transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <Reveal animation="fade-in" delay={400} duration={800}>
        <div className="border-t px-6 lg:px-8 py-6" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-body text-[#8888a8]">
              © {currentYear} Nvilo Infotech. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="text-xs font-body text-[#8888a8] hover:text-[#f0f0f8] transition-colors">Privacy Policy</Link>
              <Link to="/disclaimer" className="text-xs font-body text-[#8888a8] hover:text-[#f0f0f8] transition-colors">Disclaimer</Link>
              <Link to="/" className="text-xs font-body text-[#8888a8] hover:text-[#f0f0f8] transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
