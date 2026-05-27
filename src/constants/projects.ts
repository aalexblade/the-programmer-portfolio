export interface ProjectTag {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: ProjectTag[];
  githubUrl: string;
  liveUrl?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "velvet-secrets",
    title: "Velvet Secrets",
    description: "A high-performance SaaS e-commerce platform built for scale. Features a robust product management system, integrated payment gateways, and a seamless checkout experience focused on conversion optimization.",
    tags: [
      { id: "tag-react", name: "React" },
      { id: "tag-ts", name: "TypeScript" },
      { id: "tag-redux", name: "Redux Toolkit" },
      { id: "tag-tailwind", name: "Tailwind CSS" },
    ],
    githubUrl: "https://github.com/your-username/velvet-secrets",
    liveUrl: "https://velvet-secrets-demo.com",
  },
  {
    id: "chef-claude",
    title: "Chef Claude",
    description: "An AI-powered recipe generator that helps users find the perfect meal based on available ingredients. Utilizes advanced prompt engineering and LLM integration to provide personalized culinary suggestions.",
    tags: [
      { id: "tag-react-ai", name: "React" },
      { id: "tag-ai", name: "AI Integration" },
      { id: "tag-tailwind-v4", name: "Tailwind v4" },
      { id: "tag-nextjs", name: "Next.js" },
    ],
    githubUrl: "https://github.com/your-username/chef-claude",
    liveUrl: "https://chef-claude-ai.vercel.app",
  },
  {
    id: "webstudio",
    title: "WebStudio",
    description: "A modern, fully responsive landing page for a creative agency. Focused on clean code, digital accessibility, and optimized performance using the latest frontend methodologies.",
    tags: [
      { id: "tag-html5", name: "HTML5" },
      { id: "tag-css3", name: "CSS3" },
      { id: "tag-js", name: "JavaScript" },
      { id: "tag-responsive", name: "Responsive Design" },
    ],
    githubUrl: "https://github.com/your-username/webstudio",
  },
];
