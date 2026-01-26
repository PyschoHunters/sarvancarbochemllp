import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Warehouse, Factory } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-industrial.jpg';
import aboutImage from '@/assets/about-bg.jpg';
import productsImage from '@/assets/products-bg.jpg';

const products = [
  { name: 'Polymers', description: 'High-quality synthetic polymers for industrial applications' },
  { name: 'Fillers', description: 'Reinforcing and non-reinforcing fillers for rubber & plastics' },
  { name: 'Processing Additives', description: 'Additives to enhance processing efficiency' },
  { name: 'Release Agents', description: 'Premium mold release agents for manufacturing' },
  { name: 'Coupling Agents', description: 'Silane coupling agents for enhanced bonding' },
  { name: 'Products for Plastics', description: 'Specialized additives for plastic applications' },
  { name: 'Specialty Chemicals', description: 'Custom chemical solutions for unique needs' },
  { name: 'Specialty Masterbatches', description: 'Color and additive masterbatches' },
  { name: 'Finished Parts', description: 'Ready-to-use rubber and plastic components' },
];

const stats = [
  { value: '100+', label: 'Years Combined Experience', icon: Award },
  { value: '2', label: 'Office Locations', icon: Factory },
  { value: '2', label: 'Warehouse Facilities', icon: Warehouse },
  { value: '50+', label: 'Happy Clients', icon: Users },
];

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Industrial Manufacturing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 text-secondary">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm font-medium">Trusted Since 2014</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-tight">
              Your Trusted Partner in{' '}
              <span className="text-secondary">Synthetic Rubber</span>{' '}
              & Plastic Additives
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              Sarvan Carbochem LLP specializes in the technical marketing of premium synthetic rubbers and rubber & plastic additives, serving India's leading industries with excellence and professionalism.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/products">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                  Explore Products
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card -mt-20 relative z-10 mx-4 lg:mx-auto lg:max-w-6xl rounded-2xl shadow-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center space-y-3"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary">
                <span className="text-sm font-semibold">About Us</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
                Building a Legacy of{' '}
                <span className="text-primary">Excellence</span> in Chemical Distribution
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When two entrepreneurs discussed their plans with their mentor, of venturing into the technical marketing of Synthetic Rubbers and Rubber and Plastic Additives to serve the Indian Rubber and Plastic Industries, a new company was formed in the name of <strong>SARVAN CARBOCHEM LLP</strong>.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by <strong>Mr. A Jai Venkkatesh</strong> and <strong>Mr. Karthi Sankar</strong>, with offices in Mumbai and Chennai and warehouses in Chennai and Ahmedabad established in December 2014.
              </p>

              <Link to="/about">
                <Button variant="default" size="lg" className="group">
                  Learn More About Us
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={aboutImage}
                  alt="Our Warehouse Facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-display font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary">
              <span className="text-sm font-semibold">Our Products</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Comprehensive Product Range
            </h2>
            
            <p className="text-lg text-muted-foreground">
              We offer a wide range of high-quality products to meet all your rubber and plastic industry needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Factory className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="default" size="lg" className="group">
                View All Products
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img
            src={productsImage}
            alt="Industrial Products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Get in touch with our team to discuss your requirements and discover how we can support your business with our premium products and expert service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Contact Us Today
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
