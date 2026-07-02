import { Globe, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="relative z-10 bg-transparent pt-20 pb-10 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-tr from-primary to-highlight rounded-lg rotate-12 flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                HireOrbit
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Orbit Around The World's Best Talent. We help companies instantly build high-performing teams through third-party hiring and dedicated remote teams.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all hover:bg-white/5">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all hover:bg-white/5">
                <Twitter className="h-4 w-4" fill="currentColor" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all hover:bg-white/5">
                <Facebook className="h-4 w-4" fill="currentColor" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Pages</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Industries', href: '/industries' },
                { name: 'Talent Pool', href: '/talent' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-slate-400 hover:text-white hover:underline transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm text-slate-400">
                <a href="mailto:hr@hireorbit.agency" className="hover:text-white transition-colors">
                  hr@hireorbit.agency
                </a>
              </li>
              <li className="text-sm text-slate-400">
                +91 XXXXX XXXXX
              </li>
              <li className="text-sm text-slate-400 mt-4 leading-relaxed">
                Global Operations Center<br />
                Available 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 HireOrbit. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
