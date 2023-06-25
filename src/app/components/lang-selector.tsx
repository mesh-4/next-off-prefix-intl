'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'

type LangSelectorProps = {
	defaultValue: string
}

const LangSelector = ({ defaultValue }: LangSelectorProps) => {
	const router = useRouter()

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const lang = e.target.value
		document.cookie = `lang=${lang};path=/`
		router.refresh()
	}

	return (
		<select onChange={handleChange} value={defaultValue}>
			<option value="en">English</option>
			<option value="zh-TW">繁體中文</option>
		</select>
	)
}

export default LangSelector
