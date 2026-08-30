import React, { useState } from 'react';
import { X, Lock, Key, FileText, Download, ShieldCheck, Search } from 'lucide-react';

interface MemberPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MemberPortalModal: React.FC<MemberPortalModalProps> = ({ isOpen, onClose }) => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Quick demo passcode: 'nextmile' or 'clarity' or allowing any 4+ char for demo
    if (passcode.trim().toLowerCase() === 'nextmile' || passcode.trim().toLowerCase() === 'clarity' || passcode.trim().length >= 4) {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Invalid accession code. Please verify your confidential summit credential.');
    }
  };

  const archivalDocuments = [
    {
      id: 'DOC-2023-A',
      title: 'Monograph: Sovereign Liquidity Routing in Adversarial Macro Regimes',
      convening: 'Cohort Archive Autumn 2023',
      classification: 'CHATHAM RESTRICTED',
      size: '2.4 MB PDF',
    },
    {
      id: 'DOC-2023-B',
      title: 'Topological Analysis: Distributed Consensus Under Sub-Millisecond Partitions',
      convening: 'Cohort Archive Autumn 2023',
      classification: 'CHATHAM RESTRICTED',
      size: '1.8 MB PDF',
    },
    {
      id: 'DOC-2024-SPR',
      title: 'The Architecture of Silence: Transcripts of Fireside Colloquium I',
      convening: 'Cohort Archive Spring 2024',
      classification: 'CONFIDENTIAL // FELLOWS ONLY',
      size: '3.1 MB PDF',
    },
  ];

  return (
    <div
      id="member-portal-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-[2px] animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-[#f9f9f7] border border-[#141e13] shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
        style={{ borderRadius: 0 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-[#5f5e5e] hover:text-[#141e13] hover:bg-[#eeeeec] transition-colors"
          aria-label="Close portal"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-[#e5e5e5]">
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#3f4a3c] font-semibold flex items-center gap-1.5">
            <Lock size={13} />
            MEMBER PORTAL // CONVENING ARCHIVE
          </span>
        </div>

        {!isAuthenticated ? (
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-3xl text-[#1a1c1b] mb-2">
                Confidential Accession
              </h3>
              <p className="text-sm text-[#444842] leading-relaxed">
                Access to summit transcripts, analog monographs, and fellow directories is restricted to confirmed attendees and alumni of the Next Mile Club.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 pt-2">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5f5e5e] mb-1.5">
                  Enter Summit Accession Key / Fellow Passcode
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={passcode}
                    onChange={(e) => {
                      setPasscode(e.target.value);
                      setErrorMsg('');
                    }}
                    placeholder="Enter passkey (e.g. kumaon)"
                    className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#c4c8c0] focus:border-[#141e13] text-sm text-[#1a1c1b] outline-none font-mono"
                    style={{ borderRadius: 0 }}
                  />
                  <Key size={16} className="absolute right-3 top-3 text-[#757871]" />
                </div>
                {errorMsg && (
                  <p className="text-xs text-red-600 font-mono mt-1.5">{errorMsg}</p>
                )}
                <p className="text-[11px] text-[#757871] font-mono mt-2">
                  Tip: Enter any passcode or <code>nextmile</code> for portal demonstration access.
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#141e13] hover:bg-[#3f4a3c] text-[#fcfcfa] text-xs font-mono uppercase tracking-wider transition-colors"
                  style={{ borderRadius: 0 }}
                >
                  Verify & Enter Portal
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#e5e5e5]">
              <div>
                <h3 className="font-serif text-2xl text-[#1a1c1b]">
                  Next Mile Archive & Repositories
                </h3>
                <span className="text-xs font-mono text-[#3f4a3c] flex items-center gap-1 mt-0.5">
                  <ShieldCheck size={13} />
                  Authentication Verified • Chatham Session Active
                </span>
              </div>

              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-xs font-mono text-[#5f5e5e] hover:text-[#141e13] underline"
              >
                Sign Out
              </button>
            </div>

            <div className="space-y-3">
              {archivalDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="p-4 bg-[#ffffff] border border-[#e5e5e5] hover:border-[#141e13] transition-colors flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#3f4a3c] px-1.5 py-0.5 bg-[#eeeeec]">
                        {doc.id}
                      </span>
                      <span className="text-[10px] font-mono text-red-800 tracking-wider">
                        {doc.classification}
                      </span>
                    </div>
                    <h4 className="text-sm font-sans font-medium text-[#1a1c1b]">
                      {doc.title}
                    </h4>
                    <p className="text-xs text-[#5f5e5e] font-mono">
                      {doc.convening} • {doc.size}
                    </p>
                  </div>

                  <button
                    onClick={() => alert(`Accessing encrypted archive ${doc.id}... Download initiated.`)}
                    className="p-2 border border-[#c4c8c0] text-[#141e13] hover:bg-[#eeeeec] shrink-0"
                    title="Download document"
                    style={{ borderRadius: 0 }}
                  >
                    <Download size={14} />
                  </button>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#e5e5e5] flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#141e13] text-[#fcfcfa] text-xs font-mono uppercase tracking-wider"
                style={{ borderRadius: 0 }}
              >
                Close Archive
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
