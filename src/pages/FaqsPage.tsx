import React, { useState } from 'react';
import { GENERAL_FAQS, DOCTOR_DATA } from '../data/doctorData';
import { ChevronDown, Calendar, MessageCircle, HelpCircle, Search } from 'lucide-react';

interface FaqsPageProps {
  onOpenConsultation: () => void;
}

export const FaqsPage: React.FC<FaqsPageProps> = ({ onOpenConsultation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndices, setOpenIndices] = useState<{ [key: number]: boolean }>({ 0: true, 1: true });

  const categories = ['All', 'General', 'Rhinoplasty', 'Consultation', 'Recovery'];

  const filteredFaqs = GENERAL_FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (idx: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-200 shadow-xs space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Patient Information & Guidance
          </div>
          <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-950">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed font-light">
            Comprehensive answers regarding aesthetic rhinoplasty, revision surgery, functional airway restoration, and endoscopic sinus operations (FESS).
          </p>

          {/* Search bar */}
          <div className="pt-2 max-w-md relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search specific questions (e.g. recovery, breathing, revision)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-neutral-50"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 rounded-lg w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-neutral-950 shadow-xs font-semibold'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* FAQs List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 max-w-4xl">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = !!openIndices[idx];
            return (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 flex items-start justify-between gap-4 hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-xs text-neutral-400 font-medium uppercase tracking-wider block mb-0.5">
                        {faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-semibold text-neutral-900 leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-500 shrink-0 mt-1 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 pl-12 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="py-12 text-center text-xs text-neutral-500 bg-white rounded-xl border border-neutral-200">
              No matching questions found. You may contact our clinic desk directly with your clinical query.
            </div>
          )}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-950 text-white rounded-2xl p-8 sm:p-12 border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-serif-title text-2xl sm:text-3xl font-medium">
              Have a Question Not Answered Here?
            </h2>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Connect with our clinical team to clarify procedure specifics, schedule details, or book a one-on-one consultation with Dr. Faizi.
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
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
