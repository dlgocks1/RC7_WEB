import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ResumeList from './ResumeList';

function ResumeDetailBody({
	setExportData,
	cvData,
	introduction,
	setIntroduction,
}) {
	const [userCvdata, setUserCvdata] = useState(
		cvData !== undefined ? cvData.read().data.result : undefined,
	);
	const [companyCareer, setCompanyCareer] = useState({});
	const [educationData, setEducationData] = useState({});
	const [linkData, setLinkdata] = useState({});

	const textareaRef = useRef(null);
	// console.log(linkData);
	// console.log(educationData);
	// console.log(companyCareer);

	const handleChangeIntrodesc = (e) => {
		setIntroduction(e.target.value);
	};

	useEffect(() => {
		// setExportData({
		// 	introduction,
		// 	company_career: [companyCareer],
		// 	school: [educationData],
		// 	link: [linkData],
		// });
		setExportData({
			introduction,
			company_career: [
				[
					{ name: companyCareer.name },
					{ position: companyCareer.position },
					{ start: companyCareer.start },
					{ end: companyCareer.end },
					{ working: companyCareer.working },
				],
			],
			school: [
				[
					{ name: educationData.name },
					{ major: educationData.major },
					{ contents: educationData.contents },
					{ start: educationData.start },
					{ end: educationData.end },
					{ attending: educationData.attending },
				],
			],
			link: [linkData],
		});
	}, [linkData, introduction, educationData, companyCareer]);

	useEffect(() => {
		textareaRef.current.style.height = '0px';
		const { scrollHeight } = textareaRef.current;
		textareaRef.current.style.height = `${scrollHeight}px`;
	}, [introduction]);

	return (
		<ComponentWrapper>
			<div style={{ marginBottom: '60px' }}>
				<div className="ResumeDetail_ResumeDetail__body__basic__title__StGBM">
					<div>
						<input
							className="ResumeInput_ResumeInput__spGWu resume-input title basic"
							type="text"
							maxLength="100"
							placeholder="이력서 제목(필수)"
							name="title"
							value={
								userCvdata !== undefined
									? userCvdata.resume_name
									: '평창보리'
							}
						/>
					</div>
				</div>
				<div>
					<input
						className="ResumeInput_ResumeInput__spGWu resume-input name"
						type="text"
						maxLength="100"
						placeholder="이름(필수)"
						name="name"
						value={
							userCvdata !== undefined
								? userCvdata.resume_name
								: '평창보리'
						}
					/>
				</div>
				<div>
					<input
						className="ResumeInput_ResumeInput__spGWu resume-input email"
						type="email"
						maxLength="120"
						placeholder="이메일(필수)"
						name="email"
						value={
							userCvdata !== undefined
								? userCvdata.email
								: 'cksgodl1@naver.com'
						}
					/>
				</div>
				<div>
					<input
						className="ResumeInput_ResumeInput__spGWu resume-input mobile"
						type="tel"
						maxLength="200"
						placeholder="연락처(필수) ex) 010-0000-0000"
						name="mobile"
						value={
							userCvdata !== undefined
								? userCvdata.phone
								: '01026972321'
						}
					/>
				</div>
			</div>

			<div className="resumeDetail-body-about">
				<div className="ResumeDetail_ResumeDetail__body__about__header__YwQml">
					간단 소개글
				</div>
				<p className="ResumeDetail_ResumeDetail__body_guide__L73GX">
					• 본인의 업무 경험을 기반으로 핵심역량과 업무 스킬을 간단히
					작성해주세요. <br />• 3~5줄로 요약하여 작성하는 것을
					추천합니다!
				</p>
				<div className="dynamic-textarea">
					<textarea
						ref={textareaRef}
						onChange={(e) => {
							handleChangeIntrodesc(e);
						}}
						className="resumeinput-textarea"
					>
						{userCvdata !== undefined
							? userCvdata.introduction
							: '자기소개를 적어주세요.'}
					</textarea>
				</div>
			</div>

			<ResumeList
				userCvdata={userCvdata}
				setEducationData={setEducationData}
				setLinkdata={setLinkdata}
				setCompanyCareer={setCompanyCareer}
			/>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	position: relative;
	padding-bottom: 50px;
	.ResumeDetail_ResumeDetail__body__about__header__YwQml {
		padding: 20px 0 6px;
		font-size: 16px;
		font-weight: 500;
		color: #3b3d40;
		border-bottom: 1px solid #bababa;
	}
	.ResumeDetail_ResumeDetail__body_guide__L73GX {
		white-space: pre-wrap;
		padding: 10px;
		background-color: #f3f9fe;
		font-size: 12px;
		line-height: 1.42;
		letter-spacing: normal;
		color: #666;
		margin-top: 10px;
	}
	.resumeinput-textarea {
		white-space: pre-wrap;
		word-break: break-all;
		word-wrap: break-word;
		caret-color: #000;
		overflow: hidden;
		line-height: 22px;
		box-shadow: none !important;
		-webkit-appearance: none;
		resize: none;
		font-size: 16px;
		color: rgb(59, 61, 64);
		margin: 30px 0px 3px;
		background-color: transparent;
		border: none;
		padding: 0;
		margin-bottom: 3px;
		border-radius: 0;
		height: auto;
		width: 100%;
		font-family: inherit;
	}

	.dynamic-textarea {
		position: relative;
		overflow-x: hidden;
	}
	input,
	textarea {
		-moz-appearance: none;
		-webkit-appearance: none;
		resize: none;
		border: none;
		outline: none;
	}

	.ResumeInput_ResumeInput__spGWu.email,
	.ResumeInput_ResumeInput__spGWu.mobile,
	.ResumeInput_ResumeInput__spGWu.name {
		font-size: 16px;
		margin-top: 10px;
		margin-bottom: 0;
	}
	.ResumeDetail_ResumeDetail__body__basic__title__StGBM {
		padding-top: 130px;
	}

	.ResumeInput_ResumeInput__spGWu.title.basic {
		color: #3b3d40;
		font-size: 36px;
		line-height: 36px;
		font-weight: 500;
		font-family: inherit;
		margin: 0 0 50px;
		white-space: pre-wrap;
		word-wrap: break-word;
		border: none;
		-webkit-appearance: none;
		resize: none;
		outline: none;
	}
`;

export default ResumeDetailBody;
