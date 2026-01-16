import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import { Button } from '@/components/ui/button';

// Import gallery images
import weddingInvitation from '@/assets/gallery/wedding-invitation.jpg';
import businessCards from '@/assets/gallery/business-cards.jpg';
import weddingEvent from '@/assets/gallery/wedding-event.jpg';
import bannerPrinting from '@/assets/gallery/banner-printing.jpg';
import tshirtBranding from '@/assets/gallery/tshirt-branding.jpg';
import calendarDesign from '@/assets/gallery/calendar-design.jpg';
import birthdayParty from '@/assets/gallery/birthday-party.jpg';
import certificateDesign from '@/assets/gallery/certificate-design.jpg';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  titleEn: string;
  category: 'design' | 'events' | 'printing';
}

const Gallery = () => {
  const { language } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'design' | 'events' | 'printing'>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages: GalleryImage[] = [
    { id: 1, src: weddingInvitation, title: 'Ikirango cy\'Ubukwe', titleEn: 'Wedding Invitation', category: 'design' },
    { id: 2, src: businessCards, title: 'Business Cards', titleEn: 'Business Cards', category: 'printing' },
    { id: 3, src: weddingEvent, title: 'Ubukwe', titleEn: 'Wedding Ceremony', category: 'events' },
    { id: 4, src: bannerPrinting, title: 'Banner Printing', titleEn: 'Banner Printing', category: 'printing' },
    { id: 5, src: tshirtBranding, title: 'T-Shirt Branding', titleEn: 'T-Shirt Branding', category: 'printing' },
    { id: 6, src: calendarDesign, title: 'Calendars', titleEn: 'Calendar Design', category: 'design' },
    { id: 7, src: birthdayParty, title: 'Isabukuru', titleEn: 'Birthday Party', category: 'events' },
    { id: 8, src: certificateDesign, title: 'Certificates', titleEn: 'Certificate Design', category: 'design' },
  ];

  const categories = [
    { id: 'all', label: language === 'kin' ? 'Byose' : 'All' },
    { id: 'design', label: language === 'kin' ? 'Design' : 'Design' },
    { id: 'events', label: language === 'kin' ? 'Imikoro' : 'Events' },
    { id: 'printing', label: language === 'kin' ? 'Gucapa' : 'Printing' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              {language === 'kin' ? 'Amafoto y\'Ibikorwa Byacu' : 'Our Work Gallery'}
            </h1>
            <p className="text-xl text-white/80">
              {language === 'kin'
                ? 'Reba urugero rw\'ibikorwa byacu: design, gucapa, n\'imikoro twafashije.'
                : 'Browse samples of our work: designs, printing, and events we\'ve helped with.'}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30 sticky top-16 md:top-20 z-30">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id as typeof selectedCategory)}
                className="min-w-[80px]"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-muted"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={language === 'kin' ? image.title : image.titleEn}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium">
                      {language === 'kin' ? image.title : image.titleEn}
                    </p>
                    <p className="text-white/70 text-sm capitalize">
                      {image.category === 'design' && (language === 'kin' ? 'Design' : 'Design')}
                      {image.category === 'events' && (language === 'kin' ? 'Imikoro' : 'Events')}
                      {image.category === 'printing' && (language === 'kin' ? 'Gucapa' : 'Printing')}
                    </p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {language === 'kin' ? 'Nta mafoto abonetse.' : 'No images found.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            {language === 'kin'
              ? 'Ukeneye design cyangwa gucapa?'
              : 'Need design or printing services?'}
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            {language === 'kin'
              ? 'Twandikire kuri WhatsApp kugira ngo utange order yawe.'
              : 'Contact us via WhatsApp to place your order.'}
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

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-50"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[currentImageIndex]?.src}
              alt={language === 'kin' 
                ? filteredImages[currentImageIndex]?.title 
                : filteredImages[currentImageIndex]?.titleEn}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
              <p className="text-white font-medium text-lg">
                {language === 'kin' 
                  ? filteredImages[currentImageIndex]?.title 
                  : filteredImages[currentImageIndex]?.titleEn}
              </p>
              <p className="text-white/70 text-sm">
                {currentImageIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {filteredImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex
                    ? 'bg-white w-4'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
