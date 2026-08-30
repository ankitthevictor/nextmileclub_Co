import React from 'react';
import { Calendar, Check, Users, Shield, Heart, Compass, Sparkles } from 'lucide-react';

interface PeersSectionProps {
  onSelectPeer?: (peer: any) => void;
  onOpenAllPeers?: () => void;
}

export const PeersSection: React.FC<PeersSectionProps> = () => {
  return (
    <section
      id="peers-cohort-section"
      className="w-full py-20 md:py-28 lg:py-32 bg-[#f9f9f7] border-b border-[#e5e5e5]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Top Header & Emotional Narrative */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span
            id="peers-section-label"
            className="text-[#3f4a3c] text-[11px] md:text-[12px] font-semibold tracking-[0.2em] uppercase font-mono mb-3 block"
          >
            SECTION 01 / THE PEERS & THE COVENANT
          </span>
          <h2
            id="peers-section-headline"
            className="text-[#1a1c1b] font-serif text-[36px] sm:text-[46px] md:text-[52px] font-normal leading-[1.12] tracking-[-0.015em]"
          >
            Fourteen to eighteen senior women. In a room where nobody is performing.
          </h2>

          <p className="mt-6 text-[#444842] text-base sm:text-lg leading-relaxed">
            When you reach senior leadership, the room gets smaller, the expectations get heavier, and the space to be genuinely vulnerable almost disappears. We don&apos;t bring women together for another corporate networking mixer or panel discussion. We convene 14 to 18 exceptional leaders who share the same unspoken pressures — to drop the armor, speak the truth, and get clear on what comes next.
          </p>
        </div>

        {/* 3 Emotional Pillars of the Room */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {/* Pillar 1 */}
          <div
            id="peer-pillar-1"
            className="bg-[#f2f0eb] p-6 sm:p-8 border border-[#e5e5e5] hover:border-[#141e13] transition-colors flex flex-col justify-between"
            style={{ borderRadius: 0 }}
          >
            <div>
              <div className="w-8 h-8 rounded-none bg-[#141e13] text-[#fcfcfa] flex items-center justify-center mb-5 font-mono text-xs">
                01
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1a1c1b] mb-3">
                No Titles at the Table
              </h3>
              <p className="text-sm text-[#444842] leading-relaxed">
                From the minute you arrive at the retreat, designations, investor decks, and status signaling stay outside. You are met as a thinker, a builder, and a human being.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#c4c8c0] text-[11px] font-mono text-[#5f5e5e] flex items-center gap-1.5">
              <Shield size={13} className="text-[#3f4a3c]" />
              <span>Chatham House Trust</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div
            id="peer-pillar-2"
            className="bg-[#f2f0eb] p-6 sm:p-8 border border-[#e5e5e5] hover:border-[#141e13] transition-colors flex flex-col justify-between"
            style={{ borderRadius: 0 }}
          >
            <div>
              <div className="w-8 h-8 rounded-none bg-[#141e13] text-[#fcfcfa] flex items-center justify-center mb-5 font-mono text-xs">
                02
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1a1c1b] mb-3">
                The Decisions We Postpone
              </h3>
              <p className="text-sm text-[#444842] leading-relaxed">
                Most leaders know the exact turning points they have been avoiding. Two days away from daily firefighting gives you the quiet conviction to address the choices that actually define your life.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#c4c8c0] text-[11px] font-mono text-[#5f5e5e] flex items-center gap-1.5">
              <Compass size={13} className="text-[#3f4a3c]" />
              <span>Unfiltered Clarity</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div
            id="peer-pillar-3"
            className="bg-[#f2f0eb] p-6 sm:p-8 border border-[#e5e5e5] hover:border-[#141e13] transition-colors flex flex-col justify-between"
            style={{ borderRadius: 0 }}
          >
            <div>
              <div className="w-8 h-8 rounded-none bg-[#141e13] text-[#fcfcfa] flex items-center justify-center mb-5 font-mono text-xs">
                03
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1a1c1b] mb-3">
                Allies for the Next Mile
              </h3>
              <p className="text-sm text-[#444842] leading-relaxed">
                A tight circle of women who understand the altitude you operate at. Peers who will celebrate your courage, tell you the unvarnished truth, and stay in your corner for years.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#c4c8c0] text-[11px] font-mono text-[#5f5e5e] flex items-center gap-1.5">
              <Heart size={13} className="text-[#3f4a3c]" />
              <span>Enduring Sisterhood</span>
            </div>
          </div>
        </div>

        {/* WHAT TO EXPECT - The Main Experiential Card */}
        <div
          id="what-to-expect-section"
          className="pt-4"
        >
          <div className="bg-[#f2f0eb] border border-[#141e13] p-8 sm:p-12 md:p-14 relative overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            {/* Top Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] sm:text-[12px] font-mono uppercase tracking-[0.25em] text-[#3f4a3c] font-semibold">
                WHAT TO EXPECT
              </span>
              <div className="h-[1px] flex-1 bg-[#c4c8c0]" />
            </div>

            {/* Main Headline */}
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1a1c1b] font-normal tracking-[-0.015em] mb-6 sm:mb-8 leading-tight">
              People. Two days. One decision each.
            </h3>

            {/* Narrative Paragraphs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-[#2f3130] text-base sm:text-lg leading-relaxed">
              <div className="space-y-4">
                <p className="font-normal">
                  No stage, no panel, no name tags. Three working sessions where you do the talking. Afternoons with nothing on them. Shared rooms, shared table, first names from the first minute.
                </p>
                <p className="text-sm text-[#5f5e5e] leading-relaxed">
                  You step away from the relentless cycle of meetings and pings into calm countryside air, surrounded by peers who listen with full presence and genuine empathy.
                </p>
              </div>

              <div className="space-y-4 flex flex-col justify-between">
                <p className="font-normal font-serif italic text-lg sm:text-xl text-[#1a1c1b] border-l-2 border-[#141e13] pl-4 py-1">
                  &ldquo;You leave with a commitment in your own handwriting — and thirteen women who will ask you about it six months from now.&rdquo;
                </p>

                <div className="pt-4 flex items-center gap-6 text-xs font-mono text-[#5f5e5e] flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <Users size={14} className="text-[#3f4a3c]" />
                    14–18 Peers
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#3f4a3c]" />
                    2 Days
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check size={14} className="text-[#3f4a3c]" />
                    1 Decision Each
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
