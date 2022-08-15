import { SuspenseGet } from 'utils/api';

export const fetchQueryData = ({ queryStr = '' }) =>
	SuspenseGet({
		url: `web/search/?search_word=${queryStr}`,
	});
