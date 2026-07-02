import { motion } from 'motion/react';
import { FileText, Search, UserCheck, PlayCircle, ShieldCheck } from 'lucide-react';

export function TimelineFlow() {
  const steps = [
    { title: 'Share Requirements', icon: FileText, desc: 'Tell us about the role, skills, and culture fit.' },
    { title: 'Talent Shortlisting', icon: Search, desc: 'We match you with top 1% pre-vetted candidates.' },
    { title: 'Interview Candidates', icon: UserCheck, desc: 'Meet the final highly qualified selections.' },
    { title: 'Onboard Talent', icon: PlayCircle, desc: 'Seamless integration into your workflow within days.' },
    { title: 'Ongoing Support', icon: ShieldCheck, desc: 'Continuous management regarding payroll & compliance.' },
  ];

  return (
    <section className="py-24 relative z-10 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 text-white"
          >
            Hiring Process <span className="text-gradient">Timeline</span>
          </motion.h2>
          <p className="text-lg text-slate-400">
            From brief to completely onboarded in under a week. Transparent, predictable, and fast.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[44px] left-8 right-8 h-[2px] bg-white/10 z-0">
             <motion.div 
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="h-full bg-gradient-to-r from-primary to-highlight origin-left"
             />
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="h-24 w-24 rounded-full glass flex items-center justify-center mb-6 relative hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-full border border-primary/20 scale-110 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" />
                  <div className="h-16 w-16 rounded-full bg-slate-800 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors shadow-lg">
                    <step.icon className="h-7 w-7 text-primary group-hover:text-highlight transition-colors" />
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-white/10 rounded-full px-3 py-1 text-xs font-semibold text-slate-400 mb-4 inline-block">
                  Step 0{i + 1}
                </div>

                <h4 className="text-white font-bold mb-2 tracking-tight">{step.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
