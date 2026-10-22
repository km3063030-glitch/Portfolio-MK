import React, { useState } from 'react';
import { Github, Sparkles, CheckCircle2, ArrowRight, Eye } from 'lucide-react';
import { projects } from '../../data/portfolioData';
import { Project } from '../../types';
import { RagPipelineVisual } from './RagPipelineVisual';
import { MailMindVisual } from './MailMindVisual';
import { AnprVisual } from './AnprVisual';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const featuredRagProject = projects[0];
  const secondaryProjects = projects.slice(1);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
          Engineering Showcase
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
          Featured Projects
        </h2>
        <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
          Production-grade systems demonstrating retrieval-augmented generation, multi-agent orchestrations, and high-speed computer vision pipelines.
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4"></div>
      </div>

      {/* Flagship Project 1: Enterprise RAG Knowledge Intelligence Agent */}
      <div className="mb-14">
        <div className="relative rounded-2xl bg-gradient-to-b from-[#131326] via-[#0E0E1A] to-[#0A0A10] border border-cyan-500/40 shadow-2xl shadow-cyan-950/40 p-6 sm:p-8 lg:p-10 overflow-hidden">
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Badges bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                <Sparkles className="w-3.5 h-3.5" />
                Flagship Project • Generative AI & RAG
              </span>
              <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10">
                {featuredRagProject.category}
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              CI/CD & GHCR Containerized
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Description & Contributions */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {featuredRagProject.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                  {featuredRagProject.description}
                </p>
              </div>

              {/* Key Contributions List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-semibold">
                  Key Technical Contributions:
                </h4>
                {featuredRagProject.contributions.map((contribution, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span className="leading-snug">{contribution}</span>
                  </div>
                ))}
              </div>

              {/* Technology badges */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {featuredRagProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900/90 text-cyan-300 border border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => setActiveModalProject(featuredRagProject)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium text-xs shadow-lg shadow-blue-500/25 transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Project Details</span>
                </button>
                <a
                  href={featuredRagProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-xs border border-slate-700 transition-all"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Architecture Visualization */}
            <div className="lg:col-span-6 w-full">
              <RagPipelineVisual />
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Projects Grid (2 and 3) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {secondaryProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between rounded-2xl bg-[#10101B]/90 border border-white/10 hover:border-blue-500/40 p-6 sm:p-8 transition-all duration-300 group shadow-xl shadow-black/30"
          >
            <div>
              {/* Category pill */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                {project.description}
              </p>

              {/* Visual Component Embed */}
              <div className="my-6">
                {project.demoType === 'mailmind' && <MailMindVisual />}
                {project.demoType === 'anpr' && <AnprVisual />}
              </div>

              {/* Key Contributions */}
              <div className="space-y-2 mb-6">
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold mb-2">
                  System Highlights:
                </h4>
                {project.contributions.map((contribution, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{contribution}</span>
                  </div>
                ))}
              </div>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Buttons */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => setActiveModalProject(project)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>View Full Spec</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
