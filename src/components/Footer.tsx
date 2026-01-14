import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

export function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/pricing', label: t('nav.pricing') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const serviceLinks = [
    { href: '/services#irembo', label: t('services.irembo') },
    { href: '/services#tax', label: t('services.tax') },
    { href: '/services#mobile', label: t('services.mobile') },
    { href: '/services#utilities', label: t('services.utilities') },
    { href: '/services#design', label: t('services.design') },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">H</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-background">
                  HELLO
                </span>
                <span className="font-display text-sm text-background/60 block -mt-1">
                  Multi-Services
                </span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              {t('footer.tagline')}
            </p>
            {/* Partner Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {['MTN', 'Irembo', 'RRA', 'BK'].map((partner) => (
                <span
                  key={partner}
                  className="px-2 py-1 text-xs bg-background/10 rounded text-background/80"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">
              {t('footer.quick_links')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">
              {t('footer.services')}
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+250788664840"
                  className="flex items-start gap-2 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>+250 788 664 840</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+250733118522"
                  className="flex items-start gap-2 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>+250 733 118 522</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:manishimwepascal@gmail.com"
                  className="flex items-start gap-2 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>manishimwepascal@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-background/70 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Kanamugire, Songa, Erneste<br />Gatsibo-Kiramuruzi, Rwanda</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-background/60 text-sm text-center sm:text-left">
            {t('footer.rights')}
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-background/60 hover:text-primary text-sm">
              Privacy
            </a>
            <a href="#" className="text-background/60 hover:text-primary text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
