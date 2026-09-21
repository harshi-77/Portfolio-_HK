import { personalInfo } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-space text-sm font-600 tracking-widest text-white">HARSHITH KUMAR</p>
          <p className="text-xs text-[var(--text-muted)] mt-1 tracking-wider">AI & DATA SCIENCE</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--text-muted)] hover:text-white transition-colors tracking-wider"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--text-muted)] hover:text-white transition-colors tracking-wider"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-xs text-[var(--text-muted)] hover:text-white transition-colors tracking-wider"
          >
            Email
          </a>
        </div>

        <p className="text-xs text-[var(--text-muted)]">© 2024 Harshith Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}
