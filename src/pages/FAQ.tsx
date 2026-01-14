import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const { language } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      title: language === 'kin' ? 'Serivisi za Irembo' : 'Irembo Services',
      faqs: [
        {
          question: language === 'kin' 
            ? 'Ni izihe serivisi za Irembo mwafasha?' 
            : 'What Irembo services do you assist with?',
          answer: language === 'kin'
            ? 'Tufasha mu serivisi zose za Irembo zirimo: kwandikisha umuntu, gusaba icyangombwa cy\'umwirondoro, serivisi z\'abapolisi, uruhushya rw\'ubucuruzi, n\'izindi.'
            : 'We assist with all Irembo services including: civil registration, national ID applications, police clearance, business permits, and more.',
        },
        {
          question: language === 'kin'
            ? 'Irembo application ifata igihe kingana iki?'
            : 'How long does Irembo application take?',
          answer: language === 'kin'
            ? 'Twohereeza application ku munsi umwe. Igihe cya Leta gitera uko serivisi ari. Akenshi ni iminsi 1-5.'
            : 'We submit applications the same day. Government processing times vary by service type (usually 1-5 days).',
        },
        {
          question: language === 'kin'
            ? 'Ni izihe nyandiko nkeneye kugira ngo mbone serivisi za Irembo?'
            : 'What documents do I need for Irembo services?',
          answer: language === 'kin'
            ? 'Bikomeye ku serivisi ukeneye. Akenshi ukeneye indangamuntu, foto, n\'inyandiko zijyanye na serivisi. Tuze kugufasha kumenya ibyo ukeneye.'
            : 'It depends on the service you need. Generally you need a National ID, photos, and service-specific documents. We\'ll help you identify what you need.',
        },
      ],
    },
    {
      title: language === 'kin' ? 'TIN n\'Imisoro' : 'TIN & Tax Services',
      faqs: [
        {
          question: language === 'kin'
            ? 'Ni izihe nyandiko nkeneye kugira ngo mbone TIN?'
            : 'What documents do I need for TIN registration?',
          answer: language === 'kin'
            ? 'Ukeneye: Indangamuntu (National ID), Raporo ya CRB (ku bucuruzi bufite imashini), Icyangombwa cy\'ubucuruzi, Numero ya telefoni. Dufite urutonde rurambuye dutanga igihe uza.'
            : 'You need: National ID, CRB report (for registered businesses), Business certificate, Phone number. We provide a detailed checklist when you visit.',
        },
        {
          question: language === 'kin'
            ? 'TIN ifata amafaranga angahe?'
            : 'How much does TIN registration cost?',
          answer: language === 'kin'
            ? 'Ibiciro bya leta hamwe n\'ibiciro byacu by\'ubufasha. Twandikire kugira ngo umenye ibiciro nyayo.'
            : 'Government fees plus our service fee. Contact us for exact pricing.',
        },
        {
          question: language === 'kin'
            ? 'Mushobora kumfasha kwishyura imisoro?'
            : 'Can you help me with tax payments?',
          answer: language === 'kin'
            ? 'Yego! Tufasha mu kwandika raporo y\'imisoro, kwishyura VAT, na tax declarations zose.'
            : 'Yes! We help with tax declaration filing, VAT payments, and all tax compliance matters.',
        },
      ],
    },
    {
      title: language === 'kin' ? 'Mobile Money' : 'Mobile Money',
      faqs: [
        {
          question: language === 'kin'
            ? 'Ese mufata amafaranga angahe ku Mobile Money?'
            : 'What are your Mobile Money fees?',
          answer: language === 'kin'
            ? 'Dukurikiza ibiciro bisanzwe by\'agents. Nta mafaranga yiyongera.'
            : 'We follow standard agent fees. No hidden charges.',
        },
        {
          question: language === 'kin'
            ? 'Ni amafaranga angahe ashobora gukurwa?'
            : 'What are your transaction limits?',
          answer: language === 'kin'
            ? 'Limits zikurikiza ibigo (MTN, Mobicash, Spenn). Dushobora gukora transactions kugeza ku maximum yemewe.'
            : 'Limits depend on the service provider (MTN, Mobicash, Spenn). We can process transactions up to the maximum allowed limits.',
        },
        {
          question: language === 'kin'
            ? 'Ni amasaha ki mukora Mobile Money?'
            : 'What are your Mobile Money service hours?',
          answer: language === 'kin'
            ? 'Kuwa mbere - Kuwa gatanu: 7:30 - 18:00, Kuwa gatandatu: 8:00 - 17:00, Ku cyumweru: 9:00 - 13:00.'
            : 'Monday - Friday: 7:30 AM - 6:00 PM, Saturday: 8:00 AM - 5:00 PM, Sunday: 9:00 AM - 1:00 PM.',
        },
      ],
    },
    {
      title: language === 'kin' ? 'Gucapa no Gutega' : 'Printing & Design',
      faqs: [
        {
          question: language === 'kin'
            ? 'Mwakora ibirango by\'ubukwe mu gihe kingana iki?'
            : 'How long do wedding invitations take?',
          answer: language === 'kin'
            ? 'Design: amasaha 24-48. Gucapa: iminsi 1-2 ukurikije umubare.'
            : 'Design: 24-48 hours. Printing: 1-2 days depending on quantity.',
        },
        {
          question: language === 'kin'
            ? 'Ese mutanga delivery?'
            : 'Do you offer delivery?',
          answer: language === 'kin'
            ? 'Yego, ku ma-orders manini muri Gatsibo district. Amafaranga y\'inyongera ashobora kubaho.'
            : 'Yes, for large orders within Gatsibo district. Additional fees may apply.',
        },
        {
          question: language === 'kin'
            ? 'Ni ubuhe bwoko bw\'ibicapwa mutanga?'
            : 'What types of printing do you offer?',
          answer: language === 'kin'
            ? 'Ibirango, business cards, posters, banners, T-shirts, calendars, certificates, letterheads, n\'ibindi byinshi.'
            : 'Invitations, business cards, posters, banners, T-shirts, calendars, certificates, letterheads, and much more.',
        },
      ],
    },
    {
      title: language === 'kin' ? 'Ibisabwa Rusange' : 'General Questions',
      faqs: [
        {
          question: language === 'kin'
            ? 'Nshobora kwishyura umuriro hano?'
            : 'Can I buy electricity tokens here?',
          answer: language === 'kin'
            ? 'Yego! Dutanga serivisi zo kugura token y\'umuriro ku mita zawe. Twakira amafaranga n\'uburyo butandukanye.'
            : 'Yes! We provide electricity token purchases for your meter. We accept various payment methods.',
        },
        {
          question: language === 'kin'
            ? 'Ni ubuhe buryo bwo kwishyura mwakira?'
            : 'What payment methods do you accept?',
          answer: language === 'kin'
            ? 'Cash, Mobile Money, Bank transfer (ku mafaranga manini).'
            : 'Cash, Mobile Money, Bank transfer (for large amounts).',
        },
        {
          question: language === 'kin'
            ? 'Muri he?'
            : 'Where are you located?',
          answer: language === 'kin'
            ? 'Turi i Gatsibo-Kiramuruzi, mu murenge wa Kanamugire, Songa, kwa Erneste.'
            : 'We are located in Gatsibo-Kiramuruzi, in Kanamugire, Songa, at Erneste\'s place.',
        },
      ],
    },
  ];

  // Filter FAQs based on search
  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(
      faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              {language === 'kin' ? 'Ibibazo Bikunze Kubazwa' : 'Frequently Asked Questions'}
            </h1>
            <p className="text-xl text-white/80">
              {language === 'kin'
                ? 'Shakisha ibisubizo by\'ibibazo bikunze kubazwa'
                : 'Find answers to commonly asked questions'}
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={language === 'kin' ? 'Shakisha ikibazo...' : 'Search for a question...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-8">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  {language === 'kin'
                    ? 'Nta bibazo bibonetse. Gerageza gushakisha ibindi.'
                    : 'No questions found. Try a different search term.'}
                </p>
              </div>
            ) : (
              filteredCategories.map((category, index) => (
                <div key={index}>
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    {category.title}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${index}-${faqIndex}`}
                        className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <span className="font-medium text-foreground pr-4">
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            {language === 'kin'
              ? 'Ufite ibibazo byinshi?'
              : 'Still have questions?'}
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            {language === 'kin'
              ? 'Twandikire kuri WhatsApp cyangwa tuhamagare. Turabasubiza vuba!'
              : 'Contact us via WhatsApp or give us a call. We respond quickly!'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/250788664840"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
                WhatsApp: +250 788 664 840
              </button>
            </a>
            <a href="tel:+250788664840">
              <button className="px-6 py-3 bg-white/20 text-primary-foreground font-semibold rounded-lg hover:bg-white/30 transition-colors">
                {language === 'kin' ? 'Tuhamagare' : 'Call Us'}
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
