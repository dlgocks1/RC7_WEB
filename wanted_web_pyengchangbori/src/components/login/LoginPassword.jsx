import { InputContainer } from 'components/common/styled';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { batch, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginModalInvisible } from 'store/action/LoginAction';
import { setLogin } from 'store/action/UserDataAction';
import styled from 'styled-components';
import { CustomPost } from 'utils/api';

function LoginPassword({ email }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const [invalidpw, setInvalidPw] = useState(false);

	async function handleonSubmit(data) {
		const result = await CustomPost({
			url: '/web/login',
			body: {
				email,
				password: data.password,
			},
		});
		switch (result.code) {
			case 1004:
				// 로그인 성공
				console.log(result);
				batch(() => {
					dispatch(
						setLogin({
							jwt: result.result.jwt,
							profileImageUrl: result.result.profileImageUrl,
							userId: result.result.userId,
						}),
					);
					dispatch(setLoginModalInvisible());
				});
				localStorage.setItem('jwt', result.result.jwt);
				navigate('/');
				break;
			default:
				setInvalidPw(true);
		}
	}

	const handleonError = (err) => {};

	useEffect(() => {
		setInvalidPw(false);
	}, [watch().password]);

	return (
		<ComponentWrapper>
			<form onSubmit={handleSubmit(handleonSubmit, handleonError)}>
				<div className="modal-header-wrapper">
					회원가입
					<button type="button">
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
						<p>비밀번호</p>
						<div>
							<InputContainer
								{...register('password', {
									required: true,
								})}
								type="password"
								placeholder="비밀번호을 입력해 주세요."
								errortype={(typeof errors.password).toString()}
								invalidCheck={invalidpw}
							/>

							{errors.password?.type === 'required' && (
								<div className="error-style">
									비밀번호은 필수정보 입니다.
								</div>
							)}
							{invalidpw && (
								<div className="error-style">
									비밀번호가 잘못 되었습니다.
								</div>
							)}
						</div>
					</div>
					<button
						style={{ marginTop: '20px' }}
						className="EnterPassword_button__Of971"
						id="setpassword-form"
						onClick={handleSubmit(handleonSubmit, handleonError)}
						type="submit"
						form="setpassword-form"
						// disabled={!acceptPrivacy}
					>
						로그인
					</button>
					<button
						type="button"
						className="style_wrapper__IgK7U as-link"
					>
						비밀번호 초기화/변경
					</button>
				</div>
			</form>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	.EnterPassword_button__Of971 {
		margin-top: 10px;
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
	}
	.EnterPassword_link__faqkR {
		margin-top: 4px;
	}
	.style_wrapper__IgK7U {
		background-color: transparent;
		font-size: 14px;
		color: #36f;
		margin-top: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 54px;
		font-family: inherit;
		border: 0;
		border-radius: 27px;
		font-weight: 600;
		cursor: pointer;
	}
`;

export default LoginPassword;
