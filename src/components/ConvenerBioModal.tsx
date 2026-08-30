import React from 'react';
import { CONVENER_INFO } from '../data/retreatData';
import { X, Quote, Shield, HeartHandshake } from 'lucide-react';

interface ConvenerBioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestInvitation: () => void;
}

export const ConvenerBioModal: React.FC<ConvenerBioModalProps> = ({
  isOpen,
  onClose,
  onRequestInvitation,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="convener-bio-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-[2px] animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-[#f9f9f7] border border-[#141e13] shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
        style={{ borderRadius: 0 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-[#5f5e5e] hover:text-[#141e13] hover:bg-[#eeeeec] transition-colors"
          aria-label="Close bio modal"
        >
          <X size={20} />
        </button>

        {/* Header Label */}
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-[#e5e5e5]">
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#3f4a3c] font-semibold">
            THE CONVENER // HER STORY & INVITATION
          </span>
        </div>

        {/* Name & Headline */}
        <div className="mb-6">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#1a1c1b] font-normal">
            {CONVENER_INFO.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#3f4a3c] font-mono mt-1">
            {CONVENER_INFO.role}
          </p>
          <p className="text-xs text-[#757871] font-mono mt-0.5">
            {CONVENER_INFO.background}
          </p>
        </div>

        {/* Convener Quote */}
        <div className="bg-[#f2f0eb] p-5 sm:p-6 border-l-2 border-[#141e13] mb-6">
          <p className="font-serif text-base sm:text-lg text-[#1a1c1b] italic leading-relaxed">
            &ldquo;{CONVENER_INFO.quote}&rdquo;
          </p>
        </div>

        {/* Narrative */}
        <div className="text-sm sm:text-base text-[#444842] leading-[1.75] space-y-4 font-normal">
          {CONVENER_INFO.fullBio.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="pt-6 mt-6 border-t border-[#e5e5e5] flex items-center justify-between text-xs font-mono text-[#5f5e5e]">
          <span>LOCATION: {CONVENER_INFO.location}</span>
          <span className="inline-flex items-center gap-1.5 text-[#3f4a3c]">
            <Shield size={13} />
            Chatham House Trust
          </span>
        </div>

        <div className="mt-8 pt-6 border-t border-[#e5e5e5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#5f5e5e]">
            14–18 INTIMATE SEATS PER COHORT
          </span>
          <button
            onClick={() => {
              onClose();
              onRequestInvitation();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#141e13] hover:bg-[#3f4a3c] text-[#fcfcfa] text-xs font-mono tracking-wider uppercase transition-colors"
            style={{ borderRadius: 0 }}
          >
            Request An Invitation
          </button>
        </div>
      </div>
    </div>
  );
};
