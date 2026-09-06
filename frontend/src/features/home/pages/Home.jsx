import AboutPreview from '../ui/AboutPreview'
import ChooseUs from '../ui/ChooseUs'
import DestinationsPreview from '../ui/DestinationsPreview'
import FeaturedCars from '../ui/FeaturedCars'
import HeroSection from '../ui/HeroSection'
import HomeCTA from '../ui/HomeCTA'
import ServicesPreview from '../ui/ServicesPreview'

const Home = () => {
  return (
    <>
      <HeroSection />
      <ChooseUs />
      <DestinationsPreview />
      <FeaturedCars />
      <ServicesPreview />
      <AboutPreview />
      <HomeCTA />
    </>
  )
}

export default Home
