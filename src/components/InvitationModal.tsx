import React, { useState } from 'react';
import { InvitationApplication } from '../types';
import { RETREAT_META } from '../data/retreatData';
import { X, CheckCircle2, ShieldCheck, FileText, ArrowRight, ArrowLeft, Stamp, Download, Printer } from 'lucide-react';

interface InvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InvitationModal: React.FC<InvitationModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<InvitationApplication>({
    fullName: '',
    email: '',
    organization: '',
    role: '',
    domain: 'Enterprise Architecture',
    bandwidthQuestion: '',
    solitudeStatement: '',
    agreedChathamHouse: false,
    agreedDigitalDisconnect: false,
    edition: 'October 24–26, 2024 (Kumaon Himalayas)',
  });
  const [dossierId, setDossierId] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (!isOpen) return null;

  const domains = [
    'Enterprise Architecture',
    'AI Infrastructure',
    'Capital Systems',
    'Deep Systems',
    'Biosystems',
  ];

  const handleInputChange = (field: keyof InvitationApplication, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Final submission
      setIsSubmitting(true);
      setTimeout(() => {
        const randomCode = `NMC-${Math.floor(1000 + Math.random() * 9000)}-${formData.domain.substring(0, 3).toUpperCase()}`;
        setDossierId(randomCode);
        setIsSubmitting(false);
        setCurrentStep(4);
      }, 600);
    }
  };

  const isStep1Valid =
    formData.fullName.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.organization.trim() !== '' &&
    formData.role.trim() !== '';

  const isStep2Valid =
    formData.bandwidthQuestion.trim().length > 20 &&
    formData.solitudeStatement.trim().length > 10;

  const isStep3Valid =
    formData.agreedChathamHouse && formData.agreedDigitalDisconnect;

  return (
    <div
      id="invitation-dossier-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-[2px] animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-[#f9f9f7] border border-[#141e13] shadow-2xl p-6 sm:p-10 max-h-[92vh] overflow-y-auto"
        style={{ borderRadius: 0 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-[#5f5e5e] hover:text-[#141e13] hover:bg-[#eeeeec] transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Top Progress & Header */}
        <div className="pb-4 mb-6 border-b border-[#e5e5e5]">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#3f4a3c] font-semibold">
              DOSSIER OF INTENT // CANDIDATE APPLICATION
            </span>
            {currentStep < 4 && (
              <span className="text-xs font-mono text-[#5f5e5e]">
                STEP {currentStep} OF 3
              </span>
            )}
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1c1b] mt-2">
            {currentStep === 1 && 'Candidate Profile & Focus'}
            {currentStep === 2 && 'The Architectural Inquiry'}
            {currentStep === 3 && 'Sanctuary Covenant & Protocol'}
            {currentStep === 4 && 'Dossier Registered & Sealed'}
          </h3>
        </div>

        {/* Step 1: Candidate Identity */}
        {currentStep === 1 && (
          <form onSubmit={handleNext} className="space-y-4">
            <p className="text-xs sm:text-sm text-[#444842] mb-4">
              Attendance is strictly capped at fourteen peers. Candidates are selected based on intellectual rigor, domain depth, and capacity for unscripted inquiry.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5f5e5e] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="e.g. Dr. Jennifer Morales"
                  className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#c4c8c0] focus:border-[#141e13] text-sm text-[#1a1c1b] outline-none"
                  style={{ borderRadius: 0 }}
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5f5e5e] mb-1">
                  Direct Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#c4c8c0] focus:border-[#141e13] text-sm text-[#1a1c1b] outline-none"
                  style={{ borderRadius: 0 }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5f5e5e] mb-1">
                  Organization / Venture *
                </label>
                <input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) => handleInputChange('organization', e.target.value)}
                  placeholder="e.g. Apex Compute Labs"
                  className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#c4c8c0] focus:border-[#141e13] text-sm text-[#1a1c1b] outline-none"
                  style={{ borderRadius: 0 }}
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5f5e5e] mb-1">
                  Principal Title / Role *
                </label>
                <input
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  placeholder="e.g. Chief Architect / Founder"
                  className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#c4c8c0] focus:border-[#141e13] text-sm text-[#1a1c1b] outline-none"
                  style={{ borderRadius: 0 }}
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5f5e5e] mb-1">
                Primary Architecture Discipline *
              </label>
              <select
                value={formData.domain}
                onChange={(e) => handleInputChange('domain', e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#c4c8c0] focus:border-[#141e13] text-sm text-[#1a1c1b] outline-none font-mono"
                style={{ borderRadius: 0 }}
              >
                {domains.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                disabled={!isStep1Valid}
                className={`px-8 py-3 bg-[#141e13] text-[#fcfcfa] text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-opacity ${
                  isStep1Valid ? 'hover:bg-[#3f4a3c]' : 'opacity-40 cursor-not-allowed'
                }`}
                style={{ borderRadius: 0 }}
              >
                <span>Proceed to Step 2</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </form>
        )}

        {/* Step 2: The Architectural Inquiry */}
        {currentStep === 2 && (
          <form onSubmit={handleNext} className="space-y-5">
            <p className="text-xs sm:text-sm text-[#444842]">
              At Next Mile Club, there are no presentations or sales decks. Your candidate inquiry forms the basis of your cohort discourse.
            </p>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5f5e5e] mb-1.5 font-semibold">
                1. What unsolved structural problem currently consumes the majority of your cognitive bandwidth? *
              </label>
              <textarea
                required
                rows={3}
                value={formData.bandwidthQuestion}
                onChange={(e) => handleInputChange('bandwidthQuestion', e.target.value)}
                placeholder="Describe the underlying system paradox, technical limit, or organizational topology you are attempting to solve..."
                className="w-full p-3 bg-[#ffffff] border border-[#c4c8c0] focus:border-[#141e13] text-sm text-[#1a1c1b] outline-none leading-relaxed"
                style={{ borderRadius: 0 }}
              />
              <span className="text-[10px] font-mono text-[#757871]">
                Min 20 characters • Evaluated for first-principles rigor
              </span>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5f5e5e] mb-1.5 font-semibold">
                2. What specific question do you need 72 hours of uninterrupted Himalayan silence to resolve? *
              </label>
              <textarea
                required
                rows={2}
                value={formData.solitudeStatement}
                onChange={(e) => handleInputChange('solitudeStatement', e.target.value)}
                placeholder="State your thesis or core interrogation in 1-2 precise sentences..."
                className="w-full p-3 bg-[#ffffff] border border-[#c4c8c0] focus:border-[#141e13] text-sm text-[#1a1c1b] outline-none leading-relaxed"
                style={{ borderRadius: 0 }}
              />
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="px-5 py-2.5 border border-[#c4c8c0] text-xs font-mono uppercase tracking-wider text-[#5f5e5e] hover:bg-[#eeeeec] flex items-center gap-1.5"
                style={{ borderRadius: 0 }}
              >
                <ArrowLeft size={13} />
                <span>Back</span>
              </button>

              <button
                type="submit"
                disabled={!isStep2Valid}
                className={`px-8 py-3 bg-[#141e13] text-[#fcfcfa] text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-opacity ${
                  isStep2Valid ? 'hover:bg-[#3f4a3c]' : 'opacity-40 cursor-not-allowed'
                }`}
                style={{ borderRadius: 0 }}
              >
                <span>Proceed to Covenant</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Sanctuary Covenant & Agreement */}
        {currentStep === 3 && (
          <form onSubmit={handleNext} className="space-y-5">
            <div className="bg-[#f2f0eb] p-4 border-l-2 border-[#141e13] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#3f4a3c] font-semibold block">
                THE HIMALAYAN SANCTUARY COVENANT
              </span>
              <p className="text-xs text-[#2f3130] leading-relaxed">
                By entering the Next Mile Club sanctuary, all participants commit unconditionally to the elimination of performative posturing, commercial solicitation, and real-time public broadcasting.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={formData.agreedChathamHouse}
                  onChange={(e) => handleInputChange('agreedChathamHouse', e.target.checked)}
                  className="mt-1 h-4 w-4 rounded-none accent-[#141e13]"
                />
                <span className="text-xs sm:text-sm text-[#1a1c1b] leading-snug">
                  <strong>I agree to the strict Chatham House Rule:</strong> Information received during the retreat may be utilized freely, but neither the identity nor the affiliation of the speaker(s) or participants may be revealed.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={formData.agreedDigitalDisconnect}
                  onChange={(e) => handleInputChange('agreedDigitalDisconnect', e.target.checked)}
                  className="mt-1 h-4 w-4 rounded-none accent-[#141e13]"
                />
                <span className="text-xs sm:text-sm text-[#1a1c1b] leading-snug">
                  <strong>I agree to the Analog Quarantine:</strong> I commit to placing cellular and digital transmitters into estate lockboxes for the 72-hour duration of the convening.
                </span>
              </label>
            </div>

            <div className="pt-2">
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5f5e5e] mb-1">
                Target Retreat Edition
              </label>
              <select
                value={formData.edition}
                onChange={(e) => handleInputChange('edition', e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#c4c8c0] text-xs font-mono text-[#1a1c1b] outline-none"
                style={{ borderRadius: 0 }}
              >
                <option value="October 24–26, 2024 (Kumaon Himalayas)">
                  October 24–26, 2024 (Autumn Equinox • Kumaon Himalayas)
                </option>
                <option value="April 17–19, 2025 (Kumaon Himalayas)">
                  April 17–19, 2025 (Spring Vernal • Kumaon Himalayas)
                </option>
                <option value="October 23–25, 2025 (Kumaon Himalayas)">
                  October 23–25, 2025 (Autumn High Ridge • Kumaon Himalayas)
                </option>
              </select>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="px-5 py-2.5 border border-[#c4c8c0] text-xs font-mono uppercase tracking-wider text-[#5f5e5e] hover:bg-[#eeeeec] flex items-center gap-1.5"
                style={{ borderRadius: 0 }}
              >
                <ArrowLeft size={13} />
                <span>Back</span>
              </button>

              <button
                type="submit"
                disabled={!isStep3Valid || isSubmitting}
                className={`px-8 py-3 bg-[#141e13] text-[#fcfcfa] text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-opacity ${
                  isStep3Valid && !isSubmitting
                    ? 'hover:bg-[#3f4a3c]'
                    : 'opacity-40 cursor-not-allowed'
                }`}
                style={{ borderRadius: 0 }}
              >
                <span>{isSubmitting ? 'Sealing Dossier...' : 'Submit Dossier of Intent'}</span>
                <CheckCircle2 size={14} />
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Stamped Dossier Confirmation Pass */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-[#f2f0eb] p-6 sm:p-8 border border-[#141e13] relative overflow-hidden">
              {/* Watermark stamp */}
              <div className="absolute top-4 right-4 text-[#3f4a3c]/30 rotate-12 flex items-center gap-1 font-mono text-xs uppercase border border-[#3f4a3c]/40 px-2 py-1 select-none">
                <Stamp size={14} />
                SEALED & FILED
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#3f4a3c] mb-3">
                <ShieldCheck size={16} />
                <span>DOSSIER RECORD GENERATED</span>
              </div>

              <h4 className="font-serif text-2xl sm:text-3xl text-[#1a1c1b] mb-1">
                {formData.fullName}
              </h4>
              <p className="text-xs font-mono text-[#5f5e5e]">
                {formData.role} • {formData.organization}
              </p>

              <div className="mt-6 pt-4 border-t border-[#c4c8c0] grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-[#757871] block text-[10px]">VERIFICATION CODE</span>
                  <span className="text-[#1a1c1b] font-semibold">{dossierId}</span>
                </div>
                <div>
                  <span className="text-[#757871] block text-[10px]">EDITION APPLIED</span>
                  <span className="text-[#1a1c1b] font-semibold">{formData.edition.split('(')[0]}</span>
                </div>
                <div>
                  <span className="text-[#757871] block text-[10px]">DISCIPLINE</span>
                  <span className="text-[#1a1c1b] font-semibold">{formData.domain}</span>
                </div>
                <div>
                  <span className="text-[#757871] block text-[10px]">SELECTION COMMITTEE STATUS</span>
                  <span className="text-[#3f4a3c] font-semibold">Under Review</span>
                </div>
              </div>

              <div className="mt-6 p-3 bg-[#ffffff] border border-[#e5e5e5] text-xs text-[#444842]">
                <strong className="text-[#1a1c1b]">Next Step:</strong> Maya Sharma and the Next Mile selection board will review your structural inquiry. Shortlisted candidates receive a private telephone colloquium invitation within 5 business days.
              </div>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 border border-[#c4c8c0] text-xs font-mono uppercase tracking-wider text-[#5f5e5e] hover:bg-[#eeeeec] flex items-center gap-1.5"
                style={{ borderRadius: 0 }}
              >
                <Printer size={13} />
                <span>Print Dossier</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#141e13] hover:bg-[#3f4a3c] text-[#fcfcfa] text-xs font-mono uppercase tracking-wider transition-colors"
                style={{ borderRadius: 0 }}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
