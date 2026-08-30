import React, { useState } from 'react';
import { RETREAT_META, ITINERARY_DATA } from '../data/retreatData';
import { ChevronDown, ChevronUp, MapPin, Calendar, Users, ShieldAlert, Mountain, Clock } from 'lucide-react';

interface ProtocolSectionProps {
  onRequestInvitation: () => void;
}

export const ProtocolSection: React.FC<ProtocolSectionProps> = ({ onRequestInvitation }) => {
  const [showFullItinerary, setShowFullItinerary] = useState(false);
  const [activeItineraryDay, setActiveItineraryDay] = useState<number>(0);

  const protocolDetails = [
    {
      label: 'LOCATION',
      value: RETREAT_META.location,
      subValue: `${RETREAT_META.estateName} • ${RETREAT_META.altitude}`,
      icon: MapPin,
    },
    {
      label: 'DATES',
      value: RETREAT_META.dates,
      subValue: 'Autumn Equinox Convening (3 Days / 2 Nights)',
      icon: Calendar,
    },
    {
      label: 'COHORT SIZE',
      value: RETREAT_META.cohortSize,
      subValue: 'Curated across Enterprise, AI, Deep Systems & Capital',
      icon: Users,
    },
    {
      label: 'CHATHAM COVENANT',
      value: 'Strict Chatham House Rule',
      subValue: 'No recordings, zero social disclosures, zero pitch decks',
      icon: ShieldAlert,
    },
    {
      label: 'CONNECTIVITY',
      value: 'Analog Sanctuary',
      subValue: 'Digital lockboxes provided upon arrival • Emergency satellite dispatch available',
      icon: Mountain,
    },
  ];

  return (
    <section
      id="summit-protocol-section"
      className="w-full py-20 md:py-28 lg:py-36 bg-[#f9f9f7] border-b border-[#e5e5e5]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Main 2-Column Split matching the exact screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Section 03 / The Details & Summit Protocol Title */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span
              id="details-section-label"
              className="text-[#5f5e5e] text-[11px] md:text-[12px] font-semibold tracking-[0.15em] uppercase font-sans mb-3"
            >
              SECTION 03 / THE DETAILS
            </span>

            <h2
              id="protocol-section-headline"
              className="text-[#1a1c1b] font-serif text-[40px] sm:text-[48px] md:text-[52px] font-normal leading-[1.1] tracking-[-0.015em]"
            >
              Summit Protocol
            </h2>

            <p className="mt-4 text-[#444842] text-sm sm:text-base leading-relaxed max-w-md">
              A high-altitude framework designed to dismantle performative velocity and reconstruct foundational clarity.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
              <button
                id="toggle-itinerary-btn"
                onClick={() => setShowFullItinerary(!showFullItinerary)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#eeeeec] hover:bg-[#e2e3e1] text-[#141e13] text-xs font-mono tracking-wider uppercase transition-colors"
                style={{ borderRadius: 0 }}
              >
                <span>{showFullItinerary ? 'Close Full Itinerary' : 'Inspect 72-Hour Itinerary'}</span>
                {showFullItinerary ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              <button
                id="details-apply-btn"
                onClick={onRequestInvitation}
                className="text-xs font-mono tracking-wider uppercase text-[#141e13] hover:text-[#3f4a3c] py-2.5 px-2 border-b border-[#141e13]"
              >
                Request Cohort Seat →
              </button>
            </div>
          </div>

          {/* Right Column: Tabular Data List with Hairline Borders */}
          <div className="lg:col-span-7">
            <div
              id="protocol-details-table"
              className="divide-y divide-[#e5e5e5] border-t border-b border-[#e5e5e5]"
            >
              {protocolDetails.map((item, idx) => (
                <div
                  key={idx}
                  id={`protocol-row-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 hover:bg-[#f4f4f2]/60 transition-colors px-2"
                >
                  {/* Left Key in label-caps */}
                  <div className="sm:w-1/3">
                    <span className="text-[12px] font-medium tracking-[0.12em] uppercase font-sans text-[#5f5e5e]">
                      {item.label}
                    </span>
                  </div>

                  {/* Right Value in mono-data */}
                  <div className="sm:w-2/3 flex flex-col sm:items-end text-left sm:text-right">
                    <span className="text-[15px] sm:text-[16px] font-mono text-[#1a1c1b] tracking-normal font-normal">
                      {item.value}
                    </span>
                    <span className="text-[11px] sm:text-[12px] font-sans text-[#757871] mt-0.5">
                      {item.subValue}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expandable Interactive Itinerary Drawer */}
        {showFullItinerary && (
          <div
            id="expanded-itinerary-container"
            className="mt-16 pt-12 border-t border-[#e5e5e5] animate-in fade-in slide-in-from-top-4 duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-[#e5e5e5] gap-4">
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#3f4a3c]">
                  72-HOUR CHRONOLOGY
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1a1c1b] mt-1">
                  The Daily Cadence of Strategic Quietude
                </h3>
              </div>

              {/* Day Selection Tabs */}
              <div className="flex items-center gap-2">
                {ITINERARY_DATA.map((day, idx) => (
                  <button
                    key={day.dayNumber}
                    onClick={() => setActiveItineraryDay(idx)}
                    className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
                      activeItineraryDay === idx
                        ? 'bg-[#141e13] text-[#fcfcfa]'
                        : 'bg-[#eeeeec] text-[#5f5e5e] hover:bg-[#e2e3e1]'
                    }`}
                    style={{ borderRadius: 0 }}
                  >
                    Day {day.dayNumber}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Day Content */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 bg-[#f2f0eb] p-6 border border-[#e5e5e5]">
                <span className="text-xs font-mono uppercase text-[#3f4a3c] tracking-wider">
                  {ITINERARY_DATA[activeItineraryDay].date}
                </span>
                <h4 className="text-2xl font-serif text-[#1a1c1b] mt-2 mb-2">
                  {ITINERARY_DATA[activeItineraryDay].title}
                </h4>
                <p className="text-sm text-[#444842] leading-relaxed">
                  {ITINERARY_DATA[activeItineraryDay].subtitle}
                </p>
              </div>

              <div className="lg:col-span-8 space-y-4">
                {ITINERARY_DATA[activeItineraryDay].schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-[#ffffff] border border-[#e5e5e5] hover:border-[#3f4a3c] transition-colors"
                  >
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#3f4a3c] font-medium">
                        <Clock size={13} />
                        {item.time}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 bg-[#eeeeec] text-[#5f5e5e]">
                        {item.type}
                      </span>
                    </div>
                    <h5 className="text-base font-sans font-medium text-[#1a1c1b] mb-1">
                      {item.label}
                    </h5>
                    <p className="text-sm text-[#444842] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
