import { Suspense } from 'react'
import dynamic from 'next/dynamic'

import { useIntl } from '@/locales/server/intl'

import Greeting from './components/greeting'
import ServerTxt from './components/server-txt'

const LangSelector = dynamic(() => import('./components/lang-selector'), { ssr: false })

export default async function Home() {
	const intl = await useIntl()

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>
				<Greeting />
				<Suspense fallback={<div>loading</div>}>
					<ServerTxt />
				</Suspense>
				<LangSelector defaultValue={intl.locale} />
			</div>
		</main>
	)
}
