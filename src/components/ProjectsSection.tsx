import { Github, ExternalLink } from "lucide-react";
import SectionBlock from "./SectionBlock";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const projects = [
  {
  title: "AI Site Builder",
  isNew: true,
  description:
    "An AI-powered website builder that generates fully responsive and modern websites from simple user prompts. It streamlines the development process by automatically creating layouts, components, and styling—making web creation faster and more accessible.",
  tags: [
    "OpenAI",
    "React",
    "TypeScript",
    "Tailwind",
    "PostgreSQL",
    "Express",
  ],
  githubUrl: "https://github.com/hardik211005/AI-Website-Builder",
  liveUrl: "https://ai-website-builder-woad.vercel.app/",
},
  {
  title: "Medico - Doctor Appointment System",
  description:
    "A full-stack healthcare platform that streamlines doctor appointment booking with features like real-time availability tracking, secure patient data management, and seamless communication—delivering a smooth and reliable user experience.",
  tags: [
    "MongoDB",
    "Express",
    "React",
    "Node.js",
    "JWT",
    "Tailwind",
  ],
  githubUrl: "https://github.com/hardik211005/Medico",
  liveUrl: "https://medico-frontend-beta.vercel.app/",
},
  {
  title: "CodeQuest – Gamified Learning Platform",
  description:
    "A full-stack gamified coding platform that makes learning interactive through challenges, XP rewards, leaderboards, and an in-built code compiler. Designed to boost consistency and engagement by turning programming practice into a game-like experience.",
  tags: [
    "Next.js",
    "Node.js",
    "Express",
    "Prisma",
    "NextAuth",
    "Tailwind",
  ],
  githubUrl: "https://github.com/hardik211005/codequest-ai",
  liveUrl: "https://codequest-two.vercel.app/",
},
  {
  title: "Project Management Platform",
  description:
    "A full-stack project management platform built to streamline team collaboration and productivity. It enables users to create projects, assign tasks, manage deadlines, track progress in real time, and collaborate efficiently with role-based access control.",
  tags: [
    "React.js",
    "Clerkauth",
    "Express",
    "Prisma",
    "Tailwind",
  ],
  githubUrl: "https://github.com/hardik211005/PROJECT-MANAGEMENT",
  liveUrl: "https://project-management-gs.vercel.app/",
},
  {
  title: "Trimmr – URL Shortener & Analytics Platform",
  description:
    "A full-stack URL shortening platform with built-in analytics and tracking. It allows users to create custom short links, monitor real-time click activity, analyze geographic data, generate QR codes, and manage URLs efficiently for marketing and business use cases.",
  tags: [
    "React",
    "REST APIs",
    "Analytics",
    "Charts.js",
    "Tailwind",
  ],
  githubUrl: "https://github.com/hardik211005/url-shortener",
  liveUrl: "https://urlshortener-topaz.vercel.app/",
},
];

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group relative border-2 border-black p-5 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 bg-white"
        >
          {"isNew" in project && project.isNew && (
            <div className="absolute -top-3 -right-3 bg-black text-white px-2 py-1 text-[10px] font-black uppercase tracking-tighter border-2 border-black z-10 rotate-12">
              LATEST WORK
            </div>
          )}
          <div>
            <h3 className="text-xl font-black text-foreground group-hover:underline decoration-4 underline-offset-4">
              {project.title}
            </h3>
            <p className="body-text mt-4 text-sm font-normal">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-mono text-[10px] font-bold border border-black/10 px-1.5 py-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-black/10">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
            >
              <Github className="w-3.5 h-3.5" />
              Source
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ProjectsSection;
