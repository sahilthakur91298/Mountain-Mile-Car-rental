import Container from "../../../shared/components/Container";
import SectionHeading from "../../../shared/components/SectionHeading";
import CarCard from "../ui/CarCard";
import  useCars  from "../hooks/useCars.js";

const Cars = () => {
  const { cars, loading, error } = useCars();

  return (
    <main>
      <section className="py-20">
        <Container>

          <SectionHeading
            title="Our Cars"
            subtitle="Choose from our comfortable and reliable vehicles for your Manali journey."
          />

          {loading && (
            <p className="mt-10 text-center">
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
              {cars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                />
              ))}
            </div>
          )}

        </Container>
      </section>
    </main>
  );
};

export default Cars;