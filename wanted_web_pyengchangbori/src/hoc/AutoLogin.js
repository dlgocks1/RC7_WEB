import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from 'store/action/UserDataAction';
import { CustomPost } from 'utils/api';
import { useLogin } from './useLogin';

function AutoLogin({ loginState }) {
	// const uselogin = useLogin();
	const jwt = localStorage.getItem('jwt');
	const dispatch = useDispatch();
	const loginData = loginState.read();

	useEffect(() => {
		switch (loginData.data.code) {
			case 1001:
				dispatch(
					setLogin({
						jwt,
						profileImageUrl: loginData.data.result.profileImageUrl,
						userId: loginData.data.result.userId,
					}),
				);
				break;
			default:
		}
	}, []);

	return null;
}

export default AutoLogin;
