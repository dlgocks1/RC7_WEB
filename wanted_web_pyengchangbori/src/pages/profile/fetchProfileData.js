/* eslint-disable consistent-return */
import { API, SuspenseGet, wrapPromise } from 'utils/api';

export const fetchUserProfile = ({ userId, jwt }) => {
	if (userId !== 0) {
		return SuspenseGet({
			url: `web/profile/${userId}`,
			headers: {
				'x-access-token': jwt,
			},
		});
	}
};

export const fetchUserResume = ({ userId, jwt }) =>
	SuspenseGet({
		url: `web/profile/${userId}/resume`,
		headers: {
			'x-access-token': jwt,
		},
	});

export const fetchUserSpecialty = ({ userId, jwt }) =>
	SuspenseGet({
		url: `/web/profile/${userId}/specialty`,
		headers: {
			'x-access-token': jwt,
		},
	});

export const fetchProfileData = ({ userId = 0, jwt = '' }) => {
	if (userId !== 0) {
		return {
			resumeData: fetchUserResume({ userId, jwt }),
			resumeSpecialty: fetchUserSpecialty({ userId, jwt }),
		};
	}
};
