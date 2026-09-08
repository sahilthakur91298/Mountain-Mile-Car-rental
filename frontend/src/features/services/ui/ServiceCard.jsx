const ServiceCard = ({ service }) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--color-primary)]/10">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={`${service.title} in Manali`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <h3 className="font-heading text-xl font-bold text-[var(--color-secondary)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
          {service.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-[var(--color-text-muted)]">
          {service.description}
        </p>

        <div className="mt-6 flex items-center border-t border-[var(--color-border)] pt-5">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] transition-all duration-300 group-hover:gap-3">
            Learn More
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;