/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */
import Footer from 'components/common/Footer';
import SkeletonJobFeed from 'components/common/skeletonUI/SkeletonJobFeed';
import TopBanner from 'components/common/TopBanner';
import { ErrorBoundary } from 'hoc/ErrorBoundary';
import { HomePageComponentsWrapper } from 'pages/home';
import React, { Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CustomGet } from 'utils/api';
import { JobFeedDummydata, ThemeCompanyDummy } from 'utils/mockData';
import { CompanyByTagComponent } from './CompanyByTagComponent';
import CompanyRec from './CompanyRec';
import FeaturePosition from './FeaturePosition';
import { fetchJobFeedData } from './fetchdata/fetchJobFreedData';
import NotLoginArticle from './NotLoginArticle';
import Shortcut from './Shortcut';

export let companyByTagResult = fetchJobFeedData();

function FamousePosition() {
	const res = companyByTagResult.famousePositinoResult.read();

	return <FeaturePosition title="요즘 뜨는 포지션" data={res.data.result} />;
}

function JobsfeedPage() {
	const [topBannerData, setTopBannerData] = useState(null);
	const [famousPosistionData, setFamousePositionData] = useState(null);
	const { isLogin } = useSelector((state) => state.UserDataReducer);

	useEffect(() => {
		companyByTagResult = fetchJobFeedData();

		const topbannerResult = CustomGet({
			url: 'web/jobsFeed/advertisments',
		});

		topbannerResult.then((res) => {
			switch (res.code) {
				case 1005:
					setTopBannerData(res.result);
					break;
				default:
			}
		});
	}, []);

	return (
		<ErrorBoundary>
			<HomePageComponentsWrapper>
				<TopBanner data={topBannerData} />
				<Shortcut />
				{!isLogin ? (
					<NotLoginArticle />
				) : (
					<div
						className="featured-joblist"
						style={{ marginBottom: '70px' }}
					>
						<NotLoginArticle isLogin={isLogin} />
						<FeaturePosition
							isLogin={isLogin}
							data={JobFeedDummydata}
						/>
					</div>
				)}

				<div className="divider" role="separator" />

				<Suspense fallback={<SkeletonJobFeed />}>
					<CompanyByTagComponent />
				</Suspense>

				<div className="divider" role="separator" />

				<div className="featured-joblist">
					<CompanyRec
						theme
						title="테마로 모아보는 요즘 채용"
						data={ThemeCompanyDummy}
					/>
				</div>
				<div className="divider" role="separator" />

				<div
					className="featured-joblist"
					style={{ marginBottom: '70px' }}
				>
					<Suspense>
						<FamousePosition />
					</Suspense>
				</div>

				<Footer />
			</HomePageComponentsWrapper>
		</ErrorBoundary>
	);
}

export default JobsfeedPage;
