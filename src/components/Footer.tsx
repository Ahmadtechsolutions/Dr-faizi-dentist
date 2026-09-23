import React from 'react';
import { DOCTOR_DATA } from '../data/doctorData';
import { Phone, MessageCircle, Mail, Instagram, Facebook, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 text-sm">
      {/* Top Banner: Qualifications & Accreditations */}
      <div className="border-b border-neutral-800/80 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif-title text-2xl md:text-3xl text-white font-medium">
              {DOCTOR_DATA.brand}
            </h2>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-neutral-400">
              <span className="text-neutral-200">{DOCTOR_DATA.profession}</span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-300">{DOCTOR_DATA.qualifications}</span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-300">{DOCTOR_DATA.specialization}</span>
              <span className="text-neutral-600">·</span>
              <span className="text-emerald-400 font-medium">{DOCTOR_DATA.professionalMembership}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={DOCTOR_DATA.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600/90 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors text-xs"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Clinic Desk
            </a>
            <a
              href={`tel:${DOCTOR_DATA.contact.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-medium rounded-lg transition-colors text-xs border border-neutral-700"
            >
              <Phone className="w-4 h-4" />
              Call {DOCTOR_DATA.contact.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Col 1: Practice Summary */}
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-wider text-neutral-300 font-semibold">
            About The Specialist
          </div>
          <p className="text-xs leading-relaxed text-neutral-400">
            Dedicated practice of {DOCTOR_DATA.name}, specializing exclusively in rhinoplasty surgery and advanced endoscopic sinus operations (FESS), with commitment to aesthetic balance and airway preservation.
          </p>
          <div className="pt-2">
            <span className="text-xs text-neutral-500 block mb-2">Verified Professional Credentials</span>
            <div className="inline-flex items-center gap-2 text-xs text-neutral-300 bg-neutral-900 px-3 py-1.5 rounded border border-neutral-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{DOCTOR_DATA.professionalMembership}</span>
            </div>
          </div>
        </div>

        {/* Col 2: Surgical Services */}
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-wider text-neutral-300 font-semibold">
            Dedicated Services
          </div>
          <ul className="space-y-2 text-xs">
            <li>
              <button 
                onClick={() => onNavigate('/rhinoplasty')} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Primary Rhinoplasty
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('/complex-rhinoplasty')} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Complex Rhinoplasty
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('/revision-rhinoplasty')} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Revision Rhinoplasty
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('/functional-rhinoplasty')} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Functional Rhinoplasty & Airway
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('/fess')} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                FESS (Endoscopic Sinus Surgery)
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Navigation & Information */}
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-wider text-neutral-300 font-semibold">
            Patient Resources
          </div>
          <ul className="space-y-2 text-xs">
            <li>
              <button 
                onClick={() => onNavigate('/about')} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                About Dr. Faizi
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('/before-after')} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Before & After Gallery
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('/reviews')} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Verified Patient Reviews
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('/faqs')} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Frequently Asked Questions
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('/contact')} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Book Consultation / Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Social */}
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-wider text-neutral-300 font-semibold">
            Contact & Coordination
          </div>
          <div className="space-y-2.5 text-xs text-neutral-400">
            <a 
              href={`tel:${DOCTOR_DATA.contact.phone}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-neutral-400" />
              <span>{DOCTOR_DATA.contact.phoneFormatted}</span>
            </a>
            <a 
              href={DOCTOR_DATA.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>{DOCTOR_DATA.contact.whatsappFormatted}</span>
            </a>
            <a 
              href={`mailto:${DOCTOR_DATA.contact.email}`}
              className="flex items-center gap-2 hover:text-white transition-colors truncate"
            >
              <Mail className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              <span className="truncate">{DOCTOR_DATA.contact.email}</span>
            </a>
          </div>

          <div className="pt-2">
            <span className="text-xs text-neutral-500 block mb-2">Social Channels</span>
            <div className="flex items-center gap-3">
              <a 
                href={DOCTOR_DATA.social.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="p-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={DOCTOR_DATA.social.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="p-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <span className="text-[11px] text-neutral-500 mt-1.5 block">
              {DOCTOR_DATA.social.instagramHandle}
            </span>
          </div>
        </div>
      </div>

      {/* Clinic Location Placeholder Note (Per instruction: do not invent addresses) */}
      <div className="bg-neutral-900/60 border-t border-neutral-800/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-xs text-neutral-400 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>
            <span className="text-neutral-300 font-medium mr-1.5">Clinic Scheduling Note:</span>
            {DOCTOR_DATA.locationNote}
          </div>
          <button
            onClick={() => onNavigate('/contact')}
            className="text-neutral-300 hover:text-white font-medium underline inline-flex items-center gap-1 shrink-0"
          >
            Inquire about schedules <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Bottom Medical Legal & Ethics Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-neutral-900 text-xs text-neutral-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="max-w-4xl text-[11px] leading-relaxed">
          {DOCTOR_DATA.medicalDisclaimer}
        </p>
        <p className="shrink-0 text-[11px] text-neutral-500">
          © {new Date().getFullYear()} {DOCTOR_DATA.brand}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
