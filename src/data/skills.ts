import type { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: "💛" },
      { name: "TypeScript", icon: "💙" },
      { name: "Golang", icon: "�" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Next.js", icon: "▲" },
      { name: "React.js", icon: "⚛️" },
      { name: "Node.js", icon: "�" },
      { name: "Express.js", icon: "⚡" },
      { name: "Redux", icon: "💜" },
      { name: "Redux Toolkit", icon: "🔧" },
      { name: "GraphQL", icon: "🔷" },
      { name: "Tailwind CSS", icon: "�" },
      { name: "Material UI", icon: "�" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "�" },
      { name: "PostgreSQL", icon: "�" },
      { name: "Redis", icon: "�" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Docker", icon: "🐳" },
      { name: "AWS S3", icon: "☁️" },
      { name: "AWS EC2", icon: "☁️" },
      { name: "Azure DevOps", icon: "�" },
      { name: "DigitalOcean", icon: "�" },
      { name: "Git", icon: "�" },
      { name: "GitHub", icon: "�" },
      { name: "GitLab", icon: "🦊" },
      { name: "Jest", icon: "�" },
      { name: "React Testing Library", icon: "🧪" },
    ],
  },
  {
    title: "AI/ML Development",
    skills: [
      { name: "OpenAI", icon: "🤖" },
      { name: "LangChain", icon: "�" },
      { name: "AI Agent Workflows", icon: "🤖" },
      { name: "OCR Pipelines", icon: "�" },
      { name: "Prompt Engineering", icon: "✍️" },
    ],
  },
];
