import { ArrowRight, ExternalLink, Globe, Award, Handshake, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import principalsHero from '@/assets/principals-hero.jpg';

const principals = [
  {
    name: 'Cancarb',
    country: 'Canada',
    specialty: 'Thermal Carbon Black',
    description: 'Cancarb is the only company dedicated to manufacturing Thermal Carbon Black. In addition to standard grades, the company offers specialty thermal blacks such as Stainless and Ultra Pure. The Cancarb plant in Medicine Hat, Alta., Canada has an annual capacity of 100 million pounds or 45,000 metric tons.',
    highlights: ['Only dedicated thermal carbon black manufacturer', 'Specialty grades available', 'Environmentally responsible with waste heat recovery'],
  },
  {
    name: 'Performance Additives',
    country: 'Malaysia',
    specialty: 'Processing Additives for Rubber & Plastics',
    description: 'Performance Additives Sdn. Bhd. is member of the Behn-Meyer Group for manufacturing specialty chemicals. Their state-of-the-art plant near Kuala Lumpur has capacity to produce 5000 MT per annum of process aids with strong R&D capabilities.',
    highlights: ['Ultra-Flow™ Range', 'Ultra-Lube™ Range', 'Ultra-Blend™ Homogenising agents'],
  },
  {
    name: 'Advanced Fluoro Tubing',
    country: 'USA',
    specialty: 'Fluoropolymer Tubing Solutions',
    description: 'Leading manufacturer of high-performance fluoropolymer tubing for demanding industrial applications including chemical processing, semiconductor, and medical industries.',
    highlights: ['PTFE & FEP tubing', 'Chemical resistant', 'High temperature applications'],
  },
  {
    name: 'Herli Technochem',
    country: 'Germany',
    specialty: 'Specialty Chemicals',
    description: 'German precision in specialty chemicals for the rubber and plastics industry, providing innovative solutions for processing and performance enhancement.',
    highlights: ['German engineering quality', 'Innovative formulations', 'Technical support'],
  },
  {
    name: 'Munch Chemie',
    country: 'Germany',
    specialty: 'Release Agents & Process Aids',
    description: 'Munch Chemie specializes in high-performance release agents and process aids for rubber and plastic molding applications with decades of expertise.',
    highlights: ['Mold release agents', 'Anti-tack solutions', 'Process optimization'],
  },
  {
    name: 'Nantex',
    country: 'Taiwan',
    specialty: 'Synthetic Rubber',
    description: 'Nantex Industry Co., Ltd. is a leading manufacturer of synthetic rubber products including NBR, SBR, and specialty elastomers for various industrial applications.',
    highlights: ['NBR rubber', 'SBR variants', 'Specialty elastomers'],
  },
  {
    name: 'Polychromos',
    country: 'India',
    specialty: 'Color Masterbatches',
    description: 'Premium manufacturer of color and additive masterbatches, providing consistent and high-quality coloring solutions for the plastics industry.',
    highlights: ['Color masterbatches', 'Additive concentrates', 'Custom formulations'],
  },
  {
    name: 'RevoSync',
    country: 'International',
    specialty: 'Specialty Polymers',
    description: 'Global leader in specialty polymer solutions, providing innovative materials for demanding applications across multiple industries.',
    highlights: ['Specialty polymers', 'Custom solutions', 'Technical expertise'],
  },
];

export default function Principals() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img
            src={principalsHero}
            alt="Our Principals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-up">
            Our Principals
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            We proudly represent world-class manufacturers, bringing you the finest quality products from global leaders in the rubber and plastics industry.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card -mt-16 relative z-10 mx-4 lg:mx-auto lg:max-w-5xl rounded-2xl shadow-lg border border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Handshake, value: '8+', label: 'Global Partners' },
              { icon: Globe, value: '6+', label: 'Countries' },
              { icon: Award, value: '100+', label: 'Years Combined Expertise' },
              { icon: Building2, value: '50+', label: 'Product Lines' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-display font-bold text-primary">{stat.value}</div>
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
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary">
              <span className="text-sm font-semibold">Trusted Partners</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              World-Class Manufacturers
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Each of our principals is a leader in their respective field, ensuring you receive only the highest quality products backed by technical expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {principals.map((principal, index) => (
              <div
                key={principal.name}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Header */}
                <div className="bg-gradient-primary p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-primary-foreground mb-1">
                        {principal.name}
                      </h3>
                      <div className="flex items-center gap-2 text-primary-foreground/80">
                        <Globe className="h-4 w-4" />
                        <span className="text-sm">{principal.country}</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Building2 className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                
                {/* Body */}
                <div className="p-6 space-y-4">
                  <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-secondary">{principal.specialty}</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {principal.description}
                  </p>
                  
                  <div className="space-y-2 pt-2">
                    <p className="text-sm font-semibold text-foreground">Key Offerings:</p>
                    <ul className="grid gap-2">
                      {principal.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
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
                    <span className="text-lg text-muted-foreground">{item}</span>
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
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={principalsHero}
                  alt="Partnership"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-display font-bold">8+</div>
                <div className="text-sm">Global Partners</div>
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
    </div>
  );
}
