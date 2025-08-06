import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const dbConnected = async () => {
  try {
    mongoose.connect(process.env.DB_URL).then(() => {
      console.log("Data Base Connected Successfully");
    });
  } catch (error) {
    console.log(error.error || error.message);
  }
};
