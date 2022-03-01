export const getHTTPHeaders = (method = 'get', body) => ({
		method: method,
		headers: {
			'Content-Type': 'application/json'
		},
		body: body ? JSON.stringify(body) : null,
		credentials: 'same-origin',
	}
);