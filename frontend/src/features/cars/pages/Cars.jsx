import SectionHeading from "../../../shared/components/SectionHeading";
import useCars from "../hooks/useCars"
import CarCard from "../ui/CarCard";
import Container from "../../../shared/components/Container";


const Cars = () => {

  const {cars,loading,error} = useCars()
  if(loading){
    return <div>Loading Cars...</div>
  }
  if(error){
    return <div>Error loading Cars</div>
  }

return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Our Cars"
          subtitle="Choose a vehicle that fits your journey."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </Container>
    </section>
  );
};


export default Cars