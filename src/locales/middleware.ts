import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { CUSTOM_HEADER_KEY, DEFAULT_OPTIONS } from '@/locales/constants'
import { getLocale } from '@/locales/server/utils'
import type { LocaleOptions } from '@/locales/types'

type Ctx = {
	request: NextRequest
	options?: LocaleOptions
}

export const localeMiddleware = ({ request, options = DEFAULT_OPTIONS }: Ctx) => {
	const { cookies } = request
	const { defaultValue, supportValues } = options

	let lang = defaultValue

	const preferredLocale = cookies.get('lang')?.value

	if (!preferredLocale || !supportValues.includes(preferredLocale)) {
		lang = getLocale({ request, supportValues, defaultValue })
	} else {
		lang = preferredLocale
	}

	const response = NextResponse.next()
	response.headers.set(CUSTOM_HEADER_KEY, lang)

	return response
}
