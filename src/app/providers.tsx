'use client'

import * as React from 'react'

import { LangProvider } from '@/locales/client/context'

const Providers = ({ children }: React.PropsWithChildren<{}>) => {
	return <LangProvider>{children}</LangProvider>
}

export default Providers
