import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { Send, CheckCircle } from 'lucide-react';

export const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSent(true);
      setTimeout(() => setIsSent(false), 3000);
    }, 1000);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Decorative background */}
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-t from-red-900/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Build Together</h2>
          <p className="text-slate-400">Have a project in mind? Send me a message.</p>
        </div>

        <GlassCard className="max-w-lg mx-auto" delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input type="text" required className="w-full px-4 py-3 rounded-xl glass-input transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input type="email" required className="w-full px-4 py-3 rounded-xl glass-input transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea required rows={4} className="w-full px-4 py-3 rounded-xl glass-input transition-all" placeholder="Tell me about your project..."></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSent}
              className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${
                isSent ? 'bg-emerald-600' : 'bg-gradient-to-r from-red-600 to-purple-600 hover:shadow-lg hover:shadow-red-500/30'
              }`}
            >
              {isSent ? (
                <>
                  <CheckCircle size={20} /> Message Sent
                </>
              ) : (
                <>
                  <Send size={20} /> Send Message
                </>
              )}
            </button>
          </form>
        </GlassCard>
      </div>
    </section>
  );
};