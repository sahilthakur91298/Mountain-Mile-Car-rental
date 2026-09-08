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
      <section className="py-20">
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