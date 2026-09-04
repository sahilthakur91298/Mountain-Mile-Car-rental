import Container from "../../../shared/components/Container";
import Button from "../../../shared/ui/Button";

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-5rem)]">
      <Container>
        <div className="flex min-h-[calc(100vh-5rem)] items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Car Rental & Taxi Service in Manali
            </p>

            <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
              Explore the Mountains.
              <br />
              <span className="text-[var(--color-primary)]">
                Your Journey, Our Ride.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-text-muted)] md:text-lg">
              Comfortable cars, reliable taxi services and memorable journeys
              across Manali and Himachal Pradesh.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]">
                Explore Our Cars
              </Button>

              <Button className="border border-[var(--color-primary)] text-[var(--color-primary)]">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;