import { 
  FileText, 
  Calculator, 
  Smartphone, 
  Zap, 
  Palette, 
  PartyPopper, 
  FileCheck,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  MapPin,
  Clock,
  Shield,
  Users,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/ServiceCard';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  const { t } = useTranslation();

  const services = [
    { icon: FileText, title: t('services.irembo'), description: t('services.irembo_desc'), href: '/services/irembo', iconColor: 'text-primary' },
    { icon: Calculator, title: t('services.tax'), description: t('services.tax_desc'), href: '/services/tax', iconColor: 'text-secondary' },
    { icon: Smartphone, title: t('services.mobile'), description: t('services.mobile_desc'), href: '/services/mobile', iconColor: 'text-warm' },
    { icon: Zap, title: t('services.utilities'), description: t('services.utilities_desc'), href: '/services/utilities', iconColor: 'text-accent' },
    { icon: Palette, title: t('services.design'), description: t('services.design_desc'), href: '/services/design', iconColor: 'text-primary' },
    { icon: PartyPopper, title: t('services.events'), description: t('services.events_desc'), href: '/services/events', iconColor: 'text-secondary' },
    { icon: FileCheck, title: t('services.docs'), description: t('services.docs_desc'), href: '/services/docs', iconColor: 'text-primary' },
  ];

  const whyChooseUs = [
    { icon: MapPin, title: t('why.convenience'), description: t('why.convenience_desc') },
    { icon: Users, title: t('why.expertise'), description: t('why.expertise_desc') },
    { icon: Shield, title: t('why.reliability'), description: t('why.reliability_desc') },
    { icon: Clock, title: t('why.speed'), description: t('why.speed_desc') },
    { icon: Sparkles, title: t('why.affordable'), description: t('why.affordable_desc') },
  ];

  const partners = ['MTN Mobile Money', 'Mobicash', 'Spenn', 'Irembo', 'RRA', 'RURA', 'BK Yacu', 'RWFA'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Hello Multi-Services Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm">
              <CheckCircle className="w-4 h-4" />
              {t('hero.authorized')}
            </div>

            {/* Main Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-background mb-4 leading-tight">
              {t('hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="text-2xl sm:text-3xl font-display text-primary font-semibold mb-4">
              {t('hero.subtitle')}
            </p>

            {/* Description */}
            <p className="text-lg text-background/80 mb-8 leading-relaxed max-w-xl">
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/250788664840?text=Hello%20HELLO%20MULTI-SERVICES"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white shadow-lg">
                  <MessageCircle className="w-5 h-5" />
                  {t('hero.cta_whatsapp')}
                </Button>
              </a>
              <Link to="/services">
                <Button size="lg" variant="outline" className="gap-2 bg-background/10 border-background/30 text-background hover:bg-background/20">
                  {t('hero.cta_services')}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+250788664840">
                <Button size="lg" variant="outline" className="gap-2 bg-background/10 border-background/30 text-background hover:bg-background/20">
                  <Phone className="w-5 h-5" />
                  {t('hero.cta_call')}
                </Button>
              </a>
            </div>

            {/* Partner Logos Preview */}
            <div className="mt-12 pt-8 border-t border-background/20">
              <p className="text-background/60 text-sm mb-3">{t('partners.subtitle')}</p>
              <div className="flex flex-wrap gap-4">
                {['MTN', 'Irembo', 'RRA', 'Mobicash', 'Spenn'].map((partner) => (
                  <span
                    key={partner}
                    className="px-3 py-1.5 bg-background/10 backdrop-blur-sm rounded-lg text-background/90 text-sm font-medium"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t('services.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
            {services.map((service) => (
              <ServiceCard
                key={service.href}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
                iconColor={service.iconColor}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button size="lg" variant="outline" className="gap-2">
                {t('services.view_all')}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t('why.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('why.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              {t('partners.title')}
            </h2>
            <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
              {t('partners.subtitle')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner) => (
              <div
                key={partner}
                className="px-6 py-4 bg-secondary-foreground/10 backdrop-blur-sm rounded-xl text-secondary-foreground font-medium hover:bg-secondary-foreground/20 transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10">
              <MapPin className="w-12 h-12 text-primary-foreground/80 mx-auto mb-4" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
                Gatsibo-Kiramuruzi, Rwanda
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                Kanamugire, Songa, Erneste
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+250788664840">
                  <Button size="lg" variant="secondary" className="gap-2 bg-white text-primary hover:bg-white/90">
                    <Phone className="w-5 h-5" />
                    +250 788 664 840
                  </Button>
                </a>
                <a
                  href="https://wa.me/250788664840"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="gap-2 border-white/30 text-primary-foreground hover:bg-white/10">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="gap-2 border-white/30 text-primary-foreground hover:bg-white/10">
                    {t('common.contact_us')}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20 text-primary-foreground/70 text-sm">
                <p>{t('contact.hours_week')}</p>
                <p>{t('contact.hours_sat')}</p>
                <p>{t('contact.hours_sun')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
