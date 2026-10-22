import React, { useState } from 'react';
import {
  Code,
  Layers,
  Brain,
  Server,
  Cloud,
  Sparkles,
} from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ElementType> = {
    Code,
    Layers,
    Brain,
    Server,
    Cloud,
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
          Core Competencies
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
          Technical Skills & Tooling
        </h2>
        <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
          Specialized stack covering generative AI pipelines, scalable distributed backends, computer vision, and cloud engineering.
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4"></div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
            selectedCategory === 'all'
              ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/25'
              : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
          }`}
        >
          All Domains ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
        </button>
        {skillCategories.map((cat) => {
          const isSelected = selectedCategory === cat.title;
          return (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                isSelected
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.title}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((cat) => {
          const Icon = categoryIcons[cat.icon] || Code;
          const isAI = cat.title.includes('AI');

          return (
            <div
              key={cat.title}
              className={`p-6 rounded-2xl bg-[#11111B]/90 border transition-all duration-300 relative flex flex-col justify-between group ${
                isAI
                  ? 'border-cyan-500/40 shadow-lg shadow-cyan-950/30'
                  : 'border-white/10 hover:border-blue-500/40 shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-xl border ${
                        isAI
                          ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                          : 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-display">
                        {cat.title}
                      </h3>
                      {cat.description && (
                        <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                          {cat.description}
                        </p>
                      )}
                    </div>
                  </div>
                  {isAI && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                      <Sparkles className="w-2.5 h-2.5" />
                      Core
                    </span>
                  )}
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900/90 text-slate-200 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-slate-800/90 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{cat.skills.length} skills listed</span>
                <span className="text-cyan-400/80 group-hover:text-cyan-300 transition-colors">
                  verified in projects & coursework
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
