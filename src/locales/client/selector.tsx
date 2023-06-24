'use client'

import * as React from 'react'

const LangSelector = () => {
	const [lang, setLang] = React.useState('')

	React.useEffect(() => {
		const lang = document.cookie.split('; ').find((row) => row.startsWith('lang='))
		if (lang) {
			setLang(lang.split('=')[1])
		}
	}, [])

	const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const lang = e.target.value
		document.cookie = `lang=${lang}; path=/`
		window.location.reload()
	}

	if (lang === '') {
		return null
	}

	return (
		<select value={lang} onChange={onChange} className=" bg-transparent appearance-none">
			<option value="en">English</option>
			<option value="zh-TW">繁體中文</option>
		</select>
	)
}

export default LangSelector
