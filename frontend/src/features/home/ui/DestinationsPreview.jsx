import { Link } from "react-router";
import useDestinations from "../../destinations/hooks/useDestination.js";
import DestinationCard from "../../destinations/ui/DestinationCard";
import Container from "../../../shared/components/Container";
import SectionHeading from "../../../shared/components/SectionHeading";

const DestinationsPreview = () => {
  const { destination, loading, error } = useDestinations();

  const featuredDestinations = destination.slice(0, 4);

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Places We Take You"
          subtitle="From scenic valleys to breathtaking Himalayan destinations."
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
            {featuredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            to="/destinations"
            className="inline-flex rounded-lg border border-[var(--color-primary)] px-6 py-3 font-medium text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white"
          >
            Explore All Destinations
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default DestinationsPreview;