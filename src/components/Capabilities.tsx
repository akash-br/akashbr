import { useState } from "react";
import { capabilities, type Capability } from "../content/capabilities";
import { Section } from "./Section";

function Detail({ c }: { c: Capability }) {
  const rows = [
    { k: "The problem", v: c.problem, tone: "text-clay" },
    { k: "How I approach it", v: c.approach, tone: "text-forest-2" },
    { k: "What it creates", v: c.outcome, tone: "text-ink" },
  ];
  return (
    <div className="grid gap-5">
      {rows.map((r, i) => (
        <div key={r.k} className="rise grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-6" style={{ ["--d" as string]: `${i * 70}ms` }}>
          <p className={`font-mono text-xs tracking-[0.14em] uppercase sm:pt-1 ${r.tone}`}>{r.k}</p>
          <p className={i === 2 ? "font-display text-xl leading-snug" : "text-ink-soft"}>{r.v}</p>
        </div>
      ))}
    </div>
  );
}

export function Capabilities() {
  const [active, setActive] = useState(capabilities[0].id);
  const current = capabilities.find((c) => c.id === active)!;

  return (
    <Section
      id="capabilities"
      index="02"
      eyebrow="What I actually do"
      title="Six things I get asked to fix — in plain language."
      intro="No jargon required. Pick one to see the problem, how I tackle it and what the business gets."
      className="bg-paper-2/60"
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <ul className="reveal flex flex-col gap-2.5">
          {capabilities.map((c, i) => {
            const on = c.id === active;
            return (
              <li key={c.id}>
                <button
                  type="button"
                  id={`cap-tab-${c.id}`}
                  aria-expanded={on}
                  aria-controls={`cap-panel-${c.id}`}
                  onClick={() => setActive(c.id)}
                  className={`group flex w-full items-start gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                    on
                      ? "border-forest bg-forest text-paper shadow-[0_18px_40px_-24px_rgb(22_48_43/0.8)]"
                      : "border-line bg-card/70 hover:-translate-y-0.5 hover:border-ink/30 hover:bg-card"
                  }`}
                >
                  <span className={`pt-0.5 font-mono text-xs ${on ? "text-butter" : "text-clay"}`}>0{i + 1}</span>
                  <span className="flex-1">
                    <span className="block font-semibold">{c.name}</span>
                    <span className={`mt-0.5 block text-sm ${on ? "text-paper/75" : "text-ink-soft"}`}>{c.oneLiner}</span>
                  </span>
                </button>
                {/* Mobile: inline accordion panel */}
                {on && (
                  <div
                    id={`cap-panel-${c.id}`}
                    role="region"
                    aria-labelledby={`cap-tab-${c.id}`}
                    className="mt-2.5 rounded-2xl border border-line bg-card p-5 lg:hidden"
                  >
                    <Detail c={c} />
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop: sticky detail panel */}
        <div className="hidden lg:block" role="region" aria-live="polite" aria-label="Selected capability">
          <div className="sticky top-28 overflow-hidden rounded-[28px] border border-line bg-card p-10">
            <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-butter/40 blur-3xl" />
            <p className="relative font-mono text-xs tracking-[0.18em] text-ink-soft uppercase">Capability</p>
            <h3 key={current.id + "-t"} className="rise relative mt-3 text-4xl font-medium">
              {current.name}
            </h3>
            <div key={current.id} className="relative mt-8 border-t border-line pt-8">
              <Detail c={current} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
