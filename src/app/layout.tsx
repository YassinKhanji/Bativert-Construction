import type { Metadata } from "next";
import { Libre_Caslon_Text, Work_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const libreCaslon = Libre_Caslon_Text({
  variable: "--font-libre-caslon",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BATI VERT | General Contracting & Construction Company in Montreal",
  description: "Expert general contracting, sustainable construction, and turnkey services in Montreal. BATI VERT specializes in bespoke architectural design, interior design, home expansion, and master renovations.",
  keywords: [
    "general contractor",
    "construction company",
    "Montreal contractor",
    "turnkey construction",
    "home expansion",
    "renovation services",
    "architectural design",
    "interior design",
    "custom home builder",
    "commercial renovations",
    "Bativert"
  ],
  metadataBase: new URL('https://bativertconstruction.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BATI VERT | General Contracting & Construction',
    description: 'Expert general contracting, sustainable construction, and turnkey services in Montreal.',
    url: 'https://bativertconstruction.org',
    siteName: 'BATI VERT Construction',
    images: [
      {
        url: '/home-hero-new.jpg', // Replace with an actual URL once live if absolute is needed
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreCaslon.variable} ${workSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <LanguageProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["GeneralContractor", "LocalBusiness"],
                name: "BATI VERT",
                url: "https://bativertconstruction.org",
                logo: "https://bativertconstruction.org/icon.svg",
                description: "Expert general contracting, sustainable construction, and turnkey services in Montreal. BATI VERT specializes in bespoke design and master renovations.",
                email: "Bativertconstruction@gmail.com",
                telephone: "+1-438-992-2468",
                areaServed: {
                  "@type": "City",
                  name: "Montreal",
                  sameAs: "https://en.wikipedia.org/wiki/Montreal"
                }
              })
            }}
          />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
