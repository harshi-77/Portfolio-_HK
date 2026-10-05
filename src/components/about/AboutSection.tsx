import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Artificial Intelligence",
    desc: "Building production-ready AI systems with a focus on reliability, interpretability, and real-world impact.",
    icon: "◈",
  },
  {
    title: "Data Science",
    desc: "Extracting actionable insights from complex datasets using statistical analysis and modern ML techniques.",
    icon: "◇",
  },
  {
    title: "Machine Learning",
    desc: "Designing and training models — from classical algorithms to state-of-the-art deep learning architectures.",
    icon: "⬡",
  },
  {
    title: "Deep Learning",
    desc: "Implementing CNNs, Transformers, and generative models for vision, NLP, and multimodal tasks.",
    icon: "◉",
  },
  {
    title: "Computer Vision",
    desc: "Medical imaging, object detection, video analysis, and real-time inference pipelines with OpenCV and PyTorch.",
    icon: "◎",
  },
  {
    title: "Software Development",
    desc: "Full-stack development with React, FastAPI, and Flask — shipping clean, maintainable code end-to-end.",
    icon: "◻",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-[var(--accent)]" />
              <span className="text-xs tracking-[0.3em] text-[var(--accent)] font-inter">
                ABOUT
              </span>
            </div>

            <h2 className="font-space text-4xl sm:text-5xl font-700 text-white mb-8 leading-tight">
              Turning data into
              <br />
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-purple)] bg-clip-text text-transparent">
                intelligent systems
              </span>
            </h2>

            <div className="space-y-5 text-[var(--text-muted)] font-inter leading-relaxed text-sm">
              <p>
                I'm a Computer Science student specializing in AI & Data Science, driven by the
                challenge of building systems that learn, adapt, and deliver measurable real-world
                value. My work spans the full pipeline — from exploratory data analysis and model
                architecture design to deployment and monitoring.
              </p>
              <p>
                My projects have tackled problems in healthcare (medical imaging analysis),
                agriculture (crop disease detection and yield prediction), information security
                (deepfake detection), and public administration (automated grievance routing). Each
                project sharpened my ability to understand domain requirements and translate them
                into technical solutions.
              </p>
              <p>
                I believe that great AI is not just technically sound — it's explainable, fair, and
                designed with the end user in mind. I pursue this in every project through rigorous
                evaluation, interpretability tools, and thoughtful product thinking.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Problem Solver", "ML Engineer", "Open Source Enthusiast", "Lifelong Learner"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs tracking-wider border border-[var(--border)] text-[var(--text-muted)] rounded-full font-inter"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          {/* Right: Capability cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 hover:bg-[var(--surface)]/80 transition-all duration-300 group"
              >
                <div className="text-2xl text-[var(--accent)] mb-3 group-hover:scale-110 transition-transform duration-200 inline-block">
                  {cap.icon}
                </div>
                <h3 className="font-space text-sm font-600 text-white mb-2">{cap.title}</h3>
                <p className="text-xs text-[var(--text-muted)] font-inter leading-relaxed">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
