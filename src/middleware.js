import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";

const sessionOptions = {
  password: process.env.SESSION_SECRET,
  cookieName: "user_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    maxAge: 120, // 2 minutes
  },
};

export async function middleware(req) {
  const res = NextResponse.next();

  const session = await getIronSession(req, res, sessionOptions);

  //session expired → redirect to login
  if (!session.user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}

// Protect routes
export const config = {
  matcher: ["/customers/:path*", "/dashboard/:path*"],
};
