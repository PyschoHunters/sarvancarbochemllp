import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import logo from '@/assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-gradient-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Sarvan Carbochem Logo" className="h-16 w-auto" />
              <div>
                <h3 className="font-display font-bold text-xl">Sarvan Carbochem</h3>
                <p className="text-sm text-primary-foreground/70 tracking-wider">LLP</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Technical marketing of Synthetic Rubbers and Rubber & Plastic Additives serving the Indian Rubber and Plastic Industries since 2014.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm text-primary-foreground/70">Trusted Since 2014</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-lg border-b border-primary-foreground/20 pb-3">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Principals', href: '/principals' },
                { name: 'Products', href: '/products' },
                { name: 'News', href: '/news' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors group"
                  >
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Chennai Office */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-lg border-b border-primary-foreground/20 pb-3">Chennai Office</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  H09, Central Avenue, Korattur,<br />
                  Chennai – 600 080, Tamil Nadu
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <a href="tel:+914426872203" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  +91 44 26872203 / 25342046
                </a>
              </div>
            </div>
          </div>

          {/* Mumbai Office */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-lg border-b border-primary-foreground/20 pb-3">Mumbai Office</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  No. 424, Shiv Centre, Plot No. 72,<br />
                  D.B.C, Sector – 17, Vashi,<br />
                  Navi Mumbai – 400 705
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <a href="tel:+912227664866" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  +91 22 2766 4866 / 77
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <a href="mailto:sales@sarvancarbochem.com" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  sales@sarvancarbochem.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Sarvan Carbochem LLP. All Rights Reserved.</p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
              Serving India's Rubber & Plastic Industry with Excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
