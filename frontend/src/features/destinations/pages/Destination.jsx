import Container from "../../../shared/components/Container";
import SectionHeading from "../../../shared/components/SectionHeading";
import DestinationCard from "../ui/DestinationCard";
import  useDestination from "../hooks/useDestination.js";

const Destinations = () => {
  const { destination, loading, error } = useDestination();

  return (
    <main>
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Explore Manali & Beyond"
            subtitle="Discover beautiful destinations and unforgettable mountain experiences."
          />

          {loading && (
            <p className="mt-10 text-center text-[var(--color-text-muted)]">
              Loading destinations...
            </p>
          )}

          {error && (
            <p className="mt-10 text-center text-red-500">
              Unable to load destinations.
            </p>
          )}

          {!loading && !error && (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {destination.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
};

export default Destinations;