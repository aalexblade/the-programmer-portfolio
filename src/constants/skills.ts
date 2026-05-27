export interface SkillCategory {
  title: string;
  skills: string[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Core Tech",
    skills: ["React 19", "TypeScript", "Next.js 15", "Redux Toolkit", "Node.js"],
  },
  {
    title: "Styling & UI",
    skills: ["Tailwind CSS v4", "SCSS", "HTML5", "CSS3", "Framer Motion"],
  },
  {
    title: "Workflow & Tools",
    skills: ["Git", "GitHub Actions", "Docker", "Vite", "ESLint"],
  },
  {
    title: "AI & Engineering",
    skills: ["CodeRabbit AI", "CLI Agents", "Prompt Engineering", "Vercel SDK"],
  },
];
