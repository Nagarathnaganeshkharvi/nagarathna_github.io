import {
  Coffee,
  FileCode2,
  Braces,
  Database,
  Atom,
  Leaf,
  LayoutTemplate,
  Wind,
  Server,
  Network,
  Layers,
  Code2,
  Sun,
  Send,
  GitBranch,
  Github,
  type LucideIcon,
} from "lucide-react";

/* ---------------------------------- Profile --------------------------------- */

export const profile = {
  name: "Nagarathna Ganesh Kharvi",
  firstName: "Nagarathna",
  role: "Java Full Stack Developer",
  tagline: "Aspiring Java Full Stack Developer",
  summary:
    "Aspiring Java Full Stack Developer with strong knowledge of Java, Spring Boot, ReactJS, SQL, and web development. Skilled in building responsive web applications and integrating front-end with back-end systems. Passionate about problem-solving and eager to contribute to real-world software development projects.",
  location: "Udupi District, Karnataka, India",
  email: "nagarathnakharvi83@gmail.com",
  phone: "+91 6363847192",
  linkedin: "https://www.linkedin.com/in/nagarathna-kharvi-150453299",
  linkedinLabel: "linkedin.com/in/nagarathna-kharvi",
};

export const stats = [
  { value: "2", label: "Hands-on Internships" },
  { value: "2", label: "Major Projects" },
  { value: "3", label: "Certifications" },
  { value: "7.66", label: "B.E CGPA / 10" },
];

/* ---------------------------------- Skills ---------------------------------- */

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  accent: string;
  skills: { name: string; icon: LucideIcon }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    accent: "text-teal-600 bg-teal-500/10",
    skills: [
      { name: "Java", icon: Coffee },
      { name: "HTML", icon: FileCode2 },
      { name: "CSS", icon: Braces },
      { name: "JavaScript", icon: Braces },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    accent: "text-emerald-600 bg-emerald-500/10",
    skills: [
      { name: "ReactJS", icon: Atom },
      { name: "Spring Boot", icon: Leaf },
      { name: "Bootstrap", icon: LayoutTemplate },
      { name: "Tailwind CSS", icon: Wind },
    ],
  },
  {
    title: "Backend Technologies",
    icon: Server,
    accent: "text-orange-600 bg-orange-500/10",
    skills: [
      { name: "JDBC", icon: Server },
      { name: "Servlets", icon: Network },
      { name: "Hibernate", icon: Layers },
      { name: "REST APIs", icon: Network },
    ],
  },
  {
    title: "Database & Tools",
    icon: Database,
    accent: "text-amber-600 bg-amber-500/10",
    skills: [
      { name: "MySQL", icon: Database },
      { name: "VS Code", icon: Code2 },
      { name: "Eclipse IDE", icon: Sun },
      { name: "Postman", icon: Send },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
    ],
  },
];

/* --------------------------------- Projects --------------------------------- */

export type Project = {
  title: string;
  description: string;
  points: string[];
  tech: string[];
  featured?: boolean;
  icon: LucideIcon;
};

export const projects: Project[] = [
  {
    title: "Decentralized E-Voting System Using Blockchain",
    description:
      "A secure and transparent digital voting platform built on blockchain technology, ensuring tamper-proof elections with verifiable results.",
    points: [
      "Designed and implemented a secure, transparent voting system using blockchain technology",
      "Developed smart contracts in Solidity for vote casting, tallying, and verification",
      "Built a user interface for voters to register, cast votes securely, and view election results",
      "Integrated Metamask for secure user authentication and blockchain interaction",
    ],
    tech: ["Blockchain", "Solidity", "Smart Contracts", "Metamask", "ReactJS"],
    featured: true,
    icon: Layers,
  },
  {
    title: "Skin Lesion Detection",
    description:
      "A deep-learning powered diagnostic tool that classifies skin lesion images to support early skin cancer detection.",
    points: [
      "Developed a skin lesion detection system using MobileNetV2 to classify images",
      "Implemented image upload, preprocessing, and automated lesion classification",
      "Provides fast diagnostic support for early skin cancer detection",
    ],
    tech: ["MobileNetV2", "Deep Learning", "Image Processing", "Python"],
    featured: true,
    icon: Network,
  },
];

/* --------------------------------- Experience -------------------------------- */

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    role: "Java Full Stack Developer Intern",
    company: "JSpiders",
    period: "Jun 2025 — Nov 2025",
    points: [
      "Strengthened technical skills in Core Java, OOPs, SQL, and web technologies during hands-on training",
      "Built mini-projects by integrating front-end interfaces with back-end databases using JDBC",
      "Learned to write clean, optimized code following industry standards and best practices",
    ],
    current: true,
  },
  {
    role: "Full Stack Java Intern",
    company: "SkillDzire",
    period: "Feb 2025 — May 2025",
    points: [
      "Developed a web-based Student Management System using Java, JDBC, and MySQL",
      "Designed a simple, user-friendly interface for managing student records efficiently",
      "Gained hands-on experience integrating UI, business logic, and database layers",
    ],
  },
];

/* --------------------------------- Education --------------------------------- */

export type Education = {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
};

export const education: Education[] = [
  {
    degree: "B.E — Computer Science and Business System",
    institution: "Canara Engineering College, Bantwal (VTU)",
    period: "2021 — 2025",
    score: "7.66 / 10",
    scoreLabel: "CGPA",
  },
  {
    degree: "Senior Secondary (12th)",
    institution: "Pre-University Education",
    period: "2019 — 2021",
    score: "75%",
    scoreLabel: "Percentage",
  },
  {
    degree: "Secondary School (10th)",
    institution: "Secondary Education",
    period: "2017 — 2019",
    score: "78.88%",
    scoreLabel: "Percentage",
  },
];

/* ------------------------------- Certifications ------------------------------ */

export type Certification = {
  title: string;
  issuer: string;
};

export const certifications: Certification[] = [
  {
    title: "Full Stack Java Certification",
    issuer: "SkillDzire",
  },
  {
    title: "Java Full Stack Certification",
    issuer: "JSpiders",
  },
  {
    title: "HTML, CSS, and JavaScript for Web Developers",
    issuer: "Coursera",
  },
];

/* --------------------------------- Navigation -------------------------------- */

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
