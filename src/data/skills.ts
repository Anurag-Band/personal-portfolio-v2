import type { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: "💛" },
      { name: "TypeScript", icon: "💙" },
      { name: "Golang", icon: "🐹" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Qwik", icon: "⚡" },
      { name: "Redux Toolkit", icon: "💜" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Material UI", icon: "🎯" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "⚡" },
      { name: "Golang", icon: "🐹" },
      { name: "GraphQL", icon: "🔷" },
      { name: "REST APIs", icon: "🔗" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🔶" },
      { name: "Redis", icon: "🔴" },
      { name: "Vector DBs", icon: "📊" },
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      { name: "Docker", icon: "🐳" },
      { name: "AWS (S3, EC2)", icon: "☁️" },
      { name: "Azure DevOps", icon: "🔷" },
      { name: "DigitalOcean", icon: "💧" },
      { name: "CI/CD Pipelines", icon: "🔄" },
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      { name: "LangChain", icon: "🔗" },
      { name: "LangGraph", icon: "📈" },
      { name: "Mem0", icon: "🧠" },
      { name: "AI Agent Workflows", icon: "🤖" },
      { name: "OCR Pipelines", icon: "📝" },
      { name: "Prompt Engineering", icon: "✍️" },
    ],
  },
];
