import React from 'react';
import { GraduationCap, CheckCircle2, MapPin } from 'lucide-react';
import { educationData } from '../../data/portfolioData';

export const Education: React.FC = () => {
  const edu = educationData[0];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
          Background
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
          Education
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative rounded-2xl bg-gradient-to-b from-[#121220] to-[#0D0D16] border border-white/10 p-6 sm:p-8 hover:border-cyan-500/40 transition-all duration-300 shadow-xl shadow-black/30">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-cyan-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {edu.degree}
                </h3>
                <p className="text-slate-300 text-base font-medium mt-1">
                  {edu.institution}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>

            {/* GPA Badge */}
            <div className="self-start sm:self-auto px-4 py-2 rounded-xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 border border-cyan-500/30 text-right">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                Academic Standing
              </span>
              <span className="text-lg sm:text-xl font-bold text-cyan-400 font-mono">
                GPA: {edu.gpa}
              </span>
            </div>
          </div>

          {/* Highlights */}
          <div className="pt-6 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold mb-2">
              Academic & Curriculum Highlights:
            </h4>
            {edu.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
