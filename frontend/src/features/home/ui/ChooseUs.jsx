import Container from "../../../shared/components/Container";
import SectionHeading from "../../../shared/components/SectionHeading";

const ChooseUs = () => {
  const features = [
    {
      title: "Reliable Service",
      description:
        "Dependable taxi and car rental services for your Manali journey.",
    },
    {
      title: "Experienced Drivers",
      description:
        "Experienced local drivers who know the mountain routes.",
    },
    {
      title: "Comfortable Cars",
      description:
        "Choose from a range of comfortable vehicles for your trip.",
    },
    {
      title: "Local Expertise",
      description:
        "Get the right travel guidance from people who know Manali.",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Why Choose The Mountain Mile?"
          subtitle="Travel through Manali with comfort, reliability and local expertise."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature,idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[var(--color-border)] bg-white p-6"
            >
              <h3 className="font-[var(--font-heading)] text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ChooseUs;