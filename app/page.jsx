"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Heritage from "@/components/sections/Heritage";
import Locations from "@/components/sections/Locations";
import Services from "@/components/sections/Services";
import OfficeShowcase from "@/components/sections/OfficeShowcase";
import FaqTestimonials from "@/components/sections/FaqTestimonials";
import Register from "@/components/sections/Register";
import Footer from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/sections/VideoModal";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLocation, setActiveLocation] = useState("suli");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });

    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setSubmitted(false);

    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      event.currentTarget.reset();

      window.setTimeout(() => {
        setSubmitted(false);
      }, 6000);
    }, 1800);
  }

  return (
    <>
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Partners />
        <Heritage />
        <Locations activeLocation={activeLocation} onSelectLocation={setActiveLocation} />
        <Services />
        <OfficeShowcase />
        <FaqTestimonials />
        <Register submitted={submitted} submitting={submitting} onSubmit={handleSubmit} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
