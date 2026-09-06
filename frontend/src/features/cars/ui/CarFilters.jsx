const CarFilters = ({
  types,
  selectedType,
  onTypeChange,
}) => {
  return (
    <div className="flex flex-wrap gap-3">
      {types.map((type) => (
        <button key={type}
          type="button"
          onClick={() => onTypeChange(type)}
          className={` rounded-full border px-5 py-2.5 text-sm font-semibold transition
            ${
              selectedType === type
                ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                : "border-[var(--color-border)] bg-white text-[var(--color-text)] hover:border-[var(--color-primary)]"
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