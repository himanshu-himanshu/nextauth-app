import mongoose from "mongoose";

/**
 * -----------------------------------------------
 * Database connection logic
 * -----------------------------------------------
 */

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error Connecting to MongoDB", error);
  }
};
