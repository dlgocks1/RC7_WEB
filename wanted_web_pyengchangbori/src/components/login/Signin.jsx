/* eslint-disable no-restricted-globals */
import LoginLoading from 'components/common/LoginLoading';
import { InputContainer } from 'components/common/styled';
import { useLogin } from 'hoc/useLogin';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { batch, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	setLoginModalInvisible,
	setLoginModalLoadingInvisible,
	setLoginModalLoadingVisible,
} from 'store/action/LoginAction';
import styled from 'styled-components';
import { CustomPost } from 'utils/api';

function Signin({ email }) {
	const loginModule = useLogin();
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm();
	const navigate = useNavigate();

	const [isCheckedAll, setCheckAll] = useState(false);
	const [acceptPrivacy, setAcceptPrivacy] = useState(false);
	const [acceptEventEmail, setAcceptEventEmail] = useState(false);
	const [ispasswordCorrect, setPasswordCorrect] = useState(false);

	const handleLoginModalLoadingVisible = () => {
		dispatch(setLoginModalLoadingVisible());
	};

	const handleLoginModalLoadingInvisible = () => {
		dispatch(setLoginModalLoadingInvisible());
	};

	const handleonError = (error) => {};

	const handleLoginModalInvisible = () => {
		dispatch(setLoginModalInvisible());
	};

	const handleLoginModalInvisibleWithAlert = () => {
		const SigninClose = '회원가입을 취소하시겠습니까?';
		const exitState = confirm(SigninClose);
		if (exitState) {
			dispatch(setLoginModalInvisible());
		}
	};

	async function handleonSubmit(data) {
		handleLoginModalLoadingVisible();
		const result = await CustomPost({
			url: 'web/users',
			body: {
				email,
				name: data.name,
				phone: data.phone,
				password: data.password,
				repassword: data.repassword,
				notice: acceptEventEmail ? 'Y' : 'N',
			},
		});
		handleLoginModalLoadingInvisible();
		console.log(result);
		switch (result.code) {
			// 성공
			case 1003:
				loginModule.LoginWithEmail({
					email,
					password: data.password,
				});
				handleLoginModalInvisible();
				navigate('/onboarding?level=1&fromSignup=Y');
				break;
			// 이미 가입
			case 2004:
				break;
			default:
		}
	}

	useEffect(() => {
		if (getValues('password') !== getValues('repassword')) {
			setPasswordCorrect(false);
		} else {
			setPasswordCorrect(true);
		}
	}, [getValues('password'), getValues('repassword')]);

	// 약관 정책 useEffect
	useEffect(() => {
		if (acceptPrivacy && acceptEventEmail) {
			setCheckAll(true);
		} else {
			setCheckAll(false);
		}
	}, [acceptPrivacy, acceptEventEmail]);
	useEffect(() => {
		if (isCheckedAll) {
			setAcceptPrivacy(true);
			setAcceptEventEmail(true);
		}
		if (!isCheckedAll && acceptPrivacy && acceptEventEmail) {
			setAcceptPrivacy(false);
			setAcceptEventEmail(false);
		}
	}, [isCheckedAll]);

	return (
		<>
			<ComponetsWrapper>
				<form
					id="setpassword-form"
					onSubmit={handleSubmit(handleonSubmit, handleonError)}
				>
					<div className="modal-header-wrapper">
						회원가입
						<button
							type="button"
							onClick={() => handleLoginModalInvisibleWithAlert()}
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
						<div className="modal-emailinput-wrapper">
							<p>이름</p>
							<div>
								<InputContainer
									{...register('name', {
										required: true,
									})}
									type="text"
									placeholder="이름을 입력해 주세요."
									errortype={(typeof errors.name).toString()}
								/>

								{errors.name?.type === 'required' && (
									<div className="error-style">
										이름은 필수정보 입니다.
									</div>
								)}
							</div>
						</div>
						<div className="modal-emailinput-wrapper">
							<p>휴대폰 번호</p>
							<div>
								<div
									className="box-mobileinput-wrapper"
									style={{ marginTop: '11px' }}
								>
									<span>대한민국 +82</span>
									<select>
										<option value="+82">
											+82 South Korea
										</option>
										<option value="+81">+81 Japan</option>
										<option value="+886">
											+886 Taiwan
										</option>
										<option value="+852">
											+852 Hong Kong
										</option>
										<option value="+65">
											+65 Singapore
										</option>
										<option value="+93">
											+93 Afghanistan
										</option>
									</select>
									<i className="icon-play3" />
								</div>
								<div className="box-mobileinput-input">
									<InputContainer
										{...register('phone', {
											required: true,
											minLength: 11,
											pattern: /^[0-9]+$/,
										})}
										type="text"
										placeholder="(예시) 01034567890"
										errortype={(typeof errors.phone).toString()}
									/>
									<button
										type="button"
										className="btn-getcode"
										disabled=""
									>
										인증번호 받기
									</button>
								</div>
								<InputContainer
									className="box-inputcode"
									disabled
									type="password"
									placeholder="인증번호를 입력해주세요."
								/>
								{errors.phone?.type === 'required' && (
									<div className="error-style">
										전화번호는 필수정보 입니다.
									</div>
								)}
								{errors.phone?.type === 'minLength' && (
									<div className="error-style">
										올바른 전화번호를 입력해 주세요.
									</div>
								)}
								{errors.phone?.type === 'pattern' && (
									<div className="error-style">
										올바른 전화번호를 입력해 주세요.
									</div>
								)}
							</div>
						</div>
						<div className="modal-emailinput-wrapper">
							<p>비밀번호</p>
							<div>
								<InputContainer
									{...register('password', {
										required: true,
										minLength: 11,
										pattern: {
											value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
											message:
												'Please enter a valid password',
										},
									})}
									type="password"
									placeholder="비밀번호를 입력해주세요."
									errortype={(typeof errors.password).toString()}
								/>
							</div>
							{errors.password?.type === 'pattern' ||
							errors.password?.type === 'minLength' ? (
								<div className="error-style">
									영문 대소문자, 숫자, 특수문자를 3가지
									이상으로 조합하여 8자 이상 입력해 주세요.
								</div>
							) : (
								<div className="text-guide">
									영문 대소문자, 숫자, 특수문자를 3가지
									이상으로 조합하여 8자 이상 입력해 주세요.
								</div>
							)}
						</div>

						<div className="modal-emailinput-wrapper">
							<p>비밀번호 확인</p>
							<div>
								<InputContainer
									{...register('repassword', {
										required: true,
										minLength: 11,
										pattern: {
											value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
											message:
												'Please enter a valid repassword',
										},
									})}
									type="password"
									placeholder="비밀번호를 다시 한번 입력해주세요."
									errortype={(typeof errors.repassword).toString()}
								/>
							</div>
							{(errors.repassword?.type === 'pattern' ||
								errors.repassword?.type === 'minLength' ||
								!ispasswordCorrect) && (
								<div className="error-style">
									영문 대소문자, 숫자, 특수문자를 3가지
									이상으로 조합하여 8자 이상 입력해 주세요.
								</div>
							)}
							{/* {errors.repassword?.type === 'required' && (
							<div className="error-style">
								비밀번호는 필수정보 입니다.
							</div>
						)} */}
						</div>
						<div className="box-agreement-wrapper">
							<div className="btn-checkboxall">
								<div className="style-check">
									{isCheckedAll ? (
										<svg
											width="24"
											height="24"
											color="#3366ff"
											viewBox="0 0 24 24"
										>
											<path
												fill="currentColor"
												d="M18.75 2.25a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h13.5zm-2.252 5.719l-5.994 5.968-2.97-3.005a.75.75 0 0 0-1.067 1.055l3.5 3.54a.75.75 0 0 0 1.062.004l6.527-6.5a.75.75 0 0 0-1.058-1.062z"
											/>
										</svg>
									) : (
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
										>
											<path
												fill="currentColor"
												d="M18.75 21.75H5.25a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3zm0-1.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h13.5z"
											/>
										</svg>
									)}
								</div>
								<div className="style-label">
									<input
										onChange={() =>
											setCheckAll(!isCheckedAll)
										}
										type="checkbox"
										name="allAgreement"
									/>
									전체 동의
								</div>
							</div>
							<div className="btn-checkbox">
								<div className="style-check">
									{acceptPrivacy ? (
										<svg
											width="24"
											height="24"
											color="#3366ff"
											viewBox="0 0 24 24"
										>
											<path
												fill="currentColor"
												d="M18.75 2.25a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h13.5zm-2.252 5.719l-5.994 5.968-2.97-3.005a.75.75 0 0 0-1.067 1.055l3.5 3.54a.75.75 0 0 0 1.062.004l6.527-6.5a.75.75 0 0 0-1.058-1.062z"
											/>
										</svg>
									) : (
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
										>
											<path
												fill="currentColor"
												d="M18.75 21.75H5.25a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3zm0-1.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h13.5z"
											/>
										</svg>
									)}
								</div>
								<div className="style-label">
									<input
										onChange={() =>
											setAcceptPrivacy(!acceptPrivacy)
										}
										type="checkbox"
										name="acceptPrivacy"
									/>
									개인정보 수집 및 이용 동의
									<span>(필수)</span>
									<a
										href="https://help.wanted.co.kr/hc/ko/articles/360040127872"
										rel="noopener noreferrer"
										target="_blank"
										className="link-agreement"
									>
										자세히
									</a>
								</div>
							</div>

							<div className="btn-checkbox">
								<div className="style-check">
									{acceptEventEmail ? (
										<svg
											width="24"
											height="24"
											color="#3366ff"
											viewBox="0 0 24 24"
										>
											<path
												fill="currentColor"
												d="M18.75 2.25a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h13.5zm-2.252 5.719l-5.994 5.968-2.97-3.005a.75.75 0 0 0-1.067 1.055l3.5 3.54a.75.75 0 0 0 1.062.004l6.527-6.5a.75.75 0 0 0-1.058-1.062z"
											/>
										</svg>
									) : (
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
										>
											<path
												fill="currentColor"
												d="M18.75 21.75H5.25a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3zm0-1.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h13.5z"
											/>
										</svg>
									)}
								</div>
								<div className="style-label">
									<input
										onChange={() =>
											setAcceptEventEmail(
												!acceptEventEmail,
											)
										}
										type="checkbox"
										name="acceptEventEmail"
									/>
									이벤트 소식 등 알림 정보 받기
									<a
										href="https://help.wanted.co.kr/hc/ko/articles/360040540111"
										rel="noopener noreferrer"
										target="_blank"
										className="link-agreement"
									>
										자세히
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="btn-setpasssword-footer">
						<div className="setpassword-footer-wrapper">
							<button
								id="setpassword-form"
								onClick={handleSubmit(
									handleonSubmit,
									handleonError,
								)}
								type="submit"
								form="setpassword-form"
								disabled={!acceptPrivacy}
							>
								회원가입하기
							</button>
						</div>
					</div>
				</form>
			</ComponetsWrapper>

			<div />
		</>
	);
}

