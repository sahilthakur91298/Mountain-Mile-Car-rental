import Container from "../../../shared/components/Container";
import SectionHeading from "../../../shared/components/SectionHeading";
import DestinationCard from "../ui/DestinationCard";
import  useDestination from "../hooks/useDestination.js";
import SEO from "../../../shared/components/SEO.jsx";
import { siteConfig } from "../../../config/siteConfig.jsx";

const Destinations = () => {
  const { destination, loading, error } = useDestination();

  return (
    <main>
      <SEO
        title="Manali Sightseeing & Nearby Destinations"
        description="Explore Solang Valley, Atal Tunnel, Rohtang Pass, Kasol and other popular destinations around Manali with The Mountain Mile."
        canonical={`${siteConfig.url}/destinations`}
      />

      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[var(--color-secondary)] py-20 text-white sm:py-24">
        <img
          className="absolute inset-0 z-0 h-full w-full object-cover object-center opacity-40"
          src="/images/destinations/hero3.webp"
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)]/90 to-[var(--color-secondary)]/50" />

        <Container>
          <div className="relative z-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Discover Places
            </p>

            <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Explore Manali
              <span className="block text-white/60">
                & Beyond
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Discover Solang Valley, Rohtang Pass, Atal Tunnel and other stunning
              destinations around Manali with a trusted local travel partner.
            </p>
          </div>
        </Container>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            title="Popular Destinations"
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