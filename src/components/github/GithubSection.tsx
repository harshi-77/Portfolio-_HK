import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolio";

// Placeholder stats — wire to GitHub API by replacing these with API calls
const placeholderStats = {
  username: "harshithkumar",
  followers: 48,
  following: 32,
  publicRepos: 24,
  totalStars: 87,
  totalForks: 19,
};

const placeholderLanguages = [
  { name: "Python", percentage: 62, color: "#3776ab" },
  { name: "JavaScript", percentage: 18, color: "#f7df1e" },
  { name: "TypeScript", percentage: 10, color: "#3178c6" },
  { name: "HTML/CSS", percentage: 6, color: "#e34f26" },
  { name: "Other", percentage: 4, color: "#6b7280" },
];

const placeholderRepos = [
  {
    name: "ai-medical-imaging",
    description: "Deep learning system for medical image analysis",
    stars: 23,
    language: "Python",
  },
  {
    name: "farmlink",
    description: "Agricultural AI platform for smallholder farmers",
    stars: 18,
    language: "Python",
  },
  {
    name: "multimodal-authenticity",
    description: "AI content authenticity detection system",
    stars: 15,
    language: "Python",
  },
  {
    name: "smart-email-triage",
    description: "NLP-powered email prioritization system",
    stars: 12,
    language: "Python",
  },
];

export default function GithubSection() {
  return (
    <section id="github" className="py-28 px-6">
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
            <span className="text-xs tracking-[0.3em] text-[var(--accent)] font-inter">GITHUB</span>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="font-space text-4xl sm:text-5xl font-700 text-white leading-tight">
              Open source work
            </h2>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs border border-[var(--border)] text-[var(--text-muted)] px-4 py-2 rounded-lg hover:border-white/30 hover:text-white transition-colors font-inter tracking-wider"
            >
              @{placeholderStats.username} →
            </a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
        >
          {[
            { label: "Repositories", value: placeholderStats.publicRepos },
            { label: "Total Stars", value: placeholderStats.totalStars },
            { label: "Followers", value: placeholderStats.followers },
            { label: "Total Forks", value: placeholderStats.totalForks },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-center"
            >
              <p className="font-space text-3xl font-700 text-white">{stat.value}</p>
              <p className="text-xs text-[var(--text-muted)] font-inter mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Top repos */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs tracking-[0.2em] text-[var(--text-muted)] font-inter mb-4">
              FEATURED REPOSITORIES
            </h3>
            {placeholderRepos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={`${personalInfo.github}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center justify-between p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-white/15 transition-colors group"
              >
                <div>
                  <p className="text-sm font-500 text-white group-hover:text-[var(--accent)] transition-colors font-inter">
                    {repo.name}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] font-inter mt-0.5">
                    {repo.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                  <span className="text-xs text-[var(--text-muted)] font-inter">
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-amber-400 font-inter">
                    ★ {repo.stars}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]"
          >
            <h3 className="text-xs tracking-[0.2em] text-[var(--text-muted)] font-inter mb-6">
              LANGUAGES
            </h3>

            {/* Bar chart */}
            <div className="flex h-3 rounded-full overflow-hidden mb-6">
              {placeholderLanguages.map((lang) => (
                <div
                  key={lang.name}
                  style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                  className="flex-shrink-0"
                />
              ))}
            </div>

            <div className="space-y-3">
              {placeholderLanguages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-xs text-[var(--text)] font-inter">{lang.name}</span>
                  </div>
                  <span className="text-xs text-[var(--text-muted)] font-inter">
                    {lang.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
