import React from 'react';
import { DOCTOR_DATA, BEFORE_AFTER_CASES, INITIAL_REVIEWS, GENERAL_FAQS, BeforeAfterCase } from '../data/doctorData';
import { BeforeAfterCard } from '../components/BeforeAfterSlider';
import { 
  ShieldCheck, 
  Calendar, 
  MessageCircle, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Star, 
  Phone, 
  Mail, 
  HelpCircle,
  Stethoscope,
  Activity,
  Layers,
  Repeat
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: (service?: string) => void;
  onOpenLightbox: (caseItem: BeforeAfterCase) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenLightbox,
}) => {
  const featuredCases = BEFORE_AFTER_CASES.slice(0, 2);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-900 text-white pt-10 pb-20 lg:py-28">
        {/* Background Image with Architectural Luxury */}
        <div className="absolute inset-0 z-0 opacity-15 mix-blend-luminosity">
          <img
            src="/images/hero_clinic_suite_1790127410023.jpg"
            alt="Dr Faizi Rhinoplasty Consultation Suite"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Doctor Qualifications & Accreditations Line */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-emerald-400 tracking-wider">
                <span className="text-white font-semibold">{DOCTOR_DATA.profession}</span>
                <span className="text-neutral-500">·</span>
                <span className="text-neutral-200">{DOCTOR_DATA.qualifications}</span>
                <span className="text-neutral-500">·</span>
                <span className="text-emerald-400">{DOCTOR_DATA.professionalMembership}</span>
              </div>

              {/* Marquee Brand Headline */}
              <div className="space-y-2">
                <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.1]">
                  Specialized Rhinoplasty & FESS Surgery
                </h1>
                <p className="text-xl sm:text-2xl text-neutral-300 font-light font-serif">
                  {DOCTOR_DATA.brand}
                </p>
              </div>

              {/* Short Professional Introduction */}
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl font-light">
                Providing precision aesthetic nasal contouring and restorative airway surgery. Focused on harmonious facial balance, anatomical preservation, and optimal respiratory function.
              </p>

              {/* Trust Indicators */}
              <div className="pt-2 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>{DOCTOR_DATA.specialization}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>FCPS, FACS (USA)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>Airway-First Approach</span>
                </div>
              </div>

              {/* Primary Call-to-Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => onOpenConsultation('Primary Rhinoplasty')}
                  className="px-6 py-3.5 bg-white hover:bg-neutral-100 text-neutral-950 font-medium text-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Consultation
                </button>

                <a
                  href={DOCTOR_DATA.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us ({DOCTOR_DATA.contact.whatsappFormatted})
                </a>
              </div>
            </div>

            {/* Right Column: Doctor's Professional Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative max-w-sm sm:max-w-md w-full">
                {/* Visual Frame */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-950 aspect-3/4">
                  <img
                    src="/images/dr_faizi_portrait_1790127395291.jpg"
                    alt={`${DOCTOR_DATA.name} - ${DOCTOR_DATA.profession}`}
                    className="w-full h-full object-cover object-top filter contrast-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                  
                  {/* Overlay Credential Box */}
                  <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-neutral-800/80 text-left">
                    <div className="text-base font-semibold text-white">
                      {DOCTOR_DATA.name}
                    </div>
                    <div className="text-xs text-neutral-300">
                      {DOCTOR_DATA.profession}
                    </div>
                    <div className="mt-1 text-[11px] text-emerald-400 font-medium flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                      <span>{DOCTOR_DATA.professionalMembership}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Dr. Faizi Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border border-neutral-200 shadow-inner">
              <img
                src="/images/dr_faizi_portrait_1790127395291.jpg"
                alt={DOCTOR_DATA.name}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Surgeon Profile
            </div>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-medium text-neutral-950">
              Dr. Faizi
            </h2>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-neutral-600 font-medium">
              <span>{DOCTOR_DATA.profession}</span>
              <span>·</span>
              <span>{DOCTOR_DATA.qualifications}</span>
              <span>·</span>
              <span className="text-neutral-900">{DOCTOR_DATA.specialization}</span>
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Dr. Faizi is an ENT Surgeon and Associate Professor possessing FCPS and FACS (USA) credentials. As an active Member of the Rhinoplasty Society of Europe, his surgical practice centers on primary cosmetic rhinoplasty, demanding revision cases, structural trauma realignment, and functional endoscopic sinus surgery (FESS).
            </p>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Each consultation is conducted with strict confidentiality and meticulous anatomical assessment, focusing on functional airway patency and personalized aesthetic balance.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('/about')}
                className="text-xs font-semibold text-neutral-950 hover:text-neutral-700 underline flex items-center gap-1 cursor-pointer"
              >
                Read Complete Surgeon Profile <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onOpenConsultation('Primary Rhinoplasty')}
                className="px-4 py-2 bg-neutral-950 text-white rounded-lg text-xs font-medium hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Surgical Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Dedicated Services
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-medium text-neutral-950 mt-1">
            Specialist Rhinoplasty & Sinus Surgery
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2">
            Every procedure is planned on its own dedicated clinical framework to address both cosmetic shape and respiratory airway integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Primary Rhinoplasty */}
          <div className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-xl font-semibold text-neutral-950">
                Primary Rhinoplasty
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Refinement of dorsal humps, nasal width, and tip definition for first-time patients, tailored to facial proportions with airway preservation.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate('/rhinoplasty')}
                className="text-xs font-semibold text-neutral-950 hover:text-neutral-700 flex items-center gap-1 cursor-pointer"
              >
                Dedicated Service Page <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Complex Rhinoplasty */}
          <div className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-xl font-semibold text-neutral-950">
                Complex Rhinoplasty
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Reconstructive surgery for severe traumatic fractures, significant crooked axis deviation, and thick skin requiring advanced cartilage grafting.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate('/complex-rhinoplasty')}
                className="text-xs font-semibold text-neutral-950 hover:text-neutral-700 flex items-center gap-1 cursor-pointer"
              >
                Dedicated Service Page <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Revision Rhinoplasty */}
          <div className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                <Repeat className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-xl font-semibold text-neutral-950">
                Revision Rhinoplasty
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Corrective secondary procedures for patients with compromised cosmetic results, structural deformities, or breathing impairment from previous operations.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate('/revision-rhinoplasty')}
                className="text-xs font-semibold text-neutral-950 hover:text-neutral-700 flex items-center gap-1 cursor-pointer"
              >
                Dedicated Service Page <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Functional Rhinoplasty */}
          <div className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-xl font-semibold text-neutral-950">
                Functional Rhinoplasty
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Septorhinoplasty designed to relieve nasal obstruction, realign deviated septal cartilage, and stabilize weak internal/external nasal valves.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate('/functional-rhinoplasty')}
                className="text-xs font-semibold text-neutral-950 hover:text-neutral-700 flex items-center gap-1 cursor-pointer"
              >
                Dedicated Service Page <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 5: FESS */}
          <div className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all flex flex-col justify-between group md:col-span-2 lg:col-span-2">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-xl font-semibold text-neutral-950">
                FESS (Functional Endoscopic Sinus Surgery)
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed max-w-xl">
                Minimally invasive optical endoscopic surgery to clear chronic sinus infections, treat persistent polyp disease, and restore physiological sinus ventilation without facial incisions.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate('/fess')}
                className="text-xs font-semibold text-neutral-950 hover:text-neutral-700 flex items-center gap-1 cursor-pointer"
              >
                Dedicated Service Page <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Showcase Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Clinical Results
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-medium text-neutral-950 mt-1">
              Before & After Showcase
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-xl">
              Photographic documentation of structural alignment and profile refinements. Individual results vary according to patient anatomy and physiological tissue healing.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/before-after')}
            className="px-5 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCases.map((caseItem) => (
            <BeforeAfterCard
              key={caseItem.id}
              caseItem={caseItem}
              onOpenLightbox={onOpenLightbox}
            />
          ))}
        </div>

        <div className="p-4 bg-neutral-100 rounded-xl border border-neutral-200 text-xs text-neutral-600 flex items-center justify-between flex-wrap gap-3">
          <span>
            {DOCTOR_DATA.medicalDisclaimer}
          </span>
          <button
            onClick={() => onNavigate('/before-after')}
            className="text-neutral-900 font-semibold underline hover:text-neutral-700 shrink-0"
          >
            Explore all cases →
          </button>
        </div>
      </section>

      {/* Why Patients Choose Specialist Care */}
      <section className="bg-neutral-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
              Clinical Philosophy
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-medium">
              Why Specialist Rhinoplasty & ENT Expertise Matters
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300">
              The nose is both the central focal point of facial aesthetics and the primary airway of human respiration. Dr. Faizi brings dual otolaryngological and surgical expertise to protect both.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-neutral-950 rounded-xl border border-neutral-800 space-y-3">
              <div className="w-8 h-8 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h3 className="text-base font-semibold text-white">
                Airway Preservation
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Cosmetic refinement without functional foresight can compromise nasal breathing. Every procedure assesses septum alignment and nasal valve integrity to ensure clear, unobstructed airflow.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 rounded-xl border border-neutral-800 space-y-3">
              <div className="w-8 h-8 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h3 className="text-base font-semibold text-white">
                Structural Cartilage Support
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Rather than aggressive reduction that risks collapse over decades, Dr. Faizi employs structural preservation techniques with supportive autologous grafting for permanent stability.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 rounded-xl border border-neutral-800 space-y-3">
              <div className="w-8 h-8 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h3 className="text-base font-semibold text-white">
                International Academic Standards
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Holding FCPS, FACS (USA), and active membership in the Rhinoplasty Society of Europe, Dr. Faizi integrates the latest European surgical protocols and endoscopic techniques into daily clinical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Reviews Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Verified Feedback
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-medium text-neutral-950 mt-1">
              Patient Testimonials
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Experiences shared by patients undergoing rhinoplasty and sinus procedures under Dr. Faizi's clinical care.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/reviews')}
            className="text-xs font-semibold text-neutral-950 hover:text-neutral-700 underline flex items-center gap-1 cursor-pointer self-start md:self-auto"
          >
            View All Reviews & Submit Feedback <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIAL_REVIEWS.slice(0, 3).map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-xl border border-neutral-200 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="border-t border-neutral-100 pt-3 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-neutral-900">{review.patientName}</div>
                  <div className="text-[11px] text-neutral-500">{review.serviceReceived}</div>
                </div>
                <div className="text-[10px] text-neutral-400">{review.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Guidance & Clarity
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-medium text-neutral-950 mt-1">
              Frequently Asked Questions
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/faqs')}
            className="text-xs font-semibold text-neutral-950 hover:text-neutral-700 underline flex items-center gap-1 cursor-pointer"
          >
            Visit Comprehensive FAQ Hub <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {GENERAL_FAQS.slice(0, 4).map((faq, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-neutral-200 space-y-2">
              <div className="flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                <h3 className="text-sm font-semibold text-neutral-900">
                  {faq.question}
                </h3>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Call to Action Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-950 text-white rounded-2xl p-8 sm:p-14 border border-neutral-800 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-5 text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Schedule An Examination
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-medium">
              Request Your Consultation with {DOCTOR_DATA.name}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              Receive a comprehensive internal and external nasal analysis, review anatomical treatment options, and discuss realistic goals directly with an ENT surgeon and rhinoplasty specialist.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onOpenConsultation('Primary Rhinoplasty')}
                className="px-6 py-3.5 bg-white hover:bg-neutral-100 text-neutral-950 font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Request Appointment Online
              </button>

              <a
                href={DOCTOR_DATA.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: {DOCTOR_DATA.contact.whatsappFormatted}
              </a>
            </div>

            <div className="pt-4 border-t border-neutral-800 text-[11px] text-neutral-400">
              Direct Phone Inquiry: <a href={`tel:${DOCTOR_DATA.contact.phone}`} className="text-neutral-200 underline">{DOCTOR_DATA.contact.phoneFormatted}</a> · Email: <a href={`mailto:${DOCTOR_DATA.contact.email}`} className="text-neutral-200 underline">{DOCTOR_DATA.contact.email}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
