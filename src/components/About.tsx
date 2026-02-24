import { Target, Eye, Zap } from 'lucide-react';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #723FE4 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <Reveal animation="fade-right" duration={800}>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden glow-blue tilt-3d" style={{ border: '1px solid rgba(114,63,228,0.2)' }}>
                <img src="/images/about.jpg" alt="Nvilo Infotech Team" className="w-full h-[480px] object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(114,63,228,0.15) 0%, transparent 60%)' }} />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl animate-float-3d" style={{ background: '#0c0c14', border: '1px solid rgba(114,63,228,0.3)', backdropFilter: 'blur(20px)' }}>
                <div className="stat-number text-4xl mb-1">1+</div>
                <div className="text-xs font-body text-[#8888a8] uppercase tracking-wider">Years of Excellence</div>
              </div>
              <div className="absolute -top-4 -left-4 px-4 py-3 rounded-xl flex items-center gap-2 animate-bounce-3d" style={{ background: '#0c0c14', border: '1px solid rgba(215,19,78,0.3)' }}>
                <div className="w-2 h-2 rounded-full bg-[#d7134e] animate-pulse" />
                <span className="text-xs font-body text-[#d7134e]">Serving Globally</span>
              </div>
            </div>
          </Reveal>

          {/* Right - Content */}
          <Reveal animation="fade-left" delay={150} duration={750}>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(114,63,228,0.3)] bg-[rgba(114,63,228,0.06)] mb-6">
                <span className="text-xs font-body text-[#723FE4] tracking-widest uppercase">About Us</span>
              </div>

              <h2 className="font-display font-800 text-4xl md:text-5xl text-[#f0f0f8] leading-tight tracking-tight mb-6">
                A Decade of<br />
                <span className="gradient-text">Digital Excellence</span>
              </h2>

              <p className="font-body text-[#8888a8] leading-relaxed mb-8">
                At Nvilo Infotech, we empower businesses through innovative IT solutions and digital transformation strategies. With over a decade of expertise, our team of certified professionals delivers cutting-edge software development, cloud services, and cybersecurity solutions tailored to drive growth.
              </p>
              <p className="font-body text-[#8888a8] leading-relaxed mb-10">
                We pride ourselves on fostering long-term partnerships, combining technical excellence with deep client understanding. Serving startups to enterprises globally, our commitment to quality and security ensures future-ready technological success.
              </p>

              {/* AVM Cards */}
              <div className="space-y-4">
                {[
                  { icon: Target, title: 'Our Aim', desc: 'To deliver innovative and impactful digital design solutions that elevate brands.', color: '#4f6ef7' },
                  { icon: Eye, title: 'Our Vision', desc: 'To be the global leader in crafting unforgettable digital identities.', color: '#00d4ff' },
                  { icon: Zap, title: 'Our Mission', desc: 'Empowering businesses through creative, user-centric website and logo designs that drive growth and engagement.', color: '#7b93ff' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={i} animation="fade-up" delay={i * 80} duration={550}>
                      <div className="flex items-start gap-4 p-5 rounded-xl" style={{ background: '#0c0c14', border: '1px solid rgba(255,255,255,0.07)' }}>
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                          <Icon size={18} style={{ color: item.color }} />
                        </div>
                        <div>
                          <div className="font-display font-600 text-sm text-[#f0f0f8] mb-1">{item.title}</div>
                          <div className="font-body text-xs text-[#8888a8] leading-relaxed">{item.desc}</div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
