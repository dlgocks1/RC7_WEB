import React, { Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/home';
import Header from 'components/common/Header';
import LoginModal from 'components/login/LoginModal';
import { useSelector } from 'react-redux';
import WdlistPage from 'pages/wdlist';
import OnboardingPage from 'pages/onboarding';
import ScrollToTop from 'hoc/ScrollToTop';
import ToastModal from 'components/common/ToastModal';
import WdPage from 'pages/wd';
import JobsfeedPage from 'pages/jobsfeed';
import SalaryPage from 'pages/salary';
import EventsPage from 'pages/events';
import Cvpage from 'pages/cv/index';
import ProfilePage from 'pages/profile';
import CvMakePage from 'pages/cv/CvMake/CvMakePage';
import NoMatchPage from 'pages/NoMatchPage';
import LogoutPage from 'pages/logout';
import AutoLogin from 'hoc/AutoLogin';
import BookmarkPage from 'pages/bookmark';
import LikesPage from 'pages/likes';
import SearchPage from 'pages/search';
import { useLogin } from 'hoc/useLogin';
import Loading from 'components/common/Loading';
import { ErrorBoundary } from 'hoc/ErrorBoundary';
import KakaoCallbackPage from 'pages/oauth';

function RootRouter() {
	const { loginVisible } = useSelector((state) => state.LoginReducer);
	const { isLogin } = useSelector((state) => state.UserDataReducer);

	return (
		<BrowserRouter>
			<ScrollToTop />
			{/* <ErrorBoundary> */}
			<Routes>
				<Route element={<Header />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/wdlist" element={<WdlistPage />}>
						<Route path=":wdIndex" element={<WdlistPage />} />
						<Route
							path=":wdIndex/:subJobCategory"
							element={<WdlistPage />}
						/>
					</Route>

					<Route path="/wd/:wdIndex" element={<WdPage />} />
					<Route path="/jobsfeed" element={<JobsfeedPage />} />
					<Route path="/events/*" element={<EventsPage />} />
					<Route path="/salary" element={<SalaryPage />}>
						<Route path=":jobIdx" element={<SalaryPage />} />
					</Route>

					<Route path="/cv">
						<Route path="list" element={<Cvpage />} />
						<Route path="intro" element={<Cvpage />} />
						<Route path="make/:cvId" element={<CvMakePage />} />
						<Route path="make" element={<CvMakePage />} />
					</Route>

					<Route path="/search" element={<SearchPage />}>
						<Route path=":qeury" element={<SearchPage />} />
					</Route>

					{isLogin && (
						<Route path="/profile">
							<Route
								path="bookmarks/*"
								element={<BookmarkPage />}
							/>
							<Route path="likes/*" element={<LikesPage />} />
							<Route
								path="matching/:level"
								element={<ProfilePage />}
							/>
							<Route path="matching" element={<ProfilePage />} />
						</Route>
					)}
					<Route
						path="/oauth/kakao"
						element={<KakaoCallbackPage />}
					/>
					<Route path="/*" element={<NoMatchPage />} />
					<Route path="/logout" element={<LogoutPage />} />
				</Route>

				<Route path="/onboarding" element={<OnboardingPage />} />
			</Routes>
			{loginVisible && <LoginModal />}
			<ToastModal />
			{/* </ErrorBoundary> */}
		</BrowserRouter>
	);
}

export default RootRouter;
