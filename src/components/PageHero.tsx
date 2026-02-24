import React from 'react';
import { useMouseParallax } from '../hooks/useMouseParallax';
import Reveal from './Reveal';

interface PageHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function PageHero({ title, subtitle, description }: PageHeroProps) {
  const orb1Ref = useMouseParallax(0.015);
  const orb2Ref = useMouseParallax(-0.01);

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden grid-pattern">
      {/* Background orbs with parallax */}
      <div
        ref={orb1Ref as React.RefObject<HTMLDivElement>}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #723FE4 0%, transparent 70%)', transition: 'transform 0.1s linear' }}
      />
      <div
        ref={orb2Ref as React.RefObject<HTMLDivElement>}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #d7134e 0%, transparent 70%)', transition: 'transform 0.1s linear' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 pt-20 pb-16 text-center">
        {/* Badge */}
        <Reveal animation="fade-down" delay={0} duration={600}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(114,63,228,0.3)] bg-[rgba(114,63,228,0.06)] mb-6">
            <div className="w-2 h-2 rounded-full bg-[#d7134e] animate-pulse" />
            <span className="text-xs font-body text-[#8888a8] tracking-widest uppercase">{subtitle}</span>
          </div>
        </Reveal>

        {/* Headline */}
        <Reveal animation="fade-up" delay={100} duration={700}>
          <h1 className="font-display font-800 text-4xl md:text-6xl leading-tight tracking-tight mb-6">
            <span className="text-[#f0f0f8]">{title}</span>
          </h1>
        </Reveal>

        {/* Description */}
        <Reveal animation="fade-up" delay={200} duration={600}>
          <p className="font-body text-lg text-[#8888a8] max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}