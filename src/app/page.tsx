"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import HorizontalGallery from "@/components/HorizontalGallery";
import Button from "@/components/Button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[921px] overflow-hidden">
          <img
            alt="Modern Architectural Structure"
            className="w-full h-full object-cover object-center"
            src="/home-hero.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-16 left-6 lg:left-12 max-w-7xl mx-auto text-white">
            <div className="max-w-2xl">
              <span className="text-[12px] uppercase tracking-widest mb-4 block opacity-90 ml-1">
                {t.home.heroRbq}
              </span>
              <h1 className="serif-heading text-[64px] md:text-7xl leading-tight mb-8">
                {t.home.heroTitle1.split(' ').map((word, index, array) => (
                  <span key={index} className={index === array.length - 1 ? "text-(--color-primary) bg-white/90 px-2 rounded-sm ml-1 inline-block" : ""}>
                    {word}{index < array.length - 1 ? ' ' : ''}
                  </span>
                ))} <br />
                {t.home.heroTitle2} <br />
                {t.home.heroTitle3}
              </h1>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="px-6 lg:px-12 py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 mb-10 md:mb-0">
              <span className="text-[10px] text-(--color-primary) uppercase mb-6 block tracking-[0.2em] font-bold">
                {t.home.philosophySubtitle}
              </span>
              <h2 className="serif-heading text-4xl lg:text-5xl mb-8 text-(--color-on-surface)">
                {t.home.philosophyTitle}
              </h2>
              <p className="text-lg text-(--color-on-surface-variant) mb-10">
                {t.home.philosophyDesc}
              </p>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 shrink-0 p-2.5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-(--color-primary)"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                  </div>
                  <div>
                    <h4 className="text-[12px] uppercase mb-2 text-(--color-on-surface) font-bold">
                      {t.home.engTitle}
                    </h4>
                    <p className="text-sm text-(--color-on-surface-variant)">
                      {t.home.engDesc}
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 shrink-0 p-2.5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-(--color-primary)"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                  </div>
                  <div>
                    <h4 className="text-[12px] uppercase mb-2 text-(--color-on-surface) font-bold">
                      {t.home.certTitle}
                    </h4>
                    <p className="text-sm text-(--color-on-surface-variant)">
                      {t.home.certDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 relative">
              <div className="aspect-[4/5] bg-(--color-surface-container-low) overflow-hidden">
                <img
                  alt="Modern Design Blueprint"
                  className="w-full h-full object-cover transition-all duration-1000"
                  src="/home-innovation-cropped.jpg"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-(--color-primary) p-8 hidden lg:flex flex-col justify-end">
                <span className="serif-heading text-4xl text-white">15+</span>
                <span className="text-[10px] uppercase text-white/80 tracking-widest mt-2">
                  {t.home.yearsInnovation}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Scroll Gallery (Replaces Timeline) */}
        <HorizontalGallery />
        {/* Comparison Section */}
        <section className="px-6 lg:px-12 py-32 max-w-7xl mx-auto border-b border-subtle">
          <div className="mb-16">
            <SectionHeader subtitle={t.home.comparison.subtitle} title={t.home.comparison.title} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Standard Column */}
            <div className="bg-surface border border-subtle p-8 md:p-12 opacity-80 grayscale">
              <h3 className="serif-heading text-2xl lg:text-3xl mb-8 text-center text-(--color-on-surface-variant)">
                {t.home.comparison.standardLabel}
              </h3>
              <div className="space-y-8">
                {t.home.comparison.points.map((point: any, i: number) => (
                  <div key={`std-${i}`} className="text-center md:text-left border-t border-subtle pt-6">
                    <span className="block text-[10px] uppercase tracking-widest text-(--color-on-surface-variant) font-bold mb-2">{point.title}</span>
                    <span className="text-lg text-(--color-on-surface) opacity-60 line-through decoration-(--color-on-surface-variant)/40">{point.standard}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bati Vert Column */}
            <div className="bg-(--color-primary) text-white p-8 md:p-12 relative shadow-2xl transform md:-translate-y-4">
              <div className="absolute top-0 right-0 p-4">
                <svg className="w-12 h-12 text-white/10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="serif-heading text-3xl lg:text-4xl mb-8 text-center">
                {t.home.comparison.ourLabel}
              </h3>
              <div className="space-y-8">
                {t.home.comparison.points.map((point: any, i: number) => (
                  <div key={`ours-${i}`} className="text-center md:text-left border-t border-white/20 pt-6">
                    <span className="block text-[10px] uppercase tracking-widest text-white/70 font-bold mb-2">{point.title}</span>
                    <span className="text-xl font-bold flex flex-col md:flex-row items-center md:items-start gap-3">
                      <svg className="w-6 h-6 flex-shrink-0 text-white mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      {point.ours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="px-6 lg:px-12 py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-3 relative group cursor-pointer flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-(--color-surface-container) shadow-xl relative">
                <img alt="General Contractor & Owner" className="w-full h-full object-cover transition-all duration-700 hover:scale-110" src="/ghaias-khanji-new.png" />
              </div>
            </div>
            <div className="md:col-span-9 md:pl-8">
              <span className="text-[10px] text-(--color-primary) uppercase mb-4 block tracking-[0.2em] font-bold">{t.home.leadershipSub}</span>
              <h3 className="serif-heading text-4xl lg:text-5xl mb-4 text-(--color-on-surface)">{t.home.leadershipTitle}</h3>
              <p className="text-[11px] uppercase text-(--color-primary) mb-8 tracking-[0.2em] font-bold">{t.home.leadershipRole}</p>
              <div className="h-[1px] w-24 mb-10 bg-(--color-primary)"></div>
              <blockquote className="text-2xl lg:text-3xl italic text-(--color-on-surface-variant) leading-relaxed serif-heading">
                {t.home.leadershipQuote}
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-(--color-primary) text-white py-32 text-center overflow-hidden relative">
          <div className="px-6 max-w-3xl mx-auto relative z-10">
            <h2 className="serif-heading text-4xl lg:text-5xl mb-8">{t.home.ctaTitle}</h2>
            <p className="text-lg mb-12 opacity-80">{t.home.ctaDesc}</p>
            <div className="flex justify-center mt-8">
              <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-(--color-primary)">
                {t.home.ctaBtn}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
