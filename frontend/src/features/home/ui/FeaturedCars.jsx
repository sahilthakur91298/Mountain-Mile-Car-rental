import Container from "../../../shared/components/Container";
import SectionHeading from "../../../shared/components/SectionHeading";
import { Link } from "react-router";
import useCars from "../../cars/hooks/useCars.js";
import CarCard from "../../cars/ui/CarCard";

const FeaturedCars = () => {

  const {cars,loading,error} = useCars()

  const featuredCars = cars.slice(0,3)
  return (
    <section className="bg-[var(--color-background)] py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          title="Choose Your Ride"
            subtitle="Comfortable and reliable vehicles for every kind of mountain journey."
        />
         {loading && (
          <p className="mt-10 text-center text-[var(--color-text-muted)]">
            Loading cars...
          </p>
        )}

        {error && (
          <p className="mt-10 text-center text-red-500">
            Unable to load cars.
          </p>
        )}
     {!loading && !error && (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}

        <div className="mt-14 text-center">
          <Link to="/cars" className="group inline-flex items-center justify-center rounded-xl border-2 border-[var(--color-primary)] px-8 py-3.5 text-sm font-bold text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white hover:shadow-lg hover:shadow-[var(--color-primary)]/20 active:scale-95">
            View All Cars
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCars;