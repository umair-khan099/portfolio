import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { projectsData } from "../data/projects";
import { Navigation } from "../components/layout/Navigation";
import { Footer } from "../components/footer/Footer";

export const ProjectDetails = () => {
  const { projectId } = useParams();

  const project = projectsData.find((item) => item.id === projectId);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const isExternalLink = project.link && project.link.startsWith("http");

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F4F4F0] select-none overflow-x-hidden">
      {/* Top Header Navigation */}
      <header className="px-6 sm:px-12 lg:px-20 border-b border-[rgba(244,244,240,0.08)] bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50">
        <Navigation />
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-12 sm:py-20 flex flex-col gap-12">
        {/* Back Button & Category Subtitle */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-[rgba(244,244,240,0.08)] pb-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-heading tracking-widest text-[#A0A0A0] hover:text-[#F4F4F0] transition-colors duration-300 uppercase group cursor-pointer"
          >
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>← BACK TO SELECTED WORK</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full border border-[rgba(244,244,240,0.15)] bg-[rgba(244,244,240,0.05)] text-[11px] font-heading tracking-widest text-[#F4F4F0] uppercase">
              {project.badge}
            </span>
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#EC4899]/10 border border-[#EC4899]/30 text-[11px] font-heading tracking-widest text-[#EC4899] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] animate-pulse"></span>
              {project.status}
            </span>
          </div>
        </div>

        {/* Project Header Title & Metrics */}
        <div className="flex flex-col gap-6 items-start">
          <div className="flex items-center gap-3">
            <span className="font-heading text-xl sm:text-2xl font-extrabold text-[#EC4899]">
              {project.number}
            </span>
            <span className="text-xs font-heading tracking-[0.25em] text-[#A0A0A0] uppercase">
              // {project.category}
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold font-heading tracking-tighter uppercase text-[#F4F4F0] leading-[0.9]">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs font-heading tracking-widest text-[#A0A0A0] uppercase pt-2">
            <span>YEAR // {project.year}</span>
            <span>STATUS // {project.status}</span>
          </div>
        </div>

        {/* Visual Spec Interactive Canvas Box */}
        <div className="w-full min-h-[340px] sm:min-h-[440px] rounded-3xl border border-[rgba(244,244,240,0.14)] bg-[#0c0c0e] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{ background: project.accentGradient }}
          />

          <div className="relative z-10 flex items-center justify-between text-xs font-heading tracking-widest text-[#F4F4F0]/80 uppercase">
            <span>{project.visualSpec.tag}</span>
            <span>ARCHITECTURE V2.6</span>
          </div>

          <div className="relative z-10 my-auto text-center py-10 sm:py-16">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tighter text-[#F4F4F0] uppercase drop-shadow-xl">
              {project.visualSpec.headline}
            </h2>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-[rgba(244,244,240,0.15)] pt-4 text-xs font-heading tracking-wider text-[#A0A0A0] uppercase">
            {project.visualSpec.gridItems.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]"></span>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Description & Technology Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-xl sm:text-2xl font-bold font-heading uppercase text-[#F4F4F0] tracking-tight">
              OVERVIEW & ARCHITECTURE
            </h3>
            <p className="text-base sm:text-lg text-[#A0A0A0] font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#0c0c0e] border border-[rgba(244,244,240,0.12)] rounded-3xl p-8 flex flex-col gap-6">
            <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-[#F4F4F0]">
              SYSTEM METRICS
            </h3>

            <div className="flex flex-col gap-4 text-xs font-heading tracking-wider">
              <div className="flex items-center justify-between border-b border-[rgba(244,244,240,0.08)] pb-3">
                <span className="text-[#A0A0A0]">CATEGORY</span>
                <span className="text-[#F4F4F0] font-semibold">{project.category}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[rgba(244,244,240,0.08)] pb-3">
                <span className="text-[#A0A0A0]">YEAR</span>
                <span className="text-[#F4F4F0] font-semibold">{project.year}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[rgba(244,244,240,0.08)] pb-3">
                <span className="text-[#A0A0A0]">STATUS</span>
                <span className="text-[#EC4899] font-semibold">{project.status}</span>
              </div>
            </div>

            {/* Live External Project Button */}
            {isExternalLink ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-[#F4F4F0] text-[#050505] font-heading text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#8B5CF6] hover:text-[#F4F4F0] transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl mt-2 cursor-pointer"
              >
                <span>VISIT LIVE PROJECT</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              <div className="w-full py-4 rounded-full bg-[rgba(244,244,240,0.05)] border border-[rgba(244,244,240,0.15)] text-[#A0A0A0] font-heading text-xs font-semibold tracking-[0.2em] uppercase text-center">
                ACTIVE IN-HOUSE BUILD
              </div>
            )}
          </div>
        </div>

        {/* Footer Navigation Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[rgba(244,244,240,0.08)] pt-10">
          <Link
            to="/work"
            className="pill-button group cursor-pointer"
          >
            <span>← BACK TO ALL PROJECTS</span>
          </Link>

          <Link
            to="/contact"
            className="text-xs font-heading tracking-widest text-[#EC4899] uppercase hover:underline cursor-pointer"
          >
            DISCUSS A SIMILAR BUILD →
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
