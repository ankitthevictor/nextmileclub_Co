import React, { useState } from 'react';
import { PearLogo } from './PearLogo';
import { X } from 'lucide-react';

interface FooterProps {
  onOpenPortal: () => void;
  onNavigateHome: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPortal, onNavigateHome }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer
        id="main-app-footer"
        className="w-full bg-[#f9f9f7] border-t border-[#e5e5e5] py-14 sm:py-16 transition-colors"
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left Column: Pear Logo & Copyright */}
          <div className="flex flex-col space-y-3">
            <PearLogo size="md" onClick={onNavigateHome} />
            <p
              id="footer-copyright-text"
              className="text-xs text-[#5f5e5e] font-sans tracking-normal"
            >
              © 2024 Next Mile Club. Strategic Quietude.
            </p>
          </div>

          {/* Right Column: Footer Links */}
          <div
            id="footer-nav-links"
            className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-sans text-[#444842]"
          >
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-[#141e13] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-[#141e13] transition-colors"
            >
              Terms of Service
            </button>
            <button
              id="footer-member-portal-btn"
              onClick={onOpenPortal}
              className="hover:text-[#141e13] transition-colors font-medium"
            >
              Member Portal
            </button>
          </div>
        </div>
      </footer>

      {/* Legal / Policy Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-[2px] animate-in fade-in duration-150">
          <div
            className="relative w-full max-w-xl bg-[#f9f9f7] border border-[#141e13] p-6 sm:p-8 max-h-[80vh] overflow-y-auto"
            style={{ borderRadius: 0 }}
          >
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 p-2 text-[#5f5e5e] hover:text-[#141e13]"
            >
              <X size={18} />
            </button>

            <h3 className="font-serif text-2xl text-[#1a1c1b] mb-4">
              {legalModal === 'privacy' ? 'Privacy Policy & Data Sanctuary' : 'Terms of Service & Chatham House Covenant'}
            </h3>

            <div className="text-xs sm:text-sm text-[#444842] space-y-3 leading-relaxed font-sans">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    <strong>Zero Digital Tracking:</strong> Next Mile Club maintains an uncompromising data minimization standard. We do not employ third-party behavioral trackers, algorithmic ad cookies, or commercial marketing telemetry.
                  </p>
                  <p>
                    <strong>Confidential Candidate Records:</strong> Dossiers submitted via our invitation portal are reviewed exclusively by Maya Sharma and our confidential admissions board. Records are encrypted and never sold, shared, or indexed by search engines.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Chatham House Covenant:</strong> All attendees of Next Mile Club summits agree unconditionally that while information shared may be utilized for individual strategic development, no quotes, attributions, or identities may ever be revealed publicly.
                  </p>
                  <p>
                    <strong>Analog Sanctity:</strong> Unauthorized recording devices, optical drones, and cellular broadcasting are strictly barred from the Mukteshwar estate during active convening hours.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#e5e5e5] flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 bg-[#141e13] text-[#fcfcfa] text-xs font-mono uppercase tracking-wider"
                style={{ borderRadius: 0 }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
