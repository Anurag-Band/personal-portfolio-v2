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
        name: "Eddyowl – AI-Powered Handwritten Scripts Grading",
        objective:
          "Engineered a high-throughput AI evaluation engine for handwritten scripts processing 100+ pages/min with 95%+ grading accuracy",
        workDone: [
          "Architected a RAG-based grading system with Vector Databases, cross-referencing CBSE-aligned context pools for high-precision evaluation",
          "Built multi-agent workflow automating rubric generation and topic-wise diagnostic analytics with historical performance comparison",
          "Developed bulk grading system with batch image/PDF uploads, significantly reducing manual evaluation time by 70%",
          "Integrated OCR pipelines and LLM-based AI agents, engineering prompts that achieved 90%+ consistent evaluation across subjects",
        ],
      },
      {
        name: "Quicshop – Headless Storefront Orchestration System",
        objective:
          "Developed a complete headless storefront orchestration platform with modular theme engines and real-time rendering",
        workDone: [
          "Architected storefront designer functionality using Golang and GraphQL with modular templates, themes, and section-based customization",
          "Built low-latency dynamic storefront renderer with Qwik framework, optimizing real-time data hydration by decoupling seller configs from presentation",
          "Integrated Razorpay dynamic payment routing and custom Email Template Logic Engine for automated scenario-based communications",
          "Implemented versioned publishing pipeline enabling seamless storefront updates without downtime",
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
