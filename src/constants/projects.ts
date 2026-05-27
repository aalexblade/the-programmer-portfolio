export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "velvet-secrets",
    title: "Velvet Secrets",
    description: "A high-performance SaaS e-commerce platform built for scale. Features a robust product management system, integrated payment gateways, and a seamless checkout experience focused on conversion optimization.",
    tags: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    githubUrl: "https://github.com/your-username/velvet-secrets",
    liveUrl: "https://velvet-secrets-demo.com",
  },
  {
    id: "chef-claude",
    title: "Chef Claude",
    description: "An AI-powered recipe generator that helps users find the perfect meal based on available ingredients. Utilizes advanced prompt engineering and LLM integration to provide personalized culinary suggestions.",
    tags: ["React", "AI Integration", "Tailwind v4", "Next.js"],
    githubUrl: "https://github.com/your-username/chef-claude",
    liveUrl: "https://chef-claude-ai.vercel.app",
  },
  {
    id: "webstudio",
    title: "WebStudio",
    description: "A modern, fully responsive landing page for a creative agency. Focused on clean code, digital accessibility, and optimized performance using the latest frontend methodologies.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/your-username/webstudio",
  },
];
