import { ArrowRight, Globe, Award, Handshake, Building2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PrincipalCard } from '@/components/principals/PrincipalCard';
import { principals } from '@/data/principals';
import principalsHero from '@/assets/principals-hero.jpg';

export default function Principals() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40">
        <div className="absolute inset-0">
          <img
            src={principalsHero}
            alt="Our Principals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 text-secondary mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">World-Class Partners</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-up">
            Our Principals
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: '100ms' }}>
            We proudly represent world-class manufacturers from across the globe, bringing you the finest quality products from leaders in the rubber and plastics industry.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card -mt-16 relative z-10 mx-4 lg:mx-auto lg:max-w-5xl rounded-2xl shadow-xl border border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Handshake, value: '8', label: 'Global Partners' },
              { icon: Globe, value: '6', label: 'Countries' },
              { icon: Award, value: '200+', label: 'Years Combined Legacy' },
              { icon: Building2, value: '50+', label: 'Product Lines' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-14 h-14 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-primary">
                  <stat.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principals Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary">
              <span className="text-sm font-semibold">Trusted Partners</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              World-Class Manufacturers
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Each of our principals is a leader in their respective field, ensuring you receive only the highest quality products backed by decades of technical expertise and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {principals.map((principal, index) => (
              <PrincipalCard key={principal.name} principal={principal} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary">
                <span className="text-sm font-semibold">Why Choose Us</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
                Your Gateway to Global Excellence
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With our extensive network of international principals spanning 6 countries, we bring world-class products directly to the Indian market, ensuring quality, reliability, and comprehensive technical support.
              </p>

              <ul className="space-y-4">
                {[
                  'Direct access to premium global manufacturers',
                  'Technical expertise and application support',
                  'Local warehousing in Chennai & Ahmedabad for faster delivery',
                  'Competitive pricing and flexible terms',
                  'After-sales service and ongoing support',
                  'Over 100 years combined experience in the industry',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-secondary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <Button variant="default" size="lg" className="group shadow-primary">
                  Inquire About Products
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={principalsHero}
                  alt="Partnership"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-accent text-secondary-foreground p-6 rounded-xl shadow-accent">
                <div className="text-4xl font-display font-bold">8</div>
                <div className="text-sm font-medium">Global Partners</div>
              </div>
              <div className="absolute -top-6 -left-6 bg-card text-foreground p-4 rounded-xl shadow-lg border border-border/50">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold">6 Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground">
              Need Products from Our Principals?
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Contact our team to learn more about products from any of our global partners and discover how they can benefit your manufacturing processes.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group shadow-lg">
                Contact Us Today
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
