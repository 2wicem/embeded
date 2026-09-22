import { site } from "@/content/site";
import { Container } from "./container";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#recruiters", label: "Recruiters" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-sm bg-signal font-mono text-[11px] font-semibold tracking-wide text-signal-ink">
            {site.name
              .split(" ")
              .filter(Boolean)
              .map((part) => part[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </span>
          <span className="hidden text-sm tracking-tight text-ink sm:block">
            {site.name}
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/2wicem/Dopekit"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-signal px-3 py-1.5 text-sm font-medium text-signal-ink transition-opacity hover:opacity-90"
          >
            Dopekit
          </a>
          <a
            href={site.resumeHref}
            className="rounded-sm border border-line px-3 py-1.5 text-sm text-ink transition-colors hover:border-ink/40"
          >
            Resume
          </a>
        </div>
      </Container>
    </header>
  );
}
