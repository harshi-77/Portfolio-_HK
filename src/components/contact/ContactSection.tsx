import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolio";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    // Simulate async send — wire to a real backend/service here
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
    setValues({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 px-6 bg-[var(--surface)]/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-6 h-px bg-[var(--accent)]" />
            <span className="text-xs tracking-[0.3em] text-[var(--accent)] font-inter">
              CONTACT
            </span>
            <span className="w-6 h-px bg-[var(--accent)]" />
          </div>
          <h2 className="font-space text-4xl sm:text-5xl font-700 text-white leading-tight mb-4">
            Let's build something great
          </h2>
          <p className="text-sm text-[var(--text-muted)] font-inter max-w-md mx-auto leading-relaxed">
            Open to internships, research collaborations, and interesting AI/ML projects. Drop a
            message below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <ContactLink
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              }
              label="Email"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
            />
            <ContactLink
              icon={
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              }
              label="GitHub"
              value="github.com/harshithkumar"
              href={personalInfo.github}
            />
            <ContactLink
              icon={
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              }
              label="LinkedIn"
              value="linkedin.com/in/harshithkumar"
              href={personalInfo.linkedin}
            />

            <div className="mt-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
              <p className="text-xs text-[var(--text-muted)] font-inter leading-relaxed">
                Best for <span className="text-white">internship inquiries</span>,{" "}
                <span className="text-white">research collaborations</span>, or just a conversation
                about AI/ML. I typically respond within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {formState === "success" ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 p-10 rounded-xl border border-green-500/30 bg-green-500/5">
                <span className="text-4xl">✓</span>
                <h3 className="font-space text-xl font-600 text-white">Message sent!</h3>
                <p className="text-sm text-[var(--text-muted)] font-inter text-center">
                  Thanks for reaching out. I'll get back to you shortly.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-2 text-xs text-[var(--accent)] hover:underline font-inter"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    label="Name"
                    type="text"
                    value={values.name}
                    onChange={(v) => setValues((p) => ({ ...p, name: v }))}
                    required
                  />
                  <FormField
                    label="Email"
                    type="email"
                    value={values.email}
                    onChange={(v) => setValues((p) => ({ ...p, email: v }))}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs tracking-wider text-[var(--text-muted)] font-inter">
                    Message
                  </label>
                  <textarea
                    value={values.message}
                    onChange={(e) => setValues((p) => ({ ...p, message: e.target.value }))}
                    required
                    rows={5}
                    placeholder="What would you like to discuss?"
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--text)] placeholder-[var(--text-muted)]/50 font-inter focus:outline-none focus:border-[var(--accent)]/60 transition-colors resize-none"
                  />
                </div>

                {formState === "error" && (
                  <p className="text-xs text-red-400 font-inter">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="px-6 py-3 bg-[var(--accent)] text-white text-sm font-500 tracking-wider font-inter rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formState === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "SEND MESSAGE"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  type,
  value,
  onChange,
  required,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs tracking-wider text-[var(--text-muted)] font-inter">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={label}
        className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--text)] placeholder-[var(--text-muted)]/50 font-inter focus:outline-none focus:border-[var(--accent)]/60 transition-colors"
      />
    </div>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/5 transition-all group"
    >
      <span className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
        {icon}
      </span>
      <div>
        <p className="text-[10px] tracking-wider text-[var(--text-muted)] font-inter">
          {label.toUpperCase()}
        </p>
        <p className="text-xs text-[var(--text)] font-inter mt-0.5 group-hover:text-white transition-colors">
          {value}
        </p>
      </div>
    </a>
  );
}
