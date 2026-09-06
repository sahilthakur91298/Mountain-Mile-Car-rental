const cars = [
  {
    id: "maruti-jimny",
    title: "Maruti Suzuki Jimny",
    type: "SUV",
    specs: { 
      seats: 4, 
      transmission: ["Automatic", "Manual"], 
      fuel: ["Petrol"], 
      ac: true 
    },
    pricing: { amount: 5000, unit: "per day" },
    image: "/images/cars/jimny.jpg",
    description: "Compact and agile 4x4 SUV, perfect for off-road trails and mountain travel.",
    features: ["4x4 Capability", "Air Conditioning", "Compact Design"]
  },
  {
    id: "maruti-alto",
    title: "Maruti Suzuki Alto",
    type: "Hatchback",
    specs: { 
      seats: 5, 
      transmission: ["Manual"], 
      fuel: ["Petrol"], 
      ac: true 
    },
    pricing: { amount: 3000, unit: "per day" },
    image: "/images/cars/alto.webp",
    description: "A fuel-efficient hatchback with easy handling, ideal for city drives and short trips.",
    features: ["Fuel Efficient", "Air Conditioning", "Easy City Driving"]
  },
  {
    id: "mahindra-thar",
    title: "Mahindra Thar",
    type: "SUV",
    specs: { 
      seats: 4, 
      transmission: ["Automatic", "Manual"], 
      fuel: ["Petrol", "Diesel"], 
      ac: true 
    },
    pricing: { amount: 6000, unit: "per day" },
    image: "/images/cars/Thar.avif",
    description: "A robust 3-door SUV designed for pure off-road adventures and rugged mountain travel.",
    features: ["Off-Road Capability", "Air Conditioning", "4x4 Drivetrain"]
  },
  {
    id: "mahindra-thar-roxx",
    title: "Mahindra Thar Roxx",
    type: "SUV",
    specs: { 
      seats: 5, 
      transmission: ["Automatic", "Manual"], 
      fuel: ["Petrol", "Diesel"], 
      ac: true 
    },
    pricing: { amount: 7000, unit: "per day" },
    image: "/images/cars/TharRoxx.jpg",
    description: "A premium 5-door SUV with enhanced features and a refined interior for adventurous journeys.",
    features: ["Premium Interior", "Off-Road Capability", "Air Conditioning"]
  },
  {
    id: "mahindra-scorpio",
    title: "Mahindra Scorpio",
    type: "SUV",
    specs: { 
      seats: 7, 
      transmission: ["Automatic", "Manual"], 
      fuel: ["Diesel"], 
      ac: true 
    },
    pricing: { amount: 6000, unit: "per day" },
    image: "/images/cars/scorpio.jpg",
    description: "A spacious SUV ideal for family outings and long drives through the mountains.",
    features: ["7 Seats", "Ample Storage", "Air Conditioning"]
  },
  {
    id: "maruti-ertiga",
    title: "Maruti Suzuki Ertiga",
    type: "MUV",
    specs: { 
      seats: 7, 
      transmission: ["Automatic", "Manual"], 
      fuel: ["Petrol"], 
      ac: true 
    },
    pricing: { amount: 6000, unit: "per day" },
    image: "/images/cars/ertiga.jpg",
    description: "A practical and comfortable MUV with generous space for family journeys.",
    features: ["7 Seats", "Spacious Interior", "Air Conditioning"]
  },
  {
    id: "toyota-fortuner",
    title: "Toyota Fortuner",
    type: "SUV",
    specs: { 
      seats: 7, 
      transmission: ["Automatic", "Manual"], 
      fuel: ["Petrol", "Diesel"], 
      ac: true 
    },
    pricing: { amount: 6000, unit: "per day" },
    image: "/images/cars/fortuner.webp",
    description: "A powerful and luxurious SUV built for premium on-road and off-road travel.",
    features: ["7 Seats", "Premium Interior", "Advanced Safety Features"]
  }
];


export const getCars = async () => cars;
