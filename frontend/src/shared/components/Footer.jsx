import { NavLink } from "react-router";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-secondary)] text-white">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="font-[var(--font-heading)] text-2xl font-semibold">
              The Mountain Mile
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-300">
              Your trusted car rental and taxi service in Manali.
              Explore the mountains comfortably with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <NavLink to="/" className="hover:text-white">
                Home
              </NavLink>

              <NavLink to="/cars" className="hover:text-white">
                Cars
              </NavLink>

              <NavLink to="/services" className="hover:text-white">
                Services
              </NavLink>

              <NavLink to="/destinations" className="hover:text-white">
                Destinations
              </NavLink>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-gray-300">
              <p>Manali, Himachal Pradesh</p>

              <a
                href="tel:+910000000000"
                className="block hover:text-white"
              >
                +91 XXXXX XXXXX
              </a>

              <a
                href="mailto:info@example.com"
                className="block hover:text-white"
              >
                info@example.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-5 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} The Mountain Mile. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;