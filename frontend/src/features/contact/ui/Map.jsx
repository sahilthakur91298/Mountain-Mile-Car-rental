import Container from "../../../shared/components/Container";

const Map = () => {
  return (
    <section className="bg-[var(--color-background)] pb-16 sm:pb-20 lg:pb-24">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm">
          <div className="aspect-[16/7] min-h-[300px]">
            <iframe
              title="The Mountain Mile location in Manali"
              src="google.com/maps/search/The%20Highland%20Park/@32.287750244140625,77.17731475830078,17z?hl=en"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Map;