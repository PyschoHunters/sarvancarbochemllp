import { ArrowRight, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import newsHero from '@/assets/news-hero.jpg';

const newsItems = [
  {
    id: 1,
    title: 'SARVAN CARBOCHEM LLP is now the Agent of Performance Additives Malaysia.',
    pdfLink: 'https://www.sarvancarbochem.com/pdf/Performance%20Additives%20Sdn%20Bhd_Sarvan%20Carbochem%20LLP.pdf',
  },
  {
    id: 2,
    title: 'SARVAN CARBOCHEM LLP is now the Exclusive Sales Agent of Cancarb Ltd, Canada.',
    pdfLink: 'https://www.sarvancarbochem.com/pdf/Sarvan%20New%20Sales%20Agent%20for%20India_2_12_15.pdf',
  },
  {
    id: 3,
    title: 'SARVAN CARBOCHEM LLP is now the Exclusive Sales Agent of Munch Chemie International, Germany.',
    pdfLink: null,
  },
];

export default function News() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40">
        <div className="absolute inset-0">
          <img
            src={newsHero}
            alt="News & Updates"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="section-label mx-auto mb-6 bg-white/10 border-white/20 text-white">
            <span>Stay Informed</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 animate-fade-up">
            Latest News
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Stay updated with the latest announcements and partnerships from Sarvan Carbochem LLP.
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="section-label mx-auto mb-6">
                <span>Announcements</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Company Announcements
              </h2>
            </div>

            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group premium-card p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <FileText className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <p className="text-lg font-medium text-foreground leading-relaxed">
                        <span className="font-bold text-primary">SARVAN CARBOCHEM LLP</span>
                        {' '}{item.title.replace('SARVAN CARBOCHEM LLP', '')}
                      </p>
                      
                      {item.pdfLink && (
                        <a
                          href={item.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-secondary/80 transition-colors group/link"
                        >
                          <span>Read More</span>
                          <ExternalLink className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
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
              Have Questions?
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Get in touch with our team for more information about our products and services.
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