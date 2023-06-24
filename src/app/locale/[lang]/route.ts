import { isSupportLocale } from '@/locales/server/constants'
import { getDict } from '@/locales/server/get-dict'

export const GET = async (request: Request, { params }: { params: { lang: string } }) => {
	const { lang } = params
	if (!isSupportLocale(lang)) {
		return new Response(`Not support locale: ${lang}`, { status: 400 })
	}

	const dict = await getDict(lang)

	return new Response(JSON.stringify(dict), {
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
		},
	})
}
