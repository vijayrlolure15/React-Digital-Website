import { useState } from 'react';
import { Send, MapPin, Mail, Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { sendFormEmail, VALIDATION } from '../config/emailjs';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!VALIDATION.EMAIL.test(form.email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (!VALIDATION.PHONE.test(form.phone)) {
      alert('Please enter a valid phone number');
      return;
    }

    setStatus('loading');

    const ok = await sendFormEmail({
      subject: `New Enquiry from ${form.name} — Nvilo Infotech`,
      from_name: form.name,
      from_email: form.email,
      phone: form.phone,
      service: form.service || 'Not specified',
      message: form.message,
    });

    if (ok) {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const services = [
    'Website Development',
    'Ecommerce Development',
    'SEO Services',
    'Logo Designing',
    'Company Profile Designing',
    'UI / UX Design',
  ];

  return (
    <section id="contact" className="py-32 relative">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none animate-glow-3d" style={{ background: 'radial-gradient(circle, #723FE4 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-20 p-12 md:p-16 text-center glow-blue" style={{ background: 'linear-gradient(135deg, #0c0c14 0%, #12121e 100%)', border: '1px solid rgba(114,63,228,0.2)' }}>
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #723FE4 0%, transparent 70%)' }} />
          <div className="relative z-10">
            <h2 className="font-display font-800 text-4xl md:text-6xl text-[#f0f0f8] leading-tight tracking-tight mb-6">
              Ready to Build
              <br />
              <span className="gradient-text">Something Great?</span>
            </h2>
            <p className="font-body text-[#8888a8] max-w-xl mx-auto mb-8 leading-relaxed">
              Let's transform your vision into a powerful digital reality. Our team is ready to craft the perfect solution for your business.
            </p>
            <a
              href="mailto:info@nviloinfotech.in"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-body font-medium text-base"
            >
              <span>Get In Touch</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Contact form + info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(114,63,228,0.3)] bg-[rgba(114,63,228,0.06)] mb-6">
                <span className="text-xs font-body text-[#723FE4] tracking-widest uppercase">Contact Us</span>
              </div>
              <h3 className="font-display font-800 text-3xl text-[#f0f0f8] leading-tight mb-4">
                Let's Start a
                <br />
                <span className="gradient-text">Conversation</span>
              </h3>
              <p className="font-body text-[#8888a8] leading-relaxed">
                Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra, India' },
                { icon: Mail, label: 'Email', value: 'info@nviloinfotech.in' },
                { icon: Phone, label: 'Phone', value: '+91 91306 96011' },
                { icon: MessageCircle, label: 'WhatsApp', value: '+91 91306 96011', href: 'https://wa.me/919130696011' },
              ].map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: '#0c0c14', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(114,63,228,0.1)', border: '1px solid rgba(114,63,228,0.2)' }}>
                      <Icon size={16} style={{ color: '#723FE4' }} />
                    </div>
                    <div>
                      <div className="text-xs font-body text-[#8888a8] mb-0.5">{item.label}</div>
                      <div className="text-sm font-body text-[#f0f0f8]">{item.value}</div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4 p-8 rounded-2xl" style={{ background: '#0c0c14', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-body text-[#8888a8] mb-2 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl text-sm font-body text-[#f0f0f8] placeholder-[#8888a8] outline-none transition-all duration-200 focus:border-[#723FE4]"
                    style={{ background: '#12121e', border: '1px solid rgba(255,255,255,0.07)' }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-body text-[#8888a8] mb-2 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl text-sm font-body text-[#f0f0f8] placeholder-[#8888a8] outline-none transition-all duration-200 focus:border-[#723FE4]"
                    style={{ background: '#12121e', border: '1px solid rgba(255,255,255,0.07)' }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-body text-[#8888a8] mb-2 uppercase tracking-wider">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl text-sm font-body text-[#f0f0f8] placeholder-[#8888a8] outline-none transition-all duration-200 focus:border-[#723FE4]"
                  style={{ background: '#12121e', border: '1px solid rgba(255,255,255,0.07)' }}
                />
              </div>

              <div>
                <label className="block text-xs font-body text-[#8888a8] mb-2 uppercase tracking-wider">Service Needed</label>
                <select
                  value={form.service}
                  onChange={e => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm font-body text-[#f0f0f8] outline-none transition-all duration-200"
                  style={{ background: '#12121e', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <option value="" className="bg-[#12121e]">Select a service...</option>
                  {services.map(s => (
                    <option key={s} value={s} className="bg-[#12121e]">{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-body text-[#8888a8] mb-2 uppercase tracking-wider">Project Details</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project, goals, and timeline..."
                  className="w-full px-4 py-3 rounded-xl text-sm font-body text-[#f0f0f8] placeholder-[#8888a8] outline-none transition-all duration-200 resize-none"
                  style={{ background: '#12121e', border: '1px solid rgba(255,255,255,0.07)' }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full py-4 rounded-xl text-white font-body font-medium flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === 'loading' && <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /><span>Sending…</span></>}
                {status === 'success' && <span>✓ Message Sent!</span>}
                {status === 'error' && <span>Failed — please try again</span>}
                {status === 'idle' && <><span>Send Message</span><Send size={16} /></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
