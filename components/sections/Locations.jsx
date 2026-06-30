"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { locations } from "@/components/data";
import { SectionTag } from "@/components/ui/Logo";

const locationKeys = ["suli", "south", "sadus"];

export default function Locations({ activeLocation, onSelectLocation }) {
  const active = locations[activeLocation];
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const gallery = active.gallery || [];
  const previewImages = gallery.slice(0, 3);
  const isGalleryOpen = activeImageIndex !== null;

  useEffect(() => {
    setActiveImageIndex(null);
  }, [activeLocation]);

  function openGallery(index) {
    setActiveImageIndex(index);
  }

  function closeGallery() {
    setActiveImageIndex(null);
  }

  function showPreviousImage() {
    setActiveImageIndex((currentIndex) => (currentIndex === 0 ? gallery.length - 1 : currentIndex - 1));
  }

  function showNextImage() {
    setActiveImageIndex((currentIndex) => (currentIndex === gallery.length - 1 ? 0 : currentIndex + 1));
  }

  return (
    <section id="locations" className="py-32 bg-stoneGray/30 border-y border-gray-200/40 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 font-madani" data-aos="fade-up">
          <div className="max-w-2xl">
            <SectionTag>المميزات التنافسية ومواقعنا</SectionTag>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-[1.45] balanced-text">تجربة تخزين مثالية في كل تفصيل فني</h2>
          </div>
          <p className="text-gray-500 font-semibold text-sm sm:text-base max-w-sm mt-4 md:mt-0 leading-[2] border-r-2 border-gold pr-4 pretty-text">
            نختار مواقعنا بعناية فائقة لنضمن انسيابية الحركة وسهولة الوصول إلى الطرق اللوجستية الرئيسية بمدينة الرياض.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 font-madani">
          <div className="lg:col-span-4 flex flex-col gap-4">
            {locationKeys.map((key) => {
              const location = locations[key];
              const isActive = key === activeLocation;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => onSelectLocation(key)}
                  className={`text-right cursor-pointer p-6 rounded-2xl bg-white transition-all duration-300 ${isActive ? "border-2 border-gold shadow-aureo-soft" : "border border-gray-150 hover:border-gold/30 hover:shadow-aureo-soft"}`}
                >
                  <div className="flex justify-between items-center mb-3 gap-3">
                    <h3 className="text-lg font-bold text-navy-950">{location.shortTitle}</h3>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${location.regionClass}`}>{location.region}</span>
                  </div>
                <p className="text-xs text-gray-500 leading-[1.9]">{location.cardDesc}</p>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between bg-white border border-gray-100 rounded-[2rem] p-6 shadow-aureo-deep relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-36 h-36 bg-skyAureo-100 rounded-full blur-2xl" />
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-gray-100">
              <div>
                <h4 className="text-xl font-bold text-navy-950">{active.title}</h4>
                <p className="text-xs text-gray-400 mt-2 leading-[1.9] pretty-text">{active.desc}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs font-bold text-navy-950 bg-stoneGray px-3 py-1.5 rounded-lg">{active.tag1}</span>
                <span className="text-xs font-bold text-gold-dark bg-gold/10 px-3 py-1.5 rounded-lg">{active.tag2}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              {previewImages.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => openGallery(index)}
                  className="group relative h-24 sm:h-32 rounded-2xl overflow-hidden border border-gray-100 bg-stoneGray shadow-inner focus:outline-none focus:ring-2 focus:ring-gold"
                  aria-label={`فتح صورة ${index + 1} من ${active.shortTitle}`}
                >
                  <Image
                    src={image}
                    alt={`${active.shortTitle} صورة ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 18vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {index === 2 && gallery.length > 3 ? (
                    <span className="absolute inset-0 flex items-center justify-center bg-navy-950/55 text-white text-sm sm:text-base font-bold">
                      +{gallery.length - 3}
                    </span>
                  ) : null}
                </button>
              ))}
            </div>

            <div className="h-80 w-full rounded-2xl overflow-hidden shadow-inner border border-gray-100 relative">
              <iframe title={active.title} src={active.map} width="100%" height="100%" style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }} allowFullScreen loading="lazy" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden shadow-aureo-soft" data-aos="zoom-in-up">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-4 border-l border-gray-100 pl-6">
              <h4 className="text-xl sm:text-2xl font-bold text-navy-950 mb-2">مزايا مشتركة في جميع المواقع</h4>
              <p className="text-sm sm:text-base text-gold font-bold">تأتيكم متكاملة ومجهزة للتشغيل الفوري</p>
            </div>
            <div className="lg:col-span-8 text-sm sm:text-base text-gray-500 leading-[2] font-semibold pretty-text">
              في كل مواقعنا، نحرص على تقديم جودة بناء عالية، وعزل حراري ومائي متكامل، وتصميم عملي يشمل مكتباً إدارياً فخماً ملحقاً ودورة مياه خاصة بكل مستودع، لتوفير بيئة عمل مريحة تدعم نمو أعمالك وتحقق أعلى معايير الأمان والسلامة.
            </div>
          </div>
        </div>
      </div>

      {isGalleryOpen ? (
        <div className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={`ألبوم صور ${active.shortTitle}`}>
          <button
            type="button"
            onClick={closeGallery}
            className="absolute top-4 left-4 w-11 h-11 rounded-full bg-white/10 border border-white/15 text-white hover:bg-gold hover:text-navy-950 transition-colors flex items-center justify-center"
            aria-label="إغلاق الألبوم"
          >
            <i className="fa-solid fa-xmark" />
          </button>

          <button
            type="button"
            onClick={showNextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/15 text-white hover:bg-gold hover:text-navy-950 transition-colors flex items-center justify-center"
            aria-label="الصورة التالية"
          >
            <i className="fa-solid fa-chevron-right" />
          </button>

          <div className="relative w-full max-w-5xl h-[68vh] sm:h-[76vh]">
            <Image
              src={gallery[activeImageIndex]}
              alt={`${active.shortTitle} صورة ${activeImageIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/45 px-4 py-2 text-white text-xs font-bold">
              {activeImageIndex + 1} / {gallery.length}
            </div>
          </div>

          <button
            type="button"
            onClick={showPreviousImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/15 text-white hover:bg-gold hover:text-navy-950 transition-colors flex items-center justify-center"
            aria-label="الصورة السابقة"
          >
            <i className="fa-solid fa-chevron-left" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
