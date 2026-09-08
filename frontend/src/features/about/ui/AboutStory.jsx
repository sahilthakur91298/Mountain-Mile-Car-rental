import Container from "../../../shared/components/Container";

const AboutStory = () => {
  return (
    <section className="bg-[var(--color-background)] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/general/about.jpg"
              alt="Mountain travel experience in Manali"
              loading="lazy"
              className="h-full min-h-[350px] w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Who We Are
            </p>

            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-[var(--color-secondary)] sm:text-4xl">
              More Than Just
              <br />
              A Ride
            </h2>

            <div className="mt-6 space-y-4 text-base leading-7 text-[var(--color-text-muted)]">
              <p>
                The Mountain Mile is a local car rental and taxi service
                based in Manali, created to make exploring the mountains
                comfortable, convenient and reliable.
              </p>

              <p>
                Whether you are planning a local sightseeing trip, looking
                for a comfortable car to explore the region, or travelling
                to destinations beyond Manali, we aim to make every journey
                simple and stress-free.
              </p>

              <p>
                With local knowledge and a focus on comfortable travel, we
                help our customers experience the beauty of Himachal Pradesh
                with confidence.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutStory;