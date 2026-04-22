import createMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const handleLocale = createMiddleware({
  locales: ['en', 'ru'],
  defaultLocale: 'en',
})

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/audio-trimmer')) {
    return NextResponse.next()
  }
  if (request.nextUrl.pathname.startsWith('/decision-simulator')) {
    return NextResponse.next()
  }
  if (request.nextUrl.pathname.startsWith('/signal-pulse')) {
    return NextResponse.next()
  }
  if (request.nextUrl.pathname.startsWith('/game-of-life')) {
    return NextResponse.next()
  }
  if (request.nextUrl.pathname.startsWith('/habbit-tracker')) {
    return NextResponse.next()
  }
  return handleLocale(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
