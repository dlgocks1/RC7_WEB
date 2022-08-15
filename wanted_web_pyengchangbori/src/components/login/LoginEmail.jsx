import LoginLoading from 'components/common/LoginLoading';
import { InputContainer } from 'components/common/styled';
import { ErrorBoundary } from 'hoc/ErrorBoundary';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
	setLoginModalInvisible,
	setLoginModalLoadingInvisible,
	setLoginModalLoadingVisible,
} from 'store/action/LoginAction';
import { CustomPost } from 'utils/api';
import LoginPassword from './LoginPassword';
import Signin from './Signin';

function LoginEmail() {
	const dispatch = useDispatch();

	const [isChecking, setChecking] = useState(false);
	const [type, setType] = useState('');
	const [email, setEmail] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleLoginModalInvisible = () => {
		dispatch(setLoginModalInvisible());
	};

	const handleLoginModalLoadingVisible = () => {
		dispatch(setLoginModalLoadingVisible());
	};

	const handleLoginModalLoadingInvisible = () => {
		dispatch(setLoginModalLoadingInvisible());
	};

	async function handleonSubmit(data) {
		handleLoginModalLoadingVisible();
		setEmail(data.email);
		const result = await CustomPost({
			url: 'web/users/email',
			body: {
				email: data.email,
			},
		});
		handleLoginModalLoadingInvisible();
		console.log(result);
		switch (result.code) {
			case 1001:
				setChecking(true);
				setType('Login');
				break;
			default:
				setChecking(true);
				setType('Signin');
				break;
		}
	}

	const handleonError = (err) => {};

	return (
		<ErrorBoundary>
			{!isChecking ? (
				<>
					<div className="modal-header-wrapper">
						<svg
							version="1.0"
							id="레이어_1"
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 226.8 49.9"
							enableBackground="new 0 0 226.8 49.9"
							xmlSpace="preserve"
							className="icon-logo"
						>
							<g>
								<g>
									<path
										fill="#0C0C0C"
										d="M145.6,3.5l-9.1,3.8v7.6h-6.3v8.2h6.2V39c-0.4,5.6,3.7,10.5,9.3,10.9c0.5,0,1,0,1.5,0
			c1.8,0.1,3.5-0.2,5.2-0.8v-8c-0.9,0.2-1.9,0.3-2.8,0.3c-2.5,0-4-1-4-3.9V23.1h6.8V15h-6.8V3.5z"
									/>
									<polygon
										fill="#0C0C0C"
										points="46.3,15 40,36.9 32.5,15 23.5,15 16,36.9 9.7,15 0,15 10.9,49.1 20.7,49.1 28,26.1 35.4,49.1 
			45.1,49.1 56,15 		"
									/>
									<path
										fill="#0C0C0C"
										d="M217.8,3.5v13.4c-2.3-1.6-5-2.5-7.9-2.7h-0.5h-1c-0.5,0-1,0-1.5,0c-7.6,0.6-13.8,6.4-14.8,14
			c-0.2,1.1-0.3,2.3-0.3,3.4c0,0.1,0,0.2,0,0.4c0,0.3,0,0.6,0,0.9c0,0.5,0,1,0,1.5c1,8.7,7.1,15.5,16.5,15.5c3.4,0.1,6.8-1,9.6-2.9
			V49h0.4h8.5V0L217.8,3.5z M209.4,41.7L209.4,41.7c-5.3-0.5-9.3-5.1-8.9-10.4c0.3-4.8,4.2-8.6,8.9-8.9c4.8,0,8.6,3.4,8.6,9.5
			S214.2,41.7,209.4,41.7z"
									/>
									<path
										fill="#0C0C0C"
										d="M188.4,28.2c-1.3-9-9.7-15.2-18.7-13.9c-7.2,1.1-12.8,6.7-13.9,13.9c-0.2,1.3-0.3,2.6-0.3,3.9
			c0,0.8,0,1.6,0.1,2.4c0.9,8.7,7.1,15.5,16.5,15.5c6.8,0.1,12.9-4.1,15.2-10.5l-8.2-1.7c-1.2,2.9-4,4.8-7.2,4.9
			c-4.4,0-7.4-3.5-8.1-8.1h24.6c0-0.8,0.1-1.6,0.1-2.4C188.6,30.7,188.5,29.4,188.4,28.2L188.4,28.2z M164.4,28.2
			c1.3-4.2,5.8-6.6,10-5.3c2.5,0.8,4.5,2.8,5.3,5.3H164.4z"
									/>
									<path
										fill="#0C0C0C"
										d="M82.1,17.2c-1.2-0.9-2.6-1.6-4-2.1c-1.5-0.6-3-0.9-4.6-1h-1c-9.5,0.4-16.9,8.3-16.6,17.7
			c0,0.2,0,0.4,0,0.7V33c0.2,9.1,7.3,16.4,16.4,16.9h1.2c3.1-0.2,6.1-1.3,8.6-3.2V49h8.9V15h-8.9L82.1,17.2z M73.6,41.7
			c-5.3-0.3-9.4-4.8-9.2-10.1c0.3-4.9,4.2-8.9,9.2-9.2c4.8,0,8.5,3.4,8.5,9.5S78.4,41.7,73.6,41.7z"
									/>
									<path
										fill="#0C0C0C"
										d="M115.3,14.1c-3.9-0.1-7.5,1.7-9.7,4.9v-4h-9.2V49h9.2V29.4c-0.4-3.5,2.2-6.7,5.7-7c0.2,0,0.4,0,0.7,0
			c3.3-0.2,6.2,2.3,6.4,5.6c0,0.4,0,0.8,0,1.2V49h9.2V27.5C127.6,20.1,123.8,14.1,115.3,14.1z"
									/>
								</g>
							</g>
						</svg>
						<button
							type="button"
							onClick={() => handleLoginModalInvisible()}
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								color="#999"
							>
								<path
									fill="currentColor"
									d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
								/>
							</svg>
						</button>
					</div>

					<div className="modal-content-wrapper">
						<div className="modal-textpanel">
							<h1>
								직장인을 위한 <br /> 커리어 플랫폼, 원티드!
							</h1>
							<h2>
								커리어 성장과 행복을 위한 여정 <br /> 지금
								원티드에서 시작하세요.
							</h2>
						</div>
						<div className="modal-inputpanel">
							<form
								onSubmit={handleSubmit(
									handleonSubmit,
									handleonError,
								)}
							>
								<div className="modal-emailinput-wrapper">
									<p>이메일</p>
									<div>
										<InputContainer
											{...register('email', {
												required: true,
												pattern: {
													value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
													message:
														'Please enter a valid email',
												},
											})}
											type="text"
											placeholder="이메일을 입력해 주세요."
											id="text"
											errortype={(typeof errors.email).toString()}
										/>
									</div>

									{errors.email?.type === 'pattern' && (
										<div className="error-style">
											올바른 이메일 형식을 입력해주세요.
										</div>
									)}
								</div>
								<div className="modal-inputbuttons">
									<button
										onClick={handleSubmit(
											handleonSubmit,
											handleonError,
										)}
										type="button"
										className="btn-emaillogin-wrapper"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
										>
											<g
												fill="none"
												fillRule="evenodd"
												stroke="#FFF"
												strokeWidth="2"
											>
												<rect
													width="17.2"
													height="14"
													x="3.4"
													y="5"
													rx="3"
												/>
												<path d="M3.2 5.6L12 12l8.8-6.4" />
											</g>
										</svg>
										이메일로 계속하기
									</button>

									<div className="divider-inputpanel" />
									<div className="box-socialLogins-text">
										다음 계정으로 계속하기
									</div>
									<div className="container-socialLogins">
										<div className="btn-socialLogins-wrapper">
											<button
												type="button"
												className="btn-socialLogins type-kakao"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="22"
													height="21"
													viewBox="0 0 22 21"
												>
													<path
														fill="#000"
														fillRule="nonzero"
														d="M11 0C5.242 0 0 3.823 0 8.539c0 2.932 1.904 5.519 4.804 7.056l-1.22 4.479c-.107.397.343.712.69.483l5.348-3.548c.452.044.91.069 1.377.069 6.076 0 11-3.823 11-8.54 0-4.715-4.924-8.538-11-8.538"
													/>
												</svg>
												<div className="text-socialtitle">
													Kakao
												</div>
											</button>
										</div>
										<div className="btn-socialLogins-wrapper">
											<button
												type="button"
												className="btn-socialLogins type-facebook"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="12"
													height="23"
													viewBox="0 0 12 23"
												>
													<path
														fill="#fff"
														fillRule="nonzero"
														d="M11.214 12.603l.622-4.055h-3.89V5.917c0-1.11.543-2.191 2.285-2.191H12V.274S10.395 0 8.86 0C5.656 0 3.562 1.942 3.562 5.458v3.09H0v4.055h3.562v9.802c.714.112 1.446.17 2.191.17.746 0 1.478-.058 2.192-.17v-9.802h3.269"
													/>
												</svg>
												<div className="text-socialtitle">
													Facebook
												</div>
											</button>
										</div>
										<div className="btn-socialLogins-wrapper">
											<button
												type="button"
												className="btn-socialLogins type-google"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="23"
													height="23"
													viewBox="0 0 23 23"
												>
													<g
														fill="none"
														fillRule="nonzero"
													>
														<path
															fill="#EA4335"
															d="M11.5 4.574c1.688 0 3.204.58 4.396 1.72l3.299-3.299C17.203 1.14 14.6 0 11.5 0 7.005 0 3.115 2.577 1.223 6.335l3.842 2.98c.905-2.718 3.44-4.741 6.435-4.741z"
														/>
														<path
															fill="#4285F4"
															d="M22.54 11.761c0-.815-.073-1.6-.21-2.352H11.5v4.448h6.19c-.268 1.438-1.078 2.656-2.296 3.471v2.886h3.717c2.174-2.002 3.429-4.95 3.429-8.453z"
														/>
														<path
															fill="#FBBC05"
															d="M5.065 13.685c-.23-.69-.36-1.427-.36-2.185s.13-1.495.36-2.185v-2.98H1.223C.444 7.888 0 9.645 0 11.5c0 1.856.444 3.612 1.223 5.165l3.842-2.98z"
														/>
														<path
															fill="#34A853"
															d="M11.5 23c3.105 0 5.708-1.03 7.61-2.786l-3.716-2.886c-1.03.69-2.347 1.098-3.894 1.098-2.995 0-5.53-2.023-6.435-4.741H1.223v2.98C3.115 20.423 7.005 23 11.5 23z"
														/>
														<path d="M0 0L23 0 23 23 0 23z" />
													</g>
												</svg>
												<div className="text-socialtitle">
													Google
												</div>
											</button>
										</div>

										<div className="btn-socialLogins-wrapper">
											<button
												type="button"
												className="btn-socialLogins type-apple"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="19"
													height="24"
													viewBox="0 0 19 24"
												>
													<path
														fill="#fff"
														fillRule="nonzero"
														d="M15.868 12.55c.033 3.574 3.098 4.764 3.132 4.779-.026.084-.49 1.695-1.615 3.36-.972 1.439-1.982 2.872-3.572 2.902-1.562.03-2.065-.938-3.851-.938s-2.344.908-3.823.967c-1.535.059-2.704-1.556-3.684-2.99C.45 17.698-1.08 12.343.975 8.73c1.022-1.795 2.848-2.932 4.83-2.96 1.506-.03 2.929 1.026 3.85 1.026.921 0 2.65-1.27 4.467-1.083.761.032 2.897.31 4.268 2.343-.11.07-2.548 1.506-2.522 4.494m-2.936-8.777c.815-.999 1.363-2.389 1.213-3.772-1.174.048-2.594.792-3.437 1.79-.755.884-1.416 2.298-1.238 3.654 1.31.103 2.647-.673 3.462-1.672"
													/>
												</svg>
												<div className="text-socialtitle">
													Apple
												</div>
											</button>
										</div>
									</div>
								</div>
							</form>
						</div>

						<p className="publicinfo-wrapper">
							걱정마세요! 여러분의 지원 활동은 SNS에 노출되지
							않습니다.
							<br />
							회원가입 시{' '}
							<a
								className="loginModalAnchor"
								href="https://help.wanted.co.kr/hc/ko/articles/360035484292"
								target="_blank"
								rel="noreferrer"
							>
								개인정보 처리방침
							</a>
							과{' '}
							<a
								className="loginModalAnchor"
								href="https://help.wanted.co.kr/hc/ko/articles/360035844551"
								target="_blank"
								rel="noreferrer"
							>
								이용약관
							</a>
							을 확인하였으며, 동의합니다.
						</p>
					</div>
				</>
			) : (
				<>
					{type === 'Signin' && <Signin email={email} />}
					{type === 'Login' && <LoginPassword email={email} />}
				</>
			)}
			<div />
		</ErrorBoundary>
	);
}

export default LoginEmail;
