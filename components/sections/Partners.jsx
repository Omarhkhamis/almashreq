"use client";

import Image from "next/image";
import { useRef } from "react";

const partners = [
  { name: "المراعي", image: "/partners/almaray.webp" },
  { name: "Dealer", image: "/partners/dealer-logo.webp" },
  { name: "Al Jazirah", image: "/partners/Al-Jazirah-ar-logo.webp" },
  { name: "أبو معطي", image: "/partners/logo-abomoati-updated-01-1024x325.webp" },
  { name: "Karaz Linen", image: "/partners/Copy-of-Karaz-linen-logo-En-Gray.webp" },
  { name: "شريك", image: "/partners/images-jpeg.webp" },
  { name: "شريك", image: "/partners/274bdf41cb02.webp" },
  { name: "شريك", image: "/partners/1631380073041.webp" },
  { name: "شريك", image: "/partners/images-png.webp" },
  { name: "شريك", image: "/partners/images-1.webp" },
  { name: "شريك", image: "/partners/images-2.webp" },
  { name: "شريك", image: "/partners/1decf6cca4f14.webp" },
  { name: "شريك", image: "/partners/ec-71-1.webp" }
];

export default function Partners() {
  const sliderRef = useRef(null);
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  function handlePointerDown(event) {
    const slider = sliderRef.current;
    if (!slider) return;

    dragState.current = {
      isDown: true,
      startX: event.clientX,
      scrollLeft: slider.scrollLeft
    };
    slider.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event) {
    const slider = sliderRef.current;
    if (!slider || !dragState.current.isDown) return;

    const distance = event.clientX - dragState.current.startX;
    slider.scrollLeft = dragState.current.scrollLeft - distance;
  }

  function endDrag(event) {
    const slider = sliderRef.current;
    dragState.current.isDown = false;

    if (slider?.hasPointerCapture(event.pointerId)) {
      slider.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <section id="partners" className="py-20 bg-white border-y border-gray-100 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="text-center mb-10 font-madani">
          <span className="text-xs font-bold text-gold uppercase tracking-widest">شركاء النجاح</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mt-3">شركاؤنا</h2>
        </div>

        <div
          ref={sliderRef}
          className="partners-slider flex overflow-x-auto snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
          aria-label="شعارات شركاء المشرق للاستثمار"
        >
          {partners.map((partner, index) => (
            <div key={`${partner.image}-${index}`} className="shrink-0 basis-1/2 lg:basis-1/5 px-2 sm:px-3 snap-start">
              <div className="h-28 sm:h-32 rounded-lg border border-gray-100 bg-gray-50/80 flex items-center justify-center p-5 transition-all duration-300 hover:border-gold/50 hover:bg-white hover:shadow-lg">
                <div className="relative w-full h-16 sm:h-20">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    draggable="false"
                    className="object-contain grayscale opacity-75 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
