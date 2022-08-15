/* eslint-disable camelcase */
import Loading from 'components/common/Loading';
import { ErrorBoundary } from 'hoc/ErrorBoundary';
import React, { Suspense, useEffect, useState, useTransition } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import EventListConatiner from './EventListConatiner';
import EventsBody from './EventsBody';
import { fetchEventData } from './fetchEventData';
import StickeyHeader from './StickeyHeader';

function EventsPage() {
	const [isPending, startTransition] = useTransition({ timeoutMs: 3000 });
	const [searchParams, setSearchParams] = useSearchParams();
	const tag = searchParams.get('tag');

	const [pageIdx, setPageIdx] = useState(1);
	const [eventList, setEventList] = useState([]);
	const [scrollable, setScrollable] = useState(true);
	const [eventContent, setEventContent] = useState(
		fetchEventData({
			InterestTagCategoryId: Number(tag),
			pageIdx: 1,
			size: 8,
		}),
	);

	const loadPageData = () => {
		if (scrollable) {
			startTransition(() => {
				setEventContent(
					fetchEventData({
						InterestTagCategoryId: Number(tag),
						pageIdx,
						size: 8,
					}),
				);
			});
		}
	};

	useEffect(() => {
		if (Number(tag) >= 0 && Number(tag) <= 5) {
			// unstable_batchedUpdates(() => {
			// react18은 자동 batching이 된다.
			setEventList([]);
			setScrollable(true);
			setPageIdx(1);
			setEventContent(
				fetchEventData({
					InterestTagCategoryId: Number(tag),
					pageIdx: 1,
					size: 8,
				}),
			);
		}
	}, [tag]);

	return (
		<ComponentWrapper>
			<header>
				<Link
					to="/events/newstart"
					target="_blank"
					rel="noopener noreferrer"
				>
					<section className="event-banner" />
				</Link>
			</header>
			<EventsBody />
			<StickeyHeader />

			<ErrorBoundary>
				<Suspense fallback={<Loading />}>
					<EventListConatiner
						setPageIdx={setPageIdx}
						pageIdx={pageIdx}
						eventList={eventList}
						setEventList={setEventList}
						eventContent={eventContent}
						setScrollable={setScrollable}
						scrollable={scrollable}
						loadPageData={loadPageData}
					/>
				</Suspense>
			</ErrorBoundary>
		</ComponentWrapper>
	);
}
const ContentList = styled.div`
	margin-top: 8px;
	max-width: 1060px;
	width: 87.72%;
	position: relative;
	margin: 0 auto;

	.evnetlist-content-container {
		margin: 0 -10px;
		::after {
			display: block;
			content: '';
			clear: both;
		}
	}
`;

const ComponentWrapper = styled.div`
	.event-banner {
		background-color: #fff;
		background-repeat: no-repeat;
		border-radius: 3px;
		box-shadow: inset 0 0 2px 0 rgb(0 0 0 / 10%);
		height: 300px;
		background-size: cover;
		background-position: 50%;
		position: relative;
		padding-bottom: 15%;
		background-image: url(https://image.wanted.co.kr/optimize?src=https://wanted-marketing-image.s3.ap-northeast-2.amazonaws.com/career-biz-banner/220719_event_web.jpg&w=2000&q=100);
	}
`;

export default EventsPage;
