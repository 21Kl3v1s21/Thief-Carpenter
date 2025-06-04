'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faq } from '@/data/data'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      className="py-24 px-6 text-[#EBEED8] bg-cover bg-center"
      style={{
      backgroundImage:
        'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 20%, rgba(0,0,0,0.7) 80%), linear-gradient(to top right, #563F1B, #76431E)',
    }}
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F0DFAD]">Frequently Asked Questions</h2>
        <p className="text-[#EDF0DA]/80 mt-2">
          Have a question? We’ve answered the most common ones below.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 min-h-[355px]">
        {faq.map((item, i) => (
          <div
            key={i}
            className="bg-[#B39166]/30 rounded-xl backdrop-blur-sm border border-[#A67C52]/40 overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full text-left px-6 py-4 font-semibold text-[#F0DFAD] focus:outline-none flex justify-between items-center"
            >
              <span>{item.question}</span>
              <span className="text-[#F0DFAD] text-xl">{openIndex === i ? '−' : '+'}</span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-4 text-[#EDF0DA]/90 text-sm leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}
