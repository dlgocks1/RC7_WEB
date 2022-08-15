import { SuspenseGet } from 'utils/api';

export const fetchSalaryData = ({ dutyCategoryId, jobCategoryId }) =>
	SuspenseGet({
		url: `web/salary/${process.env.REACT_APP_DEV_USERID}?jobCategoryId=${jobCategoryId}&dutyCategoryId=${dutyCategoryId}`,
		headers: {
			'x-access-token': process.env.REACT_APP_DEV_ACCESS_TOKEN,
		},
	});

export const fetchUpgradePosition = () =>
	SuspenseGet({
		url: `web/salary/salaryPosition`,
	});
