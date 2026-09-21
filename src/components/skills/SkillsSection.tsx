import { motion } from 'framer-motion';
import { skillCategories } from '../../data/portfolio';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6 bg-[var(--surface)]/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-[var(--accent)]" />
            <span className="text-xs tracking-[0.3em] text-[var(--accent)] font-inter">SKILLS</span>
          </div>
          <h2 className="font-space text-4xl sm:text-5xl font-700 text-white leading-tight">
            Tools of the trade
          </h2>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.08 }}
            >
              <h3 className="text-xs tracking-[0.25em] text-[var(--text-muted)] font-inter mb-4">
                {cat.category.toUpperCase()}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: si * 0.04 }}
                    whileHover={{ scale: 1.04 }}
                    className="px-4 py-2 text-sm font-inter text-[var(--text)] border border-[var(--border)] rounded-lg bg-[var(--surface)] hover:border-[var(--accent)]/40 hover:text-white hover:bg-[var(--accent)]/5 transition-all duration-200 cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
