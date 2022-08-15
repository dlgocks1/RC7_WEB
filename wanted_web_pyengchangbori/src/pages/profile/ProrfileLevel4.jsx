import React, { useState } from 'react';
import styled from 'styled-components';
import { JobMainCategoryDummy } from 'utils/mockData';

function ProrfileLevel4({ resumeData }) {
	const [resuemspecial, setResuemspecial] = useState(
		resumeData.resumeSpecialty.read().data.result[0],
	);

	console.log(resuemspecial);
	return (
		<ComponentWrapper>
			<header className="form-header">
				<dl className="Form-title">
					<dt>전문분야 설정</dt>
				</dl>
			</header>
			<div className="formblock Block_className__Y0A0N">
				<div className="formblock-content content">
					<div className="select-wrapper selected">
						<h6>직군</h6>
						<div className="select-select">
							<select>
								<option value="----default----" hidden disabled>
									선택하기
								</option>
								<option value="518">개발</option>
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
								<option value="521">법률·법집행기관</option>
								<option value="10057">식·음료</option>
								<option value="509">건설·시설</option>
								<option value="514">공공·복지</option>
							</select>
						</div>
					</div>
					<div className="multiselect-container">
						<h6>직무</h6>

						<div role="presentation" className="options">
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
								.map((value) => (
									<button
										className="option-container active"
										type="button"
									>
										{value.title}
									</button>
								))}

							{/* <button
								type="button"
								className="option-container"
								disabled=""
							>
								웹 개발자
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								서버 개발자
							</button>
							<button
								type="button"
								className="option-container active"
								disabled=""
							>
								프론트엔드 개발자
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								소프트웨어 엔지니어
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								자바 개발자
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								안드로이드 개발자
							</button>
							<button
								type="button"
								className="option-container"
								disabled
							>
								iOS 개발자
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								Node.js 개발자
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								C,C++ 개발자
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								데이터 엔지니어
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								파이썬 개발자
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								DevOps / 시스템 관리자
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								시스템,네트워크 관리자
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								머신러닝 엔지니어
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								데이터 사이언티스트
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								빅데이터 엔지니어
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								QA,테스트 엔지니어
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								기술지원
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								개발 매니저
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								보안 엔지니어
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								프로덕트 매니저
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								블록체인 플랫폼 엔지니어
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								PHP 개발자
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								임베디드 개발자
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								웹 퍼블리셔
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								하드웨어 엔지니어
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								크로스플랫폼 앱 개발자
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								DBA
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								.NET 개발자
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								영상,음성 엔지니어
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								그래픽스 엔지니어
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								CTO,Chief Technology Officer
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								VR 엔지니어
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								BI 엔지니어
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								ERP전문가
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								루비온레일즈 개발자
							</button>
							<button
								type="button"
								className="option-container"
								disabled=""
							>
								CIO,Chief Information Officer
							</button> */}
							<button type="button" className="toggleEditable">
								+
							</button>
						</div>
					</div>
					<div className="select-wrapper selected">
						<h6>경력</h6>
						<div className="select-select">
							<select>
								<option
									value="----default----"
									hidden=""
									disabled=""
								>
									선택하기
								</option>
								<option value="0">신입</option>
								<option value="1">1 년</option>
								<option value="2">2 년</option>
								<option value="3">3 년</option>
								<option value="4">4 년</option>
								<option value="5">5 년</option>
								<option value="6">6 년</option>
								<option value="7">7 년</option>
								<option value="8">8 년</option>
								<option value="9">9 년</option>
								<option value="10">10 년</option>
								<option value="11">11 년</option>
								<option value="12">12 년</option>
								<option value="13">13 년</option>
								<option value="14">14 년</option>
								<option value="15">15 년</option>
								<option value="16">16 년</option>
								<option value="17">17 년</option>
								<option value="18">18 년</option>
								<option value="19">19 년</option>
								<option value="20">20 년</option>
								<option value="21">21 년</option>
								<option value="22">22 년</option>
								<option value="23">23 년</option>
								<option value="24">24 년</option>
								<option value="25">25 년</option>
								<option value="26">26 년</option>
								<option value="27">27 년</option>
								<option value="28">28 년</option>
								<option value="29">29 년</option>
								<option value="30">30 년</option>
								<option value="31">31 년</option>
								<option value="32">32 년</option>
								<option value="33">33 년</option>
								<option value="34">34 년</option>
								<option value="35">35 년 이상</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="formblock Block_className__Y0A0N is-foldable">
				<button type="button" className="toggleFoldable folded">
					선택 사항 더 보기
					<i className="icon-arrow_down" />
				</button>
			</div> */}
			<footer className="form-footer Footer_className__0wFnB isChild">
				<button
					type="button"
					data-attribute-id="profile__next"
					data-step="2"
				>
					확인
				</button>
			</footer>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	padding: 41px 0 30px;
	border: 1px solid #e1e2e3;
	border-radius: 3px;
	background-color: #fff;
	.form-footer {
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
		}
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
		margin-top: 43px;
	}
	.formblock-content {
		padding-right: 30px;
		padding-left: 30px;
	}
	.select-wrapper {
		display: block;
		position: relative;
		padding: 15px 0;
		h6 {
			top: 50%;
			left: 0;
			width: 150px;
			position: absolute;
			color: #999;
			font-size: 16px;
			transform: translateY(-50%);
		}
	}
	.select-select {
		position: relative;
		font-family: inherit;
		select {
			width: calc(100% - 150px);
			padding: 14px 20px;
			font-family: inherit;
			margin-left: 150px;
			color: #999;
			font-size: 16px;
			font-weight: 400;
			border: 0;
			border-radius: 3px;
			background-color: #f8f8fa;
			appearance: none;
			color: #333;
		}
		option {
			color: #333;
			font-family: inherit;
			background-color: #fff;
		}
	}
	.select-select:after {
		content: '';
		top: 25px;
		right: 20px;
		position: absolute;
		transform: translateY(-50%);
		border-top: 6px solid #999;
		border-left: 4px solid transparent;
		border-right: 4px solid transparent;
	}
	.multiselect-container {
		display: block;
		position: relative;
		padding: 10px 0;
		.toggleEditable {
			margin: 5px;
			padding: 12px 15px;
			font-family: inherit;
			color: #86939e;
			font-weight: 400;
			border: 1px dashed #d1d1d1;
			background-color: transparent;
		}
		h6 {
			top: 50%;
			left: 0;
			width: 150px;
			position: absolute;
			color: #999;
			font-size: 16px;
			-webkit-transform: translateY(-50%);
			transform: translateY(-50%);
		}
		.options {
			width: calc(100% - 150px);
			margin-left: 150px;
			transform: translateX(-5px);
			color: #333;
			font-size: 16px;
			font-weight: 600;
			border: 0;
		}
	}

	.option-container.active {
		opacity: 1;
		display: inline-block;
	}
	.option-container :disabled {
		display: none;
		cursor: text;
		opacity: 1;
	}
	.option-container {
		margin: 5px;
		padding: 10px 15px;
		font-family: inherit;
		font-size: 16px;
		color: #3b3d40;
		font-weight: 400;
		border: 1px solid #d1d1d1;
		border-radius: 0;
		background-color: #f8f8f8;
		opacity: 0.3;
	}
`;

export default ProrfileLevel4;
