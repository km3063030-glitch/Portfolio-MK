import React from 'react';
import { ArrowDown, FileDown, Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-lg shadow-cyan-950/20 backdrop-blur-md mb-8 hover:border-cyan-500/40 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="text-xs font-medium text-slate-300 tracking-wide">
            {personalInfo.statusBadge}
          </span>
        </div>

        {/* Name */}
        <div className="mb-4">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400 mb-2 font-semibold">
            Portfolio & Systems Showcase
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display">
            <span className="block">{personalInfo.name}</span>
          </h1>
        </div>

        {/* Headline */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gradient-cyan-blue tracking-tight max-w-3xl mt-2 mb-6">
          {personalInfo.headline}
        </h2>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-10 font-normal">
          {personalInfo.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10 w-full max-w-md">
          {/* Primary CTA */}
          <a
            href="#projects"
            className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium text-sm shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>View My Projects</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          {/* Secondary CTA */}
          <button
            onClick={onOpenResume}
            className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/80 hover:border-slate-500 shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <FileDown className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </button>

          {/* Optional Tertiary Link */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-slate-400 hover:text-cyan-300 text-xs font-medium hover:bg-white/5 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Links Bar */}
        <div className="flex items-center gap-3 text-slate-400">
          <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Connect:</span>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-600 transition-all hover:scale-110"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-slate-600 transition-all hover:scale-110"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Send Email"
            className="p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-slate-800 hover:border-slate-600 transition-all hover:scale-110"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Minimal Terminal Tech Strip */}
        <div className="mt-14 w-full max-w-2xl bg-[#0F0F17]/80 border border-slate-800/80 rounded-xl p-3 backdrop-blur-sm shadow-xl shadow-black/40 text-left">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/60 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block"></span>
              <span className="ml-2 text-slate-400 font-sans text-[11px]">manish@srmist:~$ stack --focus</span>
            </div>
            <span className="text-[10px] text-cyan-400/80 font-mono">system.status == 'ready'</span>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
            <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">AI / LLMs & RAG</span>
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">FastAPI & Python</span>
            <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">LangGraph & Agentic Flows</span>
            <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">Computer Vision (YOLO)</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Docker & Microservices</span>
          </div>
        </div>
      </div>
    </section>
  );
};
