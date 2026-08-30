import React from 'react';
import { CONVENER_INFO, RETREAT_META } from '../data/retreatData';
import { ArrowRight } from 'lucide-react';

interface ConvenerSectionProps {
  onOpenBioModal: () => void;
}

export const ConvenerSection: React.FC<ConvenerSectionProps> = ({ onOpenBioModal }) => {
  return (
    <section
      id="convener-section"
      className="w-full py-20 md:py-28 lg:py-36 bg-[#f9f9f7] border-b border-[#e5e5e5]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Convener Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <span
              id="convener-section-label"
              className="text-[#5f5e5e] text-[11px] md:text-[12px] font-semibold tracking-[0.15em] uppercase font-sans mb-3"
            >
              SECTION 02 / THE CONVENER
            </span>

            <h2
              id="convener-name-headline"
              className="text-[#1a1c1b] font-serif text-[42px] sm:text-[52px] md:text-[56px] font-normal leading-[1.08] tracking-[-0.015em] mb-6"
            >
              {CONVENER_INFO.name}
            </h2>

            <div className="space-y-4 max-w-xl">
              <p
                id="convener-short-bio"
                className="text-[#1a1c1b] font-sans text-base sm:text-lg leading-[1.65] font-normal text-[#2f3130]"
              >
                {CONVENER_INFO.shortBio}
              </p>
            </div>

            {/* Read Full Bio Action Link */}
            <div className="mt-8 pt-4">
              <button
                id="convener-read-full-bio-btn"
                onClick={onOpenBioModal}
                className="group inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.15em] uppercase font-sans text-[#141e13] hover:text-[#3f4a3c] transition-colors pb-1 border-b border-[#141e13]"
              >
                <span>READ FULL BIO</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Cantilever Photography in Mat Frame */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end order-1 lg:order-2">
            <div
              id="convener-image-frame"
              className="w-full max-w-[480px] bg-[#f2f0eb] p-4 sm:p-6 border border-[#e5e5e5] shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
              style={{ borderRadius: 0 }}
            >
              {/* Inner White Matte Frame */}
              <div className="bg-[#ffffff] p-3 sm:p-4 border border-[#e8e8e6]">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#293327]/10">
                  <img
                    src={RETREAT_META.images.convener}
                    alt="The Architecture of Silence - Next Mile Club Sanctuary"
                    className="w-full h-full object-cover object-center filter grayscale contrast-[1.12] brightness-[0.98]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Subtle Grain & Vignette Effect */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none" />
                </div>
              </div>

              {/* Minimal Caption Label */}
              <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-[#5f5e5e] px-1">
                <span>MUKTESHWAR CANTILEVER (7,200 FT)</span>
                <span>MONOGRAPH II ARCHIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
