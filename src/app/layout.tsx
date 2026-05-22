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
  title: "BATI VERT | General Contracting & Construction in Montreal",
  description: "Expert general contracting, sustainable construction, and turnkey services in Montreal. BATI VERT specializes in bespoke design and master renovations.",
  metadataBase: new URL('https://bativertconstruction.org'),
  alternates: {
    canonical: '/',
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
      <body className="min-h-full flex flex-col">
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
