import React, { useEffect } from 'react';
import { X, FileDown, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0E0E18] border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-10 border-b border-white/10 pb-6 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-2 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            {personalInfo.name}
          </h2>
          <p className="text-sm text-cyan-300 font-medium mt-1">
            B.Tech in Computer Science Engineering • SRMIST Chennai • GPA: 9.48/10
          </p>
          <p className="text-xs text-slate-400 font-mono mt-1">
            {personalInfo.email} • {personalInfo.location}
          </p>
        </div>

        {/* Executive Summary */}
        <div className="mb-6">
          <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold mb-2">
            Executive Summary
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {personalInfo.subheadline} Specialized in AI engineering, RAG pipelines, FastAPI backends, and computer vision systems.
          </p>
        </div>

        {/* Core Competencies Quick Summary */}
        <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
          <h3 className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-semibold mb-3">
            Core Technical Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Generative AI: RAG, LangChain, LangGraph, Gemini</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Backends: FastAPI, Flask, REST APIs, Microservices</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Computer Vision: YOLO, OpenCV, Tesseract OCR</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>DevOps: Docker, GitHub Actions, GHCR, AWS, Azure</span>
            </div>
          </div>
        </div>

        {/* Verified Credentials Notice */}
        <div className="p-3 rounded-lg bg-blue-950/20 border border-blue-500/20 text-xs text-slate-300 mb-6">
          <span className="font-semibold text-cyan-300">Notice for Recruiters: </span>
          Resume PDF contains full academic transcripts, verified credential IDs for Oracle Cloud certifications, and complete course modules.
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <a
            href={personalInfo.resumeUrl}
            download="Manish_K_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium text-xs shadow-lg shadow-cyan-500/25 transition-all"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Resume PDF</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs font-medium hover:bg-white/5 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
