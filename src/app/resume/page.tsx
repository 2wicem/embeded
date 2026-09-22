import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { ResumeView } from "@/components/resume-view";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `${site.name} — ${site.role}. Printable resume.`,
};

export default function ResumePage() {
  return (
    <div className="min-h-full bg-[#ece8dc] text-[#1a1a17]">
      <div className="no-print mx-auto flex max-w-[800px] items-center justify-between px-8 py-4 sm:px-0">
        <Link href="/" className="text-sm underline">
          ← Portfolio
        </Link>
        <div className="flex gap-2">
          <a
            href={`mailto:${site.email}`}
            className="rounded-sm border border-[#1a1a17] px-3 py-1.5 text-sm"
          >
            Email
          </a>
          <PrintButton />
        </div>
      </div>
      <ResumeView />
    </div>
  );
}
