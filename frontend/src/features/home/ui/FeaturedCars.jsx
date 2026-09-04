import Container from "../../../shared/components/Container";
import SectionHeading from "../../../shared/components/SectionHeading";

const FeaturedCars = () => {
  return (
    <section className="bg-[var(--color-background)] py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Our Fleet"
          subtitle="Choose the right car for your journey."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6">
            <h3 className="font-[var(--font-heading)] text-xl font-semibold">
              Featured Car
            </h3>

            <p className="mt-2 text-[var(--color-text-muted)]">
              Car information will appear here.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCars;