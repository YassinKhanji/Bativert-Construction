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

  // Dedicated verified image for every service page
  const SERVICE_IMAGES: Record<string, string> = {
    "turnkey-construction": "/services/turnkey-construction.png",
    "high-end-renovations": "/services/high-end-renovations.png",
    "window-installation": "/services/window-installation-1.png",
    "conception": "/home-innovation-cropped.jpg",
    "architectural-design": "/services/service-1.jpg",
    "interior-design": "/about/project-1.jpg",
    "engineering": "/home-innovation.jpg",
    "new-construction": "/projects/3-plex-Berri.jpg",
    "home-expansion": "/projects/3-plex-Henessy.jpeg",
    "renovation": "/services/service-2.jpg",
    "landscaping": "/projects/St-Mark.jpg",
  };

  const imagePath = SERVICE_IMAGES[slug] || "/services/service-1.jpg";

  const isWindowInstallation = slug === "window-installation";

  // Schema.org structured data for SEO and GEO localization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.metaTitle || `BATI VERT | ${title}`,
    "serviceType": isWindowInstallation ? "Window Installation and Replacement" : title,
    "provider": {
      "@type": "GeneralContractor",
      "name": "BATI VERT Construction",
      "telephone": "+1-438-992-2468",
      "email": "Bativertconstruction@gmail.com",
      "url": "https://bativertconstruction.org",
      "priceRange": "$$$$"
    },
    "areaServed": [
      { "@type": "City", "name": "Montreal" },
      { "@type": "City", "name": "Laval" },
      { "@type": "City", "name": "Longueuil" },
      { "@type": "City", "name": "Brossard" },
      { "@type": "AdministrativeArea", "name": "Montérégie" }
    ],
    "description": service.solution
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <main>
        {/* The Hero / Problem */}
        <section className="bg-(--color-surface-container-low) pt-40 pb-24 px-6 lg:px-12 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
             <img src={imagePath} alt={title} className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-b from-(--color-surface-container-low) to-(--color-surface-container-low)/80"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-(--color-surface) border border-subtle rounded-full">
              <span className="w-2 h-2 rounded-full bg-(--color-primary)"></span>
              <span className="text-[10px] text-(--color-primary) uppercase tracking-[0.2em] font-bold">
                {service.tag || title}
              </span>
            </div>
            
            <h1 className="serif-heading text-4xl lg:text-6xl mb-8 text-(--color-on-surface)">
              {service.problem}
            </h1>
            <p className="text-xl text-(--color-primary) font-medium max-w-2xl mx-auto mb-8">
              {service.solution}
            </p>

            {service.geoRegions && (
              <div className="inline-flex items-center gap-2 text-xs text-(--color-on-surface-variant) bg-(--color-surface-container) px-4 py-2 border border-subtle">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-(--color-primary)">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>
                  {language === 'en' ? 'Serving: ' : 'Desservant : '}
                  <strong className="text-(--color-on-surface)">{service.geoRegions}</strong>
                </span>
              </div>
            )}
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
                <p className="text-(--color-on-surface-variant) relative z-10 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Specialized Craftsmanship Gallery / Features (Window Installation specific) */}
        {isWindowInstallation && (
          <section className="py-24 px-6 lg:px-12 bg-(--color-surface-container-low) border-y border-subtle">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <span className="text-[10px] text-(--color-primary) uppercase mb-3 block tracking-[0.2em] font-bold">
                  {language === 'en' ? 'Excellence on Site' : 'Excellence sur Chantier'}
                </span>
                <h2 className="serif-heading text-3xl lg:text-5xl text-(--color-on-surface) mb-4">
                  {service.galleryTitle}
                </h2>
                <p className="text-lg text-(--color-on-surface-variant)">
                  {service.galleryDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Photo 1 Card */}
                <div className="bg-(--color-surface) border border-subtle overflow-hidden shadow-sm group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-(--color-surface-container)">
                    <img 
                      src="/services/window-installation-1.png" 
                      alt={language === 'en' ? 'Architectural Window Sizing & Staging in Montreal' : 'Préparation et mise en place des fenêtres sur chantier à Montréal'} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 backdrop-blur-xs">
                      {language === 'en' ? 'Stage 01: Preparation' : 'Étape 01 : Préparation'}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="serif-heading text-2xl mb-3 text-(--color-on-surface)">
                      {language === 'en' ? 'Precision Sizing & Opening Preparation' : 'Prise de Mesures au Laser et Préparation'}
                    </h3>
                    <p className="text-sm text-(--color-on-surface-variant) leading-relaxed">
                      {language === 'en'
                        ? 'Every custom window unit is staged and verified against structural framing tolerances before tear-out, ensuring zero downtime and exact fitment.'
                        : 'Chaque unité de fenêtre est vérifiée par rapport aux tolérances structurales avant la dépose, garantissant un ajustement millimétrique sans perte de temps.'}
                    </p>
                  </div>
                </div>

                {/* Photo 2 Card */}
                <div className="bg-(--color-surface) border border-subtle overflow-hidden shadow-sm group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-(--color-surface-container)">
                    <img 
                      src="/services/window-installation-2.png" 
                      alt={language === 'en' ? 'Professional Window Caulking & Thermal Sealing in Montreal' : 'Calfeutrage professionnel et étanchéité thermique de fenêtres à Montréal'} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-(--color-primary) text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                      {language === 'en' ? 'Stage 02: Weatherproofing' : 'Étape 02 : Étanchéité'}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="serif-heading text-2xl mb-3 text-(--color-on-surface)">
                      {language === 'en' ? 'Commercial-Grade Weather-Barrier Caulking' : 'Calfeutrage Haute Performance et Pare-Intempéries'}
                    </h3>
                    <p className="text-sm text-(--color-on-surface-variant) leading-relaxed">
                      {language === 'en'
                        ? 'Master technicians apply multi-layer acoustic and thermal sealants to eliminate drafts and defend against harsh Quebec freeze-thaw cycles.'
                        : 'Nos techniciens experts appliquent un scellement thermique et acoustique multicouche pour éliminer les courants d\'air et résister aux cycles extrêmes de gel-dégel.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Feature Highlights Grid (if provided by service) */}
        {service.features && (
          <section className="py-24 px-6 lg:px-12 bg-(--color-surface)">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="serif-heading text-3xl lg:text-5xl text-(--color-on-surface) mb-4">
                  {language === 'en' ? 'Engineering & Performance Standards' : 'Normes de Performance et d\'Ingénierie'}
                </h2>
                <p className="text-lg text-(--color-on-surface-variant)">
                  {language === 'en' 
                    ? 'Built to meet and exceed Quebec Building Code and Energy Star® criteria.' 
                    : 'Conçu pour surpasser les exigences du Code de construction du Québec et d\'Energy Star®.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.features.map((feature: any, idx: number) => (
                  <div key={idx} className="p-8 bg-(--color-surface-container-low) border border-subtle hover:border-(--color-primary) transition-all">
                    <div className="w-10 h-10 rounded-full bg-(--color-primary)/10 text-(--color-primary) flex items-center justify-center font-bold text-sm mb-6">
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-(--color-on-surface)">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-(--color-on-surface-variant) leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

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
              <h4 className="text-2xl font-bold serif-heading mb-2">{language === 'en' ? 'RBQ Certified' : 'Certifié RBQ'}</h4>
              <p className="text-sm text-white/80">{language === 'en' ? 'License: 5778-4803-01' : 'Licence : 5778-4803-01'}</p>
            </div>
            <div className="py-4">
              <h4 className="text-2xl font-bold serif-heading mb-2">{language === 'en' ? 'Fully Insured' : 'Pleinement Assuré'}</h4>
              <p className="text-sm text-white/80">{language === 'en' ? 'Comprehensive commercial coverage' : 'Couverture commerciale complète'}</p>
            </div>
            <div className="py-4">
              <h4 className="text-2xl font-bold serif-heading mb-2">{language === 'en' ? 'Quality Guarantee' : 'Garantie de Qualité'}</h4>
              <p className="text-sm text-white/80">{language === 'en' ? 'Built to last generations' : 'Construit pour durer des générations'}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 lg:px-12 text-center max-w-3xl mx-auto">
          <h2 className="serif-heading text-4xl lg:text-5xl mb-8 text-(--color-on-surface)">
            {service.ctaHeading || (language === 'en' ? 'Ready to start your project?' : 'Prêt à démarrer votre projet ?')}
          </h2>
          <Link 
            href="/contact" 
            className="inline-block px-12 py-5 bg-(--color-primary) text-white uppercase text-xs tracking-[0.3em] font-bold hover:bg-(--color-on-primary-fixed-variant) transition-all shadow-md"
          >
            {service.cta}
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
