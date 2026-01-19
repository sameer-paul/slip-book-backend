import { ENV } from "../utils/env.js";
import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(ENV.MONGO_URI);
  } catch (error) {
    throw new ApiError("Database connection failed", 500);
  }
}
