import { useState, useMemo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

const categories = ['All', 'Web Development', 'Logo Design', 'App Development', 'SEO'];

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = useMemo(() => {
        if (activeCategory === 'All') return projects;
        return projects.filter(project => project.category === activeCategory);
    }, [activeCategory]);

    return (
        <div className="noise min-h-screen" style={{ background: '#050508' }}>
            <SEO
                title="Our Portfolio | Featured Projects"
                description="View our portfolio of successful projects across web development, logo design, app development, and SEO. see how we help businesses grow."
                canonical="https://nviloinfotech.in/portfolio"
            />
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Header */}
                    <Reveal animation="fade-up" duration={700}>
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(114,63,228,0.3)] bg-[rgba(114,63,228,0.06)] mb-6">
                                <span className="text-xs font-body text-[#723FE4] tracking-widest uppercase">Portfolio</span>
                            </div>
                            <h1 className="font-display font-800 text-5xl md:text-7xl text-[#f0f0f8] mb-6 tracking-tight">
                                Our <span className="gradient-text">Masterpieces</span>
                            </h1>
                            <p className="max-w-2xl mx-auto text-[#8888a8] text-lg font-body leading-relaxed">
                                Explore our diverse range of projects across various industries. From web development to branding, we deliver excellence.
                            </p>
                        </div>
                    </Reveal>

                    {/* Filters */}
                    <Reveal animation="fade-up" delay={200} duration={700}>
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-6 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-300 ${activeCategory === category
                                        ? 'bg-[#723FE4] text-white shadow-[0_0_20px_rgba(114,63,228,0.4)]'
                                        : 'bg-[rgba(255,255,255,0.03)] text-[#8888a8] border border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.08)]'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </Reveal>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, i) => (
                            <Reveal
                                key={i}
                                animation="zoom-in"
                                delay={i % 3 * 100}
                                duration={600}
                            >
                                <div
                                    className="work-card rounded-2xl overflow-hidden gradient-border hover-3d h-full group"
                                    style={{ background: '#0c0c14' }}
                                >
                                    {/* Image */}
                                    <div className="relative overflow-hidden aspect-[16/10]">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Overlay */}
                                        <div className="work-overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(5,5,8,0.8)' }}>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-14 h-14 rounded-full flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                                style={{ background: '#723FE4' }}
                                            >
                                                <ArrowUpRight size={24} className="text-white" />
                                            </a>
                                        </div>
                                        {/* Industry Tag */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full text-[10px] font-body font-bold text-white uppercase tracking-wider" style={{ background: 'rgba(114,63,228,0.8)', backdropFilter: 'blur(8px)' }}>
                                                {project.industry}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-body text-[#723FE4] uppercase tracking-wider font-semibold">{project.category}</span>
                                        </div>
                                        <h3 className="font-display font-700 text-xl text-[#f0f0f8] mb-4">{project.title}</h3>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-body text-[#8888a8] hover:text-white transition-colors"
                                        >
                                            View Project <ArrowUpRight size={14} />
                                        </a>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-[#8888a8] font-body italic">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
