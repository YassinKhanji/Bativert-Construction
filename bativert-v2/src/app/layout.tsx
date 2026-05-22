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
  title: "BATI VERT | Building Your Sustainable Future",
  description: "Expertise in Turnkey Services, Bespoke Design, and Master Renovations.",
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
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
