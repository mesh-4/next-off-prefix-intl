'use client'

import { IntlProvider as ReactIntlProvider, IntlConfig } from 'react-intl'

type IntlProviderProps = React.PropsWithChildren<IntlConfig>

const IntlProvider = ({ children, ...intl }: IntlProviderProps) => {
	return <ReactIntlProvider {...intl}>{children}</ReactIntlProvider>
}

export default IntlProvider
