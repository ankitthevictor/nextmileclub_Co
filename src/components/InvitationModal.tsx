import React, { useState } from 'react';
import { InvitationApplication } from '../types';
import { RETREAT_META, CONVENER_INFO } from '../data/retreatData';
import { X, CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft, Stamp, Printer, Mail, Linkedin, ExternalLink, Copy, Check, AlertCircle, Send } from 'lucide-react';

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
    linkedinUrl: '',
    bandwidthQuestion: '',
    lookingFor: '',
    topPriorities: '',
    agreedChathamHouse: false,
    edition: 'Dates to be announced soon',
  });
  const [dossierId, setDossierId] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedTime, setSubmittedTime] = useState<string>('');
  const [transmissionStatus, setTransmissionStatus] = useState<'idle' | 'sent' | 'fallback'>('idle');
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleInputChange = (field: keyof InvitationApplication, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Final real submission to thenextmileclub@gmail.com
      setIsSubmitting(true);
      const randomCode = `NMC-${Math.floor(1000 + Math.random() * 9000)}-${formData.organization ? formData.organization.replace(/[^a-zA-Z]/g, '').substring(0, 3).toUpperCase() : 'SEL'}`;
      setDossierId(randomCode);
      const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      setSubmittedTime(dateStr);

      // Save locally to localStorage as instant client-side durable record
      try {
        const stored = localStorage.getItem('nmc_dossiers') || '[]';
        const parsed = JSON.parse(stored);
        parsed.unshift({
          id: randomCode,
          submittedAt: new Date().toISOString(),
          data: formData,
        });
        localStorage.setItem('nmc_dossiers', JSON.stringify(parsed));
      } catch (err) {
        console.warn('Local storage write warning:', err);
      }

      // Real email transmission to thenextmileclub@gmail.com via FormSubmit AJAX service
      try {
        const response = await fetch(`https://formsubmit.co/ajax/${RETREAT_META.emailDestination}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            _subject: `New Next Mile Club Application: ${formData.fullName} (${formData.role}, ${formData.organization})`,
            _template: 'table',
            _captcha: 'false',
            _replyto: formData.email,
            'Applicant Name': formData.fullName,
            'Applicant Email': formData.email,
            'Organization / Company': formData.organization,
            'Designation / Role': formData.role,
            'LinkedIn Profile URL': formData.linkedinUrl,
            '1. Core Problem & Bandwidth Question': formData.bandwidthQuestion,
            '2. What Looking For From Next Mile Club': formData.lookingFor,
            '3. Top 3 Life Priorities Right Now': formData.topPriorities,
            'Target Edition': formData.edition,
            'Chatham House Covenant': 'Agreed unconditionally',
            'Dossier Verification ID': randomCode,
            'Submission Date': dateStr,
          }),
        });

        if (response.ok) {
          setTransmissionStatus('sent');
        } else {
          setTransmissionStatus('fallback');
        }
      } catch (error) {
        console.warn('FormSubmit transmission error, switching to fallback:', error);
        setTransmissionStatus('fallback');
      } finally {
        setIsSubmitting(false);
        setCurrentStep(4);
      }
    }
  };

  // Validation rules
  const isValidUrl = (url: string) => {
    const trimmed = url.trim();
    return trimmed.length > 5 && (trimmed.includes('linkedin.com') || trimmed.startsWith('http') || trimmed.includes('/in/'));
  };

  const isStep1Valid =
    formData.fullName.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.organization.trim() !== '' &&
    formData.role.trim() !== '' &&
    isValidUrl(formData.linkedinUrl);

  const isStep2Valid =
    formData.bandwidthQuestion.trim().length >= 15 &&
    formData.lookingFor.trim().length >= 10 &&
    formData.topPriorities.trim().length >= 10;

  const isStep3Valid = formData.agreedChathamHouse;

  // Prepare full formatted text for email and copy
  const rawApplicationText =
    `NEXT MILE CLUB - CANDIDATE DOSSIER OF INTENT\n` +
    `Verification ID: ${dossierId}\n` +
    `Date: ${submittedTime || new Date().toLocaleDateString()}\n` +
    `--------------------------------------------------\n` +
    `APPLICANT PROFILE\n` +
    `Full Name: ${formData.fullName}\n` +
    `Email: ${formData.email}\n` +
    `Organization: ${formData.organization}\n` +
    `Role / Designation: ${formData.role}\n` +
    `LinkedIn Profile: ${formData.linkedinUrl}\n\n` +
    `INTENT & INQUIRIES\n` +
    `1. What brings you to Next Mile Club / Core Challenge:\n${formData.bandwidthQuestion}\n\n` +
    `2. What You Are Looking For From This Peer Circle:\n${formData.lookingFor}\n\n` +
    `3. Top 3 Priorities in Life Right Now:\n${formData.topPriorities}\n\n` +
    `AGREEMENTS\n` +
    `Target Edition: ${formData.edition} (Near Bangalore)\n` +
    `Chatham House Rule: Agreed\n` +
    `Recipient: ${RETREAT_META.emailDestination}\n`;

  const emailSubject = encodeURIComponent(`Next Mile Club Application - ${formData.fullName} (${formData.organization})`);
  const emailBody = encodeURIComponent(rawApplicationText);
  const mailtoUrl = `mailto:${RETREAT_META.emailDestination}?subject=${emailSubject}&body=${emailBody}`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(rawApplicationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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
            {currentStep === 1 && 'Candidate Profile'}
            {currentStep === 2 && 'Inquiry & Intent'}
            {currentStep === 3 && 'Retreat Agreement & Privacy'}
            {currentStep === 4 && 'Application Registered & Received'}
          </h3>
        </div>

        {/* Step 1: Candidate Identity */}
        {currentStep === 1 && (
          <form onSubmit={handleNext} className="space-y-4">
            <p className="text-xs sm:text-sm text-[#444842] mb-4">
              Attendance is strictly capped at 14–18 peers. Candidates are selected based on depth of experience, authentic ambition, and capacity for candid peer dialogue.
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
                  placeholder="Your full name"
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
                  placeholder="your.email@organization.com"
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
                  placeholder="Organization or current venture"
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
                  placeholder="Current leadership role or title"
                  className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#c4c8c0] focus:border-[#141e13] text-sm text-[#1a1c1b] outline-none"
                  style={{ borderRadius: 0 }}
                />
              </div>
            </div>

            {/* Mandatory LinkedIn link field */}
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5f5e5e] mb-1">
                LinkedIn Profile Link * <span className="text-[#3f4a3c] font-normal lowercase">(mandatory)</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#5f5e5e]">
                  <Linkedin size={15} />
                </div>
                <input
                  type="url"
                  required
                  value={formData.linkedinUrl}
                  onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
                  placeholder="https://www.linkedin.com/in/your-profile"
                  className="w-full pl-9 pr-3.5 py-2.5 bg-[#ffffff] border border-[#c4c8c0] focus:border-[#141e13] text-sm text-[#1a1c1b] outline-none font-mono"
                  style={{ borderRadius: 0 }}
                />
              </div>
              <span className="text-[10px] font-mono text-[#757871] mt-1 block">
                Required for identity verification and peer cohort curation
              </span>
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
              At Next Mile Club, there are no sales decks or pitches. Your candidate inquiry forms the basis of your cohort discourse.
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
                placeholder="Describe the underlying challenge, strategic inflection, or organizational paradox you are navigating..."
                className="w-full p-3 bg-[#ffffff] border border-[#c4c8c0] focus:border-[#141e13] text-sm text-[#1a1c1b] outline-none leading-relaxed"
                style={{ borderRadius: 0 }}
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5f5e5e] mb-1.5 font-semibold">
                2. What are you looking for from this club? *
              </label>
              <textarea
                required
                rows={3}
                value={formData.lookingFor}
                onChange={(e) => handleInputChange('lookingFor', e.target.value)}
                placeholder="Describe what you hope to experience, explore, or gain from this peer cohort..."
                className="w-full p-3 bg-[#ffffff] border border-[#c4c8c0] focus:border-[#141e13] text-sm text-[#1a1c1b] outline-none leading-relaxed"
                style={{ borderRadius: 0 }}
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5f5e5e] mb-1.5 font-semibold">
                3. Your top 3 priorities in life right now *
              </label>
              <textarea
                required
                rows={3}
                value={formData.topPriorities}
                onChange={(e) => handleInputChange('topPriorities', e.target.value)}
                placeholder="1. ...&#10;2. ...&#10;3. ..."
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

        {/* Step 3: Retreat Agreement & Privacy */}
        {currentStep === 3 && (
          <form onSubmit={handleNext} className="space-y-5">
            <div className="bg-[#f2f0eb] p-4 border-l-2 border-[#141e13] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#3f4a3c] font-semibold block">
                THE RETREAT AGREEMENT
              </span>
              <p className="text-xs text-[#2f3130] leading-relaxed">
                By entering Next Mile Club, all participants commit to a safe, supportive space free of posturing, commercial solicitation, and social media broadcasting.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  required
                  checked={formData.agreedChathamHouse}
                  onChange={(e) => handleInputChange('agreedChathamHouse', e.target.checked)}
                  className="mt-1 h-4 w-4 rounded-none accent-[#141e13]"
                />
                <span className="text-xs sm:text-sm text-[#1a1c1b] leading-snug">
                  <strong>I agree to the Chatham House Rule:</strong> Information shared during the retreat stays confidential. You are free to use the insights, but no participant&apos;s identity or personal story may be shared outside.
                </span>
              </label>
            </div>

            {/* Target Retreat Edition Note (Dates to be announced soon) */}
            <div className="pt-2">
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5f5e5e] mb-1.5">
                Target Retreat Edition
              </label>
              <div className="p-3.5 bg-[#ffffff] border border-[#c4c8c0] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-mono font-semibold text-[#1a1c1b] block">
                    Inaugural Edition
                  </span>
                  <span className="text-xs text-[#5f5e5e]">
                    Near Bangalore Cohort
                  </span>
                </div>
                <span className="inline-block px-3 py-1 bg-[#eeeeec] border border-[#d8d8d6] text-xs font-mono font-medium text-[#141e13]">
                  Dates to be announced soon
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#757871] mt-1 block">
                Applications received will receive primary notification and priority selection upon date finalization.
              </span>
            </div>

            <div className="pt-2 text-xs font-mono text-[#5f5e5e] bg-[#f4f4f2] p-3 border border-[#e5e5e5]">
              <span className="block text-[10px] text-[#757871] uppercase mb-0.5">SUBMISSION ROUTING</span>
              All dossier data is transmitted directly to: <strong className="text-[#141e13]">thenextmileclub@gmail.com</strong>
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
                <span>{isSubmitting ? 'Submitting Dossier...' : 'Submit Dossier of Intent'}</span>
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
                <span>DOSSIER RECORD GENERATED & TRANSMITTED</span>
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
                  <span className="text-[#757871] block text-[10px]">EDITION</span>
                  <span className="text-[#1a1c1b] font-semibold">Dates to be announced soon</span>
                </div>
                <div>
                  <span className="text-[#757871] block text-[10px]">TRANSMITTED TO</span>
                  <span className="text-[#1a1c1b] font-semibold">thenextmileclub@gmail.com</span>
                </div>
                <div>
                  <span className="text-[#757871] block text-[10px]">SELECTION STATUS</span>
                  <span className="text-[#3f4a3c] font-semibold">Under Review</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#ffffff] border border-[#e5e5e5] text-xs text-[#444842] space-y-3">
                {transmissionStatus === 'sent' ? (
                  <div className="flex items-start gap-2 text-[#2b4c2b] bg-[#eef7ee] p-3 border border-[#c3e6c3]">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#2b4c2b]" />
                    <div>
                      <p className="font-semibold font-mono text-[11px] uppercase tracking-wider">
                        Transmission Successful
                      </p>
                      <p className="text-xs text-[#2b4c2b] mt-0.5">
                        Your application has been routed directly to <strong className="font-mono">thenextmileclub@gmail.com</strong>.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-2 text-[#61451e] bg-[#fbf5eb] p-3 border border-[#ebd8b7]">
                    <AlertCircle size={16} className="mt-0.5 shrink-0 text-[#825d25]" />
                    <div>
                      <p className="font-semibold font-mono text-[11px] uppercase tracking-wider">
                        Direct Delivery & Backup
                      </p>
                      <p className="text-xs text-[#61451e] mt-0.5">
                        Your application is saved. You can also click <strong>&ldquo;Send via Email App&rdquo;</strong> below or copy the formatted text to send directly to <strong className="font-mono">thenextmileclub@gmail.com</strong>.
                      </p>
                    </div>
                  </div>
                )}

                <p className="text-xs leading-relaxed">
                  <strong className="text-[#1a1c1b]">Next Steps:</strong> {CONVENER_INFO.name} and the Next Mile selection board will review your profile. Shortlisted candidates will receive private correspondence prior to the public announcement of dates.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={mailtoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-[#141e13] text-[#fcfcfa] hover:bg-[#3f4a3c] text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                  style={{ borderRadius: 0 }}
                >
                  <Send size={13} />
                  <span>Send via Email App</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyText}
                  className="px-4 py-2.5 border border-[#c4c8c0] text-xs font-mono uppercase tracking-wider text-[#141e13] hover:bg-[#eeeeec] flex items-center gap-1.5 transition-colors"
                  style={{ borderRadius: 0 }}
                >
                  {copied ? <Check size={13} className="text-green-700" /> : <Copy size={13} />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Application Text'}</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="px-4 py-2.5 border border-[#c4c8c0] text-xs font-mono uppercase tracking-wider text-[#5f5e5e] hover:bg-[#eeeeec] flex items-center gap-1.5"
                  style={{ borderRadius: 0 }}
                >
                  <Printer size={13} />
                  <span>Print</span>
                </button>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#e5e5e0] hover:bg-[#d8d8d2] text-[#141e13] text-xs font-mono uppercase tracking-wider transition-colors"
                style={{ borderRadius: 0 }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
