import { getIronSession } from "iron-session";
import { sessionOptions } from "@/lib/session";

// export const runtime = "edge";

export async function POST(req) {
 const res = new Response(JSON.stringify({ success: true, message: "Logged out" }), {
  status: 200,
  headers: { "Content-Type": "application/json" },
 });

 const session = await getIronSession(req, res, sessionOptions);
 session.destroy();
 return res;
}
