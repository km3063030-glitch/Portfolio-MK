import React from 'react';
import { Award, GraduationCap, Building2, Cpu, CheckCircle } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const About: React.FC = () => {
  const statCards = [
    {
      label: 'Academic Standing',
      value: '9.48 / 10',
      description: 'Cumulative Grade Point Average',
      icon: Award,
      accent: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
    },
    {
      label: 'Degree Program',
      value: 'B.Tech in CSE',
      description: 'Computer Science and Engineering',
      icon: GraduationCap,
      accent: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    },
    {
      label: 'Institution',
      value: 'SRMIST',
      description: 'SRM Institute of Science and Technology, Chennai',
      icon: Building2,
      accent: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
    },
    {
      label: 'Core Focus Areas',
      value: 'AI & Systems',
      description: 'AI Engineering, Backend Dev & Computer Vision',
      icon: Cpu,
      accent: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    },
  ];

  const pillars = [
    {
      title: 'AI Engineering & Agents',
      detail: 'Building agentic workflows with LangGraph, RAG pipelines with ChromaDB, and LLM integrations.',
    },
    {
      title: 'Scalable Backend Systems',
      detail: 'Designing high-throughput asynchronous APIs with FastAPI, message queues, and robust SQL databases.',
    },
    {
      title: 'Computer Vision & Real-Time',
      detail: 'Deploying YOLO detection models, image preprocessing, and OCR pipelines with <100ms latency targets.',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
          Overview
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
          About Me
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Biography Narrative */}
        <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#141422] to-[#0E0E17] border border-white/10 shadow-xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

            {personalInfo.aboutText.map((paragraph, index) => (
              <p
                key={index}
                className={index > 0 ? 'mt-4 text-slate-300' : 'text-slate-200 font-medium'}
              >
                {paragraph}
              </p>
            ))}

            {/* Engineering Pillars */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="text-xs uppercase tracking-wider text-cyan-400 font-mono font-semibold mb-4">
                Key Engineering Philosophies
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {pillars.map((pillar, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">{pillar.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{pillar.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Key Metric / Stat Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {statCards.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#11111B] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 group shadow-lg shadow-black/30"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </span>
                  <div className={`p-2 rounded-lg border ${stat.accent}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-display group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </div>
                <p className="text-xs text-slate-400 mt-1 font-sans">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
