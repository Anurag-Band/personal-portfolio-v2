# Portfolio Website Development Plan

## Project Overview
Build a modern portfolio website for Anurag Band (@theanuuurag10) - Full Stack Developer with 2 years experience (1yr intern + 1yr full-time).

**Tech Stack:**
- Next.js 15 with TypeScript
- Tailwind CSS
- Shadcn/UI components
- Bun package manager
- Data-driven architecture (no repeated code)

## Layout Structure

### Fixed Elements
1. **Left Sidebar Card** (fixed, non-scrollable)
   - Profile image
   - Name display
   - Social links (GitHub, LeetCode, HackerRank, Resume, Twitter, Meeting)

2. **Top Navigation** (fixed, non-scrollable)
   - Left: Username (@theanuuurag10)
   - Right: Home, Work, Projects, Contact, Theme toggle (dark/light)

### Scrollable Area
Main content area (right section) - all page sections scroll here

---

## Phase 1: Project Setup & Configuration

### Tasks:
1. Verify Next.js, TypeScript, Tailwind CSS setup
2. Configure Shadcn/UI theme provider
3. Create folder structure:
   ```
   src/
   ├── components/
   │   ├── layout/
   │   │   ├── Sidebar.tsx
   │   │   ├── TopNav.tsx
   │   │   └── MainLayout.tsx
   │   ├── sections/
   │   │   ├── AboutSection.tsx
   │   │   ├── SkillsSection.tsx
   │   │   ├── WorkSection.tsx
   │   │   ├── ProjectsSection.tsx
   │   │   └── ContactSection.tsx
   │   └── ui/ (shadcn components)
   ├── data/
   │   ├── profile.ts
   │   ├── skills.ts
   │   ├── work.ts
   │   ├── projects.ts
   │   └── contact.ts
   └── types/
       └── index.ts
   ```
4. Install required shadcn components:
   - `bun x shadcn@latest add button card separator badge avatar`

---

## Phase 2: Data Structure Setup

### Create Type Definitions (`src/types/index.ts`)
```typescript
export interface SocialLink {
  name: string;
  url: string;
  icon: string; // lucide-react icon name
}

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

export interface Skill {
  name: string;
  icon: string; // icon name or emoji
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface WorkProject {
  name: string;
  objective: string;
  workDone: string[];
}

export interface WorkExperience {
  company: string;
  logo: string;
  from: string;
  to: string;
  projects: WorkProject[];
}

export interface PersonalProject {
  name: string;
  thumbnail: string;
  githubUrl?: string;
  liveUrl?: string;
  objective: string;
  workDone: string[];
  techStack: string[];
}

export interface Contact {
  email: string;
  phone: string;
}
```

### Create Data Files

**`src/data/profile.ts`**
```typescript
export const profileData = {
  name: "Anurag Band",
  username: "@theanuuurag10",
  image: "/profile-image.jpg",
  role: "Software Engineer | Full Stack + AI",
  headline: "I turn your digital vision into reality",
  intro: "👋 Hi, I'm Anurag Band, a skilled Full-Stack Software Engineer with solid experience in building modern, scalable applications. I'm currently expanding my skills in AI to bring smarter, more innovative solutions to the projects I work on.",
  location: "Bengaluru, India",
  experience: "2 years",
  projectCount: "15+ projects done",
  socialLinks: [
    { name: "Github", url: "https://github.com/Anurag-Band", icon: "Github" },
    { name: "LeetCode", url: "#", icon: "Code2" },
    { name: "HackerRank", url: "#", icon: "Trophy" },
    { name: "Resume", url: "/resume.pdf", icon: "FileText" },
    { name: "Twitter", url: "#", icon: "Twitter" },
    { name: "Meeting", url: "#", icon: "Calendar" },
  ],
};
```

**`src/data/skills.ts`**
```typescript
export const skillsData = [
  {
    title: "AI / ML",
    skills: [
      { name: "OpenAI", icon: "🤖" },
      { name: "TensorFlow", icon: "🧠" },
      { name: "PyTorch", icon: "🔥" },
      { name: "Langchain", icon: "🔗" },
    ],
  },
  {
    title: "Full Stack",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Node.js", icon: "🟢" },
      { name: "TypeScript", icon: "💙" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "📦" },
      { name: "Docker", icon: "🐳" },
      { name: "VS Code", icon: "💻" },
      { name: "Postman", icon: "📮" },
    ],
  },
];
```

**`src/data/work.ts`**
```typescript
export const workData = [
  {
    company: "Zebracat",
    logo: "/logos/zebracat.png",
    from: "Feb 2024",
    to: "May 2025",
    projects: [
      {
        name: "AI Video Generation Platform",
        objective: "Build AI-powered platform to convert text/audio to professional videos",
        workDone: [
          "Developed smart web app with Next.js and TypeScript",
          "Implemented AI features for text-to-video conversion",
          "Set up backend video rendering with TensorFlow",
          "Integrated Stripe for subscription management",
        ],
      },
    ],
  },
  {
    company: "Job Wizard",
    logo: "/logos/job-wizard.png",
    from: "Oct 2022",
    to: "Dec 2023",
    projects: [
      {
        name: "Job Application Platform",
        objective: "Streamline job application process",
        workDone: [
          "Built full-stack application with MERN stack",
          "Implemented user authentication and authorization",
          "Created responsive UI with React and Tailwind CSS",
        ],
      },
    ],
  },
];
```

