import { motion } from 'motion/react';
import { Briefcase, Globe2, Wrench, CheckCircle, Search, Clock } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'Third-Party Hiring',
      desc: 'Seamlessly augment your team with pre-vetted professionals globally. Zero administrative hassle.',
      icon: Briefcase,
    },
    {
      title: 'Contract Staffing',
      desc: 'Hire specialized talent for specific project durations. Scale up or down effortlessly.',
      icon: Clock,
    },
    {
      title: 'Dedicated Remote Teams',
      desc: 'Build full independent squads. We handle infrastructure, payroll, and local compliance.',
      icon: Globe2,
    },
    {
      title: 'Permanent Hiring',
      desc: 'Find the perfect long-term fit for your company culture with our AI-driven matching.',
      icon: CheckCircle,
    },
    {
      title: 'Executive Search',
      desc: 'Discreet, high-precision headhunting for C-suite and senior leadership roles.',
      icon: Search,
    },
    {
      title: 'Payroll & Workforce Management',
      desc: 'Consolidate global payments, benefits, and compliance under one reliable platform.',
      icon: Wrench,
    },
  ];

  return (
    <section className="py-24 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-6 text-white"
          >
            End-to-End <span className="text-gradient">Workforce Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            From temporary scaling to permanent core builds, we provide the infrastructure to power your global expansion.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass p-8 rounded-2xl group cursor-pointer relative overflow-hidden"
            >
              {/* Hover gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-xl bg-slate-800/50 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-slate-300 group-hover:text-highlight transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="flex items-center text-sm font-semibold text-primary group-hover:text-highlight transition-colors">
                  Learn More
                  <span className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
