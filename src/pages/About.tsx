import { 
  Shield, 
  Users, 
  Clock, 
  MapPin, 
  Sparkles,
  CheckCircle,
  Target,
  Eye
} from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const About = () => {
  const { t } = useTranslation();

  const values = [
    { icon: Shield, title: t('about.trust'), description: t('about.trust_desc') },
    { icon: Users, title: t('about.professionalism'), description: t('about.professionalism_desc') },
    { icon: Clock, title: t('about.speed'), description: t('about.speed_desc') },
    { icon: MapPin, title: t('about.accessibility'), description: t('about.accessibility_desc') },
    { icon: Sparkles, title: t('about.expertise'), description: t('about.expertise_desc') },
  ];

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '1000+', label: 'Happy Customers' },
    { value: '7', label: 'Service Categories' },
    { value: '8+', label: 'Partners' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              {t('about.title')}
            </h1>
            <p className="text-xl text-white/80">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                {t('about.story_title')}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t('about.story')}
              </p>
              <div className="flex flex-wrap gap-2">
                {['Irembo', 'RRA', 'MTN', 'Mobicash', 'Spenn', 'BK Yacu'].map((partner) => (
                  <span
                    key={partner}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-display font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                {t('about.mission_title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.mission')}
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                {t('about.vision_title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.vision')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t('about.values_title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl font-bold mb-8">
            Official Authorized Agent
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['MTN Mobile Money Agent', 'Irembo Service Point', 'RRA Registered', 'Mobicash Partner', 'Spenn Agent', 'BK Yacu Agent'].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg"
              >
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
