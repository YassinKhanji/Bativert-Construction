"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 80 && !isMobileMenuOpen) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 bg-(--color-surface)/80 backdrop-blur-md border-b border-subtle transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between relative z-50">
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
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

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={toggleLanguage}
            className="w-8 h-8 rounded-full border border-transparent hover:border-(--color-on-surface-variant) hover:bg-(--color-surface-container) flex items-center justify-center text-[10px] uppercase font-bold tracking-[0.1em] text-(--color-on-surface-variant) transition-all mr-2 cursor-pointer"
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-(--color-primary) focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full bg-(--color-surface) border-b border-subtle transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-6 py-8 flex flex-col space-y-6 text-xl">
          <p className="text-[12px] uppercase tracking-widest text-(--color-on-surface-variant) font-bold mb-2">
            {t.footer?.pages || "PAGES"}
          </p>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-(--color-primary) transition-colors">
            {language === 'en' ? 'Home' : 'Accueil'}
          </Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-(--color-primary) transition-colors">
            {t.nav.about}
          </Link>
          <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-(--color-primary) transition-colors">
            {t.nav.services}
          </Link>
          <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-(--color-primary) transition-colors">
            {t.nav.projects}
          </Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-(--color-primary) transition-colors">
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </nav>
  );
}
