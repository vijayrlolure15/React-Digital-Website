import { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { sendFormEmail, VALIDATION } from '../config/emailjs';

interface LeadFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadFormPopup({ isOpen, onClose }: LeadFormPopupProps) {
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
      subject: `New Project Enquiry from ${form.name} — Nvilo Infotech`,
      from_name: form.name,
      from_email: form.email,
      phone: form.phone,
      service: form.service || 'Not specified',
      message: form.message,
    });

    if (ok) {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        onClose();
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
      }, 2000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const services = [
    'Website Development',
    'Ecommerce Development',
    'SEO Services',
    'Logo Designing',
    'Company Profile Designing',
    'UI / UX Design',
  ];

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-[#0c0c14] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-zoom-in"
        style={{ maxHeight: 'calc(100vh - 40px)', display: 'flex', flexDirection: 'column' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h3 className="font-display font-semibold text-xl text-[#f0f0f8]">Start Your Project</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#8888a8] hover:text-white hover:bg-white/10 transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 overflow-y-auto flex-grow">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                <Send size={24} className="text-green-400" />
              </div>
              <h4 className="font-display font-semibold text-lg text-[#f0f0f8] mb-2">Message Sent!</h4>
              <p className="text-[#8888a8] text-sm">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-body text-[#8888a8] mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#12121e] border border-white/10 text-[#f0f0f8] placeholder-[#8888a8] focus:border-[#723FE4] focus:outline-none transition-colors"
                  placeholder="Your name"
                  disabled={status === 'loading'}
                />
              </div>

              <div>
                <label className="block text-sm font-body text-[#8888a8] mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#12121e] border border-white/10 text-[#f0f0f8] placeholder-[#8888a8] focus:border-[#723FE4] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  disabled={status === 'loading'}
                />
              </div>

              <div>
                <label className="block text-sm font-body text-[#8888a8] mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#12121e] border border-white/10 text-[#f0f0f8] placeholder-[#8888a8] focus:border-[#723FE4] focus:outline-none transition-colors"
                  placeholder="+91 98765 43210"
                  disabled={status === 'loading'}
                />
              </div>

              <div>
                <label className="block text-sm font-body text-[#8888a8] mb-2">Service</label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#12121e] border border-white/10 text-[#f0f0f8] focus:border-[#723FE4] focus:outline-none transition-colors"
                  disabled={status === 'loading'}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-body text-[#8888a8] mb-2">Message</label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-[#12121e] border border-white/10 text-[#f0f0f8] placeholder-[#8888a8] focus:border-[#723FE4] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  disabled={status === 'loading'}
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn-primary flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-body font-medium disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /><span>Sending…</span></>
                ) : (
                  <><Send size={16} /><span>Send Message</span></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}