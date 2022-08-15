const SET_LOGINMODAL_VISIBLE = 'SET_LOGINMODAL_VISIBLE';
const SET_LOGINMODAL_INVISIBLE = 'SET_LOGINMODAL_INVISIBLE';
const SET_LOGINMODAL_LOADING_VISIBLE = 'SET_LOGINMODAL_LOADING_VISIBLE';
const SET_LOGINMODAL_LOADING_INVISIBLE = 'SET_LOGINMODAL_LOADING_INVISIBLE';

export const setLoginModalVisible = () => ({
	type: SET_LOGINMODAL_VISIBLE,
});

export const setLoginModalInvisible = () => ({
	type: SET_LOGINMODAL_INVISIBLE,
});

export const setLoginModalLoadingVisible = () => ({
	type: SET_LOGINMODAL_LOADING_VISIBLE,
});

export const setLoginModalLoadingInvisible = () => ({
	type: SET_LOGINMODAL_LOADING_INVISIBLE,
});
