"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const images = [
  "/projects/1Photo-projet-bati-vert.jpg",
  "/projects/3-plex-Berri.jpg",
  "/projects/Ecole.jpg",
  "/projects/Gatineau.jpg",
  "/projects/Lynda.jpg",
  "/projects/Pincourt.jpg",
  "/projects/Projet-2KH.jpg",
  "/projects/Rockland-Punt-Roma.jpeg",
  "/projects/Shawarma-Original.jpeg",
  "/projects/St-Mark.jpg"
];

export default function HorizontalGallery() {
  const { language } = useLanguage();
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateScrollRange = () => {
      if (containerRef.current) {
        setScrollRange(containerRef.current.scrollWidth - window.innerWidth);
      }
    };
    
    updateScrollRange();
    window.addEventListener("resize", updateScrollRange);
    return () => window.removeEventListener("resize", updateScrollRange);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const x = useTransform(smoothProgress, [0, 1], [0, -scrollRange]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-(--color-surface-container)">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div ref={containerRef} style={{ x }} className="flex gap-8 px-6 lg:px-12 items-center w-max">
          
          {/* Intro Slide */}
          <div className="min-w-[80vw] md:min-w-[40vw] flex flex-col justify-center shrink-0">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold serif-heading text-(--color-primary) mb-6">
              {language === 'en' ? "Our Legacy" : "Notre Héritage"}
            </h2>
            <p className="text-lg md:text-xl text-(--color-on-surface-variant) max-w-md">
              {language === 'en' 
                ? "A showcase of our premium projects that redefine modern living and architectural excellence." 
                : "Une vitrine de nos projets haut de gamme qui redéfinissent la vie moderne et l'excellence architecturale."}
            </p>
          </div>

          {/* Image Slides */}
          {images.map((src, idx) => (
            <div key={idx} className="relative min-w-[80vw] md:min-w-[50vw] h-[60vh] md:h-[70vh] rounded-sm overflow-hidden shadow-2xl shrink-0 group">
              <Image 
                src={src} 
                alt={`Project ${idx + 1}`} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                sizes="(max-width: 768px) 80vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
            </div>
          ))}

          {/* Final CTA Slide */}
          <div className="min-w-[80vw] md:min-w-[40vw] flex flex-col justify-center items-center text-center px-12 shrink-0">
            <h3 className="text-3xl md:text-5xl font-bold serif-heading mb-8">
              {language === 'en' ? "Ready to see more?" : "Prêt à en voir plus ?"}
            </h3>
            <Link 
              href="/projects" 
              className="px-8 py-4 bg-(--color-primary) text-white font-bold uppercase tracking-widest text-sm hover:bg-transparent hover:text-(--color-primary) border-2 border-(--color-primary) transition-all"
            >
              {language === 'en' ? "View All Projects" : "Voir Tous Les Projets"}
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
