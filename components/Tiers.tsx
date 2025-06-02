'use client'

import Image from 'next/image'
import { tiers } from '@/data/data'
import { cn } from '@/lib/utils'
import { CardSpotlight } from '@/components/ui/card-spotlight'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TiersSection() {
  return (
    <section
      className="py-24 px-6 text-[#EBEED8] bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
          url('/images/wood-texture.jpg')
        `,
      }}
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0DFAD]">Choose Your Tier</h2>
          <p className="text-lg text-[#EDF0DA]">
            Whether you&#39;re looking for a simple custom job or a complete luxury transformation,
            our tailored packages offer something for every vision and budget.
          </p>
        </motion.div>

        {/* Tier Cards */}
        {tiers.map((tier) => (
          <TierCard key={tier.name} tier={tier} />
        ))}
      </div>
    </section>
  )
}

// TierCard Component
function TierCard({ tier }: { tier: (typeof tiers)[number] }) {
  const isReversed = tier.name === 'Gold'
  const tierImage = `/images/${tier.name.toLowerCase()}.jpg`
  const imageAlt = `${tier.name} tier carpentry image`
  const spotlightColor = Array.isArray(tier.spotlightColor)
    ? `rgb(${tier.spotlightColor.join(',')})`
    : tier.spotlightColor

  const underlineDirection = tier.name === 'Gold' ? 'origin-right' : 'origin-left'

  const motionVariant = {
    hidden: { opacity: 0, x: isReversed ? 40 : -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={motionVariant}
    >
      <CardSpotlight
        color={spotlightColor}
        className="rounded-xl group"
        aria-label={`${tier.name} tier card`}
      >
        <div
          className={cn(
            'flex flex-col lg:flex-row items-center gap-8 p-4 rounded-xl border-4 transition-transform duration-300 bg-[#B39166]/30 backdrop-blur-sm shadow-lg',
            isReversed && 'lg:flex-row-reverse',
            tier.borderColor
          )}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] relative overflow-hidden rounded-xl">
            <Image
              src={tierImage}
              alt={imageAlt}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={tier.name === 'Gold'}
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 p-6 space-y-4">
            <h3
              className={cn(
                'text-3xl font-bold relative inline-block transition-colors duration-300',
                tier.textColor
              )}
            >
              <span className="relative">
                {tier.name}
                <span
                  className={cn(
                    'absolute left-0 bottom-0 h-[2px] w-full scale-x-0 bg-current transform transition-transform duration-300 group-hover:scale-x-100',
                    underlineDirection
                  )}
                />
              </span>
            </h3>

            <p className="text-xl font-semibold">{tier.price}</p>
            <p className="text-black/80">{tier.description}</p>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className="space-y-2"
            >
              {tier.features.map((feature, i) => (
                <motion.li
                  key={i}
                  className="text-black/80 leading-relaxed"
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  • {feature}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Button */}
            <Link
              href={`/tiers/${tier.name.toLowerCase()}`}
              className="inline-block mt-4 px-5 py-2 rounded-md font-semibold border transition-colors duration-300 text-center"
              style={{
                color: tier.color,
                borderColor: tier.color,
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = tier.hoverColor
                e.currentTarget.style.color = '#000'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = tier.color
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </CardSpotlight>
    </motion.div>
  )
}
