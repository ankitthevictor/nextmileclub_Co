import React, { useState } from 'react';
import { Peer } from '../types';
import { PEERS_DATA } from '../data/retreatData';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';

interface PeersSectionProps {
  onSelectPeer: (peer: Peer) => void;
  onOpenAllPeers: () => void;
}

export const PeersSection: React.FC<PeersSectionProps> = ({ onSelectPeer, onOpenAllPeers }) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [showExpandedGrid, setShowExpandedGrid] = useState<boolean>(false);

  const domains = ['All', 'Enterprise Architecture', 'AI Infrastructure', 'Capital Systems', 'Deep Systems', 'Biosystems'];

  const filteredPeers = selectedDomain === 'All'
    ? PEERS_DATA
    : PEERS_DATA.filter((p) => p.domain === selectedDomain);

  // The 4 featured cards matching the screenshot layout
  const featuredPeers = PEERS_DATA.slice(0, 4);

  return (
    <section
      id="peers-cohort-section"
      className="w-full py-20 md:py-28 lg:py-32 bg-[#f9f9f7] border-b border-[#e5e5e5]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Top Split Layout matching the exact screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Section Header */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span
              id="peers-section-label"
              className="text-[#5f5e5e] text-[11px] md:text-[12px] font-semibold tracking-[0.15em] uppercase font-sans mb-3"
            >
              SECTION 01 / THE PEERS
            </span>
            <h2
              id="peers-section-headline"
              className="text-[#1a1c1b] font-serif text-[36px] sm:text-[44px] md:text-[48px] font-normal leading-[1.12] tracking-[-0.015em] max-w-md"
            >
              Fourteen peers. Selected for depth, not just achievement.
            </h2>

            <p className="mt-4 text-[#444842] text-sm md:text-base leading-relaxed max-w-sm hidden md:block">
              We curate across orthogonal disciplines—not by net worth or title, but by the structural originality of the candidate&apos;s mental models.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <button
                id="toggle-all-peers-btn"
                onClick={() => setShowExpandedGrid(!showExpandedGrid)}
                className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#141e13] hover:text-[#3f4a3c] transition-colors pb-1 border-b border-[#141e13]"
              >
                <span>{showExpandedGrid ? 'Show Curated View' : 'Explore All 14 Peers'}</span>
                <ArrowRight size={13} className={showExpandedGrid ? 'rotate-90 transition-transform' : ''} />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Framed Gallery Mat Cards matching the screenshot */}
          {!showExpandedGrid ? (
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
                {/* Card 1: Sun Rong (Ergeon) */}
                <div
                  id="peer-frame-sun-rong"
                  onClick={() => onSelectPeer(featuredPeers[0])}
                  className="group cursor-pointer bg-[#eeeeec] p-2 sm:p-2.5 border border-[#e5e5e5] hover:border-[#141e13] transition-all duration-200 flex flex-col"
                  style={{ borderRadius: 0 }}
                >
                  <div className="aspect-[4/4.5] w-full bg-[#f4f4f2] overflow-hidden relative">
                    <img
                      src={featuredPeers[0].image}
                      alt={featuredPeers[0].name}
                      className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-black/65 backdrop-blur-[2px] px-1.5 py-0.5 text-[9px] text-[#fcfcfa] font-mono tracking-wider truncate">
                      ^ ergeon
                    </div>
                  </div>
                  <div className="pt-2 text-center">
                    <p className="text-[11px] font-sans font-medium text-[#1a1c1b] truncate">
                      {featuredPeers[0].name}
                    </p>
                    <p className="text-[9px] text-[#5f5e5e] font-mono truncate">
                      {featuredPeers[0].company}
                    </p>
                  </div>
                </div>

                {/* Card 2: Tracy Young Mat Frame */}
                <div
                  id="peer-frame-tracy-young"
                  onClick={() => onSelectPeer(featuredPeers[1])}
                  className="group cursor-pointer bg-[#f4f4f2] p-3 sm:p-3.5 border border-[#e5e5e5] hover:border-[#141e13] transition-all duration-200 flex flex-col justify-between aspect-[4/5.5]"
                  style={{ borderRadius: 0 }}
                >
                  <div className="h-full flex flex-col justify-center text-center px-1">
                    <div className="w-4 h-4 mx-auto mb-2 text-[#3f4a3c] opacity-60">
                      <Sparkles size={14} />
                    </div>
                    <p className="text-[11px] sm:text-[12px] font-sans text-[#1a1c1b] leading-tight font-normal">
                      Portrait of Tracy Young, a high-caliber peer selected for the Next Mile Club cohort.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#e2e3e1] text-center">
                    <span className="text-[9px] text-[#5f5e5e] font-mono uppercase tracking-wider">
                      TigerEye / ex-PlanGrid
                    </span>
                  </div>
                </div>

                {/* Card 3: Wei Deng Mat Frame */}
                <div
                  id="peer-frame-wei-deng"
                  onClick={() => onSelectPeer(featuredPeers[2])}
                  className="group cursor-pointer bg-[#f4f4f2] p-3 sm:p-3.5 border border-[#e5e5e5] hover:border-[#141e13] transition-all duration-200 flex flex-col justify-between aspect-[4/5.5]"
                  style={{ borderRadius: 0 }}
                >
                  <div className="h-full flex flex-col justify-center text-center px-1">
                    <div className="w-4 h-4 mx-auto mb-2 text-[#3f4a3c] opacity-60">
                      <Sparkles size={14} />
                    </div>
                    <p className="text-[11px] sm:text-[12px] font-sans text-[#1a1c1b] leading-tight font-normal">
                      Portrait of Wei Deng, a high-caliber peer selected for the Next Mile Club cohort.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#e2e3e1] text-center">
                    <span className="text-[9px] text-[#5f5e5e] font-mono uppercase tracking-wider">
                      Clipper Systems
                    </span>
                  </div>
                </div>

                {/* Card 4: Elena Rostova Portrait Frame */}
                <div
                  id="peer-frame-elena-rostova"
                  onClick={() => onSelectPeer(featuredPeers[3])}
                  className="group cursor-pointer bg-[#eeeeec] p-2 sm:p-2.5 border border-[#e5e5e5] hover:border-[#141e13] transition-all duration-200 flex flex-col"
                  style={{ borderRadius: 0 }}
                >
                  <div className="aspect-[4/4.5] w-full bg-[#f4f4f2] overflow-hidden relative">
                    <img
                      src={featuredPeers[3].image}
                      alt={featuredPeers[3].name}
                      className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="pt-2 text-center">
                    <p className="text-[11px] font-sans font-medium text-[#1a1c1b] truncate">
                      {featuredPeers[3].name}
                    </p>
                    <p className="text-[9px] text-[#5f5e5e] font-mono truncate">
                      {featuredPeers[3].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sub-caption matching gallery aesthetic */}
              <div className="mt-4 flex items-center justify-between text-[11px] text-[#5f5e5e] font-mono">
                <span>FOUR OF FOURTEEN CONFIRMED ATTENDEES</span>
                <span className="text-[#3f4a3c]">CLICK TO VIEW DOSSIER</span>
              </div>
            </div>
          ) : (
            /* Expanded Full 14 Cohort Grid */
            <div className="lg:col-span-7">
              {/* Filter pills */}
              <div className="flex flex-wrap gap-2 mb-6 pb-3 border-b border-[#e5e5e5]">
                {domains.map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDomain(d)}
                    className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider transition-colors ${
                      selectedDomain === d
                        ? 'bg-[#141e13] text-[#fcfcfa]'
                        : 'bg-[#eeeeec] text-[#444842] hover:bg-[#e2e3e1]'
                    }`}
                    style={{ borderRadius: 0 }}
                  >
                    {d}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 max-h-[520px] overflow-y-auto pr-1">
                {filteredPeers.map((peer) => (
                  <div
                    key={peer.id}
                    id={`peer-card-${peer.id}`}
                    onClick={() => onSelectPeer(peer)}
                    className="group cursor-pointer bg-[#f4f4f2] p-2.5 border border-[#e5e5e5] hover:border-[#141e13] transition-all flex flex-col"
                    style={{ borderRadius: 0 }}
                  >
                    <div className="aspect-square w-full bg-[#e8e8e6] overflow-hidden mb-2">
                      <img
                        src={peer.image}
                        alt={peer.name}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h4 className="text-xs font-sans font-medium text-[#1a1c1b] truncate">{peer.name}</h4>
                    <p className="text-[10px] text-[#5f5e5e] font-mono truncate">{peer.company}</p>
                    <span className="mt-1 text-[9px] text-[#3f4a3c] font-mono uppercase truncate">{peer.domain}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
