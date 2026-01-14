import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import { Button } from '@/components/ui/button';

// Import blog images
import iremboServices from '@/assets/blog/irembo-services.jpg';
import taxDeadline from '@/assets/blog/tax-deadline.jpg';
import mobileMoneyTips from '@/assets/blog/mobile-money-tips.jpg';
import businessRegistration from '@/assets/blog/business-registration.jpg';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  content: string;
  contentEn: string;
  image: string;
  category: 'government' | 'tax' | 'tips' | 'news';
  categoryLabel: string;
  categoryLabelEn: string;
  date: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'irembo-services-guide-2026',
    title: 'Serivisi za Irembo mu 2026: Ibyo Ukwiye Kumenya',
    titleEn: 'Irembo Services in 2026: What You Need to Know',
    excerpt: 'Menya serivisi nshya za Irembo n\'uburyo bwo kuzikoresha neza mu mwaka wa 2026.',
    excerptEn: 'Learn about new Irembo services and how to use them effectively in 2026.',
    content: `
## Serivisi za Irembo mu 2026

Irembo ni urubuga rwa Leta y'u Rwanda rutanga serivisi zinyuranye ku bantu bose. Mu mwaka wa 2026, hari serivisi nshya zongerewe kandi izari zisanzwe nazo zirushaho gukoreshwa neza.

### Serivisi Nshya

1. **Kwandikisha umwana online** - Ubu ushobora kwandikisha umwana wawe online ntugomba kujya mu murenge.
2. **Gusaba uruhushya rw'ubucuruzi** - Serivisi y'uruhushya rw'ubucuruzi yongewe igihe gito.
3. **Police clearance** - Icyangombwa cy'ubuziranenge gihabwa mu minsi 3.

### Uko Wakoresha Irembo

1. Injira ku rubuga rwa irembo.gov.rw
2. Iyandikishe cyangwa winjire
3. Hitamo serivisi ukeneye
4. Uzuza amakuru asabwa
5. Ishyura amafaranga asabwa
6. Tegereza gufata icyangombwa cyawe

### Tufashe

HELLO MULTI-SERVICES LTD tufasha abantu bose bakeneye ubufasha mu gukoresha Irembo. Twandikire kuri WhatsApp: +250 788 664 840
    `,
    contentEn: `
## Irembo Services in 2026

Irembo is the Rwandan Government's online platform providing various services to all citizens. In 2026, new services have been added and existing ones have been improved.

### New Services

1. **Online child registration** - You can now register your child online without visiting the sector office.
2. **Business permit applications** - Business permit processing time has been reduced.
3. **Police clearance** - Criminal record certificates are now issued within 3 days.

### How to Use Irembo

1. Visit irembo.gov.rw
2. Register or log in
3. Select the service you need
4. Fill in the required information
5. Pay the required fees
6. Wait to receive your certificate

### We Can Help

HELLO MULTI-SERVICES LTD helps everyone who needs assistance using Irembo. Contact us on WhatsApp: +250 788 664 840
    `,
    image: iremboServices,
    category: 'government',
    categoryLabel: 'Serivisi za Leta',
    categoryLabelEn: 'Government Services',
    date: '2026-01-10',
    readTime: 5,
  },
  {
    id: '2',
    slug: 'tax-deadline-q1-2026',
    title: 'Itariki Ntarengwa yo Kwishyura Imisoro: Q1 2026',
    titleEn: 'Tax Payment Deadline: Q1 2026',
    excerpt: 'Wibuke kwishyura imisoro yawe mbere y\'itariki ntarengwa. Dore ibyo ukeneye kumenya.',
    excerptEn: 'Remember to pay your taxes before the deadline. Here\'s what you need to know.',
    content: `
## Itariki Ntarengwa yo Kwishyura Imisoro

Ukeneye kwishyura imisoro yawe mbere y'itariki ntarengwa kugira ngo wirinde ingaruka mbi.

### Ibirango Byingenzi

- **VAT Declaration**: Buri kwezi, mbere y'itariki ya 15
- **PAYE (Pay As You Earn)**: Buri kwezi, mbere y'itariki ya 15
- **Quarterly Declaration**: Mbere y'itariki ya 31 Werurwe (Q1)

### Inyandiko Ukeneye

1. TIN (Tax Identification Number)
2. Raporo y'amafaranga yinjiye
3. Raporo y'amafaranga yasohotse
4. Amafaktire (Invoices)

### Ingaruka zo Kudatanga ku Gihe

- Amande yo gukerererwa
- Inyungu ku misoro idatanzwe
- Gufungwa kw'ubucuruzi (muri case mbi)

### Dufashe

HELLO MULTI-SERVICES LTD dufasha mu gutanga tax declarations no kwishyura imisoro. Twandikire: +250 788 664 840
    `,
    contentEn: `
## Tax Payment Deadline

You need to pay your taxes before the deadline to avoid penalties.

### Important Dates

- **VAT Declaration**: Monthly, before the 15th
- **PAYE (Pay As You Earn)**: Monthly, before the 15th
- **Quarterly Declaration**: Before March 31st (Q1)

### Required Documents

1. TIN (Tax Identification Number)
2. Income reports
3. Expense reports
4. Invoices

### Consequences of Late Payment

- Late payment penalties
- Interest on unpaid taxes
- Business closure (in severe cases)

### We Can Help

HELLO MULTI-SERVICES LTD helps with tax declarations and payments. Contact us: +250 788 664 840
    `,
    image: taxDeadline,
    category: 'tax',
    categoryLabel: 'Imisoro',
    categoryLabelEn: 'Tax Updates',
    date: '2026-01-08',
    readTime: 4,
  },
  {
    id: '3',
    slug: 'mobile-money-tips-business',
    title: 'Inama 5 zo Gukoresha Mobile Money mu Bucuruzi',
    titleEn: '5 Tips for Using Mobile Money in Your Business',
    excerpt: 'Menya uko wakoresha Mobile Money neza mu bucuruzi bwawe kugira ngo wikubire amafaranga.',
    excerptEn: 'Learn how to effectively use Mobile Money in your business to increase profits.',
    content: `
## Inama zo Gukoresha Mobile Money mu Bucuruzi

Mobile Money yatumye ubucuruzi buroroshye mu Rwanda. Dore inama 5 zo kuyikoresha neza:

### 1. Kwakira Amafaranga kuri Mobile Money

Shakisha abakiriya bawe bashobora kwishyura kuri Mobile Money. Ni byoroshye kandi bidafata igihe.

### 2. Kubika Raporo y'Ibyakozwe

Buri gihe, bika raporo y'amafaranga yinjiye n'ayasohotse kuri Mobile Money. Bizagufasha mu gutanga imisoro.

### 3. Gukoresha Agent Wizewe

Hitamo agent wizewe nka HELLO MULTI-SERVICES kugira ngo wirinde ibibazo.

### 4. Kurinda Amafaranga Yawe

Ntugasangire PIN yawe n'undi muntu. Hindura PIN buri gihe.

### 5. Gukoresha Serivisi Zinyuranye

MTN Mobile Money, Mobicash, na Spenn bifite serivisi zinyuranye. Koresha izikubereye.

### Dufashe

Twakira MTN Mobile Money, Mobicash, Spenn, na BK Yacu. Twandikire: +250 788 664 840
    `,
    contentEn: `
## Tips for Using Mobile Money in Business

Mobile Money has made business easier in Rwanda. Here are 5 tips for using it effectively:

### 1. Accept Mobile Money Payments

Allow your customers to pay via Mobile Money. It's easy and saves time.

### 2. Keep Transaction Records

Always keep records of Mobile Money income and expenses. This helps with tax filing.

### 3. Use a Trusted Agent

Choose a trusted agent like HELLO MULTI-SERVICES to avoid problems.

### 4. Protect Your Money

Never share your PIN with anyone. Change your PIN regularly.

### 5. Use Different Services

MTN Mobile Money, Mobicash, and Spenn have different services. Use what works best for you.

### We Can Help

We accept MTN Mobile Money, Mobicash, Spenn, and BK Yacu. Contact us: +250 788 664 840
    `,
    image: mobileMoneyTips,
    category: 'tips',
    categoryLabel: 'Inama',
    categoryLabelEn: 'Business Tips',
    date: '2026-01-05',
    readTime: 3,
  },
  {
    id: '4',
    slug: 'business-registration-guide',
    title: 'Uko Wandikisha Ubucuruzi Bwawe mu Rwanda',
    titleEn: 'How to Register Your Business in Rwanda',
    excerpt: 'Intambwe zose zo kwandikisha ubucuruzi bwawe mu Rwanda: RDB, TIN, n\'uruhushya.',
    excerptEn: 'All steps to register your business in Rwanda: RDB, TIN, and permits.',
    content: `
## Uko Wandikisha Ubucuruzi Bwawe

Kwandikisha ubucuruzi mu Rwanda ni byoroshye cyane. Dore intambwe ukurikiza:

### Intambwe ya 1: Gushaka Izina

Jya ku rubuga rwa RDB (rdb.rw) usabe izina ry'ubucuruzi bwawe. Ugomba gutanga amazina 3, RDB yemeze rimwe.

### Intambwe ya 2: Kwandikisha kuri RDB

Nyuma yo kwemererwa izina, wandikisha ubucuruzi bwawe kuri RDB. Ukeneye:
- Icyangombwa cy'umwirondoro
- Aderesi y'ubucuruzi
- Ubwoko bw'ubucuruzi

### Intambwe ya 3: Kubona TIN

Nyuma yo kwandikishwa kuri RDB, jya kuri RRA (rra.gov.rw) usabe TIN (Tax Identification Number).

### Intambwe ya 4: Uruhushya rw'Ubucuruzi

Uramutse ukeneye uruhushya rwihariye (nk'urw'ibiryo, urw'ubwubatsi), ujye mu karere usabe.

### Igihe n'Ibiciro

- RDB Registration: Iminsi 1-2, igiciro gito
- TIN: Iminsi 1, ubuntu
- Permits: Bitandukanye

### Dufashe

HELLO MULTI-SERVICES LTD dufasha mu kwandikisha ubucuruzi. Twandikire: +250 788 664 840
    `,
    contentEn: `
## How to Register Your Business

Registering a business in Rwanda is very easy. Here are the steps:

### Step 1: Reserve a Name

Go to the RDB website (rdb.rw) to reserve your business name. You must provide 3 names, RDB will approve one.

### Step 2: Register with RDB

After name approval, register your business with RDB. You need:
- National ID
- Business address
- Type of business

### Step 3: Get TIN

After RDB registration, go to RRA (rra.gov.rw) to apply for TIN (Tax Identification Number).

### Step 4: Business Permit

If you need a special permit (like food, construction), apply at the district office.

### Timeline and Costs

- RDB Registration: 1-2 days, minimal cost
- TIN: 1 day, free
- Permits: Varies

### We Can Help

HELLO MULTI-SERVICES LTD helps with business registration. Contact us: +250 788 664 840
    `,
    image: businessRegistration,
    category: 'tips',
    categoryLabel: 'Inama',
    categoryLabelEn: 'Business Tips',
    date: '2026-01-02',
    readTime: 6,
  },
];

