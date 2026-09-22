import { site } from "@/content/site";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl text-ink">{site.name}</p>
          <p className="mt-1 max-w-sm text-sm text-muted">
            If this page helped you decide, email is the fastest next step. If
            you know a team that needs this work, forward it.
          </p>
        </div>
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} · Built to be forwarded, not decorated
        </p>
      </Container>
    </footer>
  );
}
