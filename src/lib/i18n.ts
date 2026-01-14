import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'kin' | 'en';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set) => ({
      language: 'kin',
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'language-preference',
    }
  )
);

// Translation type - using any for nested structure to avoid circular reference
interface TranslationObject {
  [key: string]: string | TranslationObject;
}

interface Translations {
  [key: string]: {
    kin: string | TranslationObject;
    en: string | TranslationObject;
  };
}

export const translations: Translations = {
  // Navigation
  nav: {
    kin: {
      home: 'Ahabanza',
      about: 'Abo Turi',
      services: 'Serivisi',
      pricing: 'Ibiciro',
      gallery: 'Amafoto',
      blog: 'Amakuru',
      faq: 'Ibibazo',
      contact: 'Twandikire',
    },
    en: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      pricing: 'Pricing',
      gallery: 'Gallery',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contact',
    },
  },
  
  // Hero Section
  hero: {
    kin: {
      title: 'HELLO MULTI-SERVICES LTD',
      subtitle: 'Serivisi Zose Ahantu Hamwe',
      description: 'Dutanga serivisi z\'Irembo, Mobile Money, kwishyura umuriro, gucapa, n\'izindi serivisi z\'ubucuruzi. Twizigamye kandi duhendutse.',
      cta_whatsapp: 'Twandikire kuri WhatsApp',
      cta_services: 'Reba Serivisi Zacu',
      cta_call: 'Tuhamagare',
      authorized: 'Agent Wemewe Rwemewe',
    },
    en: {
      title: 'HELLO MULTI-SERVICES LTD',
      subtitle: 'All Services Under One Roof',
      description: 'We provide Irembo services, Mobile Money, electricity payments, printing, and other business services. Reliable and affordable.',
      cta_whatsapp: 'WhatsApp Us',
      cta_services: 'View Our Services',
      cta_call: 'Call Us Now',
      authorized: 'Official Authorized Agent',
    },
  },
  
  // Services
  services: {
    kin: {
      title: 'Serivisi Zacu',
      subtitle: 'Dutanga serivisi zinyuranye z\'ubucuruzi, za leta, n\'amafaranga',
      irembo: 'Serivisi za Irembo',
      irembo_desc: 'Ubufasha mu serivisi zose za Irembo: kwandikisha, icyangombwa, uruhushya, n\'ibindi',
      tax: 'Imisoro n\'Ubucuruzi',
      tax_desc: 'Gufungura TIN, kwishyura imisoro, kwandikisha ubucuruzi, raporo ya CRB',
      mobile: 'Mobile Money na Banki',
      mobile_desc: 'MTN Mobile Money, Mobicash, Spenn, BK Yacu - gukura no kohereza amafaranga',
      utilities: 'Umuriro n\'Amafaranga',
      utilities_desc: 'Kugura token y\'umuriro, kwishyura amazi, Canal+, StarTimes, DStv',
      design: 'Gucapa no Gutega',
      design_desc: 'Design y\'ibirango, gucapa, T-shirts, amasitanpe, n\'ibindi',
      events: 'Serivisi z\'Imikoro',
      events_desc: 'Ubukwe, amazubiraho, ibirango, calendars, certificates',
      docs: 'Inyandiko z\'Ubucuruzi',
      docs_desc: 'Proposals, CVs, raporo, gukopera, scanner, binding',
      view_all: 'Reba Serivisi Zose',
    },
    en: {
      title: 'Our Services',
      subtitle: 'We provide comprehensive business, government, and financial services',
      irembo: 'Irembo Services',
      irembo_desc: 'Assistance with all Irembo services: registration, IDs, permits, and more',
      tax: 'Tax & Business Registration',
      tax_desc: 'TIN registration, tax payments, business registration, CRB reports',
      mobile: 'Mobile Money & Banking',
      mobile_desc: 'MTN Mobile Money, Mobicash, Spenn, BK Yacu - deposits and transfers',
      utilities: 'Utility & Bill Payments',
      utilities_desc: 'Electricity tokens, water bills, Canal+, StarTimes, DStv',
      design: 'Design & Printing',
      design_desc: 'Invitation design, printing, T-shirts, stamps, and more',
      events: 'Event Services',
      events_desc: 'Weddings, anniversaries, invitations, calendars, certificates',
      docs: 'Business Documentation',
      docs_desc: 'Proposals, CVs, reports, photocopying, scanning, binding',
      view_all: 'View All Services',
    },
  },
  
  // Why Choose Us
  why: {
    kin: {
      title: 'Kuki Wahitamo HELLO MULTI-SERVICES?',
      subtitle: 'Twizigamye, duhendutse, kandi duhanga umwanya',
      convenience: 'Ahantu Hamwe',
      convenience_desc: 'Serivisi zose ahantu hamwe. Uzigana umwanya n\'amafaranga.',
      expertise: 'Ubumenyi',
      expertise_desc: 'Abakozi bacu bafite ubumenyi bw\'amasisitemu ya Leta.',
      reliability: 'Kwizera',
      reliability_desc: 'Turi agent wemewe. Ibyemezo byacu birasa.',
      speed: 'Umuvuduko',
      speed_desc: 'Serivisi zihuse. Ntutegereza iminsi myinshi.',
      affordable: 'Ibiciro Byoroshye',
      affordable_desc: 'Ibiciro bihendutse kandi bisobanutse.',
    },
    en: {
      title: 'Why Choose HELLO MULTI-SERVICES?',
      subtitle: 'Reliable, affordable, and convenient',
      convenience: 'One-Stop Shop',
      convenience_desc: 'All services under one roof. Save time and money.',
      expertise: 'Expertise',
      expertise_desc: 'Our staff is trained in government systems.',
      reliability: 'Reliability',
      reliability_desc: 'Official authorized agent. Guaranteed service.',
      speed: 'Speed',
      speed_desc: 'Fast service delivery. No long waits.',
      affordable: 'Affordable',
      affordable_desc: 'Competitive and transparent pricing.',
    },
  },
  
  // Partners
  partners: {
    kin: {
      title: 'Abakorana Nacu',
      subtitle: 'Tukorana n\'ibigo bya Leta n\'iby\'amafaranga byizewe',
    },
    en: {
      title: 'Our Partners',
      subtitle: 'We work with trusted government and financial institutions',
    },
  },
  
  // Contact
  contact: {
    kin: {
      title: 'Twandikire',
      subtitle: 'Turi hano kubafasha. Twandikire cyangwa tuhamagare.',
      name: 'Amazina',
      phone: 'Telefoni',
      email: 'Imeli',
      service: 'Serivisi Ukeneye',
      message: 'Ubutumwa',
      send: 'Ohereza Ubutumwa',
      address: 'Aderesi',
      hours: 'Amasaha y\'Akazi',
      hours_week: 'Ku wa mbere - Ku wa gatanu: 7:30 - 18:00',
      hours_sat: 'Ku wa gatandatu: 8:00 - 17:00',
      hours_sun: 'Ku cyumweru: 9:00 - 13:00',
      call_us: 'Tuhamagare',
      whatsapp: 'WhatsApp',
      email_us: 'Imeli',
      find_us: 'Aho Turi',
    },
    en: {
      title: 'Contact Us',
      subtitle: 'We\'re here to help. Send us a message or give us a call.',
      name: 'Full Name',
      phone: 'Phone Number',
      email: 'Email Address',
      service: 'Service Needed',
      message: 'Your Message',
      send: 'Send Message',
      address: 'Address',
      hours: 'Business Hours',
      hours_week: 'Monday - Friday: 7:30 AM - 6:00 PM',
      hours_sat: 'Saturday: 8:00 AM - 5:00 PM',
      hours_sun: 'Sunday: 9:00 AM - 1:00 PM',
      call_us: 'Call Us',
      whatsapp: 'WhatsApp',
      email_us: 'Email',
      find_us: 'Find Us',
    },
  },
  
  // Footer
  footer: {
    kin: {
      tagline: 'Serivisi Zose Ahantu Hamwe - Irembo, Mobile Money, Umuriro n\'Ibindi',
      quick_links: 'Aho Wagera Vuba',
      services: 'Serivisi',
      contact: 'Aho Tugezwa',
      rights: '© 2026 HELLO MULTI-SERVICES LTD. Uburenganzira bwose bwagenewe.',
    },
    en: {
      tagline: 'All Services Under One Roof - Irembo, Mobile Money, Utilities & More',
      quick_links: 'Quick Links',
      services: 'Services',
      contact: 'Contact Info',
      rights: '© 2026 HELLO MULTI-SERVICES LTD. All rights reserved.',
    },
  },
  
  // About Page
  about: {
    kin: {
      title: 'Abo Turi',
      subtitle: 'Menya HELLO MULTI-SERVICES LTD',
      story_title: 'Inkuru Yacu',
      story: 'HELLO MULTI-SERVICES LTD ni kompanyi ishinzwe gutanga serivisi zinyuranye z\'ubucuruzi, za leta, n\'amafaranga kuri telefoni mu Rwanda. Turi i Gatsibo-Kiramuruzi, kandi dutanga ubufasha bunoze, bwihuse, kandi bwizewe ku bantu ku giti cyabo, ubucuruzi buto, n\'ibigo binini.',
      mission_title: 'Intego Yacu',
      mission: 'Intego yacu ni ugutanga serivisi z\'ubucuruzi, za leta, n\'amafaranga mu buryo bwihuse, bwizewe, kandi buhendutse, tugamije gufasha abantu n\'ibigo gukura mu bukungu bw\'igihugu bwa digitale.',
      vision_title: 'Icyo Tureba',
      vision: 'Kuba ikigo cy\'ubufasha mu bucuruzi kizwi cyane kandi kizigamye mu Rwanda.',
      values_title: 'Ingingo Zituranga',
      trust: 'Kwizerana',
      trust_desc: 'Turi agent wemewe. Ibikorwa byacu birasa kandi birinzwe.',
      professionalism: 'Umwirondoro',
      professionalism_desc: 'Abakozi bacu bafite ubumenyi n\'ubunyamwuga.',
      speed: 'Umuvuduko',
      speed_desc: 'Dutanga serivisi zihuse. Ntutegereza iminsi myinshi.',
      accessibility: 'Kugera ku Buri Wese',
      accessibility_desc: 'Turi hafi yawe. Twandikira kuri WhatsApp cyangwa tuhamagare.',
      expertise: 'Ubumenyi',
      expertise_desc: 'Tuzi neza amasisitemu ya Leta nka Irembo, RRA, n\'ibindi.',
    },
    en: {
      title: 'About Us',
      subtitle: 'Learn about HELLO MULTI-SERVICES LTD',
      story_title: 'Our Story',
      story: 'HELLO MULTI-SERVICES LTD is a comprehensive service provider specializing in government services, financial transactions, and business support across Rwanda. Based in Gatsibo-Kiramuruzi, we deliver professional, fast, and reliable assistance to individuals, small businesses, and large organizations.',
      mission_title: 'Our Mission',
      mission: 'Our mission is to provide business, government, and financial services in a fast, reliable, and affordable manner, empowering individuals and organizations to thrive in Rwanda\'s digital economy.',
      vision_title: 'Our Vision',
      vision: 'To become Rwanda\'s most trusted and comprehensive multi-service business support center.',
      values_title: 'Our Core Values',
      trust: 'Trust',
      trust_desc: 'We are an official authorized agent. Our transactions are secure and reliable.',
      professionalism: 'Professionalism',
      professionalism_desc: 'Our staff is trained and experienced.',
      speed: 'Speed',
      speed_desc: 'We deliver services quickly. No long waiting times.',
      accessibility: 'Accessibility',
      accessibility_desc: 'We are easy to reach. Contact us via WhatsApp or phone.',
      expertise: 'Expertise',
      expertise_desc: 'We are experts in government systems like Irembo, RRA, and more.',
    },
  },
  
  // Common
  common: {
    kin: {
      learn_more: 'Menya Byinshi',
      get_started: 'Tangira Ubu',
      contact_us: 'Twandikire',
      view_details: 'Reba Ibisobanuro',
      back: 'Subira Inyuma',
      location: 'Gatsibo-Kiramuruzi, Rwanda',
    },
    en: {
      learn_more: 'Learn More',
      get_started: 'Get Started',
      contact_us: 'Contact Us',
      view_details: 'View Details',
      back: 'Go Back',
      location: 'Gatsibo-Kiramuruzi, Rwanda',
    },
  },
};

// Helper function to get translation
export function t(key: string, language: Language): string {
  const keys = key.split('.');
  let result: string | TranslationObject | undefined = translations[keys[0]]?.[language];
  
  for (let i = 1; i < keys.length; i++) {
    if (typeof result === 'object' && result !== null) {
      result = result[keys[i]];
    } else {
      return key;
    }
  }
  
  return typeof result === 'string' ? result : key;
}

// Hook for using translations
export function useTranslation() {
  const { language, setLanguage } = useLanguage();
  
  const translate = (key: string): string => t(key, language);
  
  return {
    t: translate,
    language,
    setLanguage,
    isKinyarwanda: language === 'kin',
    isEnglish: language === 'en',
  };
}
