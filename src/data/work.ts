import type { WorkExperience } from "@/types";

export const workData: WorkExperience[] = [
  {
    company: "Quichub Innovations",
    companyUrl: "https://quichub.com",
    logo: "/logos/quichub.png",
    from: "September 2024",
    to: "Present",
    projects: [
      {
        name: "AI-Driven Grading System",
        objective:
          "Architected and delivered an AI-driven grading system processing 10K+ handwritten scripts/day with 95%+ accuracy, reducing manual evaluation time by 70%",
        workDone: [
          "Led end-to-end frontend development using React, Next.js, TypeScript, improving user onboarding and feature delivery speed by 30%",
          "Integrated OCR pipelines and LLM-based AI agents, engineering prompts that achieved 90%+ consistent evaluation",
          "Deployed on AWS, Azure DevOps, and DigitalOcean with Docker + CI/CD, enabling daily releases and improving system reliability",
          "Collaborated directly with founders to define product roadmap and engineered scalable modules, driving 25% faster client adoption across pilot institutions",
        ],
      },
    ],
  },
  {
    company: "Edilitics",
    companyUrl: "https://edilitics.com",
    logo: "/logos/edilitics.png",
    from: "March 2023",
    to: "May 2023",
    projects: [
      {
        name: "Visual Analytics Tool",
        objective:
          "Refactored a legacy monolith into a modern React + Node.js microservices architecture, reducing technical debt by 40%",
        workDone: [
          "Built a Tableau-like visual analytics tool with 20+ chart templates, enabling insights generation 5x faster",
          "Developed REST APIs for migrating and processing 100GB+ client data into a centralized data lake",
        ],
      },
    ],
  },
  {
    company: "Truscholar",
    companyUrl: "https://truscholar.io",
    logo: "/logos/truscholar.png",
    from: "October 2022",
    to: "March 2023",
    projects: [
      {
        name: "Blockchain-Based SaaS Credentialing Platform",
        objective:
          "Contributed to a blockchain-based SaaS credentialing platform serving 300+ institutions, ensuring secure and verifiable certificates",
        workDone: [
          "Resolved production issues and developed automated email workflows with the MERN stack, improving client response times by 25%",
          "Redesigned core user journeys with Material UI, boosting usability scores by 15%",
        ],
      },
    ],
  },
];
