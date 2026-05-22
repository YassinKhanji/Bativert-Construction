'use client';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function GalleryGrid({ images, projectName }: { images: string[], projectName: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const items = containerRef.current?.querySelectorAll('.gallery-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={containerRef} className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img, i) => (
          <div 
            key={i} 
            className="gallery-item opacity-0 translate-y-12 transition-all duration-1000 ease-out break-inside-avoid relative group overflow-hidden bg-(--color-surface-container) border border-subtle cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img 
              src={img} 
              alt={`${projectName} ${t.projectGallery.photo} ${i + 1}`} 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 lg:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white hover:text-(--color-primary) transition-colors p-2"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>
          <img 
            src={selectedImage} 
            alt={t.projectGallery.fullScreen} 
            className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-300"
          />
        </div>
      )}
    </>
  );
}
