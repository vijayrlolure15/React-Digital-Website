import { Globe, ShoppingCart, Search, Palette, FileText, Layout } from 'lucide-react';
import Reveal from './Reveal';

const services = [
  {
    num: '01',
    icon: Globe,
    title: 'Website Development',
    description: 'Custom, high-performance websites built with modern technologies. From landing pages to complex web applications — we craft digital experiences that convert.',
    tags: ['WordPress', 'React', 'PHP', 'Elementor'],
    details: 'Our website development service includes responsive design, SEO optimization, fast loading times, and integration with various APIs and databases.',
  },
  {
    num: '02',
    icon: ShoppingCart,
    title: 'Ecommerce Development',
    description: 'Scalable online stores engineered for maximum conversions. Seamless checkout flows, inventory management, and payment integrations built for growth.',
    tags: ['WooCommerce', 'Shopify', 'Payment Gateways'],
    details: 'We build robust ecommerce platforms with secure payment processing, inventory tracking, and analytics to help your business thrive online.',
  },
  {
    num: '03',
    icon: Search,
    title: 'SEO Services',
    description: 'Data-driven SEO strategies that boost your organic visibility. From technical audits to content optimization, we help you rank and stay ranked.',
    tags: ['On-Page SEO', 'Technical SEO', 'Link Building'],
    details: 'Our SEO experts use the latest techniques to improve your search rankings, drive organic traffic, and increase conversions.',
  },
  {
    num: '04',
    icon: Palette,
    title: 'Logo Designing',
    description: 'Memorable brand identities that tell your story. Our designers craft logos that capture your essence and resonate with your target audience.',
    tags: ['Illustrator', 'CorelDraw', 'Figma'],
    details: 'Professional logo design services including brand guidelines, vector files, and multiple concepts to choose from.',
  },
  {
    num: '05',
    icon: FileText,
    title: 'Company Profile Designing',
    description: 'Professional company profiles that make lasting impressions. Visually compelling documents that communicate your brand value with authority.',
    tags: ['Adobe Suite', 'InDesign', 'Print-Ready'],
    details: 'Create stunning company profiles with high-quality graphics, professional layouts, and compelling content that showcases your business.',
  },
  {
    num: '06',
    icon: Layout,
    title: 'UI / UX Design',
    description: 'User-centric interfaces designed for delight and conversion. We combine research, strategy, and aesthetics to create experiences users love.',
    tags: ['Figma', 'Prototyping', 'User Research'],
    details: 'Comprehensive UI/UX design services including user research, wireframing, prototyping, and usability testing.',
  },
];

export default function AllServices() {
  return (
    <section id="all-services" className="py-32 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #4f6ef7 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal animation="fade-up" duration={700}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(79,110,247,0.3)] bg-[rgba(79,110,247,0.06)] mb-6">
              <span className="text-xs font-body text-[#4f6ef7] tracking-widest uppercase">All Services</span>
            </div>

            <h2 className="font-display font-800 text-4xl md:text-5xl text-[#f0f0f8] leading-tight tracking-tight mb-6">
              Comprehensive
              <br />
              <span className="gradient-text">Digital Solutions</span>
            </h2>

            <p className="font-body text-[#8888a8] max-w-2xl mx-auto leading-relaxed">
              Explore our full range of services designed to transform your business and drive digital success.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={i} animation="zoom-in" delay={i * 80} duration={600}>
                <div
                  className="p-8 rounded-2xl group hover:scale-[1.02] transition-all duration-300 h-full"
                  style={{ background: '#0c0c14', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(79,110,247,0.1)', border: '1px solid rgba(79,110,247,0.3)' }}>
                      <Icon size={24} style={{ color: '#4f6ef7' }} />
                    </div>
                    <div className="text-sm font-body text-[#8888a8] font-medium">{service.num}</div>
                  </div>

                  <h3 className="font-display font-600 text-xl text-[#f0f0f8] mb-4">{service.title}</h3>

                  <p className="font-body text-[#8888a8] leading-relaxed mb-4">{service.description}</p>

                  <p className="font-body text-[#8888a8] leading-relaxed mb-6 text-sm">{service.details}</p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full text-xs font-body"
                        style={{ background: 'rgba(79,110,247,0.1)', color: '#4f6ef7' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}