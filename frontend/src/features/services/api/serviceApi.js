
const services = [
  {
    id: "car-rental",
    title: "Car Rental",
    description:
      "Rent comfortable cars for exploring Manali and nearby destinations.",
  },
  {
    id: "local-taxi",
    title: "Local Taxi",
    description:
      "Reliable taxi services for local travel around Manali.",
  },
  {
    id: "sightseeing",
    title: "Sightseeing",
    description:
      "Explore popular tourist destinations with comfortable transportation.",
  },
  {
    id: "outstation",
    title: "Outstation Taxi",
    description:
      "Travel from Manali to nearby destinations with our outstation services.",
  },
];

export const getServices = async () => {
  return services;
};