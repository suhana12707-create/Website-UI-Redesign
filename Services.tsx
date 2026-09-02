import { Search, Palette, Monitor, MousePointerClick } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const services = [
  {
    icon: Search,
    title: 'Heuristic Evaluation',
    description: 'We audit your interface against established usability principles to surface friction points and prioritize what to fix first.',
    points: ['Nielsen heuristics audit', 'Accessibility review (WCAG)', 'Competitive analysis'],
  },
  {
    icon: Palette,
    title: 'Style Guide & Mood Boards',
    description: 'We define the visual language — typography, color, spacing, and component patterns — so every screen feels coherent.',
    points: ['Design tokens', 'Component library', 'Brand-aligned aesthetics'],
  },
  {
    icon: Monitor,
    title: 'High-Fidelity Mockups',
    description: 'Pixel-perfect, production-ready designs for every key screen, with clear specs your engineers can build from immediately.',
    points: ['Desktop & mobile layouts', 'Interactive prototypes', 'Dev handoff specs'],
  },
  {
    icon: MousePointerClick,
    title: 'Responsive Design',
    description: 'Every layout is engineered to adapt gracefully from mobile to ultrawide — no broken states, no awkward gaps.',
    points: ['Fluid grid systems', 'Touch-first interactions', 'Breakpoint strategy'],
  },
];

export default function Services() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" ref={ref} className="bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="max-w-3xl">
          <span className="reveal text-sm font-semibold uppercase tracking-widest text-accent-400">
            What we do
          </span>
          <h2 className="reveal mt-4 font-display text-4xl font-light leading-tight tracking-tight text-ink-50 sm:text-5xl text-balance">
            Four disciplines, one outcome — interfaces that feel inevitable.
          </h2>
          <p className="reveal mt-6 text-lg text-ink-300 text-pretty">
            Every redesign follows the same rigorous path: evaluate what's broken, define the visual system, and design screens that work for real people on real devices.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/50 p-8 transition-all duration-500 hover:border-ink-600 hover:bg-ink-900"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent-500/0 blur-3xl transition-all duration-700 group-hover:bg-accent-500/10" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-800 text-accent-400 transition-colors group-hover:bg-accent-500 group-hover:text-ink-950">
                  <service.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-display text-2xl font-medium text-ink-50">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-400">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm text-ink-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-sage-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Index number */}
              <span className="absolute right-6 top-6 font-display text-5xl font-light text-ink-800 transition-colors group-hover:text-ink-700">
                0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
