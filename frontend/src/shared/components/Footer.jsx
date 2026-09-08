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
            <h2 className="font-heading text-xl font-semibold text-white tracking-wide">
              Quick Links
            </h2>

            <nav className="mt-6 flex flex-col gap-4">
              {['Home', 'Cars', 'Services', 'Destinations', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="group flex items-center text-sm font-medium text-white/70 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  <span className="mr-2 h-1 w-1 rounded-full bg-[var(--color-accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-white tracking-wide">
              Contact
            </h2>

            <div className="mt-6 space-y-5">
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="group flex flex-col text-sm text-white/70 transition-all duration-300 hover:text-white hover:-translate-y-0.5"
                >
                  <span className="mb-1 text-xs uppercase tracking-wider text-[var(--color-accent-light)]">
                    Phone
                  </span>
                  <span className="font-medium">
                    {phone}
                  </span>
                </a>
              )}

              {whatsapp && (
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col text-sm text-white/70 transition-all duration-300 hover:text-white hover:-translate-y-0.5"
                >
                  <span className="mb-1 text-xs uppercase tracking-wider text-[var(--color-accent-light)]">
                    WhatsApp
                  </span>
                  <span className="font-medium">
                    Chat with us
                  </span>
                </a>
              )}

              {email && (
                <a
                  href={`mailto:${email}`}
                  className="group flex flex-col break-all text-sm text-white/70 transition-all duration-300 hover:text-white hover:-translate-y-0.5"
                >
                  <span className="mb-1 text-xs uppercase tracking-wider text-[var(--color-accent-light)]">
                    Email
                  </span>
                  <span className="font-medium">
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