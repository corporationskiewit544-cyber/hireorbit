import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6 text-white"
        >
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-highlight">Touch</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto"
        >
          Ready to scale your team? Our workforce specialists are ready to help you build the perfect setup for your needs.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.2 }}
           className="glass-card p-8 rounded-2xl border border-white/10"
        >
           <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
           <form className="space-y-4">
             <div>
               <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
               <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
             </div>
             <div>
               <label className="block text-sm font-medium text-slate-400 mb-2">Work Email</label>
               <input type="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@company.com" />
             </div>
             <div>
               <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
               <textarea rows={4} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Tell us about your hiring needs..."></textarea>
             </div>
             <button type="button" className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
               Send Message
             </button>
           </form>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.3 }}
           className="space-y-8"
        >
          <div className="glass p-6 rounded-2xl border border-white/5 flex gap-4 items-start">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Email Us</h4>
              <p className="text-slate-400 mb-2">For general inquiries and support.</p>
              <a href="mailto:hr@hireorbit.agency" className="text-primary hover:text-highlight transition-colors">hr@hireorbit.agency</a>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border border-white/5 flex gap-4 items-start">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Call Us</h4>
              <p className="text-slate-400 mb-2">Mon-Fri from 8am to 5pm.</p>
              <p className="text-white">+91 XXXXX XXXXX</p>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border border-white/5 flex gap-4 items-start">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Global HQ</h4>
              <p className="text-slate-400">100 Tech Hub Boulevard<br/>Suite 300<br/>San Francisco, CA 94107</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
