import { env } from "../../../config/env.js";

const API_URL = env.apiUrl

export const submitEnquiry = async (enquiryData) => {
  const response = await fetch(`${API_URL}/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(enquiryData),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to submit enquiry");
  }

  return result;
};