import React from 'react';
import { useSelector } from 'react-redux';
import { API, SuspenseGet, wrapPromise } from 'utils/api';

function useProfileData() {
	const { userId, jwt } = useSelector((state) => state.UserDataReducer);

	const fetchUserProfile = () =>
		SuspenseGet({
			url: `web/profile/${userId}`,
			headers: {
				'x-access-token': jwt,
			},
		});

	const fetchUserResume = () =>
		SuspenseGet({
			url: `web/profile/${userId}/resume`,
			headers: {
				'x-access-token': jwt,
			},
		});

	const fetchUserSpecialty = () =>
		SuspenseGet({
			url: `/web/profile/${userId}/specialty`,
			headers: {
				'x-access-token': jwt,
			},
		});

	const fetchProfileDataLevel3 = () => ({
		baseProfile: fetchUserResume(),
		resumeProfile: fetchUserSpecialty(),
	});

	return { fetchProfileDataLevel3, fetchUserProfile, jwt, userId };
}

export default useProfileData;
