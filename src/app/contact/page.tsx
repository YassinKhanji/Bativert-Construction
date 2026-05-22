"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader subtitle={t.contact.sub} title={t.contact.title} />
            <p className="text-lg text-(--color-on-surface-variant) mb-12 max-w-md">
              {t.contact.desc}
            </p>
            <div className="space-y-8">
              <div>
                <h4 className="text-[12px] uppercase mb-2 text-(--color-primary) font-bold">{t.contact.officeTitle}</h4>
                <p className="text-sm text-(--color-on-surface-variant)">241 Rue Maurice Richard<br />Vaudreuil, QC<br />J7V0A6, Canada</p>
              </div>
              <div>
                <h4 className="text-[12px] uppercase mb-2 text-(--color-primary) font-bold">{t.contact.contactTitle}</h4>
                <p className="text-sm text-(--color-on-surface-variant)"><span onClick={() => window.location.href = `mailto:Bativertconstruction${'@'}gmail.com`} className="underline break-all cursor-pointer">Bativertconstruction{'@'}gmail.com</span><br />+1 438 992 2468<br />📍 Serving Montreal & Surrounding Regions</p>
              </div>
            </div>
          </div>
          <div className="bg-(--color-surface-container-low) p-10 border border-subtle shadow-xl">
            <h3 className="serif-heading text-2xl mb-8 text-(--color-on-surface)">{t.contact.msgTitle}</h3>
            <div className="flex flex-col items-center justify-center h-[450px]">
              <div className="text-sm text-left text-(--color-on-surface-variant) leading-relaxed w-full px-2 mb-6 mt-4">
                <p className="mb-6 text-center">{t.contact.msgDesc1}</p>
                <p className="font-bold mb-3 text-(--color-on-surface) uppercase text-[10px] tracking-wider">{t.contact.msgDesc2}</p>
                <ul className="list-disc list-outside space-y-2 ml-4">
                  <li>{t.contact.msgList1}</li>
                  <li>{t.contact.msgList2}</li>
                  <li>{t.contact.msgList3}</li>
                </ul>
              </div>
              <button onClick={() => window.location.href = `mailto:Bativertconstruction${'@'}gmail.com?subject=Contact%20Message`} className="w-full text-center px-8 py-4 uppercase text-[10px] tracking-[0.3em] font-bold transition-all bg-(--color-primary) text-white hover:bg-(--color-on-primary-fixed-variant) mt-4 block">
                {t.contact.submitBtn}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
