
const ServiceCard = ({ service }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={`${service.id} in Manali`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-2xl font-semibold text-[var(--color-secondary)]">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
          {service.description}
        </p>

        <button
          type="button"
          className="mt-5 text-sm font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-dark)]"
        >
          Learn More →
        </button>
      </div>
    </article>
  );
};

export default ServiceCard;