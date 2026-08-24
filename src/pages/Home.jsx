import React from "react";
import { Hero } from "../components/hero/Hero";
import { About } from "../components/about/About";
import { Services } from "../components/services/Services";
import { Projects } from "../components/projects/Projects";
import { Testimonials } from "../components/testimonials/Testimonials";
import { Contact } from "../components/contact/Contact";
import { Footer } from "../components/footer/Footer";

export const Home = () => {
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
};
