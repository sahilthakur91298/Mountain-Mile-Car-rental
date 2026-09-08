import AboutPreview from '../ui/AboutPreview'
import ChooseUs from '../ui/ChooseUs'
import DestinationsPreview from '../ui/DestinationsPreview'
import FeaturedCars from '../ui/FeaturedCars'
import HeroSection from '../ui/HeroSection'
import HomeCTA from '../ui/HomeCTA'
import ServicesPreview from '../ui/ServicesPreview'
import SEO from "../../../shared/components/SEO";
import { siteConfig } from "../../../config/siteConfig";

const Home = () => {
  return (
      <>
      <SEO
        title="Car Rental & Taxi Service in Manali"
        description="The Mountain Mile offers reliable car rental, local taxi, sightseeing and outstation taxi services in Manali and nearby destinations."
        canonical={`${siteConfig.url}/`}
      />
    <main>
      <HeroSection />
      <ChooseUs />
      <DestinationsPreview />
      <FeaturedCars />
      <ServicesPreview />
      <AboutPreview />
      <HomeCTA />
    </main>
    </>
  )
}

export default Home
