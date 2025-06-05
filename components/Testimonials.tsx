"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/data/data";

export default function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const [itemWidth, setItemWidth] = useState(0);

  useLayoutEffect(() => {
    if (trackRef.current) {
      const firstItem = trackRef.current.children[0] as HTMLDivElement;
      setItemWidth(firstItem.offsetWidth + 32); // +32 for gap-8
    }
  }, []);

  useAnimationFrame((_, delta) => {
    const speed = 0.05;
    if (!trackRef.current || !itemWidth) return;

    x.current -= delta * speed;

    const maxScroll = itemWidth * testimonials.length;

    if (Math.abs(x.current) >= maxScroll) {
      x.current = 0;
    }

    trackRef.current.style.transform = `translateX(${x.current}px)`;
  });

  return (
    <section id='testimonials' className="py-24 overflow-hidden" 
    style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 30%, rgba(0,0,0,0.7) 70%), linear-gradient(to bottom right, #563F1B, #76431E)',
      }}>
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F0DFAD]">
          Testimonials
        </h2>
        <p className="text-[#EDF0DA] mt-2">
          What our clients say about working with us
        </p>
      </div>

      <div className="relative w-full overflow-hidden" ref={containerRef}>
        <div
          ref={trackRef}
          className="flex w-max gap-8 will-change-transform"
          style={{ transform: "translateX(0)" }}
        >
          {/* Duplicate only visible testimonials */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="min-w-[300px] max-w-sm bg-[#A67C52]/20 text-white rounded-xl p-6 shadow-lg flex-shrink-0"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 relative rounded-full overflow-hidden border-2 border-[#A67C52]">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#A67C52]/70">{t.name}</p>
                  <p className="text-sm text-white">{t.title}</p>
                </div>
              </div>
              <p className="italic text-[#F0DFAD]">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
