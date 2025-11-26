// import { getIronSession } from "iron-session";
// import { cookies } from "next/headers";

// export const sessionOptions = {
//   password: process.env.SESSION_SECRET,
//   cookieName: "user_session",
//   cookieOptions: {
//     secure: process.env.NODE_ENV === "production",
//     maxAge: 120, // 2 minutes = 120 seconds
//   },
// };

// export async function getSession() {
//   const session = await getIronSession(cookies(), sessionOptions);
//   return session;
// }

// lib/session.js
import { IronSessionOptions } from "iron-session";

export const sessionOptions = {
  password: process.env.SESSION_SECRET || "complex_password_at_least_32_chars_long",
  httpOnly: true,
  sameSite: "lax",
  cookieName: "user_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production", // false on localhost
    maxAge: 60 * 60 * 24, // 1 day
  },
};
