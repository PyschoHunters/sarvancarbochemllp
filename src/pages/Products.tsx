import { ArrowRight, Factory, Beaker, Layers, Sparkles, Droplet, Box, FlaskConical, Palette, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import productsImage from '@/assets/products-bg.jpg';
import heroImage from '@/assets/hero-industrial.jpg';

const productCategories = [
  {
    icon: Layers,
    name: 'Polymers',
    description: 'High-quality synthetic polymers including various grades of synthetic rubber and specialty polymers for diverse industrial applications.',
    features: ['Synthetic Rubber', 'Specialty Polymers', 'Custom Grades'],
  },
  {
    icon: Box,
    name: 'Fillers',
    description: 'Premium reinforcing and non-reinforcing fillers to enhance the properties of rubber and plastic compounds.',
    features: ['Reinforcing Fillers', 'Non-reinforcing Fillers', 'Specialty Fillers'],
  },
  {
    icon: Cog,
    name: 'Processing Additives',
    description: 'Advanced additives designed to improve processing efficiency and enhance the properties of final products.',
    features: ['Processing Aids', 'Homogenizing Agents', 'Dispersion Aids'],
  },
  {
    icon: Droplet,
    name: 'Release Agents',
    description: 'High-performance mold release agents for efficient manufacturing and clean part release.',
    features: ['Internal Release Agents', 'External Release Agents', 'Semi-permanent Agents'],
  },
  {
    icon: Beaker,
    name: 'Coupling Agents',
    description: 'Silane coupling agents for enhanced bonding between organic and inorganic materials.',
    features: ['Silane Coupling Agents', 'Surface Modifiers', 'Adhesion Promoters'],
  },
  {
    icon: Factory,
    name: 'Products for Plastics',
    description: 'Specialized additives and modifiers specifically designed for plastic applications.',
    features: ['Impact Modifiers', 'Stabilizers', 'Processing Aids'],
  },
  {
    icon: FlaskConical,
    name: 'Specialty Chemicals',
    description: 'Custom chemical solutions tailored to meet unique industrial requirements and specifications.',
    features: ['Custom Formulations', 'Technical Support', 'Application Expertise'],
  },
  {
    icon: Palette,
    name: 'Specialty Masterbatches',
    description: 'High-quality color and additive masterbatches for consistent and efficient production.',
    features: ['Color Masterbatches', 'Additive Masterbatches', 'Custom Solutions'],
  },
  {
    icon: Sparkles,
    name: 'Finished Parts',
    description: 'Ready-to-use rubber and plastic components manufactured to precise specifications.',
    features: ['Custom Molded Parts', 'Precision Components', 'Quality Assured'],
  },
];

export default function Products() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img
            src={productsImage}
            alt="Products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-up">
            Our Products
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Comprehensive range of high-quality synthetic rubbers and additives for the rubber and plastic industry.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary">
              <span className="text-sm font-semibold">Product Range</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Quality Products for Every Need
            </h2>
            
            <p className="text-lg text-muted-foreground">
              We offer a comprehensive range of products to meet all your rubber and plastic industry requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product, index) => (
              <div
                key={product.name}
                className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <product.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary">
                <span className="text-sm font-semibold">Why Choose Us</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                Your Trusted Source for Quality Products
              </h2>
              
              <ul className="space-y-6">
                {[
                  'Premium quality products from trusted manufacturers',
                  'Technical expertise with 100+ years combined experience',
                  'Strategic warehouses in Chennai and Ahmedabad',
                  'Dedicated customer support and after-sales service',
                  'Competitive pricing and timely delivery',
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
                  Request Quote
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={heroImage}
                  alt="Industrial Facility"
                  className="w-full h-full object-cover"
                />
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
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Our technical team is here to help you find the perfect solution for your application requirements.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Contact Our Experts
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
