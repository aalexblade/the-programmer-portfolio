export interface ExperiencePoint {
  id: string;
  text: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: ExperiencePoint[];
}

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "velvet-secrets",
    role: "Front-end Developer",
    company: "Team Challenge / VELVETSECRETS",
    period: "May 2025 - Present",
    description: [
      { id: "vs-1", text: "Leading the frontend development of high-performance SaaS e-commerce platforms using React and TypeScript." },
      { id: "vs-2", text: "Optimizing web performance and digital accessibility to enhance user conversion rates." },
      { id: "vs-3", text: "Implementing scalable frontend architectures using Section-based and Atomic design methodologies." },
      { id: "vs-4", text: "Collaborating with cross-functional teams to bridge business requirements and technical excellence." }
    ],
  },
  {
    id: "evoplay",
    role: "Front-end Developer",
    company: "Evoplay / WINGAMETRAILL",
    period: "January 2025 - May 2025",
    description: [
      { id: "evo-1", text: "Developed responsive and interactive web interfaces for gaming platforms using modern React ecosystems." },
      { id: "evo-2", text: "Integrated complex APIs and managed state using Redux Toolkit for seamless user experiences." },
      { id: "evo-3", text: "Ensured cross-browser compatibility and optimized assets for fast loading times." },
      { id: "evo-4", text: "Participated in code reviews and maintained high standards for clean, documented code." }
    ],
  },
];
