import React from "react";
import { Link } from "react-router-dom";

import { Navigation } from "../components/layout/Navigation";
import { Footer } from "../components/footer/Footer";

import { aboutData } from "../data/aboutData";

export const AboutPage = () => {
  const { profile, about, skills, experience, education, projects, vision } =
    aboutData;

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F4F4F0] overflow-x-hidden">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[rgba(244,244,240,0.08)] bg-[#050505]/90 backdrop-blur-md">
        <Navigation />
      </header>

      <main className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-12 sm:py-20">
        {/* =====================================================
            PROFILE
        ====================================================== */}
        <section className="pb-16 border-b border-[rgba(244,244,240,0.08)]">
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-12 text-xs font-heading tracking-widest text-[#A0A0A0] hover:text-[#F4F4F0] transition-colors uppercase"
          >
            ← BACK TO HOME
          </Link>

          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EC4899]" />

              <span className="font-heading text-xs tracking-[0.3em] text-[#A0A0A0] uppercase">
                [ 01 // PROFILE ]
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold font-heading tracking-tighter uppercase leading-[0.9]">
              OMAIR <span className="accent-gradient-text">KHAN</span>
            </h1>

            <h2 className="mt-5 text-lg sm:text-xl font-heading font-bold tracking-widest text-[#8B5CF6] uppercase">
              {profile.role}
            </h2>

            <p className="mt-6 max-w-3xl text-base sm:text-lg text-[#A0A0A0] leading-relaxed">
              {profile.intro}
            </p>

            <p className="mt-4 max-w-3xl text-sm sm:text-base text-[#606060] leading-relaxed">
              {profile.description}
            </p>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ====================================================== */}
        <section className="grid lg:grid-cols-12 gap-10 py-20">
          <SectionTitle number="02" label="ABOUT" title="WHO I AM" />

          <div className="lg:col-span-8">
            <div className="bg-[#0c0c0e] border border-[rgba(244,244,240,0.1)] rounded-3xl p-7 sm:p-10">
              {about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed mb-6 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-5">
              {about.traits.map((trait) => (
                <div
                  key={trait.title}
                  className="bg-[#0c0c0e] border border-[rgba(244,244,240,0.08)] rounded-2xl p-6"
                >
                  <span className="text-[10px] font-heading tracking-[0.25em] text-[#EC4899] uppercase">
                    {trait.title}
                  </span>

                  <p className="mt-3 text-sm text-[#A0A0A0] leading-relaxed">
                    {trait.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            SKILLS
        ====================================================== */}
        <section className="grid lg:grid-cols-12 gap-10 py-20">
          <SectionTitle number="03" label="STACK" title="TECHNICAL SKILLS" />

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {skills.map((group) => (
              <div
                key={group.category}
                className="bg-[#0c0c0e] border border-[rgba(244,244,240,0.1)] rounded-2xl p-6"
              >
                <div className="flex justify-between items-center border-b border-[rgba(244,244,240,0.08)] pb-3">
                  <h3 className="font-heading text-xs font-bold text-[#8B5CF6] tracking-widest uppercase">
                    {group.category}
                  </h3>

                  <span className="text-[10px] text-[#505050] font-heading">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-[rgba(244,244,240,0.04)] border border-[rgba(244,244,240,0.08)] text-xs text-[#D0D0CC]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            EXPERIENCE
        ====================================================== */}
        <section className="grid lg:grid-cols-12 gap-10 py-20">
          <SectionTitle
            number="04"
            label="EXPERIENCE"
            title="WORK EXPERIENCE"
          />

          <div className="lg:col-span-8">
            <div className="bg-[#0c0c0e] border border-[rgba(244,244,240,0.1)] rounded-3xl p-7 sm:p-10">
              <div className="flex flex-col sm:flex-row justify-between gap-4 pb-6 border-b border-[rgba(244,244,240,0.08)]">
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase">
                    {experience.company}
                  </h3>

                  <p className="mt-1 text-xs text-[#8B5CF6] font-heading tracking-widest uppercase">
                    {experience.role}
                  </p>
                </div>

                <div className="text-xs text-[#606060] font-heading tracking-widest uppercase sm:text-right">
                  <p>{experience.duration}</p>
                  <p className="mt-1">{experience.location}</p>
                </div>
              </div>

              <div className="mt-7 space-y-5">
                {experience.highlights.map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4 text-sm text-[#A0A0A0] leading-relaxed"
                  >
                    <span className="text-[#EC4899] font-heading text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            EDUCATION
        ====================================================== */}
        <section className="grid lg:grid-cols-12 gap-10 py-20">
          <SectionTitle number="05" label="EDUCATION" title="ACADEMICS" />

          <div className="lg:col-span-8 space-y-4">
            {education.map((item) => (
              <div
                key={`${item.institution}-${item.duration}`}
                className="bg-[#0c0c0e] border border-[rgba(244,244,240,0.08)] rounded-2xl p-6 sm:p-7"
              >
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-heading tracking-[0.25em] text-[#8B5CF6] uppercase">
                      {item.type}
                    </span>

                    <h3 className="mt-2 font-heading font-bold uppercase">
                      {item.institution}
                    </h3>

                    <p className="mt-1 text-sm text-[#A0A0A0]">{item.degree}</p>
                  </div>

                  <span className="text-xs text-[#606060] font-heading tracking-widest">
                    {item.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            PROJECTS
        ====================================================== */}
        <section className="grid lg:grid-cols-12 gap-10 py-20">
          <SectionTitle number="06" label="PROJECTS" title="FEATURED WORK" />

          <div className="lg:col-span-8 space-y-5">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-[#0c0c0e] border border-[rgba(244,244,240,0.1)] rounded-3xl p-7 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row justify-between gap-5 pb-5 border-b border-[rgba(244,244,240,0.08)]">
                  <div className="flex gap-4">
                    <span className="text-xs text-[#505050] font-heading">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="font-heading text-lg font-bold uppercase">
                        {project.title}
                      </h3>

                      <p className="mt-1 text-xs text-[#EC4899] font-heading tracking-widest uppercase">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit px-4 py-1.5 rounded-full border border-[rgba(244,244,240,0.2)] text-[11px] font-heading tracking-widest uppercase hover:bg-[#F4F4F0] hover:text-[#050505] transition-all"
                  >
                    LIVE DEMO ↗
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-[rgba(244,244,240,0.04)] border border-[rgba(244,244,240,0.08)] text-[11px] text-[#A0A0A0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            VISION
        ====================================================== */}
        <section className="grid lg:grid-cols-12 gap-10 py-20">
          <SectionTitle number="07" label="DIRECTION" title="MY VISION" />

          <div className="lg:col-span-8">
            <div className="bg-[#0c0c0e] border border-[rgba(244,244,240,0.1)] rounded-3xl p-7 sm:p-10">
              <p className="text-base sm:text-lg text-[#F4F4F0]/90 leading-relaxed">
                {vision.description}
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mt-10">
                {vision.points.map((point) => (
                  <div
                    key={point.title}
                    className="border-t border-[rgba(244,244,240,0.1)] pt-4"
                  >
                    <span className="text-[10px] font-heading tracking-[0.25em] text-[#84cc16] uppercase">
                      {point.title}
                    </span>

                    <p className="mt-2 text-sm text-[#A0A0A0] leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[rgba(244,244,240,0.08)] pt-10 flex justify-between items-center gap-6">
          <div>
            <p className="text-[10px] text-[#505050] font-heading tracking-[0.25em] uppercase">
              END OF PROFILE
            </p>

            <h3 className="mt-2 text-xl font-heading font-bold uppercase">
              BACK TO THE WORK
            </h3>
          </div>

          <Link to="/" className="pill-button group">
            ← BACK TO HOME
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

/* =========================================================
   REUSABLE SECTION TITLE
========================================================= */

const SectionTitle = ({ number, label, title }) => {
  return (
    <div className="lg:col-span-4">
      <div className="flex items-center gap-3 mb-2">
        <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />

        <span className="font-heading text-xs tracking-[0.25em] text-[#A0A0A0] uppercase">
          [ {number} // {label} ]
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold font-heading uppercase tracking-tight">
        {title}
      </h2>
    </div>
  );
};
