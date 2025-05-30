'use client'

import { CheckCircle } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const About: React.FC = () => (
  <section
    id="about"
    className="py-20 px-6 text-[#F0DFAD]"
    style={{
      backgroundImage:
        'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 20%, rgba(0,0,0,0.7) 60%), linear-gradient(to bottom right, #563F1B, #76431E)',
    }}
  >
    <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-between items-start gap-12 md:gap-24">
      
      {/* Text Content */}
      <div className="flex-1 text-left" data-aos="fade-up" data-aos-delay='100'>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#EDF0DA]">
          About Our Craft
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-2 text-[#EDF0DA] font-semibold">
          Our team specializes in custom woodworking, furniture making, cabinetry, and renovations —
          always focusing on precision and attention to detail.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 text-white/80">
          Carpentry blends skill and creativity to transform raw wood into functional works of art.
        </p>
        <ul className="space-y-4 mb-6">
          {[
            'Custom woodworking & cabinetry',
            'Renovations & home improvements',
            'Quality craftsmanship, locally owned',
          ].map((text, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="text-[#A67C52] w-6 h-6 mt-1" />
              <span className="text-lg md:text-xl text-[#EBEED8]">{text}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
          We believe in using the finest materials and traditional techniques to create beautiful,
          lasting results.
        </p>
      </div>

      {/* Image Content */}
      <div
        className="flex-1 flex justify-center md:justify-end"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="relative w-full max-w-[700px] group border-4 border-[#A67C52] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">

          {/* Top Left Corner */}
          <span
            className="absolute top-4 left-4 w-6 h-6 border-t-4 border-l-4 border-[#A67C52] z-10
                       transition-all duration-300 ease-in-out delay-75
                       group-hover:-translate-x-2 group-hover:-translate-y-2"
          />

          {/* Bottom Right Corner */}
          <span
            className="absolute bottom-4 right-4 w-6 h-6 border-b-4 border-r-4 border-[#A67C52] z-10
                       transition-all duration-300 ease-in-out delay-75
                       group-hover:translate-x-2 group-hover:translate-y-2"
          />

          {/* Image */}
          <Image
            src="/images/about.jpg"
            alt="Interior of workshop showing craftsmanship"
            width={1200}
            height={700}
            className="w-full h-auto object-cover z-0"
            priority
          />
        </div>
      </div>
    </div>
  </section>
)

export default About
