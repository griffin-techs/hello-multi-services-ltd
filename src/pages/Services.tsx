import { 
  FileText, 
  Calculator, 
  Smartphone, 
  Zap, 
  Palette, 
  PartyPopper, 
  FileCheck,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from '@/lib/i18n';
import { Button } from '@/components/ui/button';

const Services = () => {
  const { t, language } = useTranslation();
  const { serviceId } = useParams();

  const services = [
    {
      id: 'irembo',
      icon: FileText,
      title: t('services.irembo'),
      description: t('services.irembo_desc'),
      color: 'primary',
      features: language === 'kin' ? [
        'Gufungura konti ya Irembo',
        'Gusaba icyangombwa cy\'umwirondoro',
        'Uruhushya rw\'ubucuruzi',
        'Serivisi z\'abapolisi',
        'Serivisi z\'inkiko',
        'Kwandikisha umwana',
      ] : [
        'Irembo account registration',
        'National ID applications',
        'Business permits',
        'Police clearance',
        'Court services',
        'Birth registration',
      ],
    },
    {
      id: 'tax',
      icon: Calculator,
      title: t('services.tax'),
      description: t('services.tax_desc'),
      color: 'secondary',
      features: language === 'kin' ? [
        'Gufungura TIN',
        'Kwishyura imisoro',
        'Raporo ya CRB',
        'Kwandikisha ubucuruzi',
        'Guhindura amakuru ya TIN',
        'Tax declarations',
      ] : [
        'TIN registration',
        'Tax payments',
        'CRB reports',
        'Business registration',
        'TIN updates',
        'Tax declarations',
      ],
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: t('services.mobile'),
      description: t('services.mobile_desc'),
      color: 'warm',
      features: language === 'kin' ? [
        'MTN Mobile Money',
        'Mobicash deposits/withdrawals',
        'Spenn services',
        'BK Yacu agent banking',
        'Money transfers',
        'Balance inquiries',
      ] : [
        'MTN Mobile Money',
        'Mobicash deposits/withdrawals',
        'Spenn services',
        'BK Yacu agent banking',
        'Money transfers',
        'Balance inquiries',
      ],
    },
    {
      id: 'utilities',
      icon: Zap,
      title: t('services.utilities'),
      description: t('services.utilities_desc'),
      color: 'accent',
      features: language === 'kin' ? [
        'Kugura token y\'umuriro',
        'Kwishyura amazi',
        'Canal+ subscriptions',
        'StarTimes payments',
        'DStv/GOtv',
        'Internet bundles',
      ] : [
        'Electricity tokens',
        'Water bill payments',
        'Canal+ subscriptions',
        'StarTimes payments',
        'DStv/GOtv',
        'Internet bundles',
      ],
    },
    {
      id: 'design',
      icon: Palette,
      title: t('services.design'),
      description: t('services.design_desc'),
      color: 'primary',
      features: language === 'kin' ? [
        'Ibirango by\'ubukwe',
        'Gucapa inyandiko',
        'T-shirts branding',
        'Business cards',
        'Posters na banners',
        'Amasitanpe',
      ] : [
        'Wedding invitations',
        'Document printing',
        'T-shirt branding',
        'Business cards',
        'Posters and banners',
        'Custom stamps',
      ],
    },
    {
      id: 'events',
      icon: PartyPopper,
      title: t('services.events'),
      description: t('services.events_desc'),
      color: 'secondary',
      features: language === 'kin' ? [
        'Ubukwe materials',
        'Amazubiraho',
        'Birthday invitations',
        'Certificates',
        'Calendars',
        'Thank you cards',
      ] : [
        'Wedding materials',
        'Anniversary celebrations',
        'Birthday invitations',
        'Certificates',
        'Calendars',
        'Thank you cards',
      ],
    },
    {
      id: 'docs',
      icon: FileCheck,
      title: t('services.docs'),
      description: t('services.docs_desc'),
      color: 'primary',
      features: language === 'kin' ? [
        'Business proposals',
        'CVs na cover letters',
        'Tender documents',
        'Gukopera inyandiko',
        'Scanning',
        'Binding & lamination',
      ] : [
        'Business proposals',
        'CVs and cover letters',
        'Tender documents',
        'Photocopying',
        'Scanning',
        'Binding & lamination',
      ],
    },
  ];

  // If a specific service is selected, show detail view
  const selectedService = serviceId ? services.find(s => s.id === serviceId) : null;

  if (selectedService) {
    return (
      <div className="min-h-screen pt-20">
        {/* Service Detail Hero */}
        <section className="bg-hero-gradient text-white py-16 md:py-24">
          <div className="container-custom">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
            >
              ← {t('common.back')}
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                <selectedService.icon className="w-8 h-8" />
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold">
                {selectedService.title}
              </h1>
            </div>
            <p className="text-xl text-white/80 max-w-2xl">
              {selectedService.description}
            </p>
          </div>
        </section>

        {/* Service Features */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  {language === 'kin' ? 'Ibyo Dutanga' : 'What We Offer'}
                </h2>
                <ul className="space-y-4">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {language === 'kin' ? 'Ukeneye Ubufasha?' : 'Need Assistance?'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {language === 'kin' 
                    ? 'Twandikire kuri WhatsApp cyangwa tuhamagare kugira ngo tugufashe.'
                    : 'Contact us via WhatsApp or call us for assistance with this service.'}
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/250788664840"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-whatsapp hover:bg-whatsapp/90">
                      WhatsApp: +250 788 664 840
                    </Button>
                  </a>
                  <a href="tel:+250788664840" className="block">
                    <Button variant="outline" className="w-full">
                      {language === 'kin' ? 'Tuhamagare' : 'Call Us'}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              {t('services.title')}
            </h1>
            <p className="text-xl text-white/80">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group block"
              >
                <div className="bg-card rounded-2xl p-8 border border-border h-full hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    {t('common.view_details')}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            {language === 'kin' ? 'Ukeneye serivisi twebwe?' : 'Need any of our services?'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {language === 'kin' 
              ? 'Twandikire kuri WhatsApp cyangwa uze ku biro byacu i Gatsibo-Kiramuruzi.'
              : 'Contact us via WhatsApp or visit our office in Gatsibo-Kiramuruzi.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/250788664840"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90">
                WhatsApp
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                {t('common.contact_us')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
