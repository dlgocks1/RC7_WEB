import ArticleCard from 'components/common/ArticleCard';
import Articletitle from 'components/common/Articletitle';
import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import {
	LeftArticleArrow,
	RightArticleArrow,
} from '../../components/common/ArticleArrows';

function ArticleWrapper2({ title, subtitle, data, fetchedhomeData }) {
	const settings = {
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 2,
		nextArrow: <RightArticleArrow />,
		prevArrow: <LeftArticleArrow />,
		arrows: true,
	};

	const [dataList, setDataList] = useState(
		fetchedhomeData !== undefined
			? fetchedhomeData.read().data.result
			: undefined,
	);

	console.log(dataList);

	return (
		<ComponentsWrapper>
			<Articletitle title={title} subtitle={subtitle} icon={false} />

			<CustomSlider {...settings}>
				{dataList !== undefined
					? dataList.map((value) => (
							<ArticleCard
								key={value.no}
								title={value.title}
								imgUrl={value.eventImageUrl}
								onlineCheck={value.onlineCheck}
								type="List"
							/>
					  ))
					: data.map((value) => (
							<ArticleCard
								key={value.idx}
								title={value.title}
								tags={value.tags}
								eventlabels={value.eventlabels}
								subtitle={value.subtitle}
								imgUrl={value.imgUrl}
								type="List"
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

export default ArticleWrapper2;
