import React, { useState } from 'react';
import { Database, FileText, Cpu, Network, Sparkles } from 'lucide-react';

export const RagPipelineVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const steps = [
    {
      id: 0,
      title: 'PDF Document Ingestion',
      icon: FileText,
      tag: 'Chunking & Metadata',
      desc: 'Recursive character splitting & embedding generation',
    },
    {
      id: 1,
      title: 'ChromaDB Vector Store',
      icon: Database,
      tag: 'Semantic Search',
      desc: 'Cosine similarity ranking over document vectors',
    },
    {
      id: 2,
      title: 'LangGraph Multi-Agent',
      icon: Network,
      tag: 'State & Memory',
      desc: 'PostgreSQL conversation checkpointer with agent routing',
    },
    {
      id: 3,
      title: 'Gemini Generation',
      icon: Cpu,
      tag: 'Grounded Answer',
      desc: 'Context-conditioned answer synthesis with source citation',
    },
  ];

  return (
    <div className="w-full bg-[#0C0C14] border border-cyan-500/20 rounded-xl p-4 sm:p-5 text-left font-mono">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2 text-cyan-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="font-semibold uppercase tracking-wider">Enterprise RAG Pipeline Architecture</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] border border-emerald-500/20">
          Docker Containerized • GHCR
        </span>
      </div>

      {/* Interactive Pipeline Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {steps.map((step) => {
          const Icon = step.icon;
          const isActive = activeStep === step.id;

          return (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                isActive
                  ? 'bg-cyan-950/40 border-cyan-400/50 shadow-md shadow-cyan-950/50'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div
                  className={`p-1.5 rounded ${
                    isActive ? 'bg-cyan-500 text-black' : 'bg-white/10 text-slate-300'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] text-cyan-400/90 font-sans font-medium">
                  {step.tag}
                </span>
              </div>
              <div className="text-xs font-sans font-semibold text-white mb-1">
                {step.title}
              </div>
              <p className="text-[11px] text-slate-400 font-sans leading-tight">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Active step detail preview bar */}
      <div className="mt-4 p-3 rounded-lg bg-black/50 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-slate-300 font-sans">
          <span className="text-cyan-400 font-mono font-bold">Node [{activeStep + 1}/4]:</span>
          <span>{steps[activeStep].title} — {steps[activeStep].desc}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>FastAPI Endpoint: <code className="text-cyan-300 font-mono">/v1/rag/query</code></span>
        </div>
      </div>
    </div>
  );
};
