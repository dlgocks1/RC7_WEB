import { API, SuspenseGet, wrapPromise } from 'utils/api';

export const fetchWddData = ({ wdIndex = 0, userId = 0, jwt = '' }) =>
	SuspenseGet({
		url: `/web/PostingDetail/${wdIndex}?userId=${userId}`,
		headers: {
			'x-access-token': jwt,
		},
	});
