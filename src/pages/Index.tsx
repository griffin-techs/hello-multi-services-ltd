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
  Sparkles,
  Quote,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/ServiceCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import heroImage from '@/assets/hero-image.jpg';

// Partner logos
import mtnLogo from '@/assets/partners/mtn-momo.png';
import iremboLogo from '@/assets/partners/irembo.png';
import rraLogo from '@/assets/partners/rra.png';
import ruraLogo from '@/assets/partners/rura.png';
import mobicashLogo from '@/assets/partners/mobicash.png';
import spennLogo from '@/assets/partners/spenn.png';
import bkLogo from '@/assets/partners/bk.png';
import rwfaLogo from '@/assets/partners/rwfa.png';

const Index = () => {
  const { t, language } = useTranslation();

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

  const partners = [
    { name: 'MTN Mobile Money', logo: mtnLogo },
    { name: 'Irembo', logo: iremboLogo },
    { name: 'RRA', logo: rraLogo },
    { name: 'RURA', logo: ruraLogo },
    { name: 'Mobicash', logo: mobicashLogo },
    { name: 'Spenn', logo: spennLogo },
    { name: 'BK Yacu', logo: bkLogo },
    { name: 'RWFA', logo: rwfaLogo },
  ];

  const testimonials = [
    {
      name: 'Jean Pierre Habimana',
      role: language === 'kin' ? 'Nyir\'ubucuruzi' : 'Business Owner',
      service: 'Irembo',
      quote: language === 'kin'
        ? 'Nabonye icyangombwa cyanjye cy\'ubucuruzi mu minsi 2 gusa. Abakozi babo bazi neza serivisi za Irembo. Ndabashimira cyane!'
        : 'I got my business permit in just 2 days. Their staff really knows Irembo services well. Thank you so much!',
      rating: 5,
    },
    {
      name: 'Marie Claire Uwimana',
      role: language === 'kin' ? 'Umubyeyi w\'umukwe' : 'Wedding Planner',
      service: language === 'kin' ? 'Gucapa' : 'Printing',
      quote: language === 'kin'
        ? 'Ibirango by\'ubukwe bw\'umwana wanjye byari byiza cyane! Design yari nziza kandi ibiciro byari bihendutse. Ndabashimiye.'
        : 'The wedding invitations for my child were beautiful! The design was elegant and prices were affordable. Highly recommend.',
      rating: 5,
    },
    {
      name: 'Emmanuel Ndayisaba',
      role: language === 'kin' ? 'Umucuruzi' : 'Trader',
      service: 'Mobile Money',
      quote: language === 'kin'
        ? 'Nkohereza amafaranga buri munsi kuri HELLO. Bihuse, birinzwe, kandi ntibibaho ikibazo. Ni agent mwiza cyane.'
        : 'I send money through HELLO every day. Fast, secure, and never had any issues. They are the best agent around.',
      rating: 5,
    },
    {
      name: 'Vestine Mukamana',
      role: language === 'kin' ? 'Umuhinzi' : 'Farmer',
      service: 'Irembo & TIN',
      quote: language === 'kin'
        ? 'Bamfashije kubona TIN n\'uruhushya rwo gucuruza. Basobanura neza kandi bafasha abantu badashobora gukoresha murandasi.'
        : 'They helped me get my TIN and trading permit. They explain everything clearly and help those who can\'t use online systems.',
      rating: 5,
    },
  ];

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

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {language === 'kin' ? 'Ibyo Abakiriya Bacu Bavuga' : 'What Our Clients Say'}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {language === 'kin'
                ? 'Twishimiye gukorera abakiriya benshi bashimishijwe'
                : 'We\'re proud to serve many satisfied customers'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
                
                {/* Service Badge */}
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                  {testimonial.service}
                </span>
                
                {/* Quote */}
                <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </p>
                
                {/* Rating */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-warm fill-warm" />
                  ))}
                </div>
                
                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-secondary text-secondary-foreground overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              {t('partners.title')}
            </h2>
            <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
              {t('partners.subtitle')}
            </p>
          </div>

          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {partners.map((partner) => (
                <CarouselItem key={partner.name} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <div className="px-4 py-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center h-24">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Static display for larger screens */}
          <div className="hidden xl:flex flex-wrap justify-center gap-6 mt-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="px-6 py-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-12 w-auto object-contain"
                />
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
