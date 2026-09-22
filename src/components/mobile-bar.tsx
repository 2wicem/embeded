import { featuredProject, site } from "@/content/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 p-3 backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={site.resumeHref}
          className="rounded-sm border border-line py-3 text-center text-sm text-ink"
        >
          Resume
        </a>
        <a
          href={featuredProject.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm bg-signal py-3 text-center text-sm font-medium text-signal-ink"
        >
          Dopekit
        </a>
      </div>
    </div>
  );
}
