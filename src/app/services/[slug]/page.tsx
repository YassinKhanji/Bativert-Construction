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
  "window-installation": "windowInstallation",
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
  
  const t = translations.en.servicePages[tKey] as any;
  const title = t.metaTitle || `BATI VERT | ${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`;
  const description = t.metaDescription || t.solution || "Bativert Construction Services";
  
  const keywords = slug === "window-installation" ? [
    "window installation Montreal",
    "installation fenetres Montreal",
    "window replacement Montreal",
    "remplacement fenetres Montreal",
    "energy efficient windows Quebec",
    "Energy Star windows Montreal",
    "calfeutrage fenetres Montreal",
    "RBQ window contractor Laval",
    "window installation Longueuil",
    "portes et fenetres Bativert"
  ] : [
    `${slug.replace(/-/g, ' ')} Montreal`,
    "Bativert Construction",
    "General contractor Montreal",
    "RBQ certified contractor"
  ];

  const ogImage = slug === "window-installation" 
    ? "/services/window-installation-1.png" 
    : "/home-hero-new.jpg";

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/services/${slug}`
    },
    openGraph: {
      title,
      description,
      url: `https://bativertconstruction.org/services/${slug}`,
      siteName: "BATI VERT Construction",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      locale: "en_CA",
      type: "website"
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
