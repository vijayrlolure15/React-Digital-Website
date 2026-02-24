import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '+919130696011';
  const message = 'Hi! I\'m interested in your services. Can we discuss my project?';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Decorative pulse rings */}
      <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" style={{ animationDuration: '3s' }} />
      <div className="absolute inset-0 rounded-full bg-green-500/10 animate-ping" style={{ animationDuration: '2s' }} />

      <button
        onClick={handleClick}
        className="relative group w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_50px_rgba(37,211,102,0.6)]"
        title="Chat on WhatsApp"
      >
        {/* Glass effect shine */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />

        {/* Border glow */}
        <div className="absolute -inset-[1px] rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />

        <MessageCircle size={32} className="relative z-10 transition-transform duration-500 group-hover:rotate-12" />

        {/* Hover Label */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="text-xs font-body font-medium text-white whitespace-nowrap">Chat with us</span>
        </div>
      </button>
    </div>
  );
}