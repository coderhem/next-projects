import mongoose from "mongoose";

let isConnected = false; // Track connection status

export const connectDB = async () => {
 if (isConnected) {
  console.log("Database already connected");
  return;
 }

 try {
  const conn = await mongoose.connect(process.env.MONGODB_URI);
  isConnected = true;
  console.log("Database connected:", conn.connection.host);
 } catch (error) {
  console.error("Database connection failed:", error);
 }
};
