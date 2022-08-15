const SET_JOBCATEGORY_VISIBLE = 'SET_JOBCATEGORY_VISIBLE';
const SET_JOBCATEGORY_INVISIBLE = 'SET_JOBCATEGORY_INVISIBLE';

const initialState = {
	jobcategoryVisible: false,
};

const JobCategoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_JOBCATEGORY_VISIBLE: {
			return {
				...state,
				jobcategoryVisible: true,
			};
		}
		case SET_JOBCATEGORY_INVISIBLE: {
			return {
				...state,
				jobcategoryVisible: false,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default JobCategoryReducer;
