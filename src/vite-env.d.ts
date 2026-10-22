/// <reference types="vite/client" />

declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    strokeWidth?: number | string;
    color?: string;
    className?: string;
  }
  export type Icon = FC<IconProps>;
  export const ArrowDown: Icon;
  export const ArrowRight: Icon;
  export const ArrowUp: Icon;
  export const ArrowUpRight: Icon;
  export const Award: Icon;
  export const BookOpen: Icon;
  export const Bot: Icon;
  export const Briefcase: Icon;
  export const Building2: Icon;
  export const Calendar: Icon;
  export const Camera: Icon;
  export const Check: Icon;
  export const CheckCircle: Icon;
  export const CheckCircle2: Icon;
  export const ChevronRight: Icon;
  export const Clock: Icon;
  export const Cloud: Icon;
  export const Code: Icon;
  export const Copy: Icon;
  export const Cpu: Icon;
  export const Database: Icon;
  export const ExternalLink: Icon;
  export const Eye: Icon;
  export const FileDown: Icon;
  export const FileText: Icon;
  export const Github: Icon;
  export const GraduationCap: Icon;
  export const Heart: Icon;
  export const Layers: Icon;
  export const Linkedin: Icon;
  export const Mail: Icon;
  export const MapPin: Icon;
  export const Menu: Icon;
  export const Network: Icon;
  export const Scan: Icon;
  export const Send: Icon;
  export const Server: Icon;
  export const ShieldCheck: Icon;
  export const Sparkles: Icon;
  export const Terminal: Icon;
  export const Trophy: Icon;
  export const Users: Icon;
  export const X: Icon;
  export const Zap: Icon;
  export const Activity: Icon;
  export const Brain: Icon;
}
