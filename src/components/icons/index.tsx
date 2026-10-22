import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

const baseProps = (props: IconProps) => ({
  xmlns: "http://www.w3.org/2000/svg",
  width: props.size || 24,
  height: props.size || 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: props.className,
});

export const ArrowDown: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
);

export const ArrowRight: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
);

export const ArrowUp: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M12 19V5M5 12l7-7 7 7" /></svg>
);

export const ArrowUpRight: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M7 17L17 7M7 7h10v10" /></svg>
);

export const Award: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></svg>
);

export const BookOpen: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
);

export const Bot: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M12 8V4H8M12 2v2M2 14h2M20 14h2M15 13v2M9 13v2" /><rect width="16" height="12" x="4" y="8" rx="2" /></svg>
);

export const Building2: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" /></svg>
);

export const Calendar: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
);

export const Camera: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
);

export const Check: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><polyline points="20 6 9 17 4 12" /></svg>
);

export const CheckCircle: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
);

export const CheckCircle2: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
);

export const Cloud: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>
);

export const Code: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
);

export const Copy: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
);

export const Cpu: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" /></svg>
);

export const Database: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" /></svg>
);

export const Eye: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
);

export const FileDown: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M12 18v-6" /><path d="m9 15 3 3 3-3" /></svg>
);

export const FileText: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8M16 13H8M16 17H8" /></svg>
);

export const Github: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

export const GraduationCap: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
);

export const Layers: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0l8.57-3.9a1 1 0 0 0 0-1.83Z" /><path d="m22 12.5-9.17 4.16a2 2 0 0 1-1.66 0L2 12.5" /><path d="m22 17.5-9.17 4.16a2 2 0 0 1-1.66 0L2 17.5" /></svg>
);

export const Linkedin: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export const Mail: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);

export const MapPin: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
);

export const Menu: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
);

export const Network: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><rect x="16" y="16" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="9" y="2" width="6" height="6" rx="1" /><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" /><path d="M12 12V8" /></svg>
);

export const Scan: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /></svg>
);

export const Send: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
);

export const Server: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><rect width="20" height="8" x="2" y="2" rx="2" ry="2" /><rect width="20" height="8" x="2" y="14" rx="2" ry="2" /><line x1="6" x2="6.01" y1="6" y2="6" /><line x1="6" x2="6.01" y1="18" y2="18" /></svg>
);

export const ShieldCheck: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
);

export const Sparkles: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
);

export const Trophy: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
);

export const X: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M18 6 6 18M6 6l12 12" /></svg>
);

export const Zap: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
);

export const Activity: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
);

export const Brain: React.FC<IconProps> = (props) => (
  <svg {...baseProps(props)}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04z" /></svg>
);
