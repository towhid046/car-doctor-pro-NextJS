import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
  const token = cookies(request).get("next-auth.session-token");
  const pathName = request.nextUrl.pathname
  if (pathName.includes("api/services") || pathName.includes("api/auth")) {
    return NextResponse.next();
  }
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/user_cart/:path*", "/checkout/:path*", "/api/:path*"],
};
