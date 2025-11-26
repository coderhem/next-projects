// src/app/api/me/route.js
import { getIronSession } from "iron-session";
import { sessionOptions } from "@/lib/session";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(req) {
  await connectDB();

  const res = new Response();
  const session = await getIronSession(req, res, sessionOptions);

  if (!session.user) {
    return new Response(JSON.stringify({ loggedIn: false }), { status: 200 });
  }

  const user = await User.findById(session.user.id).select("name");
  if (!user) {
    return new Response(JSON.stringify({ loggedIn: false }), { status: 200 });
  }

  return new Response(
    JSON.stringify({ loggedIn: true, user: { name: user.name } }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
