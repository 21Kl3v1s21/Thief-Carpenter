import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://thief-carpenter.vercel.app'),
  title: 'Thief Carpentry | Custom Woodworking & Renovation',
  description:
    'Expert craftsmanship in woodworking, cabinetry, and renovations. Built with tradition, finished with passion.',
  keywords: ['custom carpentry', 'woodworking', 'cabinetry', 'renovation', 'home improvement'],
  openGraph: {
    title: 'Thief Carpentry',
    description: 'Built with tradition, finished with passion.',
    url: 'https://thief-carpenter.vercel.app',
    siteName: 'Thief Carpentry',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Thief Carpentry hero image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thief Carpentry',
    description: 'Custom woodworking and renovation services.',
    images: ['/images/hero.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen scroll-smooth">
        <Navbar/>
        <main className="flex-grow">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
