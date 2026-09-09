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
    image: "../images/destinations/ataltunnel.webp",
    description: "One of the major attractions and gateways beyond Manali.",
  },
  {
    id: "rohtang-pass",
    name: "Rohtang Pass",
    image: "../images/destinations/rohtangpass.webp",
    description: "A spectacular high-altitude mountain destination.",
  },
  {
    id: "kasol",
    name: "Kasol",
    image: "../images/destinations/kasol.webp",
    description: "A scenic destination in the Parvati Valley.",
  },
  {
  id: "hadimba-temple",
  name: "Hadimba Temple",
  image: "../images/destinations/hadimbaMata.webp",
  description: "A historic temple surrounded by beautiful cedar forests in Manali."
},

{
  id: "sissu",
  name: "Sissu",
  image: "../images/destinations/sissu.webp",
  description: "A picturesque village in Lahaul known for its waterfalls, mountains and scenic landscapes."
},

{
  id: "baralacha-la",
  name: "Baralacha La",
  image: "../images/destinations/baralachaPass.webp",
  description: "A spectacular high-altitude mountain pass connecting Lahaul with the Zanskar region."
},

{
  id: "leh-ladakh",
  name: "Leh & Ladakh",
  image: "../images/destinations/leh.webp",
  description: "A breathtaking Himalayan destination known for rugged mountains, monasteries and scenic roads."
},

{
  id: "chandratal-lake",
  name: "Chandratal Lake",
  image: "../images/destinations/chandratalLake.webp",
  description: "A stunning high-altitude lake in Spiti Valley surrounded by dramatic Himalayan landscapes."
},

{
  id: "spiti",
  name: "Spiti",
  image: "../images/destinations/spiti.webp",
  description: "A remote Himalayan valley known for its breathtaking landscapes, ancient monasteries and mountain villages."
},
{
  id: "hampta-pass",
  name: "Hampta Pass",
  image: "/images/destinations/hamptaPass.webp",
  description: "A spectacular Himalayan pass known for dramatic landscapes, valleys and adventurous trekking trails."
},

{
  id: "jibhi",
  name: "Jibhi",
  image: "/images/destinations/jibhi.webp",
  description: "A peaceful Himalayan village known for lush forests, waterfalls and charming mountain surroundings."
},
];

export const getDestinations = async () => {
  return destinations;
};