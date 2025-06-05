'use client'

import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const HouseCanvas = dynamic(() => import('./HouseCanvas'), { ssr: false })

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    })
    AOS.refresh()
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-[#F0DFAD] overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 30%, rgba(0,0,0,0.7) 70%), linear-gradient(to bottom right, #563F1B, #76431E)',
      }}
    >
      <div
        className="
          relative z-20 w-full max-w-6xl mx-4 md:mx-8
          flex flex-col lg:flex-row items-center justify-between
          min-h-[350px] md:min-h-[400px] lg:min-h-[450px]
        "
        data-aos="fade-down"
        data-aos-delay="400"
      >
        {/* Text Section */}
        <div
          className="
            flex-1 flex flex-col justify-center items-center lg:items-start
            text-center lg:text-left px-4 sm:px-6 md:px-8
            mt-[-40px] sm:mt-[-60px] lg:mt-0
          "
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-4 drop-shadow-xl tracking-tight">
            Thief
            <br />
            <span className="ml-1 sm:ml-2 md:ml-4 text-[#EDF0DA] font-bold">
              Carpentry
            </span>
          </h1>

          <p
            className="
              text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
              text-[#EDF0DA]
              max-w-[42rem] lg:max-w-[48rem]
              leading-snug lg:leading-normal
              text-center lg:text-left
              drop-shadow mb-4
            "
          >
            Built with tradition, finished with passion to create beautiful work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
                href="#contact"
                className="px-6 py-3 bg-[#A67C52] hover:bg-[#8B5E34] text-white font-semibold rounded-lg shadow-md transition"
                data-aos="fade-right"
                data-aos-delay="200"
            >
                Contact Us
            </a>
            <a
                href="#services"
                className="px-6 py-3 border border-[#A67C52] hover:bg-[#A67C52]/20 text-[#F0DFAD] font-semibold rounded-lg transition"
                data-aos="fade-left"
                data-aos-delay="400"
            >
                View Work
            </a>
          </div>

        </div>

        {/* 3D Model Section */}
        <div className="flex-1 flex justify-center items-center w-full mt-6 lg:mt-0">
          <div
            className="
              w-full
              max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[580px]
              h-[300px] sm:h-[380px] md:h-[440px] lg:h-[520px]
              mx-auto lg:mx-0
            "
          >
            <HouseCanvas />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
