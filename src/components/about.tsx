import { about, site } from "@/content/site";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading
          kicker="04 — About"
          title={`A person, not a keyword list`}
          aside={site.now}
        />
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-base leading-8 text-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="space-y-4">
            {about.values.map((value) => (
              <li key={value.title} className="border-l-2 border-signal pl-4">
                <p className="text-ink">{value.title}</p>
                <p className="mt-1 text-sm leading-6 text-faint">{value.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
