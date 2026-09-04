import Container from "../../../shared/components/Container";
import Button from "../../../shared/ui/Button";

const HomeCTA = () => {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="rounded-3xl bg-[var(--color-primary)] px-6 py-14 text-center text-white md:px-12">
          <h2 className="font-[var(--font-heading)] text-3xl font-bold md:text-5xl">
            Ready to Explore Manali?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Get in touch with The Mountain Mile for your next journey.
          </p>

          <div className="mt-8">
            <Button className="text-[var(--color-primary)]">
              Enquire Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeCTA;