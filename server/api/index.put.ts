export default defineEventHandler(async (event) => {
	const body = await readBody(event)
	const query = await getQuery(event);

	return {
		body,
		query,
	};
})
