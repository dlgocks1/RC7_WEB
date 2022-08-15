const SET_LOGINMODAL_VISIBLE = 'SET_LOGINMODAL_VISIBLE';
const SET_LOGINMODAL_INVISIBLE = 'SET_LOGINMODAL_INVISIBLE';
const SET_LOGINMODAL_LOADING_VISIBLE = 'SET_LOGINMODAL_LOADING_VISIBLE';
const SET_LOGINMODAL_LOADING_INVISIBLE = 'SET_LOGINMODAL_LOADING_INVISIBLE';

const initialState = {
	loginVisible: false,
	loginLoadingVisible: false,
};

const LoginReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOGINMODAL_VISIBLE: {
			return {
				...state,
				loginVisible: true,
			};
		}
		case SET_LOGINMODAL_INVISIBLE: {
			return {
				...state,
				loginVisible: false,
			};
		}
		case SET_LOGINMODAL_LOADING_VISIBLE: {
			return {
				...state,
				loginLoadingVisible: true,
			};
		}
		case SET_LOGINMODAL_LOADING_INVISIBLE: {
			return {
				...state,
				loginLoadingVisible: false,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default LoginReducer;
