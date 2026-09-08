import rateLimit from "express-rate-limit";

export const enquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,

  message: {
    success: false,
    message: "Too many enquiries. Please try again later.",
  },

  standardHeaders: true,
  legacyHeaders: false,
});