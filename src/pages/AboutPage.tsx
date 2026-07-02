import { motion } from 'motion/react';
import { CTA } from '../components/CTA';

export default function AboutPage() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 text-white"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-highlight">HireOrbit</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            We're a global team dedicated to connecting ambitious companies with the world's most exceptional technical talent.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Our Mission & Legacy</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              With <strong>over 5 years of experience in the industry</strong>, we have been dedicated to reducing the time it takes for startups and enterprises to find, vet, and onboard true A-players. We believe geolocation shouldn't restrict access to incredible opportunities, and company growth shouldn't be hampered by hiring delays.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              Operating <strong>globally with a strong presence and headquarters in India</strong>, we bridge the gap between world-class companies and exceptional talent worldwide. Our deep roots in major tech hubs enable us to source the best candidates across borders.
            </p>
            <p className="text-slate-400 leading-relaxed">
              By building a rigorously vetted network and combining it with complete payroll and compliance infrastructure, we provide an all-in-one solution for building world-class teams.
            </p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative h-[400px] rounded-2xl overflow-hidden glass-card border border-white/10"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-highlight/20" />
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgMjBoNDBNMjAgMHY0MCIvPjwvZz48L3N2Zz4=')] bg-cover bg-center mix-blend-overlay opacity-60" />
          </motion.div>
        </div>
      </div>
      <CTA />
    </div>
  );
}
