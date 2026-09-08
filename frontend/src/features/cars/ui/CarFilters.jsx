const CarFilters = ({
  types,
  selectedType,
  onTypeChange,
}) => {
  return (
    <div className="flex flex-wrap gap-2.5">
      {types.map((type) => (
        <button key={type}
          type="button"
          onClick={() => onTypeChange(type)}
          className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300
            ${
              selectedType === type
                ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/25"
                : "border-[var(--color-border)] bg-white text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
            }
          `}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default CarFilters;