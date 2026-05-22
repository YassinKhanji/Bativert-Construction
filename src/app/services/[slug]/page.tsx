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

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tKey = SLUG_MAP[params.slug];
  if (!tKey) return { title: "Not Found" };
  
  // Using English for static metadata title
  const t = translations.en.servicePages[tKey];
  
  return {
    title: `BATI VERT | ${params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
    description: t.solution,
    alternates: {
      canonical: `/services/${params.slug}`
    }
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const tKey = SLUG_MAP[params.slug];
  if (!tKey) {
    notFound();
  }

  return <ServicePageClient slug={params.slug} tKey={tKey} />;
}

// We use a client component to access the LanguageContext dynamically for translations
import ServicePageClient from "./ServicePageClient";
