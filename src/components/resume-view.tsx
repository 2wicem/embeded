import { education, experience, site, skillGroups } from "@/content/site";

export function ResumeView() {
  return (
    <article className="resume mx-auto max-w-[800px] bg-white px-8 py-10 text-[#1a1a17] sm:px-12 sm:py-14 print:max-w-none print:px-0 print:py-0">
      <header className="border-b border-[#d8d4c8] pb-6">
        <p className="text-xs tracking-[0.2em] text-[#6b675c] uppercase">
          {site.availability}
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-tight">{site.name}</h1>
        <p className="mt-1 text-lg text-[#5c584e]">{site.role}</p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-[#3f3c35]">
          {site.oneLiner}
        </p>
        <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#5c584e]">
          <span>{site.location}</span>
          {site.email ? (
            <a href={`mailto:${site.email}`} className="underline">
              {site.email}
            </a>
          ) : null}
          {site.socials.linkedin ? (
            <a href={site.socials.linkedin} className="underline">
              LinkedIn
            </a>
          ) : null}
          <a href={site.socials.github} className="underline">
            GitHub
          </a>
          <a href="https://github.com/2wicem/Dopekit" className="underline">
            Dopekit
          </a>
        </p>
      </header>

      <section className="mt-8">
        <h2 className="text-xs tracking-[0.2em] text-[#6b675c] uppercase">
          Target roles
        </h2>
        <p className="mt-2 text-sm">{site.seeking.join(" · ")}</p>
        <p className="mt-1 text-sm text-[#5c584e]">
          {site.workMode} · {site.workAuth} · {site.startDate}
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xs tracking-[0.2em] text-[#6b675c] uppercase">
          Experience
        </h2>
        <ul className="mt-4 space-y-5">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-medium">
                  {job.title} · {job.company}
                </p>
                <p className="text-sm text-[#6b675c]">{job.period}</p>
              </div>
              <p className="text-sm text-[#6b675c]">{job.location}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xs tracking-[0.2em] text-[#6b675c] uppercase">
          Skills
        </h2>
        <ul className="mt-3 space-y-1 text-sm leading-6">
          {skillGroups.map((group) => (
            <li key={group.area}>
              <span className="font-medium">{group.area}:</span>{" "}
              {group.items.join(", ")}
            </li>
          ))}
        </ul>
      </section>

      {education.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-xs tracking-[0.2em] text-[#6b675c] uppercase">
            Education
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {education.map((item) => (
              <li key={item.school}>
                <span className="font-medium">{item.credential}</span> ·{" "}
                {item.school} · {item.period}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
