import { SuspenseGet } from 'utils/api';

export const fetchResumeList = ({ userId = 0, jwt = '' }) =>
	SuspenseGet({
		url: `/web/resumeList/${userId}`,
		headers: {
			'x-access-token': jwt,
		},
	});
