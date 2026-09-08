import { body } from "express-validator";

export const enquiryValidationRules = [
  body("fullName")
    .trim()
    .notEmpty()
    .withMessage("Full name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Full name must be between 2 and 100 characters"),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .matches(/^[6-9]\d{9}$/)
    .withMessage("Enter a valid 10-digit Indian phone number"),

  body("email")
    .optional({ values: "falsy" })
    .trim()
    .isEmail()
    .withMessage("Enter a valid email address"),

  body("service")
    .notEmpty()
    .withMessage("Service is required")
    .isIn([
      "Car Rental",
      "Local Taxi",
      "Sightseeing",
      "Outstation Taxi",
    ])
    .withMessage("Invalid service selected"),

  body("vehicle")
    .optional({ values: "falsy" })
    .trim(),

  body("pickupLocation")
    .trim()
    .notEmpty()
    .withMessage("Pickup location is required")
    .isLength({ max: 200 })
    .withMessage("Pickup location is too long"),

  body("destination")
    .trim()
    .notEmpty()
    .withMessage("Destination is required")
    .isLength({ max: 200 })
    .withMessage("Destination is too long"),

  body("travelDate")
  .notEmpty()
  .withMessage("Travel date is required")
  .isISO8601()
  .withMessage("Enter a valid travel date")
  .custom((travelDate) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(travelDate);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      throw new Error("Travel date cannot be in the past");
    }

    return true;
  }),  

  body("returnDate")
  .optional({ values: "falsy" })
  .isISO8601()
  .withMessage("Enter a valid return date")
  .custom((returnDate, { req }) => {
    if (
      req.body.travelDate &&
      returnDate < req.body.travelDate
    ) {
      throw new Error(
        "Return date cannot be before travel date"
      );
    }

    return true;
  }),

  body("passengers")
    .notEmpty()
    .withMessage("Number of passengers is required")
    .isInt({ min: 1, max: 20 })
    .withMessage("Passengers must be between 1 and 20"),

  body("message")
    .optional({ values: "falsy" })
    .trim()
    .isLength({ max: 500 })
    .withMessage("Message cannot exceed 500 characters"),
];