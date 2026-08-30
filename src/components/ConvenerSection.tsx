import React from 'react';
import { CONVENER_INFO } from '../data/retreatData';
import { ArrowRight, Quote, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';

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
          {/* Left Column: Convener Story & Mission */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span
              id="convener-section-label"
              className="text-[#3f4a3c] text-[11px] md:text-[12px] font-semibold tracking-[0.2em] uppercase font-mono mb-3"
            >
              SECTION 02 / THE CONVENER & THE ORIGIN
            </span>

            <h2
              id="convener-name-headline"
              className="text-[#1a1c1b] font-serif text-[40px] sm:text-[50px] md:text-[56px] font-normal leading-[1.08] tracking-[-0.015em] mb-4"
            >
              {CONVENER_INFO.name}
            </h2>

            <p className="text-xs sm:text-sm font-mono text-[#5f5e5e] mb-6 tracking-wide">
              {CONVENER_INFO.background}
            </p>

            <div className="space-y-5 text-[#2f3130] font-sans text-base sm:text-lg leading-[1.7] font-normal">
              <p id="convener-short-bio">
                {CONVENER_INFO.shortBio}
              </p>
              <p className="text-sm sm:text-base text-[#5f5e5e]">
                Next Mile Club is that idea made deliberate: a quiet retreat near Bangalore where women who lead can put down the weight of constant execution, speak openly with true peers, and design their next chapter with clarity and conviction.
              </p>
            </div>

            {/* Read Full Story Action Link */}
            <div className="mt-8 pt-2">
              <button
                id="convener-read-full-bio-btn"
                onClick={onOpenBioModal}
                className="group inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.15em] uppercase font-mono text-[#141e13] hover:text-[#3f4a3c] transition-colors pb-1 border-b border-[#141e13]"
              >
                <span>READ HER FULL STORY</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* Right Column: Refined Editorial Quote & Manifesto Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div
              id="convener-quote-card"
              className="w-full bg-[#f2f0eb] p-8 sm:p-10 border border-[#141e13] shadow-[0_2px_12px_rgba(0,0,0,0.04)] relative"
              style={{ borderRadius: 0 }}
            >
              <Quote size={32} className="text-[#3f4a3c] opacity-40 mb-4" />

              <blockquote className="font-serif text-lg sm:text-xl md:text-[22px] text-[#1a1c1b] leading-relaxed italic mb-6">
                &ldquo;{CONVENER_INFO.quote}&rdquo;
              </blockquote>

              <div className="pt-6 border-t border-[#c4c8c0] flex items-center justify-between text-xs font-mono text-[#5f5e5e]">
                <span className="font-semibold text-[#1a1c1b]">AKANKSHA SHARMA</span>
                <span className="text-[#3f4a3c]">CONVENER NOTE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
