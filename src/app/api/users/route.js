import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const User = mongoose.models.User || mongoose.model("User", userSchema);

export async function GET() {
  await connectDB();
  const users = await User.find();
  return Response.json(users);
}

export async function POST(req) {
  const data = await req.json();
  await connectDB();
  const newUser = await User.create(data);
  return Response.json(newUser);
}
