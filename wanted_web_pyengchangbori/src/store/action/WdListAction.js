export const setLocationModalVisible = () => ({
	type: 'SET_LOCATIONMODAL_VISIBLE',
});

export const setLocationModalInvisible = () => ({
	type: 'SET_LOCATIONMODAL_INVISIBLE',
});

export const setDutyCategoryIdsReducer = (data) => ({
	type: 'SET_DUTYCATEGORY_ID',
	data,
});

export const setCareerYearsReducer = (data) => ({
	type: 'SET_CAREER_YEARS',
	data,
});

export const setUserTagReducer = (data) => ({
	type: 'SET_USER_TAG',
	data,
});

export const setLocationTagReducer = (data) => ({
	type: 'SET_LOCATION',
	data,
});

export const setJobSortTagReducer = (data) => ({
	type: 'SET_SORT',
	data,
});
