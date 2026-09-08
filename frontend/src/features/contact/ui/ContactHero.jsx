import Container from "../../../shared/components/Container";

const ContactHero = () => {
  return (
    <section className="bg-[var(--color-secondary)] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Get In Touch
          </p>

          <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Let&apos;s Plan Your
            <br />
            Mountain Journey
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Have a question or planning a trip around Manali? Get in touch
            with The Mountain Mile and our team will be happy to help.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;