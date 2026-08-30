import React from 'react';
import { PHILOSOPHY_TENETS } from '../data/retreatData';
import { ShieldCheck, Compass, Heart, Mountain, ArrowRight } from 'lucide-react';

interface PhilosophyViewProps {
  onRequestInvitation: () => void;
}

export const PhilosophyView: React.FC<PhilosophyViewProps> = ({ onRequestInvitation }) => {
  const icons = [Compass, ShieldCheck, Mountain, Heart];

  const comparisons = [
    {
      parameter: 'Setting & Atmosphere',
      traditional: 'Noisy hotel ballrooms & crowded convention halls',
      nextMile: 'A peaceful private countryside estate surrounded by nature near Bangalore',
    },
    {
      parameter: 'Conversation Style',
      traditional: 'Rehearsed elevator pitches & status signaling',
      nextMile: 'Vulnerable, honest peer dialogue under first names',
    },
    {
      parameter: 'Pacing & Attention',
      traditional: 'Rushed agendas, continuous Slack pings & email checks',
      nextMile: 'Unscripted afternoons, quiet forest walks & handwritten promises',
    },
    {
      parameter: 'The Room',
      traditional: 'Hundreds of attendees with name badges',
      nextMile: '14–18 exceptional women handpicked for depth and heart',
    },
    {
      parameter: 'Outcome',
      traditional: 'A stack of business cards you rarely contact',
      nextMile: 'Lifelong allies who hold you to your commitments and cheer you on',
    },
  ];

  return (
    <section id="philosophy-section" className="w-full py-20 md:py-28 bg-[#f9f9f7] border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#3f4a3c] text-[11px] md:text-[12px] font-semibold tracking-[0.2em] uppercase font-mono mb-3 block">
            THE MANIFESTO & PHILOSOPHY
          </span>
          <h2 className="text-[#1a1c1b] font-serif text-[38px] sm:text-[48px] md:text-[54px] font-normal leading-[1.08] tracking-[-0.015em]">
            Strategic Quietude for the Ambitious Heart.
          </h2>
          <p className="mt-6 text-[#444842] text-base sm:text-lg leading-relaxed">
            In a world that celebrates non-stop hustle, the rarest gift is uninterrupted space to breathe and think. We created Next Mile Club as a peaceful haven where senior women can step off the achievement treadmill, reconnect with what truly matters, and gain unshakeable clarity for their next chapter.
          </p>
        </div>

        {/* 4 Tenets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {PHILOSOPHY_TENETS.map((tenet, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={tenet.number}
                className="bg-[#f4f4f2] p-8 border border-[#e5e5e5] hover:border-[#141e13] transition-all flex flex-col justify-between"
                style={{ borderRadius: 0 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#e2e3e1]">
                    <span className="font-mono text-xs text-[#3f4a3c] font-semibold tracking-wider">
                      TENET {tenet.number}
                    </span>
                    <Icon size={18} className="text-[#3f4a3c]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1a1c1b] mb-3">
                    {tenet.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#444842] leading-relaxed">
                    {tenet.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#e2e3e1] flex items-center justify-between text-[11px] font-mono text-[#5f5e5e]">
                  <span>RETREAT PRINCIPLE</span>
                  <span>NEAR BANGALORE</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Comparison Table */}
        <div className="mt-16 bg-[#f2f0eb] p-8 md:p-12 border border-[#e5e5e5]">
          <div className="mb-8">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#3f4a3c]">
              THE DIFFERENCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#1a1c1b] mt-1">
              Conventional Conferences vs. Next Mile Club
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#c4c8c0] text-[11px] font-mono uppercase tracking-wider text-[#5f5e5e]">
                  <th className="py-3 px-4">Experience</th>
                  <th className="py-3 px-4">Typical Executive Summit</th>
                  <th className="py-3 px-4 text-[#141e13] font-semibold">Next Mile Club</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e5e5] text-sm">
                {comparisons.map((c, i) => (
                  <tr key={i} className="hover:bg-[#ffffff]/50 transition-colors">
                    <td className="py-4 px-4 font-mono text-xs text-[#5f5e5e]">{c.parameter}</td>
                    <td className="py-4 px-4 text-[#757871]">{c.traditional}</td>
                    <td className="py-4 px-4 text-[#141e13] font-medium bg-[#fcfcfa]/60">{c.nextMile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-[#c4c8c0]">
            <p className="text-xs font-mono text-[#5f5e5e]">
              CURATED COHORTS • STRICTLY 14–18 SEATS
            </p>
            <button
              onClick={onRequestInvitation}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#141e13] hover:bg-[#3f4a3c] text-[#fcfcfa] text-xs font-mono tracking-wider uppercase transition-colors"
              style={{ borderRadius: 0 }}
            >
              <span>Request An Invitation</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
