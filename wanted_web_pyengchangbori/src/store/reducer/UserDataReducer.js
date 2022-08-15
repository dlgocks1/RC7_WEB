const initialState = {
	isLogin: false,
	userId: 0,
	jwt: '',
	profileImageUrl: '',
};

const UserDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_LOGIN': {
			return {
				...state,
				isLogin: true,
				userId: action.data.userId,
				jwt: action.data.jwt,
				profileImageUrl: action.data.profileImageUrl,
			};
		}
		case 'SET_LOGOUT': {
			return {
				...state,
				isLogin: false,
				userId: 0,
				jwt: '',
				profileImageUrl: '',
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default UserDataReducer;
