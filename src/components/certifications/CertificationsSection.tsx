import { motion } from "framer-motion";
import { certifications } from "../../data/portfolio";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-28 px-6">
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
              CERTIFICATIONS
            </span>
          </div>
          <h2 className="font-space text-4xl sm:text-5xl font-700 text-white leading-tight">
            Credentials & learning
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 transition-all duration-300 flex flex-col gap-4"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-space text-sm font-600 text-white mb-1">{cert.title}</h3>
                  <p className="text-xs text-[var(--accent)]/80 font-inter">{cert.organization}</p>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center text-lg">
                  🏆
                </div>
              </div>

              <p className="text-xs text-[var(--text-muted)] font-inter leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--text-muted)] font-inter"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]">
                <span className="text-[10px] text-[var(--text-muted)] font-inter">{cert.date}</span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-[var(--accent)] font-inter hover:underline tracking-wider"
                  >
                    View Credential →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
