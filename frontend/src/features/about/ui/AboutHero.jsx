import Container from "../../../shared/components/Container";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--color-secondary)] py-24 sm:py-28 lg:py-32">
      <img
        src="/images/about/about1.jpg"
        alt="The Mountain Mile car rental and taxi service in Manali"
        className="absolute inset-0 h-full w-full object-cover object-center "
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)]/90 to-[var(--color-secondary)]/50" />

      <Container>
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            About Us
          </p>

          <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Your Journey,
            <br />
            Our Responsibility
          </h1>

          <p className="mx-auto mt-6  text-base leading-7 text-white/80 sm:text-lg">
            Discover Manali and the mountains with a local travel partner
            you can rely on.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;