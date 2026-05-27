export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "velvet-secrets",
    role: "Front-end Developer",
    company: "Team Challenge / VELVETSECRETS",
    period: "May 2025 - Present",
    description: [
      "Leading the frontend development of high-performance SaaS e-commerce platforms using React and TypeScript.",
      "Optimizing web performance and digital accessibility to enhance user conversion rates.",
      "Implementing scalable frontend architectures using Section-based and Atomic design methodologies.",
      "Collaborating with cross-functional teams to bridge business requirements and technical excellence."
    ],
  },
  {
    id: "evoplay",
    role: "Front-end Developer",
    company: "Evoplay / WINGAMETRAILL",
    period: "January 2025 - May 2025",
    description: [
      "Developed responsive and interactive web interfaces for gaming platforms using modern React ecosystems.",
      "Integrated complex APIs and managed state using Redux Toolkit for seamless user experiences.",
      "Ensured cross-browser compatibility and optimized assets for fast loading times.",
      "Participated in code reviews and maintained high standards for clean, documented code."
    ],
  },
];
