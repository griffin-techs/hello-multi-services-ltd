import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  CheckCircle
} from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t, language } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const services = [
    { value: 'irembo', label: t('services.irembo') },
    { value: 'tax', label: t('services.tax') },
    { value: 'mobile', label: t('services.mobile') },
    { value: 'utilities', label: t('services.utilities') },
    { value: 'design', label: t('services.design') },
    { value: 'events', label: t('services.events') },
    { value: 'docs', label: t('services.docs') },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: language === 'kin' ? 'Ubutumwa bwoherejwe!' : 'Message Sent!',
      description: language === 'kin' 
        ? 'Tuzagusubiza vuba. Murakoze!'
        : 'We will get back to you shortly. Thank you!',
    });
    
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.call_us'),
      items: [
        { label: '+250 788 664 840', href: 'tel:+250788664840' },
        { label: '+250 733 118 522', href: 'tel:+250733118522' },
        { label: '+250 784 314 646', href: 'tel:+250784314646' },
        { label: '+250 784 792 204', href: 'tel:+250784792204' },
      ],
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      items: [
        { label: '+250 788 664 840', href: 'https://wa.me/250788664840' },
      ],
    },
    {
      icon: Mail,
      title: t('contact.email_us'),
      items: [
        { label: 'manishimwepascal@gmail.com', href: 'mailto:manishimwepascal@gmail.com' },
      ],
    },
    {
      icon: MapPin,
      title: t('contact.find_us'),
      items: [
        { label: 'Kanamugire, Songa, Erneste', href: '#' },
        { label: 'Gatsibo-Kiramuruzi, Rwanda', href: '#' },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-white/80">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                {language === 'kin' ? 'Twandikire Ubutumwa' : 'Send us a Message'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.name')} *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === 'kin' ? 'Amazina yawe' : 'Your full name'}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('contact.phone')} *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+250 7XX XXX XXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.email')} *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">{t('contact.service')}</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder={language === 'kin' ? 'Hitamo serivisi' : 'Select a service'} />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.message')} *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={language === 'kin' ? 'Andika ubutumwa bwawe hano...' : 'Write your message here...'}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">
                      {language === 'kin' ? 'Kohereza...' : 'Sending...'}
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t('contact.send')}
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.items.map((item, i) => (
                          <a
                            key={i}
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="block text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Business Hours */}
              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-2">
                      {t('contact.hours')}
                    </h3>
                    <div className="space-y-1 text-primary-foreground/80">
                      <p>{t('contact.hours_week')}</p>
                      <p>{t('contact.hours_sat')}</p>
                      <p>{t('contact.hours_sun')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/250788664840"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button size="lg" className="w-full bg-whatsapp hover:bg-whatsapp/90 gap-2">
                  <MessageCircle className="w-5 h-5" />
                  {language === 'kin' ? 'Twandikire kuri WhatsApp' : 'Chat on WhatsApp'}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              {t('contact.find_us')}
            </h2>
            <p className="text-muted-foreground">
              Kanamugire, Songa, Erneste - Gatsibo-Kiramuruzi, Rwanda
            </p>
          </div>
          <div className="bg-muted rounded-2xl h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">
                {language === 'kin' ? 'Ikarita izashyirwaho' : 'Map will be embedded here'}
              </p>
              <a
                href="https://maps.google.com/?q=Gatsibo-Kiramuruzi,Rwanda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline mt-2 inline-block"
              >
                {language === 'kin' ? 'Fungura muri Google Maps' : 'Open in Google Maps'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
