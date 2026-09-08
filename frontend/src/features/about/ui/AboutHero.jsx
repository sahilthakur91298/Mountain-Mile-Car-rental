import Container from "../../../shared/components/Container";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--color-secondary)] py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-0">
        <img
          src="/images/general/about.jpg"
          alt="The Mountain Mile car rental and taxi service in Manali"
          className="h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-[var(--color-secondary)]/70" />
      </div>

      <Container>
        <div className="relative mx-auto max-w-3xl text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            About Us
          </p>

          <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Your Journey,
            <br />
            Our Responsibility
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Discover Manali and the mountains with a local travel partner
            you can rely on.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;