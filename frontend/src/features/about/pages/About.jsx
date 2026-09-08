import SEO from '../../../shared/components/SEO'
import { siteConfig } from '../../../config/siteConfig'
import AboutHero from '../ui/AboutHero'
import AboutStory from '../ui/AboutStory'
import AboutValues from '../ui/AboutValues'
import AboutCTA from '../ui/AboutCTA'

const About = () => {
  return (
    <>
      <SEO
        title="About The Mountain Mile"
        description="Learn more about The Mountain Mile, a local car rental and taxi service helping travelers explore Manali and nearby destinations."
        canonical={`${siteConfig.url}/about`}
      />
    <main >
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutCTA />
    </main>

    </>
  )
}

export default About
