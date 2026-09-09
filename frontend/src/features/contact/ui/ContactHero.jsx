import Container from "../../../shared/components/Container";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--color-secondary)] py-20 text-white sm:py-24 lg:py-28">
      <img
        src="/images/hero/heromountain.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)]/90 to-[var(--color-secondary)]/50" />

      <Container>
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Get In Touch
          </p>

          <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Let&apos;s Plan Your
            <br />
            Mountain Journey
          </h1>

          <p className="mx-auto mt-6 text-base leading-7 text-white/80 sm:text-lg">
            Have a question or planning a trip around Manali? Get in touch
            with The Mountain Mile and our team will be happy to help.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;