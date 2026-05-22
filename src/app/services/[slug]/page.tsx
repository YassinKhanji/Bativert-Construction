import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { translations } from "@/translations";
import Image from "next/image";

// Define the valid slugs and their translation keys
const SLUG_MAP: Record<string, keyof typeof translations.en.servicePages> = {
  "architectural-design": "architecturalDesign",
  "high-end-renovations": "highEndRenovations",
  "turnkey-construction": "turnkeyConstruction",
  "conception": "conception",
  "interior-design": "interiorDesign",
  "engineering": "engineering",
  "new-construction": "newConstruction",
  "home-expansion": "homeExpansion",
  "renovation": "renovation",
  "landscaping": "landscaping",
};

export async function generateStaticParams() {
  return Object.keys(SLUG_MAP).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tKey = SLUG_MAP[slug];
  if (!tKey) return { title: "Not Found" };
  
  // Using English for static metadata title
  const t = translations.en.servicePages[tKey];
  
  return {
    title: `BATI VERT | ${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
    description: t.solution,
    alternates: {
      canonical: `/services/${slug}`
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tKey = SLUG_MAP[slug];
  if (!tKey) {
    notFound();
  }

  return <ServicePageClient slug={slug} tKey={tKey} />;
}

// We use a client component to access the LanguageContext dynamically for translations
import ServicePageClient from "./ServicePageClient";
