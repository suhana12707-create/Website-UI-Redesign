import { ArrowUpRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-ink-950 grain pt-32 pb-20">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-sage-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />
            ))}
          </div>
          <span className="text-sm font-medium text-ink-400">Rated 5.0 by 40+ clients</span>
        </div>

        {/* Headline */}
        <h1 className="mt-8 max-w-5xl font-display text-5xl font-light leading-[1.05] tracking-tight text-ink-50 sm:text-6xl lg:text-7xl xl:text-8xl text-balance opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          We redesign interfaces that people actually{' '}
          <span className="italic font-normal text-accent-400">love to use</span>.
        </h1>

        {/* Subhead */}
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-300 sm:text-xl text-pretty opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          A design studio specializing in usability-led redesigns. We evaluate, refine, and rebuild your product's interface so it feels effortless — for your users and your team.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink-50 px-7 py-3.5 text-base font-semibold text-ink-950 transition-all hover:bg-accent-400"
          >
            Start a redesign
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-700 px-7 py-3.5 text-base font-semibold text-ink-100 transition-colors hover:border-ink-500 hover:bg-ink-800/50"
          >
            View our work
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 sm:grid-cols-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          {[
            { value: '120+', label: 'Projects shipped' },
            { value: '48%', label: 'Avg. conversion lift' },
            { value: '4.2x', label: 'Faster task completion' },
            { value: '8 yrs', label: 'In the craft' },
          ].map((stat) => (
            <div key={stat.label} className="bg-ink-950 px-6 py-8">
              <div className="font-display text-3xl font-light text-ink-50 sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-ink-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ink-600 p-1.5">
          <div className="h-2 w-1 rounded-full bg-ink-400 animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
}
