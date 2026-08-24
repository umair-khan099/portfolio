import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { Services } from "./components/services/Services";
import { Projects } from "./components/projects/Projects";
import { Testimonials } from "./components/testimonials/Testimonials";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { AboutPage } from "./pages/AboutPage";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <main className="relative min-h-screen bg-[#050505] text-[#F4F4F0]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
