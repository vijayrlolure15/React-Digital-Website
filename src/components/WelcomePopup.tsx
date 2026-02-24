import { useState, useEffect } from 'react';
import { X, Sparkles, Send, Loader2, AlertCircle } from 'lucide-react';
import { sendFormEmail, VALIDATION } from '../config/emailjs';

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ email: '', mobile: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem('welcome-popup-seen');
      if (!hasSeen) {
        setIsOpen(true);
        // Small delay so the CSS transition fires after mount
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setVisible(true));
        });
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setVisible(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300); // match transition duration
    localStorage.setItem('welcome-popup-seen', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!VALIDATION.EMAIL.test(form.email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (!VALIDATION.PHONE.test(form.mobile)) {
      alert('Please enter a valid mobile number');
      return;
    }

    setStatus('loading');

    const ok = await sendFormEmail({
      subject: 'New Newsletter Subscriber — Nvilo Infotech',
      from_name: 'Website Visitor',
      from_email: form.email,
      message: `New subscriber from welcome popup.\nMobile: ${form.mobile}\nEmail: ${form.email}`,
    });

    if (ok) {
      setStatus('success');
      localStorage.setItem('welcome-popup-seen', 'true');
      setTimeout(() => closePopup(), 2200);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      style={{ zIndex: 10000 }}
      className="fixed inset-0 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
        onClick={closePopup}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden overflow-y-auto"
        style={{
          background: '#0c0c14',
          border: '1px solid rgba(114, 63, 228, 0.3)',
          boxShadow: '0 25px 60px rgba(114, 63, 228, 0.25), 0 0 0 1px rgba(215,19,78,0.1)',
          maxHeight: '90vh',
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(20px)',
          transition: 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {/* Top gradient bar */}
        <div
          className="h-1 w-full"
          style={{ background: 'linear-gradient(90deg, #723FE4, #d7134e, #723FE4)' }}
        />

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #723FE4, #d7134e)' }}
            >
              <Sparkles size={18} className="text-white" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-[#f0f0f8] leading-tight">
                Welcome to Nvilo!
              </h3>
              <p className="text-xs text-[#8888a8]">Stay ahead with digital innovation</p>
            </div>
          </div>
          <button
            onClick={closePopup}
            aria-label="Close popup"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#8888a8] hover:text-white hover:bg-white/10 transition-all flex-shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {status === 'success' ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                <Send size={24} className="text-green-400" />
              </div>
              <h4 className="font-display font-semibold text-lg text-[#f0f0f8] mb-2">
                You're In! 🎉
              </h4>
              <p className="text-[#8888a8] text-sm">
                Thanks for subscribing. We'll keep you updated with our latest services and exclusive offers.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <h4 className="font-display font-semibold text-base text-[#f0f0f8] mb-1.5">
                  Stay Connected
                </h4>
                <p className="text-[#8888a8] text-sm leading-relaxed">
                  Get the latest updates on our digital solutions and exclusive offers straight to your inbox.
                </p>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 mb-4">
                  <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-body text-[#8888a8] mb-1.5">
                    Email Address
                  </label>
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
                  <label className="block text-sm font-body text-[#8888a8] mb-1.5">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#12121e] border border-white/10 text-[#f0f0f8] placeholder-[#8888a8] focus:border-[#723FE4] focus:outline-none transition-colors"
                    placeholder="+91 98765 43210"
                    disabled={status === 'loading'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-6 py-3 rounded-lg text-white font-body font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  style={{ background: 'linear-gradient(135deg, #723FE4, #d7134e)' }}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending…</span>
                    </>
                  ) : (
                    <span>Subscribe Now</span>
                  )}
                </button>

                <p className="text-center text-xs text-[#8888a8]">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}