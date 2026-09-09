import { siteConfig } from "../../../config/siteConfig";
import Container from "../../../shared/components/Container";
import SectionHeading from "../../../shared/components/SectionHeading";
import SEO from "../../../shared/components/SEO";
import useService from "../hooks/useService";
import ServiceCard from "../ui/ServiceCard";


const Services = () => {
  const { services, loading, error } = useService();

  return (
    <main>
      <SEO
        title="Taxi & Travel Services in Manali"
        description="Book local taxi, sightseeing, car rental and outstation taxi services in Manali with The Mountain Mile."
        canonical={`${siteConfig.url}/services`}
      />

      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[var(--color-secondary)] py-20 text-white sm:py-24">
        <img
          className="absolute inset-0 z-0 h-full w-full object-cover object-center opacity-35"
          src="/images/services/car rental.webp"
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)]/90 to-[var(--color-secondary)]/60" />

        <Container>
          <div className="relative z-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              What We Offer
            </p>

            <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Reliable Travel
              <span className="block text-white/60">
                Services in Manali
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              From local sightseeing to outstation journeys, we offer a range of
              comfortable and dependable travel solutions tailored to your needs.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            title="Our Services"
            subtitle="Reliable travel solutions for your Manali trip."
          />

          {loading && (
            <p className="mt-10 text-center text-[var(--color-text-muted)]">
              Loading services...
            </p>
          )}

          {error && (
            <p className="mt-10 text-center text-red-500">
              Unable to load services.
            </p>
          )}

          {!loading && !error && (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                />
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
};

export default Services;