
const services = [
  {
    id: "car-rental",
    title: "Car Rental",
    image: "../images/services/car rental.webp",
    description:
      "Rent comfortable cars for exploring Manali and nearby destinations.",
  },
  {
    id: "local-taxi",
    title: "Local Taxi",
    image: "../images/services/local taxi.webp",
    description:
      "Reliable taxi services for local travel around Manali.",
  },
  {
    id: "sightseeing",
    title: "Sightseeing",
    image: "../images/destinations/sightseeing.webp",
    description:
      "Explore popular tourist destinations with comfortable transportation.",
  },
  {
    id: "outstation",
    title: "Outstation Taxi",
    image: "../images/services/oustation.webp",
    description:
      "Travel from Manali to nearby destinations with our outstation services.",
  },
];

export const getService = async () => {
  return services;
};