import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import { useIntl } from '@/locales/server/intl'
import IntlProvider from '@/locales/client/provider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Next 13 app dir intl without i18n route',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const intl = await useIntl()

	return (
		<html lang={intl.locale}>
			<body className={inter.className}>
				<IntlProvider locale={intl.locale} messages={intl.messages}>
					{children}
				</IntlProvider>
			</body>
		</html>
	)
}
