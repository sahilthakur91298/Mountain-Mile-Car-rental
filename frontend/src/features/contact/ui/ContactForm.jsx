import { useForm } from "react-hook-form";
import { siteConfig } from "../../../config/siteConfig";
import {
  createWhatsAppLink,
  createContactWhatsAppMessage,
} from "../../../shared/utils/whatsapp";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const message = createContactWhatsAppMessage(data);

    const whatsappUrl = createWhatsAppLink(
      siteConfig.contact.whatsapp,
      message
    );

    window.open(whatsappUrl, "_blank");

    reset();
  };

  return (
    <section className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          Get In Touch
        </p>

        <h2 className="mt-2 font-heading text-3xl font-semibold text-[var(--color-secondary)]">
          Send Us a Message
        </h2>

        <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
          Have a question or need help planning your journey? Send us a
          message on WhatsApp and our team will get back to you.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-[var(--color-secondary)]"
          >
            Full Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
          />

          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-[var(--color-secondary)]"
          >
            Phone Number
          </label>

          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Enter a valid 10-digit Indian phone number",
              },
            })}
            className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
          />

          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-[var(--color-secondary)]"
          >
            Email
            <span className="ml-1 text-xs font-normal text-gray-400">
              (Optional)
            </span>
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
          />

          {errors.email && (
            <p className="mt-1.5 text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-[var(--color-secondary)]"
          >
            Message
          </label>

          <textarea
            id="message"
            rows={5}
            placeholder="How can we help you?"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 5,
                message: "Message must be at least 5 characters",
              },
              maxLength: {
                value: 500,
                message: "Message cannot exceed 500 characters",
              },
            })}
            className="w-full resize-none rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
          />

          {errors.message && (
            <p className="mt-1.5 text-xs text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-xl bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30"
        >
          Continue to WhatsApp
        </button>

        <p className="text-center text-xs leading-5 text-[var(--color-text-muted)]">
          You will be redirected to WhatsApp with your message pre-filled.
        </p>
      </form>
    </section>
  );
};

export default ContactForm;