import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CustomPatch } from 'utils/api';

function ProfileLevel1({ setReload, fetchTest, userId, jwt }) {
	const [baseProfileData, setBaseProfileData] = useState(
		fetchTest.read().data.result[0],
	);
	const navigate = useNavigate();

	const [name, setName] = useState(baseProfileData.name);
	const [phone, setPhone] = useState(baseProfileData.phone);
	const [email, setEmail] = useState(baseProfileData.email);

	const handleChangeInput = (e, type) => {
		if (type === 'name') {
			setName(e.target.value);
		}
		if (type === 'email') {
			setEmail(e.target.value);
		}
		if (type === 'phone') {
			setPhone(e.target.value);
		}
	};

	async function handleSubmitUserInfo() {
		const result = await CustomPatch({
			url: `/web/profile/${userId}`,
			body: {
				email,
				name,
				phone,
			},
			headers: {
				'x-access-token': jwt,
			},
		});
		setReload(Math.random());
		if (result.isSuccess) {
			navigate('/profile/matching?level=3');
		}
	}

	return (
		<ComponentWrapper>
			<div className="form-container">
				<header className="form-header">
					<dl className="Form-title">
						<dt>기본정보 수정</dt>
						<dd>
							지원 결과 또는 추천 포지션 정보를 받아볼
							이메일/연락처 정보 입력해주세요.
						</dd>
					</dl>
				</header>
				<div className="formblock">
					<div className="formblock-content content">
						<label htmlFor="name" className="input-container">
							<h6>이름</h6>
							<input
								id="name"
								type="text"
								autoComplete="off"
								value={name}
								onChange={(e) => handleChangeInput(e, 'name')}
							/>
						</label>
						<label htmlFor="email" className="input-container">
							<h6>이메일</h6>
							<input
								id="email"
								type="email"
								onChange={(e) => handleChangeInput(e, 'email')}
								autoComplete="off"
								value={email}
							/>
						</label>
						<div className="basicinfo-mobile-container basicinfo-mobile-confirm is-kr">
							<label htmlFor="mobile" className="input-container">
								<h6>휴대폰 번호</h6>
								<input
									id="mobile"
									type="text"
									onChange={(e) =>
										handleChangeInput(e, 'phone')
									}
									autoComplete="off"
									value={phone}
								/>
							</label>
							{/* <button
								type="button"
								className="style_wrapper__IgK7U is-ghost"
							>
								<p>인증된 번호</p>
								<span className="SvgIcon_SvgIcon__root__8vwon">
									<svg
										className="SvgIcon_SvgIcon__root__svg__DKYBi"
										viewBox="0 0 15 15"
									>
										<defs>
											<path
												id="al3je9dvha"
												d="M576.95 196.13c-.217-.217-.57-.217-.787 0-.217.218-.217.57 0 .788l3.71 3.71c.217.217.57.217.787 0l6.677-6.678c.217-.217.217-.57 0-.787-.217-.217-.57-.217-.787 0l-6.284 6.284-3.316-3.316z"
											/>
										</defs>
										<g
											fill="currentColor"
											fillRule="evenodd"
										>
											<g transform="translate(-575 -192)">
												<use
													fill="#3366FF"
													fillRule="nonzero"
													stroke="#FFF"
													strokeWidth=".3"
													xlinkHref="#al3je9dvha"
												/>
											</g>
										</g>
									</svg>
								</span>
							</button> */}
						</div>
					</div>
				</div>
				<footer className="formfooter">
					<button
						onClick={() => handleSubmitUserInfo()}
						type="button"
						disabled={!name || !email || !phone}
					>
						완료
					</button>
				</footer>
			</div>
		</ComponentWrapper>
	);
}
const ComponentWrapper = styled.div`
	.form-container {
		padding: 41px 0 30px;
		border: 1px solid #e1e2e3;
		border-radius: 3px;
		background-color: #fff;
	}
	.form-header {
		padding-right: 30px;
		padding-left: 30px;
		dt {
			color: #333;
			font-size: 20px;
			font-weight: 600;
			line-height: 1;
		}
		dd {
			margin-top: 18px;
			color: #9a9a9a;
			font-size: 16px;
			font-weight: 400;
			line-height: 1.8;
		}
	}
	.formblock {
		margin-top: 43px;
	}
	.formblock-content {
		padding-right: 30px;
		padding-left: 30px;
	}
	.input-container {
		width: 100%;
		display: block;
		position: relative;
		padding: 15px 0;
		font-family: inherit;
		h6 {
			top: 30px;
			left: 0;
			width: 150px;
			position: absolute;
			color: #999;
			font-size: 16px;
		}
		input {
			border: none;
			border-bottom: 1px solid #e1e2e3 !important;
			width: calc(100% - 150px);
			padding: 12px 0;
			font-family: inherit;
			margin-left: 150px;
			color: #333;
			font-size: 16px;
			outline: none;
			font-weight: 400;
			border-bottom: 1px solid #e1e2e3;
		}
	}
	.basicinfo-mobile-container button {
		width: 80px;
		height: 32px;
		position: absolute;
		top: 20px;
		left: 50%;
		padding: 6px;
		margin-bottom: 5px;
		border-radius: 5px;
		border-color: #e1e2e3;
		color: #666;
		font-size: 14px;
	}
	.basicinfo-mobile-confirm span {
		display: block;
		width: 16px;
		height: 16px;
		margin-left: 5px;
		margin-top: 3px;
		margin-bottom: 0 !important;
	}
	.formfooter {
		padding-right: 30px;
		padding-left: 30px;
		text-align: right;
		margin-top: 45px;
		button {
			width: 190px;
			height: 50px;
			border-radius: 3px;
			background-color: #258bf7;
			color: #fff;
			font-size: 18px;
			font-weight: 600;
			margin-left: 20px;
			:disabled {
				background-color: #ccc;
			}
		}
	}
`;
export default ProfileLevel1;
