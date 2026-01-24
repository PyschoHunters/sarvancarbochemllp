import { ArrowRight, Award, Users, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import aboutImage from '@/assets/about-bg.jpg';
import heroImage from '@/assets/hero-industrial.jpg';

const values = [
  {
    icon: Award,
    title: 'Professionalism',
    description: 'Professionalism will always be the utmost important aspect within our organization.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive to be a well-known and trusted player in the Indian Rubber and Plastic Industry.',
  },
  {
    icon: Users,
    title: 'Experience',
    description: 'Our senior team members bring more than 100 years of combined experience.',
  },
  {
    icon: Heart,
    title: 'Trust',
    description: 'Building long-standing associations and trusted partnerships with our clients.',
  },
];

const timeline = [
  {
    year: '2014',
    title: 'Company Founded',
    description: 'Sarvan Carbochem LLP was established by Mr. A Jai Venkkatesh and Mr. Karthi Sankar.',
  },
  {
    year: '2014',
    title: 'Offices Established',
    description: 'Offices set up in Mumbai and Chennai to serve the Indian market.',
  },
  {
    year: '2014',
    title: 'Warehouses Operational',
    description: 'Warehouses established in Chennai and Ahmedabad for efficient distribution.',
  },
  {
    year: 'Present',
    title: 'Growing Strong',
    description: 'Continuing to serve the Indian Rubber and Plastic Industries with excellence.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="About Sarvan Carbochem"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-up">
            About Us
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Learn about our journey, values, and commitment to serving the Indian Rubber and Plastic Industries.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-slide-in-left">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={aboutImage}
                  alt="Our Facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8 animate-slide-in-right">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary">
                <span className="text-sm font-semibold">Our Story</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                From Vision to Reality
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  When two entrepreneurs discussed their plans with their mentor, with whom they have a long standing association, of venturing into the technical marketing of Synthetic Rubbers and Rubber and Plastic Additives to serve the Indian Rubber and Plastic Industries, a new company was formed in the name of <strong className="text-foreground">SARVAN CARBOCHEM LLP</strong>.
                </p>
                
                <p>
                  These entrepreneurs, <strong className="text-foreground">Mr. A Jai Venkkatesh</strong> and <strong className="text-foreground">Mr. Karthi Sankar</strong>, are the Managing Partners of the company.
                </p>
                
                <p>
                  The offices were set up in <strong className="text-foreground">Mumbai</strong> and <strong className="text-foreground">Chennai</strong>, and warehouses in <strong className="text-foreground">Chennai</strong> and <strong className="text-foreground">Ahmedabad</strong> in December 2014.
                </p>
                
                <p>
                  With the able support of competent senior team members having more than 100 years of combined experience among themselves, the company has gained ground and is now a well-known and trusted player in the Indian Rubber and Plastic Industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary">
              <span className="text-sm font-semibold">Our Values</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary">
              <span className="text-sm font-semibold">Our Journey</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Milestones
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-display font-bold text-sm shrink-0">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-4" />
                  )}
                </div>
                <div className="pb-12">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
              Partner With Us
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Join hands with a trusted name in the industry. Let us help you source the best quality products for your business.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Get in Touch
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
