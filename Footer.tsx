import { ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Services: ['Heuristic Evaluation', 'Style Guides', 'High-Fidelity Mockups', 'Responsive Design'],
  Company: ['About', 'Process', 'Case Studies', 'Contact'],
  Connect: ['Twitter', 'LinkedIn', 'Dribbble', 'Instagram'],
};

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="group flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500 text-ink-950 font-display font-bold text-lg transition-transform group-hover:rotate-12">
                R
              </span>
              <span className="font-display text-xl font-semibold tracking-tight text-ink-50">
                Refined
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-400">
              A design studio specializing in usability-led interface redesigns. We make products people love to use.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-500">
                {title}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-1 text-sm text-ink-300 transition-colors hover:text-ink-50"
                    >
                      {link}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-8 sm:flex-row">
          <p className="text-sm text-ink-500">
            © 2026 Refined Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-ink-500">
            <a href="#" className="transition-colors hover:text-ink-200">Privacy</a>
            <a href="#" className="transition-colors hover:text-ink-200">Terms</a>
            <a href="#" className="transition-colors hover:text-ink-200">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
