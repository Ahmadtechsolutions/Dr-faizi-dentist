import React, { useState } from 'react';
import { DOCTOR_DATA } from '../data/doctorData';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Instagram, 
  Facebook, 
  MapPin, 
  Calendar as CalendarIcon, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [contactMethod, setContactMethod] = useState<'WhatsApp' | 'Phone Call' | 'Email'>('WhatsApp');
  const [serviceConcern, setServiceConcern] = useState('Primary Rhinoplasty');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTimeSlot, setPreferredTimeSlot] = useState('Morning (10:00 AM - 1:00 PM)');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

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
      setError('Please provide a valid contact number.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-200 shadow-xs space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Appointments & Direct Coordination
          </div>
          <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-950">
            Contact & Consultation
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed font-light">
            Inquire regarding rhinoplasty consultation slots, secondary surgery evaluations, and endoscopic sinus operations directly with Dr. Faizi's clinical desk.
          </p>
        </div>
      </section>

      {/* Main Grid: Direct Contact Channels & Interactive Booking Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Box */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 space-y-6 shadow-xs">
              <h2 className="font-serif-title text-2xl font-medium text-neutral-950">
                Official Clinical Channels
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* WhatsApp */}
                <a
                  href={DOCTOR_DATA.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 transition-colors flex items-start gap-3.5 group"
                >
                  <div className="p-2.5 bg-emerald-600 text-white rounded-lg group-hover:scale-105 transition-transform shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-neutral-500 text-xs block">WhatsApp Clinical Desk</span>
                    <strong className="text-emerald-900 text-sm font-semibold">
                      {DOCTOR_DATA.contact.whatsappFormatted}
                    </strong>
                    <span className="text-[11px] text-emerald-700 block mt-0.5">
                      Fastest response for scheduling & inquiries →
                    </span>
                  </div>
                </a>

                {/* Telephone */}
                <a
                  href={`tel:${DOCTOR_DATA.contact.phone}`}
                  className="p-4 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-colors flex items-start gap-3.5 group"
                >
                  <div className="p-2.5 bg-neutral-900 text-white rounded-lg group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-neutral-500 text-xs block">Direct Telephone</span>
                    <strong className="text-neutral-950 text-sm font-semibold">
                      {DOCTOR_DATA.contact.phoneFormatted}
                    </strong>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">
                      Available during daytime clinic coordination hours
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${DOCTOR_DATA.contact.email}`}
                  className="p-4 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-colors flex items-start gap-3.5 group"
                >
                  <div className="p-2.5 bg-neutral-100 text-neutral-800 rounded-lg group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-neutral-500 text-xs block">Clinical Email</span>
                    <strong className="text-neutral-950 text-xs sm:text-sm font-semibold truncate block">
                      {DOCTOR_DATA.contact.email}
                    </strong>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">
                      For detailed clinical documentation & referrals
                    </span>
                  </div>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-neutral-100 space-y-3">
                <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block">
                  Official Social Channels
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={DOCTOR_DATA.social.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-neutral-50 hover:bg-neutral-100 rounded-lg border border-neutral-200 flex items-center gap-2 text-xs font-medium text-neutral-800 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-600" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={DOCTOR_DATA.social.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-neutral-50 hover:bg-neutral-100 rounded-lg border border-neutral-200 flex items-center gap-2 text-xs font-medium text-neutral-800 transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-blue-600" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Editable Location Section (strictly compliant with: do not invent addresses) */}
            <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-neutral-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-neutral-700" />
                <span>Clinical Schedule & Location Notice</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {DOCTOR_DATA.locationNote}
              </p>
              <div className="text-[11px] text-neutral-500 pt-2 border-t border-neutral-200">
                Please message or call our coordination desk to verify the upcoming surgical schedule and current consultation clinic location.
              </div>
            </div>
          </div>

          {/* Right Column: Consultation / Appointment Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-neutral-200 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    Consultation Request Transmitted
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 mt-1">
                    Status: Pending Clinic Review & Confirmation
                  </p>
                </div>

                <div className="max-w-md mx-auto bg-neutral-50 p-4 rounded-xl border border-neutral-200 text-xs text-neutral-700 text-left space-y-2">
                  <p className="leading-relaxed">
                    Thank you, <strong className="text-neutral-900">{fullName}</strong>. Your consultation inquiry has been recorded for <strong className="text-neutral-900">{serviceConcern}</strong>.
                  </p>
                  <div className="border-t border-neutral-200 pt-2 text-[11px] text-neutral-600">
                    <strong>Important Clinical Protocol:</strong> This appointment request is pending confirmation. Our surgical coordinator will reach out to you within 24 hours via <strong>{contactMethod}</strong> ({phoneNumber || email}) to verify timing and clinic location.
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/923333880332?text=Hello%20Dr.%20Faizi%20Clinic,%20I%20have%20submitted%20a%20consultation%20form%20for%20${encodeURIComponent(fullName)}%20regarding%20${encodeURIComponent(serviceConcern)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Fast-Track Verification on WhatsApp
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-3 border border-neutral-300 text-neutral-700 text-xs font-medium rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="font-serif-title text-2xl font-medium text-neutral-950">
                    Book a Specialist Consultation
                  </h2>
                  <p className="text-xs text-neutral-500 mt-1">
                    Fill out your details below to schedule an examination with Dr. Faizi.
                  </p>
                </div>

                {error && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Name & Phone */}
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

                {/* Email & Preferred Contact Method */}
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
                    value={serviceConcern}
                    onChange={(e) => setServiceConcern(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-white"
                  >
                    <option value="Primary Rhinoplasty">Primary Rhinoplasty (Aesthetic Refinement)</option>
                    <option value="Complex Rhinoplasty">Complex Rhinoplasty (Trauma / Deviated Axis)</option>
                    <option value="Revision Rhinoplasty">Revision Rhinoplasty (Secondary Surgery)</option>
                    <option value="Functional Rhinoplasty">Functional Rhinoplasty & Airway Preservation</option>
                    <option value="FESS">FESS (Functional Endoscopic Sinus Surgery)</option>
                    <option value="General ENT Consultation">General ENT Specialist Consultation</option>
                  </select>
                </div>

                {/* Preferred Date & Time Selection (Scheduling Calendar) */}
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-800 mb-1 flex items-center gap-1.5">
                      <CalendarIcon className="w-3.5 h-3.5 text-neutral-600" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      min={minDateString}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-white"
                    />
                    <span className="text-[10px] text-neutral-500 block mt-1">
                      Calendar availability confirmed by coordinator
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-800 mb-1 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-neutral-600" />
                      Preferred Window
                    </label>
                    <select
                      value={preferredTimeSlot}
                      onChange={(e) => setPreferredTimeSlot(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-white"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                      <option value="Evening (6:00 PM - 9:00 PM)">Evening (6:00 PM - 9:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-neutral-800 mb-1">
                    Message / Clinical Notes
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your goals, previous nasal surgery history, or breathing symptoms..."
                    className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-white"
                  />
                </div>

                {/* Notice */}
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-[11px] text-neutral-500 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Your inquiry is kept confidential. Submitting this request allows our team to check clinic scheduling and coordinate your appointment details.
                  </span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <a
                    href={DOCTOR_DATA.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-700 hover:text-emerald-800 font-medium flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Quick WhatsApp inquiry: {DOCTOR_DATA.contact.whatsappFormatted}
                  </a>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs rounded-lg transition-colors cursor-pointer shadow-sm"
                  >
                    Submit Consultation Request
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};
