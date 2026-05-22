"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 bg-(--color-surface)/80 backdrop-blur-md border-b border-subtle transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl font-bold tracking-tight serif-heading uppercase text-(--color-primary)">
            BATI VERT
          </div>
        </Link>
        <div className="hidden md:flex items-center space-x-10 text-[10px] uppercase tracking-[0.2em] font-semibold">
          <Link href="/about" className="relative hover:text-(--color-primary) transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-(--color-primary) after:transition-all after:duration-300 hover:after:w-full">
            {t.nav.about}
          </Link>
          <Link href="/services" className="relative hover:text-(--color-primary) transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-(--color-primary) after:transition-all after:duration-300 hover:after:w-full">
            {t.nav.services}
          </Link>
          <Link href="/projects" className="relative hover:text-(--color-primary) transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-(--color-primary) after:transition-all after:duration-300 hover:after:w-full">
            {t.nav.projects}
          </Link>
          <Link href="/contact" className="relative hover:text-(--color-primary) transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-(--color-primary) after:transition-all after:duration-300 hover:after:w-full">
            {t.nav.contact}
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 bg-(--color-primary) text-white border border-(--color-primary) hover:bg-transparent hover:text-(--color-primary) transition-all"
          >
            {t.nav.inquire}
          </Link>
          <button
            onClick={toggleLanguage}
            className="w-10 h-10 rounded-full border border-transparent hover:border-(--color-on-surface-variant) hover:bg-(--color-surface-container) flex items-center justify-center text-[10px] uppercase font-bold tracking-[0.1em] text-(--color-on-surface-variant) hover:text-(--color-primary) transition-all ml-2 cursor-pointer"
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}
