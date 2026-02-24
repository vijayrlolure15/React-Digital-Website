import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { projects as allProjects } from '../data/projects';

// Pick some featured projects for the home page
const projects = [
  allProjects[0], // Nvilo Infotech
  allProjects[1], // Fuhrer Services
  allProjects[10], // Urjja Infrastructure
  allProjects[13], // Mindfully urs
  allProjects[21], // Modern Brand Identity
];

export default function Work() {
  return (
    <section id="work" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <Reveal animation="fade-up" duration={700}>
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(114,63,228,0.3)] bg-[rgba(114,63,228,0.06)] mb-6">
              <span className="text-xs font-body text-[#723FE4] tracking-widest uppercase">Our Work</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="font-display font-800 text-4xl md:text-6xl text-[#f0f0f8] leading-tight tracking-tight">
                Selected
                <br />
                <span className="gradient-text">Projects</span>
              </h2>
              <Link
                to="/portfolio"
                className="btn-outline px-6 py-3 rounded-full text-[#f0f0f8] font-body text-sm flex items-center gap-2 self-start md:self-auto"
              >
                View All Work
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <Reveal
              key={i}
              animation="zoom-in"
              delay={i * 80}
              duration={600}
              className={`${i === 0 ? 'md:col-span-2' : ''}`}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="work-card group block rounded-2xl overflow-hidden gradient-border hover-3d h-full"
                style={{ background: '#0c0c14' }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: i === 0 ? '320px' : '220px' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="work-overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(5,5,8,0.7)' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(114,63,228,0.9)' }}>
                      <ArrowUpRight size={20} className="text-white" />
                    </div>
                  </div>
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full text-xs font-body font-medium text-white" style={{ background: 'rgba(114,63,228,0.8)', backdropFilter: 'blur(8px)' }}>
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-body text-[#723FE4] uppercase tracking-wider font-semibold">{project.category}</span>
                    <span className="text-xs font-body text-[#8888a8]">{project.industry}</span>
                  </div>
                  <h3 className="font-display font-700 text-lg text-[#f0f0f8]">{project.title}</h3>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
