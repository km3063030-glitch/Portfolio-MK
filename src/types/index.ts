export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  contributions: string[];
  technologies: string[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  demoType: 'rag' | 'mailmind' | 'anpr';
}

export interface SkillCategory {
  title: string;
  description?: string;
  icon: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  gpa: string;
  highlights: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  category: 'cloud' | 'programming' | 'academic';
}

export interface AchievementItem {
  title: string;
  event: string;
  organization: string;
  award: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  description: string[];
}

export interface PersonalInfo {
  name: string;
  headline: string;
  subheadline: string;
  email: string;
  location: string;
  statusBadge: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
  aboutText: string[];
  stats: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
}
