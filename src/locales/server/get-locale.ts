import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'

import { isSupportLocale, DEFAULT_LOCALE, SUPPORT_LOCALES } from './constants'

export const getLocaleByCookie = () => {
	const cookieStore = cookies()
	const lang = cookieStore.get('lang')?.value
	if (!lang || !isSupportLocale(lang)) {
		return DEFAULT_LOCALE
	}
	return lang
}

export const getLocaleByHeader = (request: NextRequest) => {
	const { headers } = request

	let languages = new Negotiator({
		headers: {
			'accept-language': headers.get('accept-language') || DEFAULT_LOCALE,
		},
	}).languages()

	return match(languages, SUPPORT_LOCALES, DEFAULT_LOCALE)
}
