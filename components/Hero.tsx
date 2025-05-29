'use client'

import dynamic from 'next/dynamic'

const HouseCanvas = dynamic(() => import('./HouseCanvas'), { ssr: false })

const Hero = () => (
    <section
        className="relative min-h-[88.4vh] flex items-center justify-center text-[#F0DFAD] overflow-hidden"
        style={{
            backgroundImage: 'linear-gradient(to bottom right, #563F1B, #76431E)',
        }}
    >
        {/* Hero Content */}
        <div className="
            relative z-20 w-full max-w-6xl mx-4 md:mx-8 flex flex-col md:flex-row items-center justify-between
            min-h-[350px] md:min-h-[400px] lg:min-h-[450px]
        ">
            {/* Left Text Section */}
            <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-8">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-xl tracking-tight">
                    Thief Carpentry
                </h1>

                <p className="text-lg md:text-xl text-[#EDF0DA] max-w-xl leading-relaxed drop-shadow">
                    Built with tradition, finished with passion.
                </p>

                <ul className="mt-6 mb-6 text-base md:text-lg text-[#EDF0DA] space-y-2">
                    <li>• Custom woodworking & cabinetry</li>
                    <li>• Renovations & home improvements</li>
                    <li>• Quality craftsmanship, locally owned</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="#contact"
                        className="px-6 py-3 bg-[#A67C52] hover:bg-[#8B5E34] text-white font-semibold rounded-lg shadow-md transition"
                    >
                        Contact Us
                    </a>
                    <a
                        href="#portfolio"
                        className="px-6 py-3 border border-[#A67C52] hover:bg-[#A67C52]/20 text-[#F0DFAD] font-semibold rounded-lg transition"
                    >
                        View Work
                    </a>
                </div>

            </div>

            {/* Right 3D Model Section */}
            <div className="flex-1 flex justify-end items-center w-full h-[320px] md:h-[420px] lg:h-[520px]">
                <div className="w-full max-w-[600px] h-full mr-[-40px] md:mr-[-60px] lg:mr-[-100px]">
                    <HouseCanvas />
                </div>
            </div>
        </div>
        <a
            href="#about"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#F0DFAD] hover:text-[#fff] transition duration-200"
            >
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </a>
    </section>
    
)

export default Hero
