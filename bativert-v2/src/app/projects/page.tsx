"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  { name: "1Photo projet bati vert", image: "/projects/1Photo-projet-bati-vert.jpg", category: "Construction" },
  { name: "1Photo Projet pour Client", image: "/projects/1Photo-Projet-pour-Client.jpg", category: "Construction" },
  { name: "3 plex Berri", image: "/projects/3-plex-Berri.jpg", category: "Multi-Residential" },
  { name: "3 plex Henessy", image: "/projects/3-plex-Henessy.jpeg", category: "Multi-Residential" },
  { name: "Boulevard Yves prévost", image: "/projects/Boulevard-Yves-pr-vost.jpg", category: "Residential" },
  { name: "Ecole", image: "/projects/Ecole.jpg", category: "Institutional" },
  { name: "Gatineau", image: "/projects/Gatineau.jpg", category: "Residential" },
  { name: "Lynda", image: "/projects/Lynda.jpg", category: "Residential" },
  { name: "Pincourt", image: "/projects/Pincourt.jpg", category: "Residential" },
  { name: "Projet 2KH", image: "/projects/Projet-2KH.jpg", category: "Renovation" },
  { name: "Rockland Punt Roma", image: "/projects/Rockland-Punt-Roma.jpeg", category: "Commercial" },
  { name: "Shawarma Original", image: "/projects/Shawarma-Original.jpeg", category: "Commercial" },
  { name: "St Mark", image: "/projects/St-Mark.jpg", category: "Institutional" },
  { name: "Sylvain 1", image: "/projects/Sylvain-1.jpg", category: "Residential" },
  { name: "Sylvain 2", image: "/projects/Sylvain-2.jpg", category: "Residential" },
  { name: "Zegmi", image: "/projects/Zegmi.jpg", category: "Residential" }
];

const generateSlug = (name: string) => name.replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-').toLowerCase();

export default function Projects() {
  const { t } = useLanguage();

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto min-h-screen">
        <SectionHeader subtitle={t.projects.sub} title={t.projects.title} />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((project, index) => {
            const isWide = index % 4 === 0 || index % 4 === 3;
            const slug = generateSlug(project.name);
            const translatedCategory = t.projects.categories[project.category as keyof typeof t.projects.categories] || project.category;
            return (
              <Link href={`/projects/${slug}`} key={index} className={`group cursor-pointer block ${isWide ? 'md:col-span-8' : 'md:col-span-4'}`}>
                <div className={`${isWide ? 'aspect-video md:aspect-[16/9]' : 'aspect-[3/4] md:aspect-[3/4]'} bg-(--color-surface-container) overflow-hidden mb-4 relative`}>
                   <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                   </div>
                </div>
                <h3 className="serif-heading text-2xl text-(--color-on-surface) group-hover:text-(--color-primary) transition-colors">{project.name}</h3>
                <p className="text-[10px] uppercase text-(--color-primary) font-bold tracking-widest mt-2">{translatedCategory}</p>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
