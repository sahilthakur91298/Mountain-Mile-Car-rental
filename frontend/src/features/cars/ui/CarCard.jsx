
const CarCard = ({ car }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white">
      
      {/* Car Image */}
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Car Details */}
      <div className="p-5">
        
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-[var(--color-text-muted)]">
            {car.type}
          </span>

          <span className="text-sm text-[var(--color-text-muted)]">
            {car.seats} Seats
          </span>
        </div>

        <h3 className="font-heading text-2xl font-semibold text-[var(--color-secondary)]">
          {car.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
          {car.description}
        </p>

        <div className="mt-5 flex items-end justify-between">
          
          <div>
            <span className="text-xl font-semibold text-[var(--color-primary)]">
              ₹{car.price}
            </span>

            <span className="ml-1 text-sm text-[var(--color-text-muted)]">
              / {car.priceUnit}
            </span>
          </div>

          <button
            type="button"
            className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--color-primary-dark)]"
          >
            Enquire
          </button>

        </div>
      </div>
    </article>
  );
};

export default CarCard;