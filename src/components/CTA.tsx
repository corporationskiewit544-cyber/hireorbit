import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-primary/20 backdrop-blur-3xl" />
      
      {/* Animated glowing sphere background */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-accent/50 to-highlight/50 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-7xl font-bold mb-8 text-white tracking-tight"
        >
          Hire Top Talent Faster With <span className="text-highlight">HireOrbit</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto font-medium"
        >
          Reduce hiring costs, eliminate administrative friction, and scale globally with our pre-vetted network.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-8 py-4 rounded-full bg-white text-dark font-bold text-lg hover:bg-slate-200 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all flex items-center gap-2 group">
            Schedule A Call
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-full border border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}
