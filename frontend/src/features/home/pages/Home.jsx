import AboutPreview from '../ui/AboutPreview'
import ChooseUs from '../ui/ChooseUs'
import DestinationsPreview from '../ui/DestinationsPreview'
import FeaturedCars from '../ui/FeaturedCars'
import HeroSection from '../ui/Herosection'
import HomeCTA from '../ui/HomeCTA'
import ServicesPreview from '../ui/ServicesPreview'

const Home = () => {
  return (
    <>
      <HeroSection />
      <DestinationsPreview />
      <FeaturedCars />
      <ServicesPreview />
      <ChooseUs />
      <AboutPreview />
      <HomeCTA />
    </>
  )
}

export default Home
