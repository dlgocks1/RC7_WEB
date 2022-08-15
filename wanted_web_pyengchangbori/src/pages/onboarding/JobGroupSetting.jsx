/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { CustomPost } from 'utils/api';

function JobGroupSetting({ userId, jwt }) {
	const navigate = useNavigate();

	const [jobGroup, setJobGroup] = useState('-2');
	const [duty, setDuty] = useState('-2');
	const [career, setCareer] = useState('-2');
	const [acceptEventEmail, setAcceptEventEmail] = useState(false);

	console.log(userId, jwt);
	console.log(jobGroup);
	console.log(career);
	const handleUserinfoSubmit = () => {
		const result = CustomPost({
			url: `/web/users/${userId}/specialty`,
			body: {
				jobCategory_no: jobGroup,
				dutyCategory_no: duty,
				career: career === 'NEW' ? 'NEW' : Number(career),
				skill: [
					{ skillName: 'Python' },
					{ skillName: 'C' },
					{ skillName: 'C#' },
				],
				specialtyNotice: acceptEventEmail ? 'Y' : 'N',
			},
			headers: {
				'x-access-token': jwt,
			},
		});
		result.then((res) => {
			console.log(res);
			if (res.code === 1007) {
				navigate('/onboarding?level=2&fromSignup=Y');
			}
		});
	};

	const handleSelectJob = (e, type) => {
		// 태그로 들어감
		if (e.target.value === '-1') {
			if (type === 'jobgroup') {
				setJobGroup('-2');
			}
			if (type === 'career') {
				setCareer('-2');
			}
			if (type === 'duty') {
				setDuty('-2');
			}
		} else {
			if (type === 'jobgroup') {
				setJobGroup(e.target.value);
			}
			if (type === 'career') {
				setCareer(e.target.value);
			}
			if (type === 'duty') {
				setDuty(e.target.value);
			}
		}
	};
	return (
		<div className="wrapper-body-container">
			<div className="header-wrapper">
				<p className="header-desc">
					어떤 일을 하고 계신가요?
					<br />딱 맞는 회사와 콘텐츠를 추천해 드려요!
				</p>
			</div>
			<div className="style-wrapper">
				<p className="style-label">직군</p>
				<div className="style-body">
					<SelectWrapper hasType={jobGroup}>
						<select
							onChange={(e) => {
								handleSelectJob(e, 'jobgroup');
							}}
							name="category_id"
							value={jobGroup}
						>
							<option value="-2" disabled hidden>
								선택해 주세요.
							</option>
							<option value="-1">직군을 선택해 주세요.</option>
							<option value="2">개발</option>
							<option value="507">경영·비즈니스</option>
							<option value="523">마케팅·광고</option>
							<option value="511">디자인</option>
							<option value="530">영업</option>
							<option value="510">고객서비스·리테일</option>
							<option value="517">HR</option>
							<option value="959">게임 제작</option>
							<option value="524">미디어</option>
							<option value="513">엔지니어링·설계</option>
							<option value="508">금융</option>
							<option value="532">물류·무역</option>
							<option value="515">의료·제약·바이오</option>
							<option value="522">제조·생산</option>
							<option value="10101">교육</option>
							<option value="10057">식·음료</option>
							<option value="521">법률·법집행기관</option>
							<option value="509">건설·시설</option>
							<option value="514">공공·복지</option>
						</select>
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							className="select-icon"
						>
							<path
								fill="currentColor"
								d="M16 9.25a.75.75 0 01.586 1.218l-3.986 5a.75.75 0 01-1.17.002l-4.015-5A.75.75 0 018 9.25h8z"
							/>
						</svg>
					</SelectWrapper>
					<div className="hint-level1">
						신입의 경우, 희망 직군을 선택해 주세요.
					</div>
				</div>
				<div className="style-guidance" />
			</div>

			{jobGroup !== '-2' && (
				<div className="style-wrapper">
					<p className="style-label">직무</p>
					<div className="style-body">
						<SelectWrapper hasType={duty}>
							<select
								name="sub_category_ids"
								className="Level1_subCategory__k5AMa"
								onChange={(e) => {
									handleSelectJob(e, 'duty');
								}}
								value={duty}
							>
								<option value="-2" disabled>
									선택해 주세요.
								</option>
								<option value="2">웹 개발자</option>
								<option value="3">서버 개발자</option>
								<option value="4">프론트엔드 개발자</option>
								<option value="5">소프트웨어 엔지니어</option>
								<option value="6">자바 개발자</option>
								<option value="7">안드로이드 개발자</option>
								<option value="8">iOS 개발자</option>
								<option value="9">Node.js 개발자</option>
								<option value="10">C,C++ 개발자</option>
								<option value="655">데이터 엔지니어</option>
								<option value="674">
									DevOps / 시스템 관리자
								</option>
								<option value="899">파이썬 개발자</option>
								<option value="665">
									시스템,네트워크 관리자
								</option>
								<option value="1634">머신러닝 엔지니어</option>
								<option value="1024">
									데이터 사이언티스트
								</option>
								<option value="1025">빅데이터 엔지니어</option>
								<option value="676">QA,테스트 엔지니어</option>
								<option value="1026">기술지원</option>
								<option value="877">개발 매니저</option>
								<option value="671">보안 엔지니어</option>
								<option value="876">프로덕트 매니저</option>
								<option value="1027">
									블록체인 플랫폼 엔지니어
								</option>
								<option value="893">PHP 개발자</option>
								<option value="658">임베디드 개발자</option>
								<option value="939">웹 퍼블리셔</option>
								<option value="10111">
									크로스플랫폼 앱 개발자
								</option>
								<option value="672">하드웨어 엔지니어</option>
								<option value="10231">DBA</option>
								<option value="661">.NET 개발자</option>
								<option value="896">영상,음성 엔지니어</option>
								<option value="795">
									CTO,Chief Technology Officer
								</option>
								<option value="898">그래픽스 엔지니어</option>
								<option value="10112">VR 엔지니어</option>
								<option value="1022">BI 엔지니어</option>
								<option value="10230">ERP전문가</option>
								<option value="894">루비온레일즈 개발자</option>
								<option value="793">
									CIO,Chief Information Officer
								</option>
							</select>
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								className="select-icon"
							>
								<path
									fill="currentColor"
									d="M16 9.25a.75.75 0 01.586 1.218l-3.986 5a.75.75 0 01-1.17.002l-4.015-5A.75.75 0 018 9.25h8z"
								/>
							</svg>
						</SelectWrapper>
					</div>
					<div className="style_guidance__FT8Qs input-group-guidance" />
				</div>
			)}

			<div className="style-wrapper">
				<p htmlFor="annual" className="style-label">
					경력
				</p>
				<div className="style-body">
					<SelectWrapper hasType={career}>
						<select
							onChange={(e) => {
								handleSelectJob(e, 'career');
							}}
							name="annual"
							value={career}
						>
							<option value="-2" disabled hidden>
								선택해 주세요.
							</option>
							<option value="-1">년차 선택</option>
							<option value="NEW">신입</option>
							<option value="1">1 년</option>
							<option value="2">2 년</option>
							<option value="3">3 년</option>
							<option value="4">4 년</option>
							<option value="5">5 년</option>
							<option value="6">6 년</option>
							<option value="7">7 년</option>
							<option value="8">8 년</option>
							<option value="9">9 년</option>
							<option value="10">10 년 이상</option>
						</select>
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							className="select-icon"
						>
							<path
								fill="currentColor"
								d="M16 9.25a.75.75 0 01.586 1.218l-3.986 5a.75.75 0 01-1.17.002l-4.015-5A.75.75 0 018 9.25h8z"
							/>
						</svg>
					</SelectWrapper>
				</div>
				<div className="style-guidance" />
			</div>
			<div className="style-wrapper checkbox-agreement container-check">
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
						<svg width="24" height="24" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M18.75 21.75H5.25a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3zm0-1.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h13.5z"
							/>
						</svg>
					)}
				</div>
				<div className="style-label">
					<input
						type="checkbox"
						id="rejectEventEmail"
						name="rejectEventEmail"
						onChange={() => {
							setAcceptEventEmail(!acceptEventEmail);
						}}
					/>
					<label>이벤트 소식 등 알림 정보 수신거부</label>
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
			<div className="footer-level1">
				<Button
					onClick={() => {
						handleUserinfoSubmit();
					}}
					type="button"
					disabled={
						duty === '-2' || jobGroup === '-2' || career === '-2'
					}
				>
					다음
				</Button>
				<div className="style-divider">or</div>
				<div>
					<input
						type="file"
						autoComplete="off"
						style={{ display: 'none' }}
					/>
					<ButtonType2 type="button">
						내 이력서 업로드하기
					</ButtonType2>
				</div>
			</div>
		</div>
	);
}
const SelectWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	width: 100%;
	height: 50px;
	padding-right: 15px;
	padding-left: 15px;
	border-radius: 5px;
	border: 1px solid #e1e2e3;
	background-color: #fff;
	font-size: 15px;
	> select {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		padding-left: 15px;
		border: 0;
		appearance: none;
		background: transparent;
		color: #aaa;
		color: ${(props) => props.hasType !== '-2' && '#333'};
		font-size: 15px;
		font-family: 'Pretendard', 'PretendardStd-ExtraLight',
			'PretendardStd-Thin', 'PretendardStd-Light', 'PretendardStd';
		[hidden] {
			display: none;
		}
	}
	.select-items {
		position: absolute;
		background-color: DodgerBlue;
	}
`;

const ButtonType2 = styled.button`
	border: 1px solid #36f;
	background-color: #fff;
	color: #36f;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 54px;
	border-radius: 27px;
	font-size: 16px;
	font-weight: 600;
	cursor: pointer;
`;

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

export default JobGroupSetting;
