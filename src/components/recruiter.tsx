import { mailtoReferral, recruiter } from "@/content/site";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function Recruiter() {
  return (
    <section
      id="recruiters"
      className="scroll-mt-20 border-t border-line py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          kicker="05 — For recruiters & referrals"
          title="Make this easy to forward"
          aside="The point of this page is not decoration. It is so a person can send you to a hiring manager without writing a novel."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-sm border border-line bg-panel p-6 sm:p-8">
            <h3 className="font-display text-2xl text-ink">
              Evaluate me in 20 minutes
            </h3>
            <ol className="mt-5 space-y-3">
              {recruiter.evaluateIn20.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-6 text-muted">
                  <span className="font-mono text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </article>
          <article className="rounded-sm border border-line bg-panel p-6 sm:p-8">
            <h3 className="font-display text-2xl text-ink">Fit check</h3>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[11px] tracking-[0.16em] text-signal uppercase">
                  Good fit
                </p>
                <ul className="mt-3 space-y-2">
                  {recruiter.goodFit.map((item) => (
                    <li key={item} className="text-sm leading-6 text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-[0.16em] text-warm uppercase">
                  Not a fit
                </p>
                <ul className="mt-3 space-y-2">
                  {recruiter.badFit.map((item) => (
                    <li key={item} className="text-sm leading-6 text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
        <article className="mt-4 rounded-sm border border-signal/25 bg-panel p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-display text-2xl text-ink">Referral kit</h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                Copy this into Slack, LinkedIn, or email. It is written so a
                teammate can forward you without guessing what you do.
              </p>
            </div>
            <a
              href={mailtoReferral()}
              className="shrink-0 rounded-sm bg-signal px-4 py-2 text-sm font-medium text-signal-ink"
            >
              Open a forward email
            </a>
          </div>
          <blockquote className="mt-6 rounded-sm border border-line bg-bg p-5 font-mono text-sm leading-7 text-muted">
            {recruiter.referralBlurb}
          </blockquote>
        </article>
      </Container>
    </section>
  );
}
