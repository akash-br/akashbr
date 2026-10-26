import type { ReactNode } from "react";

type Props = {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

export function Section({ id, index, eyebrow, title, intro, children, className = "", tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative py-24 sm:py-32 ${dark ? "bg-forest text-paper" : ""} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <header className="reveal mb-12 max-w-3xl sm:mb-16">
          <p
            className={`mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.18em] uppercase ${
              dark ? "text-sage" : "text-clay"
            }`}
          >
            <span aria-hidden="true">{index}</span>
            <span aria-hidden="true" className={`h-px w-8 ${dark ? "bg-sage/60" : "bg-clay/50"}`} />
            {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="text-4xl font-medium text-balance sm:text-5xl">
            {title}
          </h2>
          {intro && (
            <p className={`mt-5 text-lg text-pretty ${dark ? "text-paper/75" : "text-ink-soft"}`}>{intro}</p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
