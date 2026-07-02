import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      target: '1–2 Hires',
      desc: 'Perfect for startups evaluating their first core hires.',
      features: ['Basic Screening', 'Email Support', 'Access to global pool', 'Standard contracts'],
      highlight: false
    },
    {
      name: 'Growth',
      target: '3–10 Hires',
      desc: 'Ideal for scaling teams needing fast, continuous placements.',
      features: ['Priority Hiring', 'Dedicated Manager', 'Advanced technical vetting', 'Slack/Teams integration', '72-hour delivery'],
      highlight: true
    },
    {
      name: 'Enterprise',
      target: 'Unlimited Pricing',
      desc: 'Custom infrastructure for large-scale global workforce operations.',
      features: ['Custom Workforce Solutions', 'Premium Support', 'Custom compliance handling', 'On-site strategy consulting', 'Volume discounts'],
      highlight: false
    }
  ];

  return (
    <section className="py-24 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 text-white"
          >
            Transparent <span className="text-gradient">Pricing</span>
          </motion.h2>
          <p className="text-lg text-slate-400">
            No hidden fees. Scale your team precisely when you need to.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl border ${plan.highlight ? 'bg-gradient-to-b from-primary/10 to-transparent border-primary shadow-[0_0_40px_rgba(37,99,235,0.2)]' : 'glass border-white/10'}`}
            >
              {plan.highlight && (
                <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-4 tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-primary font-medium mb-6">{plan.target}</div>
              
              <p className="text-slate-400 text-sm mb-8 h-10">{plan.desc}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map(feat => (
                  <li key={feat} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 shrink-0 ${plan.highlight ? 'text-highlight' : 'text-primary'}`} />
                    <span className="text-sm text-slate-300">{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                plan.highlight 
                  ? 'bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]' 
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
              }`}>
                Contact Sales
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
