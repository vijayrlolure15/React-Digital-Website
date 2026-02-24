import { ArrowRight, Play } from 'lucide-react';
import { useMouseParallax } from '../hooks/useMouseParallax';
import Reveal from './Reveal';

export default function Hero() {
  const orb1Ref = useMouseParallax(0.018);
  const orb2Ref = useMouseParallax(-0.012);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Background orbs — mouse parallax */}
      <div
        ref={orb1Ref as React.RefObject<HTMLDivElement>}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none animate-float-3d"
        style={{ background: 'radial-gradient(circle, #723FE4 0%, transparent 70%)', transition: 'transform 0.1s linear' }}
      />
      <div
        ref={orb2Ref as React.RefObject<HTMLDivElement>}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none animate-parallax-3d"
        style={{ background: 'radial-gradient(circle, #d7134e 0%, transparent 70%)', transition: 'transform 0.1s linear' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none animate-wave-3d" style={{ background: 'radial-gradient(circle, #454276 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <Reveal animation="fade-down" delay={0} duration={700}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(114,63,228,0.3)] bg-[rgba(114,63,228,0.06)] mb-8">
              <div className="w-2 h-2 rounded-full bg-[#d7134e] animate-pulse" />
              <span className="text-xs font-body text-[#8888a8] tracking-widest uppercase">Driving Digital Transformation</span>
            </div>
          </Reveal>

          {/* Headline */}
          <Reveal animation="fade-up" delay={100} duration={800}>
            <h1 className="font-display font-800 text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-6">
              <span className="text-[#f0f0f8]">We Build Digital</span>
              <br />
              <span className="gradient-text">Experiences That</span>
              <br />
              <span className="text-[#f0f0f8]">Matter</span>
            </h1>
          </Reveal>

          {/* Subhead */}
          <Reveal animation="fade-up" delay={200} duration={700}>
            <p className="font-body text-lg md:text-xl text-[#8888a8] max-w-2xl mx-auto leading-relaxed mb-10">
              Nvilo Infotech empowers businesses with innovative IT solutions — from stunning websites to enterprise-grade software, crafted to drive real growth.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal animation="fade-up" delay={320} duration={700}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => window.dispatchEvent(new Event('openLeadForm'))}
                className="btn-primary px-8 py-4 rounded-full text-white font-body font-medium text-base flex items-center gap-2 group hover-3d"
              >
                <span>Start Your Project</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#work"
                className="btn-outline px-8 py-4 rounded-full text-[#f0f0f8] font-body font-medium text-base flex items-center gap-2 hover-scale-3d"
              >
                <Play size={14} fill="currentColor" />
                View Our Work
              </a>
            </div>
          </Reveal>

          {/* Stats strip */}
          <Reveal animation="fade-up" delay={450} duration={700}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
              {[
                { value: '1+', label: 'Years of Expertise' },
                { value: '30+', label: 'Projects Delivered' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '24/7', label: 'Support Available' },
              ].map((stat, i) => (
                <div key={i} className="bg-[#0c0c14] px-6 py-8 text-center">
                  <div className="stat-number text-4xl md:text-5xl mb-2">{stat.value}</div>
                  <div className="text-xs font-body text-[#8888a8] uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to top, #050508, transparent)' }} />
    </section>
  );
}
