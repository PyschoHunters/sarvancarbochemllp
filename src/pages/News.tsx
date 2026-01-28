import { ArrowRight, Calendar, TrendingUp, Award, ExternalLink, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import newsHero from '@/assets/news-hero.jpg';

const newsArticles = [
  {
    id: 1,
    category: 'Partnership Announcement',
    title: 'SARVAN CARBOCHEM LLP is now the Agent of Performance Additives Malaysia',
    excerpt: 'We are proud to announce our official partnership as the Agent for Performance Additives Sdn Bhd, Malaysia, expanding our portfolio of premium rubber processing additives in India.',
    date: '2015',
    featured: true,
    pdfLink: 'https://www.sarvancarbochem.com/pdf/Performance%20Additives%20Sdn%20Bhd_Sarvan%20Carbochem%20LLP.pdf',
  },
  {
    id: 2,
    category: 'Partnership Announcement',
    title: 'SARVAN CARBOCHEM LLP is now the Exclusive Sales Agent of Cancarb Ltd, Canada',
    excerpt: 'We have been appointed as the Exclusive Sales Agent for Cancarb Ltd, Canada - the world\'s leading manufacturer of Thermal Carbon Black, strengthening our position in the Indian market.',
    date: 'December 2015',
    featured: true,
    pdfLink: 'https://www.sarvancarbochem.com/pdf/Sarvan%20New%20Sales%20Agent%20for%20India_2_12_15.pdf',
  },
  {
    id: 3,
    category: 'Partnership Announcement',
    title: 'SARVAN CARBOCHEM LLP is now the Exclusive Sales Agent of Munch Chemie International, Germany',
    excerpt: 'We are honored to represent Munch Chemie International GmbH, Germany as their Exclusive Sales Agent in India, bringing world-class rubber chemicals and additives to the Indian market.',
    date: '2016',
    featured: true,
  },
];

const milestones = [
  { year: '2024', event: 'Expanded product portfolio with new global principals' },
  { year: '2020', event: 'Strengthened partnerships across multiple regions' },
  { year: '2017', event: 'Opened Ahmedabad warehouse for Western India' },
  { year: '2016', event: 'Appointed Exclusive Agent for Munch Chemie International, Germany' },
  { year: '2015', event: 'Appointed Exclusive Agent for Cancarb Ltd, Canada & Performance Additives Malaysia' },
  { year: '2014', event: 'Company founded with offices in Chennai and Mumbai' },
  { year: '1941', event: 'Family legacy in chemicals industry begins' },
];

export default function News() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img
            src={newsHero}
            alt="News & Updates"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-up">
            News & Updates
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Stay informed about the latest developments, industry news, and company milestones from Sarvan Carbochem LLP.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 text-secondary">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-semibold">Featured</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Latest Highlights
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <div
                key={article.id}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50"
              >
                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm font-semibold shadow-lg">
                    <Award className="h-4 w-4" />
                    {article.category}
                  </span>
                </div>

                {/* Background Gradient */}
                <div className="h-48 bg-gradient-primary relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 -mt-12 relative">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {article.excerpt}
                  </p>

                  {article.pdfLink && (
                    <a 
                      href={article.pdfLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors group/btn"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Official Letter (PDF)
                      <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
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
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Company Milestones
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-8 mb-8 last:mb-0">
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-display font-bold text-sm shadow-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 bg-card rounded-xl p-6 shadow-sm border border-border/50">
                    <p className="text-foreground font-medium">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
              Stay Connected
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Have questions about our products or services? Get in touch with our team for the latest updates and personalized assistance.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Contact Us
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
