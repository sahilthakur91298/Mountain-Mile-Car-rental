import Container from "../../../shared/components/Container";
import SectionHeading from "../../../shared/components/SectionHeading";

const values = [
  {
    title: "Reliable Service",
    description:
      "We focus on providing dependable travel solutions and making your journey as smooth as possible.",
  },
  {
    title: "Local Knowledge",
    description:
      "Our understanding of Manali and nearby destinations helps you travel with greater convenience.",
  },
  {
    title: "Comfort First",
    description:
      "From local trips to longer journeys, we aim to provide comfortable vehicles suited to your travel needs.",
  },
  {
    title: "Customer Focus",
    description:
      "Every journey is different, so we listen to your requirements and help you choose the right option.",
  },
];

const AboutValues = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          title="Why Travel With Us?"
          subtitle="We believe a good travel experience starts with reliable service, local knowledge and genuine attention to our customers."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary)] text-lg text-white">
                ✓
              </div>

              <h3 className="mt-5 font-heading text-xl font-semibold text-[var(--color-secondary)]">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutValues;