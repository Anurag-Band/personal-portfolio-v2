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
        name: "AI-Driven Grading & SaaS Platforms",
        objective:
          "Building scalable AI-driven evaluation systems and multi-tenant SaaS platforms.",
        workDone: [
          "Designed and built a scalable AI-driven bulk grading system for handwritten exam papers, enabling high-volume automated evaluation.",
          "Led end-to-end frontend development of a secure multi-tenant platform using React and Tailwind CSS, delivering user-focused features on tight timelines.",
          "Engineered OCR and LLM evaluation pipelines by integrating AI agents and optimizing prompts to improve scoring consistency.",
          "Deployed and managed services across AWS S3, Azure DevOps, and DigitalOcean using Docker and CI/CD pipelines for automated releases.",
          "Contributed to Golang-based GraphQL APIs for a high-performance POS system, optimizing data flow and modular architecture.",
          "Built a Shopify-style storefront website builder enabling businesses to create, customize, and manage online stores with configurable layouts.",
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
        name: "Visual Analytics Platform Migration",
        objective:
          "Architected migration of legacy monolith to React/Node.js microservices model, reducing technical debt by 40%",
        workDone: [
          "Built Tableau-like visual analytics tool with 20+ chart templates, enabling insights generation 5x faster",
          "Developed data pipelines to ingest 100GB+ of client data into centralized data lake",
          "Engineered administrative orchestration dashboard for workload management and RBAC",
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
        name: "Blockchain-Powered Credentialing SaaS",
        objective:
          "Contributed to blockchain-based SaaS credentialing platform serving 300+ institutions with secure certificate issuance",
        workDone: [
          "Developed core features including secure issuance logic and custom automated templating engines using MERN stack",
          "Resolved critical production bottlenecks in certificate validation and data workflows",
          "Redesigned core user journeys with Material UI, improving usability scores by 15%",
        ],
      },
    ],
  },
];