const Blog = () => {
  const { language } = useTranslation();

  const categories = [
    { id: 'all', label: language === 'kin' ? 'Byose' : 'All' },
    { id: 'government', label: language === 'kin' ? 'Serivisi za Leta' : 'Government' },
    { id: 'tax', label: language === 'kin' ? 'Imisoro' : 'Tax Updates' },
    { id: 'tips', label: language === 'kin' ? 'Inama' : 'Tips' },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString(language === 'kin' ? 'rw-RW' : 'en-US', options);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              {language === 'kin' ? 'Amakuru n\'Inama' : 'News & Tips'}
            </h1>
            <p className="text-xl text-white/80">
              {language === 'kin'
                ? 'Amakuru mashya ku serivisi za Leta, imisoro, n\'inama z\'ubucuruzi.'
                : 'Latest updates on government services, taxes, and business tips.'}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">
            {language === 'kin' ? 'Inkuru Ihambaye' : 'Featured Article'}
          </h2>
          
          <Link to={`/blog/${blogPosts[0].slug}`} className="block group">
            <div className="grid lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={language === 'kin' ? blogPosts[0].title : blogPosts[0].titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {language === 'kin' ? blogPosts[0].categoryLabel : blogPosts[0].categoryLabelEn}
                  </span>
                  <span className="text-muted-foreground text-sm flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(blogPosts[0].date)}
                  </span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {language === 'kin' ? blogPosts[0].title : blogPosts[0].titleEn}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {language === 'kin' ? blogPosts[0].excerpt : blogPosts[0].excerptEn}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime} {language === 'kin' ? 'min' : 'min read'}
                  </span>
                  <span className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    {language === 'kin' ? 'Soma Byose' : 'Read More'}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">
            {language === 'kin' ? 'Inkuru Zose' : 'All Articles'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="bg-card rounded-xl overflow-hidden border border-border h-full hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={language === 'kin' ? post.title : post.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {language === 'kin' ? post.categoryLabel : post.categoryLabelEn}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {language === 'kin' ? post.title : post.titleEn}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {language === 'kin' ? post.excerpt : post.excerptEn}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime} min
                      </span>
                      <span className="text-primary font-medium">
                        {language === 'kin' ? 'Soma' : 'Read'} →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            {language === 'kin'
              ? 'Ukeneye ubufasha?'
              : 'Need assistance?'}
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            {language === 'kin'
              ? 'Twandikire kuri WhatsApp kugira ngo tugufashe mu serivisi za Leta, imisoro, cyangwa ubucuruzi.'
              : 'Contact us on WhatsApp for help with government services, taxes, or business registration.'}
          </p>
          <a
            href="https://wa.me/250788664840"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              WhatsApp: +250 788 664 840
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Blog;
