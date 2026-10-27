import { useState } from "react";
import { toolkit } from "../content/toolkit";
import { Section } from "./Section";

export function Toolkit() {
  const [active, setActive] = useState(toolkit[0].id);
  const group = toolkit.find((g) => g.id === active)!;

  return (
    <Section
      id="toolkit"
      index="04"
      eyebrow="Toolkit"
      title="The tools behind the work, with the proof next to each one."
      intro="Grouped as in my CV. Where a skill has a project behind it, you can see what I used it for."
      className="bg-paper-2/60"
    >
      <div role="group" aria-label="Skill groups" className="reveal mb-8 flex flex-wrap gap-2">
        {toolkit.map((g) => (
          <button
            key={g.id}
            type="button"
            aria-pressed={g.id === active}
            onClick={() => setActive(g.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              g.id === active ? "bg-ink text-paper" : "border border-line bg-card/70 text-ink-soft hover:border-ink/40 hover:text-ink"
            }`}
          >
            {g.label}
            <span className="ml-1.5 font-mono text-xs opacity-60">{g.tools.length}</span>
          </button>
        ))}
      </div>

      <div key={group.id} className="rise">
        <p className="mb-6 font-display text-2xl text-balance sm:text-3xl">{group.blurb}</p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {group.tools.map((t) => (
            <li
              key={t.name}
              className={`rounded-2xl border p-5 ${t.where ? "border-line bg-card" : "border-line/70 bg-card/50"}`}
            >
              <p className="font-semibold">{t.name}</p>
              {t.where && <p className="mt-1.5 text-sm text-ink-soft">{t.where}</p>}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
