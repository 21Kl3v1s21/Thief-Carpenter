'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } shadow px-6 py-4 text-white`}
      style={{
        backgroundImage:
          'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), linear-gradient(to top right, #563F1B, #76431E)',
      }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Crafted Woodworks</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6">
          <NavLinks />
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 flex flex-col items-center animate-slideDown">
          <NavLinks onClick={() => setIsOpen(false)} />
        </ul>
      )}
    </nav>
  )
}

const NavLinks = ({ onClick }: { onClick?: () => void }) => (
  <>
    <li><Link href="/#home" onClick={onClick}>Home</Link></li>
    <li><Link href="/#about" onClick={onClick}>About</Link></li>
    <li><Link href="/#services" onClick={onClick}>Services</Link></li>
    <li><Link href="/#testimonials" onClick={onClick}>Testimonials</Link></li>
    <li><Link href="/#faq" onClick={onClick}>FAQs</Link></li>
    <li><Link href="/#contact" onClick={onClick}>Contact</Link></li>
  </>
)

export default Navbar
