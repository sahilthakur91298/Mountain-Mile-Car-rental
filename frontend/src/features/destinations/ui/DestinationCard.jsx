const DestinationCard = ({ destination }) => {
  return (
    <article className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
      {/* Image */}
      <div className="aspect-[4/5] w-full overflow-hidden">
        <img
          src={destination.image}
          alt={`${destination.name} near Manali`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6 text-white transition-transform duration-500 ease-in-out">
        <h3 className="font-heading text-2xl font-bold tracking-wide">
          {destination.name}
        </h3>

        <div className="grid grid-rows-[0fr] transition-all duration-500 ease-in-out group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/80">
              {destination.description}
            </p>

            <button
              type="button"
              className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--color-accent-light)] transition-colors hover:text-white"
            >
              Explore Destination 
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DestinationCard;