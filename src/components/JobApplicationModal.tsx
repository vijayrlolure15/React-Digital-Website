import { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { sendFormEmail, VALIDATION } from '../config/emailjs';

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

export default function JobApplicationModal({ isOpen, onClose, jobTitle }: JobApplicationModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    resumeUrl: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!VALIDATION.EMAIL.test(form.email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (!VALIDATION.PHONE.test(form.phone)) {
      alert('Please enter a valid phone number (at least 10 digits)');
      return;
    }
    setStatus('loading');

    try {
      const ok = await sendFormEmail({
        subject: `Job Application: ${jobTitle} — ${form.name}`,
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        message: form.coverLetter || 'No cover letter provided.',
        extra: {
          'Position Applied': jobTitle,
          'Experience': form.experience,
          'Resume URL': form.resumeUrl,
        },
      });

      if (ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setForm({ name: '', email: '', phone: '', experience: '', coverLetter: '', resumeUrl: '' });
        }, 3000);
      } else {
        throw new Error('EmailJS returned an error status.');
      }
    } catch (err) {
      console.error('❌ Career Submission Failed:', err);
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
    <div className="fixed inset-0 flex items-center justify-center p-4" style={{ zIndex: 200 }}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{ background: '#0c0c14', border: '1px solid rgba(255,255,255,0.1)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div>
            <h2 className="font-display font-bold text-xl text-[#f0f0f8]">Apply for {jobTitle}</h2>
            <p className="text-sm text-[#8888a8] mt-1">Fill out the form below to submit your application</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <X size={16} className="text-[#8888a8]" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">

          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                <Send size={24} className="text-green-400" />
              </div>
              <h3 className="font-display font-semibold text-lg text-[#f0f0f8] mb-2">Application Submitted!</h3>
              <p className="text-[#8888a8]">Thank you! We'll review your application and get back to you soon.</p>
            </div>
          ) : (
            <>
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-body text-[#8888a8] mb-2 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl text-sm font-body text-[#f0f0f8] placeholder-[#8888a8] outline-none transition-all duration-200 focus:border-[#723FE4]"
                    style={{ background: '#12121e', border: '1px solid rgba(255,255,255,0.07)' }}
                    disabled={status === 'loading'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-body text-[#8888a8] mb-2 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl text-sm font-body text-[#f0f0f8] placeholder-[#8888a8] outline-none transition-all duration-200 focus:border-[#723FE4]"
                    style={{ background: '#12121e', border: '1px solid rgba(255,255,255,0.07)' }}
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-body text-[#8888a8] mb-2 uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl text-sm font-body text-[#f0f0f8] placeholder-[#8888a8] outline-none transition-all duration-200 focus:border-[#723FE4]"
                    style={{ background: '#12121e', border: '1px solid rgba(255,255,255,0.07)' }}
                    disabled={status === 'loading'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-body text-[#8888a8] mb-2 uppercase tracking-wider">Years of Experience</label>
                  <select
                    name="Experience"
                    value={form.experience}
                    onChange={(e) => setForm({ ...form, experience: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm font-body text-[#f0f0f8] outline-none transition-all duration-200 focus:border-[#723FE4]"
                    style={{ background: '#12121e', border: '1px solid rgba(255,255,255,0.07)' }}
                    disabled={status === 'loading'}
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-8">5-8 years</option>
                    <option value="8+">8+ years</option>
                  </select>
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block text-xs font-body text-[#8888a8] mb-2 uppercase tracking-wider">Cover Letter</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.coverLetter}
                  onChange={(e) => setForm({ ...form, coverLetter: e.target.value })}
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  className="w-full px-4 py-3 rounded-xl text-sm font-body text-[#f0f0f8] placeholder-[#8888a8] outline-none transition-all duration-200 resize-none focus:border-[#723FE4]"
                  style={{ background: '#12121e', border: '1px solid rgba(255,255,255,0.07)' }}
                  disabled={status === 'loading'}
                />
              </div>

              {/* Resume/Portfolio URL */}
              <div>
                <label className="block text-xs font-body text-[#8888a8] mb-2 uppercase tracking-wider">Resume or Portfolio URL</label>
                <input
                  type="url"
                  required
                  value={form.resumeUrl}
                  onChange={(e) => setForm({ ...form, resumeUrl: e.target.value })}
                  placeholder="https://drive.google.com/your-resume-link"
                  className="w-full px-4 py-3 rounded-xl text-sm font-body text-[#f0f0f8] placeholder-[#8888a8] outline-none transition-all duration-200 focus:border-[#723FE4]"
                  style={{ background: '#12121e', border: '1px solid rgba(255,255,255,0.07)' }}
                  disabled={status === 'loading'}
                />
                <p className="text-[10px] text-[#666686] mt-1.5 uppercase tracking-tight">Upload your resume to GDrive/Dropbox and paste the shareable link here.</p>
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">Submission failed. Please try again.</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full py-4 rounded-xl text-white font-body font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /><span>Submitting…</span></>
                ) : (
                  <><span>Submit Application</span><Send size={16} /></>
                )}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}