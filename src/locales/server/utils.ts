import Negotiator from 'negotiator'
import { match } from '@formatjs/intl-localematcher'
import type { NextRequest } from 'next/server'

import type { LocaleOptions } from '@/locales/types'

type GetLocalePayload = {
	request: NextRequest
} & LocaleOptions

export const getLocale = ({ request, supportValues, defaultValue }: GetLocalePayload) => {
	const lang = request.nextUrl.searchParams.get('lang')
	if (lang && supportValues.includes(lang)) {
		return lang
	}

	const acceptLang = request.headers.get('accept-language')
	if (!acceptLang) {
		return defaultValue
	}

	const languages = new Negotiator({ headers: { 'accept-language': acceptLang } }).languages()
	return match(languages, supportValues, defaultValue)
}
