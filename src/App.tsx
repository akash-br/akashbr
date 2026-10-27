import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Impact } from "./components/Impact";
import { Story } from "./components/Story";
import { Capabilities } from "./components/Capabilities";
import { Projects } from "./components/Projects";
import { Toolkit } from "./components/Toolkit";
import { Ideas } from "./components/Ideas";
import { Section } from "./components/Section";
import { Button } from "./components/Button";
import { useReveal } from "./components/useReveal";
import { profile } from "./content/profile";

export default function App() {
  useReveal();
  return (
    <div className="grain">
      <Nav />
      <main id="main">
        <Hero />
        <Impact />
        <Story />
        <Capabilities />
        <Projects />
        <Toolkit />
        <Ideas />
        <Section
          id="contact"
          index="06"
          eyebrow="Contact"
          tone="dark"
          title="Got a problem where business, data and AI need to meet? Let’s talk."
          intro="The quickest route is email or LinkedIn. I reply faster than most dashboards refresh."
        >
          <div className="flex flex-wrap gap-3">
            <Button href={`mailto:${profile.email}`} variant="light" icon="mail">
              {profile.email}
            </Button>
            <Button href={profile.linkedin} variant="light" icon="linkedin" external>
              LinkedIn
            </Button>
            {profile.github && (
              <Button href={profile.github} variant="light" icon="github" external>
                GitHub
              </Button>
            )}
            <Button href={profile.cvUrl} variant="light" icon="download" download>
              Download CV
            </Button>
          </div>
        </Section>
      </main>
      <footer className="bg-forest py-8 text-center text-sm text-paper/60">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}
