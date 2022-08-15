import { InputContainer } from 'components/common/styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CustomPost } from 'utils/api';

function OccupationSetting({ userId, jwt }) {
	const navigate = useNavigate();
	const [school, setSchool] = useState('');
	const [company, setCompany] = useState('');

	const handleInputSchool = (e) => {
		setSchool(e.target.value);
	};
	const handleInputCompany = (e) => {
		setCompany(e.target.value);
	};

	const handleUserinfoSubmit = () => {
		const result = CustomPost({
			url: `/web/users/${userId}/schoolCompany`,
			body: {
				school,
				company,
			},
			headers: {
				'x-access-token': jwt,
			},
		});
		result.then((res) => {
			console.log(res);
			if (res.code === 1008) {
				navigate('/onboarding?level=3&fromSignup=Y');
			}
		});
	};

	return (
		<>
			<ComponentsContainer>
				<div className="wrapper-body-container">
					<div className="header-wrapper">
						<p className="header-desc">
							아래 정보를 추가해 주세요!
							<br />
							더욱 정교한 추천을 받으실 수 있어요.
						</p>
					</div>
					<div className="style-wrapper">
						<p htmlFor="school_name" className="style-label">
							학교
						</p>
						<div className="style-body">
							<div className="inputsearch-wrapper">
								<div className="inputsearch-input">
									<InputContainer
										className="inputsearch-ellipsis"
										type="text"
										name="school_name"
										placeholder="검색해 주세요."
										autoComplete="off"
										onChange={(e) => handleInputSchool(e)}
									/>
									<svg
										xmlns="https://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 18 18"
									>
										<defs>
											<path
												id="qt2dnsql4a"
												d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
											/>
										</defs>
										<g fill="none" fillRule="evenodd">
											<use
												fill="#333"
												fillRule="nonzero"
												stroke="#333"
												strokeWidth=".3"
												xlinkHref="#qt2dnsql4a"
											/>
										</g>
									</svg>
								</div>
							</div>
						</div>
						<div className="style-guidance" />
					</div>

					<div className="style-wrapper">
						<p className="style-label">직장</p>
						<div className="style-body">
							<div className="inputsearch-wrapper">
								<div className="inputsearch-input">
									<InputContainer
										className="inputsearch-ellipsis"
										type="text"
										name="company_name"
										placeholder="직장을 입력해주세요."
										autoComplete="off"
										onChange={(e) => handleInputCompany(e)}
									/>
									<svg
										xmlns="https://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 18 18"
									>
										<defs>
											<path
												id="qt2dnsql4a"
												d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
											/>
										</defs>
										<g fill="none" fillRule="evenodd">
											<use
												fill="#333"
												fillRule="nonzero"
												stroke="#333"
												strokeWidth=".3"
												xlinkHref="#qt2dnsql4a"
											/>
										</g>
									</svg>
								</div>
							</div>
							<div className="hint-level2">
								신입의 경우, ‘신입’ 또는 ‘없음’을 직접 입력해
								주세요.
							</div>
						</div>
						<div className="style-guidance" />
					</div>
					<Button
						onClick={() => {
							handleUserinfoSubmit();
						}}
						type="button"
						disabled={school.length === 0 || company.length === 0}
					>
						다음
					</Button>
				</div>
			</ComponentsContainer>

			<div className="wrapper-skip">
				<button type="button">
					나중에 입력할게요
					<svg width="12" height="12" viewBox="0 0 12 12">
						<path
							fill="currentColor"
							d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"
						/>
					</svg>
				</button>
			</div>
		</>
	);
}

const Button = styled.button`
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
`;

const ComponentsContainer = styled.div`
	.inputsearch-wrapper,
	.inputsearch-input {
		position: relative;
		> svg {
			position: absolute;
			top: 50%;
			right: 21px;
			-webkit-transform: translateY(-50%);
			transform: translateY(-50%);
			color: #333;
		}
		::after {
			content: '';
			position: absolute;
			top: 50%;
			right: 60px;
			width: 1px;
			height: 28px;
			background-color: #ececec;
			-webkit-transform: translateY(-50%);
			transform: translateY(-50%);
		}
	}
	.inputsearch-ellipsis {
		padding-right: 60px;
		margin-top: 0px;
		text-overflow: ellipsis;
		width: 100%;
		height: 50px;
		padding-left: 15px;
		border-radius: 5px;
		border: 1px solid #e1e2e3;
		background-color: #fff;
		font-size: 15px;
		color: #333;
		appearance: none;
		resize: none;
	}
`;

export default OccupationSetting;
