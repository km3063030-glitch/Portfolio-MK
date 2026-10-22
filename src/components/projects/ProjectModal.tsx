import React, { useEffect, useState } from 'react';
import { X, Github, CheckCircle2, Sparkles } from 'lucide-react';
import { Project } from '../../types';
import { RagPipelineVisual } from './RagPipelineVisual';
import { MailMindVisual } from './MailMindVisual';
import { AnprVisual } from './AnprVisual';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'contributions'>('architecture');

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0F0F1A] border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 p-6 sm:p-8 text-left"
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
        <div className="pr-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{project.category}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            {project.title}
          </h2>
          <p className="text-slate-300 mt-3 text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Visual Component Render */}
        <div className="mt-6 mb-8">
          {project.demoType === 'rag' && <RagPipelineVisual />}
          {project.demoType === 'mailmind' && <MailMindVisual />}
          {project.demoType === 'anpr' && <AnprVisual />}
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10 mb-6 gap-4">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-2.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeTab === 'architecture'
                ? 'text-cyan-400 border-b-2 border-cyan-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Engineering Highlights & Contributions
          </button>
        </div>

        {/* Contributions List */}
        <div className="space-y-3 mb-8">
          {project.contributions.map((contribution, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors"
            >
              <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
              <p className="text-sm text-slate-200 leading-relaxed font-sans">
                {contribution}
              </p>
            </div>
          ))}
        </div>

        {/* Technology Badges */}
        <div className="mb-8">
          <h3 className="text-xs uppercase font-mono text-slate-400 tracking-wider mb-3">
            Technology Stack & Libraries
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900 text-cyan-300 border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs border border-slate-700 hover:border-cyan-500/50 shadow-md transition-all"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>GitHub Repository</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-slate-400 hover:text-white text-xs font-medium hover:bg-white/5 transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
