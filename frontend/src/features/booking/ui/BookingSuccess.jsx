import { siteConfig } from "../../../config/siteConfig";
import { createWhatsAppLink } from "../../../shared/utils/whatsapp";

const BookingSuccess = ({ enquiry }) => {
  const whatsappMessage = `Hello The Mountain Mile,

I have submitted a booking enquiry.

Name: ${enquiry.fullName}
Phone: ${enquiry.phone}
Service: ${enquiry.service}
Vehicle: ${enquiry.vehicle || "Any vehicle"}

Pickup: ${enquiry.pickupLocation}
Destination: ${enquiry.destination}

Travel Date: ${enquiry.travelDate}
Passengers: ${enquiry.passengers}

Please confirm the availability and pricing.`;

  const whatsappLink = createWhatsAppLink(
    siteConfig.contact.whatsapp,
    whatsappMessage
  );

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white px-6 py-16 text-center shadow-sm">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)] text-2xl text-white">
        ✓
      </div>

      <h2 className="mt-6 font-heading text-3xl font-semibold text-[var(--color-secondary)]">
        Enquiry Sent Successfully
      </h2>

      <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[var(--color-text-muted)]">
        Thank you for contacting The Mountain Mile. Our team will
        get in touch with you shortly.
      </p>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
      >
        Continue on WhatsApp
      </a>
    </div>
  );
};

export default BookingSuccess;