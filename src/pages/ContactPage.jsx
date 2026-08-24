import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../components/layout/Navigation";
import { Contact } from "../components/contact/Contact";
import { Footer } from "../components/footer/Footer";

export const ContactPage = () => {
  return (
    <div className="relative min-h-screen bg-[#F4F4F0] text-[#050505] select-none overflow-x-hidden">
      {/* Top Header / Navigation */}
      <header className="px-6 sm:px-12 lg:px-20 border-b border-[rgba(0,0,0,0.1)] bg-[#F4F4F0]/90 backdrop-blur-md sticky top-0 z-50">
        <Navigation />
      </header>

      {/* Back Link Header Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-8 pb-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-heading tracking-widest text-[#555555] hover:text-[#050505] transition-colors duration-300 uppercase group cursor-pointer"
        >
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>BACK TO HOME</span>
        </Link>
      </div>

      {/* Contact Section */}
      <main className="w-full">
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
