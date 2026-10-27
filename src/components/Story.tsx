import { chapters, education } from "../content/story";
import { profile } from "../content/profile";
import { Section } from "./Section";

export function Story() {
  return (
    <Section
      id="story"
      index="01"
      eyebrow="My story"
      title={
        <>
          I’ve sat on every side of the <em className="text-clay">requirements document.</em>
        </>
      }
      intro="Builder, then guardian of enterprise reporting, now the person helping a business decide what AI should actually do. Each step changed how I approach the next problem."
    >
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <aside className="reveal lg:sticky lg:top-28 lg:self-start">
          <figure className="rounded-[24px] border border-line bg-card p-6">
            <div className="flex items-center gap-4">
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width={240}
                height={240}
                loading="lazy"
                className="h-28 w-28 shrink-0 rounded-2xl object-cover object-[50%_18%] sm:h-32 sm:w-32"
              />
              <figcaption>
                <p className="font-display text-xl leading-tight">{profile.name}</p>
                <p className="text-sm text-ink-soft">{profile.location}</p>
              </figcaption>
            </div>
            <blockquote className="mt-6 font-display text-lg leading-snug text-ink italic">
              “Having built software myself, I know what a developer needs from a requirement. Having supported
              thousands of report users, I know what the business needs from the result.”
            </blockquote>
          </figure>

          <div className="mt-6 rounded-[24px] border border-line p-6">
            <p className="font-mono text-xs tracking-[0.16em] text-clay uppercase">Education</p>
            <ul className="mt-4 space-y-4">
              {education.map((e) => (
                <li key={e.degree} className="text-sm">
                  <p className="font-semibold">{e.degree}</p>
                  <p className="text-ink-soft">
                    {e.school}, {e.place} · {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <ol className="relative space-y-6 before:absolute before:top-3 before:bottom-3 before:left-[11px] before:w-px before:bg-line">
          {chapters.map((c, i) => (
            <li key={c.period} className="reveal relative pl-10" style={{ ["--d" as string]: `${i * 60}ms` }}>
              <span
                aria-hidden="true"
                className={`absolute top-2 left-0 grid h-6 w-6 place-items-center rounded-full border-2 ${
                  i === chapters.length - 1 ? "border-clay bg-clay" : "border-line bg-paper"
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${i === chapters.length - 1 ? "bg-paper" : "bg-ink-soft"}`} />
              </span>
              <article className="rounded-[24px] border border-line bg-card/70 p-6 transition-all duration-300 hover:border-ink/25 hover:bg-card sm:p-8">
                <p className="font-mono text-xs text-ink-soft">
                  {c.period} · {c.place}
                </p>
                <p className="mt-1 text-sm font-semibold text-clay">
                  {c.role} — {c.org}
                </p>
                <h3 className="mt-4 text-2xl font-medium sm:text-[1.7rem]">{c.title}</h3>
                <div className="mt-4 space-y-3 text-ink-soft">
                  {c.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {c.tags.map((t) => (
                    <li key={t} className="rounded-full bg-paper-2 px-3 py-1 font-mono text-[0.7rem] text-ink-soft">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
