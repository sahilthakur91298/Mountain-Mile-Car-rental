import helmet from "helmet";
import cors from "cors";

import { env } from "../config/env.js";

export const securityMiddleware = (app) => {
  app.use(helmet());

  app.use(
    cors({
      origin: env.clientUrl,
    })
  );
};