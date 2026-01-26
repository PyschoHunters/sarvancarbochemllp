import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Globe, Award, Package, ChevronRight, X } from 'lucide-react';
import { Principal } from '@/data/principals';
import { Link } from 'react-router-dom';

interface PrincipalDetailModalProps {
  principal: Principal | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PrincipalDetailModal({ principal, isOpen, onClose }: PrincipalDetailModalProps) {
  if (!principal) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 gap-0 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-primary p-8 text-white">
          <DialogHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{principal.flag}</span>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                    {principal.country}
                  </Badge>
                </div>
                <DialogTitle className="text-3xl md:text-4xl font-display font-bold text-white">
                  {principal.name}
                </DialogTitle>
                <p className="text-lg text-white/80 font-medium">
                  {principal.specialty}
                </p>
              </div>
            </div>
          </DialogHeader>
        </div>

        <ScrollArea className="max-h-[calc(90vh-200px)]">
          <div className="p-8 space-y-8">
            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-display font-semibold text-foreground flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                About {principal.name}
              </h3>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {principal.fullDescription}
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-display font-semibold text-foreground flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary" />
                Key Highlights
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {principal.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                    <span className="text-sm text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h3 className="text-xl font-display font-semibold text-foreground flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Products & Solutions
              </h3>
              <div className="grid gap-4">
                {principal.products.map((product, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl border border-border/50 bg-card hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-semibold text-foreground mb-2">{product.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                    {product.items && (
                      <div className="flex flex-wrap gap-2">
                        {product.items.map((item, itemIndex) => (
                          <Badge key={itemIndex} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-border">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="text-muted-foreground text-sm">
                  Interested in products from {principal.name}?
                </p>
                <Link to="/contact" onClick={onClose}>
                  <Button variant="secondary" className="group">
                    Inquire Now
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}