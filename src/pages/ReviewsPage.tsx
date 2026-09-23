import React from 'react';
import { PatientReview, DOCTOR_DATA } from '../data/doctorData';
import { Star, ShieldCheck, Plus, MessageSquare, AlertCircle } from 'lucide-react';

interface ReviewsPageProps {
  reviews: PatientReview[];
  onOpenReviewModal: () => void;
  onOpenConsultation: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({
  reviews,
  onOpenReviewModal,
  onOpenConsultation,
}) => {
  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Patient Feedback & Verification
            </div>
            <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-950">
              Patient Experiences
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
              Reflections and clinical feedback from individuals who have undergone surgical and consultation care under Dr. Faizi.
            </p>
          </div>

          <button
            onClick={onOpenReviewModal}
            className="px-5 py-3 bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm shrink-0"
          >
            <Plus className="w-4 h-4" />
            Submit Your Review
          </button>
        </div>
      </section>

      {/* Moderation Policy Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-600 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <strong className="text-neutral-900 block">Clinical Moderation & Transparency Protocol:</strong>
            <p className="text-[11px] leading-relaxed">
              In accordance with healthcare ethics and patient privacy regulations, submitted reviews are reviewed by our clinical desk to verify genuine patient care encounters and protect personal identifying data prior to public listing.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-xl p-6 border border-neutral-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-neutral-300 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {rev.verified && (
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Verified Care
                    </span>
                  )}
                </div>

                <p className="text-xs text-neutral-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="border-t border-neutral-100 pt-3 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-neutral-900">{rev.patientName}</div>
                  <div className="text-[11px] text-neutral-500">{rev.serviceReceived}</div>
                </div>
                <div className="text-[10px] text-neutral-400">{rev.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="p-8 bg-white rounded-2xl border border-neutral-200 max-w-xl mx-auto space-y-3">
          <h3 className="font-serif-title text-xl font-medium text-neutral-950">
            Have Questions About What To Expect?
          </h3>
          <p className="text-xs text-neutral-600 leading-relaxed font-light">
            Every patient's surgical journey begins with a private diagnostic consultation to discuss anatomical needs and realistic expectations.
          </p>
          <button
            onClick={onOpenConsultation}
            className="mt-2 px-6 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white rounded-lg text-xs font-medium transition-colors cursor-pointer"
          >
            Request Appointment
          </button>
        </div>
      </section>
    </div>
  );
};
