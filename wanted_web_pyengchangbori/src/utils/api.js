/* eslint-disable consistent-return */
const { default: axios } = require('axios');

export const API = axios.create({
	baseURL: process.env.REACT_APP_PROD_URL,
	timeout: 5000,
	headers: {
		'Content-Type': `application/json;charset=UTF-8`,
		'Access-Control-Allow-Origin': '*',
		Accept: 'application/json',
	},
});

export function wrapPromise(promise) {
	let status = 'pending';
	let result;
	const suspender = promise.then(
		(r) => {
			status = 'success';
			result = r;
		},
		(e) => {
			status = 'error';
			result = e;
		},
	);
	return {
		read() {
			if (status === 'pending') {
				throw suspender;
			} else if (status === 'error') {
				throw result;
			} else if (status === 'success') {
				return result;
			}
		},
	};
}

export async function CustomPost({ url, body = null, headers = null }) {
	try {
		const res = await API.post(url, body, { headers });
		// console.log(res);
		// return wrapPromise(res);
		return res.data;
	} catch (error) {
		throw new Error(error);
	}
}

export async function CustomPut({ url, body = null, headers = null }) {
	try {
		const res = await API.put(url, body, { headers });
		return res.data;
	} catch (error) {
		throw new Error(error);
	}
}

export async function CustomGet({ url, body = null, headers = null }) {
	try {
		const res = await API.get(url, { headers });
		return res.data;
	} catch (error) {
		throw new Error(error);
	}
}

export async function CustomPatch({ url, body = null, headers = null }) {
	try {
		const res = await API.patch(url, body, { headers });
		return res.data;
	} catch (error) {
		throw new Error(error);
	}
}

// Suspense와 함께하는 비동기 함수
export const SuspenseGet = ({ url, body = null, headers = null }) =>
	wrapPromise(API.get(url, { headers }));
