import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project, ArchitectureNode } from "../../types/portfolio";

interface Props {
  project: Project | null;
  onClose: () => void;
}

const nodeColors: Record<ArchitectureNode["type"], string> = {
  input: "border-green-500/40 text-green-400 bg-green-500/10",
  process: "border-blue-500/40 text-blue-400 bg-blue-500/10",
  output: "border-purple-500/40 text-purple-400 bg-purple-500/10",
  storage: "border-amber-500/40 text-amber-400 bg-amber-500/10",
};

function ArchitectureDiagram({ nodes }: { nodes: ArchitectureNode[] }) {
  return (
    <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--bg)] overflow-x-auto">
      <div className="flex flex-wrap gap-3 items-center min-w-max">
        {nodes.map((node, i) => (
          <div key={node.id} className="flex items-center gap-3">
            <div
              className={`px-3 py-2 rounded-lg border text-xs font-inter font-500 whitespace-nowrap ${nodeColors[node.type]}`}
            >
              {node.label}
            </div>
            {i < nodes.length - 1 && node.connections.length > 0 && (
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                <path
                  d="M0 6h16M12 1l6 5-6 5"
                  stroke="#6b7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-4 flex-wrap">
        {(["input", "process", "output", "storage"] as const).map((type) => (
          <span
            key={type}
            className={`text-[10px] px-2 py-0.5 rounded border font-inter ${nodeColors[type]}`}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectDetailModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl"
          >
            {/* Header */}
            <div className={`relative p-8 pb-6 bg-gradient-to-br ${project.gradient}`}>
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-white/30 transition-colors"
              >
                ✕
              </button>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-wider px-2 py-0.5 rounded border border-white/20 text-white/60 font-inter"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="font-space text-2xl sm:text-3xl font-700 text-white">
                {project.title}
              </h2>
              <p className="text-sm text-white/60 mt-2 font-inter leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Body */}
            <div className="p-8 space-y-8">
              {/* Overview */}
              <Section title="Overview">
                <p className="text-sm text-[var(--text-muted)] font-inter leading-relaxed">
                  {project.description}
                </p>
              </Section>

              {/* Problem / Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Section title="Problem">
                  <p className="text-sm text-[var(--text-muted)] font-inter leading-relaxed">
                    {project.problem}
                  </p>
                </Section>
                <Section title="Solution">
                  <p className="text-sm text-[var(--text-muted)] font-inter leading-relaxed">
                    {project.solution}
                  </p>
                </Section>
              </div>

              {/* My Role */}
              <Section title="My Role">
                <p className="text-sm text-[var(--text-muted)] font-inter leading-relaxed">
                  {project.role}
                </p>
              </Section>

              {/* Key Features */}
              <Section title="Key Features">
                <ul className="space-y-2">
                  {project.keyFeatures.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-[var(--text-muted)] font-inter"
                    >
                      <span className="text-[var(--accent)] mt-0.5 flex-shrink-0">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Tech Stack */}
              <Section title="Tech Stack">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-lg border border-[var(--border)] text-[var(--text-muted)] font-inter bg-[var(--bg)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Section>

              {/* Architecture */}
              <Section title="Architecture Diagram">
                <ArchitectureDiagram nodes={project.architecture} />
              </Section>

              {/* Results */}
              <Section title="Results">
                <ul className="space-y-2">
                  {project.results.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm font-inter">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-[var(--text-muted)]">{r}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Future */}
              <Section title="Future Improvements">
                <ul className="space-y-2">
                  {project.futureImprovements.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-[var(--text-muted)] font-inter"
                    >
                      <span className="text-[var(--accent-purple)] mt-0.5 flex-shrink-0">→</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Links */}
              <div className="flex gap-3 pt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-sm border border-[var(--border)] text-[var(--text)] rounded-lg hover:border-white/30 hover:bg-white/5 transition-colors font-inter"
                >
                  View on GitHub
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-sm bg-[var(--accent)] text-white rounded-lg hover:bg-blue-500 transition-colors font-inter"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs tracking-[0.2em] text-[var(--text-muted)] font-inter mb-3 uppercase">
        {title}
      </h3>
      {children}
    </div>
  );
}
