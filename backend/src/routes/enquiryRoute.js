import { Router } from "express";
import { createEnquiry } from "../controllers/enquiryController.js";
import { enquiryValidationRules } from "../validators/enquiryValidator.js";
import { handleValidationErrors } from "../middlewares/enquiryMiddleware.js";

const router = Router();

router.post("/",enquiryValidationRules,handleValidationErrors,createEnquiry);

export default router;