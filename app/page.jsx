"use client";

/* global fetch, FormData */

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
  const [submitError, setSubmitError] = useState("");

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

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setSubmitError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone")
        })
      });

      if (!response.ok) {
        throw new Error("send-failed");
      }

      setSubmitting(false);
      setSubmitted(true);
      form.reset();

      window.setTimeout(() => {
        setSubmitted(false);
      }, 6000);
    } catch {
      setSubmitting(false);
      setSubmitError("تعذر إرسال الطلب حالياً. الرجاء المحاولة مرة أخرى أو التواصل معنا مباشرة.");
    }
  }

  return (
    <>
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Heritage />
        <Locations activeLocation={activeLocation} onSelectLocation={setActiveLocation} />
        <Services />
        <OfficeShowcase />
        <FaqTestimonials />
        <Partners />
        <Register submitted={submitted} submitting={submitting} submitError={submitError} onSubmit={handleSubmit} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
