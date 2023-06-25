'use client'

import * as React from 'react'
import { FormattedMessage } from 'react-intl'

const Greeting = () => {
	const [count, setCount] = React.useState(0)

	const onClick = () => {
		setCount((prev) => prev + 1)
	}

	return (
		<p onClick={onClick}>
			<FormattedMessage id="common.greeting" defaultMessage="Hello" />
			{count}
		</p>
	)
}

export default Greeting
