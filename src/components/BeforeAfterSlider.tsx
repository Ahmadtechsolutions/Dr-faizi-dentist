import React, { useState } from 'react';
import { BeforeAfterCase } from '../data/doctorData';
import { Maximize2, SplitSquareVertical, Columns } from 'lucide-react';

interface BeforeAfterCardProps {
  caseItem: BeforeAfterCase;
  onOpenLightbox: (caseItem: BeforeAfterCase) => void;
}

export const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({
  caseItem,
  onOpenLightbox,
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isInteracting, setIsInteracting] = useState(false);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(0, Math.min(100, position));
    setSliderPos(clamped);
  };

  return (
    <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group">
      {/* Category and Quick Actions */}
      <div className="px-5 py-3.5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
        <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
          <span className="text-neutral-900 font-semibold">{caseItem.category}</span>
          <span>·</span>
          <span>Surgical Case</span>
        </div>
        <button
          onClick={() => onOpenLightbox(caseItem)}
          className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-neutral-900 transition-colors p-1"
          aria-label="Enlarge image"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span className="text-[11px]">Enlarge</span>
        </button>
      </div>

      {/* Interactive Visual Display */}
      <div 
        className="@container relative h-72 sm:h-80 bg-neutral-100 overflow-hidden select-none cursor-ew-resize"
        onMouseMove={(e) => handleSliderMove(e)}
        onTouchMove={(e) => handleSliderMove(e)}
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
      >
        <img
          src={caseItem.primaryImage}
          alt={caseItem.title}
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />

        {/* Dynamic Split Overlay for comparison demonstration */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="relative w-full h-full bg-neutral-900/10 backdrop-brightness-95">
            <img
              src={caseItem.primaryImage}
              alt={`${caseItem.title} baseline`}
              className="absolute top-0 left-0 max-w-none h-full w-[100cqw] object-cover object-center filter contrast-[0.98] brightness-95"
              referrerPolicy="no-referrer"
            />
            {/* Subtle Before Tag */}
            <span className="absolute top-3 left-3 bg-neutral-950/80 text-white text-[11px] px-2.5 py-1 rounded tracking-wide font-medium backdrop-blur-xs">
              Pre-Op Analysis
            </span>
          </div>
        </div>

        {/* Subtle After Tag */}
        <span className="absolute top-3 right-3 bg-neutral-900/80 text-white text-[11px] px-2.5 py-1 rounded tracking-wide font-medium backdrop-blur-xs pointer-events-none">
          Post-Op Result
        </span>

        {/* Divider line & handle */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-neutral-950 text-white flex items-center justify-center shadow-md border border-white/80">
            <SplitSquareVertical className="w-4 h-4" />
          </div>
        </div>

        <div className="absolute bottom-2 inset-x-0 flex justify-center pointer-events-none">
          <span className="text-[10px] bg-neutral-900/70 text-neutral-200 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
            Drag or swipe across image to inspect
          </span>
        </div>
      </div>

      {/* Card Information */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-base font-semibold text-neutral-900 leading-snug group-hover:text-neutral-700 transition-colors">
            {caseItem.title}
          </h3>
          <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
            {caseItem.description}
          </p>
        </div>

        <div className="border-t border-neutral-100 pt-3 space-y-1 text-[11px] text-neutral-500">
          {caseItem.details.slice(0, 2).map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-neutral-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => onOpenLightbox(caseItem)}
          className="w-full py-2 text-xs font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer text-center"
        >
          View Case Details & Disclaimers
        </button>
      </div>
    </div>
  );
};
