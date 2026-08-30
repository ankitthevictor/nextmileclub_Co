import React from 'react';
import { CONVENER_INFO, RETREAT_META } from '../data/retreatData';
import { X, MapPin, Quote, Shield } from 'lucide-react';

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
        className="relative w-full max-w-3xl bg-[#f9f9f7] border border-[#141e13] shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
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
            THE CONVENER // FULL BIOGRAPHICAL RECORD
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="w-full aspect-[3/4] bg-[#f2f0eb] p-2 border border-[#e5e5e5] mb-4">
              <img
                src={RETREAT_META.images.convener}
                alt={CONVENER_INFO.name}
                className="w-full h-full object-cover filter grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-serif text-2xl text-[#1a1c1b]">{CONVENER_INFO.name}</h3>
            <p className="text-xs text-[#3f4a3c] font-mono mt-1">{CONVENER_INFO.role}</p>
            <p className="text-[11px] text-[#757871] font-mono mt-0.5">{CONVENER_INFO.background}</p>
          </div>

          <div className="md:col-span-8 space-y-5">
            <div className="bg-[#f2f0eb] p-4 border-l-2 border-[#141e13]">
              <p className="font-serif text-base sm:text-lg text-[#1a1c1b] italic">
                &ldquo;{CONVENER_INFO.quote}&rdquo;
              </p>
            </div>

            <div className="text-sm sm:text-base text-[#444842] leading-relaxed space-y-4">
              {CONVENER_INFO.fullBio.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-[#e5e5e5] flex items-center justify-between text-xs font-mono text-[#5f5e5e]">
              <span>RESIDENCE: {CONVENER_INFO.location}</span>
              <span className="inline-flex items-center gap-1 text-[#3f4a3c]">
                <Shield size={12} />
                Chatham Standard
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#e5e5e5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#5f5e5e]">
            CURATED SEATS FOR AUTUMN CONVENING
          </span>
          <button
            onClick={() => {
              onClose();
              onRequestInvitation();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#141e13] hover:bg-[#3f4a3c] text-[#fcfcfa] text-xs font-mono tracking-wider uppercase transition-colors"
            style={{ borderRadius: 0 }}
          >
            Request Application Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
