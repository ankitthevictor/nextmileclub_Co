import React from 'react';
import { Peer } from '../types';
import { X, MapPin, Briefcase, HelpCircle, Award } from 'lucide-react';

interface PeerModalProps {
  peer: Peer | null;
  onClose: () => void;
  onRequestInvitation: () => void;
}

export const PeerModal: React.FC<PeerModalProps> = ({ peer, onClose, onRequestInvitation }) => {
  if (!peer) return null;

  return (
    <div
      id="peer-dossier-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-[2px] animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-[#f9f9f7] border border-[#141e13] shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
        style={{ borderRadius: 0 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-[#5f5e5e] hover:text-[#141e13] hover:bg-[#eeeeec] transition-colors"
          aria-label="Close peer modal"
        >
          <X size={20} />
        </button>

        {/* Top Header Label */}
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-[#e5e5e5]">
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#3f4a3c] font-semibold">
            COHORT DOSSIER // {peer.id.toUpperCase()}
          </span>
          <span className="text-xs text-[#757871]">•</span>
          <span className="text-[11px] font-mono text-[#5f5e5e] uppercase">{peer.domain}</span>
        </div>

        {/* Main Profile Header */}
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 bg-[#f2f0eb] p-2 border border-[#e5e5e5]">
            <img
              src={peer.image}
              alt={peer.name}
              className="w-full h-full object-cover filter grayscale"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex-1">
            <h3 className="font-serif text-3xl sm:text-4xl text-[#1a1c1b] leading-tight">
              {peer.name}
            </h3>
            <p className="text-sm font-sans font-medium text-[#3f4a3c] mt-1">
              {peer.title}, {peer.company}
            </p>
            <p className="inline-flex items-center gap-1 text-xs font-mono text-[#757871] mt-2">
              <MapPin size={12} />
              {peer.location}
            </p>
          </div>
        </div>

        {/* Statement of Selection */}
        <div className="mt-6 p-4 bg-[#f2f0eb] border-l-2 border-[#3f4a3c]">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#5f5e5e] block mb-1">
            SELECTION COMMITTEE CITATION
          </span>
          <p className="text-xs sm:text-sm font-sans text-[#1a1c1b] italic">
            &ldquo;{peer.selectedStatement}&rdquo;
          </p>
        </div>

        {/* Background Narrative */}
        <div className="mt-6 space-y-4">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#5f5e5e] mb-1">
              ARCHITECTURAL FOCUS
            </h4>
            <p className="text-sm sm:text-base text-[#444842] leading-relaxed">
              {peer.bio}
            </p>
          </div>

          {/* Central Inquiry */}
          <div className="pt-4 border-t border-[#e5e5e5]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#3f4a3c] mb-1.5 flex items-center gap-1.5 font-semibold">
              <HelpCircle size={14} />
              CENTRAL SUMMIT INQUIRY
            </h4>
            <p className="text-sm sm:text-base font-serif text-[#1a1c1b] leading-relaxed bg-[#ffffff] p-4 border border-[#e5e5e5]">
              &ldquo;{peer.depthInquiry}&rdquo;
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-[#e5e5e5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#5f5e5e]">
            CHATHAM HOUSE PROTECTED PROFILE
          </span>
          <button
            onClick={() => {
              onClose();
              onRequestInvitation();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#141e13] hover:bg-[#3f4a3c] text-[#fcfcfa] text-xs font-mono tracking-wider uppercase transition-colors"
            style={{ borderRadius: 0 }}
          >
            Apply to Join This Cohort
          </button>
        </div>
      </div>
    </div>
  );
};
