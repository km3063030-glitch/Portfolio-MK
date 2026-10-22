import React, { useState } from 'react';
import { CheckCircle2, Bot, Zap } from 'lucide-react';

export const MailMindVisual: React.FC = () => {
  const [selectedEmail, setSelectedEmail] = useState(0);

  const mockEmails = [
    {
      id: 0,
      sender: 'alex.morgan@enterprise-partner.io',
      subject: 'Critical API Integration SLA Downtime Alert',
      priority: 'P1 Urgent',
      priorityColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
      category: 'System Incident',
      summary: 'Partner system reports 502 Bad Gateway on webhook callback. Multi-agent routed to high-priority triage queue.',
      status: 'Auto-Triaged (10x Queue)',
      timestamp: '2m ago',
    },
    {
      id: 1,
      sender: 'sara.chen@venture-capital.com',
      subject: 'Follow-up: Q3 AI Infrastructure Partnership Terms',
      priority: 'P2 High',
      priorityColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      category: 'Executive Inquiry',
      summary: 'Inquiry regarding contractual LLM deployment milestones. AI generated preliminary draft response awaiting supervisor sign-off.',
      status: 'Response Drafted',
      timestamp: '14m ago',
    },
    {
      id: 2,
      sender: 'updates@devops-monthly.tech',
      subject: 'Weekly Kubernetes & Distributed Backends Digest',
      priority: 'P4 Low',
      priorityColor: 'text-slate-400 bg-slate-500/10 border-slate-500/30',
      category: 'Newsletter / Informational',
      summary: 'Automated archiving triggered. No human intervention needed.',
      status: 'Auto-Archived',
      timestamp: '1h ago',
    },
  ];

  const current = mockEmails[selectedEmail];

  return (
    <div className="w-full bg-[#0C0C14] border border-blue-500/20 rounded-xl p-4 sm:p-5 text-left font-mono">
      {/* Header bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2 text-blue-400 font-sans font-semibold">
          <Bot className="w-4 h-4 text-cyan-400" />
          <span>MailMind Multi-Agent Dispatcher</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-sans">
            <Zap className="w-3 h-3" />
            10x Async Throughput
          </span>
        </div>
      </div>

      {/* Email Inbox list selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3">
        {mockEmails.map((email, idx) => (
          <button
            key={email.id}
            onClick={() => setSelectedEmail(idx)}
            className={`p-2.5 rounded-lg border text-left transition-all ${
              selectedEmail === idx
                ? 'bg-blue-950/40 border-blue-400/50 shadow-sm'
                : 'bg-white/[0.02] border-white/5 hover:border-white/15'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${email.priorityColor}`}>
                {email.priority}
              </span>
              <span className="text-[10px] text-slate-500 font-mono">{email.timestamp}</span>
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 truncate">
              {email.subject}
            </div>
            <div className="text-[11px] text-slate-400 truncate mt-0.5">
              {email.sender}
            </div>
          </button>
        ))}
      </div>

      {/* AI Extraction & Routing Output */}
      <div className="p-3 rounded-lg bg-black/60 border border-white/10 font-sans text-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-mono text-[11px]">Category:</span>
            <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-[11px] font-medium">
              {current.category}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 text-[11px] font-mono">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{current.status}</span>
          </div>
        </div>

        <div className="text-slate-300 text-xs leading-relaxed">
          <span className="text-cyan-400 font-mono font-semibold">AI Generated Intelligence: </span>
          {current.summary}
        </div>
      </div>
    </div>
  );
};