const ComponetsWrapper = styled.div`
	.text-guide {
		color: #767676;
		bottom: 0;
		margin-top: 6px;
		font-size: 12px;
	}
	.btn-setpasssword-footer {
		position: sticky;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 0 20px;
		z-index: 3;
		:before {
			content: '';
			width: 100%;
			height: 30px;
			display: block;
			background: linear-gradient(180deg, hsla(0, 0%, 100%, 0), #fff);
		}
		.setpassword-footer-wrapper {
			background-color: #fff;
			height: 70px;
			button {
				margin-top: 0 !important;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 54px;
				border: 0;
				border-radius: 27px;
				background-color: #36f;
				font-size: 16px;
				font-weight: 600;
				color: #fff;
				cursor: pointer;
				:disabled {
					background-color: #f2f4f7;
					border-color: transparent;
					color: #cacaca;
					cursor: not-allowed;
				}
			}
		}
	}
	.link-agreement {
		float: right;
		font-size: 13px;
		line-height: 19px;
		color: #767676 !important;
	}
	.btn-checkbox {
		color: #ececec;
		display: flex;
		align-items: center;
		position: relative;
		height: 14px;
		> div:last-of-type {
			color: #939393;
		}
		:last-of-type {
			margin-top: 15px;
		}
	}
	.style-label {
		flex: 1 1;
		font-size: 15px;
		color: #666;
		input {
			position: absolute;
			left: 1px;
			opacity: 0;
			vertical-align: top;
			cursor: pointer;
		}
	}
	.style-check {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 17.3px;
		height: 17.3px;
		margin-right: 10px;
	}
	.btn-checkboxall {
		color: #ececec;
		height: auto;
		padding-bottom: 14px;
		border-bottom: 1px solid #ececec;
		margin-bottom: 15px;
		display: flex;
		align-items: center;
		position: relative;
	}
	.box-agreement-wrapper {
		margin-top: 8px;
	}
	.box-inputcode {
		background-color: #f2f4f7 !important;
	}
	.btn-getcode {
		cursor: default;
		position: relative;
		margin-left: 10px;
		min-width: 117px;
		margin-top: 11px;
		padding: 16px 15px 14px;
		border-radius: 5px;
		background-color: #f2f4f7;
		font-weight: 700;
		color: #ccc;
	}
	.box-mobileinput-input {
		display: flex;
	}
	.modal-emailinput-wrapper {
		position: relative;
		padding-bottom: 22px;
		color: #767676;
	}
	.box-mobileinput-wrapper {
		margin-bottom: 10px;
		position: relative;
		flex: 1 1;
		line-height: 50px;
		padding: 0 15px;
		height: 50px;
		font-size: 15px;
		border-radius: 5px;
		border: 1px solid #e1e2e3;
		color: #333;
		select {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			padding: 0 15px;
			height: 50px;
			font-size: 15px;
			border-radius: 5px;
			border: 1px solid #e1e2e3;
			color: #333;
			opacity: 0;
		}
		.icon-play3 {
			position: absolute;
			top: 50%;
			transform: translateY(-50%) scale(0.8);
			right: 10px;
			font-size: 20px;
			color: #333;
			z-index: 1;
		}
	}
`;

export default Signin;
