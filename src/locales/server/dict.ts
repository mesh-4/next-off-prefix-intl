import 'server-only'

export const dictionaries = {
	en: () => import('@/locales/dictionaries/en.json').then((module) => module.default),
	'zh-TW': () => import('@/locales/dictionaries/zh-TW.json').then((module) => module.default),
}
