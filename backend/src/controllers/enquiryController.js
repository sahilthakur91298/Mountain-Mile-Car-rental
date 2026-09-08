import { processEnquiry } from "../services/enquiryService.js";

export const createEnquiry = async (req, res, next) => {
  try {
    const enquiry = {
      fullName: req.body.fullName,
      phone: req.body.phone,
      email: req.body.email,
      service: req.body.service,
      vehicle: req.body.vehicle,
      pickupLocation: req.body.pickupLocation,
      destination: req.body.destination,
      travelDate: req.body.travelDate,
      returnDate: req.body.returnDate,
      passengers: req.body.passengers,
      message: req.body.message,
    };

    const result = await processEnquiry(enquiry);

    res.status(200).json({
      success: true,
      message: "Enquiry sent successfully",
    });
  } catch (error) {
    next(error);
  }
};