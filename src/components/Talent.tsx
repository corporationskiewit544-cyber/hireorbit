import { motion } from 'motion/react';
import { Star, MapPin } from 'lucide-react';

export function Talent() {
  const talents = [
    {
      name: 'Elena Rostova',
      role: 'Full Stack Developer',
      skills: ['React', 'Node.js', 'AWS'],
      exp: '6 Yrs Exp',
      location: 'Eastern Europe',
      status: 'Available Now'
    },
    {
      name: 'James Chen',
      role: 'UI/UX Designer',
      skills: ['Figma', 'Framer', 'Design Systems'],
      exp: '4 Yrs Exp',
      location: 'North America',
      status: 'Available in 2 wks'
    },
    {
      name: 'Sofia Martinez',
      role: 'DevOps Engineer',
      skills: ['Kubernetes', 'Docker', 'CI/CD'],
      exp: '8 Yrs Exp',
      location: 'South America',
      status: 'Available Now'
    },
    {
      name: 'David Kim',
      role: 'Data Analyst',
      skills: ['Python', 'SQL', 'Tableau'],
      exp: '5 Yrs Exp',
      location: 'Asia Pacific',
      status: 'Available Now'
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="absolute inset-0 bg-transparent overflow-hidden">
         {/* Subtle grid pattern */}
         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgMjBoNDBNMjAgMHY0MCIvPjwvZz48L3N2Zz4=')] mix-blend-screen opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm mb-6"
          >
            <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
            Top 1% Global Talent
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-6 text-white"
          >
            Hire Pre-Vetted <span className="text-gradient">Professionals</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            Skip the endless sourcing. Interview fully assessed candidates from our private network within 48 hours.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {talents.map((talent, i) => (
            <motion.div
              key={talent.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center relative group"
            >
              <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
              
              <div className="w-20 h-20 rounded-full p-1 border-2 border-white/10 mb-4 group-hover:border-primary/50 transition-colors">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-xl font-bold text-slate-400">
                  {talent.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight">{talent.name}</h3>
              <p className="text-primary font-medium text-sm mb-3">{talent.role}</p>

              <div className="flex items-center gap-1 text-xs text-slate-400 mb-4">
                <MapPin className="h-3 w-3" />
                {talent.location} • {talent.exp}
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {talent.skills.map(skill => (
                  <span key={skill} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>

              <button className="w-full mt-auto py-2.5 rounded-lg border border-primary/50 text-white font-medium hover:bg-primary transition-all text-sm group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                Hire Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
