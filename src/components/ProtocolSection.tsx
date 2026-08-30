import React, { useState } from 'react';
import { RETREAT_META, ITINERARY_DATA } from '../data/retreatData';
import { ChevronDown, ChevronUp, MapPin, Calendar, Users, Shield, Mountain, Clock, Sparkles } from 'lucide-react';

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
      subValue: 'Two unhurried days at a private countryside estate',
      icon: Calendar,
    },
    {
      label: 'COHORT SIZE',
      value: RETREAT_META.cohortSize,
      subValue: '14–18 handpicked women in senior leadership',
      icon: Users,
    },
    {
      label: 'TRUST COVENANT',
      value: 'Strict Chatham House Rule',
      subValue: 'A safe space: no recordings, no posturing, pure honesty',
      icon: Shield,
    },
    {
      label: 'SETTING',
      value: 'Quiet Countryside Estate',
      subValue: 'Near Bangalore • Space to step away from screens & breathe deeply',
      icon: Mountain,
    },
  ];

  return (
    <section
      id="summit-protocol-section"
      className="w-full py-20 md:py-28 lg:py-36 bg-[#f9f9f7] border-b border-[#e5e5e5]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span
              id="details-section-label"
              className="text-[#3f4a3c] text-[11px] md:text-[12px] font-semibold tracking-[0.2em] uppercase font-mono mb-3"
            >
              SECTION 03 / THE RETREAT DETAILS
            </span>

            <h2
              id="protocol-section-headline"
              className="text-[#1a1c1b] font-serif text-[40px] sm:text-[48px] md:text-[52px] font-normal leading-[1.1] tracking-[-0.015em]"
            >
              The Rhythm of the Retreat
            </h2>

            <p className="mt-4 text-[#444842] text-sm sm:text-base leading-relaxed max-w-md">
              Two unhurried days near Bangalore designed to replace constant reactive busyness with deep clarity, honest peer conversations, and meaningful reflection.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
              <button
                id="toggle-itinerary-btn"
                onClick={() => setShowFullItinerary(!showFullItinerary)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#eeeeec] hover:bg-[#e2e3e1] text-[#141e13] text-xs font-mono tracking-wider uppercase transition-colors"
                style={{ borderRadius: 0 }}
              >
                <span>{showFullItinerary ? 'Close Daily Cadence' : 'View Retreat Itinerary'}</span>
                {showFullItinerary ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              <button
                id="details-apply-btn"
                onClick={onRequestInvitation}
                className="text-xs font-mono tracking-wider uppercase text-[#141e13] hover:text-[#3f4a3c] py-2.5 px-2 border-b border-[#141e13]"
              >
                Request An Invitation →
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
                  {/* Left Key */}
                  <div className="sm:w-1/3">
                    <span className="text-[12px] font-medium tracking-[0.12em] uppercase font-sans text-[#5f5e5e]">
                      {item.label}
                    </span>
                  </div>

                  {/* Right Value */}
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
                  RETREAT CHRONOLOGY
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1a1c1b] mt-1">
                  The Daily Cadence of Clarity
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

            {/* Active Day Details */}
            <div className="mt-8">
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#3f4a3c]">
                  {ITINERARY_DATA[activeItineraryDay].date}
                </span>
                <h4 className="text-xl sm:text-2xl font-serif text-[#1a1c1b] mt-1">
                  {ITINERARY_DATA[activeItineraryDay].title}
                </h4>
                <p className="text-sm text-[#5f5e5e] mt-1">
                  {ITINERARY_DATA[activeItineraryDay].subtitle}
                </p>
              </div>

              <div className="space-y-4">
                {ITINERARY_DATA[activeItineraryDay].schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-6 bg-[#ffffff] border border-[#e5e5e5] hover:border-[#141e13] transition-colors flex flex-col sm:flex-row gap-4 sm:gap-8 items-start"
                  >
                    <div className="sm:w-28 flex-shrink-0">
                      <span className="text-xs sm:text-sm font-mono font-medium text-[#141e13] bg-[#eeeeec] px-2.5 py-1 inline-flex items-center gap-1.5">
                        <Clock size={12} className="text-[#3f4a3c]" />
                        {item.time}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-serif text-base sm:text-lg text-[#1a1c1b] font-medium">
                        {item.label}
                      </h5>
                      <p className="text-xs sm:text-sm text-[#444842] mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
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
