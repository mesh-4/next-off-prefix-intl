import type { NextRequest } from 'next/server'

import { localeMiddleware } from '@/locales/middleware'

export function middleware(request: NextRequest) {
	return localeMiddleware({ request })
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
