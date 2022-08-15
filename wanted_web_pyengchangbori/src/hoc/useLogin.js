import React, { useState } from 'react';
import { batch, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogin } from 'store/action/UserDataAction';
import { CustomGet, CustomPost, SuspenseGet } from 'utils/api';

export const useLogin = () => {
	const dispatch = useDispatch();
	// const navigate = useNavigate();
	const [loginSuccess, setLoginSuccess] = useState(false);

	const SuspenseLoginWithJwt = ({ jwt = '' }) =>
		SuspenseGet({
			url: `/web/auto-login`,
			headers: {
				'x-access-token': jwt,
			},
		});

	async function LoginWithjwt(data) {
		const result = await CustomGet({
			url: '/web/auto-login',
			headers: {
				'x-access-token': data.jwt,
			},
		});
		console.log(result);

		switch (result.code) {
			case 1001:
				// 로그인 성공
				console.log(result);
				setLoginSuccess(true);
				batch(() => {
					dispatch(
						setLogin({
							jwt: data.jwt,
							profileImageUrl: result.result.profileImageUrl,
							userId: result.result.userId,
						}),
					);
				});
				break;
			default:
		}
	}

	async function LoginWithEmail(data) {
		const result = await CustomPost({
			url: '/web/login',
			body: {
				email: data.email,
				password: data.password,
			},
		});

		switch (result.code) {
			case 1004:
				// 로그인 성공
				console.log(result);
				setLoginSuccess(true);
				batch(() => {
					dispatch(
						setLogin({
							jwt: result.result.jwt,
							profileImageUrl: result.result.profileImageUrl,
							userId: result.result.userId,
						}),
					);
					// dispatch(setLoginModalInvisible());
				});
				localStorage.setItem('jwt', result.result.jwt);
				break;
			default:
		}
	}

	return { LoginWithjwt, SuspenseLoginWithJwt, LoginWithEmail, loginSuccess };
};
