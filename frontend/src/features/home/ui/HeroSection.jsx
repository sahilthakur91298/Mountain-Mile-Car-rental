import { Link } from "react-router";
import Container from "../../../shared/components/Container";
import { siteConfig } from "../../../config/siteConfig";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden ">
      
      {/* Background Image */}
      <img
        src="../images/hero/heromountain.jpg"
        alt="Mountain landscape in Manali"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/40 sm:to-transparent" />

      {/* Content */}
      <Container className="relative z-10 flex min-h-[calc(100vh-80px)] items-center">
        <div className="max-w-3xl py-20 text-white animate-fade-in-up">

          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/20">
            <span className="text-base leading-none">⛰️</span>
            <p className="text-xs font-medium tracking-wide text-white/90">
              Premium Car Rental in Manali
            </p>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Your Journey Through
            <span className="mt-2 block bg-gradient-to-r from-[var(--color-accent-light)] to-[var(--color-accent)] bg-clip-text text-transparent">
              The Mountains Starts Here.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg sm:leading-8">
            Experience comfortable cars, reliable local taxis, and memorable journeys
            across Manali and the majestic Himalayas.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">

            <Link
              to={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[var(--color-accent)]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[var(--color-accent)]/40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              Call Us
            </Link>

            <Link
              to="/booking"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              Enquire Now
            </Link>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;