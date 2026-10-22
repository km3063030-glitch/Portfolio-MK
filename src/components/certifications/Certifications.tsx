import React from 'react';
import { Award, Trophy, ShieldCheck, CheckCircle2, Cloud, Code, BookOpen } from 'lucide-react';
import { certifications, achievements } from '../../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="credentials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
          Recognition & Validations
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
          Certifications & Honors
        </h2>
        <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
          Industry-accredited cloud certifications, foundational machine learning qualifications, and hackathon victories.
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Achievements Column (Gold Accents) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2.5 mb-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold text-white font-display">
              Competitive Achievements & Awards
            </h3>
          </div>

          <div className="space-y-4">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gradient-to-br from-[#161410] via-[#121114] to-[#0D0D12] border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 shadow-lg shadow-amber-950/20 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />

                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    {item.award}
                  </span>
                  <span className="text-xs text-amber-400/90 font-mono font-bold">
                    {item.event}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white font-display mt-2 group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-400 font-sans mt-1">
                  Issued by <span className="text-slate-200 font-medium">{item.organization}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Academic Standing Callout */}
          <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 flex items-center gap-3 text-xs text-slate-300">
            <Award className="w-5 h-5 text-cyan-400 shrink-0" />
            <span>
              Recognized for high academic achievement at SRMIST with a consistent 9.48 GPA across engineering semesters.
            </span>
          </div>
        </div>

        {/* Certifications Column (Blue Accents) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2.5 mb-2">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white font-display">
              Technical Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {certifications.map((cert, idx) => {
              const isCloud = cert.category === 'cloud';
              const isProgramming = cert.category === 'programming';

              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#10101B] border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-blue-950/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-cyan-400/90 font-semibold px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                        {cert.issuer}
                      </span>
                      {isCloud ? (
                        <Cloud className="w-3.5 h-3.5 text-blue-400" />
                      ) : isProgramming ? (
                        <Code className="w-3.5 h-3.5 text-cyan-400" />
                      ) : (
                        <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                      )}
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {cert.name}
                    </h4>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400/90 text-[10px]">
                      <CheckCircle2 className="w-3 h-3" />
                      Credential Verified
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
