import Container from "../../../shared/components/Container";
import SectionHeading from "../../../shared/components/SectionHeading";

const ServicesPreview = () => {
  const services = [
    "Car Rental",
    "Local Taxi",
    "Sightseeing",
    "Outstation Taxi",
  ];

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Everything you need to explore Manali comfortably."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-[var(--color-border)] bg-white p-6"
            >
              <h3 className="font-[var(--font-heading)] text-xl font-semibold">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesPreview;