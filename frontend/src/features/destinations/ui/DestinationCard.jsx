const DestinationCard = ({ destination }) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl">
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.id}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="font-heading text-2xl font-semibold">
          {destination.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-white/80">
          {destination.description}
        </p>

        <button
          type="button"
          className="mt-4 text-sm font-semibold transition hover:opacity-80"
        >
          Explore Destination →
        </button>
      </div>
    </article>
  );
};

export default DestinationCard;