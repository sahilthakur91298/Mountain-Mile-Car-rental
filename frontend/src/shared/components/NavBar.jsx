import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";

const navigation = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Cars",
    path: "/cars",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Destinations",
    path: "/destinations",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-lg shadow-black/5"
        : "bg-white/80 backdrop-blur-md border-b border-[var(--color-border)] shadow-sm"
    }`}>
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="shrink-0 transition-transform duration-300 hover:scale-105"
        >
          <img
            src="../images/logo/logo.webp"
            alt="The Mountain Mile"
            className="h-18 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[var(--color-primary)] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-[var(--color-primary)] after:transition-all"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-primary)] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-[var(--color-primary)] hover:after:w-full after:transition-all after:duration-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/booking"
          className="hidden rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--color-primary-dark)] hover:shadow-lg hover:-translate-y-0.5 lg:inline-flex"
        >
          Send Enquiry
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-secondary)] transition hover:bg-[var(--color-background)] lg:hidden"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-20 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`absolute left-0 top-20 w-full border-t border-[var(--color-border)] bg-white/95 backdrop-blur-md shadow-xl transition-all duration-300 ease-in-out lg:hidden z-50 ${
          isMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-4 opacity-0 invisible"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6">
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                      : "text-[var(--color-text)] hover:bg-[var(--color-background)] hover:text-[var(--color-primary)]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/booking"
              onClick={closeMenu}
              className="mt-4 rounded-xl bg-[var(--color-primary)] px-5 py-3.5 text-center text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-[var(--color-primary-dark)] hover:shadow-lg active:scale-95"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;