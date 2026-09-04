import Container from "../../../shared/components/Container";

const AboutPreview = () => {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="aspect-[4/3] rounded-2xl bg-gray-200" />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              About Us
            </p>

            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold md:text-4xl">
              Your Local Travel Partner in Manali
            </h2>

            <p className="mt-5 leading-7 text-[var(--color-text-muted)]">
              The Mountain Mile provides reliable car rental and taxi
              services for travellers exploring Manali and nearby destinations.
            </p>

            <button className="mt-6 font-semibold text-[var(--color-primary)]">
              Learn More →
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;