
const cars = [
    {
        id: 1,
        title: "Maruti Suzuki Jimny",
        type: "SUV",
        seats: 5,
        price: 5000,
        priceUnit: "per day",
        image: "../images/cars/jimny.jpg",
        description: "The Maruti Suzuki Jimny is a compact SUV that offers a perfect blend of style, performance, and off-road capability. With its rugged design and advanced features, it is a comfortable SUV suitable for family trips and mountain travel."

    },
    {
        id: 2,
        title: "Mahindra Thar",
        type: "SUV",
        seats: 5,
        price: 6000,
        priceUnit: "per day",
        image: "../images/cars/Thar.avif",
        description: "The Mahindra Thar is a robust SUV designed for off-road adventures. It combines durability with comfort, making it an excellent choice for those who love exploring rough terrains."

    },
    {
        id: 3,
        title: "Mahindra Thar Roxx",
        type: "SUV",
        seats: 5,
        price: 7000,
        priceUnit: "per day",
        image: "../images/cars/TharRoxx.jpg",
        description: "The Mahindra Thar Roxx is a premium version of the popular Thar, offering enhanced features and a more luxurious interior for a comfortable driving experience."
    },
    {
        id: 4,
        title: "Maruti Suzuki Alto",
        type: "Hatchback",
        seats: 5,
        price: 3000,
        priceUnit: "per day",
        image: "../images/cars/alto.webp",
        description: "The Maruti Suzuki Alto is a fuel-efficient hatchback perfect for city driving. It offers a comfortable ride and easy handling in congested traffic."
    },
    {
        id: 5,
        title: "Mahindra Scorpio",
        type: "SUV",
        seats: 7,
        price: 6000,
        priceUnit: "per day",
        image: "../images/cars/scorpio.jpg",
        description: "The Mahindra Scorpio is a spacious SUV ideal for family outings and long drives. It offers a comfortable ride and ample storage space for all your travel needs."
    },
    {
        id: 6,
        title: "Maruti Suzuki Ertiga",
        type: "MUV",
        seats: 5,
        price: 6000,
        priceUnit: "per day",
        image: "../images/cars/ertiga.jpg",
        description: "The Maruti Suzuki Ertiga is a fuel-efficient hatchback perfect for city driving. It offers a comfortable ride and easy handling in congested traffic."
    },
    {
        id: 7,
        title: "Toyota Fortuner",
        type: "SUV",
        seats: 5,
        price: 6000,
        priceUnit: "per day",
        image: "../images/cars/fortuner.webp",
        description: "The Toyota Fortuner is a powerful SUV designed for both on-road and off-road adventures. It offers a luxurious interior and advanced safety features for a premium driving experience."
    }
]

export const getCars = async ()=>{
    return cars
}
