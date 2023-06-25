export type INestedMessages = {
	[key: string]: string | INestedMessages
}

export const flattenMessages = (nestedMessages: INestedMessages, prefix = ''): Record<string, string> => {
	return Object.keys(nestedMessages).reduce((messages: Record<string, string>, key) => {
		const value = nestedMessages[key]
		const prefixedKey = prefix ? `${prefix}.${key}` : key
		if (typeof value === 'string') {
			messages[prefixedKey] = value
		} else {
			Object.assign(messages, flattenMessages(value, prefixedKey))
		}

		return messages
	}, {})
}
