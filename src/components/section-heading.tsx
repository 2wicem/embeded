export function SectionHeading({
  kicker,
  title,
  aside,
}: {
  kicker: string;
  title: string;
  aside?: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="font-mono text-[11px] tracking-[0.22em] text-signal uppercase">
          {kicker}
        </p>
        <h2 className="mt-2 font-display text-3xl tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
      </div>
      {aside ? (
        <p className="max-w-sm text-sm leading-6 text-faint sm:text-right">
          {aside}
        </p>
      ) : null}
    </div>
  );
}
