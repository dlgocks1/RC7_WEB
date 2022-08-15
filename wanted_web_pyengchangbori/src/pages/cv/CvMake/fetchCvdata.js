import { SuspenseGet } from 'utils/api';

export const fetchCvData = ({ userId = 0, cvId = 0, jwt = '' }) =>
	SuspenseGet({
		url: `/web/resume/${userId}/${cvId}`,
		headers: {
			'x-access-token': jwt,
		},
	});
