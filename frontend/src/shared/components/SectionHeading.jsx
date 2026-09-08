
const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      <div className="mx-auto mb-4 flex items-center justify-center gap-2">
        <span className="h-px w-8 bg-[var(--color-accent)]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
        <span className="h-px w-8 bg-[var(--color-accent)]" />
      </div>

      <h2 className="font-heading text-3xl font-semibold tracking-tight text-[var(--color-secondary)] sm:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
