"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Navigation />
      <main>
        {/* BEGIN: Hero Section */}
        <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] mb-6 text-(--color-primary) font-bold">
              {t.about.heroSub}
            </p>
            <div className="w-12 h-px bg-(--color-primary) mb-6 opacity-60"></div>
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
              <h1 className="text-5xl lg:text-8xl serif-heading leading-tight max-w-3xl text-(--color-on-surface)">
                {t.about.heroTitle1} <br /> {t.about.heroTitle2}
              </h1>
              <div className="flex gap-4">
                <Button href="/contact" variant="primary" className="mb-4">
                  {t.about.quoteBtn}
                </Button>
                <Button href="/projects" variant="outline" className="mb-4">
                  {t.about.projectsBtn}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* BEGIN: Image & Form Section */}
        <section className="relative px-6 lg:px-12 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
            <div className="lg:col-span-8 relative half-frame-accent">
              <img
                alt="High-end architectural construction"
                src="/about/about-1.jpg"
              />
            </div>
            <div className="lg:col-span-4 lg:-ml-20 lg:mt-20 z-10" id="contact">
              <div className="bg-(--color-surface-container-low) p-10 border border-subtle shadow-2xl">
                <h3 className="serif-heading text-2xl mb-8 text-(--color-on-surface)">
                  {t.about.quoteTitle}
                </h3>
                <div className="flex flex-col items-center justify-center h-[420px]">
                  <div className="text-sm text-left text-(--color-on-surface-variant) leading-relaxed w-full px-2 mb-6 mt-4">
                    <p className="mb-6 text-center">{t.about.quoteDesc1}</p>
                    <p className="font-bold mb-3 text-(--color-on-surface) uppercase text-[10px] tracking-wider">{t.about.quoteDesc2}</p>
                    <ul className="list-disc list-outside space-y-2 ml-4">
                      <li>{t.about.quoteList1}</li>
                      <li>{t.about.quoteList2}</li>
                      <li>{t.about.quoteList3}</li>
                      <li>{t.about.quoteList4}</li>
                    </ul>
                  </div>
                  <a href="mailto:hello@bativert.com?subject=Project%20Inquiry" className="w-full text-center bg-(--color-primary) text-white py-4 mt-6 uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-(--color-on-primary-fixed-variant) transition-colors cursor-pointer block">
                    {t.about.submitBtn}
                  </a>
                </div>
                <div className="mt-8 pt-8 border-t border-subtle flex items-center justify-between">
                  <div className="flex space-x-1 text-xs">
                    <span className="text-(--color-primary)">★</span>
                    <span className="text-(--color-primary)">★</span>
                    <span className="text-(--color-primary)">★</span>
                    <span className="text-(--color-primary)">★</span>
                    <span className="text-(--color-primary)">★</span>
                    <span className="ml-2 font-bold text-(--color-on-surface)">5/5</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-(--color-on-surface-variant) font-bold">
                    {t.about.verifiedExp}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BEGIN: Services Grid */}
        <section
          className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-subtle"
          id="services"
         
        >
          <SectionHeader subtitle={t.about.coreSub} title={t.about.coreTitle} />
          <div className="space-y-32">
            {/* Category 1: Infrastructure & Civil */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="inline-block border-l-2 border-(--color-primary) pl-6">
                  <h3 className="text-[10px] uppercase tracking-widest mb-6 font-bold text-(--color-primary)">
                    {t.about.cat1Sub}
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <h4 className="serif-heading text-2xl text-(--color-on-surface)">
                        {t.about.cat1Item1Title}
                      </h4>
                      <p className="text-sm text-(--color-on-surface-variant) mt-2 max-w-sm">
                        {t.about.cat1Item1Desc}
                      </p>
                    </li>
                    <li>
                      <h4 className="serif-heading text-2xl text-(--color-on-surface)">
                        {t.about.cat1Item2Title}
                      </h4>
                      <p className="text-sm text-(--color-on-surface-variant) mt-2 max-w-sm">
                        {t.about.cat1Item2Desc}
                      </p>
                    </li>
                    <li>
                      <h4 className="serif-heading text-2xl text-(--color-on-surface)">
                        {t.about.cat1Item3Title}
                      </h4>
                      <p className="text-sm text-(--color-on-surface-variant) mt-2 max-w-sm">
                        {t.about.cat1Item3Desc}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <img
                  alt="Architectural Detail"
                  className="w-full h-[500px] object-cover brightness-90 shadow-xl"
                  src="/about/about-5.jpg"
                />
              </div>
            </div>

            {/* Category 2: Structure & Commercial */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[3/4] bg-(--color-surface-container) overflow-hidden">
                    <img
                      alt="Modern Structure"
                      className="w-full h-full object-cover"
                      src="/about/about-2.jpg"
                    />
                  </div>
                  <div className="aspect-[3/4] bg-(--color-surface-container) mt-12 overflow-hidden">
                    <img
                      alt="Modern Facade"
                      className="w-full h-full object-cover"
                      src="/about/about-3.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="inline-block border-l-2 border-(--color-primary) pl-6">
                  <h3 className="text-[10px] uppercase tracking-widest mb-6 font-bold text-(--color-primary)">
                    {t.about.cat2Sub}
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <h4 className="serif-heading text-2xl text-(--color-on-surface)">
                        {t.about.cat2Item1Title}
                      </h4>
                      <p className="text-sm text-(--color-on-surface-variant) mt-2 max-w-sm">
                        {t.about.cat2Item1Desc}
                      </p>
                    </li>
                    <li>
                      <h4 className="serif-heading text-2xl text-(--color-on-surface)">
                        {t.about.cat2Item2Title}
                      </h4>
                      <p className="text-sm text-(--color-on-surface-variant) mt-2 max-w-sm">
                        {t.about.cat2Item2Desc}
                      </p>
                    </li>
                    <li>
                      <h4 className="serif-heading text-2xl text-(--color-on-surface)">
                        {t.about.cat2Item3Title}
                      </h4>
                      <p className="text-sm text-(--color-on-surface-variant) mt-2 max-w-sm">
                        {t.about.cat2Item3Desc}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Category 3: Specialized Services */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="p-10 border border-subtle bg-(--color-surface-container-lowest)">
                <h3 className="text-[10px] uppercase tracking-widest mb-6 font-bold text-(--color-primary)">
                  {t.about.cat3PreBuild}
                </h3>
                <p className="serif-heading text-xl mb-4 text-(--color-on-surface)">{t.about.cat3PreBuildTitle}</p>
                <p className="text-sm text-(--color-on-surface-variant) leading-relaxed">
                  {t.about.cat3PreBuildDesc}
                </p>
              </div>
              <div className="p-10 border border-subtle bg-(--color-surface-container-lowest)">
                <h3 className="text-[10px] uppercase tracking-widest mb-6 font-bold text-(--color-primary)">
                  {t.about.cat3Excellence}
                </h3>
                <p className="serif-heading text-xl mb-4 text-(--color-on-surface)">{t.about.cat3ExcellenceTitle}</p>
                <p className="text-sm text-(--color-on-surface-variant) leading-relaxed">
                  {t.about.cat3ExcellenceDesc}
                </p>
              </div>
              <div className="p-10 border border-subtle bg-(--color-surface-container-lowest)">
                <h3 className="text-[10px] uppercase tracking-widest mb-6 font-bold text-(--color-primary)">
                  {t.about.cat3Innovation}
                </h3>
                <p className="serif-heading text-xl mb-4 text-(--color-on-surface)">{t.about.cat3InnovationTitle}</p>
                <p className="text-sm text-(--color-on-surface-variant) leading-relaxed">
                  {t.about.cat3InnovationDesc}
                </p>
              </div>
              <div className="bg-(--color-primary) p-10 flex items-center justify-center">
                <a href="/contact" className="text-white text-[10px] uppercase tracking-[0.3em] font-bold border-b border-white pb-1 hover:border-(--color-surface) hover:text-(--color-surface) transition-all cursor-pointer">
                  {t.about.discussBtn}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BEGIN: About Us */}
        <section className="bg-(--color-surface-container-low) py-32 border-y border-subtle" id="about">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-(--color-primary)">
                {t.about.aboutSub}
              </p>
              <h2 className="serif-heading text-4xl leading-tight mb-8 text-(--color-on-surface)">
                {t.about.aboutTitle}
              </h2>
              <p className="text-(--color-on-surface-variant) text-lg mb-10 leading-relaxed">
                {t.about.aboutDesc}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square relative opacity-40">
                <img
                  alt="Architectural diagram of a modern building"
                  className="w-full h-full object-contain opacity-80 transition-opacity hover:opacity-100"
                  src="/about/about-4.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* BEGIN: Statistics */}
        <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
          <SectionHeader subtitle={t.about.statsSub} title={t.about.statsTitle} />
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-subtle">
            <div className="p-10 border-r border-subtle">
              <div className="text-5xl serif-heading mb-4 text-(--color-on-surface)">15+</div>
              <div className="text-[10px] uppercase tracking-widest text-(--color-on-surface-variant) font-bold">
                {t.about.stat1}
              </div>
            </div>
            <div className="p-10 border-r border-subtle">
              <div className="text-5xl serif-heading mb-4 text-(--color-on-surface)">100%</div>
              <div className="text-[10px] uppercase tracking-widest text-(--color-on-surface-variant) font-bold">
                {t.about.stat2}
              </div>
            </div>
            <div className="p-10 border-r border-subtle">
              <div className="text-5xl serif-heading mb-4 text-(--color-on-surface)">400+</div>
              <div className="text-[10px] uppercase tracking-widest text-(--color-on-surface-variant) font-bold">
                {t.about.stat3}
              </div>
            </div>
            <div className="p-10">
              <div className="text-5xl serif-heading mb-4 text-(--color-on-surface)">25</div>
              <div className="text-[10px] uppercase tracking-widest text-(--color-on-surface-variant) font-bold">
                {t.about.stat4}
              </div>
            </div>
          </div>
        </section>

        {/* BEGIN: Projects Showcase */}
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto" id="projects">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <SectionHeader subtitle={t.about.portfolioSub} title={t.about.portfolioTitle} className="mb-0" />
            <div className="flex flex-col gap-4">
              <p className="text-sm text-(--color-on-surface-variant) max-w-md">
                {t.about.portfolioDesc}
              </p>
              <Button href="/projects" variant="outline" className="w-fit">{t.about.projectsBtn}</Button>
            </div>
          </div>
          <div className="flex overflow-x-auto pb-8 gap-8 snap-x no-scrollbar">
            <div className="min-w-[300px] md:flex-1 snap-start aspect-[3/4]">
              <img
                alt="Modern sustainable building"
                className="w-full h-full object-cover transition-all"
                src="/about/about-3.jpg"
              />
            </div>
            <div className="min-w-[300px] md:flex-1 snap-start aspect-[3/4]">
              <img
                alt="Luxury renovation detail"
                className="w-full h-full object-cover transition-all"
                src="/about/about-2.jpg"
              />
            </div>
            <div className="min-w-[300px] md:flex-1 snap-start aspect-[3/4]">
              <img
                alt="High-end architectural interior"
                className="w-full h-full object-cover transition-all"
                src="/about/about-1.jpg"
              />
            </div>
          </div>
        </section>



        {/* BEGIN: Footer CTA */}
        <section className="py-32 px-6 lg:px-12 bg-(--color-primary) text-white" id="ready-to-build">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="serif-heading text-4xl lg:text-6xl mb-12">
              {t.about.ctaFooterTitle}
            </h2>
            <a
              className="inline-block px-12 py-4 border border-white text-white uppercase text-[10px] tracking-[0.4em] font-bold hover:bg-white hover:text-(--color-primary) transition-all"
              href="/contact"
            >
              {t.about.quoteBtn}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
