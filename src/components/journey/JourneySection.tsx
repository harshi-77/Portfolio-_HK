import { motion } from "framer-motion";
import { timelineEntries } from "../../data/portfolio";
import type { TimelineEntry } from "../../types/portfolio";

const typeConfig: Record<TimelineEntry["type"], { color: string; bg: string; label: string }> = {
  education: {
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
    label: "Education",
  },
  learning: { color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/30", label: "Learning" },
  project: {
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/30",
    label: "Project",
  },
  hackathon: {
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
    label: "Hackathon",
  },
  achievement: {
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/30",
    label: "Achievement",
  },
};

export default function JourneySection() {
  return (
    <section id="journey" className="py-28 px-6 bg-[var(--surface)]/20">
      <div className="max-w-4xl mx-auto">
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
              JOURNEY
            </span>
          </div>
          <h2 className="font-space text-4xl sm:text-5xl font-700 text-white leading-tight">
            The path so far
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)]/40 via-[var(--border)] to-transparent" />

          <div className="space-y-8">
            {timelineEntries.map((entry, i) => {
              const config = typeConfig[entry.type];
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative pl-16"
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-4 top-5 w-4 h-4 rounded-full border-2 -translate-x-1/2 ${
                      i === 0
                        ? "border-[var(--accent)] bg-[var(--accent)]/20"
                        : "border-[var(--border)] bg-[var(--surface)]"
                    }`}
                  />

                  <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-white/15 transition-colors duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded border font-inter tracking-wider ${config.bg} ${config.color}`}
                      >
                        {config.label}
                      </span>
                      <span className="text-[10px] text-[var(--text-muted)] font-inter tracking-wider">
                        {entry.date}
                      </span>
                    </div>
                    <h3 className="font-space text-base font-600 text-white mb-1">{entry.title}</h3>
                    <p className="text-xs text-[var(--accent)]/80 font-inter mb-3">
                      {entry.subtitle}
                    </p>
                    <p className="text-sm text-[var(--text-muted)] font-inter leading-relaxed">
                      {entry.description}
                    </p>
                    {entry.tags && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {entry.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--text-muted)] font-inter"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
