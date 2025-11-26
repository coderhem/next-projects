// src/app/api/login/route.js
import { getIronSession } from "iron-session";
import { sessionOptions } from "@/lib/session";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  await connectDB();

  const body = await req.json();
  const { email, password } = body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return new Response(JSON.stringify({ success: false, message: "User not found" }), { status: 404 });
    }

    if (user.password !== password) {
      return new Response(JSON.stringify({ success: false, message: "Incorrect password" }), { status: 401 });
    }

    // Create response first
    const res = new Response(JSON.stringify({ success: true, message: "Login successful" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

    // Save session
    const session = await getIronSession(req, res, sessionOptions);
    session.user = { id: user._id, email: user.email };
    await session.save();

    return res;
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, message: "Server error" }), { status: 500 });
  }
}
