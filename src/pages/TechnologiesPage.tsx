import Reveal from '../components/Reveal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

const techGroups = [
    {
        title: 'Frontend Development',
        items: [
            { name: 'React', desc: 'Modern UI logic' },
            { name: 'Vue.js', desc: 'Progressive framework' },
            { name: 'Tailwind CSS', desc: 'Utility-first styling' },
            { name: 'TypeScript', desc: 'Type-safe JavaScript' },
            { name: 'Next.js', desc: 'SSR & Static sites' },
        ]
    },
    {
        title: 'Backend & Databases',
        items: [
            { name: 'Node.js', desc: 'Scalable backend' },
            { name: 'PHP / Laravel', desc: 'Robust web apps' },
            { name: 'Python', desc: 'Data & Automation' },
            { name: 'PostgreSQL', desc: 'Relational database' },
            { name: 'MongoDB', desc: 'NoSQL storage' },
        ]
    },
    {
        title: 'CMS & Ecommerce',
        items: [
            { name: 'WordPress', desc: 'Flexible CMS' },
            { name: 'Shopify', desc: 'Ecommerce titan' },
            { name: 'WooCommerce', desc: 'WP Ecommerce' },
            { name: 'Strapi', desc: 'Headless CMS' },
        ]
    },
    {
        title: 'Design & Creative',
        items: [
            { name: 'Figma', desc: 'UI/UX Design' },
            { name: 'Adobe Suite', desc: 'Graphic design' },
            { name: 'CorelDraw', desc: 'Vector graphics' },
            { name: 'Blender', desc: '3D assets' },
        ]
    }
];

export default function TechnologiesPage() {
    return (
        <div className="noise min-h-screen" style={{ background: '#050508' }}>
            <SEO
                title="Technologies We Use | Modern Tech Stack"
                description="Our expertise includes React, Node.js, PHP, WordPress, and more. We use cutting-edge technologies to build fast, secure, and scalable solutions."
                canonical="https://nviloinfotech.in/technologies"
            />
            <Navbar />

            <main className="pt-20">
                <PageHero
                    title="Technologies We Master"
                    subtitle="Our Expertise"
                    description="We leverage the latest and most reliable technologies to build scalable, high-performance digital products for our clients."
                />

                <section className="py-20 relative">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {techGroups.map((group, groupIdx) => (
                                <Reveal key={groupIdx} animation="fade-up" delay={groupIdx * 100}>
                                    <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                                        <h3 className="font-display font-800 text-2xl text-[#f0f0f8] mb-8 gradient-text inline-block">
                                            {group.title}
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {group.items.map((tech, i) => (
                                                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#723FE4]/30 transition-colors group">
                                                    <div className="w-2 h-2 rounded-full bg-[#723FE4] mt-2 group-hover:scale-125 transition-transform" />
                                                    <div>
                                                        <div className="font-display font-700 text-[#f0f0f8] mb-1">{tech.name}</div>
                                                        <div className="text-xs font-body text-[#8888a8]">{tech.desc}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to action */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <Reveal animation="zoom-in">
                            <div className="p-12 rounded-3xl border border-[#723FE4]/20 bg-[#723FE4]/5 backdrop-blur-md">
                                <h2 className="font-display font-800 text-3xl md:text-4xl text-[#f0f0f8] mb-6 tracking-tight">
                                    Have a specific stack in mind?
                                </h2>
                                <p className="text-[#8888a8] font-body mb-8">
                                    We are versatile and always evolving. If you need expertise in a technology not listed here, we likely have the resources to help.
                                </p>
                                <button
                                    onClick={() => window.dispatchEvent(new Event('openLeadForm'))}
                                    className="btn-primary px-8 py-4 rounded-full text-sm font-body font-medium text-white"
                                >
                                    Discuss Your Stack
                                </button>
                            </div>
                        </Reveal>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
