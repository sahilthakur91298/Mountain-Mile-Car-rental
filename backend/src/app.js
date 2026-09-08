import express from "express";
import cors from "cors";
import enquiryRoute from "./routes/enquiryRoute.js"
import { errorMiddleware } from "./middlewares/enquiryMiddleware.js";
import { env } from "./config/env.js";
import { securityMiddleware } from "./middlewares/securityMiddleware.js";
import { enquiryLimiter } from "./middlewares/rateLimiter.js";
const app = express();

securityMiddleware(app);

app.use(
  cors({
    origin: env.clientUrl,
  })
);

app.use(express.json({
  limit: "10kb",
}));

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "The Mountain Mile API is running",
  });
});

app.use("/api/enquiries",enquiryLimiter, enquiryRoute);
app.use(errorMiddleware);

export default app;