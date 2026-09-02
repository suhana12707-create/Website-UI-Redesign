import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-ink-950 py-24 sm:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 translate-y-1/3 rounded-full bg-accent-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: pitch */}
          <div>
            <span className="reveal text-sm font-semibold uppercase tracking-widest text-accent-400">
              Let's talk
            </span>
            <h2 className="reveal mt-4 font-display text-4xl font-light leading-tight tracking-tight text-ink-50 sm:text-5xl lg:text-6xl text-balance">
              Your redesign starts with a conversation.
            </h2>
            <p className="reveal mt-6 text-lg text-ink-300 text-pretty">
              Tell us about your product and what's not working. We'll get back within one business day with initial thoughts — no obligation, no sales pitch.
            </p>

            {/* What happens next */}
            <ul className="reveal mt-10 space-y-4">
              {[
                'A 30-minute discovery call to understand your goals',
                'A free mini-audit of your top three usability issues',
                'A tailored proposal with timeline and fixed pricing',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-ink-200">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-500/20 text-sage-400">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="reveal mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-400">
              <a href="mailto:hello@refined.studio" className="transition-colors hover:text-ink-100">
                hello@refined.studio
              </a>
              <span>San Francisco · Remote worldwide</span>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal">
            <div className="rounded-3xl border border-ink-800 bg-ink-900/50 p-8 sm:p-10">
              {submitted ? (
                <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sage-500/20 text-sage-400">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-medium text-ink-50">
                    Message sent
                  </h3>
                  <p className="mt-3 max-w-sm text-base text-ink-400">
                    Thanks, {form.name || 'there'} — we'll be in touch within one business day. Check your inbox for a confirmation.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', message: '' }); }}
                    className="mt-8 text-sm font-semibold text-accent-400 transition-colors hover:text-accent-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink-200">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-ink-700 bg-ink-950 px-4 py-3 text-base text-ink-50 placeholder-ink-500 transition-colors focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink-200">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-ink-700 bg-ink-950 px-4 py-3 text-base text-ink-50 placeholder-ink-500 transition-colors focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400"
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-ink-200">
                      Company <span className="text-ink-500">(optional)</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full rounded-xl border border-ink-700 bg-ink-950 px-4 py-3 text-base text-ink-50 placeholder-ink-500 transition-colors focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-200">
                      What's not working?
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full resize-none rounded-xl border border-ink-700 bg-ink-950 px-4 py-3 text-base text-ink-50 placeholder-ink-500 transition-colors focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400"
                      placeholder="Our dashboard feels cluttered and users are abandoning checkout..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-ink-50 px-6 py-3.5 text-base font-semibold text-ink-950 transition-all hover:bg-accent-400"
                  >
                    Send message
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
