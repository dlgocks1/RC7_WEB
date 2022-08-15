import Loading from 'components/common/Loading';
import { ErrorBoundary } from 'hoc/ErrorBoundary';
import React, { Suspense, useEffect, useState, useTransition } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginModalVisible } from 'store/action/LoginAction';
import styled from 'styled-components';
import { ChartDummyData } from 'utils/mockData';
import { fetchSalaryData } from './fetchSalaryData';
import RechartLayer from './RechartLayer';
import SalaryAsideText from './SalaryAsideText';

function SalaryGraph({ jobIdx }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isPending, startTransition] = useTransition();
	const { isLogin } = useSelector((state) => state.UserDataReducer);

	const [salaryList, setSalaryList] = useState([]);
	const [job, setJob] = useState({});
	const [diffSalary, setDiffSalary] = useState('0');
	const [career, setCareer] = useState('0');
	const [salaryData, setSalaryData] = useState(
		fetchSalaryData({
			dutyCategoryId: 4,
			jobCategoryId: 2,
		}),
	);

	const handleClickSearchBar = () => {
		if (!isLogin) {
			dispatch(setLoginModalVisible());
		}
	};

	const handleChangeJob = (e) => {
		startTransition(() => {
			setSalaryData(
				fetchSalaryData({
					dutyCategoryId: e.target.value,
					jobCategoryId: 2,
				}),
			);
		});
		navigate(`/salary/${e.target.value}`);
	};

	const handleChangeCareer = (e) => {
		setCareer(e.target.value);
	};

	const handleChangeDiff = (e) => {
		const check = /^[0-9]+$/;
		if (e.target.value.split(',').join('') === '') {
			setDiffSalary('0');
		} else if (
			check.test(e.target.value.split(',').join('')) &&
			e.target.value.split(',').join('').length <= 10
		) {
			setDiffSalary(
				parseInt(e.target.value.split(',').join(''), 10)
					.toString()
					.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ','),
			);
		}
	};

	useEffect(() => {
		if (
			ChartDummyData.find((item) => item.idx.toString() === jobIdx) ===
			undefined
		) {
			navigate('/salary/1');
		} else {
			setJob(
				ChartDummyData.find((item) => item.idx.toString() === jobIdx),
			);
			setSalaryList(
				ChartDummyData.find((item) => item.idx.toString() === jobIdx)
					.salaryList,
			);
		}
	}, [jobIdx]);

	return (
		<ComponentWrapper>
			<div className="salary-container">
				<div className="salary-chart-container">
					<ErrorBoundary>
						<Suspense>
							<section>
								<div
									className="recharts-responsive-container"
									style={{ width: '100%', height: '100%' }}
									width="784.390625"
									height="392"
								>
									<div
										className="recharts-wrapper"
										style={{
											position: 'relative',
											cursor: 'default',
											width: '784px',
											height: '392px',
										}}
									>
										{salaryList && (
											<RechartLayer
												salaryData={salaryData}
												careerIdx={career}
												salaryList={salaryList}
											/>
										)}
									</div>
								</div>
							</section>
							<div className="btngroup">
								<button
									type="button"
									className="style_wrapper__IgK7U"
								>
									개발
								</button>
								<button
									type="button"
									className="style_wrapper__IgK7U"
								>
									{job.job}
								</button>
							</div>
							<SalaryAsideText
								career={career}
								job={job}
								salaryData={salaryData}
								salaryList={salaryList}
								diffSalary={diffSalary}
							/>
						</Suspense>
					</ErrorBoundary>

					<div
						role="presentation"
						className="searchbar-container"
						onClick={handleClickSearchBar}
					>
						<div className="box-searchbar-main">
							<div className="searchbar-container-box">
								<div className="selector-category">
									<div className="select-wrapper selectbox-category has-value">
										<select
											defaultValue={518}
											disabled={!isLogin}
											name="category"
											className=""
										>
											<option disabled>직군</option>
											<option value="518">개발</option>
											<option value="507">
												경영·비즈니스
											</option>
											<option value="523">
												마케팅·광고
											</option>
											<option value="511">디자인</option>
											<option value="530">영업</option>
											<option value="510">
												고객서비스·리테일
											</option>
											<option value="517">HR</option>
											<option value="959">
												게임 제작
											</option>
											<option value="524">미디어</option>
											<option value="513">
												엔지니어링·설계
											</option>
											<option value="508">금융</option>
											<option value="532">
												물류·무역
											</option>
											<option value="515">
												의료·제약·바이오
											</option>
											<option value="522">
												제조·생산
											</option>
											<option value="10101">교육</option>
											<option value="10057">
												식·음료
											</option>
											<option value="509">
												건설·시설
											</option>
											<option value="514">
												공공·복지
											</option>
										</select>
										<svg
											width="20"
											height="20"
											viewBox="0 0 24 24"
											className="icon-select"
										>
											<path
												fill="currentColor"
												d="M16 9.25a.75.75 0 01.586 1.218l-3.986 5a.75.75 0 01-1.17.002l-4.015-5A.75.75 0 018 9.25h8z"
											/>
										</svg>
									</div>
								</div>
								<div className="selector-category">
									<div className="select-wrapper selectbox-category has-value">
										<select
											name="subCategory"
											defaultValue="4"
											disabled={!isLogin}
											onChange={(e) => handleChangeJob(e)}
											className="isSubCategory"
										>
											<option disabled>직무</option>
											<option value="1">전체</option>
											<option value="4">
												프론트엔드 개발자
											</option>
											<option value="526">
												데이터 엔지니어
											</option>
											<option value="658">
												임베디드 개발자
											</option>
											<option value="660">
												자바 개발자
											</option>
											<option value="661">
												.NET 개발자
											</option>
											<option value="665">
												시스템,네트워크 관리자
											</option>

											<option value="671">
												보안 엔지니어
											</option>
											<option value="672">
												하드웨어 엔지니어
											</option>
											<option value="674">
												DevOps / 시스템 관리자
											</option>
											<option value="676">
												QA,테스트 엔지니어
											</option>
											<option value="677">
												안드로이드 개발자
											</option>
											<option value="678">
												iOS 개발자
											</option>
											<option value="793">
												CIO,Chief Information Officer
											</option>
											<option value="795">
												CTO,Chief Technology Officer
											</option>
											<option value="872">
												서버 개발자
											</option>
											<option value="873">
												웹 개발자
											</option>
											<option value="876">
												프로덕트 매니저
											</option>
											<option value="877">
												개발 매니저
											</option>
											<option value="893">
												PHP 개발자
											</option>
											<option value="894">
												루비온레일즈 개발자
											</option>
											<option value="895">
												Node.js 개발자
											</option>
											<option value="896">
												영상,음성 엔지니어
											</option>
											<option value="898">
												그래픽스 엔지니어
											</option>
											<option value="899">
												파이썬 개발자
											</option>
											<option value="900">
												C,C++ 개발자
											</option>
											<option value="939">
												웹 퍼블리셔
											</option>
											<option value="1022">
												BI 엔지니어
											</option>
											<option value="1024">
												데이터 사이언티스트
											</option>
											<option value="1025">
												빅데이터 엔지니어
											</option>
											<option value="1026">
												기술지원
											</option>
											<option value="1027">
												블록체인 플랫폼 엔지니어
											</option>
											<option value="1634">
												머신러닝 엔지니어
											</option>
											<option value="10110">
												소프트웨어 엔지니어
											</option>
											<option value="10111">
												크로스플랫폼 앱 개발자
											</option>
											<option value="10112">
												VR 엔지니어
											</option>
											<option value="10230">
												ERP전문가
											</option>
											<option value="10231">DBA</option>
										</select>
										<svg
											width="20"
											height="20"
											viewBox="0 0 24 24"
											className="icon-select"
										>
											<path
												fill="currentColor"
												d="M16 9.25a.75.75 0 01.586 1.218l-3.986 5a.75.75 0 01-1.17.002l-4.015-5A.75.75 0 018 9.25h8z"
											/>
										</svg>
									</div>
								</div>
								<div className="selector-category">
									<div
										className="select-wrapper selectbox-category has-value"
										data-experience="0"
									>
										<select
											defaultValue="0"
											disabled={!isLogin}
											onChange={handleChangeCareer}
										>
											<option value="123" disabled>
												경력
											</option>
											<option value="0">신입</option>
											<option value="1">1년</option>
											<option value="2">2년</option>
											<option value="3">3년</option>
											<option value="4">4년</option>
											<option value="5">5년</option>
											<option value="6">6년</option>
											<option value="7">7년</option>
											<option value="8">8년</option>
											<option value="9">9년</option>
											<option value="10">10년</option>
										</select>
										<svg
											width="20"
											height="20"
											viewBox="0 0 24 24"
											className="icon-select"
										>
											<path
												fill="currentColor"
												d="M16 9.25a.75.75 0 01.586 1.218l-3.986 5a.75.75 0 01-1.17.002l-4.015-5A.75.75 0 018 9.25h8z"
											/>
										</svg>
									</div>
								</div>
								<div className="input-salary">
									<div className="input-salary-container">
										<input
											type="text"
											disabled={!isLogin}
											name="salary"
											onChange={handleChangeDiff}
											// disabled
											placeholder="연봉"
											value={diffSalary}
										/>
										<span>만원</span>
									</div>
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
	.info-diff-salary {
		margin: 10px 0;
		font-size: 16px;
		font-weight: 400;
		color: #fff;
		line-height: 1.8;
		white-space: pre-wrap;
	}
	.recharts-bar-rectangle {
		path {
			transition: all 0.5s;
		}
	}
	.chart-tooltip {
		pointer-events: none;
		visibility: visible;
		position: absolute;
		top: 0px;
		left: 0px;
		/* transform: translate(485.182px, 239px); */
		transition: -webkit-transform 400ms ease 0s;
	}
	.custom-tooltip {
		background-color: rgba(0, 0, 0, 0.8);
		color: #fff;
		border-radius: 5px;
		padding: 5px;
		font-size: 13px;
		> p:first-child {
			font-weight: 700;
		}
	}
	svg:not(:root) {
		overflow: hidden;
	}
	.salary-container {
		position: relative;
		min-height: 350px;
		padding-top: 40px;
		padding-bottom: 40px;
		margin-bottom: 40px;
		background-position: 50%;
		background-size: cover;
		background-repeat: no-repeat;
		background-color: #22bd79;
	}
	.salary-chart-container {
		width: 90%;
		max-width: 1060px;
		margin: 0 auto;
		> section {
			float: left;
			width: 74%;
			margin-right: 20px;
		}
		:after {
			display: block;
			content: '';
			clear: both;
		}
	}
	.btngroup {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-content: stretch;
		align-items: flex-start;
		font-family: inherit;
		button {
			width: auto;
			font-family: inherit;
			height: auto;
			margin-right: 10px;
			margin-bottom: 10px;
			font-weight: 700;
			padding: 8px 10px;
			color: #22bd79;
			background-color: #fff;
			border-radius: 3px;
			white-space: pre;
		}
	}
	.info-jobcategory {
		font-size: 16px;
		font-weight: 400;
		color: #fff;
		line-height: 1.8;
		white-space: pre-wrap;
	}
	.info-jobcategory-salary {
		font-size: 40px;
		font-weight: 700;
		color: #fff;
		line-height: 1.4;
		white-space: pre-wrap;
		> sub {
			bottom: 0;
			font-size: 14px;
			font-weight: 400;
		}
	}
	.searchbar-container {
		position: absolute;
		left: 0;
		right: 0;
		bottom: -24px;
	}
	.box-searchbar-main {
		width: 90%;
		max-width: 1060px;
		margin: 0 auto;
	}
	.searchbar-container-box:last-child {
		border-right: 0;
		background: #fff;
		box-shadow: 0 2px 2px 0 rgb(1 1 1 / 20%);
	}
	.selector-category {
		position: relative;
		display: inline-block;
		vertical-align: sub;
		width: 25%;
		border-right: 1px solid #eee;
	}
	.selectbox-category {
		height: 43px;
		border: none;
	}
	.select-wrapper {
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
			color: #333;
		}
	}
	.icon-select {
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
	}

	option {
		font-weight: normal;
		display: block;
		font-family: 'pretendard';
		white-space: nowrap;
		min-height: 1.2em;
		padding: 0px 2px 1px;
	}
	.selector-category {
		position: relative;
		display: inline-block;
		vertical-align: sub;
		width: 25%;
		border-right: 1px solid #eee;
	}
	.select-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
		border-radius: 5px;
		background-color: #fff;
		font-size: 15px;
		height: 43px;
		border: none;
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
			font-family: 'pretendard';

			padding-right: 32px;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden !important;
			color: #333;
		}
	}
	.input-salary {
		position: relative;
		display: inline-block;
		vertical-align: sub;
		width: 25%;
	}
	.input-salary-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		width: 100%;
		height: 40px;
		padding-right: 15px;
		padding-left: 15px;
		border-radius: 5px;
		background-color: #fff;
		font-size: 15px;
		> input {
			position: absolute;
			width: calc(100% - 50px);
			top: 10;
			left: 0;
			appearance: none;
			box-shadow: none !important;
			box-sizing: border-box;
			outline: none !important;
			resize: none;
			color: #333;
			font-size: 16px;
			margin-bottom: 0;
			padding: 8px 10px;
			border: 0;
			border-radius: 3px;
			:disabled {
				background-color: #fff;
				cursor: not-allowed;
			}
		}
		> span {
			position: absolute;
			top: 8px;
			right: 20px;
			color: #b5b5b5;
		}
	}
`;
export default SalaryGraph;
