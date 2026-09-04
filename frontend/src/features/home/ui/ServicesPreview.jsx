import ServiceCard from "../../services/ui/ServiceCard";
import Container from "../../../shared/components/Container";
import SectionHeading from "../../../shared/components/SectionHeading";
import useService from "../../services/hooks/useService";
import { Link } from "react-router";

const ServicesPreview = () => {
  const { services, loading, error } = useService();

  const featuredServices = services.slice(0, 3);

  return (
    <section className="bg-[var(--color-background)] py-20">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Everything you need for a comfortable journey in and around Manali."
        />

        {loading && (
          <p className="mt-10 text-center">
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
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex rounded-lg border border-[var(--color-primary)] px-6 py-3 font-medium text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white"
          >
            View All Services
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ServicesPreview;