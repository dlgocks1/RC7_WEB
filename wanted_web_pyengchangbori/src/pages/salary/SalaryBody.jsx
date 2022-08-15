import ArticleEmployment from 'components/common/ArticleEmployment';
import { ErrorBoundary } from 'hoc/ErrorBoundary';
import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserTagReducer } from 'store/action/WdListAction';
import { fetchUpgradePosition } from './fetchSalaryData';
import SalaryUpgradePositions from './SalaryUpgradePositions';

function SalaryBody() {
	const fetchData = useState(fetchUpgradePosition());
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClickMoreBtn = () => {
		dispatch(setUserTagReducer({ userTags: [1] }));
		navigate('/wdlist/2');
	};

	return (
		<ComponentWrapper>
			<div className="salay-body-container">
				<h5 className="salary-body-caution">
					<sup>*</sup> 이 데이터는 채용 정보에 포함된 직무 별 요구
					경력(최저, 최대)과 연봉(최저, 최대)을 바탕으로 추정한 예상
					연봉 데이터입니다.
				</h5>
				<div className="machup-banner">
					<div className="machup-banner-title">
						이제 밤새워 채용사이트 보지 마세요.
					</div>
					<div className="machup-banner-desc">
						원티드 매치업에 프로필을 등록하면, 기업의 인사담당자가
						직접 면접을 제안합니다.
					</div>
					<div className="machup-bannerlist-container">
						<ul>
							<li
								style={{
									backgroundImage:
										'url("https://static.wanted.co.kr/images/wdes/0_5.c52b0714.jpeg")',
									backgroundPosition: 'center center',
									backgroundSize: 'cover',
								}}
							/>
							<li
								style={{
									backgroundImage:
										'url("https://static.wanted.co.kr/images/wdes/0_5.9ebf8983.jpg")',
									backgroundPosition: 'center center',
									backgroundSize: 'cover',
								}}
							/>
							<li
								style={{
									backgroundImage:
										'url("https://static.wanted.co.kr/images/wdes/0_5.24513f58.jpg")',
									backgroundPosition: 'center center',
									backgroundSize: 'cover',
								}}
							/>
							<li
								style={{
									backgroundImage:
										'url("https://static.wanted.co.kr/images/wdes/0_5_465f0a8c-3b5b-4004-be0b-13f3c1c08200.jpg")',
									backgroundPosition: 'center center',
									backgroundSize: 'cover',
								}}
							/>
							<li
								style={{
									backgroundImage:
										'url("https://static.wanted.co.kr/images/wdes/0_5_35b131c9-5b04-4248-a0bd-1f39240406df.jpg")',
									backgroundPosition: 'center center',
									backgroundSize: 'cover',
								}}
							/>
							<li
								style={{
									backgroundImage:
										'url("https://static.wanted.co.kr/images/wdes/0_5.18dfe4ff.jpg")',
									backgroundPosition: 'center center',
									backgroundSize: 'cover',
								}}
							/>
							<li
								style={{
									backgroundImage:
										'url("https://static.wanted.co.kr/images/wdes/0_5.c52b0714.jpeg")',
									backgroundPosition: 'center center',
									backgroundSize: 'cover',
								}}
							/>
							<li
								style={{
									backgroundImage:
										'url("https://static.wanted.co.kr/images/wdes/0_5.9ebf8983.jpg")',
									backgroundPosition: 'center center',
									backgroundSize: 'cover',
								}}
							/>
							<li
								style={{
									backgroundImage:
										'url("https://static.wanted.co.kr/images/wdes/0_5.24513f58.jpg")',
									backgroundPosition: 'center center',
									backgroundSize: 'cover',
								}}
							/>
							<li
								style={{
									backgroundImage:
										'url("https://static.wanted.co.kr/images/wdes/0_5_465f0a8c-3b5b-4004-be0b-13f3c1c08200.jpg")',
									backgroundPosition: 'center center',
									backgroundSize: 'cover',
								}}
							/>
							<li
								style={{
									backgroundImage:
										'url("https://static.wanted.co.kr/images/wdes/0_5_35b131c9-5b04-4248-a0bd-1f39240406df.jpg")',
									backgroundPosition: 'center center',
									backgroundSize: 'cover',
								}}
							/>
							<li
								style={{
									backgroundImage:
										'url("https://static.wanted.co.kr/images/wdes/0_5.18dfe4ff.jpg")',
									backgroundPosition: 'center center',
									backgroundSize: 'cover',
								}}
							/>
						</ul>
					</div>
					<a href="/profile/matching">시작하기</a>
				</div>
				<div className="list-title-container">
					<h2 className="list-title">연봉 업그레이드 포지션</h2>
					<button
						onClick={handleClickMoreBtn}
						type="button"
						className="list-btn"
					>
						더 보기
					</button>
				</div>
				<div>
					<Suspense>
						<div className="list-container">
							<SalaryUpgradePositions fetchData={fetchData} />
							<div />
						</div>
					</Suspense>
				</div>
			</div>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	.salay-body-container {
		width: 90%;
		max-width: 1060px;
		margin: 0 auto 80px;
	}
	.salary-body-caution {
		margin: 10px 0;
		font-size: 14px;
		font-weight: 400;
		color: #b5b5b5;
	}
	.machup-banner {
		margin: 42px 0 40px;
		padding: 55px;
		background: #fff;
		> a {
			display: -ms-flexbox;
			display: flex;
			-ms-flex-pack: center;
			justify-content: center;
			-ms-flex-align: center;
			align-items: center;
			width: 100%;
			height: 54px;
			border: 0;
			border-radius: 27px;
			background-color: #36f;
			font-size: 16px;
			font-weight: 600;
			color: #fff !important;
			cursor: pointer;
		}
	}
	.machup-banner-title {
		font-size: 40px;
		font-weight: 600;
		font-style: normal;
		font-stretch: normal;
		line-height: 1;
		letter-spacing: normal;
		color: #258bf7;
		margin: 0 0 20px;
		word-break: keep-all;
	}
	.machup-banner-desc {
		font-size: 20px;
		font-weight: 400;
		font-style: normal;
		font-stretch: normal;
		line-height: 1;
		letter-spacing: normal;
		color: #000;
		margin: 0 0 40px;
		word-break: keep-all;
	}
	.machup-bannerlist-container {
		position: relative;
		ul {
			margin: 30px -6px;
			padding-right: 48px;
			height: 55px;
			overflow: hidden;
			> li {
				width: 48px;
				height: 48px;
				border-radius: 3px;
				border: 1px solid #eee;
				float: left;
				margin: 6px;
			}
		}
	}
	.list-title-container {
		position: relative;
		margin-bottom: 20px;
	}
	.list-title {
		display: inline-block;
		padding: 0;
		margin: 0;
		font-size: 22px;
		font-weight: 600;
		line-height: 1.05;
		letter-spacing: normal;
		text-align: left;
		color: #333;
	}
	.list-btn {
		position: absolute;
		right: 0;
		top: 4px;
		display: inline-block;
		font-family: inherit;
		padding: 0;
		margin: 0;
		font-size: 20px;
		font-weight: 400;
		line-height: 1;
		color: #999;
	}
	.list-container > ul {
		margin: -10px px;
		padding: 0;
		li {
			width: 25%;
			padding: 10px;
			list-style: none;
			display: inline-block;
			vertical-align: top;
		}
	}
	.card-container > a {
		display: block;
	}
	.clearfix::before {
		content: ' ';
		display: table;
	}
	.clearfix::after {
		display: block;
		content: '';
		clear: both;
	}
	.card-container header {
		padding-bottom: 75%;
		position: relative;
		background-size: cover;
		background-position: 50%;
		border-radius: 4px;
		-webkit-box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
		box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
	}
`;

export default SalaryBody;
