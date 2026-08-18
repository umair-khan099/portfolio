import React, { useState } from "react";
import { Preloader } from "./components/layout/Preloader";
import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { Services } from "./components/services/Services";
import { Projects } from "./components/projects/Projects";
import { Testimonials } from "./components/testimonials/Testimonials";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { AmbientBackground } from "./components/common/AmbientBackground";
import { useLenis } from "./hooks/useLenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  // Initialize Lenis smooth scroll synchronized with GSAP ScrollTrigger
  useLenis();

  const handlePreloaderComplete = () => {
    setPreloaderComplete(true);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    });
  };
  return (
    <main className="relative min-h-screen bg-[#050505] text-[#F4F4F0] selection:bg-[#F4F4F0] selection:text-[#050505] overflow-x-hidden">
      {/* Global Cursor-Reactive Ambient Background */}
      <AmbientBackground />

      {/* Cinematic Preloader */}
      {!preloaderComplete && <Preloader onComplete={handlePreloaderComplete} />}

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Section */}
      <About />

      {/* 3. Services Section */}
      <Services />

      {/* 4. Selected Work / Signature Stacked Projects */}
      <Projects />

      {/* 5. Testimonials Section */}
      <Testimonials />

      {/* 6. Contact Section */}
      <Contact />

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}
