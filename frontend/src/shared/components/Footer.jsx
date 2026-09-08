import { Link } from "react-router";
import { siteConfig } from "../../config/siteConfig";

const Footer = () => {
  const { phone, whatsapp, email } = siteConfig.contact;

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-secondary)] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
               <div>
              <h1 className="text-white text-xl font-bold tracking-wide text-[var(--color-primary)]">
                The Mountain Mile
              </h1>

              <p className=" text-[10px] uppercase tracking-[0.2em] text-white-500 sm:flex">
                Car Rental & Taxi Service
              </p>
            </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/70">
              Reliable car rental and taxi services in Manali for local
              sightseeing, mountain travel and outstation journeys.
            </p>

            <Link
              to="/booking"
              className="mt-6 inline-flex rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Send an Enquiry
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-heading text-lg font-semibold">
              Quick Links
            </h2>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-white/70 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/cars"
                className="text-sm text-white/70 transition hover:text-white"
              >
                Cars
              </Link>

              <Link
                to="/services"
                className="text-sm text-white/70 transition hover:text-white"
              >
                Services
              </Link>

              <Link
                to="/destinations"
                className="text-sm text-white/70 transition hover:text-white"
              >
                Destinations
              </Link>

              <Link
                to="/about"
                className="text-sm text-white/70 transition hover:text-white"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="text-sm text-white/70 transition hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-heading text-lg font-semibold">
              Contact
            </h2>

            <div className="mt-5 space-y-4">
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="block text-sm text-white/70 transition hover:text-white"
                >
                  <span className="block text-xs uppercase tracking-wide text-white/40">
                    Phone
                  </span>

                  <span className="mt-1 block">
                    {phone}
                  </span>
                </a>
              )}

              {whatsapp && (
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white/70 transition hover:text-white"
                >
                  <span className="block text-xs uppercase tracking-wide text-white/40">
                    WhatsApp
                  </span>

                  <span className="mt-1 block">
                    Chat with us
                  </span>
                </a>
              )}

              {email && (
                <a
                  href={`mailto:${email}`}
                  className="block break-all text-sm text-white/70 transition hover:text-white"
                >
                  <span className="block text-xs uppercase tracking-wide text-white/40">
                    Email
                  </span>

                  <span className="mt-1 block">
                    {email}
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>

          <p>
            Car Rental & Taxi Service in Manali
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;