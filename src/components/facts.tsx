import { facts } from "@/content/site";
import { Container } from "./container";

export function Facts() {
  return (
    <section aria-label="Recruiter facts" className="py-6">
      <Container>
        <dl className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-bg px-5 py-5">
              <dt className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">
                {fact.label}
              </dt>
              <dd className="mt-2 text-sm leading-6 text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
