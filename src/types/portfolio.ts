export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  keyFeatures: string[];
  techStack: string[];
  architecture: ArchitectureNode[];
  results: string[];
  futureImprovements: string[];
  githubUrl: string;
  demoUrl?: string;
  tags: string[];
  gradient: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  type: "input" | "process" | "output" | "storage";
  connections: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  description: string;
  gpa?: string;
}

export interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "project" | "hackathon" | "learning" | "achievement";
  tags?: string[];
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  impact?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}
