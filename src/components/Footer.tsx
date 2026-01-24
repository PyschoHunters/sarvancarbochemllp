import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">SC</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">Sarvan Carbochem</h3>
                <p className="text-sm text-primary-foreground/70">LLP</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Technical marketing of Synthetic Rubbers and Rubber & Plastic Additives serving the Indian Rubber and Plastic Industries since 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Products', href: '/products' },
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
            <h4 className="font-display font-bold text-lg">Chennai Office</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <p className="text-primary-foreground/80">
                  H09, Central Avenue, Korattur,<br />
                  Chennai – 600 080, Tamil Nadu
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <a href="tel:+914426872203" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  +91 44 26872203 / 25342046
                </a>
              </div>
            </div>
          </div>

          {/* Mumbai Office */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-lg">Mumbai Office</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <p className="text-primary-foreground/80">
                  No. 424, Shiv Centre, Plot No. 72,<br />
                  D.B.C, Sector – 17, Vashi,<br />
                  Navi Mumbai – 400 705
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <a href="tel:+912227664866" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  +91 22 2766 4866 / 77
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <a href="mailto:sales@sarvancarbochem.com" className="text-primary-foreground/80 hover:text-secondary transition-colors">
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
            <p>Serving India's Rubber & Plastic Industry with Excellence</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
