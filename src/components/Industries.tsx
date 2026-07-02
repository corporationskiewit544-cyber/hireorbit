import { motion } from 'motion/react';
import { Monitor, HeartPulse, Building2, ShoppingCart, Home, Truck, Factory, Rocket } from 'lucide-react';

export function Industries() {
  const industries = [
    { name: 'Information Technology', icon: Monitor },
    { name: 'Healthcare', icon: HeartPulse },
    { name: 'Finance', icon: Building2 },
    { name: 'E-commerce', icon: ShoppingCart },
    { name: 'Real Estate', icon: Home },
    { name: 'Logistics', icon: Truck },
    { name: 'Manufacturing', icon: Factory },
    { name: 'SaaS Startups', icon: Rocket },
  ];

  return (
    <section className="py-24 relative z-10 bg-transparent overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4 text-white"
            >
              Specialized by <span className="text-gradient">Industry</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400"
            >
              We speak your language. Our talent pool is categorized by vertical expertise.
            </motion.p>
          </div>
          <motion.button
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors whitespace-nowrap self-start md:self-end"
          >
            Explore All Industries
          </motion.button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ 
                y: -10, 
                rotateX: 5, 
                rotateY: -5,
                boxShadow: "0 20px 40px -10px rgba(37,99,235,0.2)"
              }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 cursor-pointer group h-40 border border-white/5"
            >
              <ind.icon className="h-8 w-8 text-slate-400 group-hover:text-highlight transition-colors duration-300 transform group-hover:scale-110 group-hover:-translate-y-1" style={{ transformTranslateZ: 20 }} />
              <span className="font-semibold text-sm lg:text-base text-slate-200 group-hover:text-white transition-colors">
                {ind.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
