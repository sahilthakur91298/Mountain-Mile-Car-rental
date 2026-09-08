import dotenv from "dotenv";

dotenv.config();

const requiredEnvVariables = [
  "RESEND_API_KEY",
  "EMAIL_FROM",
  "ENQUIRY_EMAIL",
  "CLIENT_URL",
];

const missingVariables = requiredEnvVariables.filter(
  (variable) => !process.env[variable]
);

if (missingVariables.length > 0) {
  throw new Error(
    `Missing required environment variables: ${missingVariables.join(", ")}`
  );
}

export const env = {
  port: process.env.PORT || 5000,
  clientUrl: process.env.CLIENT_URL,
  resendApiKey: process.env.RESEND_API_KEY,
  emailFrom: process.env.EMAIL_FROM,
  enquiryEmail: process.env.ENQUIRY_EMAIL,
};