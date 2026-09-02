import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const projects = [
  {
    title: 'Northwind Analytics',
    category: 'SaaS Dashboard Redesign',
    image: 'https://images.pexels.com/photos/27141307/pexels-photo-27141307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metric: '+52%',
    metricLabel: 'Daily active users',
    description: 'A cluttered analytics platform rebuilt around progressive disclosure. We simplified the information architecture and introduced a contextual sidebar, reducing time-to-insight by half.',
  },
  {
    title: 'Lumen Banking',
    category: 'Mobile App Redesign',
    image: 'https://images.pexels.com/photos/969462/pexels-photo-969462.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metric: '4.8★',
    metricLabel: 'App store rating',
    description: 'A fintech app that felt cold and complex. We introduced a warmer visual language, biometric-first login, and a bottom-sheet navigation pattern that made every action reachable with one thumb.',
  },
  {
    title: 'Cascade Store',
    category: 'E-commerce Redesign',
    image: 'https://images.pexels.com/photos/16675632/pexels-photo-16675632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metric: '+38%',
    metricLabel: 'Checkout completion',
    description: 'A three-step checkout collapsed into a single scrollable page. We removed 11 form fields, added inline validation, and redesigned the product grid for faster scanning on mobile.',
  },
];

export default function Work() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="work" ref={ref} className="bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="reveal text-sm font-semibold uppercase tracking-widest text-accent-400">
              Selected work
            </span>
            <h2 className="reveal mt-4 font-display text-4xl font-light leading-tight tracking-tight text-ink-50 sm:text-5xl text-balance">
              Redesigns that moved the needle, not just the pixels.
            </h2>
          </div>
          <a
            href="#contact"
            className="reveal group inline-flex items-center gap-1.5 text-sm font-semibold text-ink-300 transition-colors hover:text-ink-50"
          >
            Start your case study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Projects */}
        <div className="mt-16 space-y-8">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="reveal group grid gap-8 rounded-3xl border border-ink-800 bg-ink-900/40 p-6 transition-all duration-500 hover:border-ink-600 hover:bg-ink-900/70 sm:p-8 lg:grid-cols-2 lg:gap-12"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Metric badge */}
                <div className="absolute right-4 top-4 rounded-xl glass px-4 py-2.5 text-center">
                  <div className="font-display text-2xl font-semibold text-accent-400">
                    {project.metric}
                  </div>
                  <div className="text-[10px] font-medium uppercase tracking-wider text-ink-200">
                    {project.metricLabel}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-sage-400">
                  {project.category}
                </span>
                <h3 className="mt-3 font-display text-3xl font-medium text-ink-50 sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-400 text-pretty">
                  {project.description}
                </p>
                <a
                  href="#contact"
                  className="group/link mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-200 transition-colors hover:text-accent-400"
                >
                  Read the full case study
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
