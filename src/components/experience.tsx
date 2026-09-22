import { education, experience } from "@/content/site";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-line py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          kicker="03 — Experience"
          title="Where the work happened"
          aside="Bullets should be owned outcomes. If a sentence could sit on anyone's resume, rewrite it."
        />
        <ol className="space-y-0">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="grid gap-4 border-t border-line py-8 sm:grid-cols-[220px_1fr] sm:gap-10"
            >
              <div>
                <p className="font-mono text-[11px] text-faint">{job.period}</p>
                <p className="mt-2 text-sm text-muted">{job.location}</p>
                {job.sample ? (
                  <p className="mt-3 font-mono text-[10px] tracking-wide text-warm uppercase">
                    Sample — replace
                  </p>
                ) : null}
              </div>
              <div>
                <h3 className="font-display text-2xl text-ink">{job.title}</h3>
                <p className="mt-1 text-sm text-signal">{job.company}</p>
                <ul className="mt-4 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-6 text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        {education.length > 0 ? (
          <div className="mt-4 border-t border-line pt-10">
            <p className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">
              Education
            </p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {education.map((item) => (
                <li key={item.school} className="rounded-sm border border-line p-5">
                  <p className="text-ink">{item.credential}</p>
                  <p className="mt-1 text-sm text-muted">{item.school}</p>
                  <p className="mt-2 font-mono text-[11px] text-faint">
                    {item.period}
                  </p>
                  {item.note ? (
                    <p className="mt-3 text-sm leading-6 text-faint">{item.note}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
