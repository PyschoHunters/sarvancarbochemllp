import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import heroImage from '@/assets/hero-industrial.jpg';

const contactInfo = [
  {
    title: 'Chennai Office (Registered)',
    icon: MapPin,
    details: [
      'H09, Central Avenue, Korattur,',
      'Chennai – 600 080, Tamil Nadu',
    ],
    phone: '+91 44 26872203 / 25342046',
  },
  {
    title: 'Mumbai Office',
    icon: MapPin,
    details: [
      'No. 424, Shiv Centre, Plot No. 72,',
      'D.B.C, Sector – 17, Vashi,',
      'Navi Mumbai – 400 705',
    ],
    phone: '+91 22 2766 4866 / 77',
  },
];

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    honeypot: '', // Honeypot field for spam protection
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 255;
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone) return true; // Optional field
    const phoneRegex = /^[\d\s\+\-\(\)\.]{0,20}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 5000) {
      newErrors.message = 'Message must be less than 5000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please check the form for errors.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('contact-form', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || undefined,
          company: formData.company.trim() || undefined,
          message: formData.message.trim(),
          honeypot: formData.honeypot, // Include honeypot
        },
      });

      if (error) {
        throw new Error(error.message || 'Failed to send message');
      }

      if (data?.success) {
        toast({
          title: "Message Sent! ✓",
          description: "Thank you for contacting us. We'll get back to you within 24-48 hours.",
        });
        setFormData({ name: '', email: '', phone: '', company: '', message: '', honeypot: '' });
        setErrors({});
      } else {
        throw new Error(data?.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong';
      
      if (errorMessage.includes('Too many')) {
        toast({
          title: "Rate Limit Exceeded",
          description: "You've submitted too many messages. Please try again in 15 minutes.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error Sending Message",
          description: errorMessage,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-up">
            Contact Us
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Get in touch with our team for inquiries, quotes, or any questions about our products and services.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/50">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary mb-4">
                  <span className="text-sm font-semibold">Send a Message</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  We'd Love to Hear From You
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users, visible to bots */}
                <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
                  <Input
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`h-12 ${errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      maxLength={100}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={`h-12 ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      maxLength={255}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`h-12 ${errors.phone ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      maxLength={20}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="h-12"
                      maxLength={200}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    className={`resize-none ${errors.message ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    maxLength={5000}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message ? (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    ) : (
                      <span />
                    )}
                    <span className="text-xs text-muted-foreground">
                      {formData.message.length}/5000
                    </span>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy. We'll respond within 24-48 business hours.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary mb-4">
                  <span className="text-sm font-semibold">Our Offices</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Visit Us or Give Us a Call
                </h2>
              </div>

              {contactInfo.map((office) => (
                <div
                  key={office.title}
                  className="bg-card rounded-xl p-6 shadow-sm border border-border/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <office.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                        {office.title}
                      </h3>
                      <div className="text-muted-foreground space-y-1 mb-3">
                        {office.details.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                      <a
                        href={`tel:${office.phone.split(' ')[0].replace(/\D/g, '')}`}
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        <Phone className="h-4 w-4" />
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Email & Hours */}
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      Email Us
                    </h3>
                    <a
                      href="mailto:sales@sarvancarbochem.com"
                      className="text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      sales@sarvancarbochem.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      Business Hours
                    </h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Find Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl overflow-hidden shadow-sm">
              <div className="p-4 bg-primary text-primary-foreground">
                <h3 className="font-display font-semibold">Chennai Office</h3>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.8037851044147!2d80.19797247590085!3d13.115227487190037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264d8b7cf2c55%3A0x96e7c0e6e7fc1b8c!2sKorattur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chennai Office Location"
              />
            </div>
            <div className="bg-card rounded-xl overflow-hidden shadow-sm">
              <div className="p-4 bg-primary text-primary-foreground">
                <h3 className="font-display font-semibold">Mumbai Office</h3>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5857146974847!2d72.99829447601538!3d19.065285782131797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c624e4ff6e2b%3A0xb7a8f0f6e4c8f8f8!2sVashi%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mumbai Office Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
