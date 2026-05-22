"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export default function ServicePageClient({ slug, tKey }: { slug: string, tKey: keyof typeof translations.en.servicePages }) {
  const { t, language } = useLanguage();
  const service = t.servicePages[tKey] as any;
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  // Determine an image based on the slug
  let imagePath = "/services/service-1.jpg";
  if (slug === "high-end-renovations") imagePath = "/projects/residential-1.jpg";
  if (slug === "turnkey-construction") imagePath = "/projects/commercial-1.jpg";

  return (
    <>
      <Navigation />
      <main>
        {/* The Hero / Problem */}
        <section className="bg-(--color-surface-container-low) pt-40 pb-24 px-6 lg:px-12 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
             <img src={imagePath} alt="" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-b from-(--color-surface-container-low) to-(--color-surface-container-low)/80"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="text-[10px] text-(--color-primary) uppercase mb-6 block tracking-[0.2em] font-bold">
              {title}
            </span>
            <h1 className="serif-heading text-4xl lg:text-6xl mb-8 text-(--color-on-surface)">
              {service.problem}
            </h1>
            <p className="text-xl text-(--color-primary) font-medium max-w-2xl mx-auto">
              {service.solution}
            </p>
          </div>
        </section>

        {/* The Process */}
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="serif-heading text-3xl lg:text-5xl text-(--color-on-surface) mb-4">
              {language === 'en' ? 'Our Process' : 'Notre Processus'}
            </h2>
            <p className="text-(--color-on-surface-variant)">
              {language === 'en' ? 'A proven 3-step timeline.' : 'Un échéancier éprouvé en 3 étapes.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[service.step1, service.step2, service.step3].map((step, index) => (
              <div key={index} className="bg-(--color-surface-container) p-8 border border-subtle relative">
                <div className="absolute -top-6 -left-6 text-8xl font-black text-(--color-on-surface)/5 pointer-events-none serif-heading">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 text-(--color-on-surface) relative z-10">
                  {step.title}
                </h3>
                <p className="text-(--color-on-surface-variant) relative z-10">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 px-6 lg:px-12 bg-(--color-surface)">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="serif-heading text-3xl lg:text-5xl text-(--color-on-surface) mb-4">
                {t.servicePages.generic.whyChooseUsTitle}
              </h2>
              <p className="text-lg text-(--color-on-surface-variant)">
                {t.servicePages.generic.whyChooseUsDesc}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-(--color-surface-container-low) border border-subtle hover:border-(--color-primary) transition-colors">
                <h3 className="text-xl font-bold mb-4 text-(--color-primary)">{t.servicePages.generic.benefit1Title}</h3>
                <p className="text-(--color-on-surface-variant)">{t.servicePages.generic.benefit1Desc}</p>
              </div>
              <div className="p-8 bg-(--color-surface-container-low) border border-subtle hover:border-(--color-primary) transition-colors">
                <h3 className="text-xl font-bold mb-4 text-(--color-primary)">{t.servicePages.generic.benefit2Title}</h3>
                <p className="text-(--color-on-surface-variant)">{t.servicePages.generic.benefit2Desc}</p>
              </div>
              <div className="p-8 bg-(--color-surface-container-low) border border-subtle hover:border-(--color-primary) transition-colors">
                <h3 className="text-xl font-bold mb-4 text-(--color-primary)">{t.servicePages.generic.benefit3Title}</h3>
                <p className="text-(--color-on-surface-variant)">{t.servicePages.generic.benefit3Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 lg:px-12 bg-(--color-surface-container-low)">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="serif-heading text-3xl lg:text-5xl text-(--color-on-surface) mb-4">
                {t.servicePages.generic.faqTitle}
              </h2>
            </div>
            
            <div className="space-y-6">
              <details className="group border-b border-subtle pb-6 open:pb-6 transition-all">
                <summary className="cursor-pointer font-bold text-xl flex justify-between items-center text-(--color-on-surface) list-none [&::-webkit-details-marker]:hidden">
                  {t.servicePages.generic.faq1Q}
                  <span className="text-3xl font-light transition-transform duration-300 group-open:-rotate-45 text-(--color-primary)">+</span>
                </summary>
                <div className="mt-6 text-(--color-on-surface-variant) leading-relaxed">
                  {t.servicePages.generic.faq1A}
                </div>
              </details>
              
              <details className="group border-b border-subtle pb-6 open:pb-6 transition-all">
                <summary className="cursor-pointer font-bold text-xl flex justify-between items-center text-(--color-on-surface) list-none [&::-webkit-details-marker]:hidden">
                  {t.servicePages.generic.faq2Q}
                  <span className="text-3xl font-light transition-transform duration-300 group-open:-rotate-45 text-(--color-primary)">+</span>
                </summary>
                <div className="mt-6 text-(--color-on-surface-variant) leading-relaxed">
                  {t.servicePages.generic.faq2A}
                </div>
              </details>

              <details className="group border-b border-subtle pb-6 open:pb-6 transition-all">
                <summary className="cursor-pointer font-bold text-xl flex justify-between items-center text-(--color-on-surface) list-none [&::-webkit-details-marker]:hidden">
                  {t.servicePages.generic.faq3Q}
                  <span className="text-3xl font-light transition-transform duration-300 group-open:-rotate-45 text-(--color-primary)">+</span>
                </summary>
                <div className="mt-6 text-(--color-on-surface-variant) leading-relaxed">
                  {t.servicePages.generic.faq3A}
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Risk Reducers & Trust */}
        <section className="bg-(--color-primary) py-16 px-6 lg:px-12 text-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="py-4">
              <h4 className="text-2xl font-bold serif-heading mb-2">RBQ Certified</h4>
              <p className="text-sm text-white/80">License: 5778-4803-01</p>
            </div>
            <div className="py-4">
              <h4 className="text-2xl font-bold serif-heading mb-2">Fully Insured</h4>
              <p className="text-sm text-white/80">{language === 'en' ? 'Comprehensive commercial coverage' : 'Couverture commerciale complète'}</p>
            </div>
            <div className="py-4">
              <h4 className="text-2xl font-bold serif-heading mb-2">Quality Guarantee</h4>
              <p className="text-sm text-white/80">{language === 'en' ? 'Built to last generations' : 'Construit pour durer des générations'}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 lg:px-12 text-center max-w-3xl mx-auto">
          <h2 className="serif-heading text-4xl lg:text-5xl mb-8 text-(--color-on-surface)">
            {language === 'en' ? 'Ready to transform your space?' : 'Prêt à transformer votre espace ?'}
          </h2>
          <Link 
            href="/contact" 
            className="inline-block px-12 py-5 bg-(--color-primary) text-white uppercase text-xs tracking-[0.3em] font-bold hover:bg-(--color-on-primary-fixed-variant) transition-all"
          >
            {service.cta}
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
