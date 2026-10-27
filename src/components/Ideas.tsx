import { useState } from "react";
import { ideas } from "../content/ideas";
import { Icon } from "./Icon";
import { Section } from "./Section";

const statusLabel = { draft: "Draft", idea: "Idea", published: "Published" } as const;

export function Ideas() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Section
      id="ideas"
      index="05"
      eyebrow="Ideas"
      title="Notes on AI, data and getting people to use both."
      intro="Short opinion pieces from my field. Most are still drafts; open one to read where it is today."
    >
      <ul className="grid gap-4">
        {ideas.map((idea) => {
          const on = open === idea.slug;
          const panel = `idea-${idea.slug}`;
          return (
            <li key={idea.slug} className="reveal overflow-hidden rounded-[24px] border border-line bg-card">
              <button
                type="button"
                aria-expanded={on}
                aria-controls={panel}
                onClick={() => setOpen(on ? null : idea.slug)}
                className="flex w-full items-start gap-5 p-6 text-left transition-colors hover:bg-paper-2/50 sm:p-8"
              >
                <span className="flex-1">
                  <span className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.7rem] text-ink-soft">
                    <span className="rounded-full bg-paper-2 px-2.5 py-1 text-ink">{idea.topic}</span>
                     <span>{statusLabel[idea.status]}</span>
                    <span>{idea.readMins} min read</span>
                  </span>
                  <span className="mt-4 block font-display text-2xl leading-tight text-balance sm:text-[1.7rem]">{idea.title}</span>
                  <span className="mt-2 block text-ink-soft">{idea.dek}</span>
                </span>
                <span className={`mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line transition-transform duration-300 ${on ? "rotate-45 bg-forest text-paper" : ""}`}>
                  <Icon name="plus" />
                </span>
              </button>
              <div id={panel} hidden={!on} className="border-t border-line bg-paper/60 px-6 py-7 sm:px-8">
                <div className="max-w-2xl space-y-4 text-ink-soft">
                  {idea.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
