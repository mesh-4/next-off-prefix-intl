export const SUPPORT_LOCALES = ['en', 'zh-TW']

export type SupportLocale = (typeof SUPPORT_LOCALES)[number]

export const DEFAULT_LOCALE = 'en'

export const isSupportLocale = (locale: string): locale is SupportLocale => {
	return SUPPORT_LOCALES.includes(locale as SupportLocale)
}
