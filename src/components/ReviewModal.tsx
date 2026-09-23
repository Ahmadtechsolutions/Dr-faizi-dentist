import React, { useState } from 'react';
import { X, Star, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { PatientReview } from '../data/doctorData';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewSubmitted: (review: PatientReview) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  onReviewSubmitted,
}) => {
  const [patientName, setPatientName] = useState('');
  const [serviceReceived, setServiceReceived] = useState('Primary Rhinoplasty');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [optionalLocation, setOptionalLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!comment.trim() || comment.length < 15) {
      setError('Please provide at least a sentence describing your clinical care experience.');
      return;
    }

    const newReview: PatientReview = {
      id: `rev-user-${Date.now()}`,
      patientName: patientName.trim(),
      serviceReceived: serviceReceived,
      rating: rating,
      date: 'Just Now',
      comment: comment.trim(),
      verified: true
    };

    onReviewSubmitted(newReview);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setPatientName('');
    setComment('');
    setOptionalLocation('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-neutral-200 bg-neutral-900 text-white flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold">Share Your Experience</h3>
            <p className="text-xs text-neutral-400">Dr. Faizi Rhinoplasty & FESS Specialist Care</p>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-neutral-400 hover:text-white bg-neutral-800 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-neutral-900">Review Submitted for Verification</h4>
              <p className="text-xs text-neutral-600 leading-relaxed max-w-sm mx-auto">
                Thank you for taking the time to share your feedback. In accordance with healthcare transparency guidelines, new patient reviews undergo clinical moderation before appearing on the public directory.
              </p>
              <button
                onClick={handleResetAndClose}
                className="mt-4 px-6 py-2 bg-neutral-900 text-white text-xs font-medium rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-neutral-800 mb-1">
                  Your Name or Initials <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="e.g. M. Tariq or Anonymous Patient"
                  className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-950"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-800 mb-1">
                  Procedure / Service Undergone
                </label>
                <select
                  value={serviceReceived}
                  onChange={(e) => setServiceReceived(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-950"
                >
                  <option value="Primary Rhinoplasty">Primary Rhinoplasty</option>
                  <option value="Complex Rhinoplasty">Complex Rhinoplasty</option>
                  <option value="Revision Rhinoplasty">Revision Rhinoplasty</option>
                  <option value="Functional Rhinoplasty">Functional Rhinoplasty & Airway</option>
                  <option value="Functional Endoscopic Sinus Surgery (FESS)">FESS (Sinus Surgery)</option>
                  <option value="Specialist Clinical Consultation">Specialist Clinical Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-800 mb-1">
                  Overall Rating
                </label>
                <div className="flex items-center gap-2 py-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      className="p-1 text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Star
                        className={`w-6 h-6 ${star <= rating ? 'fill-amber-400 text-amber-400' : 'text-neutral-300'}`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-semibold text-neutral-700 ml-2">
                    {rating} out of 5 Stars
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-800 mb-1">
                  Your Feedback / Experience <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share details about your surgical consultation, care team communication, recovery experience, and results..."
                  className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-950"
                />
              </div>

              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-[11px] text-neutral-500 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Clinical Moderation Policy: To maintain patient privacy and authenticity, reviews are verified by our clinical desk before public listing.
                </span>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 border border-neutral-300 rounded-lg text-xs font-medium text-neutral-700 hover:bg-neutral-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-neutral-950 hover:bg-neutral-800 text-white rounded-lg text-xs font-medium transition-colors cursor-pointer"
                >
                  Submit For Moderation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
