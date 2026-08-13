import React from 'react';
import { siteData } from '../../data/site';

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative w-full bg-[#050505] text-[#F4F4F0] py-16 sm:py-20 px-6 sm:px-12 lg:px-20 border-t border-[rgba(244,244,240,0.08)] select-none"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
        
        {/* Top Editorial Statement & Direct Email Row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-12 border-b border-[rgba(244,244,240,0.08)]">
          <div className="flex flex-col gap-2">
            <span className="font-heading text-xs font-semibold tracking-[0.3em] text-[#A0A0A0] uppercase">
              [ DIRECT TRANSMISSION ]
            </span>
            <a
              href={`mailto:${siteData.email}`}
              className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#F4F4F0] hover:text-[#EC4899] transition-colors duration-300 tracking-tight"
            >
              {siteData.email}
            </a>
          </div>

          <div className="text-left md:text-right max-w-xs">
            <p className="text-xs text-[#A0A0A0] font-heading tracking-widest uppercase leading-relaxed">
              BUILT WITH CURIOSITY & TECHNICAL PRECISION.
            </p>
          </div>
        </div>

        {/* Social Links & Copyright Bottom Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Social Links List */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            {siteData.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-xs font-heading tracking-[0.2em] text-[#A0A0A0] hover:text-[#F4F4F0] transition-colors duration-300 py-1"
              >
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
                  {social.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] accent-gradient-bg transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Copyright Metadata */}
          <div className="text-[11px] font-heading tracking-widest text-[#A0A0A0] uppercase">
            © 2026 {siteData.name}. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </footer>
  );
};
