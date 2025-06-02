import About from '@/components/About'
import Hero from '@/components/Hero'
import Tiers from '@/components/Tiers'

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Tiers/>
    </>
  )
}

export const metadata = {
  title: 'Thief Carpentry | Custom Woodworking & Renovation',
  description:
    'Expert craftsmanship in woodworking, cabinetry, and renovations. Built with tradition, finished with passion.',
  keywords: ['custom carpentry', 'woodworking', 'cabinetry', 'renovation', 'home improvement'],
  openGraph: {
    title: 'Thief Carpentry',
    description: 'Built with tradition, finished with passion.',
    url: 'https://thief-carpenter.vercel.app', // Replace with your real URL
    siteName: 'Thief Carpentry',
    images: [
      {
        url: '/images/hero.jpg', // Make sure this image exists
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
}