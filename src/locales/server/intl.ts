import { createIntl, createIntlCache } from '@formatjs/intl'
import { headers } from 'next/headers'

import { dictionaries } from './dict'
import { CUSTOM_HEADER_KEY } from '../constants'
import { flattenMessages } from '@/locales/utils'

export const getDict = async (locale: string) => dictionaries[locale as keyof typeof dictionaries]()

const cache = createIntlCache()

export const useIntl = async () => {
	const lang = headers().get(CUSTOM_HEADER_KEY)!
	const dict = await getDict(lang)

	return createIntl(
		{
			locale: lang,
			messages: flattenMessages(dict),
		},
		cache
	)
}
