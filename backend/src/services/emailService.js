import { Resend } from "resend";
import { escapeHtml } from "../utils/escapeHtml.js";
import { env } from "../config/env.js";

const resend = new Resend(env.resendApiKey);

export const sendEnquiryEmail = async (enquiry) => {
  const { fullName, phone, email, service, vehicle, pickupLocation, destination, travelDate, returnDate, passengers, message, } = enquiry;

const safe = { fullName: escapeHtml(fullName), phone: escapeHtml(phone), email: escapeHtml(email || "Not provided"), service: escapeHtml(service), vehicle: escapeHtml(vehicle || "Any vehicle"), pickupLocation: escapeHtml(pickupLocation), destination: escapeHtml(destination), travelDate: escapeHtml(travelDate), returnDate: escapeHtml(returnDate || "Not provided"), passengers: escapeHtml(passengers), message: escapeHtml(message || "No additional message"),
  };

const { data, error } = await resend.emails.send({
    from: env.emailFrom,
    to: [env.enquiryEmail],
    subject: `New Enquiry - ${safe.fullName}`,

    html: `
      <!DOCTYPE html>
      <html>
        <body style="margin:0; padding:0; background:#f5f5f5; font-family:Arial,sans-serif;">
          
          <div style="max-width:650px; margin:40px auto; background:#ffffff; border-radius:12px; overflow:hidden;">
            
            <div style="background:#1f4d3a; padding:24px;">
              <h1 style="margin:0; color:#ffffff; font-size:24px;">
                The Mountain Mile
              </h1>

              <p style="margin:6px 0 0; color:#d9e7df;">
                New Customer Enquiry
              </p>
            </div>

            <div style="padding:28px;">
              
              <h2 style="color:#1f2933; font-size:20px;">
                Customer Details
              </h2>

              <p>
                <strong>Name:</strong> ${safe.fullName}
              </p>

              <p>
                <strong>Phone:</strong> ${safe.phone}
              </p>

              <p>
                <strong>Email:</strong> ${safe.email}
              </p>

              <hr style="border:none; border-top:1px solid #e5e1d8; margin:24px 0;" />

              <h2 style="color:#1f2933; font-size:20px;">
                Journey Details
              </h2>

              <p>
                <strong>Service:</strong> ${safe.service}
              </p>

              <p>
                <strong>Vehicle:</strong> ${safe.vehicle}
              </p>

              <p>
                <strong>Pickup:</strong> ${safe.pickupLocation}
              </p>

              <p>
                <strong>Destination:</strong> ${safe.destination}
              </p>

              <p>
                <strong>Travel Date:</strong> ${safe.travelDate}
              </p>

              <p>
                <strong>Return Date:</strong> ${safe.returnDate}
              </p>

              <p>
                <strong>Passengers:</strong> ${safe.passengers}
              </p>

              <hr style="border:none; border-top:1px solid #e5e1d8; margin:24px 0;" />

              <h2 style="color:#1f2933; font-size:20px;">
                Customer Message
              </h2>

              <p style="line-height:1.6; color:#667085;">
                ${safe.message}
              </p>

            </div>

            <div style="background:#f8f6f1; padding:18px 28px;">
              <p style="margin:0; color:#667085; font-size:13px;">
                This enquiry was submitted through The Mountain Mile website.
              </p>
            </div>

          </div>

        </body>
      </html>
    `,
  });

  if (error) {
    throw new Error("Email sending failed");
  }

  return data;
};