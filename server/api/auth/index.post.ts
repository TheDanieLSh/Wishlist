interface Iform {
    'login': string,
    'password': string
}

export default defineEventHandler(async event => {
    const body = await readMultipartFormData(event) ?? [];
    console.log(body);

    const formData: Iform = body.reduce((acc, cur) => {
        acc[cur['name']] = cur.data.toString();
        return acc
    }, {})

    if (formData?.login && formData?.password) {
        return {
            ...formData,
            status: 1,
        };
    }

    return {
        status: 0,
    };
})