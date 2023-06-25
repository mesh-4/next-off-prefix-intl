import { useIntl } from '@/locales/server/intl'

async function ServerTxt() {
	const intl = await useIntl()

	return <div>{intl.formatMessage({ id: 'common.from-server' })}</div>
}

export default ServerTxt