**`src/data/projects.ts`**
```typescript
export const projectsData = [
  {
    name: "Zebracat AI",
    thumbnail: "/projects/zebracat.jpg",
    githubUrl: "https://github.com/username/zebracat",
    liveUrl: "https://zebracat.ai",
    objective: "AI-powered platform that converts text, audio, and blog content into professional videos optimized for social media",
    workDone: [
      "Developed smart web app with Next.js and TypeScript",
      "Implemented AI features for text-to-video conversion",
      "Computer vision-based scene and avatar generation using TensorFlow",
      "Backend video rendering and Stripe integration",
    ],
    techStack: ["Next.js", "TypeScript", "TensorFlow", "Tailwind CSS", "MongoDB", "Stripe"],
  },
  // Add more projects
];
```

**`src/data/contact.ts`**
```typescript
export const contactData = {
  email: "anuragband@example.com",
  phone: "+91 XXXXX XXXXX",
};
```

---

## Phase 3: Layout Components

### 3.1 Main Layout (`src/components/layout/MainLayout.tsx`)
- Grid layout: fixed left sidebar + fixed top nav + scrollable main content
- CSS classes: `grid grid-cols-[300px_1fr] h-screen`

### 3.2 Sidebar Component (`src/components/layout/Sidebar.tsx`)
- Import `profileData` from data
- Display: Avatar, name, social links as buttons
- Fixed position, full height
- Use shadcn `Avatar` and `Button` components

### 3.3 Top Navigation (`src/components/layout/TopNav.tsx`)
- Import `profileData.username`
- Left: username display
- Right: nav links (Home, Work, Projects, Contact) + Theme toggle
- Use shadcn theme toggle component
- Fixed position, full width

---

## Phase 4: Section Components

### 4.1 About Section (`src/components/sections/AboutSection.tsx`)
- Import `profileData`
- Layout:
  1. Headline (large text)
  2. Role (medium text with highlight)
  3. Intro paragraph
  4. Horizontal separator (shadcn `Separator`)
  5. Stats cards (3-column grid):
     - Location card
     - Experience card
     - Projects count card
  - Use shadcn `Card` component

### 4.2 Skills Section (`src/components/sections/SkillsSection.tsx`)
- Import `skillsData`
- Map over skill categories
- Each category: title + grid of skill badges
- Use shadcn `Badge` component
- Grid layout for skills

### 4.3 Work Section (`src/components/sections/WorkSection.tsx`)
- Import `workData`
- Map over work experiences
- Each experience card:
  - Header: company logo + name (left), duration (right)
  - Map over projects:
    - Project name (bold)
    - Objective
    - Work done (bullet list)
- Use shadcn `Card` component

### 4.4 Projects Section (`src/components/sections/ProjectsSection.tsx`)
- Import `projectsData`
- Grid layout (2 columns on desktop, 1 on mobile)
- Each project card:
  - Thumbnail with hover zoom effect (CSS transform: scale)
  - Project name + icons (GitHub, Live link)
  - Description (objective + work done)
  - Tech stack badges at bottom
- Use shadcn `Card` and `Badge` components

### 4.5 Contact Section (`src/components/sections/ContactSection.tsx`)
- Import `contactData`
- Simple card with email and phone
- Copy-to-clipboard buttons for each
- Use shadcn `Card` and `Button` components

---

## Phase 5: Main Page Assembly

### Update `src/app/page.tsx`
- Import MainLayout and all section components
- Render in order:
  1. AboutSection
  2. SkillsSection
  3. WorkSection
  4. ProjectsSection
  5. ContactSection
- Add proper spacing between sections
- Add section IDs for navigation

---

## Phase 6: Theme & Styling

### Tasks:
1. Configure dark/light theme using shadcn theme provider
2. Add theme toggle in TopNav
3. Ensure all components respect theme
4. Add hover effects:
   - Project thumbnail zoom on hover
   - Social link button hover states
   - Nav link hover states
5. Add smooth scroll behavior for navigation

---

## Phase 7: Assets & Final Touches

### Tasks:
1. Add profile image to `/public/profile-image.jpg`
2. Add company logos to `/public/logos/`
3. Add project thumbnails to `/public/projects/`
4. Add resume PDF to `/public/resume.pdf`
5. Verify responsive design (mobile, tablet, desktop)
6. Test theme toggle functionality
7. Test all links and navigation

---

## Implementation Order Summary

1. **Phase 1**: Project setup (10 min)
2. **Phase 2**: Create all data files with your actual data (15 min)
3. **Phase 3**: Build layout components (Sidebar, TopNav, MainLayout) (20 min)
4. **Phase 4**: Build section components one by one (40 min)
5. **Phase 5**: Assemble main page (10 min)
6. **Phase 6**: Theme & styling polish (15 min)
7. **Phase 7**: Add assets & final testing (10 min)

**Total estimated time: ~2 hours**

---

## Key Design Principles

1. **Data-Driven**: All content comes from data files - easy to update
2. **Reusable Components**: Map over data, no repeated code
3. **Type-Safe**: TypeScript interfaces for all data structures
4. **Responsive**: Mobile-first approach with Tailwind
5. **Accessible**: Proper semantic HTML and ARIA labels
6. **Performance**: Next.js optimizations, image optimization

---

## Notes for Claude AI Agent

- Start with Phase 1, complete each phase before moving to next
- Use exact file paths and names as specified
- Use shadcn/ui components - install as needed
- Follow TypeScript best practices
- Use Tailwind CSS for all styling
- Ensure dark mode works correctly
- Test each component after creation
- Keep code clean and well-commented
