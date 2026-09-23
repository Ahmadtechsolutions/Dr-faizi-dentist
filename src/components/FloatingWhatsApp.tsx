import React, { useState } from 'react';
import { DOCTOR_DATA } from '../data/doctorData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {showTooltip && (
        <div className="bg-white text-neutral-900 border border-neutral-200 rounded-xl p-3 shadow-lg max-w-xs text-xs relative animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-700 p-0.5"
            aria-label="Close notification"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-neutral-900">Dr. Faizi Clinical Desk</span>
          </div>
          <p className="text-neutral-600 leading-normal pr-3">
            Have questions about rhinoplasty or wish to verify schedule availability? Message our coordinator directly.
          </p>
          <a
            href={DOCTOR_DATA.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800"
          >
            Start WhatsApp Chat →
          </a>
        </div>
      )}

      <a
        href={DOCTOR_DATA.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dr. Faizi's clinic on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-3 bg-neutral-900 text-white text-xs px-2.5 py-1.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          WhatsApp: {DOCTOR_DATA.contact.whatsappFormatted}
        </span>
      </a>
    </div>
  );
};
