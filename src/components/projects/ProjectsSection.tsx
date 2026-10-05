import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/portfolio";
import type { Project } from "../../types/portfolio";
import ProjectDetailModal from "./ProjectDetailModal";

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden hover:border-white/15 transition-all duration-400 flex flex-col"
    >
      {/* Visual area */}
      <div
        className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 bg-[var(--bg)]/40" />
        <div className="relative z-10 text-center px-6">
          <p className="font-space text-xl font-600 text-white/80 group-hover:text-white transition-colors duration-300">
            {project.title.split(" ").slice(0, 2).join(" ")}
          </p>
          <div className="flex flex-wrap gap-1.5 justify-center mt-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded border border-white/20 text-white/50 font-inter"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* Corner accent */}
        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white/20 group-hover:bg-[var(--accent)] transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div>
          <h3 className="font-space text-base font-600 text-white mb-2 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-[var(--text-muted)] font-inter leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>
        </div>

        {/* Tech stack preview */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--text-muted)] font-inter"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--text-muted)] font-inter">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto pt-2">
          <button
            onClick={onOpen}
            className="flex-1 py-2 text-xs border border-[var(--accent)]/40 text-[var(--accent)] rounded-lg hover:bg-[var(--accent)]/10 transition-colors font-inter tracking-wider"
          >
            VIEW PROJECT
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 py-2 text-xs border border-[var(--border)] text-[var(--text-muted)] rounded-lg hover:border-white/30 hover:text-white transition-colors font-inter tracking-wider text-center"
          >
            GITHUB
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-[var(--accent)]" />
            <span className="text-xs tracking-[0.3em] text-[var(--accent)] font-inter">
              PROJECTS
            </span>
          </div>
          <h2 className="font-space text-4xl sm:text-5xl font-700 text-white leading-tight">
            Built with purpose
          </h2>
          <p className="text-sm text-[var(--text-muted)] font-inter mt-4 max-w-lg leading-relaxed">
            Each project addresses a real problem, backed by rigorous ML engineering and thoughtful
            product design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
