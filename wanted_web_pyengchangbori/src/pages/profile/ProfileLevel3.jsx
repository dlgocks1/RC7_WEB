import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { JobMainCategoryDummy } from 'utils/mockData';

function ProfileLevel3({ resumeData }) {
	const navigate = useNavigate();

	// const resumeData
	const [resumedataState, setResumeData] = useState(
		resumeData.resumeData.read().data.result[0],
	);
	const [resuemspecial, setResuemspecial] = useState(
		resumeData.resumeSpecialty.read().data.result[0],
	);

	console.log(resumedataState);
	useEffect(() => {
		console.log(resumeData.resumeData.read().data.result);
		if (resumeData.resumeData.read().data.result.length === 0) {
			navigate(`/profile/matching?level=2`);
			return;
		}
		setResumeData(resumeData.resumeData.read().data.result[0]);
		setResuemspecial(resumeData.resumeSpecialty.read().data.result[0]);
	}, [resumeData]);

	const handleClickResume = (resumeIdx) => {
		navigate(`/cv/${resumeIdx}`);
	};

	return (
		<ComponentWrapper>
			<div className="form-class">
				<header className="form-header">
					<dl>
						<dt>기본 이력서</dt>
					</dl>
				</header>
				<div className="formblock">
					<div className="formblock-content content">
						<div className="static-container">
							<div className="static-label">기본 이력서 선택</div>
							<div className="static-body">
								<div>
									<button
										type="button"
										className="defaultresume-selector-button"
										onClick={() => {
											handleClickResume(
												resumedataState.resumeNo,
											);
										}}
									>
										<div className="resumelang-conatiner defaultresume-selector-resumeLang">
											한
										</div>
										<span>이해찬 1</span>
									</button>
								</div>
							</div>
						</div>
						<div className="mainresume-fieldset">
							<div className="static-container">
								<div className="static-label">학교</div>
								<div className="static-body">
									<div>
										<span>
											{resumedataState !== undefined &&
												resumedataState.schoolName}
										</span>
										<span className="resumeentry-minor is-empty">
											{resumedataState !== undefined &&
												resumedataState.major}
										</span>
									</div>
								</div>
							</div>
							<div className="static-container">
								<div className="static-label">직장</div>
								<div className="static-body">
									<div>
										<span className="ResumeEntry-major">
											{resumedataState !== undefined &&
												resumedataState.companyName}
										</span>
										<span className="resumeentry-minor is-empty">
											{resumedataState !== undefined &&
												resumedataState.position}
										</span>
									</div>
								</div>
							</div>
							<Link
								to="/profile/matching?level=2&amp;step=1&amp;modi=true"
								className="interestarea-edit"
							>
								<i className="icon-pencil" />
							</Link>
						</div>
						<div className="mainresume-about">
							{resumedataState !== undefined &&
							resumedataState.introduction
								? resumedataState.introduction
								: '자기소개를 입력해 주세요.'}
						</div>
					</div>
				</div>
			</div>
			<div className="form-class">
				<header className="form-header">
					<dl>
						<dt>전문분야 설정</dt>
					</dl>
				</header>
				<div className="formblock ">
					<div className="formblock-content">
						<div className="interestarea-fieldset">
							<div className="static-container">
								<div className="static-label">직군</div>
								<div className="static-body">
									{
										JobMainCategoryDummy.find(
											(item) =>
												item.idx.toString() ===
												resuemspecial.jobCategory_no,
										).title
									}
								</div>
							</div>
							<div className="static-container">
								<div className="static-label">직무</div>
								<div className="static-body">
									{JobMainCategoryDummy.find(
										(item) =>
											item.idx.toString() ===
											resuemspecial.jobCategory_no,
									)
										.itemList?.filter((it) =>
											resuemspecial.jobCategory_no.includes(
												it.idx,
											),
										)
										.map((value) => `${value.title} `)}
								</div>
							</div>
							<div className="static-container">
								<div className="static-label">경력</div>
								<div className="static-body">
									{resuemspecial.career === 'NEW'
										? '신입'
										: `${resuemspecial.career} 년`}
								</div>
							</div>
							<Link
								to="/profile/matching?level=4&amp;step=1&amp;modi=true"
								className="interestarea-edit"
							>
								<i className="icon-pencil" />
							</Link>
						</div>
					</div>
				</div>
				<div className="formblock  ">
					<div className="formblock-content content">
						<div className="additional-form">
							<div className="formbutton button_container">
								<h6 className="formbutton-label">
									추천인 선택
								</h6>
								<button
									type="button"
									className="formbutton-button"
								>
									선택하기
									<i className="icon-arrow_right" />
								</button>
							</div>
							<div className="formbutton button_container">
								<h6 className="formbutton-label">
									제외기업설정
								</h6>
								<button
									type="button"
									className="formbutton-button"
								>
									선택하기
									<i className="icon-arrow_right" />
								</button>
							</div>
							<div className="inputgroup">
								<h6 className="inputgroup-label">
									구직 여부 설정
								</h6>
								<div className="inputgroup-body">
									<div className="jobsaerch-selector-wrapper">
										<select className="jobsaerch-selector-select">
											<option value="NOW">
												현재 구직 중
											</option>
											<option value="INTEREST">
												관심 있음
											</option>
											<option value="NO">
												전혀 관심 없음
											</option>
										</select>
									</div>
									<span className="jobsaerch-selector-status">
										이력서 공개중
									</span>
									<p className="desc-text">
										기업으로부터 면접 제안을 받으실 수
										있습니다.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ComponentWrapper>
	);
}
const ComponentWrapper = styled.div`
	font-family: inherit;

	.desc-text {
		color: #08ba9c;
		font-size: 12px;
		position: absolute;
		bottom: -10px;
	}

	.inputgroup {
		margin-top: -3px;
		margin-bottom: -12px;
		display: block;
		position: relative;
		padding: 15px 0;
		.inputgroup-label {
			position: absolute;
			top: 50%;
			left: 0;
			width: 150px;
			padding-right: 10px;
			color: #999;
			font-size: 16px;
			line-height: inherit;
			transform: translateY(-50%);
		}
		.inputgroup-body {
			display: flex;
			width: calc(100% - 150px);
			margin-left: 150px;
		}
		.jobsaerch-selector-wrapper {
			position: relative;
			display: inline-block;
			min-width: 124px;
			.jobsaerch-selector-select {
				cursor: pointer;
				position: relative;
				z-index: 1;
				width: 100%;
				appearance: none;
				font-size: 16px;
				font-family: inherit;
				font-weight: 600;
				text-align: left;
				color: #258bf7;
				padding: 10px 20px 10px 10px;
				border: none;
				background: none;
				option {
					color: #333;
				}
			}
			::after {
				content: '';
				top: 50%;
				right: 0;
				position: absolute;
				margin-right: 10px;
				-webkit-transform: translateY(-50%);
				transform: translateY(-50%);
				border-top: 6px solid #258bf7;
				border-left: 4px solid transparent;
				border-right: 4px solid transparent;
			}
		}
		.jobsaerch-selector-status {
			font-size: 16px;
			line-height: 42px;
			color: #333;
			::before {
				content: 'ㅣ';
				margin-right: 6px;
				margin-left: 10px;
				color: #ccc;
			}
			.desc-text {
				color: #08ba9c;
				font-size: 12px;
				position: absolute;
				bottom: -20px;
			}
		}
	}

	.button_container {
		display: block;
		position: relative;
		padding: 15px 0;
		button {
			font-family: inherit;
			width: calc(100% - 150px);
			padding: 12px 0;
			margin-left: 150px;
			position: relative;
			color: #ccc;
			font-size: 16px;
			text-align: left;
			font-weight: 400;
			border: 0;
			border-bottom: 1px solid #e1e2e3;
		}
		.icon-arrow_right {
			top: 50%;
			right: 0;
			position: absolute;
			color: #999;
			font-size: 24px;
			transform: translateY(-50%);
		}
	}
	.formbutton-label {
		margin-bottom: 5px;
		position: absolute;
		top: 50%;
		left: 0;
		width: 150px;
		padding-right: 10px;
		color: #999;
		font-size: 16px;
		line-height: inherit;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
	}

	.interestarea-fieldset {
		position: relative;

		:hover i {
			opacity: 1;
		}
	}
	.interestarea-edit {
		position: absolute;
		top: -3px;
		right: 0;
		color: #258bf7;
		> i {
			opacity: 0;
			font-size: 19px;
		}
	}
	.icon-edit {
		opacity: 1;
	}
	.additional-form {
		padding-top: 18px;
		padding-bottom: 15px;
	}

	.form-class .formblock {
		margin-top: 43px;
	}
	.formblock + .formblock {
		border-top: 5px solid #f8f8fa;
	}
	.mainresume-about {
		text-overflow: ellipsis;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		max-height: inherit;
		position: relative;
		overflow: hidden;
		max-height: 66px;
		margin-top: 28px;
		font-size: 14px;
		line-height: 1.57;
		color: #999;
		white-space: pre-line;
	}
	.mainresume-fieldset {
		position: relative;
		margin-top: 28px;
		:hover i {
			opacity: 1;
		}
	}
	.static-container {
		position: relative;
		font-size: 16px;
	}
	.static-container + .static-container {
		margin-top: 24px;
	}
	.form-class {
		position: relative;
		padding-bottom: 38px;
		padding: 41px 0 30px;
		border: 1px solid #e1e2e3;
		border-radius: 3px;
		background-color: #fff;
		margin-bottom: 10px;
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
	}
	.formblock {
		margin-top: 36px;
	}
	.formblock-content {
		padding-right: 30px;
		padding-left: 30px;
	}
	.static-container {
		position: relative;
		font-size: 16px;
	}
	.static-label {
		display: flex;
		justify-content: space-between;
		align-items: center;
		line-height: 24px;
		color: #999;
	}
	.static-body {
		margin-top: 9px;
	}
	.resumeentry-minor {
		color: #999;
		::before {
			content: ' | ';
			color: #ccc;
		}
	}
	.is-empty {
		color: #ff415c;
	}
	.defaultresume-selector-button {
		position: relative;
		width: 100%;
		height: 50px;
		padding-right: 20px;
		padding-left: 20px;
		border-radius: 3px;
		border: 1px solid #e1e2e3;
		margin-top: -2px;
		text-align: left;
		display: flex;
		align-items: center;
	}
	.resumelang-conatiner {
		width: 20px;
		height: 20px;
		border-radius: 2px;
		border: 1px solid #999;
		font-size: 11px;
		font-weight: 400;
		font-stretch: normal;
		font-style: normal;
		line-height: 20px;
		letter-spacing: normal;
		color: #999;
		text-align: center;
	}
	.defaultresume-selector-button {
		::after {
			content: '';
			top: 50%;
			right: 20px;
			position: absolute;
			transform: translateY(-50%);
			border-top: 6px solid #999;
			border-left: 4px solid transparent;
			border-right: 4px solid transparent;
		}
		span {
			font-family: inherit;
			font-size: 15px;
		}
	}
	.resumelang-conatiner {
		width: 20px;
		height: 20px;
		margin-right: 10px;
		border-radius: 2px;
		border: 1px solid #999;
		font-size: 11px;
		font-weight: 400;
		font-stretch: normal;
		font-style: normal;
		line-height: 20px;
		letter-spacing: normal;
		color: #999;
		text-align: center;
	}
`;
export default ProfileLevel3;
