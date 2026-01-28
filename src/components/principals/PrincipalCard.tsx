import { Globe, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export interface PrincipalProduct {
  name: string;
  description: string;
}

export interface Principal {
  name: string;
  country: string;
  flag: string;
  specialty: string;
  description: string;
  highlights: string[];
  products?: PrincipalProduct[];
  applications?: string[];
  established?: string;
}

interface PrincipalCardProps {
  principal: Principal;
  index: number;
}

export function PrincipalCard({ principal, index }: PrincipalCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Header */}
      <div className="bg-gradient-primary p-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{principal.flag}</span>
              <h3 className="text-2xl font-display font-bold text-primary-foreground">
                {principal.name}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Globe className="h-4 w-4" />
              <span className="text-sm">{principal.country}</span>
              {principal.established && (
                <>
                  <span className="mx-2">•</span>
                  <span className="text-sm">Est. {principal.established}</span>
                </>
              )}
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

        {/* Expandable Products Section */}
        {(principal.products || principal.applications) && (
          <div className="pt-4 border-t border-border/50">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors w-full justify-between"
            >
              <span>View Product Details</span>
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>

            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                isExpanded ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
              )}
            >
              {principal.products && principal.products.length > 0 && (
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-foreground">Products:</p>
                  <div className="grid gap-3">
                    {principal.products.map((product) => (
                      <div
                        key={product.name}
                        className="bg-muted/50 rounded-lg p-3"
                      >
                        <p className="text-sm font-medium text-foreground">{product.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{product.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {principal.applications && principal.applications.length > 0 && (
                <div className="space-y-3 mt-4">
                  <p className="text-sm font-semibold text-foreground">Applications:</p>
                  <div className="flex flex-wrap gap-2">
                    {principal.applications.map((app) => (
                      <span
                        key={app}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
