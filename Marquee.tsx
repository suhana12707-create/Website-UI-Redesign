const logos = [
  'Northwind', 'Lumen', 'Aperture', 'Cascade', 'Vertex', 'Halcyon', 'Meridian', 'Quartz',
];

export default function Marquee() {
  return (
    <section className="border-y border-ink-800 bg-ink-900 py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="mb-5 text-center text-xs font-medium uppercase tracking-widest text-ink-500">
          Trusted by teams at
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-2xl font-medium text-ink-500 transition-colors hover:text-ink-200"
            >
              {logo}
            </span>
          ))}
        </div>
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-900 to-transparent" />
      </div>
    </section>
  );
}
