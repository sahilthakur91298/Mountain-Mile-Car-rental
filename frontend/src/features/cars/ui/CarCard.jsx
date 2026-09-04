

const CarCard = ({ car }) => {
    
  return (
    <article className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white">
      {/* Image */}
      <div className="aspect-[4/3] bg-gray-200">
        {car.image && (
          <img
            src={car.image}
            alt={car.title}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-(--font-heading) text-xl font-semibold">
          {car.title}
        </h3>

        <p className="mt-2 text-sm text-(--color-text-muted)">
          {car.type} · {car.seats} Seats
        </p>

        <div className="mt-4">
          <span className="text-lg font-semibold text-(--color-primary)">
            ₹{car.price}
          </span>

          <span className="ml-1 text-sm text-(--color-text-muted)">
            {car.priceUnit}
          </span>
        </div>
      </div>
    </article>
  );
};

export default CarCard;