const initialState = {
	toastModalVisible: false,
	text: '',
};

const ToastModalReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_TOASTMODAL_VISIBLE': {
			return {
				...state,
				toastModalVisible: true,
				text: action.data.text,
			};
		}
		case 'SET_TOASTMODAL_INVISIBLE': {
			return {
				...state,
				toastModalVisible: false,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default ToastModalReducer;
