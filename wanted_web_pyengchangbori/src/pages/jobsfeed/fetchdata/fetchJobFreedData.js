import { API, wrapPromise } from 'utils/api';

function fetchCompanyByTag() {
	return API.get('web/jobsFeed/companyByTag');
}

function fetchTopbanner() {
	return API.get('web/jobsFeed/advertisments');
}

export const fetchJobFeedData = () => {
	const companyByTag = fetchCompanyByTag();
	const topbannerResult = fetchTopbanner();
	const famousePositinoResult = API.get('web/jobsFeed/famousPosistion');
	return {
		companyByTag: wrapPromise(companyByTag),
		topbannerResult: wrapPromise(topbannerResult),
		famousePositinoResult: wrapPromise(famousePositinoResult),
	};
};
