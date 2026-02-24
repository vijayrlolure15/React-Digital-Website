import { Users, Target, Heart, Briefcase } from 'lucide-react';
import { useState } from 'react';
import JobApplicationModal from './JobApplicationModal';
import Reveal from './Reveal';

export default function Career() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="career" className="py-32 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none animate-rotate-scroll" style={{ background: 'radial-gradient(circle, #723FE4 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal animation="fade-up" duration={700}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(114,63,228,0.3)] bg-[rgba(114,63,228,0.06)] mb-6">
              <span className="text-xs font-body text-[#723FE4] tracking-widest uppercase">Career</span>
            </div>

            <h2 className="font-display font-800 text-4xl md:text-5xl text-[#f0f0f8] leading-tight tracking-tight mb-6">
              Join Our
              <br />
              <span className="gradient-text">Growing Team</span>
            </h2>

            <p className="font-body text-[#8888a8] max-w-2xl mx-auto leading-relaxed">
              Be part of a dynamic team that's shaping the future of digital solutions. We offer exciting opportunities for growth, innovation, and making a real impact.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <Reveal animation="fade-right" duration={750}>
            <div>
              <h3 className="font-display font-600 text-2xl text-[#f0f0f8] mb-6">Why Join Nvilo Infotech?</h3>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: Users,
                    title: 'Collaborative Environment',
                    desc: 'Work with talented professionals in a supportive and innovative atmosphere.',
                    color: '#723FE4',
                  },
                  {
                    icon: Target,
                    title: 'Growth Opportunities',
                    desc: 'Continuous learning and career advancement through challenging projects.',
                    color: '#d7134e',
                  },
                  {
                    icon: Heart,
                    title: 'Work-Life Balance',
                    desc: 'Flexible working arrangements and a culture that values your well-being.',
                    color: '#454276',
                  },
                  {
                    icon: Briefcase,
                    title: 'Exciting Projects',
                    desc: 'Work on cutting-edge technologies and diverse client projects.',
                    color: '#d7134e',
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={i} animation="fade-up" delay={i * 80} duration={500}>
                      <div
                        className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                        style={{ background: '#0c0c14', border: '1px solid rgba(255,255,255,0.07)' }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${item.color}15`, border: `${item.color}30` }}>
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

          {/* Right - Image */}
          <Reveal animation="fade-left" delay={150} duration={750}>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden glow-blue" style={{ border: '1px solid rgba(114,63,228,0.2)' }}>
                <img
                  src="/images/hero-bg.jpg"
                  alt="Nvilo Infotech Team"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(114,63,228,0.15) 0%, transparent 60%)' }} />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl animate-float-3d" style={{ background: '#0c0c14', border: '1px solid rgba(114,63,228,0.3)', backdropFilter: 'blur(20px)' }}>
                <div className="stat-number text-4xl mb-1">50+</div>
                <div className="text-xs font-body text-[#8888a8] uppercase tracking-wider">Team Members</div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -left-4 px-4 py-3 rounded-xl flex items-center gap-2 animate-bounce-3d" style={{ background: '#0c0c14', border: '1px solid rgba(215,19,78,0.3)' }}>
                <div className="w-2 h-2 rounded-full bg-[#d7134e] animate-pulse" />
                <span className="text-xs font-body text-[#d7134e]">Growing Fast</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Job Openings */}
        <div className="mt-20">
          <Reveal animation="fade-up">
            <h3 className="font-display font-600 text-2xl text-[#f0f0f8] text-center mb-10">Current Openings</h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Senior React Developer',
                type: 'Full-time',
                location: 'Remote',
                description: 'Build cutting-edge web applications using React, TypeScript, and modern development practices.',
                requirements: ['3+ years React experience', 'TypeScript', 'Node.js', 'Git']
              },
              {
                title: 'UI/UX Designer',
                type: 'Full-time',
                location: 'On-site',
                description: 'Create beautiful and intuitive user experiences for web and mobile applications.',
                requirements: ['Figma expertise', 'User research', 'Prototyping', 'Design systems']
              },
              {
                title: 'SEO Specialist',
                type: 'Contract',
                location: 'Remote',
                description: 'Optimize websites for search engines and drive organic traffic growth.',
                requirements: ['SEO tools', 'Analytics', 'Content strategy', 'Technical SEO']
              },
              {
                title: 'Backend Developer',
                type: 'Full-time',
                location: 'Remote',
                description: 'Develop robust server-side applications and APIs using modern technologies.',
                requirements: ['Node.js/PHP', 'Databases', 'REST APIs', 'Cloud services']
              },
              {
                title: 'Project Manager',
                type: 'Full-time',
                location: 'On-site',
                description: 'Lead project teams and ensure successful delivery of client projects.',
                requirements: ['Project management', 'Agile/Scrum', 'Client communication', 'Team leadership']
              },
              {
                title: 'DevOps Engineer',
                type: 'Full-time',
                location: 'Remote',
                description: 'Manage infrastructure, deployments, and ensure system reliability.',
                requirements: ['AWS/Azure', 'Docker', 'CI/CD', 'Monitoring tools']
              },
            ].map((job, i) => (
              <Reveal key={i} animation="zoom-in" delay={i * 60} duration={600}>
                <div
                  className="p-6 rounded-xl group hover-3d h-full flex flex-col"
                  style={{ background: '#0c0c14', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <h4 className="font-display font-600 text-lg text-[#f0f0f8] mb-2">{job.title}</h4>
                  <div className="flex items-center gap-4 text-xs font-body text-[#8888a8] mb-4">
                    <span className="px-2 py-1 rounded-full bg-[#723FE4]/20 text-[#723FE4]">{job.type}</span>
                    <span className="px-2 py-1 rounded-full bg-[#d7134e]/20 text-[#d7134e]">{job.location}</span>
                  </div>
                  <p className="text-sm text-[#8888a8] mb-4 leading-relaxed flex-grow">{job.description}</p>
                  <div className="mb-4">
                    <div className="text-xs font-body text-[#8888a8] mb-2 uppercase tracking-wider">Requirements</div>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, reqIndex) => (
                        <span
                          key={reqIndex}
                          className="px-2 py-1 rounded-full text-xs font-body bg-white/5 text-[#f0f0f8] border border-white/10"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    className="btn-primary w-full py-3 rounded-xl text-white font-body font-medium text-sm hover:shadow-lg hover:shadow-[#723FE4]/25 transition-all duration-300"
                    onClick={() => {
                      setSelectedJob(job.title);
                      setIsModalOpen(true);
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Company Culture Section */}
        <div className="mt-20">
          <Reveal animation="fade-up">
            <div className="text-center mb-16">
              <h3 className="font-display font-600 text-2xl text-[#f0f0f8] mb-6">Life at Nvilo Infotech</h3>
              <p className="font-body text-[#8888a8] max-w-2xl mx-auto leading-relaxed">
                We're more than just a workplace — we're a community of innovators, creators, and problem-solvers united by our passion for technology and excellence.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation First',
                description: 'We encourage creative thinking and provide the tools to turn ideas into reality.',
                icon: '🚀'
              },
              {
                title: 'Continuous Learning',
                description: 'Regular training, conferences, and opportunities to expand your skills and knowledge.',
                icon: '📚'
              },
              {
                title: 'Team Spirit',
                description: 'Collaborative environment where every voice is heard and valued.',
                icon: '🤝'
              }
            ].map((culture, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 100} duration={600}>
                <div
                  className="text-center p-8 rounded-xl hover-scale-[1.05] transition-all duration-300 h-full"
                  style={{ background: '#0c0c14', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="text-4xl mb-4">{culture.icon}</div>
                  <h4 className="font-display font-600 text-lg text-[#f0f0f8] mb-3">{culture.title}</h4>
                  <p className="text-sm text-[#8888a8] leading-relaxed">{culture.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Reveal animation="zoom-in" delay={200}>
          <div className="mt-20 text-center">
            <div className="relative rounded-3xl overflow-hidden p-12 md:p-16" style={{ background: 'linear-gradient(135deg, #0c0c14 0%, #12121e 100%)', border: '1px solid rgba(114,63,228,0.2)' }}>
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #723FE4 0%, transparent 70%)' }} />
              <div className="relative z-10">
                <h3 className="font-display font-800 text-3xl md:text-4xl text-[#f0f0f8] leading-tight tracking-tight mb-6">
                  Ready to Join Our Team?
                </h3>
                <p className="font-body text-[#8888a8] max-w-xl mx-auto mb-8 leading-relaxed">
                  Don't see a position that matches your skills? We're always looking for talented individuals. Send us your resume and let's talk.
                </p>
                <button
                  className="btn-primary px-8 py-4 rounded-full text-white font-body font-medium text-base flex items-center gap-2 mx-auto hover:shadow-xl hover:shadow-[#723FE4]/30 transition-all duration-300"
                  onClick={() => {
                    setSelectedJob('General Application');
                    setIsModalOpen(true);
                  }}
                >
                  <span>Send General Application</span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Job Application Modal */}
      <JobApplicationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedJob(null);
        }}
        jobTitle={selectedJob || ''}
      />
    </section>
  );
}