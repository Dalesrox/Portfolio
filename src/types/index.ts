export interface GithubProject {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  homepage: string | null;
}

export interface ResumeExperience {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface ResumeEducation {
  institution: string;
  degree: string;
  period: string;
  description: string[];
}

export interface ResumeSkill {
  category: string;
  items: string[];
}

export interface Resume {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
  experience: ResumeExperience[];
  education: ResumeEducation[];
  skills: ResumeSkill[];
  certifications: string[];
  languages: {
    name: string;
    level: string;
  }[];
}

export interface Logo {
  id: number;
  src: string;
  alt: string;
  url: string;
}