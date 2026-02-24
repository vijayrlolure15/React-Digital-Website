import Reveal from './Reveal';

const techStack = [
  { name: 'WordPress', category: 'CMS' },
  { name: 'Elementor', category: 'Builder' },
  { name: 'WooCommerce', category: 'Ecommerce' },
  { name: 'PHP', category: 'Backend' },
  { name: 'React', category: 'Frontend' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'Figma', category: 'Design' },
  { name: 'Adobe Suite', category: 'Creative' },
  { name: 'CorelDraw', category: 'Vector' },
];

const marqueeItems = [...techStack, ...techStack, ...techStack];

export default function Technologies() {
  return (
    <section id="technologies" className="py-32 relative overflow-hidden">
      {/* Background line */}
      <div className="absolute top-1/2 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(114,63,228,0.3), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <Reveal animation="fade-up" duration={700}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(114,63,228,0.3)] bg-[rgba(114,63,228,0.06)] mb-6">
              <span className="text-xs font-body text-[#723FE4] tracking-widest uppercase">Our Expertise</span>
            </div>
            <h2 className="font-display font-800 text-4xl md:text-6xl text-[#f0f0f8] leading-tight tracking-tight">
              Technologies We
              <br />
              <span className="gradient-text">Master</span>
            </h2>
          </div>
        </Reveal>

        {/* Tech grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 mb-20">
          {techStack.map((tech, i) => (
            <Reveal key={i} animation="zoom-in" delay={i * 50} duration={500}>
              <div
                className="tech-pill gradient-border rounded-xl p-4 text-center cursor-default hover-scale-3d h-full"
                style={{ background: '#0c0c14', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="font-display font-700 text-sm text-[#f0f0f8] mb-1 leading-tight">{tech.name}</div>
                <div className="text-xs font-body text-[#723FE4] opacity-70">{tech.category}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, #050508, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(-90deg, #050508, transparent)' }} />
          <div className="flex gap-6 marquee-track" style={{ width: 'max-content' }}>
            {marqueeItems.map((tech, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-6 py-3 rounded-full border border-white/10 flex items-center gap-2"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#4f6ef7' }} />
                <span className="font-body text-sm text-[#8888a8] whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
