export default defineEventHandler(async (event) => {
	const name = getRouterParam(event, 'name');
	const surname = getRouterParam(event, 'surname');

	return {
        name,
		surname,
	};
})
