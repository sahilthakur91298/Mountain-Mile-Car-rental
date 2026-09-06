import Container from "../../../shared/components/Container";
import SectionHeading from "../../../shared/components/SectionHeading";
import CarCard from "../ui/CarCard";
import  useCars  from "../hooks/useCars.js";
import { useState } from "react";
import CarFilters from "../ui/CarFilters.jsx";

const Cars = () => {
  const { cars, loading, error } = useCars();

  const [selectedType, setSelectedType] = useState("All")

  const carTypes = [
    "All",
    ...new Set(cars.map((car)=> car.type))
  ]

  const filteredCars = selectedType === "All" ? cars : cars.filter((car)=>car.type === selectedType)

  if (loading) {
    return (
      <main className="py-24">
        <Container>
          <p className="text-center text-[var(--color-text-muted)]">
            Loading vehicles...
          </p>
        </Container>
      </main>
    );
  }

  if (error) {
    return (
      <main className="py-24">
        <Container>
          <p className="text-center text-red-600">
            Unable to load vehicles.
          </p>
        </Container>
      </main>
    );
  }

  return (
    <main>
      {/* Page Header */}
      <section className="bg-[var(--color-secondary)] py-20 text-white sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Our Fleet
            </p>

            <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Find The Right
              <span className="block text-white/60">
                Vehicle For Your Journey
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Choose from our range of comfortable and reliable vehicles for
              local travel, sightseeing and outstation journeys from Manali.
            </p>
          </div>
        </Container>
      </section>

      {/* Cars */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            title="Choose Your Ride"
            subtitle="Explore our available vehicles and enquire about the one that suits your journey."
          />

          {/* Filters */}
          <div className="mt-10">
              <CarFilters
                types={carTypes}
                selectedType={selectedType}
                onTypeChange={setSelectedType}/>
          </div>

          {/* Grid */}
          {filteredCars.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-[var(--color-border)] bg-white p-10 text-center">
              <h2 className="font-heading text-2xl font-semibold text-[var(--color-secondary)]">
                No vehicles found
              </h2>

              <p className="mt-2 text-[var(--color-text-muted)]">
                Please try another vehicle category.
              </p>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
};

export default Cars;