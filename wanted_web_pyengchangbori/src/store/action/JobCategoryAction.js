const SET_JOBCATEGORY_VISIBLE = 'SET_JOBCATEGORY_VISIBLE';
const SET_JOBCATEGORY_INVISIBLE = 'SET_JOBCATEGORY_INVISIBLE';

export const setJobCategoryVisible = () => ({
	type: SET_JOBCATEGORY_VISIBLE,
});

export const setJobCategoryInvisible = () => ({
	type: SET_JOBCATEGORY_INVISIBLE,
});
