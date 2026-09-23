import React, { useEffect } from 'react';
import { X, ZoomIn, Info, ShieldAlert } from 'lucide-react';
import { BeforeAfterCase } from '../data/doctorData';

interface LightboxModalProps {
  caseData: BeforeAfterCase | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ caseData, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseData) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseData, onClose]);

  if (!caseData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-5xl bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/80">
          <div>
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
              {caseData.category}
            </span>
            <h3 className="text-base sm:text-lg font-medium text-white">
              {caseData.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="p-2 text-neutral-400 hover:text-white bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Main Visual */}
          <div className="lg:col-span-8 flex justify-center bg-black/50 rounded-lg p-2 border border-neutral-800">
            <img
              src={caseData.primaryImage}
              alt={caseData.title}
              className="max-h-[60vh] w-auto object-contain rounded"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Case Information & Clinical Notes */}
          <div className="lg:col-span-4 space-y-4 text-neutral-300">
            <div>
              <span className="text-xs text-neutral-400 uppercase tracking-wide font-semibold block mb-1">
                Clinical Overview
              </span>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {caseData.description}
              </p>
            </div>

            <div className="border-t border-neutral-800 pt-3">
              <span className="text-xs text-neutral-400 uppercase tracking-wide font-semibold block mb-2">
                Procedure Specifications
              </span>
              <ul className="space-y-2 text-xs text-neutral-300">
                {caseData.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-neutral-950/80 rounded-lg border border-neutral-800 text-[11px] text-neutral-400 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400/80 shrink-0 mt-0.5" />
              <span>
                Note: Individual physiological healing, cartilage structure, and skin thickness vary. Outcomes cannot be guaranteed. Consult Dr. Faizi for an individual surgical assessment.
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-neutral-800 bg-neutral-950 flex justify-between items-center text-xs text-neutral-400">
          <span>Dr. Faizi Rhinoplasty & FESS Specialist Showcase</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded text-xs transition-colors"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};
