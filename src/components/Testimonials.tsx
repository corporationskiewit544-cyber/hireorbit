import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, NovaTech',
      text: 'HireOrbit reduced our hiring time by 70%. The quality of engineers we onboarded through their platform has fundamentally shifted our product delivery speed.'
    },
    {
      name: 'Michael Carter',
      role: 'Founder, Elevate AI',
      text: 'Exceptional quality candidates. We needed highly specialized AI researchers on short notice, and HireOrbit delivered within 48 hours.'
    },
    {
      name: 'David Williams',
      role: 'COO, Vertex Solutions',
      text: 'Reliable and extremely professional. Their payroll and compliance handling for our global remote team has been seamless.'
    }
  ];

  return (
    <section className="py-24 relative z-10 bg-transparent overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
         <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 text-white"
          >
            Trusted by <span className="text-gradient">Innovators</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 text-highlight fill-highlight" />
                  ))}
                </div>
                <p className="text-slate-300 mb-8 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full border border-white/20 bg-slate-800 flex items-center justify-center font-bold text-slate-400">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-bold text-white tracking-tight">{review.name}</h4>
                  <p className="text-sm text-slate-400">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
