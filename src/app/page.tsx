"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
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
            className="w-full h-full object-cover object-bottom"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuA2Ou8imhMv3RSzpRQK155KqmYquftBfhbLlnBWceWhurgepRJb1FgWR-O-h9iPqJMBFC-adIMVl59z_wigS1PzNuLglUcKJhfqG2lMBoTh601iw_e-pSFgHVirygP_EdFOE123RKRHcbcSjhZdsVTpV59fPOogquBJldajYoEtONjMGbf1LdAWahZANLyi1Kfd5D7RcXcFPP9f5chxqvo7DiLksrxy8mgnZbxRDfZ_WP2vnXCq44K6UK1IqewsuZBn_lQgTO9wU"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-16 left-6 lg:left-12 max-w-7xl mx-auto text-white">
            <div className="max-w-2xl">
              <span className="text-[12px] uppercase tracking-widest mb-4 block opacity-90 ml-1">
                {t.home.heroRbq}
              </span>
              <h1 className="serif-heading text-[64px] md:text-7xl leading-tight mb-8">
                {t.home.heroTitle1} <br />
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
                  <div className="w-12 h-12 shrink-0 border border-subtle p-2.5 bg-white flex items-center justify-center rounded-sm">
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
                  <div className="w-12 h-12 shrink-0 border border-subtle p-2.5 bg-white flex items-center justify-center rounded-sm">
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZMmKB-h7km3lncANwi5snlhRTLpAidp4UYOciaotKcTMtxzpJrcBa7L4hPLCAU17qlcGEJS4kP7GqGCD9O-Vn51xY2p7JypXk3FNoo8mq1zwWJs2SMH376lRXXFgDZIL01A_kWgyZZq35GiCdC2ns5RCxI1m8RfW9Hxu1iCLyWraysliFkgOv3Y1JQXK9PoweHDmcM_PRivFZ3pPp-80In8P9GTFUiHVIs1dm0nuy91gBk-X8FdEoUf1RnvQ6Hve92Yt0llCGb44"
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

        {/* Legacy Section (Timeline) */}
        <section className="bg-(--color-surface-container-low) py-32">
          <div className="px-6 lg:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b pb-8 border-(--color-primary)">
              <SectionHeader subtitle={t.home.journeySubtitle} title={t.home.journeyTitle} className="mb-0" />
              <p className="text-sm text-(--color-on-surface-variant) max-w-sm mt-6 md:mt-0 pb-4">
                {t.home.journeyDesc}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-[110px] left-0 right-0 h-[1px] bg-(--color-primary)"></div>
              {[
                { title: t.home.timelineLaunch, subtitle: t.home.timelineLaunchSub, desc: t.home.timelineLaunchDesc, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBr9Ph1VP_ISvYA7xlHgJA19K8OFP2zfn2lomhysALJC0Pv8NGETkAAgK2zkW7M5wbYDu-4exzssxByU40jBcTg7QqsOytrycogWNnNMFAl_KH3RrdSCjRJMW9hRipfdnhSrjjRR7TSA1BJeEJpdNw8cRYSd2g6XRtOOoDkcTIPO4xxQcbByqzvxX_eeRYGrfa82DV7qeutxidrMRF_H3R5HfF7BQGGU6f5sA0y2SQcQ57KoqA9hNXgjF7OZ4mDMTIKTVlt583OI6o" },
                { title: t.home.timelineGrowth, subtitle: t.home.timelineGrowthSub, desc: t.home.timelineGrowthDesc, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgRa33q-AxgMpDmwukhfy0JVwsL7GIfZ03FD--YvfOeCFkLkY3NAzCAtpQXEB0TTggk6NcZLEG4keO8gDEiw0GL-KlpEAwMZyEbZHwEGIKJOYN6Pzo7hQ85qUQAu8XfiGvg-XVGMFCCDro2XSQTuUB61la7vOpOMdCXbJ0kfbi70uawhDT5-P1xbBwLE8Qi53-ZET6FiXgIHQ7bhvT8N8CP6EWMAT5LM0tMbr1W1xCEcoSIKmxg3kM19Hu_HPPqQ8Lpl9hc-fR1cg" },
                { title: t.home.timelineProjects, subtitle: t.home.timelineProjectsSub, desc: t.home.timelineProjectsDesc, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnJfxWuaA4gdJHG_YA0g_M8lWiT5cK2NkPHWEC9a9FB6_YReFoKvACy6j8dJVnxcFOEgWxP9AxyWuZFv-3E7_NmLWH4A7xSXyYFWkFQ8QhkmYd6khqt_s11LKEF4DAhUCfH0nRzX2pd4c9v3DBLk2_YI9tZe6E_Rmr0zy9eeg-bPt9oe2g30t4KJ3n0VZeihH2UMuCju34OOs1MAW52KO6C3UoiE8BdhEjxGZP-39MyfE2Dr2ZRgeQU6zuhDEfMiEQjo1UspyZpYo" },
                { title: t.home.timelineToday, subtitle: t.home.timelineTodaySub, desc: t.home.timelineTodayDesc, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-4AvWkjYq-INLHpYropRwHJOBTlYwXtm9T871BaHI5H6c1X3KybhRAlZ8Hn0cn4zOBmH9XqkXlMY6jxOeolO7VJlpWtF7B31se7Zpe_Ul8ZLUg_xKhAC1XBkcXmwbVe8QXvD2a_WT2KyihYmZeq-LrNNm-sLyZxneJMld--U_PnE4JLhksdQLsExnYixhqqTM74Ocu4DbZwOvyfyvyBVwoIfhfw0SFX9dTD-6QHJru4jj3mwqXAvEEz9SOwbcuihyXh_2j23_Fss" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-6 group mt-12 md:mt-0">
                  <div className="w-full h-[220px] bg-surface overflow-hidden z-10 relative">
                    <img alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={item.img} />
                  </div>
                  <div className="z-10 pt-4">
                    <span className="serif-heading text-4xl block mb-2 text-(--color-on-surface)">{item.title}</span>
                    <h4 className="text-[12px] uppercase text-(--color-primary) mb-2 tracking-widest font-bold">{item.subtitle}</h4>
                    <p className="text-sm text-(--color-on-surface-variant)">{item.desc}</p>
                  </div>
                </div>
              ))}
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
