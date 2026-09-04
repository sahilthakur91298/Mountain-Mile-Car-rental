import { Link } from "react-router";
import Container from "../../../shared/components/Container";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      
      {/* Background Image */}
      <img
        src="../images/hero/hero2.webp"
        alt="Mountain road in Manali"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <Container className="relative z-10 flex min-h-[calc(100vh-80px)] items-center">
        <div className="max-w-3xl py-20 text-white">

          {/* Eyebrow */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Car Rental & Taxi Service in Manali
          </p>

          {/* Heading */}
          <h1 className="font-heading text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            Your Journey Through
            <span className="block text-[var(--color-accent)]">
              The Mountains Starts Here.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Comfortable cars, reliable local taxis and memorable journeys
            across Manali and the beautiful Himalayas.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <Link
              to="/cars"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-6 py-3.5 font-semibold text-[var(--color-secondary)] transition hover:opacity-90"
            >
              Explore Our Cars
            </Link>

            <Link
              to="/booking"
              className="inline-flex items-center justify-center rounded-lg border border-white/60 px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-[var(--color-secondary)]"
            >
              Enquire Now
            </Link>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;