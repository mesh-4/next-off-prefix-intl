import type { NextRequest } from 'next/server'

import { localeMiddleware } from '@/locales/middleware'

import { LOCALE_OPTIONS } from './locale-options'

export function middleware(request: NextRequest) {
	return localeMiddleware({ request, options: LOCALE_OPTIONS })
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
