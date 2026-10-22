import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, Copy, Check } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please provide a message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Launch mailto with user's inputted details
    const subjectLine = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    );
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subjectLine}&body=${bodyContent}`;

    setSubmittedStatus('Email client opened with your message. Thank you for reaching out!');
    setTimeout(() => setSubmittedStatus(null), 6000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
          Get in Touch
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
          Let's Build Something Great.
        </h2>
        <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
          I'm always interested in exploring challenging engineering problems, building intelligent applications, and collaborating on innovative ideas.
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info & Channels */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email card with instant copy button */}
          <div className="p-5 rounded-2xl bg-[#11111B] border border-white/10 hover:border-cyan-500/40 transition-all shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Direct Email
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 focus:outline-none"
                aria-label="Copy Email to Clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-base sm:text-lg font-semibold text-white hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="break-all">{personalInfo.email}</span>
            </a>
          </div>

          {/* Location card */}
          <div className="p-5 rounded-2xl bg-[#11111B] border border-white/10 shadow-lg">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
              Current Location
            </span>
            <div className="flex items-center gap-2 text-slate-200 font-medium">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Professional Links */}
          <div className="p-5 rounded-2xl bg-[#11111B] border border-white/10 shadow-lg">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
              Professional Profiles
            </span>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-600 transition-all text-xs font-medium"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-cyan-400 border border-slate-800 hover:border-slate-600 transition-all text-xs font-medium"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Mailto Fast Launcher */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="w-full flex items-center justify-center gap-2 p-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium text-xs shadow-md shadow-blue-500/25 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Launch Email App directly</span>
          </a>
        </div>

        {/* Contact Form with Validation */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#131322] to-[#0E0E17] border border-white/10 shadow-xl relative"
          >
            <h3 className="text-lg font-bold text-white font-display mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the form below to initiate an inquiry or conversation directly.
            </p>

            {submittedStatus && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-sans">
                {submittedStatus}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Your Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Vance"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
                {errors.name && (
                  <p className="text-rose-400 text-[11px] mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Your Email <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
                {errors.email && (
                  <p className="text-rose-400 text-[11px] mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-mono text-slate-300 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Software Engineering / AI Opportunity / Collaboration"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            <div className="mb-6">
              <label className="block text-xs font-mono text-slate-300 mb-1.5">
                Message <span className="text-rose-400">*</span>
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your note or project details here..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              ></textarea>
              {errors.message && (
                <p className="text-rose-400 text-[11px] mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-xs shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Compose & Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
