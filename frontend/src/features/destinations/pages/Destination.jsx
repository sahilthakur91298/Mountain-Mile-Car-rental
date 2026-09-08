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