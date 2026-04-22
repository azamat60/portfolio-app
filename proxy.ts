import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["en", "ru"],
  defaultLocale: "en",
});

export function proxy(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/audio-trimmer")) {
    return NextResponse.next();
  }
  if (req.nextUrl.pathname.startsWith("/decision-simulator")) {
    return NextResponse.next();
  }
  if (req.nextUrl.pathname.startsWith("/signal-pulse")) {
    return NextResponse.next();
  }
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
