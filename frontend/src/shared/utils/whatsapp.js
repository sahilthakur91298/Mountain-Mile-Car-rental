export const createWhatsAppLink = (phone, message) => {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

export const createEnquiryMessage = (enquiry) => {
  return `Hello The Mountain Mile,

New Customer Enquiry

Name: ${enquiry.fullName}
Phone: ${enquiry.phone}
Email: ${enquiry.email || "Not provided"}

Service: ${enquiry.service}
Vehicle: ${enquiry.vehicle || "Any vehicle"}

Pickup: ${enquiry.pickupLocation}
Destination: ${enquiry.destination}

Travel Date: ${enquiry.travelDate}
Return Date: ${enquiry.returnDate || "Not provided"}
Passengers: ${enquiry.passengers}

Message:
${enquiry.message || "No additional message"}

Thank you.`;
};

export const createContactWhatsAppMessage = (contactData) => {
  return `Hello The Mountain Mile,

New Contact Message

Name: ${contactData.name}
Phone: ${contactData.phone}
Email: ${contactData.email || "Not provided"}

Message:
${contactData.message}

Thank you.`;
};