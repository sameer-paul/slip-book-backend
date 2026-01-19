import { ENV } from "./utils/env.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

export const app = express();
app.use(
  cors({
    origin: ENV.CORS_ORIGIN,
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
