/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';

function ResumeDetailList({
	setResumeData,
	isLink,
	isCareer,
	isSkill,
	isEducation,
	setEducationData,
	setLinkdata,
	setCompanyCareer,
	userCvdata,
}) {
	const [exportData, setExportData] = useState({});

	const [isWorking, setIsWorking] = useState(false);
	const [title, setTitle] = useState('');
	const [subtitle, setSubTitle] = useState('');
	const [educationText, setEducationText] = useState('');

	const [startYear, setStartYear] = useState('');
	const [endYear, setEndYear] = useState('');
	const [startMonth, setStartMonth] = useState('');
	const [endMonth, setEndMonth] = useState('');
	const [titleInput, setTitleInput] = useState('');
	const [subtitleInput, setSubTitleInput] = useState('');
	const [eduInput, setEduInput] = useState('');

	const handleChangeDate = (e, type) => {
		if (type === 'SY') {
			setStartYear(e.target.value);
		}
		if (type === 'SM') {
			setStartMonth(e.target.value);
		}
		if (type === 'EY') {
			setEndYear(e.target.value);
		}
		if (type === 'EM') {
			setEndMonth(e.target.value);
		}
		if (type === 'MT') {
			setTitleInput(e.target.value);
		}
		if (type === 'MT') {
			setTitleInput(e.target.value);
		}
		if (type === 'ST') {
			setSubTitleInput(e.target.value);
		}
		if (type === 'ET') {
			setEduInput(e.target.value);
		}
	};

	useEffect(() => {
		if (isCareer) {
			setCompanyCareer(exportData);
		}
		if (isEducation) {
			setEducationData(exportData);
		}
		if (isLink) {
			setLinkdata(exportData);
		}
	}, [exportData]);

	useEffect(() => {
		if (isCareer) {
			setExportData({
				...exportData,
				name: titleInput,
				position: subtitleInput,
			});
		}
		if (isEducation) {
			setExportData({
				...exportData,
				name: titleInput,
				major: subtitleInput,
				contents: eduInput,
			});
		}
		if (isLink) {
			setExportData({
				link_Url: subtitleInput,
			});
		}
	}, [titleInput, subtitleInput, eduInput]);

	useEffect(() => {
		if (isWorking) {
			if (isEducation) {
				setExportData({
					...exportData,
					start: `${startYear}.${startMonth}`,
					end: ``,
					attending: 'Y',
				});
			}
			if (isCareer) {
				setExportData({
					...exportData,
					start: `${startYear}.${startMonth}`,
					end: ``,
					working: 'Y',
				});
			}
		} else {
			if (isEducation) {
				setExportData({
					...exportData,
					start: `${startYear}.${startMonth}`,
					end: `${endYear}.${endMonth}`,
					attending: 'N',
				});
			}
			if (isCareer) {
				setExportData({
					...exportData,
					start: `${startYear}.${startMonth}`,
					end: `${endYear}.${endMonth}`,
					working: 'N',
				});
			}
		}
	}, [startYear, endYear, startMonth, endMonth, isWorking]);

	useEffect(() => {
		if (isCareer) {
			setTitle('회사명');
			setSubTitle('부서명/직책');
		}
		if (isEducation) {
			setTitle('학교명');
			setSubTitle('전공 및 학위 (ex: 경영학과 학사)');
			setEducationText('이수과목 또는 연구내용');
		}
		if (isLink) {
			setSubTitle('http://');
		}
	}, []);

	console.log(userCvdata);
	useEffect(() => {
		if (userCvdata !== undefined) {
			if (isCareer) {
				setExportData(userCvdata.company_career[0]);
				setTitleInput(userCvdata.company_career[0].companyName);
				setSubTitleInput(
					userCvdata.company_career[0].departmentPosition,
				);

				setStartYear(
					userCvdata.company_career[0].joinDate
						? userCvdata.company_career[0].joinDate.slice(0, 4)
						: '',
				);

				setStartMonth(
					userCvdata.company_career[0].joinDate
						? userCvdata.company_career[0].joinDate.slice(5, 7)
						: '',
				);
				setEndYear(
					userCvdata.company_career[0].workDate
						? userCvdata.company_career[0].workDate.slice(0, 4)
						: '',
				);
				setEndMonth(
					userCvdata.company_career[0].workDate
						? userCvdata.company_career[0].workDate.slice(5, 7)
						: '',
				);
				setIsWorking(userCvdata.company_career[0].working === 'Y');
			}
			if (isEducation) {
				setExportData(userCvdata.school[0]);
				setTitleInput(userCvdata.school[0].schoolName);
				setSubTitleInput(userCvdata.school[0].majorDegree);

				setStartYear(
					userCvdata.school[0].admissionDate
						? userCvdata.school[0].admissionDate.slice(0, 4)
						: '',
				);

				setStartMonth(
					userCvdata.school[0].admissionDate
						? userCvdata.school[0].admissionDate.slice(5, 7)
						: '',
				);
				setEndYear(
					userCvdata.school[0].graduateDate
						? userCvdata.school[0].graduateDate.slice(0, 4)
						: '',
				);
				setEndMonth(
					userCvdata.school[0].graduateDate
						? userCvdata.school[0].graduateDate.slice(5, 7)
						: '',
				);
				setIsWorking(userCvdata.school[0].Attending === 'Y');
			}

			if (isLink) {
				setSubTitleInput(userCvdata.linkUrl);
			}
		}
	}, []);
	return (
		<ul className="">
			<li className="sortableitem-container">
				{/* <div className="draghandler">
					<div className="DragHandler_DragHandler_handler__D_XV_" />
				</div> */}
				<div className="careeritem-container clearfix">
					{!isLink && (
						<div>
							<div>
								<div className="period-datetime">
									<div className="period-form">
										<div>
											<input
												name="startYear"
												field="start_year"
												type="text"
												maxLength="4"
												className="year"
												onChange={(e) => {
													handleChangeDate(e, 'SY');
												}}
												value={startYear}
												placeholder="YYYY"
											/>
											<span>
												.
												<input
													name="startMonth"
													type="text"
													maxLength="2"
													onChange={(e) => {
														handleChangeDate(
															e,
															'SM',
														);
													}}
													value={startMonth}
													className="month"
													placeholder="MM"
												/>
											</span>
										</div>
									</div>
									{!isWorking && (
										<div className="period-form-end">
											<span>-</span>
											<div className="period-form">
												<input
													name="endYear"
													type="text"
													maxLength="4"
													onChange={(e) => {
														handleChangeDate(
															e,
															'EY',
														);
													}}
													value={endYear}
													className="year"
													placeholder="YYYY"
												/>
											</div>
											<div className="period-form">
												<span>.</span>
												<input
													name="endMonth"
													type="text"
													onChange={(e) => {
														handleChangeDate(
															e,
															'EM',
														);
													}}
													maxLength="2"
													value={endMonth}
													className="month"
													placeholder="MM"
												/>
											</div>
											<span className="datetiem-isrequired">
												*
											</span>
										</div>
									)}
								</div>
								<div className="period-checkbox">
									<input
										onClick={() => {
											setIsWorking(!isWorking);
										}}
										type="checkbox"
										name="checked"
										value={isWorking}
										checked={isWorking}
									/>
									<label htmlFor="checked">현재 재직중</label>
								</div>
							</div>
						</div>
					)}
					<div>
						{!isLink && (
							<div>
								<form action=".">
									<div>
										<input
											type="text"
											className="searchmodalinput-input resume-input"
											onChange={(e) => {
												handleChangeDate(e, 'MT');
											}}
											placeholder={title}
											name="maintitle"
											value={titleInput}
										/>
									</div>
								</form>
							</div>
						)}

						<div>
							<input
								className="resumeInput-container resume-input title careers"
								type="text"
								maxLength="255"
								onChange={(e) => {
									handleChangeDate(e, 'ST');
								}}
								value={subtitleInput}
								placeholder={subtitle}
								name="title"
							/>
						</div>
						{isCareer && (
							<div>
								<div>
									<button
										type="button"
										className="resumecontentlist-body-container"
									>
										+ 주요 성과 추가
									</button>
								</div>
							</div>
						)}
						{isEducation && (
							<div>
								<input
									className="input-education-container"
									type="text"
									maxLength="255"
									onChange={(e) => {
										handleChangeDate(e, 'ET');
									}}
									placeholder={educationText}
									name="title"
								/>
							</div>
						)}
					</div>
					<button type="button" className="btn-delete">
						<i className="icon-close" />
					</button>
				</div>
			</li>
		</ul>
	);
}

export default ResumeDetailList;
