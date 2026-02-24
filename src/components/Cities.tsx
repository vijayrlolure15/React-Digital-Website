import Reveal from './Reveal';

const cities = [
  { name: 'Pune', role: 'Headquarters & Website Design' },
  { name: 'Delhi', role: 'Custom Website Development' },
  { name: 'Chennai', role: 'eCommerce Website Design' },
  { name: 'Bangalore', role: 'Responsive Web Design' },
  { name: 'Mumbai', role: 'Website Designer Hub' },
  { name: 'Hyderabad', role: 'Digital Solutions' },
  { name: 'Kolkata', role: 'IT Services' },
];

export default function Cities() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <Reveal animation="fade-up" duration={700}>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(114,63,228,0.3)] bg-[rgba(114,63,228,0.06)] mb-6">
              <span className="text-xs font-body text-[#723FE4] tracking-widest uppercase">Pan-India Presence</span>
            </div>
            <h2 className="font-display font-800 text-4xl md:text-5xl text-[#f0f0f8] leading-tight tracking-tight">
              Serving Businesses
              <br />
              <span className="gradient-text">Across India</span>
            </h2>
          </div>
        </Reveal>

        {/* Cities grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {cities.map((city, i) => (
            <Reveal key={i} animation="fade-up" delay={i * 60} duration={500}>
              <div
                className="tech-pill gradient-border rounded-xl p-4 text-center cursor-default hover-3d animate-morph-3d h-full"
                style={{ background: '#0c0c14', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="w-2 h-2 rounded-full mx-auto mb-3" style={{ background: 'linear-gradient(135deg, #723FE4, #d7134e)' }} />
                <div className="font-display font-700 text-sm text-[#f0f0f8] mb-1">{city.name}</div>
                <div className="text-xs font-body text-[#8888a8] leading-tight">{city.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
