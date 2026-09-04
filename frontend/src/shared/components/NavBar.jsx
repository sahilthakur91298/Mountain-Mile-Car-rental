import { useState } from "react";
import { NavLink } from "react-router";
import Container from "./Container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/cars" },
    { name: "Services", path: "/services" },
    { name: "Destinations", path: "/destinations" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container>
        <nav className="flex h-20 items-center justify-between">

          {/* Logo */}
          <NavLink to="/" onClick={closeMenu}>
            <div>
              <h1 className="font-[var(--font-heading)] text-xl font-bold tracking-wide text-[var(--color-primary)]">
                The Mountain Mile
              </h1>

              <p className="hidden text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] sm:block">
                Car Rental & Taxi Service
              </p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text)] hover:text-[var(--color-primary)]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <NavLink
              to="/booking"
              className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
            >
              Enquire Now
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 text-[var(--color-text)] lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <span className="text-2xl">×</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-[var(--color-border)] py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium ${
                      isActive
                        ? "bg-[var(--color-background)] text-[var(--color-primary)]"
                        : "text-[var(--color-text)]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <NavLink
                to="/booking"
                onClick={closeMenu}
                className="mt-2 rounded-full bg-[var(--color-primary)] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Enquire Now
              </NavLink>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;