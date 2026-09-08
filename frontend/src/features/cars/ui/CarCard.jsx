import { Link } from "react-router";

const CarCard = ({ car }) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--color-primary)]/10">
      
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={car.image}
          alt={`${car.id} available for rental in Manali`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Vehicle Type */}
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] shadow-sm backdrop-blur-md">
          {car.type}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 lg:p-8">
        <h3 className="font-heading text-2xl font-bold text-[var(--color-secondary)]">
          {car.title}
        </h3>

        {/* Specs */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-lg bg-[var(--color-primary)]/5 px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)]">
            {car.specs.seats} Seats
          </span>

          {car.specs.transmission.map((transmission) => (
             <span key={transmission}
               className="inline-flex items-center rounded-lg bg-[var(--color-primary)]/5 px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)]">
               {transmission}
            </span>
            ))}
          {car.specs.ac && (
            <span className="inline-flex items-center rounded-lg bg-[var(--color-primary)]/5 px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)]">
              AC
            </span>
          )}
        </div>

        {/* Description */}
        <p className="mt-5 line-clamp-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {car.description}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6">
            <div>
              <p className="text-xs font-medium text-[var(--color-text-muted)]">
                Starting from
              </p>

              <p className="mt-1 font-heading text-2xl font-bold text-[var(--color-secondary)]">
                <span className="text-[var(--color-accent)]">₹</span>{car.pricing.amount.toLocaleString("en-IN")}
              </p>

              <p className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
                {car.pricing.unit}
              </p>
            </div>

            <Link
              to="/booking"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[var(--color-primary)]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-primary-dark)] hover:shadow-lg hover:shadow-[var(--color-primary)]/30 active:scale-95"
            >
              Enquire
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CarCard;