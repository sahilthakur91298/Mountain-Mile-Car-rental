const destinations = [
  {
    id: "solang-valley",
    name: "Solang Valley",
    image: "../images/destinations/solangvalley.webp",
    description: "A popular destination known for mountain views and adventure activities.",
  },
  {
    id: "atal-tunnel",
    name: "Atal Tunnel",
    image: "../images/destinations/ataltunnel.jpg",
    description: "One of the major attractions and gateways beyond Manali.",
  },
  {
    id: "rohtang-pass",
    name: "Rohtang Pass",
    image: "../images/destinations/rohtangpass.jpg",
    description: "A spectacular high-altitude mountain destination.",
  },
  {
    id: "kasol",
    name: "Kasol",
    image: "../images/destinations/kasol.jpg",
    description: "A scenic destination in the Parvati Valley.",
  },
];

export const getDestinations = async () => {
  return destinations;
};