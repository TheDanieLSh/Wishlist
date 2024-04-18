export default defineEventHandler(async event => {
    const body = await readBody(event);
    if (body) {
        return (body)
    } else {
        return 'Empty request'
    }
})