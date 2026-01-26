import { ArrowRight, Calendar, TrendingUp, Award, ExternalLink, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import newsHero from '@/assets/news-hero.jpg';

const newsArticles = [
  {
    id: 1,
    category: 'Industry Recognition',
    title: 'Sarvan Carbochem Listed Among Key Players in Fluoropolymer Masterbatch Market',
    excerpt: 'According to Verified Market Research analysis, Sarvan Carbochem LLP has been recognized as a key player in the Fluoropolymer Masterbatch Market, projected to reach USD 660 Million by 2030.',
    date: 'October 2025',
    featured: true,
    source: 'Verified Market Research',
  },
  {
    id: 2,
    category: 'Company Milestone',
    title: 'Celebrating 10 Years of Excellence in the Indian Market',
    excerpt: 'Sarvan Carbochem LLP marks its 10th anniversary of serving the Indian Rubber and Plastic Industries with premium quality products and professional service.',
    date: 'December 2024',
    featured: true,
  },
  {
    id: 3,
    category: 'Expansion',
    title: 'Enhanced Warehouse Capacity in Ahmedabad',
    excerpt: 'To better serve our customers in Western India, we have expanded our warehouse facilities in Ahmedabad, ensuring faster delivery and better inventory management.',
    date: 'September 2024',
    featured: false,
  },
  {
    id: 4,
    category: 'Product Launch',
    title: 'New Ultra-Flow™ Range Now Available',
    excerpt: 'We are pleased to announce the availability of the complete Ultra-Flow™ range of fatty acid derivatives from Performance Additives, offering superior physical peptization for natural rubber.',
    date: 'August 2024',
    featured: false,
  },
  {
    id: 5,
    category: 'Partnership',
    title: 'Strengthened Partnership with Cancarb',
    excerpt: 'Sarvan Carbochem reinforces its partnership with Cancarb, the world\'s leading manufacturer of Thermal Carbon Black, to better serve the Indian market.',
    date: 'June 2024',
    featured: false,
  },
  {
    id: 6,
    category: 'Industry Update',
    title: 'Growing Demand for Specialty Rubber Additives',
    excerpt: 'The Indian rubber industry continues to show strong demand for specialty additives, with Sarvan Carbochem positioned to meet these evolving needs with premium products.',
    date: 'April 2024',
    featured: false,
  },
];

const milestones = [
  { year: '2024', event: 'Recognized as key player in Fluoropolymer Masterbatch Market' },
  { year: '2020', event: 'Expanded product portfolio with new principals' },
  { year: '2017', event: 'Opened Ahmedabad warehouse for Western India' },
  { year: '2014', event: 'Company founded with offices in Chennai and Mumbai' },
];

export default function News() {
  const featuredNews = newsArticles.filter(article => article.featured);
  const otherNews = newsArticles.filter(article => !article.featured);

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

          <div className="grid md:grid-cols-2 gap-8">
            {featuredNews.map((article) => (
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
                    {article.source && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{article.source}</span>
                      </>
                    )}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {article.excerpt}
                  </p>

                  <button className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors group/btn">
                    Read More
                    <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary">
              <span className="text-sm font-semibold">Recent Updates</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              More News & Updates
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherNews.map((article) => (
              <div
                key={article.id}
                className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1 text-xs font-semibold text-primary mb-4">
                  {article.category}
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                  <Calendar className="h-3 w-3" />
                  {article.date}
                </div>
                
                <h3 className="text-lg font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {article.excerpt}
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
