import { featuredProject, mailtoHire, site } from "@/content/site";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function Contact() {
  const hasEmail = Boolean(site.email);
  const hasLinkedin = Boolean(site.socials.linkedin);

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-line py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          kicker="06 — Contact"
          title="Send the role, not a puzzle"
          aside="I reply faster when the first message includes stack, location, and whether the work is full-stack."
        />
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-sm border border-line bg-panel p-6 sm:p-10">
            <p className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              If you are hiring for {site.seeking[0].toLowerCase()}, start with
              Dopekit, then GitHub.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={featuredProject.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-signal px-5 py-3 text-sm font-medium text-signal-ink"
              >
                Open Dopekit
              </a>
              {hasEmail ? (
                <a
                  href={mailtoHire()}
                  className="rounded-sm border border-line px-5 py-3 text-sm text-ink"
                >
                  {site.email}
                </a>
              ) : (
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm border border-line px-5 py-3 text-sm text-ink"
                >
                  github.com/2wicem
                </a>
              )}
              {site.phone ? (
                <a
                  href={`tel:${site.phone}`}
                  className="rounded-sm border border-line px-5 py-3 text-sm text-ink"
                >
                  {site.phone}
                </a>
              ) : null}
            </div>
          </article>
          <dl className="grid gap-px overflow-hidden rounded-sm border border-line bg-line">
            {hasLinkedin ? (
              <div className="bg-panel px-6 py-5">
                <dt className="font-mono text-[11px] tracking-[0.16em] text-faint uppercase">
                  LinkedIn
                </dt>
                <dd className="mt-2">
                  <a
                    href={site.socials.linkedin}
                    className="text-sm text-ink hover:text-signal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.socials.linkedin.replace("https://", "")}
                  </a>
                </dd>
              </div>
            ) : null}
            <div className="bg-panel px-6 py-5">
              <dt className="font-mono text-[11px] tracking-[0.16em] text-faint uppercase">
                GitHub
              </dt>
              <dd className="mt-2">
                <a
                  href={site.socials.github}
                  className="text-sm text-ink hover:text-signal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.socials.github.replace("https://", "")}
                </a>
              </dd>
            </div>
            <div className="bg-panel px-6 py-5">
              <dt className="font-mono text-[11px] tracking-[0.16em] text-faint uppercase">
                Featured project
              </dt>
              <dd className="mt-2">
                <a
                  href={featuredProject.repo}
                  className="text-sm text-ink hover:text-signal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/2wicem/Dopekit
                </a>
              </dd>
            </div>
            <div className="bg-panel px-6 py-5">
              <dt className="font-mono text-[11px] tracking-[0.16em] text-faint uppercase">
                Languages
              </dt>
              <dd className="mt-2 text-sm text-ink">{site.languages.join(" · ")}</dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
