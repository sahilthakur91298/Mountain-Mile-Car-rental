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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason.id}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[var(--color-accent)]/30"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/5 text-lg font-bold text-[var(--color-accent)] transition-colors duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-white">
                {reason.number}
              </div>

              <h3 className="font-heading text-xl font-semibold text-[var(--color-secondary)]">
                {reason.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {reason.description}
              </p>
              
              <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ChooseUs;