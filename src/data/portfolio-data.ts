/**
 * Portfolio Data
 * Single source of truth for all portfolio content
 */

import type {
  PersonalInfo,
  Experience,
  Writing,
  Speaking,
  Project,
  Education,
  SocialLink,
} from "@/types/portfolio";

import headshotAsset from "@/assets/hamna.jpg.asset.json";

export const personalInfo: PersonalInfo = {
  name: "Hamna Ali",
  title: "Software Engineer | Full Stack Developer",
  location: { city: "Lahore", country: "Pakistan" },
  website: "hamnaali2003.github.io",
  email: "hamnaali@gmail.com",
  avatar: headshotAsset.url,
  bio: "Full Stack Software Engineer currently working at Wateen Telecom Limited, with hands-on experience building scalable web and mobile applications using React.js, Next.js, React Native, Node.js, Express.js, and PostgreSQL. Experienced in containerized deployment with Docker and Kubernetes, REST API design, and Agile delivery in remote and enterprise teams. Strong focus on clean architecture, performance, and maintainable, production-ready code. Open to full-time, contract, and remote opportunities.",
  skills: "JavaScript (ES6+), TypeScript, C++, HTML5, CSS3, SQL, React.js, Next.js, Redux Toolkit, Zustand, React Router, React Hook Form, Tailwind CSS, Bootstrap, Vite, React Native, Expo, Node.js, Express.js, REST APIs, JWT, Auth.js (OAuth), Role-Based Access Control, Zod, Microservices, PostgreSQL, Prisma ORM, Firebase, Firestore, Docker, Kubernetes, CI/CD, Linux, Git, GitHub, Postman, Jest, Agile/Scrum, Unit Testing, System Design",
};

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Wateen Telecom Limited",
    role: "Software Engineer",
    location: "Pakistan",
    startDate: "2026-01",
    endDate: null,
    description: "Design, develop, and maintain full stack applications using React.js, Next.js, Node.js, Express.js, and PostgreSQL. Build and consume RESTful APIs and optimize PostgreSQL queries and schemas. Containerize applications with Docker and support deployment with Kubernetes. Collaborate in Agile sprints, take part in code reviews, and improve existing systems for stability and user experience.",
    current: true,
  },
  {
    id: "exp-2",
    company: "FixLab (Remote)",
    role: "Frontend Developer",
    location: "Remote",
    startDate: "2024-01",
    endDate: "2026-01",
    description: "Developed responsive web applications using React.js with modern design patterns. Created reusable components and integrated REST APIs. Improved user experience and performance through optimization, collaborating with remote teams using Git and Agile workflows.",
    current: false,
  },
  {
    id: "exp-3",
    company: "ArgonTeq",
    role: "Mobile App Developer Intern",
    location: "Pakistan",
    startDate: "2025-04",
    endDate: "2025-06",
    duration: "3 months",
    description: "Developed production-ready mobile apps using React Native, TypeScript, and Firebase. Built reusable UI components with Firebase Authentication, implemented Firestore operations and REST API integrations, and optimized app performance.",
    current: false,
  },
];

export const writing: Writing[] = [];

export const speaking: Speaking[] = [];

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "TaskMate (Project Management Portal)",
    description: "Multi-tenant task and project platform with workspaces, multi-assignee tasks, invite links, notifications, and an audit log. Server-side role-based permissions at workspace, project, and task level, plus Credentials and Google OAuth login.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth.js", "Tailwind CSS"],
    status: "active",
  },
  {
    id: "proj-2",
    name: "Eat-and-Cheat",
    description: "Desi calorie deficit and macro tracker for Pakistani foods with onboarding, dashboard, food catalog, meal tracking, and light/dark themes. Layered REST API with JWT auth, bcrypt, and Zod validation.",
    techStack: ["React", "Redux Toolkit", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
    status: "active",
  },
  {
    id: "proj-3",
    name: "GoldBlockApp",
    description: "Virtual card creation app with secure authentication, buy/sell gold functionality, and Firestore integration.",
    techStack: ["React Native", "TypeScript", "Firebase"],
    status: "active",
  },
  {
    id: "proj-4",
    name: "E-Mechanic App",
    description: "Capstone mobile app connecting vehicle owners with nearby mechanics, with service booking, real-time request tracking, pricing visibility, and mechanic ratings.",
    techStack: ["React Native", "Expo", "Firebase"],
    status: "active",
  },
  {
    id: "proj-5",
    name: "NewsHub",
    description: "News app with category browsing, infinite scrolling, loading indicators, and secure API key handling.",
    techStack: ["React.js", "React Router", "Bootstrap", "Vite"],
    status: "active",
  },
  {
    id: "proj-6",
    name: "Food & Recipe Web App",
    description: "Responsive recipe platform with Firebase Authentication and cloud database integration.",
    techStack: ["React", "Firebase"],
    status: "active",
  },
  {
    id: "proj-7",
    name: "TextUtils",
    description: "Text analysis tool with case conversion, word/character counts, reading-time estimate, clipboard copy, and dark mode.",
    techStack: ["React.js", "Bootstrap", "React Router"],
    status: "active",
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "University of Education",
    degree: "Bachelor of Science",
    field: "Information Technology",
    startYear: "2021",
    endYear: "2025",
    location: "Lahore, Pakistan",
  },
  {
    id: "edu-2",
    institution: "UET Lahore",
    degree: "Certification",
    field: "Full Stack Web Application Development",
    startYear: "",
    endYear: "",
    location: "Lahore, Pakistan",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    username: "hamna-ali-018417280",
    url: "https://linkedin.com/in/hamna-ali-018417280",
  },
  {
    platform: "GitHub",
    username: "hamnaali2003",
    url: "https://github.com/hamnaali2003",
  },
  {
    platform: "Portfolio",
    url: "https://hamnaali2003.github.io",
  },
];
