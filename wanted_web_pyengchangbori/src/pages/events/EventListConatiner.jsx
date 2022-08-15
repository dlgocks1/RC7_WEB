/* eslint-disable react/no-array-index-key */
import ArticleEvents from 'components/common/ArticleEvents';
import Loading from 'components/common/Loading';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

function EventListConatiner({
	setEventList,
	eventList,
	pageIdx,
	setPageIdx,
	eventContent,
	loadPageData,
	scrollable,
	setScrollable,
}) {
	const fetchRes = eventContent.read().data;
	const [ref, inView, entry] = useInView();
	const [isloading, setLoading] = useState(false);

	useEffect(() => {
		if (inView && scrollable) {
			setLoading(true);
			loadPageData();
		}
	}, [inView]);

	useEffect(() => {
		console.log(fetchRes);
		setLoading(false);
		switch (fetchRes.code) {
			case 1031:
				if (fetchRes.result.code === 3004) {
					setScrollable(false);
					return;
				}
				setEventList([...eventList, ...fetchRes.result]);
				setPageIdx(pageIdx + 1);
				break;
			case 3004:
				setScrollable(false);
				break;
			default:
		}
	}, [eventContent]);

	return (
		<ContentList>
			<div className="evnetlist-content-container">
				{eventList.map((value, index) => (
					<ArticleEvents
						key={index}
						no={value.no}
						eventImageUrl={value.eventImageUrl}
						eventUrl={value.eventUrl}
						onlineCheck={value.onlineCheck}
						title={value.title}
						date={value.date}
						eventCategoryNo={value.eventCategory_no}
					/>
				))}
				{isloading && <Loading />}
			</div>
			<ScrollDiv ref={ref} />
		</ContentList>
	);
}
const ScrollDiv = styled.div`
	margin-bottom: 30px;
`;

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

export default EventListConatiner;
