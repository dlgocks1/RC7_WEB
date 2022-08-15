const initialState = {
	locationModalVisible: false,
	years: [0, 10],
	jobSort: 'popularity_order',
	country: '한국',
	locations: ['전국'],
	dutyCategoryIds: [],
	userTags: [],
	locationListForReducer: ['all'],
	sublocationListForReducer: [],
};

const WdListReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SORT': {
			return {
				...state,
				jobSort: action.data.jobSort,
			};
		}
		case 'SET_LOCATION': {
			return {
				...state,
				locations: action.data.locations,
				locationListForReducer: action.data.locationListForReducer,
				sublocationListForReducer:
					action.data.sublocationListForReducer,
			};
		}
		case 'SET_USER_TAG': {
			return {
				...state,
				userTags: action.data.userTags,
			};
		}
		case 'SET_CAREER_YEARS': {
			return {
				...state,
				years: action.data.years,
			};
		}
		case 'SET_DUTYCATEGORY_ID': {
			return {
				...state,
				dutyCategoryIds: action.data.dutyCategoryIds,
			};
		}
		case 'SET_LOCATIONMODAL_VISIBLE': {
			return {
				...state,
				locationModalVisible: true,
			};
		}
		case 'SET_LOCATIONMODAL_INVISIBLE': {
			return {
				...state,
				locationModalVisible: false,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default WdListReducer;
