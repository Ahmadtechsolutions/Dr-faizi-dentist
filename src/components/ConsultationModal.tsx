import React, { useState } from 'react';
import { DOCTOR_DATA, SERVICES_DATA } from '../data/doctorData';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  Phone, 
  Mail, 
  MessageCircle, 
  CheckCircle2, 
  AlertCircle,
  ShieldCheck 
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedService = 'Primary Rhinoplasty',
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [contactMethod, setContactMethod] = useState<'WhatsApp' | 'Phone Call' | 'Email'>('WhatsApp');
  const [selectedService, setSelectedService] = useState(preselectedService);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTimeSlot, setPreferredTimeSlot] = useState('Morning (10:00 AM - 1:00 PM)');
  const [patientNote, setPatientNote] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Pre-calculate minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (!phoneNumber.trim() || phoneNumber.length < 9) {
      setError('Please provide a valid contact telephone or WhatsApp number.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setPatientNote('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-neutral-200 bg-neutral-900 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>Consultation Request</span>
            </div>
            <h2 className="font-serif-title text-xl sm:text-2xl font-bold mt-1 text-white">
              Schedule with {DOCTOR_DATA.name}
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              {DOCTOR_DATA.profession} · {DOCTOR_DATA.qualifications} · {DOCTOR_DATA.professionalMembership}
            </p>
          </div>
          <button
            onClick={handleResetAndClose}
            aria-label="Close form"
            className="p-2 text-neutral-400 hover:text-white bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">
                  Consultation Request Submitted
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 mt-1">
                  Status: Pending Clinical Confirmation
                </p>
              </div>

              <div className="max-w-md mx-auto bg-neutral-50 p-4 rounded-xl border border-neutral-200 text-xs text-neutral-700 text-left space-y-2">
                <p className="leading-relaxed">
                  Thank you, <strong className="text-neutral-900">{fullName}</strong>. Your consultation inquiry regarding <strong className="text-neutral-900">{selectedService}</strong> has been transmitted to our clinical desk.
                </p>
                <div className="border-t border-neutral-200 pt-2 text-[11px] text-neutral-600">
                  <strong>Important Notice:</strong> This appointment request is pending scheduling review. Our clinical coordinator will contact you via <strong>{contactMethod}</strong> ({phoneNumber || email}) within 24 hours to confirm date, available time slot, and clinic location.
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/923333880332?text=Hello%20Dr.%20Faizi%20Clinic,%20I%20just%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(fullName)}%20regarding%20${encodeURIComponent(selectedService)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Fast-Track on WhatsApp
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-800 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sarah Khan"
                    className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-800 mb-1">
                    Phone / WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="e.g. 0333 1234567"
                    className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-800 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-800 mb-1">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['WhatsApp', 'Phone Call', 'Email'] as const).map((method) => (
                      <button
                        type="button"
                        key={method}
                        onClick={() => setContactMethod(method)}
                        className={`py-2 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                          contactMethod === method
                            ? 'border-neutral-950 bg-neutral-950 text-white'
                            : 'border-neutral-200 text-neutral-700 bg-white hover:bg-neutral-50'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-medium text-neutral-800 mb-1">
                  Service / Clinical Concern <span className="text-rose-500">*</span>
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-white"
                >
                  <option value="Primary Rhinoplasty">Primary Rhinoplasty (Aesthetic Refinement)</option>
                  <option value="Complex Rhinoplasty">Complex Rhinoplasty (Trauma / Asymmetry)</option>
                  <option value="Revision Rhinoplasty">Revision Rhinoplasty (Secondary Surgery)</option>
                  <option value="Functional Rhinoplasty">Functional Rhinoplasty (Airway / Deviated Septum)</option>
                  <option value="FESS">FESS (Endoscopic Sinus Surgery)</option>
                  <option value="General ENT Consultation">General ENT Specialist Consultation</option>
                </select>
              </div>

              {/* Preferred Date and Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-neutral-50 p-4 rounded-xl border border-neutral-200">
                <div>
                  <label className="block text-xs font-medium text-neutral-800 mb-1 flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-neutral-600" />
                    Preferred Consultation Date
                  </label>
                  <input
                    type="date"
                    min={minDateString}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-white"
                  />
                  <span className="text-[10px] text-neutral-500 block mt-1">
                    Subject to clinical operating schedule
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-800 mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-neutral-600" />
                    Preferred Time Window
                  </label>
                  <select
                    value={preferredTimeSlot}
                    onChange={(e) => setPreferredTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-white"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                    <option value="Evening (6:00 PM - 9:00 PM)">Evening (6:00 PM - 9:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Message / Medical Concerns */}
              <div>
                <label className="block text-xs font-medium text-neutral-800 mb-1">
                  Describe Your Goals or Clinical Symptoms
                </label>
                <textarea
                  rows={3}
                  value={patientNote}
                  onChange={(e) => setPatientNote(e.target.value)}
                  placeholder="Share any specific cosmetic goals, prior nasal injuries, previous surgeries, or breathing concerns..."
                  className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-white"
                />
              </div>

              {/* Medical Disclaimer Note */}
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-[11px] text-neutral-500 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Consultations are strictly confidential. Submission of this form requests an appointment slot and does not constitute a doctor-patient relationship until clinical intake is completed.
                </span>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <a
                  href={DOCTOR_DATA.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 order-2 sm:order-1"
                >
                  <MessageCircle className="w-4 h-4" />
                  Prefer direct WhatsApp chat? Click here
                </a>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-sm rounded-lg shadow-sm transition-colors cursor-pointer order-1 sm:order-2"
                >
                  Submit Consultation Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
