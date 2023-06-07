const api = {
    getSecure: (url) => {
        return api.request(url, {
            method: 'GET',
            headers: {
                'pragma': 'no-cache',
                'cache-control': 'no-cache'
            },
        });
    },
    request: async (url, options) => {
        const response = await fetch(url, options);

        const {headers} = response;

        const contentType = headers.get('content-type');
        if (contentType.includes('json')) {
            return await response.json();
        }
        return await response.text();
    },
    postSecure: (url, body = {}, headers = {}) => {
        return api.request(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json', ...headers}
        });
    },
};

export default api;
