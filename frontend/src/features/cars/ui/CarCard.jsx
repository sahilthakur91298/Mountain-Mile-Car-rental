import { Link } from "react-router";

const CarCard = ({ car }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={car.image}
          alt={`${car.id} available for rental in Manali`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Vehicle Type */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--color-secondary)] backdrop-blur">
          {car.type}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-2xl font-semibold text-[var(--color-secondary)]">
          {car.title}
        </h3>

        {/* Specs */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-[var(--color-background)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-muted)]">
            {car.specs.seats} Seats
          </span>

          {car.specs.transmission.map((transmission) => (
             <span key={transmission}
               className="rounded-full bg-[var(--color-background)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-muted)]">
               {transmission}
            </span>
            ))}
          {car.specs.ac && (
            <span className="rounded-full bg-[var(--color-background)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-muted)]">
              AC
            </span>
          )}
        </div>

        {/* Description */}
        <p className="mt-4 line-clamp-2 text-sm leading-6 text-[var(--color-text-muted)]">
          {car.description}
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-end justify-between gap-4 border-t border-[var(--color-border)] pt-5">
          <div>
            <p className="text-xs text-[var(--color-text-muted)]">
              Starting from
            </p>

            <p className="mt-1 font-heading text-2xl font-semibold text-[var(--color-secondary)]">
              ₹{car.pricing.amount.toLocaleString("en-IN")}
            </p>

            <p className="text-xs text-[var(--color-text-muted)]">
              {car.pricing.unit}
            </p>
          </div>

          <Link
            to="/booking"
            className="inline-flex items-center rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
          >
            Enquire
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CarCard;