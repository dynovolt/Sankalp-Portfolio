import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { profile } from "@/constants/profile";
import { socials } from "@/constants/socials";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Sankalp S | Software Engineer | AI Researcher`,
  description: `Portfolio of Sankalp S, Computer Science Engineering student (2023–2027), AI Researcher, Software Engineer, and Product Builder.`,
  metadataBase: new URL("https://sankalps.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Sankalp S | Software Engineer | AI Researcher`,
    description: `Portfolio of Sankalp S, Computer Science Engineering student (2023–2027), AI Researcher, Software Engineer, and Product Builder.`,
    url: "https://sankalps.com",
    siteName: `Sankalp S Headquarters`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Sankalp S | Software Engineer | AI Researcher`,
    description: `Portfolio of Sankalp S, Computer Science Engineering student (2023–2027), AI Researcher, Software Engineer, and Product Builder.`,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data Schema for Entity
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": profile.fullName,
    "jobTitle": profile.currentRole,
    "url": "https://sankalps.com",
    "sameAs": [
      socials.github.url,
      socials.linkedin.url
    ],
    "description": profile.heroSubtitle,
    "knowsAbout": profile.tags
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <div className="grain-overlay" />
          <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <main className="flex-grow flex flex-col items-center">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
