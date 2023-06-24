'use client'

import * as React from 'react'

import { useDict } from '@/locales/client/use-dict'

const Greeting = () => {
	const [count, setCount] = React.useState(0)
	const { t } = useDict()

	const onClick = () => {
		setCount((prev) => prev + 1)
	}

	return (
		<p onClick={onClick}>
			{t('common.greeting', 'Hello')} {count}
		</p>
	)
}

export default Greeting
