import { useForm } from "react-hook-form";
import useCars from "../../cars/hooks/useCars.js";
import { submitEnquiry } from "../api/bookingApi.js";
import { useState } from "react";
import BookingSuccess from "./BookingSuccess.jsx";

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { cars, loading: carsLoading } = useCars();

  const travelDate = watch("travelDate");

  const today = new Date().toISOString().split("T")[0];

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      setSubmitError("");
      setIsSuccess(false);

      await submitEnquiry(data);

      setSubmittedEnquiry(data);
      setIsSuccess(true);

      reset();
    } catch (error) {
      setSubmitError(
        error.message || "Unable to submit enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return <BookingSuccess enquiry={submittedEnquiry} />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8"
    >
      {/* Error Message */}

      {submitError && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </div>
      )}

      {/* Customer Details */}

      <div>
        <h2 className="font-heading text-2xl font-semibold text-[var(--color-secondary)]">
          Customer Details
        </h2>

        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
          Please provide your contact information.
        </p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {/* Full Name */}

        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-medium text-[var(--color-secondary)]"
          >
            Full Name <span className="text-red-500">*</span>
          </label>

          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            {...register("fullName", {
              required: "Full name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
              maxLength: {
                value: 100,
                message: "Name cannot exceed 100 characters",
              },
            })}
            className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
          />

          {errors.fullName && (
            <p className="mt-1 text-xs text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Phone */}

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-[var(--color-secondary)]"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>

          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            placeholder="9876543210"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Enter a valid 10-digit Indian phone number",
              },
            })}
            className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
          />

          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Email */}

        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-[var(--color-secondary)]"
          >
            Email Address
            <span className="ml-1 text-xs font-normal text-[var(--color-text-muted)]">
              (Optional)
            </span>
          </label>

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register("email", {
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email address",
              },
            })}
            className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
          />

          {errors.email && (
            <p className="mt-1 text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Journey Details */}

      <div className="mt-10 border-t border-[var(--color-border)] pt-8">
        <h2 className="font-heading text-2xl font-semibold text-[var(--color-secondary)]">
          Journey Details
        </h2>

        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
          Tell us about your travel plans.
        </p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {/* Service */}

        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-[var(--color-secondary)]"
          >
            Service <span className="text-red-500">*</span>
          </label>

          <select
            id="service"
            {...register("service", {
              required: "Please select a service",
            })}
            className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
          >
            <option value="">Select a service</option>
            <option value="Car Rental">Car Rental</option>
            <option value="Local Taxi">Local Taxi</option>
            <option value="Sightseeing">Sightseeing</option>
            <option value="Outstation Taxi">Outstation Taxi</option>
          </select>

          {errors.service && (
            <p className="mt-1 text-xs text-red-500">
              {errors.service.message}
            </p>
          )}
        </div>

        {/* Vehicle */}

        <div>
          <label
            htmlFor="vehicle"
            className="mb-2 block text-sm font-medium text-[var(--color-secondary)]"
          >
            Preferred Vehicle
            <span className="ml-1 text-xs font-normal text-[var(--color-text-muted)]">
              (Optional)
            </span>
          </label>

          <select
            id="vehicle"
            disabled={carsLoading}
            {...register("vehicle")}
            className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 disabled:cursor-not-allowed disabled:bg-gray-100"
          >
            <option value="">
              {carsLoading ? "Loading vehicles..." : "Any vehicle"}
            </option>

            {!carsLoading &&
              cars.map((car) => (
                <option key={car.id} value={car.title}>
                  {car.title}
                </option>
              ))}
          </select>
        </div>

        {/* Pickup Location */}

        <div>
          <label
            htmlFor="pickupLocation"
            className="mb-2 block text-sm font-medium text-[var(--color-secondary)]"
          >
            Pickup Location <span className="text-red-500">*</span>
          </label>

          <input
            id="pickupLocation"
            type="text"
            placeholder="e.g. Manali Bus Stand"
            {...register("pickupLocation", {
              required: "Pickup location is required",
              maxLength: {
                value: 200,
                message: "Pickup location is too long",
              },
            })}
            className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
          />

          {errors.pickupLocation && (
            <p className="mt-1 text-xs text-red-500">
              {errors.pickupLocation.message}
            </p>
          )}
        </div>

        {/* Destination */}

        <div>
          <label
            htmlFor="destination"
            className="mb-2 block text-sm font-medium text-[var(--color-secondary)]"
          >
            Destination <span className="text-red-500">*</span>
          </label>

          <input
            id="destination"
            type="text"
            placeholder="e.g. Solang Valley"
            {...register("destination", {
              required: "Destination is required",
              maxLength: {
                value: 200,
                message: "Destination is too long",
              },
            })}
            className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
          />

          {errors.destination && (
            <p className="mt-1 text-xs text-red-500">
              {errors.destination.message}
            </p>
          )}
        </div>

        {/* Travel Date */}

        <div>
          <label
            htmlFor="travelDate"
            className="mb-2 block text-sm font-medium text-[var(--color-secondary)]"
          >
            Travel Date <span className="text-red-500">*</span>
          </label>

          <input
            id="travelDate"
            type="date"
            min={today}
            {...register("travelDate", {
              required: "Travel date is required",
            })}
            className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
          />

          {errors.travelDate && (
            <p className="mt-1 text-xs text-red-500">
              {errors.travelDate.message}
            </p>
          )}
        </div>

        {/* Return Date */}

        <div>
          <label
            htmlFor="returnDate"
            className="mb-2 block text-sm font-medium text-[var(--color-secondary)]"
          >
            Return Date <span className="text-red-500">*</span>
            <span className="ml-1 text-xs font-normal text-[var(--color-text-muted)]">
              
            </span>
          </label>

          <input
            id="returnDate"
            type="date"
            min={travelDate || today}
            {...register("returnDate", {
               required: "Return date is required",
               
              validate: (value) => {
                if (!value || !travelDate) return true;

                if (value < travelDate) {
                  return "Return date cannot be before travel date";
                }

                return true;
              },
            })}
            className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
          />

          {errors.returnDate && (
            <p className="mt-1 text-xs text-red-500">
              {errors.returnDate.message}
            </p>
          )}
        </div>

        {/* Passengers */}

        <div>
          <label
            htmlFor="passengers"
            className="mb-2 block text-sm font-medium text-[var(--color-secondary)]"
          >
            Passengers <span className="text-red-500">*</span>
          </label>

          <input
            id="passengers"
            type="number"
            min="1"
            max="20"
            placeholder="Number of passengers"
            {...register("passengers", {
              required: "Number of passengers is required",
              valueAsNumber: true,
              min: {
                value: 1,
                message: "At least 1 passenger is required",
              },
              max: {
                value: 20,
                message: "Maximum 20 passengers allowed",
              },
            })}
            className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
          />

          {errors.passengers && (
            <p className="mt-1 text-xs text-red-500">
              {errors.passengers.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}

      <div className="mt-6">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-[var(--color-secondary)]"
        >
          Additional Message
          <span className="ml-1 text-xs font-normal text-[var(--color-text-muted)]">
            (Optional)
          </span>
        </label>

        <textarea
          id="message"
          rows="5"
          maxLength="500"
          placeholder="Tell us anything else about your journey..."
          {...register("message", {
            maxLength: {
              value: 500,
              message: "Message cannot exceed 500 characters",
            },
          })}
          className="w-full resize-none rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
        />

        {errors.message && (
          <p className="mt-1 text-xs text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending Enquiry..." : "Send Enquiry"}
        </button>
      </div>

      <p className="mt-4 text-center text-xs leading-5 text-[var(--color-text-muted)]">
        Your enquiry will be sent to our team. We do not store your booking
        details on this website.
      </p>
    </form>
  );
};


export default BookingForm;