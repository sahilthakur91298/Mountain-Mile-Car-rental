import { siteConfig } from "../../../config/siteConfig";
import Container from "../../../shared/components/Container";
import SEO from "../../../shared/components/SEO";
import BookingForm from "../ui/BookingForm";

const Booking = () => {
  return (
    <main>
      <SEO
        title="Book a Taxi or Car Rental in Manali"
        description="Send your travel enquiry to The Mountain Mile for car rental, taxi, sightseeing and outstation travel services in Manali."
        canonical={`${siteConfig.url}/booking`}
      />
      <section className="bg-[var(--color-background)] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Plan Your Journey
            </p>

            <h1 className="mt-3 font-heading text-4xl font-semibold text-[var(--color-secondary)] sm:text-5xl">
              Send Us Your Enquiry
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
              Tell us about your journey and our team will get back to you
              with the best vehicle and travel options.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <BookingForm />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Booking;