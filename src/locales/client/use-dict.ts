import useSWR from 'swr'
import _get from 'lodash/get'
import { useCallback } from 'react'

import { useDocLang } from './context'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

// will fetch to /locale/[lang] to get the dict
export const useDict = () => {
	const { lang } = useDocLang()
	const { data } = useSWR(lang ? `/locale/${lang}` : null, fetcher)

	const t = useCallback(
		(key: string, defaultValue: string) => {
			return _get(data, key, defaultValue)
		},
		[data]
	)

	return {
		t,
	}
}
