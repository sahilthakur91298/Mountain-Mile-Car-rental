import { Link } from "react-router";
import useDestination from "../../destinations/hooks/useDestination.js";
import DestinationCard from "../../destinations/ui/DestinationCard";
import Container from "../../../shared/components/Container";

const DestinationsPreview = () => {
  const { destination, loading, error } = useDestination();

  if (loading) {
    return (
      <section className="bg-[var(--color-secondary)] py-16 sm:py-20 lg:py-24">
        <Container>
          <p className="text-center text-[var(--color-text-muted)]">
            Loading destinations...
          </p>
        </Container>
      </section>
    );
  }

  if (error) {
    return null;
  }

  return (
    <section className="bg-[var(--color-secondary)] py-16 sm:py-20 lg:py-24 text-white">
      <Container>
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Explore Himachal
            </p>

            <h2 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              Places Worth
              <span className="block text-white/60">
                The Journey
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/65">
              From snow-covered passes to peaceful valleys, discover some of
              the most beautiful destinations around Manali.
            </p>
          </div>

          <Link
            to="/destinations"
            className="hidden text-sm font-semibold transition hover:text-[var(--color-accent)] lg:block"
          >
            Explore All Destinations →
          </Link>
        </div>

        {/* Destination Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destination.slice(0, 4).map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 lg:hidden">
          <Link
            to="/destinations"
            className="text-sm font-semibold text-white transition hover:text-[var(--color-accent)]"
          >
            Explore All Destinations →
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default DestinationsPreview;