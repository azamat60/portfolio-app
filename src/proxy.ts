import createMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { routing } from './i18n/routing'

const handleLocale = createMiddleware(routing)

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
  return handleLocale(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
