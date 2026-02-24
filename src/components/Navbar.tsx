import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import NviloLogo from './NviloLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Technologies', href: '/technologies' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Career', href: '/career' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-blur' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <NviloLogo size="md" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-body text-[#8888a8] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            {/* Contact Info */}
            <div className="text-right">
              <div className="text-xs font-body text-[#8888a8]">Call us</div>
              <a href="tel:+919130696011" className="text-sm font-body text-[#f0f0f8] hover:text-[#4f6ef7] transition-colors">
                +91 91306 96011
              </a>
            </div>
            <button
              onClick={() => window.dispatchEvent(new Event('openLeadForm'))}
              className="btn-primary px-5 py-2.5 rounded-full text-sm font-body font-medium text-white"
            >
              <span>Start Your Project</span>
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#8888a8] hover:text-white transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden nav-blur border-t border-white/5">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map(link => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[#8888a8] hover:text-white transition-colors font-body text-sm py-1"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                window.dispatchEvent(new Event('openLeadForm'));
              }}
              className="btn-primary px-5 py-3 rounded-full text-sm font-body font-medium text-white text-center mt-2"
            >
              <span>Start Your Project</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
