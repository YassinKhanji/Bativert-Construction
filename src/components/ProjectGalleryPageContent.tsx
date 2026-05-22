"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import Button from "@/components/Button";
import GalleryGrid from "@/components/GalleryGrid";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjectGalleryPageContent({ projectName, images }: { projectName: string; images: string[] }) {
  const { t } = useLanguage();

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto min-h-screen">
        <Link href="/projects" className="text-[10px] tracking-widest uppercase text-(--color-primary) font-bold hover:text-(--color-on-surface) transition-colors mb-8 inline-block">
          {t.projectGallery.back}
        </Link>
        <SectionHeader subtitle={t.projectGallery.gallerySub} title={projectName} className="mb-12" />
        
        {images.length === 0 ? (
          <p className="text-(--color-on-surface-variant)">{t.projectGallery.processing}</p>
        ) : (
          <GalleryGrid images={images} projectName={projectName} />
        )}
        
        <div className="mt-24 text-center">
          <Button href="/contact" variant="primary">{t.projectGallery.startProject}</Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
