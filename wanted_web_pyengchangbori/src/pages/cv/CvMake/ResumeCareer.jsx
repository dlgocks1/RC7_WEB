/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ResumeDetailList from './ResumeDetailList';

function ResumeCareer({
	isLink,
	isCareer,
	isSkill,
	isEducation,
	title,
	content,
	setEducationData,
	setLinkdata,
	setCompanyCareer,
	userCvdata,
}) {
	const [addDetail, setAddDetail] = useState([]);

	useEffect(() => {
		if (userCvdata !== undefined) {
			if (isCareer) {
				setAddDetail([...addDetail, {}]);
			}
			if (isEducation) {
				setAddDetail([...addDetail, {}]);
			}
			if (isLink && userCvdata.linkUrl !== null) {
				setAddDetail([...addDetail, {}]);
			}
		}
	}, []);

	return (
		<ComponentWrapper>
			<div className="resumecontentlist-header resume-list-header">
				{title}
			</div>
			<p className="resumecontentlist-guide">
				{content.split('<br/>').map((line) => (
					<>
						{line}
						<br />
					</>
				))}
			</p>
			{isCareer && (
				<button type="button" className="banner">
					<div className="banner-content">
						<div className="banner-content-text">
							<p>내 경력 정보를 한 번에 불러올까요?</p>
							<p className="Banner_subTitle__eINOg">
								기억 안 나는 경력 정보, 알아서 채워드려요!
							</p>
						</div>
						<div className="banner-content-btn">
							<strong>내 경력 한눈에 모아보기</strong>
							<svg width="12" height="12">
								<path
									fill="currentColor"
									d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
								/>
							</svg>
						</div>
					</div>
				</button>
			)}

			<div className="ResumeContentList_ResumeContentList__body__TcdNe">
				<button
					onClick={() => {
						setAddDetail([...addDetail, {}]);
					}}
					type="button"
					className="resumecontentlist-body-btn-add"
				>
					+ 추가
				</button>
				{isCareer &&
					addDetail.map((value) => (
						<ResumeDetailList
							userCvdata={userCvdata}
							setCompanyCareer={setCompanyCareer}
							isCareer={isCareer}
							isSkill={isSkill}
							isEducation={isEducation}
							isLink={isLink}
						/>
					))}
				{isEducation &&
					addDetail.map((value) => (
						<ResumeDetailList
							userCvdata={userCvdata}
							setEducationData={setEducationData}
							isEducation={isEducation}
						/>
					))}
				{isLink &&
					addDetail.map((value) => (
						<ResumeDetailList
							setLinkdata={setLinkdata}
							userCvdata={userCvdata}
							isLink={isLink}
						/>
					))}
			</div>
		</ComponentWrapper>
	);
}
const ComponentWrapper = styled.div`
	.input-education-container {
		color: rgb(59, 61, 64);
		margin: 0px;
		font-size: 12px;
		padding: 0;
		width: 100%;
		padding-left: 3px;
		height: 28px;
		font-family: inherit;
		::placeholder {
			font-size: 10px;
		}
	}
	.period-checkbox input {
		top: 2px;
		width: 14px;
		height: 14px;
		margin: 0 5px 0 0;
		position: relative;
		border: 0;
		background-image: url(https://static.wanted.co.kr/images/userweb/checkbox.svg);
		background-size: cover;
		-webkit-appearance: none;
		:checked {
			background-image: url(https://static.wanted.co.kr/images/userweb/checkbox_.svg);
		}
	}

	.sortableitem-container {
		margin: 0;
		padding: 30px;
		position: relative;
		border-radius: 0;
		border: none;
		border-bottom: 1px solid #f1f1f1;
		background-color: transparent;
	}
	.draghandler {
		position: absolute;
		cursor: move;
		display: none;
		top: 35px;
		left: 10px;
	}
	.period-form-end {
		display: inline-block;
	}
	.datetiem-isrequired {
		color: #fe415c;
	}
	.resumeInput-container {
		font-family: inherit;
		font-size: 16px;
		width: 100%;
		color: rgb(59, 61, 64);
	}
	.careeritem-container {
		display: flex;
		flex-direction: row;
		> div:first-of-type {
			flex: 3 1;
		}
		> div:nth-of-type(2) {
			flex: 9 1;
		}
		> div {
			display: flex;
			flex-direction: column;
			width: 100%;
		}
	}
	.searchmodalinput-input {
		color: #333 !important;
		font-size: 26px;
		font-family: inherit;
		font-weight: 600;
		text-overflow: ellipsis;
		overflow: hidden;
		border: none;
		padding: 0;
		margin-bottom: 10px;
		border-radius: 0;
		::placeholder {
			color: #ccc !important;
			font-size: 20px;
		}
	}
	.btn-delete {
		position: absolute;
		color: #d1d1d1;
		font-size: 10px;
		padding: 15px;
		border: 0;
		background-color: transparent;
		top: 21px;
		right: 15px;
	}
	.period-datetime {
		position: relative;
	}
	.period-form {
		display: inline-block;
		margin-top: 0;
		height: auto;
		padding: 0;
		border: none;
		border-radius: 0;
		font-size: 14px;
		font-weight: 500;
		background-color: transparent;
		box-shadow: none !important;
		-webkit-appearance: none;
		resize: none;
		.month {
			width: 26px;
			margin-left: 4px;
		}
		.year {
			width: 36px;
		}
	}

	.resumecontentlist-body-container {
		font-size: 16px;
		padding: 20px 0;
		font-weight: 600;
		text-align: left;
		font-family: inherit;
		color: #36f;
		background-color: transparent;
	}

	.period-checkbox {
		margin: 16px 0 30px;
		display: flex;
		align-items: flex-start;
		color: rgba(0, 0, 0, 0.4);
		font-size: 14px;
		font-weight: 600;
	}
`;
export default ResumeCareer;
