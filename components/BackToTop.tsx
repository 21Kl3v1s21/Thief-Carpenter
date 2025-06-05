'use client'

import { useEffect, useState } from 'react'
import { FaHammer } from 'react-icons/fa'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')

    const handleScroll = () => {
      const threshold = hero?.offsetHeight || 400
      setIsVisible(window.scrollY > threshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full transition-opacity duration-300 shadow-lg text-white bg-[#A67C52] hover:bg-[#F0DFAD] hover:text-black ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <FaHammer />
    </button>
  )
}
