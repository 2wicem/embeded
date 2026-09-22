"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-sm bg-[#1a1a17] px-3 py-1.5 text-sm text-[#ece8dc]"
    >
      Print / Save PDF
    </button>
  );
}
