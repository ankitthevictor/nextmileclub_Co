import React from 'react';
import { RETREAT_META } from '../data/retreatData';

interface HeroSectionProps {
  onRequestInvitation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestInvitation }) => {
  return (
    <section
      id="hero-retreat-section"
      className="relative w-full min-h-[580px] sm:min-h-[640px] md:min-h-[720px] lg:min-h-[780px] flex items-center justify-center overflow-hidden border-b border-[#e5e5e5]"
    >
      {/* High-Altitude Estate Imagery with warm ambient grading */}
      <div className="absolute inset-0 z-0">
        <img
          src={RETREAT_META.images.hero}
          alt="Next Mile Club retreat estate in Kumaon Himalayas"
          className="w-full h-full object-cover object-center scale-[1.02] filter brightness-[0.92] contrast-[1.02]"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Editorial atmospheric gradient overlay to guarantee perfect contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/35 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-[#3f4a3c]/15 mix-blend-multiply" />
      </div>

      {/* Central Hero Content */}
      <div className="relative z-10 max-w-[1080px] mx-auto px-6 sm:px-12 text-center py-24 flex flex-col items-center">
        {/* Label caps: THE RETREAT */}
        <div className="inline-block mb-4 sm:mb-6">
          <span
            id="hero-eyebrow-label"
            className="text-[#fcfcfa]/90 text-[11px] sm:text-[12px] font-semibold tracking-[0.25em] uppercase font-sans drop-shadow-sm px-3 py-1 bg-black/20 backdrop-blur-sm border border-white/15"
          >
            {RETREAT_META.heroEyebrow}
          </span>
        </div>

        {/* Headline: The Altitude of Ambition. */}
        <h1
          id="hero-main-title"
          className="text-[#fcfcfa] font-serif text-[42px] sm:text-[56px] md:text-[72px] lg:text-[84px] font-normal leading-[1.08] tracking-[-0.02em] mb-4 sm:mb-6 max-w-4xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
        >
          {RETREAT_META.heroHeadline}
        </h1>

        {/* Subhead: Strategic quietude for the architectural mind. */}
        <p
          id="hero-subhead-text"
          className="text-[#f1f1ef] font-sans text-base sm:text-lg md:text-xl lg:text-[22px] font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10 text-shadow-sm drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
        >
          {RETREAT_META.heroSubhead}
        </p>

        {/* Primary Action Button */}
        <div>
          <button
            id="hero-request-invitation-btn"
            onClick={onRequestInvitation}
            className="px-8 sm:px-10 py-3.5 sm:py-4 bg-[#141e13]/95 hover:bg-[#3f4a3c] text-[#fcfcfa] text-[12px] sm:text-[13px] font-semibold tracking-[0.15em] uppercase font-sans transition-all duration-200 shadow-lg hover:shadow-xl border border-white/20 active:translate-y-[1px]"
            style={{ borderRadius: 0 }}
          >
            {RETREAT_META.ctaText}
          </button>
        </div>
      </div>
    </section>
  );
};
