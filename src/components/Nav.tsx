import { useEffect, useState } from "react";
import { profile } from "../content/profile";
import { Icon } from "./Icon";

const links = [
  { id: "story", label: "Story" },
  { id: "capabilities", label: "What I do" },
  { id: "work", label: "Work" },
  { id: "toolkit", label: "Toolkit" },
  { id: "ideas", label: "Ideas" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = [...links.map((l) => l.id), "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-line/70 bg-paper/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-forest font-display text-[0.95rem] text-paper italic transition-transform duration-300 group-hover:-rotate-6">
            ab
          </span>
          <span className="font-display text-lg leading-none">
            {profile.shortName}
            <span className="text-clay">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active === l.id ? "bg-ink/[0.07] text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a
              href="#contact"
              className="rounded-full bg-forest px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-forest-2"
            >
              Let’s talk
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line/70 bg-paper px-5 pt-6 pb-10 md:hidden"
      >
        <ul className="flex flex-col">
          {[...links, { id: "contact", label: "Contact" }].map((l, i) => (
            <li key={l.id} className="rise border-b border-line/70" style={{ ["--d" as string]: `${i * 40}ms` }}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 font-display text-3xl"
              >
                {l.label}
                <Icon name="arrow" className="h-5 w-5 text-clay" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-ink-soft"
        >
          <Icon name="mail" /> {profile.email}
        </a>
      </div>
    </header>
  );
}
