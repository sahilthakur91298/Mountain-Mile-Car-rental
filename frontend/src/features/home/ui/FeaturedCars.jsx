import Container from "../../../shared/components/Container";
import SectionHeading from "../../../shared/components/SectionHeading";
import { NavLink } from "react-router";
import useCars from "../../cars/hooks/useCars.js";
import CarCard from "../../cars/ui/CarCard";

const FeaturedCars = () => {

  const {cars,loading,error} = useCars()

  const featuredCars = cars.slice(0,3)
  return (
    <section className="bg-[var(--color-background)] py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Our Fleet"
          subtitle="Choose the right car for your journey."
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

        <div className="mt-10 text-center">
          <NavLink
            to="/cars"
            className="inline-flex rounded-lg border border-[var(--color-primary)] px-6 py-3 font-medium text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white"
          >
            View All Cars
          </NavLink>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCars;