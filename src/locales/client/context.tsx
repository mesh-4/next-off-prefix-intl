'use client'

import * as React from 'react'

import { DEFAULT_LOCALE } from '@/locales/server/constants'

type ContextValue = {
	lang: string | null
}

const LangContext = React.createContext<ContextValue>({
	lang: null,
})

export const LangProvider = ({ children }: React.PropsWithChildren) => {
	const [lang, setLang] = React.useState<string | null>(null)

	React.useEffect(() => {
		setLang(document.documentElement.lang)
	}, [])

	return <LangContext.Provider value={{ lang: lang }}>{children}</LangContext.Provider>
}

export const useDocLang = () => {
	return React.useContext(LangContext)
}
