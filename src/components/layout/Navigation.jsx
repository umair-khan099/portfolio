import React from 'react';
import { siteData } from '../../data/site';

export const Navigation = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hero-nav w-full py-6 sm:py-8 flex items-center justify-between z-30 relative">
      {/* Brand Identity / Logo */}
      <div className="flex items-center gap-3">
        <span className="w-2.5 h-2.5 rounded-full accent-gradient-bg inline-block"></span>
        <span className="font-heading text-sm font-semibold tracking-wider uppercase text-[#F4F4F0]">
          {siteData.name}
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 sm:gap-10">
        {siteData.navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="group relative font-heading text-xs font-medium tracking-[0.2em] text-[#A0A0A0] hover:text-[#F4F4F0] transition-colors duration-300 py-1 cursor-pointer"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
              {link.label}
            </span>
            {/* Subtle underline reveal */}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] accent-gradient-bg transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </nav>
  );
};
