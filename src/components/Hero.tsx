import { profile } from "../content/profile";
import { Button } from "./Button";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-sage/35 blur-3xl" />
        <div className="absolute top-20 right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-butter/40 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <div>
          <div className="rise mb-7 flex items-center gap-3" style={{ ["--d" as string]: "0ms" }}>
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover object-top ring-2 ring-card"
            />
            <p className="text-sm leading-snug">
              <span className="font-semibold">{profile.name}</span>
              <br />
              <span className="text-ink-soft">
                {profile.role} · {profile.employer} · {profile.location.split(",")[0]}
              </span>
            </p>
          </div>

          <h1
            className="rise text-[2.6rem] font-medium text-balance sm:text-6xl lg:text-[4.1rem]"
            style={{ ["--d" as string]: "80ms" }}
          >
            I translate between the people who <em className="text-clay">ask for answers</em> and the people who{" "}
            <em className="text-forest-2">build them.</em>
          </h1>

          <p className="rise mt-7 max-w-xl text-lg text-ink-soft text-pretty" style={{ ["--d" as string]: "160ms" }}>
            9+ years at BMW across enterprise reporting, data quality and — today — AI enablement in Indirect
            Purchasing. I turn business questions into use cases, acceptance criteria and data that technical teams can
            actually build on.
          </p>

          <p
            className="rise mt-5 max-w-xl border-l-2 border-clay/60 pl-4 font-display text-xl text-ink italic"
            style={{ ["--d" as string]: "220ms" }}
          >
            Business questions in. Buildable answers out. Fewer meetings about the meeting.
          </p>

          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ ["--d" as string]: "300ms" }}>
            <Button href="#work">Explore my work</Button>
            <Button href="#contact" variant="secondary" icon="mail">
              Let’s talk
            </Button>
          </div>
        </div>

        <div className="rise relative" style={{ ["--d" as string]: "200ms" }}>
          <HeroVisual />
          <aside
            aria-label="Personality detail"
            className="absolute -bottom-8 left-3 max-w-[15rem] -rotate-3 rounded-lg bg-butter px-4 py-3 text-sm leading-snug shadow-[0_14px_30px_-14px_rgb(27_36_34/0.5)] transition-transform duration-300 hover:rotate-0 sm:-left-6"
          >
            <span className="font-mono text-[0.65rem] tracking-widest text-ink/60 uppercase">Languages</span>
            <br />
            English, German — and fluent <em>“can we get a quick dashboard by Friday?”</em>
          </aside>
        </div>
      </div>
    </section>
  );
}
