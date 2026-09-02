import { useReveal } from '@/hooks/useReveal';

const steps = [
  {
    phase: 'Phase 01',
    title: 'Discover',
    duration: 'Week 1',
    description: 'We immerse ourselves in your product, talk to your users, and map the current experience. Every pain point gets documented and scored.',
    deliverables: ['Usability audit report', 'User journey maps', 'Pain point inventory'],
  },
  {
    phase: 'Phase 02',
    title: 'Define',
    duration: 'Week 2',
    description: 'We establish the visual direction through mood boards and style guides, then align with your team on the look, feel, and tone before any screen is designed.',
    deliverables: ['Mood board', 'Design tokens', 'Typography & color system'],
  },
  {
    phase: 'Phase 03',
    title: 'Design',
    duration: 'Week 3–4',
    description: 'High-fidelity mockups for every key screen — desktop and mobile. Interactive prototypes let you click through the full experience before a line of code is written.',
    deliverables: ['Hi-fi mockups', 'Clickable prototype', 'Responsive layouts'],
  },
  {
    phase: 'Phase 04',
    title: 'Deliver',
    duration: 'Week 5',
    description: 'We hand off organized specs, assets, and a component library your developers can build from immediately. We stay available through implementation to keep it on track.',
    deliverables: ['Dev handoff specs', 'Component library', 'Implementation support'],
  },
];

export default function Process() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="process" ref={ref} className="relative bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="reveal text-sm font-semibold uppercase tracking-widest text-accent-400">
            How we work
          </span>
          <h2 className="reveal mt-4 font-display text-4xl font-light leading-tight tracking-tight text-ink-50 sm:text-5xl text-balance">
            A proven, five-week process from audit to handoff.
          </h2>
        </div>

        {/* Timeline */}
        <div className="mt-16 space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="reveal group relative grid gap-6 border-t border-ink-800 py-10 transition-colors hover:border-ink-600 sm:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr_auto]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Phase + duration */}
              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl font-light text-ink-700 transition-colors group-hover:text-accent-400">
                  0{i + 1}
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-ink-500">
                    {step.phase}
                  </div>
                  <div className="text-sm text-ink-400">{step.duration}</div>
                </div>
              </div>

              {/* Title + description */}
              <div>
                <h3 className="font-display text-2xl font-medium text-ink-50 sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-400">
                  {step.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {step.deliverables.map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-ink-700 bg-ink-800/50 px-3 py-1 text-xs font-medium text-ink-300"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow indicator */}
              <div className="hidden items-center lg:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-500 transition-all group-hover:border-accent-400 group-hover:text-accent-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-ink-800" />
      </div>
    </section>
  );
}
