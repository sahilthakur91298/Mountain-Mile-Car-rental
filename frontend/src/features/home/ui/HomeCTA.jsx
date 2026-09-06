import { Link } from "react-router";
import Container from "../../../shared/components/Container";
import { siteConfig } from "../../../config/siteConfig";


const HomeCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary)] py-24 text-white">
      {/* Decorative background */}
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/5" />
      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-black/10" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Plan Your Journey
          </p>

          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Ready For Your
            <span className="block text-white/70">
              Mountain Journey?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70">
            Tell us where you want to go and we’ll help you find the right
            car or taxi for your journey around Manali.
          </p>

          {/* Primary Actions */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/booking"
              className="inline-flex min-w-44 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Send An Enquiry
            </Link>

            {siteConfig.contact.phone && (
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex min-w-44 items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
              Call Us
              </a>
            )}
          </div>

          {/* WhatsApp */}
          {siteConfig.contact.whatsapp && (
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-sm font-medium text-white/60 transition hover:text-white"
            >
              Prefer WhatsApp? Chat With Us →
            </a>
          )}
        </div>
      </Container>
    </section>
  );
};

export default HomeCTA;