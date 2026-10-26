import { useState } from "react";
import { projects, type Project, type ProjectCategory } from "../content/projects";
import { Icon } from "./Icon";
import { Section } from "./Section";

const filters: ("All" | ProjectCategory)[] = ["All", "AI & enablement", "Data & quality", "Reporting & BI"];

function ProjectCard({ p, featured }: { p: Project; featured: boolean }) {
  const [open, setOpen] = useState(false);
  const panelId = `proj-${p.id}`;

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-[24px] border bg-card transition-all duration-300 ${
        open ? "border-ink/30 shadow-[0_24px_60px_-32px_rgb(22_48_43/0.55)]" : "border-line hover:-translate-y-1 hover:border-ink/25"
      } ${featured ? "md:col-span-2" : ""}`}
    >
      <div className={`flex flex-1 flex-col p-6 sm:p-8 ${featured ? "md:grid md:grid-cols-[1.3fr_0.7fr] md:gap-10" : ""}`}>
        <div className="flex flex-1 flex-col">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.7rem] text-ink-soft">
            <span className="rounded-full bg-paper-2 px-2.5 py-1 text-ink">{p.category}</span>
            <span>{p.context}</span>
            <span aria-hidden="true">·</span>
            <span>{p.period}</span>
          </div>
          <p className="mt-5 text-sm font-semibold text-clay">{p.kicker}</p>
          <h3 className={`mt-1.5 font-medium text-balance ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{p.title}</h3>
          <p className="mt-4 text-ink-soft">{p.problem}</p>

          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tools and methods">
            {p.tools.map((t) => (
              <li key={t} className="rounded-md border border-line px-2 py-0.5 font-mono text-[0.68rem] text-ink-soft">
                {t}
              </li>
            ))}
          </ul>
        </div>

        {p.headline && (
          <div
            className={`mt-6 rounded-2xl bg-forest p-5 text-paper ${featured ? "md:mt-0 md:flex md:flex-col md:justify-end md:p-7" : ""}`}
          >
            <p className={`font-display leading-none ${featured ? "text-5xl" : "text-3xl"}`}>{p.headline.value}</p>
            <p className="mt-2 text-sm text-paper/70">{p.headline.label}</p>
          </div>
        )}
      </div>

      <div id={panelId} hidden={!open} className="border-t border-line bg-paper/60 px-6 py-7 sm:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs tracking-[0.14em] text-clay uppercase">My role</p>
            <p className="mt-2 font-medium">{p.role}</p>
            <ul className="mt-4 space-y-2.5">
              {p.contributions.map((c) => (
                <li key={c} className="flex gap-2.5 text-[0.95rem] text-ink-soft">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-forest-2" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            {p.stakeholders && (
              <div>
                <p className="font-mono text-xs tracking-[0.14em] text-clay uppercase">Worked with</p>
                <p className="mt-2 text-[0.95rem] text-ink-soft">{p.stakeholders.join(" · ")}</p>
              </div>
            )}
            <div className="rounded-2xl border border-forest/20 bg-card p-5">
              <p className="font-mono text-xs tracking-[0.14em] text-forest-2 uppercase">Outcome</p>
              <p className="mt-2 font-display text-lg leading-snug">{p.outcome}</p>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between border-t border-line px-6 py-4 text-left text-sm font-semibold transition-colors hover:bg-paper-2/60 sm:px-8"
      >
        {open ? "Close case study" : "Read the case study"}
        <span className={`grid h-8 w-8 place-items-center rounded-full border border-line transition-transform duration-300 ${open ? "rotate-45 bg-forest text-paper" : ""}`}>
          <Icon name="plus" />
        </span>
        <span className="sr-only">: {p.title}</span>
      </button>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section
      id="work"
      index="03"
      eyebrow="Selected work"
      title={
        <>
          Real projects. Real numbers. <em className="text-clay">No invented ones.</em>
        </>
      }
      intro="Each card opens into a short case study: the problem, what I did, who I worked with, and what changed. Where I coordinated rather than coded, I say so."
    >
      <div role="group" aria-label="Filter projects" className="reveal mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filter === f ? "bg-ink text-paper" : "border border-line bg-card/70 text-ink-soft hover:border-ink/40 hover:text-ink"
            }`}
          >
            {f}
            <span className="ml-1.5 font-mono text-xs opacity-60">
              {f === "All" ? projects.length : projects.filter((p) => p.category === f).length}
            </span>
          </button>
        ))}
      </div>

      <div className="grid items-start gap-5 md:grid-cols-2">
        {shown.map((p, i) => (
          <ProjectCard key={p.id} p={p} featured={i === 0 && filter === "All"} />
        ))}
      </div>
    </Section>
  );
}
