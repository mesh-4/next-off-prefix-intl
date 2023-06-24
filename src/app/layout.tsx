import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import { getLocaleByCookie } from '@/locales/server/get-locale'
import { getDict } from '@/locales/server/get-dict'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
	const lang = getLocaleByCookie()
	const dict = await getDict(lang)

	return {
		title: dict.seo.home.title,
		description: dict.seo.home.description,
	}
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
	const lang = getLocaleByCookie()

	return (
		<html lang={lang}>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
