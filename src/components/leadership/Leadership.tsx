import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { leadershipExperiences } from '../../data/portfolioData';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
          Initiatives & Collaboration
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
          Leadership & Volunteering
        </h2>
        <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
          Peer mentorship, technical event coordination, and workshop facilitation.
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4"></div>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {leadershipExperiences.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-gradient-to-b from-[#11111E] to-[#0C0C14] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-lg shadow-black/20"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  {item.role}
                </h3>
                <span className="text-sm font-medium text-cyan-400">
                  {item.organization}
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{item.period}</span>
              </div>
            </div>

            <div className="space-y-2 mt-4 pt-3 border-t border-white/5">
              {item.description.map((desc, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
