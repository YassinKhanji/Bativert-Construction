"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t: globalT } = useLanguage();
  const t = globalT.services;

  return (
    <>
      <Navigation />
      <main>
        {/* Services Hero */}
        <section className="bg-(--color-surface-container-low) pt-32 pb-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <span className="text-[10px] text-(--color-primary) uppercase mb-6 block tracking-[0.2em] font-bold">
              {t.heroSubtitle}
            </span>
            <h1 className="serif-heading text-5xl lg:text-7xl mb-8 text-(--color-on-surface)">
              {t.heroTitle}
            </h1>
            <p className="text-lg text-(--color-on-surface-variant) max-w-2xl mx-auto">
              {t.heroDesc}
            </p>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
          
          {/* Highlighted Services (From Old Design) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <div className="aspect-square bg-(--color-surface-container) half-frame-accent">
               <img src="https://lh3.googleusercontent.com/aida/ADBb0uhcAPns0nh3IVlhyy7I5f8WaBKUW5ANcmHXspY26j8UUg0-0tXzJ8OW4jQuKyQzbSUFdwnDIH75oqEOkXP5HeWgn4Cai2IjUGAtv97ZwbXyBiIt02QwvXntRt2Tb503WjomY6WfYmjblrxdpK9jFwUf0Qhr-qnOC1Oy2GjN_uChfGy34Ghm52g0HkvgdUTWaN0wSx4MC4t82PJiIY1D_jHk6xUivw3URSZf1Oi9qqISkNEAy0S5Mqlkdm8" alt={t.service1Title} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="w-16 h-16 border border-subtle p-4 bg-white mb-6 flex items-center justify-center rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-(--color-primary)"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
              </div>
              <SectionHeader subtitle={t.service1Subtitle} title={t.service1Title} className="mb-8" />
              <p className="text-(--color-on-surface-variant) mb-8">
                {t.service1Desc}
              </p>
              <ul className="space-y-4 mb-8">
                {t.service1List.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-bold text-(--color-primary)"><span className="w-2 h-2 bg-(--color-primary) rounded-full"></span> {item}</li>
                ))}
              </ul>
              <Button href="/contact" variant="outline">{t.service1Btn}</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-48">
            <div className="order-2 md:order-1">
              <div className="w-16 h-16 border border-subtle p-4 bg-white mb-6 flex items-center justify-center rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-(--color-primary)"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H11.2l-2.65 2.65c-.39.39-.39 1.03 0 1.42l5.03 5.03c.39.39 1.03.39 1.42 0l2.65-2.65h.86c.85 0 1.65.33 2.25.93l1.25 1.25c.39.39 1.02.39 1.41 0 0 0 0 0 0 0 .39-.39.39-1.02 0-1.41z"/></svg>
              </div>
              <SectionHeader subtitle={t.service2Subtitle} title={t.service2Title} className="mb-8" />
              <p className="text-(--color-on-surface-variant) mb-8">
                {t.service2Desc}
              </p>
              <ul className="space-y-4 mb-8">
                {t.service2List.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-bold text-(--color-primary)"><span className="w-2 h-2 bg-(--color-primary) rounded-full"></span> {item}</li>
                ))}
              </ul>
              <Button href="/contact" variant="outline">{t.service2Btn}</Button>
            </div>
            <div className="aspect-square bg-(--color-surface-container) half-frame-accent order-1 md:order-2">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPtm9h5deDJXkQyLF7sW6J3hjJZ3wxhd0Qn3NS_duPnDWXWsuKkiDEFzKA8CJTpEZPyr_J4ifkgMMAzo70kcDex5Y2w9gcdPUG718MnC-TH6fck1NzBoYdPGqVRZQ2oy9_-5CSzpAa7Qy1RZ8OhZUmurf0rdFx1MMB6zMQQJQdXw8Y0_4fW6fOGIDUoGYD48jIsJWP2hd2OP1YXEN_vUCjbMIbw57kgb1unhL8H8DkxmgiMnd1kDxgMHrz2OGUjzv546Q_vJ6go3I" alt={t.service2Title} className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Turnkey Services */}
          <div className="mb-32">
            <SectionHeader subtitle={t.turnkeySubtitle} title={t.turnkeyTitle} className="mb-16" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {t.turnkeyServices.map((service, index) => (
                <div key={index} className="bg-white border border-subtle p-8 flex items-center shadow-sm">
                  <h3 className="font-bold text-sm tracking-widest uppercase">{service}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Renovations & Specialized Trades (Accordion) */}
          <div className="mb-32 max-w-4xl">
            <SectionHeader subtitle={t.expertiseSubtitle} title={t.expertiseTitle} className="mb-16" />
            
            <details className="group border-b border-subtle pb-6 mb-6 open:pb-12 transition-all">
              <summary className="cursor-pointer font-bold serif-heading text-3xl flex justify-between items-center text-(--color-on-surface) list-none [&::-webkit-details-marker]:hidden">
                {t.specificRenovations}
                <span className="text-3xl font-light transition-transform duration-300 group-open:-rotate-45">+</span>
              </summary>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-(--color-on-surface-variant) animate-in fade-in slide-in-from-top-4 duration-500">
                {t.renovationServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-(--color-primary) rounded-full"></span>
                    {service}
                  </div>
                ))}
              </div>
            </details>

            <details className="group border-b border-subtle pb-6 mb-6 open:pb-12 transition-all">
              <summary className="cursor-pointer font-bold serif-heading text-3xl flex justify-between items-center text-(--color-on-surface) list-none [&::-webkit-details-marker]:hidden">
                {t.specializedTrades}
                <span className="text-3xl font-light transition-transform duration-300 group-open:-rotate-45">+</span>
              </summary>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 text-sm text-(--color-on-surface-variant) animate-in fade-in slide-in-from-top-4 duration-500">
                {t.specializedTradesList.map((trade, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-(--color-primary) opacity-50 text-[10px]">♦</span>
                    {trade}
                  </div>
                ))}
              </div>
            </details>
          </div>

          {/* Regions */}
          <div>
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6 mb-16">
              <div className="w-16 h-16 border border-subtle p-4 bg-white flex items-center justify-center shrink-0 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-(--color-primary)"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <SectionHeader subtitle={t.coverageSubtitle} title={t.coverageTitle} className="mb-0" />
            </div>
            <div className="bg-(--color-surface-container-low) p-10 md:p-16 border border-subtle">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.regions.map((region, index) => (
                  <div key={index} className="text-sm font-semibold tracking-wide text-(--color-on-surface) border-l-2 border-(--color-primary)/30 pl-4 py-1 hover:border-(--color-primary) transition-colors">
                    {region}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}
