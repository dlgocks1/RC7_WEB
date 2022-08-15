/* eslint-disable no-use-before-define */
import ArticleCard from 'components/common/ArticleCard';
import Articletitle from 'components/common/Articletitle';
import HandleNextArrow from 'components/common/HandleNextArrow';
import HandlePrevArrow from 'components/common/HandlePrevArrow';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Article3Minutes, EventChipDummydata } from 'utils/mockData';
import {
	LeftArticleArrow,
	RightArticleArrow,
} from '../../components/common/ArticleArrows';

function ArticleWrapper({
	isVod,
	is3Mins,
	fetchedhomeData,
	title,
	subtitle,
	data,
}) {
	const [dataList, setDataList] = useState(
		fetchedhomeData !== undefined
			? fetchedhomeData.read().data.result
			: undefined,
	);

	console.log(dataList);

	const settings = {
		dots: false,
		infinite: true,
		speed: 600,
		slidesToShow: 4,
		slidesToScroll: 4,
		nextArrow: <RightArticleArrow />,
		prevArrow: <LeftArticleArrow />,
		arrows: true,
	};

	return (
		<ComponentsWrapper>
			<Articletitle title={title} subtitle={subtitle} icon={false} />

			<CustomSlider {...settings}>
				{is3Mins &&
					dataList.map((value) => (
						<ArticleCard
							key={value.no}
							title={value.title}
							category={
								value.interesTagCategory_no !== undefined &&
								value.interesTagCategory_no.map(
									(it) =>
										`#${
											EventChipDummydata.find(
												(item) => item.idx === it,
											).content
										} `,
								)
							}
							imgUrl={value.eventImageUrl}
							type="List"
							linkUrl={value.eventUrl}
						/>
					))}
				{isVod &&
					dataList.map((value) => (
						<ArticleCard
							isVod
							key={value.no}
							title={value.title}
							imgUrl={value.vodImageUrl}
							playTime={value.playTime}
							linkUrl={value.vodUrl}
							type="List"
							subtitle={value.writer}
						/>
					))}
			</CustomSlider>
		</ComponentsWrapper>
	);
}

const ComponentsWrapper = styled.div`
	position: relative;
`;

const CustomSlider = styled(Slider)`
	z-index: 1;
	position: relative;
	display: block;
	box-sizing: border-box;
	user-select: none;
	touch-action: pan-y;
	padding-top: 70px;
	top: -40px;
	overflow-x: hidden;

	.slick-slide {
		float: left;
		height: 100%;
		min-height: 1px;
		display: inline-block;
	}
`;

export default ArticleWrapper;
