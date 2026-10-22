import React, { useState } from 'react';
import { Camera, Scan, Activity } from 'lucide-react';

export const AnprVisual: React.FC = () => {
  const [activeDetection, setActiveDetection] = useState(0);

  const detections = [
    {
      vehicle: 'Commercial Transport Van (White)',
      plateText: 'TN 09 BK 4128',
      confidence: '98.7%',
      yoloLatency: '42 ms',
      ocrLatency: '38 ms',
      totalLatency: '80 ms',
      tollStatus: 'Authorized & Deducted (₹85.00)',
      databaseStatus: 'SQL Matched • Fastag Synced',
    },
    {
      vehicle: 'Passenger SUV (Midnight Gray)',
      plateText: 'KA 03 MX 9021',
      confidence: '99.2%',
      yoloLatency: '39 ms',
      ocrLatency: '35 ms',
      totalLatency: '74 ms',
      tollStatus: 'Authorized & Deducted (₹65.00)',
      databaseStatus: 'Firebase Realtime Verified',
    },
  ];

  const curr = detections[activeDetection];

  return (
    <div className="w-full bg-[#0C0C14] border border-amber-500/20 rounded-xl p-4 sm:p-5 text-left font-mono">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-sans">
        <div className="flex items-center gap-2 text-amber-400 font-semibold">
          <Camera className="w-4 h-4 text-amber-400" />
          <span>Real-Time ANPR Computer Vision Feed (Simulated)</span>
        </div>
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px]">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span>Latency: {curr.totalLatency} (&lt;100ms Target Met)</span>
        </div>
      </div>

      {/* Detection Visual Representation */}
      <div className="relative rounded-lg bg-gradient-to-b from-[#141424] to-[#0A0A10] border border-white/10 p-4 mb-3 overflow-hidden">
        {/* Stylized camera viewport HUD */}
        <div className="absolute top-2 left-2 text-[10px] text-cyan-400/80 font-mono flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
          <span>YOLOv8 Lane-01 Camera [1080p@60fps]</span>
        </div>

        {/* Vehicle silhouette / Bounding Box Canvas */}
        <div className="my-5 py-4 px-3 sm:px-6 rounded-lg bg-black/40 border border-dashed border-cyan-500/40 relative flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Simulated Bounding Box for Vehicle & Plate */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400">
              <Scan className="w-6 h-6 text-cyan-400 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-sans text-slate-300 font-medium">
                {curr.vehicle}
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                BBox: [x:142, y:88, w:380, h:220] • Conf: {curr.confidence}
              </div>
            </div>
          </div>

          {/* Extracted Plate Card */}
          <div className="px-4 py-2 rounded-md bg-yellow-400 text-black border-2 border-slate-900 font-mono font-black text-sm tracking-widest shadow-md">
            {curr.plateText}
          </div>
        </div>

        {/* Switch vehicle button */}
        <div className="flex justify-end">
          <button
            onClick={() => setActiveDetection(activeDetection === 0 ? 1 : 0)}
            className="text-[11px] font-sans text-cyan-400 hover:text-cyan-300 underline"
          >
            Switch Vehicle Stream Sample
          </button>
        </div>
      </div>

      {/* OCR & Database Verification Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans">
        <div className="p-2.5 rounded-lg bg-black/60 border border-white/5 flex items-center justify-between">
          <span className="text-slate-400 text-[11px]">Tesseract OCR Confidence:</span>
          <span className="text-emerald-400 font-mono font-bold">{curr.confidence}</span>
        </div>
        <div className="p-2.5 rounded-lg bg-black/60 border border-white/5 flex items-center justify-between">
          <span className="text-slate-400 text-[11px]">SQL Toll Settlement:</span>
          <span className="text-cyan-300 font-mono font-medium">{curr.tollStatus}</span>
        </div>
      </div>
    </div>
  );
};
