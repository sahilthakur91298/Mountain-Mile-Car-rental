import SEO from '../../../shared/components/SEO'
import { siteConfig } from '../../../config/siteConfig'
import ContactHero from '../ui/ContactHero'
import ContactInfo from '../ui/ContactInfo'
import ContactForm from '../ui/ContactForm'
import Map from '../ui/Map'

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact The Mountain Mile"
        description="Contact The Mountain Mile for car rental, taxi, sightseeing and outstation travel services in Manali."
        canonical={`${siteConfig.url}/contact`}
      />
      <main>
        <ContactHero />

        <section className="bg-[var(--color-background)] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
            <ContactInfo />
            <ContactForm />
          </div>
        </section>

        <Map />
      </main>
    </>
  )
}

export default Contact
