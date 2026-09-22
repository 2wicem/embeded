import { skillGroups } from "@/content/site";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading
          kicker="02 — Skills"
          title="What I actually use"
          aside="Grouped by the work, not an alphabet of logos. Trim anything you cannot defend in an interview."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.area}
              className="rounded-sm border border-line bg-panel p-6"
            >
              <h3 className="font-display text-xl text-ink">{group.area}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-line bg-bg px-2.5 py-1 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
