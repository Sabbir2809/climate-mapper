import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const AUTH_KEY = process.env.NEXT_PUBLIC_AUTH_KEY;
  const data = request.cookies.get(AUTH_KEY)?.value;
  const authUser = data && JSON.parse(data)?.state?.auth;

  if (!authUser && !["/sign-in", "/sign-up"].includes(pathname)) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (authUser && pathname === "/sign-in") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/account/:path*", "/sign-in", "/sign-up", "/"],
};
