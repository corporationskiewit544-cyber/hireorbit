import { motion } from 'motion/react';
import { ArrowRight, Code, PenTool, Bug, TrendingUp, Users, Megaphone } from 'lucide-react';
import { cn } from '../lib/utils';

export function Hero() {
  const stats = [
    { label: 'Professionals Network', value: '500+' },
    { label: 'Client Partnerships', value: '50+' },
    { label: 'Candidate Delivery', value: '72 Hours' },
    { label: 'Client Retention', value: '95%' },
  ];

  const floatingCards = [
    { id: 1, title: 'Developer', icon: Code, delay: 0, position: 'top-10 right-10' },
    { id: 2, title: 'Designer', icon: PenTool, delay: 0.2, position: 'top-40 -left-10' },
    { id: 3, title: 'QA Engineer', icon: Bug, delay: 0.4, position: 'bottom-20 right-20' },
    { id: 4, title: 'Sales Exec', icon: TrendingUp, delay: 0.6, position: 'top-20 left-10' },
    { id: 5, title: 'HR Spec', icon: Users, delay: 0.8, position: 'bottom-40 -right-5' },
    { id: 6, title: 'Marketer', icon: Megaphone, delay: 1, position: 'bottom-10 left-10' },
  ];

  return (
    <>
      <div className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex w-fit items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
              <span>Orbit Around The World's Best Talent</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tighter text-white text-balance">
              Build High-Performing Teams Without <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#06B6D4]">Hiring Delays</span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              HireOrbit helps businesses hire pre-vetted professionals worldwide within 72 hours. Stop settling. Start scaling.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <button className="px-8 py-4 bg-primary hover:bg-[#1d4ed8] text-white rounded-xl font-bold shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2 group w-max">
                Book Free Consultation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl font-bold transition-all w-max">
                Hire Talent Now
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-800">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - 3D Globe Representation */}
          <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center pointer-events-none sm:pointer-events-auto">
            {/* Core glowing sphere */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900/40 via-indigo-950/20 to-transparent border border-white/5 shadow-[0_0_80px_rgba(37,99,235,0.1)] -z-10 mix-blend-screen scale-75 blur-md" />
            
            {/* Inner Globe wireframe (simulated) */}
            <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full border border-blue-500/10 flex items-center justify-center animate-[spin_60s_linear_infinite]">
               <div className="absolute inset-0 rounded-full border border-blue-500/20 scale-90"></div>
               <div className="absolute inset-0 rounded-full border border-white/5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMCAxMGgyME0xMCAwdjIwIi8+PC9nPjwvc3ZnPg==')] [mask-image:radial-gradient(circle,white,transparent_70%)] scale-75"></div>
            </div>

            {/* Orbiting Cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -15, 0],
                }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 0.6 + i * 0.1 },
                  scale: { duration: 0.8, delay: 0.6 + i * 0.1 },
                  y: { duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: card.delay }
                }}
                className={cn(
                  "absolute glass-card px-4 py-3 rounded-xl flex items-center gap-3 cursor-pointer pointer-events-auto hover:bg-white/10 transition-colors duration-300",
                  card.position
                )}
                whileHover={{ scale: 1.05, zIndex: 10 }}
              >
                <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                  <card.icon className="h-4 w-4" />
                </div>
                <span className="font-medium text-sm text-slate-200">{card.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* Bottom Industry Bar */}
      <div className="px-4 sm:px-12 py-8 bg-slate-900/50 border-y border-slate-800/50 backdrop-blur-sm flex flex-col md:flex-row md:items-center gap-6 md:gap-12 relative z-10 w-full overflow-hidden">
        <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 whitespace-nowrap">Trusted by Leaders:</span>
        <div className="flex-1 flex justify-between items-center opacity-40 grayscale gap-8 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <span className="text-xl font-bold tracking-tighter whitespace-nowrap">NOVATECH</span>
          <span className="text-xl font-bold tracking-tighter italic underline decoration-primary whitespace-nowrap">ELEVATE AI</span>
          <span className="text-xl font-bold tracking-tighter whitespace-nowrap">VERTEX</span>
          <span className="text-xl font-bold tracking-tighter whitespace-nowrap">FINCORE</span>
          <span className="text-xl font-bold tracking-tighter opacity-60 whitespace-nowrap">BEYOND BPO</span>
        </div>
      </div>
    </>
  );
}
