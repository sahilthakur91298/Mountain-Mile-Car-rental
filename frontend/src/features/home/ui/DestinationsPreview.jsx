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
            className="group hidden items-center text-sm font-semibold text-[var(--color-accent-light)] transition-colors hover:text-white lg:inline-flex"
          >
            Explore All Destinations 
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
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
        <div className="mt-8 lg:hidden text-center">
          <Link
            to="/destinations"
            className="group inline-flex items-center justify-center rounded-xl border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-6 py-3.5 text-sm font-semibold text-[var(--color-accent-light)] transition-all hover:bg-[var(--color-accent)] hover:text-white"
          >
            Explore All Destinations
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default DestinationsPreview;