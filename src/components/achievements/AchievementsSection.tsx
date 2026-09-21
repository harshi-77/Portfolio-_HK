import { motion } from 'framer-motion';
import { achievements } from '../../data/portfolio';

const categoryIcons: Record<string, string> = {
  Competition: '🥇',
  Academic: '🎓',
  'Project Impact': '🚀',
  Community: '🌐',
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-28 px-6 bg-[var(--surface)]/20">
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
            <span className="text-xs tracking-[0.3em] text-[var(--accent)] font-inter">ACHIEVEMENTS</span>
          </div>
          <h2 className="font-space text-4xl sm:text-5xl font-700 text-white leading-tight">
            Milestones & impact
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-white/15 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-2xl flex-shrink-0">
                  {categoryIcons[ach.category] ?? '⭐'}
                </span>
                <div>
                  <span className="text-[10px] tracking-wider text-[var(--text-muted)] font-inter">{ach.category.toUpperCase()}</span>
                  <h3 className="font-space text-sm font-600 text-white mt-0.5">{ach.title}</h3>
                </div>
              </div>

              <p className="text-xs text-[var(--text-muted)] font-inter leading-relaxed mb-4">
                {ach.description}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
                <span className="text-[10px] text-[var(--text-muted)] font-inter">{ach.date}</span>
                {ach.impact && (
                  <span className="text-[10px] text-green-400 font-inter font-500">{ach.impact}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
