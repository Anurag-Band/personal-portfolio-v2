import type { PersonalProject } from "@/types";

export const projectsData: PersonalProject[] = [
  {
    name: "RuntimeLens – Intelligence Engine for AI Coding Agents",
    thumbnail: "/projects/runtimelens.jpg",
    githubUrl: "https://github.com/Anurag-Band/runtimelens",
    objective:
      "Architected a runtime evidence engine in Go that bridges AI agents with execution states, capturing stack frames and detecting runtime anomalies with 95%+ accuracy",
    workDone: [
      "Leveraged Delve debugger to capture stack frames and detect nil-pointer dereferences and panics in real-time",
      "Implemented Model Context Protocol (MCP) for seamless integration with Claude Code and AI coding assistants",
      "Built three-layer adapter architecture with SQLite persistence for secure session replay and automated data redaction",
    ],
    techStack: [
      "Go",
      "Delve",
      "SQLite",
      "MCP Protocol",
      "Cobra CLI",
      "AI Integration",
    ],
  },
  {
    name: "Video Gizz – Distributed Video Transcoding Platform",
    thumbnail: "/projects/video-gizz.jpg",
    githubUrl: "https://github.com/Anurag-Band",
    objective:
      "Engineered a high-performance transcoding pipeline using FFmpeg to generate HLS adaptive streams, optimizing playback across varying network conditions.",
    workDone: [
      "Built HLS streaming support with auto-generated resolutions (360p–1080p) for adaptive bitrate streaming.",
      "Integrated AWS S3 for scalable cloud storage and Google OAuth via Passport.js for secure identity management.",
      "Secure file and video-processing backend using AWS, FFmpeg and modern authentication.",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "FFmpeg",
      "AWS S3",
      "HLS Streaming",
      "MongoDB",
      "Google OAuth",
    ],
  },
];
