export interface Skill {
  id: string;
  name: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: "cat-core",
    title: "Core Tech",
    skills: [
      { id: "skill-react", name: "React 19" },
      { id: "skill-ts", name: "TypeScript" },
      { id: "skill-next", name: "Next.js 15" },
      { id: "skill-redux", name: "Redux Toolkit" },
      { id: "skill-node", name: "Node.js" },
    ],
  },
  {
    id: "cat-styling",
    title: "Styling & UI",
    skills: [
      { id: "skill-tailwind", name: "Tailwind CSS v4" },
      { id: "skill-scss", name: "SCSS" },
      { id: "skill-html", name: "HTML5" },
      { id: "skill-css", name: "CSS3" },
      { id: "skill-framer", name: "Framer Motion" },
    ],
  },
  {
    id: "cat-workflow",
    title: "Workflow & Tools",
    skills: [
      { id: "skill-git", name: "Git" },
      { id: "skill-github-actions", name: "GitHub Actions" },
      { id: "skill-docker", name: "Docker" },
      { id: "skill-vite", name: "Vite" },
      { id: "skill-eslint", name: "ESLint" },
    ],
  },
  {
    id: "cat-ai",
    title: "AI & Engineering",
    skills: [
      { id: "skill-coderabbit", name: "CodeRabbit AI" },
      { id: "skill-cli-agents", name: "CLI Agents" },
      { id: "skill-prompt", name: "Prompt Engineering" },
      { id: "skill-vercel-sdk", name: "Vercel SDK" },
    ],
  },
];
