"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import HorizontalGallery from "@/components/HorizontalGallery";
import Button from "@/components/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeDownTransition = {
  initial: { opacity: 0, y: -40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: "easeOut" as const }
};

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <>
      <Navigation />
      <main>
        {/* Section 1: Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative w-full h-[921px] overflow-hidden"
        >
          <img
            alt="Modern Architectural Structure"
            className="w-full h-full object-cover object-center"
            src="/home-hero-new.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
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
        </motion.section>

        {/* Section 2: Our Philosophy */}
        <motion.section 
          {...fadeDownTransition}
          className="px-6 lg:px-12 py-32 max-w-7xl mx-auto"
        >
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
                  <div className="w-12 h-12 shrink-0 p-2.5 flex items-center justify-center bg-(--color-surface-container)">
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
                  <div className="w-12 h-12 shrink-0 p-2.5 flex items-center justify-center bg-(--color-surface-container)">
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
        </motion.section>

        {/* Section 3: Project Process (Contact -> Estimate -> Sign Contract & Start) */}
        <motion.section 
          {...fadeDownTransition}
          className="px-6 lg:px-12 py-32 bg-(--color-surface-container-low) border-y border-subtle relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-[10px] text-(--color-primary) uppercase mb-4 block tracking-[0.2em] font-bold">
                  {t.home.projectProcess.subtitle}
                </span>
                <h2 className="serif-heading text-4xl lg:text-5xl text-(--color-on-surface) max-w-2xl">
                  {t.home.projectProcess.title}
                </h2>
              </div>
              <p className="text-sm md:text-base text-(--color-on-surface-variant) max-w-md">
                {t.home.projectProcess.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Step 1: Initial Contact */}
              <div className="bg-(--color-surface) p-8 md:p-10 border border-subtle relative flex flex-col justify-between hover:border-(--color-primary) transition-all duration-300 shadow-sm group">
                <div className="absolute top-6 right-6 text-6xl font-black text-(--color-on-surface)/5 pointer-events-none serif-heading group-hover:text-(--color-primary)/10 transition-colors">
                  {t.home.projectProcess.step1Number}
                </div>
                <div>
                  <div className="w-12 h-12 rounded-full bg-(--color-primary)/10 text-(--color-primary) flex items-center justify-center font-bold text-sm mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <h3 className="serif-heading text-2xl mb-4 text-(--color-on-surface)">
                    {t.home.projectProcess.step1Title}
                  </h3>
                  <p className="text-sm text-(--color-on-surface-variant) leading-relaxed">
                    {t.home.projectProcess.step1Desc}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-subtle flex items-center justify-between text-xs font-bold text-(--color-primary)">
                  <span>{language === 'en' ? 'Step 01' : 'Étape 01'}</span>
                  <span className="opacity-60">→</span>
                </div>
              </div>

              {/* Step 2: Estimate Within 48h */}
              <div className="bg-(--color-surface) p-8 md:p-10 border border-(--color-primary)/30 relative flex flex-col justify-between hover:border-(--color-primary) transition-all duration-300 shadow-md group">
                <div className="absolute top-6 right-6 text-6xl font-black text-(--color-on-surface)/5 pointer-events-none serif-heading group-hover:text-(--color-primary)/10 transition-colors">
                  {t.home.projectProcess.step2Number}
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-(--color-primary) text-white flex items-center justify-center font-bold text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 bg-(--color-primary)/10 text-(--color-primary) font-bold">
                      {t.home.projectProcess.timelineBadge}
                    </span>
                  </div>
                  <h3 className="serif-heading text-2xl mb-4 text-(--color-on-surface)">
                    {t.home.projectProcess.step2Title}
                  </h3>
                  <p className="text-sm text-(--color-on-surface-variant) leading-relaxed">
                    {t.home.projectProcess.step2Desc}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-subtle flex items-center justify-between text-xs font-bold text-(--color-primary)">
                  <span>{language === 'en' ? 'Step 02' : 'Étape 02'}</span>
                  <span className="opacity-60">→</span>
                </div>
              </div>

              {/* Step 3: Sign Contract & Start */}
              <div className="bg-(--color-surface) p-8 md:p-10 border border-subtle relative flex flex-col justify-between hover:border-(--color-primary) transition-all duration-300 shadow-sm group">
                <div className="absolute top-6 right-6 text-6xl font-black text-(--color-on-surface)/5 pointer-events-none serif-heading group-hover:text-(--color-primary)/10 transition-colors">
                  {t.home.projectProcess.step3Number}
                </div>
                <div>
                  <div className="w-12 h-12 rounded-full bg-(--color-primary)/10 text-(--color-primary) flex items-center justify-center font-bold text-sm mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                      <polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/>
                    </svg>
                  </div>
                  <h3 className="serif-heading text-2xl mb-4 text-(--color-on-surface)">
                    {t.home.projectProcess.step3Title}
                  </h3>
                  <p className="text-sm text-(--color-on-surface-variant) leading-relaxed">
                    {t.home.projectProcess.step3Desc}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-subtle flex items-center justify-between text-xs font-bold text-(--color-primary)">
                  <span>{language === 'en' ? 'Step 03' : 'Étape 03'}</span>
                  <span>✓</span>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-(--color-primary) text-white uppercase text-xs tracking-[0.25em] font-bold hover:bg-(--color-on-primary-fixed-variant) transition-all shadow-md"
              >
                <span>{t.home.projectProcess.ctaBtn}</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Featured Services with Link to Services Page */}
        <motion.section 
          {...fadeDownTransition}
          className="px-6 lg:px-12 py-32 max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[10px] text-(--color-primary) uppercase mb-4 block tracking-[0.2em] font-bold">
                {t.home.servicesPreview.subtitle}
              </span>
              <h2 className="serif-heading text-4xl lg:text-5xl text-(--color-on-surface) max-w-2xl">
                {t.home.servicesPreview.title}
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-(--color-primary) hover:underline"
            >
              <span>{t.home.servicesPreview.viewAllBtn}</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.home.servicesPreview.items.map((srv: any, idx: number) => (
              <Link
                key={idx}
                href={`/services/${srv.slug}`}
                className="group bg-(--color-surface-container-low) border border-subtle overflow-hidden flex flex-col justify-between hover:border-(--color-primary) transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-(--color-surface-container)">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1">
                    {srv.badge}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between grow">
                  <div>
                    <h3 className="serif-heading text-xl mb-3 text-(--color-on-surface) group-hover:text-(--color-primary) transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-(--color-on-surface-variant) leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-subtle flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-(--color-primary)">
                    <span>{language === 'en' ? 'Learn More' : 'Découvrir'}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/services" 
              className="inline-block border border-(--color-primary) px-8 py-3 text-xs uppercase tracking-[0.2em] font-bold text-(--color-primary) hover:bg-(--color-primary) hover:text-white transition-all"
            >
              {language === 'en' ? 'View All 8 Turnkey Services & Specialized Trades' : 'Voir les 8 Services Clés en Main & Métiers Spécialisés'}
            </Link>
          </div>
        </motion.section>

        {/* Section 5: Horizontal Scroll Gallery */}
        <motion.div {...fadeDownTransition}>
          <HorizontalGallery />
        </motion.div>

        {/* Section 6: Comparison Section */}
        <motion.section 
          {...fadeDownTransition}
          className="px-6 lg:px-12 py-32 max-w-7xl mx-auto border-b border-subtle"
        >
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
        </motion.section>

        {/* Section 7: Leadership Section */}
        <motion.section 
          {...fadeDownTransition}
          className="px-6 lg:px-12 py-32 max-w-7xl mx-auto"
        >
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
        </motion.section>

        {/* Section 8: CTA Section */}
        <motion.section 
          {...fadeDownTransition}
          className="bg-(--color-primary) text-white py-32 text-center overflow-hidden relative"
        >
          <div className="px-6 max-w-3xl mx-auto relative z-10">
            <h2 className="serif-heading text-4xl lg:text-5xl mb-8">{t.home.ctaTitle}</h2>
            <p className="text-lg mb-12 opacity-80">{t.home.ctaDesc}</p>
            <div className="flex justify-center mt-8">
              <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-(--color-primary)">
                {t.home.ctaBtn}
              </Button>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
