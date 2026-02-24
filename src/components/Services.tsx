import { Globe, ShoppingCart, Search, Palette, FileText, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const services = [
  {
    num: '01', icon: Globe,
    title: 'Website Development',
    description: 'Custom, high-performance websites built with modern technologies. From landing pages to complex web applications — we craft digital experiences that convert.',
    tags: ['WordPress', 'React', 'PHP', 'Elementor'],
  },
  {
    num: '02', icon: ShoppingCart,
    title: 'Ecommerce Development',
    description: 'Scalable online stores engineered for maximum conversions. Seamless checkout flows, inventory management, and payment integrations built for growth.',
    tags: ['WooCommerce', 'Shopify', 'Payment Gateways'],
  },
  {
    num: '03', icon: Search,
    title: 'SEO Services',
    description: 'Data-driven SEO strategies that boost your organic visibility. From technical audits to content optimization, we help you rank and stay ranked.',
    tags: ['On-Page SEO', 'Technical SEO', 'Link Building'],
  },
  {
    num: '04', icon: Palette,
    title: 'Logo Designing',
    description: 'Memorable brand identities that tell your story. Our designers craft logos that capture your essence and resonate with your target audience.',
    tags: ['Illustrator', 'CorelDraw', 'Figma'],
  },
  {
    num: '05', icon: FileText,
    title: 'Company Profile Designing',
    description: 'Professional company profiles that make lasting impressions. Visually compelling documents that communicate your brand value with authority.',
    tags: ['Adobe Suite', 'InDesign', 'Print-Ready'],
  },
  {
    num: '06', icon: Layout,
    title: 'UI / UX Design',
    description: 'User-centric interfaces designed for delight and conversion. We combine research, strategy, and aesthetics to create experiences users love.',
    tags: ['Figma', 'Prototyping', 'User Research'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <Reveal animation="fade-up" duration={700}>
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(114,63,228,0.3)] bg-[rgba(114,63,228,0.06)] mb-6">
              <span className="text-xs font-body text-[#723FE4] tracking-widest uppercase">What We Do</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="font-display font-800 text-4xl md:text-6xl text-[#f0f0f8] leading-tight tracking-tight max-w-lg">
                Services Built<br />
                <span className="gradient-text">for Impact</span>
              </h2>
              <p className="font-body text-[#8888a8] max-w-sm leading-relaxed">
                From concept to launch, we deliver end-to-end digital solutions that drive measurable results for businesses across India and beyond.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Service cards */}
        <div className="space-y-px bg-white/5 rounded-2xl overflow-hidden">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={i} animation="fade-left" delay={i * 60} duration={600}>
                <div className="service-card bg-[#0c0c14] border border-transparent px-8 py-8 flex flex-col md:flex-row md:items-center gap-6 cursor-pointer hover-3d">
                  <div className="flex-shrink-0 w-12">
                    <span className="font-display text-sm font-600 text-[#723FE4] opacity-60">{service.num}</span>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(114,63,228,0.1)', border: '1px solid rgba(114,63,228,0.2)' }}>
                    <Icon size={20} style={{ color: '#723FE4' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-700 text-xl text-[#f0f0f8] mb-2">{service.title}</h3>
                    <p className="font-body text-sm text-[#8888a8] leading-relaxed max-w-xl">{service.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {service.tags.map((tag) => (
                      <span key={tag} className="tech-pill px-3 py-1 rounded-full text-xs font-body text-[#8888a8] border border-white/10 bg-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* View All button */}
        <Reveal animation="fade-up" delay={100} duration={600}>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-body font-medium text-base">
              <span>View All Services</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
