import { impactStats, profile } from "../content/profile";
import { Icon } from "./Icon";

const tldr = [
  { k: "Now", v: "Digitalisation Specialist, BMW AG — AI enablement in Indirect Purchasing" },
  { k: "Before", v: "7 years as IT Quality Specialist, BMW AG — enterprise reporting & BI" },
  { k: "Education", v: "M.Sc & M.E Automotive Embedded Systems · B.E Computer Science" },
  { k: "Languages", v: profile.languages.join(" · ") },
];

export function Impact() {
  return (
    <section aria-labelledby="impact-title" className="relative pb-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal overflow-hidden rounded-[28px] bg-forest text-paper">
          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:p-12">
            <div>
              <p className="font-mono text-xs tracking-[0.18em] text-sage uppercase">The 30-second version</p>
              <h2 id="impact-title" className="mt-3 text-3xl font-medium text-balance sm:text-4xl">
                For the recruiter with one coffee and twelve tabs open.
              </h2>
              <dl className="mt-8 space-y-4 text-[0.95rem]">
                {tldr.map((r) => (
                  <div key={r.k} className="grid grid-cols-[6.5rem_1fr] gap-3 border-t border-paper/15 pt-4">
                    <dt className="font-mono text-xs tracking-wider text-sage uppercase">{r.k}</dt>
                    <dd className="text-paper/90">{r.v}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={profile.cvUrl}
                download
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-butter link-underline"
              >
                <Icon name="download" /> Download the full CV (PDF)
              </a>
            </div>

            <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-paper/15 min-[440px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {impactStats.map((s, i) => (
                <li
                  key={s.label}
                  className="reveal group bg-forest p-6 transition-colors duration-300 hover:bg-forest-2"
                  style={{ ["--d" as string]: `${i * 70}ms` }}
                >
                  <p className="font-display text-[2.1rem] leading-none font-medium text-paper">
                    {s.value}
                    {s.unit && <span className="ml-1.5 font-sans text-sm font-medium text-butter">{s.unit}</span>}
                  </p>
                  <p className="mt-3 text-sm leading-snug text-paper/70">{s.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
