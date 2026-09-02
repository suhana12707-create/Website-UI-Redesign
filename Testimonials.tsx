import { Quote } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const testimonials = [
  {
    quote: 'They didn\'t just make our product prettier — they made it usable. Our support tickets dropped 60% in the first month after launch. The heuristic evaluation alone paid for the entire engagement.',
    name: 'Sarah Chen',
    role: 'VP Product, Northwind',
    initials: 'SC',
  },
  {
    quote: 'The mood board phase was a game-changer. We aligned on the visual direction before any screens were designed, which saved us weeks of revisions. The final mockups were exactly what we needed.',
    name: 'Marcus Reid',
    role: 'CEO, Lumen Banking',
    initials: 'MR',
  },
  {
    quote: 'What impressed me most was the responsive thinking. Every breakpoint was intentional. Our mobile conversion rate jumped 38% — that\'s not a typo. The redesign paid for itself in six weeks.',
    name: 'Priya Nair',
    role: 'Head of Design, Cascade',
    initials: 'PN',
  },
];

export default function Testimonials() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" ref={ref} className="relative bg-ink-900 py-24 sm:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-[300px] w-[500px] rounded-full bg-sage-500/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="reveal text-sm font-semibold uppercase tracking-widest text-accent-400">
            Client stories
          </span>
          <h2 className="reveal mt-4 font-display text-4xl font-light leading-tight tracking-tight text-ink-50 sm:text-5xl text-balance">
            Don't take our word for it — take theirs.
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal flex flex-col rounded-2xl border border-ink-800 bg-ink-950/50 p-8 transition-all duration-500 hover:border-ink-600"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="h-8 w-8 text-accent-400/60" />
              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-ink-200 text-pretty">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-ink-800 pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-ink-700 to-ink-800 font-display text-sm font-semibold text-ink-100">
                  {t.initials}
                </div>
                <div>
                  <div className="font-medium text-ink-50">{t.name}</div>
                  <div className="text-sm text-ink-400">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
