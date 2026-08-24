import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../components/layout/Navigation";
import { Footer } from "../components/footer/Footer";

export const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F4F4F0] select-none flex flex-col justify-between overflow-x-hidden">
      {/* Top Header / Navigation */}
      <header className="px-6 sm:px-12 lg:px-20 border-b border-[rgba(244,244,240,0.08)] bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50">
        <Navigation />
      </header>

      {/* Main 404 Visual Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-24 sm:py-32 flex flex-col items-center justify-center text-center my-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EC4899] animate-ping"></span>
          <span className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-[#A0A0A0]">
            [ 404 // SIGNAL LOST ]
          </span>
        </div>

        <h1 className="text-8xl sm:text-9xl lg:text-[14rem] font-extrabold font-heading tracking-tighter uppercase leading-[0.8] accent-gradient-text mb-4">
          404
        </h1>

        <h2 className="text-2xl sm:text-4xl font-bold font-heading uppercase text-[#F4F4F0] tracking-tight mb-6">
          PAGE NOT FOUND
        </h2>

        <p className="max-w-md text-base sm:text-lg text-[#A0A0A0] font-light leading-relaxed mb-10">
          The requested coordinate does not exist or has been relocated within the architecture.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/"
            className="pill-button group cursor-pointer"
          >
            <span>BACK HOME</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>

          <Link
            to="/work"
            className="px-8 py-3.5 rounded-full border border-[rgba(244,244,240,0.2)] text-xs font-heading font-bold tracking-[0.2em] uppercase text-[#F4F4F0] hover:bg-[rgba(244,244,240,0.1)] transition-all duration-300 cursor-pointer"
          >
            BACK TO WORK
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
