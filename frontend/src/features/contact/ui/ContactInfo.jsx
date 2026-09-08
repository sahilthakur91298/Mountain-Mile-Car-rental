import { siteConfig } from "../../../config/siteConfig";

const ContactInfo = () => {
  const phone = siteConfig.contact.phone;
  const whatsapp = siteConfig.contact.whatsapp;
  const email = siteConfig.contact.email;

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
        Contact Us
      </p>

      <h2 className="mt-3 font-heading text-3xl font-semibold text-[var(--color-secondary)] sm:text-4xl">
        We&apos;re Here to Help
      </h2>

      <p className="mt-5 text-base leading-7 text-[var(--color-text-muted)]">
        Whether you need a car rental, local taxi, sightseeing service or
        outstation travel, get in touch with us and tell us what you need.
      </p>

      <div className="mt-8 space-y-5">
        {phone && (
          <a
            href={`tel:${phone}`}
            className="flex items-start gap-4 rounded-xl border border-[var(--color-border)] p-4 transition hover:shadow-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
              ☎
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                Phone
              </p>

              <p className="mt-1 text-sm font-semibold text-[var(--color-secondary)]">
                {phone}
              </p>
            </div>
          </a>
        )}

        {whatsapp && (
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 rounded-xl border border-[var(--color-border)] p-4 transition hover:shadow-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
              W
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                WhatsApp
              </p>

              <p className="mt-1 text-sm font-semibold text-[var(--color-secondary)]">
                Chat with us
              </p>
            </div>
          </a>
        )}

        {email && (
          <a
            href={`mailto:${email}`}
            className="flex items-start gap-4 rounded-xl border border-[var(--color-border)] p-4 transition hover:shadow-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
              @
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                Email
              </p>

              <p className="mt-1 break-all text-sm font-semibold text-[var(--color-secondary)]">
                {email}
              </p>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;