// Social Link Interface
export interface SocialLink {
  name: string;
  url: string;
  icon: string; // lucide-react icon name
}

// Profile Interface
export interface Profile {
  name: string;
  username: string;
  image: string;
  role: string;
  headline: string;
  intro: string;
  location: string;
  experience: string;
  projectCount: string;
  socialLinks: SocialLink[];
}

// Skills Interfaces
export interface Skill {
  name: string;
  icon: string; // emoji or icon identifier
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Work Experience Interfaces
export interface WorkProject {
  name: string;
  objective: string;
  workDone: string[];
}

export interface WorkExperience {
  company: string;
  companyUrl: string;
  logo: string;
  from: string;
  to: string;
  projects: WorkProject[];
}

// Personal Projects Interface
export interface PersonalProject {
  name: string;
  thumbnail: string;
  githubUrl?: string;
  liveUrl?: string;
  objective: string;
  workDone: string[];
  techStack: string[];
}

// Contact Interface
export interface Contact {
  email: string;
  phone: string;
}
