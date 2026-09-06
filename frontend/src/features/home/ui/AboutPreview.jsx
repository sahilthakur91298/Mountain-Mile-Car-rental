import { Link } from "react-router";
import Container from "../../../shared/components/Container";

const AboutPreview = () => {
  return (
    <section className="bg-[var(--color-background)] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="../images/about/about1.jpg"
                alt="Mountain journey in Manali"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-4 rounded-xl bg-[var(--color-primary)] px-6 py-5 text-white shadow-xl sm:-right-6">
              <p className="font-heading text-3xl font-semibold">
                Manali
              </p>

              <p className="mt-1 text-sm text-white/70">
                Your mountain journey starts here
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              About The Mountain Mile
            </p>

            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-[var(--color-secondary)] sm:text-5xl">
              More Than Just
              <span className="block text-[var(--color-primary)]">
                A Ride
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[var(--color-text-muted)]">
              The Mountain Mile provides comfortable and reliable car rental
              and taxi services for travellers exploring Manali and the
              beautiful destinations of Himachal Pradesh.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--color-text-muted)]">
              Whether you are planning a local sightseeing trip, a mountain
              adventure, or an outstation journey, our goal is to make every
              mile of your journey comfortable and hassle-free.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-6 border-y border-[var(--color-border)] py-6">
              <div>
                <p className="font-heading text-2xl font-semibold text-[var(--color-secondary)]">
                  Local
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Mountain Expertise
                </p>
              </div>

              <div>
                <p className="font-heading text-2xl font-semibold text-[var(--color-secondary)]">
                  Reliable
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Travel Experience
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition hover:gap-3"
            >
              Discover Our Story
              <span>→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;