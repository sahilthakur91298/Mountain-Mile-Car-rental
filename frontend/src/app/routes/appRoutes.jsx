import {createBrowserRouter} from "react-router"
import MainLayout from "../layout/MainLayout"
import Cars from "../../features/cars/pages/Cars"
import Booking from "../../features/booking/pages/Booking"
import Contact from "../../features/contact/pages/Contact"
import Destination from "../../features/destinations/pages/Destination"
import Services from "../../features/services/pages/Services"
import Home from "../../features/home/pages/Home"
import About from "../../features/about/pages/About"
import NotFound from "../../shared/components/NotFound"


const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "cars",
                    element: <Cars />
                },
                {
                    path: "about",
                    element: <About />
                },
                {
                    path: "booking",
                    element: <Booking />
                },
                {
                    path: "contact",
                    element: <Contact />
                },
                {
                    path: "destinations",
                    element: <Destination />
                },
                {
                    path: "services",
                    element: <Services />
                },
                {
                    path: "*",
                    element: <NotFound />,
                }
            ]
        }
    ])

export default router
