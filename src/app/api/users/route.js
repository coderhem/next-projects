import { connectDB } from "@/database/connection";
import User from "@/models/User";

export async function POST(req) {
 try {
  await connectDB();
  const body = await req.json();

  // Handle multiple users
  if (Array.isArray(body)) {
   const users = await User.insertMany(
    body.map((u) => ({
     name: u.name,
     phone: u.phone,
     email: u.email,
     password: u.password,
     gender: u.genderSelect,
     bloodGroup: u.bloodGroupSelect,
     address: u.address,
    }))
   );
   return Response.json(users, { status: 201 });
  }

  // Single user
  const user = await User.create({
   name: body.name,
   phone: body.phone,
   email: body.email,
   password: body.password,
   gender: body.genderSelect,
   bloodGroup: body.bloodGroupSelect,
   address: body.address,
  });
  return Response.json(user, { status: 201 });
 } catch (err) {
  console.error("POST error:", err);
  return Response.json({ error: "Server error", details: err.message }, { status: 500 });
 }
}

export async function GET() {
 try {
  await connectDB();
  const users = await User.find();
  return Response.json(users);
 } catch (err) {
  console.error("GET error:", err);
  return Response.json({ error: "Server error", details: err.message }, { status: 500 });
 }
}

export async function PUT(req) {
 try {
  await connectDB();
  const { id, name, phone, email, password, genderSelect, bloodGroupSelect, address } = await req.json();

  const updatedUser = await User.findByIdAndUpdate(
   id,
   {
    name,
    phone,
    email,
    password,
    gender: genderSelect,
    bloodGroup: bloodGroupSelect,
    address,
   },
   { new: true }
  );

  return Response.json(updatedUser);
 } catch (err) {
  console.error("PUT error:", err);
  return Response.json({ error: "Server error", details: err.message }, { status: 500 });
 }
}

export async function DELETE(req) {
 try {
  await connectDB();
  const { id } = await req.json();
  await User.findByIdAndDelete(id);
  return Response.json({ message: "User deleted successfully" });
 } catch (err) {
  console.error("DELETE error:", err);
  return Response.json({ error: "Server error", details: err.message }, { status: 500 });
 }
}
