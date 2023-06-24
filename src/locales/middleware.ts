import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { isSupportLocale } from '@/locales/server/constants'
import { getLocaleByHeader } from '@/locales/server/get-locale'

type Ctx = {
	request: NextRequest
}

export const localeMiddleware = ({ request }: Ctx) => {
	const { cookies } = request

	const response = NextResponse.next()

	const preferredLocale = cookies.get('lang')

	if (!preferredLocale || !isSupportLocale(preferredLocale.value)) {
		const locale = getLocaleByHeader(request)
		response.cookies.set('lang', locale, { path: '/', httpOnly: false })
		return response
	}

	return response
}
