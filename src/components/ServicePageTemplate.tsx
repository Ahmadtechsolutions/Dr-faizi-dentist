import React, { useState } from 'react';
import { ServiceDetail, DOCTOR_DATA } from '../data/doctorData';
import { 
  Calendar, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  ChevronDown, 
  ShieldCheck, 
  ShieldAlert, 
  ArrowRight,
  Phone,
  HelpCircle 
} from 'lucide-react';

interface ServicePageTemplateProps {
  service: ServiceDetail;
  onOpenConsultation: (serviceTitle: string) => void;
  onNavigate: (path: string) => void;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  service,
  onOpenConsultation,
  onNavigate,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12">
      {/* Service Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-14 border border-neutral-200 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            <span className="text-neutral-900">{DOCTOR_DATA.brand}</span>
            <span>·</span>
            <span>Dedicated Procedure Page</span>
            <span>·</span>
            <span className="text-emerald-700">{DOCTOR_DATA.professionalMembership}</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-950">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 font-serif">
              {service.subtitle}
            </p>
          </div>

          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-3xl font-light">
            {service.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenConsultation(service.title)}
              className="px-6 py-3 bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation for {service.title}
            </button>

            <a
              href={`https://wa.me/923333880332?text=Hello%20Dr.%20Faizi%20Clinic,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(service.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-medium text-xs rounded-lg transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              WhatsApp Clinic Desk
            </a>
          </div>
        </div>
      </section>

      {/* What Is The Procedure Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
              Procedure Definition
            </div>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-medium text-neutral-950">
              What Is {service.title}?
            </h2>
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-600 space-y-2">
              <div className="font-semibold text-neutral-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Specialist Clinical Standard</span>
              </div>
              <p>
                Performed under the strict surgical oversight of {DOCTOR_DATA.name}, {DOCTOR_DATA.qualifications}.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
              {service.whatIsIt}
            </p>
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Medical Notice:</strong> A comprehensive physical examination and diagnostic consultation are mandatory to evaluate individual anatomical feasibility, cartilage thickness, and clinical suitability. Surgical outcomes cannot be guaranteed.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who May Seek Consultation (Candidate Profile) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-200 space-y-6">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
              Clinical Assessment
            </div>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-medium text-neutral-950">
              Who May Seek Consultation
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Patients typically consult Dr. Faizi regarding {service.title} for the following anatomical indications:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.candidateProfile.map((profileItem, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                  {profileItem}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Surgical Process Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900 text-white rounded-2xl p-8 sm:p-12 border border-neutral-800 space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
              Step-by-Step Protocol
            </div>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-medium">
              General Surgical Process Overview
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300">
              A structured, evidence-based surgical trajectory designed to ensure patient safety, comfort, and anatomical precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div key={idx} className="p-5 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2.5">
                <div className="text-xs font-semibold text-emerald-400">
                  Phase 0{idx + 1}
                </div>
                <h3 className="text-sm font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery & Aftercare Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-200 space-y-6">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
              Healing & Follow-Up
            </div>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-medium text-neutral-950">
              Recovery & Aftercare Information
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Adherence to post-operative guidelines ensures protected tissue remodeling and comfortable recuperation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.recoveryInfo.map((info, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-900">
                  <Clock className="w-3.5 h-3.5 text-neutral-600" />
                  <span>{info.title}</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {info.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific FAQs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-200 space-y-6">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
              Questions & Answers
            </div>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-medium text-neutral-950">
              FAQs Regarding {service.title}
            </h2>
          </div>

          <div className="space-y-3 max-w-3xl">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border border-neutral-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 bg-neutral-50 hover:bg-neutral-100 flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-neutral-900">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-4 bg-white text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-950 text-white rounded-2xl p-8 sm:p-12 border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl space-y-2">
            <h3 className="font-serif-title text-2xl font-medium">
              Consult with Dr. Faizi Regarding {service.title}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Book a comprehensive examination to discuss your concerns, review anatomical expectations, and plan safe surgical care.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenConsultation(service.title)}
              className="px-5 py-3 bg-white hover:bg-neutral-100 text-neutral-950 font-medium text-xs rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation
            </button>
            <a
              href={DOCTOR_DATA.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs rounded-lg transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Medical Legal Notice */}
      <div className="max-w-4xl mx-auto px-4 text-center text-[11px] text-neutral-500 leading-relaxed">
        {DOCTOR_DATA.medicalDisclaimer}
      </div>
    </div>
  );
};
