import { useState } from 'react';
import { ArrowRight, Globe, Award, Handshake, Building2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PrincipalDetailModal } from '@/components/PrincipalDetailModal';
import { principals, Principal } from '@/data/principals';
import principalsHero from '@/assets/principals-hero.jpg';

export default function Principals() {
  const [selectedPrincipal, setSelectedPrincipal] = useState<Principal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrincipalClick = (principal: Principal) => {
    setSelectedPrincipal(principal);
    setIsModalOpen(true);
  };

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
          <div className="section-label mx-auto mb-6 bg-white/10 border-white/20 text-white">
            <span>Global Partners</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 animate-fade-up">
            Our Principals
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            We proudly represent world-class manufacturers, bringing you the finest quality products from global leaders in the rubber and plastics industry.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card -mt-16 relative z-10 mx-4 lg:mx-auto lg:max-w-5xl rounded-3xl shadow-xl border border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Handshake, value: '8', label: 'Global Partners' },
              { icon: Globe, value: '6+', label: 'Countries' },
              { icon: Award, value: '100+', label: 'Years Combined' },
              { icon: Building2, value: '50+', label: 'Product Lines' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principals Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="section-label mx-auto">
              <span>Trusted Partners</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              World-Class Manufacturers
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Click on any principal to view their complete product range and detailed information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principals.map((principal, index) => (
              <button
                key={principal.id}
                onClick={() => handlePrincipalClick(principal)}
                className="group text-left premium-card overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Header */}
                <div className="bg-gradient-primary p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{principal.flag}</span>
                        <span className="text-sm text-white/70">{principal.country}</span>
                      </div>
                      <h3 className="text-xl font-display font-bold text-white">
                        {principal.name}
                      </h3>
                    </div>
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                      <ChevronRight className="h-5 w-5 text-white group-hover:text-secondary-foreground transition-colors" />
                    </div>
                  </div>
                </div>
                
                {/* Body */}
                <div className="p-6 space-y-4">
                  <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-3 py-1.5 border border-secondary/20">
                    <span className="text-xs font-semibold text-secondary">{principal.specialty}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {principal.shortDescription}
                  </p>
                  
                  <div className="pt-2">
                    <span className="text-sm font-semibold text-primary group-hover:text-secondary transition-colors flex items-center gap-1">
                      View Details
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="section-label">
                <span>Why Choose Us</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                Your Gateway to Global Excellence
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With our extensive network of international principals, we bring world-class products directly to the Indian market, ensuring quality, reliability, and technical support.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Direct access to premium global manufacturers',
                  'Technical expertise and application support',
                  'Local warehousing for faster delivery',
                  'Competitive pricing and flexible terms',
                  'After-sales service and support',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-secondary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <Button variant="default" size="lg" className="group">
                  Inquire About Products
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={principalsHero}
                  alt="Partnership"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-display font-bold">8</div>
                <div className="text-sm font-medium">Global Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
              Need Products from Our Principals?
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Contact our team to learn more about products from any of our global partners and how they can benefit your business.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Contact Us Today
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Principal Detail Modal */}
      <PrincipalDetailModal
        principal={selectedPrincipal}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}