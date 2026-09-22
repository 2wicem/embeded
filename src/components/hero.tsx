import { featuredProject, highlights, mailtoHire, site } from "@/content/site";
import { Container } from "./container";

export function Hero() {
  const hasEmail = Boolean(site.email);
  const hasLinkedin = Boolean(site.socials.linkedin);

  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-8 sm:pt-24">
      <Container>
        <p className="font-mono text-[11px] tracking-[0.22em] text-signal uppercase">
          {site.availability} · {site.startDate}
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-ink sm:text-7xl">
          {site.name}
        </h1>
        <p className="mt-4 font-display text-2xl italic text-warm sm:text-3xl">
          {site.role}
        </p>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
          {site.oneLiner}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-faint">
          {site.summary}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={featuredProject.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-signal px-5 py-3 text-sm font-medium text-signal-ink"
          >
            {featuredProject.tag}: {featuredProject.name}
          </a>
          <a
            href={site.resumeHref}
            className="rounded-sm border border-line px-5 py-3 text-sm text-ink hover:border-ink/40"
          >
            Open resume
          </a>
          {hasEmail ? (
            <a
              href={mailtoHire()}
              className="rounded-sm border border-line px-5 py-3 text-sm text-ink hover:border-ink/40"
            >
              Email me a role
            </a>
          ) : null}
          {hasLinkedin ? (
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-line px-5 py-3 text-sm text-ink hover:border-ink/40"
            >
              LinkedIn
            </a>
          ) : null}
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-line px-5 py-3 text-sm text-ink hover:border-ink/40"
          >
            GitHub
          </a>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {site.seeking.map((item) => (
            <li
              key={item}
              className="rounded-sm border border-line bg-panel px-3 py-1 font-mono text-[11px] tracking-wide text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.label} className="bg-panel p-6">
              <p className="font-mono text-[11px] tracking-[0.18em] text-signal uppercase">
                {item.stat} · {item.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
