import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { COOKIE_SECRET } from "./config/envConfig";
import appRouter from "./routes";

const app = express();

// middleware
app.use(cors({ origin: "http://localhost:4000", credentials: true }));
app.use(express.json());
app.use(cookieParser(COOKIE_SECRET));

// remove it in production
app.use(morgan("dev"));

// // Remove morgan logging in production
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }

app.use("/api/v1", appRouter);

export default app;
