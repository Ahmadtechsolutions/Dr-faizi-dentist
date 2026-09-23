import React, { useState } from 'react';
import { BEFORE_AFTER_CASES, DOCTOR_DATA, BeforeAfterCase } from '../data/doctorData';
import { BeforeAfterCard } from '../components/BeforeAfterSlider';
import { 
  ShieldAlert, 
  Calendar, 
  MessageCircle, 
  Filter, 
  Maximize2,
  Info 
} from 'lucide-react';

interface BeforeAfterPageProps {
  onOpenLightbox: (caseItem: BeforeAfterCase) => void;
  onOpenConsultation: () => void;
}

type CategoryFilter = 'All' | 'Rhinoplasty' | 'Complex Rhinoplasty' | 'Revision' | 'Long-Term Results';

export const BeforeAfterPage: React.FC<BeforeAfterPageProps> = ({
  onOpenLightbox,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');

  const categories: CategoryFilter[] = [
    'All',
    'Rhinoplasty',
    'Complex Rhinoplasty',
    'Revision',
    'Long-Term Results'
  ];

  const filteredCases = selectedCategory === 'All'
    ? BEFORE_AFTER_CASES
    : BEFORE_AFTER_CASES.filter(c => c.category === selectedCategory);

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12">
      {/* Page Title & Clinical Context */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-200 shadow-xs space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Clinical Documentation
          </div>
          <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-950">
            Before & After Gallery
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed font-light">
            Standardized medical photography illustrating anatomical profile realignment, dorsal reduction, tip projection refinement, and secondary structural revision.
          </p>

          {/* Prominent Medical Disclaimer Banner */}
          <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-600 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-neutral-900 block">Surgical Outcome Notice & Disclaimer:</strong>
              <p className="leading-relaxed text-[11px] sm:text-xs">
                Every face and nasal framework is unique. Individual results vary according to innate bone structure, cartilage strength, skin thickness, healing dynamics, and compliance with aftercare protocols. These clinical photographs represent specific individual outcomes and do not guarantee or imply that every patient will achieve identical results. A personal diagnostic consultation with Dr. Faizi is essential for evaluating individual suitability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters (Interactive buttons compliant with zero-pill discipline) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-200 pb-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700">
            <Filter className="w-3.5 h-3.5 text-neutral-500" />
            <span>Filter by Category:</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-neutral-950 shadow-xs font-semibold'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCases.map((caseItem) => (
            <BeforeAfterCard
              key={caseItem.id}
              caseItem={caseItem}
              onOpenLightbox={onOpenLightbox}
            />
          ))}
        </div>

        {filteredCases.length === 0 && (
          <div className="py-16 text-center text-sm text-neutral-500 bg-white rounded-xl border border-neutral-200">
            No clinical cases found for the selected category.
          </div>
        )}
      </section>

      {/* Consultation Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-950 text-white rounded-2xl p-8 sm:p-12 border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-serif-title text-2xl sm:text-3xl font-medium">
              Discuss Your Anatomical Goals
            </h2>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Schedule a one-on-one medical consultation with Dr. Faizi to evaluate your nasal profile, cartilage framework, and airway integrity.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenConsultation}
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
              WhatsApp: {DOCTOR_DATA.contact.whatsappFormatted}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
