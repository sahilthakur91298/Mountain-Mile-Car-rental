import Container from "../../../shared/components/Container";
import SectionHeading from "../../../shared/components/SectionHeading";

const reasons = [
  {
    id: 1,
    number: "01",
    title: "Reliable Service",
    description:
      "Dependable car rental and taxi services designed to make your journey comfortable and stress-free.",
  },
  {
    id: 2,
    number: "02",
    title: "Experienced Drivers",
    description:
      "Travel confidently with experienced local drivers who understand the roads and destinations of Himachal.",
  },
  {
    id: 3,
    number: "03",
    title: "Comfortable Vehicles",
    description:
      "Choose from well-maintained vehicles suitable for couples, families and group travel.",
  },
  {
    id: 4,
    number: "04",
    title: "Local Expertise",
    description:
      "Get local knowledge and practical guidance to explore Manali and its surrounding destinations.",
  },
];

const ChooseUs = () => {
  return (
    <section className="bg-[var(--color-background)] py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Why Choose The Mountain Mile?"
          subtitle="More than just a ride — we help make your mountain journey comfortable, reliable and memorable."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason.id}
              className="group border-t border-[var(--color-border)] pt-6"
            >
              <span className="text-sm font-semibold tracking-widest text-[var(--color-accent)]">
                {reason.number}
              </span>

              <h3 className="mt-5 font-heading text-2xl font-semibold text-[var(--color-secondary)]">
                {reason.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ChooseUs;