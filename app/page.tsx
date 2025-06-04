import About from '@/components/About'
import Hero from '@/components/Hero'
import Tiers from '@/components/Tiers'
import Testimonials from '@/components/Testimonials'
import FAQSection from '@/components/FAQSection'

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Tiers/>
      <Testimonials/>
      <FAQSection/>
    </>
  )
}
