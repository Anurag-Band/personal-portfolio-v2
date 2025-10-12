import type { PersonalProject } from "@/types";

export const projectsData: PersonalProject[] = [
  {
    name: "Share Gizz – Simplified File Sharing for Everyone",
    thumbnail: "/projects/share-gizz.jpg",
    githubUrl: "https://github.com/Anurag-Band",
    objective:
      "Developed a robust file sharing platform supporting authenticated file uploads, secure access controls, and real-time email notifications",
    workDone: [
      "Leveraged AWS S3 for scalable file storage and implemented JWT-based authentication with role-based access control for enhanced security",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS S3",
      "JWT",
      "Tailwind CSS",
      "Mailgun",
    ],
  },
  {
    name: "Video Gizz – Seamless Video Transcoding Platform",
    thumbnail: "/projects/video-gizz.jpg",
    githubUrl: "https://github.com/Anurag-Band",
    objective:
      "Developed a streamlined video transcoding workflow with FFmpeg local processing and AWS S3 storage integration",
    workDone: [
      "Added HLS streaming support with auto-generated resolutions (360p–1080p) for adaptive streaming and implemented Google OAuth flow using Passport.js",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "FFmpeg",
      "AWS S3",
      "JWT",
      "Passport.js",
      "Tailwind CSS",
    ],
  },
];
