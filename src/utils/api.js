import path from 'path'

export default async function api(endpointPath) {
	console.debug(process.env)
	const res = await fetch(`${path.join(process.env.VUE_APP_BASE, endpointPath)}`, {
		headers: {
			'X-API-KEY': process.env.VUE_APP_KEY
		}
	})
	if(res.status !== 200) {
		throw new Error(`[${res.statusText}] Something went wrong.`)
	}
	return await res.json()
}