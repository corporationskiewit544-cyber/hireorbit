import { motion } from 'motion/react';
import { Services } from '../components/Services';
import { CTA } from '../components/CTA';

export default function ServicesPage() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6 text-white"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-highlight">Services</span>
        </motion.h1>
      </div>
      <Services />
      <CTA />
    </div>
  );
}
