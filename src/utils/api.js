export default async function api(endpointPath) {
	const _endpointPath = endpointPath.startsWith('/') ? endpointPath : '/'+endpointPath
	const res = await fetch(`${process.env.VUE_APP_BASE+_endpointPath}`, {
		headers: {
			'X-API-KEY': process.env.VUE_APP_KEY
		}
	})
	if(res.status !== 200) {
		throw new Error(`[${res.statusText}] Something went wrong.`)
	}
	return await res.json()
}