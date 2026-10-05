import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, type FormEvent } from "react";
import portrait from "@/assets/harshith-editorial.jpg";
import medicalImage from "@/assets/project-medical.jpg";
import authenticityImage from "@/assets/project-authenticity.jpg";
import farmImage from "@/assets/project-farmlink.jpg";
import systemsImage from "@/assets/project-systems.jpg";
import {
  achievements,
  certifications,
  personalInfo,
  projects,
  skillCategories,
  timelineEntries,
} from "@/data/portfolio";
import type { Project } from "@/types/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harshith Kumar — AI & Data Science" },
      {
        name: "description",
        content:
          "Harshith Kumar builds intelligent systems across AI, data science, computer vision, and software.",
      },
      { property: "og:title", content: "Harshith Kumar — AI & Data Science" },
      {
        property: "og:description",
        content: "Selected AI, data science, and software work by Harshith Kumar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const nav = ["about", "skills", "projects", "journey", "certifications", "contact"];
const projectImages = [systemsImage, medicalImage, authenticityImage, farmImage, systemsImage];
const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ceraOpen, setCeraOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const { scrollYProgress } = useScroll();
  const portraitY = useTransform(scrollYProgress, [0, 0.25], [0, 90]);
  const titleX = useTransform(scrollYProgress, [0, 0.18], [0, -70]);

  return (
    <div className="site-shell">
      <header className="nav-shell">
        <a href="#top" className="brand" aria-label="Harshith Kumar home">
          <span>HK</span>
          <small>AI / DS</small>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <a key={item} href={`#${item}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="cera-link" onClick={() => setCeraOpen(true)}>
            <i /> CERA
          </button>
          <button
            className="menu-button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "×" : "≡"}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {nav.map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <main>
        <section id="top" className="hero">
          <div className="hero-kicker">
            <span>Portfolio / 2026</span>
            <span>Bengaluru, India</span>
          </div>
          <motion.div
            className="portrait-wrap"
            style={{ y: portraitY }}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
          >
            <img
              src={portrait}
              width={1200}
              height={1600}
              alt="Editorial portrait representing Harshith Kumar"
            />
            <div className="portrait-index">01</div>
          </motion.div>
          <motion.div className="hero-title" style={{ x: titleX }}>
            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.15 }}
            >
              HARSHITH
            </motion.h1>
            <motion.h1
              className="outline"
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.28 }}
            >
              KUMAR
            </motion.h1>
          </motion.div>
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <p className="eyebrow">AI & DATA SCIENCE</p>
            <p>{personalInfo.subtitle}</p>
            <div className="hero-links">
              <a href="#projects">
                Selected work <Arrow />
              </a>
              <a href={personalInfo.resumeUrl}>
                Résumé <Arrow />
              </a>
            </div>
          </motion.div>
          <div className="scroll-mark">
            <span>SCROLL</span>
            <i />
          </div>
        </section>

        <section id="about" className="section light-section">
          <SectionHead index="01" label="About" title="Intelligence, made useful." />
          <div className="about-grid">
            <motion.p {...reveal} className="statement">
              I build systems that turn complex data into clear, measurable outcomes.
            </motion.p>
            <motion.div {...reveal} className="about-copy">
              <p>{personalInfo.description}</p>
              <p>
                My work moves from exploration and model design through deployment, with
                explainability and the end user kept in view.
              </p>
              <div className="fact-row">
                <span>
                  <b>05</b>Selected projects
                </span>
                <span>
                  <b>04</b>Core disciplines
                </span>
                <span>
                  <b>10K+</b>Images processed
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="section dark-section">
          <SectionHead
            index="02"
            label="Capabilities"
            title="Tools are temporary. Thinking scales."
          />
          <div className="skills-list">
            {skillCategories.map((group, i) => (
              <motion.div key={group.category} {...reveal} className="skill-row">
                <span>0{i + 1}</span>
                <h3>{group.category}</h3>
                <p>{group.skills.map((s) => s.name).join(" · ")}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <SectionHead index="03" label="Selected work" title="Built for the real world." />
          <div className="project-list">
            {projects.map((project, i) => (
              <motion.article
                key={project.id}
                {...reveal}
                className={`project-row ${i % 2 ? "reverse" : ""}`}
              >
                <button
                  className="project-image"
                  onClick={() => setSelected(project)}
                  aria-label={`Open ${project.title}`}
                >
                  <img src={projectImages[i]} loading="lazy" width={1600} height={1008} alt="" />
                  <span>
                    View case study <Arrow />
                  </span>
                </button>
                <div className="project-copy">
                  <div className="project-meta">
                    <span>0{i + 1}</span>
                    <span>{project.tags.slice(0, 2).join(" / ")}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                  <div className="project-actions">
                    <button onClick={() => setSelected(project)}>
                      Explore project <Arrow />
                    </button>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      GitHub <Arrow />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="journey" className="section light-section">
          <SectionHead index="04" label="Journey" title="Learning in public." />
          <div className="timeline">
            {timelineEntries.map((entry, i) => (
              <motion.article key={entry.id} {...reveal}>
                <span className="timeline-no">0{i + 1}</span>
                <time>{entry.date}</time>
                <div>
                  <p className="eyebrow">{entry.type}</p>
                  <h3>{entry.title}</h3>
                  <h4>{entry.subtitle}</h4>
                  <p>{entry.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="certifications" className="section dark-section">
          <SectionHead index="05" label="Credentials" title="Proof of practice." />
          <div className="cert-grid">
            {certifications.map((cert, i) => (
              <motion.article key={cert.id} {...reveal}>
                <span>0{i + 1}</span>
                <p className="eyebrow">{cert.date}</p>
                <h3>{cert.title}</h3>
                <p>{cert.organization}</p>
                <small>{cert.skills.join(" · ")}</small>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="achievements" className="section signal-section">
          <SectionHead index="06" label="Recognition" title="Impact, quantified." />
          <div className="achievement-strip">
            {achievements.map((item) => (
              <article key={item.id}>
                <p>
                  {item.category} / {item.date}
                </p>
                <h3>{item.title}</h3>
                <strong>{item.impact}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="github" className="github-section">
          <p className="eyebrow">OPEN SOURCE / GITHUB</p>
          <h2>
            Code should be
            <br />
            seen in motion.
          </h2>
          <a href={personalInfo.github} target="_blank" rel="noreferrer">
            Explore repositories <Arrow />
          </a>
          <GithubStats />
        </section>

        <section id="contact" className="section contact-section">
          <SectionHead index="07" label="Contact" title="Start a conversation." />
          <ContactForm />
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Harshith Kumar</span>
        <span>AI / DATA / SOFTWARE</span>
        <a href="#top">Back to top ↑</a>
      </footer>
      <button className="cera-orb" onClick={() => setCeraOpen(true)} aria-label="Open CERA">
        <span>C</span>
        <i />
      </button>
      <Cera open={ceraOpen} onClose={() => setCeraOpen(false)} />
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

function SectionHead({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <motion.header {...reveal} className="section-head">
      <div>
        <span>{index}</span>
        <p className="eyebrow">{label}</p>
      </div>
      <h2>{title}</h2>
    </motion.header>
  );
}

function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${values.name}`)}&body=${encodeURIComponent(`${values.message}\n\nReply to: ${values.email}`)}`;
  };
  return (
    <div className="contact-grid">
      <div>
        <p>Available for internships, research collaborations, and ambitious AI projects.</p>
        <a href={`mailto:${personalInfo.email}`}>
          {personalInfo.email} <Arrow />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
          LinkedIn <Arrow />
        </a>
        <a href={personalInfo.github} target="_blank" rel="noreferrer">
          GitHub <Arrow />
        </a>
      </div>
      <form onSubmit={submit}>
        <label>
          Name
          <input
            required
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </label>
        <label>
          Email
          <input
            required
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </label>
        <label>
          Message
          <textarea
            required
            rows={4}
            value={values.message}
            onChange={(e) => setValues({ ...values, message: e.target.value })}
          />
        </label>
        <button type="submit">
          Compose message <Arrow />
        </button>
      </form>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const fn = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", fn);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", fn);
    };
  }, [project, onClose]);
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => e.currentTarget === e.target && onClose()}
        >
          <motion.article
            className="project-modal"
            initial={{ y: 60 }}
            animate={{ y: 0 }}
            exit={{ y: 60 }}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close">
              ×
            </button>
            <p className="eyebrow">CASE STUDY / {project.tags.join(" / ")}</p>
            <h2>{project.title}</h2>
            <p className="modal-lead">{project.description}</p>
            <div className="modal-columns">
              <div>
                <h3>Problem</h3>
                <p>{project.problem}</p>
              </div>
              <div>
                <h3>Solution</h3>
                <p>{project.solution}</p>
              </div>
            </div>
            <div className="modal-block">
              <h3>My role</h3>
              <p>{project.role}</p>
            </div>
            <div className="modal-columns">
              <div>
                <h3>Key features</h3>
                {project.keyFeatures.map((x) => (
                  <p key={x}>— {x}</p>
                ))}
              </div>
              <div>
                <h3>Results</h3>
                {project.results.map((x) => (
                  <p key={x}>✓ {x}</p>
                ))}
              </div>
            </div>
            <p className="tech-line">{project.techStack.join(" · ")}</p>
            <a className="modal-link" href={project.githubUrl} target="_blank" rel="noreferrer">
              View on GitHub <Arrow />
            </a>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const ceraReplies = [
  {
    keys: ["medical", "imaging"],
    answer:
      "Harshith built an end-to-end AI medical imaging application detecting anomalies in X-rays and MRIs, using PyTorch and TensorFlow.",
  },
  {
    keys: ["project", "built"],
    answer:
      "Harshith has built intelligent mobility platforms (DISHA), AI medical imaging dashboards, smart email triage tools, cattle breed recognition systems, and stock market predictors.",
  },
  {
    keys: ["skill", "technolog"],
    answer:
      "His toolkit includes Python, PyTorch, TensorFlow, React, FastAPI, computer vision, NLP, PostgreSQL, and modern deployment tools.",
  },
  {
    keys: ["certif"],
    answer:
      "His credentials span Deep Learning, Machine Learning, NLP, and AWS Cloud fundamentals.",
  },
  {
    keys: ["contact", "reach"],
    answer: `You can contact Harshith at ${personalInfo.email}, or use the contact section below.`,
  },
  {
    keys: ["who", "harshith"],
    answer:
      "Harshith Kumar is an AI & Data Science student focused on useful, explainable intelligent systems.",
  },
];
function Cera({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "I’m CERA — your guide to Harshith Kumar. Ask about his work, skills, credentials, or contact details.",
    },
  ]);
  const suggestions = [
    "Who is Harshith?",
    "Show me his projects.",
    "Tell me about medical imaging.",
    "How can I contact him?",
  ];
  const send = (text = input) => {
    const value = text.trim();
    if (!value) return;
    const lower = value.toLowerCase();
    const found = ceraReplies.find((r) => r.keys.some((k) => lower.includes(k)));
    setMessages((m) => [
      ...m,
      { role: "user", text: value },
      {
        role: "assistant",
        text:
          found?.answer ??
          "I can guide you through Harshith’s projects, skills, certifications, and contact information.",
      },
    ]);
    setInput("");
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          className="cera-panel"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
        >
          <header>
            <div>
              <p>CERA</p>
              <small>Your AI guide to Harshith Kumar</small>
            </div>
            <button onClick={onClose} aria-label="Close CERA">
              ×
            </button>
          </header>
          <div className="cera-messages">
            {messages.map((m, i) => (
              <div key={i} className={m.role}>
                {m.text}
              </div>
            ))}
            {messages.length === 1 && (
              <div className="suggestions">
                {suggestions.map((s) => (
                  <button key={s} onClick={() => send(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Harshith…"
              aria-label="Ask CERA"
            />
            <button type="submit">→</button>
          </form>
          <p className="cera-note">Portfolio guide · API-ready</p>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
function GithubStats() {
  const [stats, setStats] = useState({ repos: 0, stars: 0, followers: 0 });
  useEffect(() => {
    fetch("https://api.github.com/users/harshi-77")
      .then((r) => r.json())
      .then((d) => {
        if (d && d.public_repos !== undefined) {
          setStats((s) => ({ ...s, repos: d.public_repos, followers: d.followers }));
        }
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div style={{ marginTop: "2rem", display: "flex", gap: "2rem", justifyContent: "center" }}>
      <div>
        <h3 style={{ fontSize: "2rem" }}>{stats.repos}</h3>
        <p className="eyebrow">Repositories</p>
      </div>
      <div>
        <h3 style={{ fontSize: "2rem" }}>{stats.followers}</h3>
        <p className="eyebrow">Followers</p>
      </div>
    </div>
  );
}
