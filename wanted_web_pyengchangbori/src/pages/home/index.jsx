import Articletitle from 'components/common/Articletitle';
import Footer from 'components/common/Footer';
import React, { Suspense, useEffect, useState } from 'react';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { CustomGet } from 'utils/api';
import {
	Article3Minutes,
	ArticleCareerEvent,
	ArticleVODList,
	HomeTopbannerDummydata,
} from 'utils/mockData';
import { ErrorBoundary } from 'hoc/ErrorBoundary';
import Loading from 'components/common/Loading';
import TopBanner from '../../components/common/TopBanner';
import ArticleWrapper from './ArticleWrapper';
import ArticleWrapper2 from './ArticleWrapper2';
import ChipScroll from './ChipScroll';
import Divider from './Divider';
import AdvertiseBanner from './AdvertiseBanner';
import GridArticle from './GridArticle';
import { fetchHomeData } from './fetchhomeData';

function HomePage() {
	// const { data, error, isLoading, HocGet } = useGetData();
	const [topBannerData, setTopBannerData] = useState(null);
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
	const tag = searchParams.get('tag');

	const fetchedhomeData = useState(fetchHomeData());
	console.log(fetchedhomeData);

	useEffect(() => {
		// HocGet('web/home/advertisments');
		const topbanner = CustomGet({
			url: 'web/home/advertisments',
		});
		topbanner.then((res) => {
			switch (res.code) {
				case 1005:
					setTopBannerData(res.result);
					break;
				default:
			}
		});
	}, []);

	useEffect(() => {
		if (tag === undefined) {
			navigate('/?tag=3');
		}
	}, [tag]);

	return (
		<ErrorBoundary>
			<HomePageComponentsWrapper>
				<TopBanner data={topBannerData} />

				<section className="section">
					<div className="box-section-wrapper">
						<Articletitle
							title="나에게 필요한 커리어 인사이트"
							icon
						/>
						<ChipScroll url="/" tag={tag} />
					</div>
				</section>

				<BnnaerCreatApplication>
					<div className="banner-container">
						<div className="banner-creatapplication-content">
							즐겨보는 <span>크리에이터의</span> 글도 추천하고
							싶다면?
						</div>
						<div className="banner-creatapplication-imgwrapper">
							<img
								src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Fcreator-application.png&amp;w=121&amp;q=75"
								alt="크리에이터 추천하기"
								loading="lazy"
							/>
						</div>
						<a
							href="https://forms.gle/uurkbpmkA1FapxGJ6"
							target="_blank"
							rel="noreferrer"
						>
							<span>크리에이터 추천하기</span>
						</a>
					</div>
				</BnnaerCreatApplication>

				<Suspense fallback={<Loading />}>
					<section className="section">
						<div className="box-section-wrapper">
							<ArticleWrapper
								is3Mins
								fetchedhomeData={
									fetchedhomeData[0].article3Mins
								}
								title="3분만에 읽는 Wanted+ 아티클"
								subtitle="아티클 전체보기"
								data={Article3Minutes}
							/>
						</div>
					</section>

					<section className="section">
						<div className="box-section-wrapper">
							<ArticleWrapper
								isVod
								fetchedhomeData={fetchedhomeData[0].homevods}
								title="직장인을 위한 Wanted+ VOD"
								subtitle="VOD 전체보기"
								data={ArticleVODList}
							/>
						</div>
						<Divider />
					</section>
				</Suspense>

				<div className="linebanner banner-container">
					<div className="linebanner-gradient">
						<span>
							직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.
							<em>👀</em>
							<span className="icon-svg-wrapper">
								<svg className="icon-svg" viewBox="0 0 18 18">
									<path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
								</svg>
							</span>
						</span>
					</div>
				</div>

				<Suspense fallback={<Loading />}>
					<section className="section">
						<div className="box-section-wrapper">
							<ArticleWrapper2
								fetchedhomeData={fetchedhomeData[0].growthEvent}
								title="커리어 성장을 위한 맞춤 이벤트"
								subtitle="이벤트 전체보기"
								data={ArticleCareerEvent}
							/>
						</div>
					</section>
				</Suspense>

				<section
					className="section"
					style={{
						backgroundColor: '#f7f7f7',
					}}
				>
					<div className="box-section-wrapper">
						<AdvertiseBanner />
					</div>
				</section>

				<section className="section">
					<div className="box-section-wrapper">
						<Articletitle title="채용 정보를 찾고 계셨나요?" />
						<GridArticle />
					</div>
				</section>

				<Footer />
			</HomePageComponentsWrapper>
		</ErrorBoundary>
	);
}

const BnnaerCreatApplication = styled.div`
	display: flex;
	height: 110px;
	background-color: #36f;
	a {
		width: 220px;
		height: 40px;
		font-size: 15px;
		color: #36f;
		background-color: #fff;
		border: 1px solid #36f;
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		vertical-align: middle;
		min-width: 64px;
		padding: 0 27px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		border-radius: 25px;
		font-size: 16px;
		font-weight: 700;
		line-height: normal;
		cursor: pointer;
	}

	.banner-creatapplication-content {
		font-size: 24px;
		color: #fff;
		font-weight: 500;
		line-height: 35px;
		letter-spacing: -0.2px;
		align-self: auto;
		flex-wrap: nowrap;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: row;
		box-sizing: border-box;
		> span {
			color: #a9ecf0;
		}
	}
	.banner-creatapplication-imgwrapper {
		flex-grow: 1;
		align-self: auto;
		flex-wrap: nowrap;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: row;
		box-sizing: border-box;
		margin: 0;
	}
`;

export const HomePageComponentsWrapper = styled.main`
	padding-top: 25px;

	.featured-joblist {
		margin: 0 auto;
		padding: 60px 0 40px;
		width: 87.72%;
		position: relative;
		max-width: 1060px;
	}
	.divider {
		margin: 0 auto;
		width: 87.72%;
		position: relative;
		max-width: 1060px;
		height: 1px;
		background-color: #ececec;
	}
	.section {
		position: relative;
		scroll-margin-top: 4px;
		padding: 60px 0;
	}
	.box-section-wrapper {
		max-width: 1060px;
		width: 87.72%;
		/* width: 1060px; */
		margin: 0 auto;
	}
	.banner-container {
		max-width: 1060px;
		width: 87.72%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		align-self: auto;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: flex-start;
	}
	.linebanner {
		margin-top: 0 !important;
		margin: 60px auto 0;
	}
	.linebanner-gradient {
		background-image: linear-gradient(
			90deg,
			#01a9fe -12%,
			#2f5fef 37%,
			#046afe 72%,
			#00d2dd 110%
		);
		padding: 21px 30px;
		font-size: 17px;
		border-radius: 38.5px;
		line-height: normal;
		display: flex;
		flex-grow: 1;
		justify-content: center;
		align-items: center;
		color: #fff;
		font-weight: 700;

		.icon-svg-wrapper {
			display: inline-flex !important;
			width: 10px !important;
			margin-left: 2px !important;
			vertical-align: text-top !important;
		}
	}
`;

export default HomePage;
