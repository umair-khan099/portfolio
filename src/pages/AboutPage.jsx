import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../components/layout/Navigation";
import { Footer } from "../components/footer/Footer";
import { siteData } from "../data/site";

export const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F4F4F0] select-none overflow-x-hidden">
      {/* Top Header / Navigation */}
      <header className="px-6 sm:px-12 lg:px-20 border-b border-[rgba(244,244,240,0.08)] bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50">
        <Navigation />
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-24 flex flex-col gap-20">
        {/* Page Hero Header */}
        <div className="flex flex-col gap-6 items-start border-b border-[rgba(244,244,240,0.08)] pb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-heading tracking-widest text-[#A0A0A0] hover:text-[#F4F4F0] transition-colors duration-300 uppercase group mb-2 cursor-pointer"
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

          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]"></span>
            <span className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-[#A0A0A0]">
              [ PROFILE & ARCHITECTURE SPECS ]
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold font-heading tracking-tighter uppercase text-[#F4F4F0] leading-[0.9]">
            ENGINEERING <span className="accent-gradient-text">& PHILOSOPHY</span>
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-[#A0A0A0] font-light leading-relaxed pt-2">
            A comprehensive overview of full-stack engineering expertise, system architecture,
            and technological specialization.
          </p>
        </div>

        {/* Section 1: Overview & Identity */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-xl sm:text-2xl font-bold font-heading uppercase text-[#F4F4F0] tracking-tight">
              01 // BIOGRAPHY & FOCUS
            </h2>
            <span className="text-xs font-heading tracking-widest text-[#8B5CF6] uppercase block mt-1">
              WHO I AM & BACKGROUND
            </span>
          </div>
          <div className="lg:col-span-8 bg-[#0c0c0e] border border-[rgba(244,244,240,0.12)] rounded-3xl p-8 sm:p-10 flex flex-col gap-6">
            <p className="text-base text-[#F4F4F0]/90 font-light leading-relaxed">
              [ PLACEHOLDER: Detailed personal introduction & developer summary ]
            </p>
            <p className="text-sm text-[#A0A0A0] font-light leading-relaxed border-t border-[rgba(244,244,240,0.08)] pt-4">
              [ PLACEHOLDER: Full-Stack background, core driving motivations, and engineering approach ]
            </p>
          </div>
        </section>

        {/* Section 2: Technical Domains & Architecture */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-xl sm:text-2xl font-bold font-heading uppercase text-[#F4F4F0] tracking-tight">
              02 // CORE CAPABILITIES
            </h2>
            <span className="text-xs font-heading tracking-widest text-[#EC4899] uppercase block mt-1">
              STACK & SYSTEM DESIGN
            </span>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Capability Box 1 */}
            <div className="bg-[#0c0c0e] border border-[rgba(244,244,240,0.1)] rounded-2xl p-6 flex flex-col gap-3">
              <h3 className="font-heading text-base font-bold text-[#F4F4F0] uppercase tracking-wider">
                MERN STACK EXPERTISE
              </h3>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                [ PLACEHOLDER: React, Node.js, Express, MongoDB, Next.js, TypeScript architecture details ]
              </p>
            </div>

            {/* Capability Box 2 */}
            <div className="bg-[#0c0c0e] border border-[rgba(244,244,240,0.1)] rounded-2xl p-6 flex flex-col gap-3">
              <h3 className="font-heading text-base font-bold text-[#F4F4F0] uppercase tracking-wider">
                AI DEVELOPMENT & AGENTS
              </h3>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                [ PLACEHOLDER: Intelligent workflows, LLM integration, agentic tooling, and AI system design ]
              </p>
            </div>

            {/* Capability Box 3 */}
            <div className="bg-[#0c0c0e] border border-[rgba(244,244,240,0.1)] rounded-2xl p-6 flex flex-col gap-3">
              <h3 className="font-heading text-base font-bold text-[#F4F4F0] uppercase tracking-wider">
                DIGITAL ADOPTION PLATFORM / ADOP SDK
              </h3>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                [ PLACEHOLDER: Builder engine, runtime element inspection, step flows, and SDK architecture ]
              </p>
            </div>

            {/* Capability Box 4 */}
            <div className="bg-[#0c0c0e] border border-[rgba(244,244,240,0.1)] rounded-2xl p-6 flex flex-col gap-3">
              <h3 className="font-heading text-base font-bold text-[#F4F4F0] uppercase tracking-wider">
                EDU ERP & SAAS ARCHITECTURE
              </h3>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                [ PLACEHOLDER: Multi-tenant database patterns, RBAC, subscription licensing, and SaaS scale ]
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Engineering Deep Dives */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-xl sm:text-2xl font-bold font-heading uppercase text-[#F4F4F0] tracking-tight">
              03 // BACKEND & DEVOPS
            </h2>
            <span className="text-xs font-heading tracking-widest text-[#84cc16] uppercase block mt-1">
              INFRASTRUCTURE & SECURITY
            </span>
          </div>

          <div className="lg:col-span-8 bg-[#0c0c0e] border border-[rgba(244,244,240,0.1)] rounded-3xl p-8 sm:p-10 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-[rgba(244,244,240,0.08)] pb-6">
              <div>
                <span className="text-xs font-heading text-[#A0A0A0] uppercase block">BACKEND & API</span>
                <span className="text-sm font-semibold text-[#F4F4F0]">[ PLACEHOLDER ]</span>
              </div>
              <div>
                <span className="text-xs font-heading text-[#A0A0A0] uppercase block">RBAC & MULTI-TENANCY</span>
                <span className="text-sm font-semibold text-[#F4F4F0]">[ PLACEHOLDER ]</span>
              </div>
              <div>
                <span className="text-xs font-heading text-[#A0A0A0] uppercase block">DEVOPS & SECURITY</span>
                <span className="text-sm font-semibold text-[#F4F4F0]">[ PLACEHOLDER ]</span>
              </div>
            </div>

            <p className="text-sm text-[#A0A0A0] font-light leading-relaxed">
              [ PLACEHOLDER: In-depth breakdown of API design, caching layers, microservices, containerization, and data security protocols ]
            </p>
          </div>
        </section>

        {/* Section 4: Engineering Philosophy & Technical Interests */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-xl sm:text-2xl font-bold font-heading uppercase text-[#F4F4F0] tracking-tight">
              04 // PHILOSOPHY & INTERESTS
            </h2>
            <span className="text-xs font-heading tracking-widest text-[#3B82F6] uppercase block mt-1">
              CONTINUOUS LEARNING
            </span>
          </div>

          <div className="lg:col-span-8 bg-[#0c0c0e] border border-[rgba(244,244,240,0.1)] rounded-3xl p-8 sm:p-10 flex flex-col gap-6">
            <p className="text-sm text-[#F4F4F0]/90 font-light leading-relaxed">
              [ PLACEHOLDER: Engineering principles, code readability, performance discipline, and architectural clarity ]
            </p>
            <p className="text-xs text-[#A0A0A0] font-light leading-relaxed">
              [ PLACEHOLDER: Current technical research, active learning subjects, and future tech stack exploration ]
            </p>
          </div>
        </section>

        {/* Bottom Navigation CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[rgba(244,244,240,0.08)] pt-12">
          <Link
            to="/work"
            className="pill-button group cursor-pointer"
          >
            <span>EXPLORE SELECTED WORK</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <Link
            to="/contact"
            className="text-xs font-heading tracking-widest text-[#EC4899] uppercase hover:underline cursor-pointer"
          >
            INITIATE COLLABORATION →
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
