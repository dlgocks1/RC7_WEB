/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-return-assign */
import LoginLoading from 'components/common/LoginLoading';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginModalInvisible } from 'store/action/LoginAction';
import styled from 'styled-components';
import LoginEmail from './LoginEmail';
import LoginPassword from './LoginPassword';

function LoginModal() {
	const dispatch = useDispatch();

	const { loginLoadingVisible } = useSelector((state) => state.LoginReducer);

	const handleLoginModalInvisible = () => {
		dispatch(setLoginModalInvisible());
	};

	useEffect(() => {
		document.body.style = `overflow: hidden`;
		return () => (document.body.style = `overflow: auto`);
	}, []);

	return (
		<LoginModalRoot>
			<div className="content-modal-wrapper content-modal-regular">
				<LoginEmail />
				{loginLoadingVisible && <LoginLoading />}
				{/* <LoginLoading /> */}
			</div>
			<div
				className="overlay-modal"
				onClick={() => {
					handleLoginModalInvisible();
				}}
			/>
		</LoginModalRoot>
	);
}

const LoginModalRoot = styled.div`
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	position: fixed;
	overflow: hidden;
	z-index: 1400;

	.error-style {
		color: #fe415c;
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

	.modal-inputbuttons {
		svg {
			margin-right: 10px;
		}
		.btn-emaillogin-wrapper {
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
		.divider-inputpanel {
			:after {
				display: block;
				content: 'or';
				color: #969696;
				font-size: 14px;
				font-weight: 500;
				line-height: 1;
				text-align: center;
				margin: 13px auto;
				white-space: pre;
			}
		}
		.box-socialLogins-text {
			text-align: center;
			color: #767676;
			margin-bottom: 17px;
			font-size: 14px;
		}
		.btn-socialLogins-wrapper {
			width: 25%;
			display: inline-block;
			position: relative;
		}
		.type-kakao {
			background-color: #fee500;
		}
		.type-facebook {
			background-color: #1877f2;
		}
		.type-google {
			border: 1px solid #e1e2e3;
			background-color: #fff;
		}
		.type-apple {
			background-color: #000;
		}
		.btn-socialLogins {
			width: 56px;
			height: 56px;
			margin: 0 auto 8px;
			color: #737373;
			border-radius: 28px;

			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 16px;
			font-weight: 600;
			cursor: pointer;
			svg {
				margin-right: 0;
			}
		}
		.text-socialtitle {
			width: 70%;
			left: 14.5%;
			position: absolute;
			top: 62px;
			font-size: 13px;
			font-weight: 500;
			color: #666;
			text-align: center;
		}
		.container-socialLogins {
			width: 100%;
			height: 84px;
			margin: auto;
		}
	}
	.publicinfo-wrapper {
		margin-top: 26px;
		text-align: center;
		font-size: 12px;
		line-height: 18px;
		color: #999;
		a {
			color: #3336ff;
			text-decoration: underline;
		}
	}
	.modal-inputpanel {
		position: relative;
		overflow: hidden;
		z-index: 1;
		.modal-emailinput-wrapper {
			padding-bottom: 14px;
			position: relative;
			color: #767676;
			p {
				font-size: 14px;
				font-weight: 400;
			}
		}
	}

	.modal-content-wrapper {
		background-color: #fff;
		padding: 20px;
		.modal-textpanel {
			text-align: center;
			word-break: break-word;
			margin-top: 24px;
			margin-bottom: 40px;
			h1 {
				line-height: 1.54;
				font-size: 26px;
				font-weight: 600;
				color: #333;
			}
			h2 {
				margin-top: 16px;
				line-height: 1.5;
				font-size: 16px;
				font-weight: 400;
				color: #666;
			}
		}
	}

	.modal-header-wrapper {
		border-bottom: 0;
		height: 24px;
		padding: 16px 20px;
		position: relative;
		color: #333;
		text-align: center;
		font-size: 16px;
		font-weight: 600;
		word-wrap: break-word;
		button {
			position: absolute;
			top: 100%;
			right: 0;
			transform: translateY(-50%);
			padding: 15px;
			line-height: 0;
		}
		.icon-logo {
			width: 80px;
			margin-top: 6px;
		}
	}
	.content-modal-wrapper {
		width: 400px;
		overflow-y: auto;
		/* overflow-y: hidden; */
		border-radius: 5px;
		background-color: #fff;
		position: absolute;
		overflow: hidden;
	}
	.content-modal-regular {
		top: 50%;
		left: 50%;
		width: 100%;
		max-width: 400px;
		overflow-y: auto;
		/* overflow-y: hidden; */
		scrollbar-width: none;
		max-height: calc(100vh - 150px);
		transform: translate(-50%, -50%);
		z-index: 5;
		::-webkit-scrollbar {
			display: none;
		}
	}
	.overlay-modal {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 4;
		background-color: rgba(0, 0, 0, 0.5);
	}
	.icon-logo {
		font-family: 'Elysio Bold' !important;
		line-height: 0.7;
		font-size: 23px;
		::before {
			content: 'wanted';
		}
	}
`;

export default LoginModal;
