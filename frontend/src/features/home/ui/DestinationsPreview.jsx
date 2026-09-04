import Container from "../../../shared/components/Container";
import SectionHeading from "../../../shared/components/SectionHeading";

const DestinationsPreview = () => {
  const destinations = [
    "Solang Valley",
    "Atal Tunnel",
    "Rohtang Pass",
    "Kasol",
  ];

  return (
    <section className="bg-[var(--color-background)] py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Explore Manali"
          subtitle="Discover some of the most popular destinations around Manali."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <div
              key={destination}
              className="overflow-hidden rounded-2xl bg-white"
            >
              <div className="aspect-[4/3] bg-gray-200" />

              <div className="p-5">
                <h3 className="font-[var(--font-heading)] text-xl font-semibold">
                  {destination}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DestinationsPreview;