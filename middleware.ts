import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["en", "ru"],
  defaultLocale: "en",
});

export default function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/audio-trimmer")) {
    return NextResponse.next();
  }
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
