import { useForm } from "react-hook-form";

const BookingForm = () => {
  const { register,handleSubmit,watch,
         formState: { errors },
    } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const today = new Date().toISOString().split("T")[0];

  const travelDate = watch("travelDate")

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8"
    >
      {/* Personal Details */}

      <div>
        <h2 className="font-heading text-2xl font-semibold text-[var(--color-secondary)]">
          Your Details
        </h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">

          {/* Full Name */}
          <div>
            <label className="text-sm font-semibold text-[var(--color-secondary)]">
              Full Name *
            </label>

            <input
              type="text"
              {...register("fullName", {
                required: "Full name is required",
              })}
              className="mt-2 w-full rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
              placeholder="Enter your full name"
            />

            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-semibold text-[var(--color-secondary)]">
              Phone Number *
            </label>

            <input
              type="tel"
              maxLength={10}
              inputMode="numeric"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
              className="mt-2 w-full rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
              placeholder="Enter your phone number"
            />

            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label className="text-sm font-semibold text-[var(--color-secondary)]">
              Email
            </label>

            <input
              type="email"
              {...register("email", {
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email address",
                },
              })}
              className="mt-2 w-full rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
              placeholder="Enter your email address"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Journey Details */}

      <div className="mt-10 border-t border-[var(--color-border)] pt-8">
        <h2 className="font-heading text-2xl font-semibold text-[var(--color-secondary)]">
          Journey Details
        </h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">

          {/* Service */}
          <div>
            <label className="text-sm font-semibold text-[var(--color-secondary)]">
              Service *
            </label>

            <select
              {...register("service", {
                required: "Please select a service",
              })}
              className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 outline-none focus:border-[var(--color-primary)]"
            >
              <option value="">Select a service</option>
              <option value="Car Rental">Car Rental</option>
              <option value="Local Taxi">Local Taxi</option>
              <option value="Sightseeing">Sightseeing</option>
              <option value="Outstation Taxi">Outstation Taxi</option>
            </select>

            {errors.service && (
              <p className="mt-1 text-sm text-red-600">
                {errors.service.message}
              </p>
            )}
          </div>

          {/* Vehicle */}
          <div>
            <label className="text-sm font-semibold text-[var(--color-secondary)]">
              Preferred Vehicle
            </label>

            <select
              {...register("vehicle")}
              className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 outline-none focus:border-[var(--color-primary)]"
            >
              <option value="">Any vehicle</option>
              <option value="Toyota Innova Crysta">
                Toyota Innova Crysta
              </option>
              <option value="Maruti Ertiga">
                Maruti Ertiga
              </option>
            </select>
          </div>

          {/* Pickup */}
          <div>
            <label className="text-sm font-semibold text-[var(--color-secondary)]">
              Pickup Location *
            </label>

            <input
              type="text"
              {...register("pickupLocation", {
                required: "Pickup location is required",
              })}
              className="mt-2 w-full rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none focus:border-[var(--color-primary)]"
              placeholder="e.g. Manali Bus Stand"
            />

            {errors.pickupLocation && (
              <p className="mt-1 text-sm text-red-600">
                {errors.pickupLocation.message}
              </p>
            )}
          </div>

          {/* Destination */}
          <div>
            <label className="text-sm font-semibold text-[var(--color-secondary)]">
              Destination *
            </label>

            <input
              type="text"
              {...register("destination", {
                required: "Destination is required",
              })}
              className="mt-2 w-full rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none focus:border-[var(--color-primary)]"
              placeholder="e.g. Solang Valley"
            />

            {errors.destination && (
              <p className="mt-1 text-sm text-red-600">
                {errors.destination.message}
              </p>
            )}
          </div>

          {/* Travel Date */}
          <div>
            <label className="text-sm font-semibold text-[var(--color-secondary)]">
              Travel Date *
            </label>

            <input
              type="date"
              min={today}
              {...register("travelDate", {
                required: "Travel date is required",
              })}
              className="mt-2 w-full rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none focus:border-[var(--color-primary)]"
            />

            {errors.travelDate && (
              <p className="mt-1 text-sm text-red-600">
                {errors.travelDate.message}
              </p>
            )}
          </div>

          {/* Return Date */}
          <div>
            <label className="text-sm font-semibold text-[var(--color-secondary)]">
              Return Date
            </label>

           <input
              type="date"
              min={travelDate || today}
              {...register("returnDate", {
              validate: (value) => {
            if (!value) return true;

      if (travelDate && value < travelDate) {
        return "Return date cannot be before travel date";
          }

      return true;
    },
  })}
  className="mt-2 w-full rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
/>
          </div>

          {/* Passengers */}
          <div className="sm:col-span-2">
            <label className="text-sm font-semibold text-[var(--color-secondary)]">
              Number of Passengers *
            </label>

            <input
              type="number"
              min="1"
              max="20"
              {...register("passengers", {
                required: "Number of passengers is required",
                min: {
                  value: 1,
                  message: "At least 1 passenger is required",
                },
                max: {
                  value: 1,
                  message : "Atleast 20 passesnger is allowed"
                }
              })}
              className="mt-2 w-full rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
              placeholder="Enter number of passengers"
            />

            {errors.passengers && (
              <p className="mt-1 text-sm text-red-600">
                {errors.passengers.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="text-sm font-semibold text-[var(--color-secondary)]">
              Additional Message
            </label>

            <textarea
              rows="5"
              maxLength={500}
              {...register("message")}
              className="mt-2 w-full resize-none rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
              placeholder="Tell us anything else about your journey..."
            />
          </div>
        </div>
      </div>

      {/* Submit */}

      <div className="mt-8 border-t border-[var(--color-border)] pt-6">
        <button
          type="submit"
          className="w-full rounded-full bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
        >
          Send Enquiry
        </button>

        <p className="mt-3 text-center text-xs text-[var(--color-text-muted)]">
          Our team will contact you shortly after receiving your enquiry.
        </p>
      </div>
    </form>
  );
};

export default BookingForm;