import { connectDB } from "@/database/connection";
import User from "@/models/User";

// ✅ CREATE User (POST)
export async function POST(req) {
 try {
  await connectDB();
  const body = await req.json();

  const user = await User.create({
   fullName: data.fullName,
   phone: data.phone,
   email: data.email,
   password: data.password,
   gender: data.genderSelect,
   bloodGroup: data.bloodGroupSelect,
   address: data.address,
  });

  // Check if body is an array
  if (Array.isArray(body)) {
   const users = await User.insertMany(body);
   return Response.json(users, { status: 201 });
  } else {
   const user = await User.create(body);
   return Response.json(user, { status: 201 });
  }
 } catch (err) {
  console.error("POST error:", err);
  return Response.json({ error: "Server error", details: err.message }, { status: 500 });
 }
}


// ✅ READ Users (GET)
export async function GET() {
 await connectDB();
 const users = await User.find();
 return Response.json(users);
}

// ✅ UPDATE User (PUT)
export async function PUT(req) {
 await connectDB();
 const { id, name, email } = await req.json();
 const updatedUser = await User.findByIdAndUpdate(id, { name, email }, { new: true });
 return Response.json(updatedUser);
}

// ✅ DELETE User (DELETE)
export async function DELETE(req) {
 await connectDB();
 const { id } = await req.json();
 await User.findByIdAndDelete(id);
 return Response.json({ message: "User deleted successfully" });
}
