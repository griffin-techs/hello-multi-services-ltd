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
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ScrollAnimation';

const Pricing = () => {
  const { t, language } = useTranslation();

  const pricingCategories = [
    {
      icon: FileText,
      title: t('services.irembo'),
      description: language === 'kin' 
        ? 'Serivisi za leta zinyuranye'
        : 'Various government services',
      items: [
        { service: language === 'kin' ? 'Gufasha muri Irembo' : 'Irembo assistance', price: language === 'kin' ? 'Uhereye ku 500 RWF' : 'From 500 RWF' },
        { service: language === 'kin' ? 'Gusaba icyangombwa' : 'ID application help', price: language === 'kin' ? 'Uhereye ku 1,000 RWF' : 'From 1,000 RWF' },
        { service: language === 'kin' ? 'Serivisi z\'inkiko' : 'Court services', price: language === 'kin' ? 'Twandikire' : 'Contact us' },
      ],
      note: language === 'kin' 
        ? 'Amafaranga ya Leta yishyurwa ukwayo.'
        : 'Government fees are paid separately.',
    },
    {
      icon: Calculator,
      title: t('services.tax'),
      description: language === 'kin' 
        ? 'TIN, imisoro, n\'ubucuruzi'
        : 'TIN, taxes, and business registration',
      items: [
        { service: language === 'kin' ? 'Gufungura TIN' : 'TIN registration', price: language === 'kin' ? 'Uhereye ku 3,000 RWF' : 'From 3,000 RWF' },
        { service: language === 'kin' ? 'Raporo ya CRB' : 'CRB report', price: language === 'kin' ? 'Uhereye ku 5,000 RWF' : 'From 5,000 RWF' },
        { service: language === 'kin' ? 'Tax declaration' : 'Tax declaration', price: language === 'kin' ? 'Twandikire' : 'Contact us' },
      ],
      note: language === 'kin' 
        ? 'Ibiciro bya RRA biyongeraho.'
        : 'RRA fees apply additionally.',
    },
    {
      icon: Smartphone,
      title: t('services.mobile'),
      description: language === 'kin' 
        ? 'MTN, Mobicash, Spenn, BK'
        : 'MTN, Mobicash, Spenn, BK',
      items: [
        { service: language === 'kin' ? 'Gukura/Kohereza' : 'Deposits/Withdrawals', price: language === 'kin' ? 'Ibiciro bisanzwe' : 'Standard fees' },
        { service: language === 'kin' ? 'Money transfers' : 'Money transfers', price: language === 'kin' ? 'Ibiciro by\'ibigo' : 'Provider rates' },
      ],
      note: language === 'kin' 
        ? 'Dukurikiza ibiciro by\'ibigo (MTN, Mobicash, n\'ibindi).'
        : 'We follow provider rates (MTN, Mobicash, etc.).',
    },
    {
      icon: Zap,
      title: t('services.utilities'),
      description: language === 'kin' 
        ? 'Umuriro, amazi, TV'
        : 'Electricity, water, TV',
      items: [
        { service: language === 'kin' ? 'Token y\'umuriro' : 'Electricity tokens', price: language === 'kin' ? 'Igiciro + 100 RWF' : 'Face value + 100 RWF' },
        { service: language === 'kin' ? 'Canal+/StarTimes' : 'Canal+/StarTimes', price: language === 'kin' ? 'Igiciro + serivisi' : 'Face value + service' },
        { service: language === 'kin' ? 'DStv/GOtv' : 'DStv/GOtv', price: language === 'kin' ? 'Igiciro + serivisi' : 'Face value + service' },
      ],
      note: '',
    },
    {
      icon: Palette,
      title: t('services.design'),
      description: language === 'kin' 
        ? 'Design no gucapa'
        : 'Design and printing',
      items: [
        { service: language === 'kin' ? 'Ibirango by\'ubukwe' : 'Wedding invitations', price: language === 'kin' ? 'Uhereye ku 200 RWF/1' : 'From 200 RWF/each' },
        { service: language === 'kin' ? 'Business cards' : 'Business cards', price: language === 'kin' ? 'Uhereye ku 5,000 RWF/100' : 'From 5,000 RWF/100' },
        { service: language === 'kin' ? 'Posters/Banners' : 'Posters/Banners', price: language === 'kin' ? 'Twandikire' : 'Contact us' },
        { service: language === 'kin' ? 'T-shirts' : 'T-shirts', price: language === 'kin' ? 'Uhereye ku 3,000 RWF' : 'From 3,000 RWF' },
      ],
      note: language === 'kin' 
        ? 'Ibiciro bihenduka ku ma-orders manini.'
        : 'Discounts available for bulk orders.',
    },
    {
      icon: PartyPopper,
      title: t('services.events'),
      description: language === 'kin' 
        ? 'Ubukwe n\'imikoro'
        : 'Weddings and events',
      items: [
        { service: language === 'kin' ? 'Event invitations' : 'Event invitations', price: language === 'kin' ? 'Uhereye ku 150 RWF/1' : 'From 150 RWF/each' },
        { service: language === 'kin' ? 'Certificates' : 'Certificates', price: language === 'kin' ? 'Uhereye ku 500 RWF' : 'From 500 RWF' },
        { service: language === 'kin' ? 'Calendars' : 'Calendars', price: language === 'kin' ? 'Twandikire' : 'Contact us' },
      ],
      note: '',
    },
    {
      icon: FileCheck,
      title: t('services.docs'),
      description: language === 'kin' 
        ? 'Inyandiko z\'ubucuruzi'
        : 'Business documentation',
      items: [
        { service: language === 'kin' ? 'Gukopera (B&W)' : 'Photocopying (B&W)', price: '30 RWF/page' },
        { service: language === 'kin' ? 'Gukopera (Color)' : 'Photocopying (Color)', price: '100 RWF/page' },
        { service: language === 'kin' ? 'Scanning' : 'Scanning', price: '100 RWF/page' },
        { service: language === 'kin' ? 'Binding' : 'Binding', price: language === 'kin' ? 'Uhereye ku 500 RWF' : 'From 500 RWF' },
        { service: language === 'kin' ? 'CV/Cover letter' : 'CV/Cover letter', price: language === 'kin' ? 'Uhereye ku 2,000 RWF' : 'From 2,000 RWF' },
      ],
      note: '',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              {language === 'kin' ? 'Ibiciro Byacu' : 'Our Pricing'}
            </h1>
            <p className="text-xl text-white/80">
              {language === 'kin'
                ? 'Ibiciro bisobanutse kandi bihendutse ku serivisi zose.'
                : 'Transparent and affordable pricing for all our services.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notice */}
      <ScrollAnimation>
        <section className="py-6 bg-warm/10">
          <div className="container-custom">
            <div className="flex items-start gap-3 max-w-3xl">
              <Info className="w-5 h-5 text-warm mt-0.5 flex-shrink-0" />
              <p className="text-foreground/80 text-sm">
                {language === 'kin'
                  ? 'Ibiciro bishobora guhinduka ukurikije serivisi n\'ibisabwa. Twandikire kugira ngo umenye ibiciro nyayo by\'icyo ukeneye.'
                  : 'Prices may vary based on specific requirements. Contact us for exact pricing for your needs.'}
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Pricing Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingCategories.map((category, index) => (
              <StaggerItem key={index}>
                <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="p-6 border-b border-border bg-muted/30">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex justify-between items-start gap-4">
                          <span className="text-foreground text-sm">{item.service}</span>
                          <span className="text-primary font-medium text-sm whitespace-nowrap">
                            {item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {category.note && (
                      <p className="mt-4 pt-4 border-t border-border text-muted-foreground text-xs">
                        {category.note}
                      </p>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Payment Methods */}
      <ScrollAnimation>
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                {language === 'kin' ? 'Uburyo bwo Kwishyura' : 'Payment Methods'}
              </h2>
              <p className="text-muted-foreground">
                {language === 'kin'
                  ? 'Twakira uburyo butandukanye bwo kwishyura'
                  : 'We accept various payment methods'}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {['Cash', 'MTN Mobile Money', 'Mobicash', 'Spenn', 'Bank Transfer'].map((method) => (
                <span
                  key={method}
                  className="px-4 py-2 bg-card border border-border rounded-lg text-foreground font-medium"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA */}
      <ScrollAnimation type="scaleIn">
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              {language === 'kin'
                ? 'Ukeneye ibiciro nyabyo?'
                : 'Need exact pricing?'}
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              {language === 'kin'
                ? 'Twandikire kuri WhatsApp cyangwa tuhamagare. Tuzaguha ibiciro nyabyo by\'icyo ukeneye.'
                : 'Contact us via WhatsApp or call us. We\'ll provide exact pricing for your needs.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/250788664840"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="secondary" className="gap-2 bg-white text-primary hover:bg-white/90">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
              <a href="tel:+250788664840">
                <Button size="lg" variant="outline" className="gap-2 border-white/30 text-primary-foreground hover:bg-white/10">
                  <Phone className="w-5 h-5" />
                  +250 788 664 840
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-primary-foreground hover:bg-white/10">
                  {t('common.contact_us')}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Pricing;
