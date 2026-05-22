"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-(--color-surface) pt-32 pb-12 border-t border-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-6">
            <div className="text-6xl font-bold tracking-tight serif-heading mb-12 uppercase text-(--color-primary)">
              BATI VERT
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-widest text-(--color-on-surface-variant) mb-4 font-bold">
              {t.footer.pages}
            </p>
            <ul className="space-y-2 text-sm text-(--color-on-surface-variant)">
              <li>
                <Link href="/" className="hover:text-(--color-primary) transition-colors">{t.nav.about === "About Us" ? "Home" : "Accueil"}</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-(--color-primary) transition-colors">{t.nav.about}</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-(--color-primary) transition-colors">{t.nav.services}</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-(--color-primary) transition-colors">{t.nav.projects}</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-(--color-primary) transition-colors">{t.nav.contact}</Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-widest text-(--color-on-surface-variant) mb-4 font-bold">
              {t.footer.inquiries}
            </p>
            <p className="text-sm leading-relaxed text-(--color-on-surface-variant) mb-4">
              {t.footer.inquiryText}
              <br />
              <a
                href="mailto:Bativertconstruction@gmail.com"
                className="text-(--color-primary) underline font-medium break-all"
              >
                Bativertconstruction@gmail.com
              </a>
            </p>
            <p className="text-sm text-(--color-on-surface-variant)">+1 438 992 2468</p>
          </div>
        </div>
        <div className="pt-8 border-t border-subtle flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-(--color-on-surface-variant) font-bold">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
