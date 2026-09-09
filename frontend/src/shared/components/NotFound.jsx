import { Link } from "react-router";
import Container from "./Container";

const NotFound = () => {
  return (
    <>
    <SEO
      title="Page Not Found"
      description="The page you are looking for could not be found."
      noIndex
    />
    <main className="flex min-h-[70vh] items-center bg-[var(--color-background)] py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-8xl font-semibold text-[var(--color-primary)] sm:text-9xl">
            404
          </p>

          <h1 className="mt-4 font-heading text-3xl font-semibold text-[var(--color-secondary)] sm:text-4xl">
            Page Not Found
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[var(--color-text-muted)] sm:text-base">
            Sorry, the page you are looking for doesn&apos;t exist or may
            have been moved.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)] hover:shadow-lg"
            >
              Back to Home
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-secondary)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </main>
    </>
  );
};

export default NotFound;