import { projects } from "@/content/site";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading
          kicker="01 — Selected work"
          title="Things I can stand behind"
          aside="Case studies a hiring manager can skim. Problem, what I did, what changed."
        />
        <div className="space-y-4">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="rounded-sm border border-line bg-panel p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {project.featured ? (
                  <span className="rounded-sm bg-signal px-2 py-0.5 font-mono text-[10px] tracking-wide text-signal-ink uppercase">
                    Featured
                  </span>
                ) : null}
                {project.sample ? (
                  <span className="rounded-sm border border-warm/40 px-2 py-0.5 font-mono text-[10px] tracking-wide text-warm uppercase">
                    Sample — replace
                  </span>
                ) : null}
                <span className="font-mono text-[11px] text-faint">
                  {project.timeframe}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl tracking-tight text-ink sm:text-3xl">
                {project.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-[11px] tracking-wide text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.16em] text-faint uppercase">
                    Constraint
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-[0.16em] text-faint uppercase">
                    What I did
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {project.work}
                  </p>
                </div>
                <div className="rounded-sm border border-signal/20 bg-bg p-4">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-signal uppercase">
                    Outcome
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink">
                    {project.outcome}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm bg-signal px-4 py-2 text-sm font-medium text-signal-ink"
                  >
                    Open GitHub →
                  </a>
                ) : project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm bg-signal px-4 py-2 text-sm font-medium text-signal-ink"
                  >
                    Open the work →
                  </a>
                ) : null}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm border border-line px-4 py-2 text-sm text-ink hover:border-ink/40"
                  >
                    Live site
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
