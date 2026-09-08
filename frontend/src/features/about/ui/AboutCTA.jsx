import { Link } from "react-router";
import Container from "../../../shared/components/Container";

const AboutCTA = () => {
  return (
    <section className="bg-[var(--color-primary)] py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Plan Your Journey
          </p>

          <h2 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">
            Ready to Explore the Mountains?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
            Tell us about your travel plans and let us help you find the
            right car or taxi service for your journey.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/booking"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-background)]"
            >
              Send an Enquiry
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutCTA;