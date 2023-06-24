import { getDict } from '@/locales/server/get-dict'
import { getLocaleByCookie } from '@/locales/server/get-locale'

import Greeting from './greeting'
import LangSelector from '@/locales/client/selector'

export default async function Home() {
	const locale = getLocaleByCookie()
	const dict = await getDict(locale)

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>
				<p>{dict.common['from-server']}</p>
				<Greeting />
				<LangSelector />
			</div>
		</main>
	)
}
