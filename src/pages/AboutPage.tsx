import React from 'react';
import { DOCTOR_DATA } from '../data/doctorData';
import { 
  ShieldCheck, 
  Award, 
  BookOpen, 
  Calendar, 
  MessageCircle, 
  CheckCircle2, 
  Stethoscope, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook 
} from 'lucide-react';

interface AboutPageProps {
  onOpenConsultation: () => void;
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-14 border border-neutral-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Doctor Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border border-neutral-200 aspect-3/4">
              <img
                src="/images/dr_faizi_portrait_1790127395291.jpg"
                alt={`${DOCTOR_DATA.name} - ENT Surgeon & Rhinoplasty Specialist`}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white">
                <div className="font-serif-title text-xl font-bold">{DOCTOR_DATA.name}</div>
                <div className="text-xs text-neutral-300">{DOCTOR_DATA.qualifications}</div>
                <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>{DOCTOR_DATA.professionalMembership}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Credentials & Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                Specialist Profile & Qualifications
              </span>
              <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-950">
                {DOCTOR_DATA.name}
              </h1>
              <p className="text-lg sm:text-xl text-neutral-700 font-serif">
                {DOCTOR_DATA.profession}
              </p>
            </div>

            {/* Verified Qualification Badges */}
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2.5">
              <div className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                Official Credentials & Memberships
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-neutral-900">FCPS</strong> (Fellow of College of Physicians and Surgeons)
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-neutral-900">FACS (USA)</strong> (Fellow of the American College of Surgeons)
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-neutral-900">Specialization:</strong> {DOCTOR_DATA.specialization}
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-neutral-900">Membership:</strong> {DOCTOR_DATA.professionalMembership}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-neutral-700 leading-relaxed font-light">
              Dr. Faizi is an ENT Surgeon and Associate Professor dedicated to precision rhinology and cosmetic nasal surgery. Combining academic leadership with focused surgical practice, he provides patient-centered care that unifies aesthetic refinement and unobstructed nasal airflow.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation with Dr. Faizi
              </button>

              <a
                href={DOCTOR_DATA.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-medium text-xs rounded-lg transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                WhatsApp: {DOCTOR_DATA.contact.whatsappFormatted}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Professional Biography Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-200 space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Surgical Background & Philosophy
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-medium text-neutral-950">
              Dual Focus: Form Harmonized with Respiration
            </h2>
            <p className="text-sm text-neutral-700 leading-relaxed">
              In modern facial surgery, the nose cannot be approached merely as an isolated cosmetic structure. It serves as the primary gateway for human respiration and humidification. Dr. Faizi’s dual training as an Otolaryngologist (ENT Surgeon) and Rhinoplasty Specialist ensures that cosmetic adjustments to the nasal dorsum, bridge width, and tip cartilage are always balanced with internal structural stability.
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              As an Associate Professor, Dr. Faizi remains actively committed to academic precision, ethical medical practice, and surgical mentorship. His European Rhinoplasty Society membership ensures the continuous adoption of structural preservation principles and modern endoscopic sinus techniques.
            </p>
          </div>

          {/* Three Pillars of Care */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-neutral-100">
            <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
              <Stethoscope className="w-5 h-5 text-neutral-900" />
              <h3 className="text-sm font-semibold text-neutral-900">
                Otolaryngological Precision
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Comprehensive endoscopic examination of the nasal septum, turbinates, and mucosal health prior to any surgical planning.
              </p>
            </div>

            <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
              <ShieldCheck className="w-5 h-5 text-neutral-900" />
              <h3 className="text-sm font-semibold text-neutral-900">
                Structural Preservation
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Prioritizing cartilage preservation and autologous grafting to safeguard against long-term collapse, pinching, or airway restriction.
              </p>
            </div>

            <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
              <BookOpen className="w-5 h-5 text-neutral-900" />
              <h3 className="text-sm font-semibold text-neutral-900">
                Transparent Expectations
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Clear and honest consultation regarding anatomical limitations, skin envelope dynamics, and realistic recovery timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editable Clinical Practice & Hospital Affiliations Placeholder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-neutral-200 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            <MapPin className="w-4 h-4 text-neutral-600" />
            <span>Consultation Schedule & Practice Locations</span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-4xl">
            {DOCTOR_DATA.locationNote}
          </p>
          <div className="pt-2 text-xs text-neutral-500 border-t border-neutral-200/80 flex flex-wrap items-center justify-between gap-4">
            <div>
              Direct Clinical Telephone: <a href={`tel:${DOCTOR_DATA.contact.phone}`} className="text-neutral-900 font-semibold">{DOCTOR_DATA.contact.phoneFormatted}</a>
            </div>
            <div>
              Email Coordinator: <a href={`mailto:${DOCTOR_DATA.contact.email}`} className="text-neutral-900 font-semibold">{DOCTOR_DATA.contact.email}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Profiles & Medical Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="p-8 bg-white rounded-2xl border border-neutral-200 space-y-4 max-w-2xl mx-auto">
          <h3 className="font-serif-title text-xl font-medium text-neutral-950">
            Follow Dr. Faizi’s Educational Channels
          </h3>
          <p className="text-xs text-neutral-600">
            Follow our verified profiles for rhinoplasty educational insights, patient guidance, and clinical updates:
          </p>
          <div className="flex items-center justify-center gap-4 pt-1">
            <a
              href={DOCTOR_DATA.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-lg text-xs font-medium transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>{DOCTOR_DATA.social.instagramHandle}</span>
            </a>
            <a
              href={DOCTOR_DATA.social.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-lg text-xs font-medium transition-colors"
            >
              <Facebook className="w-4 h-4" />
              <span>{DOCTOR_DATA.social.facebookHandle}</span>
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-[11px] text-neutral-500 leading-relaxed">
          {DOCTOR_DATA.medicalDisclaimer}
        </div>
      </section>
    </div>
  );
};
