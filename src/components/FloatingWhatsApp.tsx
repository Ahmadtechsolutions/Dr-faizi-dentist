import React, { useState, useEffect, useRef } from 'react';
import { DOCTOR_DATA } from '../data/doctorData';
import { MessageCircle, X, ExternalLink, ShieldCheck } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  // Initially false so it never blocks content on page load
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <aside aria-label="WhatsApp Support" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 pointer-events-auto">
      {/* Dr. Faizi Clinical Desk Popup Card - Only visible when explicitly opened */}
      {isOpen && (
        <div
          ref={popupRef}
          role="dialog"
          aria-modal="false"
          aria-label="Dr. Faizi Clinical Desk WhatsApp Assistant"
          className="absolute bottom-16 right-0 w-[calc(100vw-2.5rem)] sm:w-84 max-w-sm bg-white text-neutral-900 border border-neutral-200 rounded-2xl p-4 sm:p-5 shadow-2xl transition-all duration-200 animate-in fade-in slide-in-from-bottom-3"
        >
          {/* Header Row */}
          <div className="flex items-start justify-between gap-3 border-b border-neutral-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                  DF
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
              </div>
              <div>
                <div className="font-semibold text-sm text-neutral-950 flex items-center gap-1.5">
                  Dr. Faizi Clinical Desk
                </div>
                <div className="text-[11px] text-emerald-700 font-medium">
                  Direct Surgical Coordinator
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-neutral-800 p-1.5 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
              aria-label="Close WhatsApp popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Content */}
          <div className="py-3 space-y-2 text-xs text-neutral-600 leading-relaxed">
            <p>
              Connect directly with Dr. Faizi’s clinical desk for consultation scheduling, procedure details, or out-of-city inquiry guidance.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Confidential medical correspondence</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2">
            <a
              href={DOCTOR_DATA.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp ({DOCTOR_DATA.contact.whatsappFormatted})</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full py-1.5 text-center text-xs text-neutral-500 hover:text-neutral-800 font-medium cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Small Floating WhatsApp Button (Always small until clicked) */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close WhatsApp clinical desk" : "Open Dr. Faizi Clinical Desk WhatsApp"}
        className="relative group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
            {/* Live Indicator Dot */}
            <span className="absolute top-1 right-1 w-3 h-3 bg-emerald-300 rounded-full border-2 border-white animate-pulse" />
          </>
        )}

        {/* Hover Tooltip (Desktop Only) */}
        {!isOpen && (
          <span className="hidden md:block absolute right-full mr-3 bg-neutral-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            WhatsApp Dr. Faizi
          </span>
        )}
      </button>
    </aside>
  );
};
