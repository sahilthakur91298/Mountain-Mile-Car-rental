import { sendEnquiryEmail } from "./emailService.js";

export const processEnquiry = async (enquiry) => {
  const emailResult = await sendEnquiryEmail(enquiry);

  return {
    received: true,
  };
};