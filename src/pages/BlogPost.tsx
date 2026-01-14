import { Link, useParams, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, MessageCircle } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { blogPosts } from './Blog';

const BlogPost = () => {
  const { language } = useTranslation();
  const { slug } = useParams<{ slug: string }>();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(language === 'kin' ? 'rw-RW' : 'en-US', options);
  };

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  const shareOnWhatsApp = () => {
    const title = language === 'kin' ? post.title : post.titleEn;
    const url = window.location.href;
    const text = encodeURIComponent(`${title}\n\n${url}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero with Image */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <img
          src={post.image}
          alt={language === 'kin' ? post.title : post.titleEn}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container-custom">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'kin' ? 'Subira ku Makuru' : 'Back to Blog'}
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                {language === 'kin' ? post.categoryLabel : post.categoryLabelEn}
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-4xl">
              {language === 'kin' ? post.title : post.titleEn}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-border">
              <span className="text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="text-muted-foreground flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} {language === 'kin' ? 'min yo gusoma' : 'min read'}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={shareOnWhatsApp}
                className="ml-auto gap-2"
              >
                <Share2 className="w-4 h-4" />
                {language === 'kin' ? 'Sangiza' : 'Share'}
              </Button>
            </div>

            {/* Article Body */}
            <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
              <div
                dangerouslySetInnerHTML={{
                  __html: (language === 'kin' ? post.content : post.contentEn)
                    .replace(/\n/g, '<br>')
                    .replace(/## (.*?)(?=<br>|$)/g, '<h2>$1</h2>')
                    .replace(/### (.*?)(?=<br>|$)/g, '<h3>$1</h3>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/- (.*?)(?=<br>|$)/g, '<li>$1</li>')
                    .replace(/(\d+)\. (.*?)(?=<br>|$)/g, '<li>$2</li>'),
                }}
              />
            </article>

            {/* CTA Box */}
            <div className="mt-12 p-8 bg-primary rounded-2xl text-primary-foreground text-center">
              <h3 className="font-display text-xl font-bold mb-4">
                {language === 'kin' ? 'Ukeneye Ubufasha?' : 'Need Help?'}
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                {language === 'kin'
                  ? 'HELLO MULTI-SERVICES LTD tufasha mu serivisi zose zivuzwe muri iyi nkuru.'
                  : 'HELLO MULTI-SERVICES LTD can help with all services mentioned in this article.'}
              </p>
              <a
                href="https://wa.me/250788664840"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp: +250 788 664 840
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              {language === 'kin' ? 'Inkuru Zijyanye' : 'Related Articles'}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <article className="bg-card rounded-xl overflow-hidden border border-border h-full hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={language === 'kin' ? relatedPost.title : relatedPost.titleEn}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {language === 'kin' ? relatedPost.title : relatedPost.titleEn}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {language === 'kin' ? relatedPost.excerpt : relatedPost.excerptEn}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
