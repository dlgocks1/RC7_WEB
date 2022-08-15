import React, { Component, useDeferredValue, useEffect, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import HandleNextArrow from './HandleNextArrow';
import HandlePrevArrow from './HandlePrevArrow';
import MainBannerContent from './BannerContent';
import SkeletonTopBanner from './skeletonUI/SkeletonTopBanner';

function TopBanner({ data }) {
	const settings = {
		dots: false,
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true,
		nextArrow: <HandleNextArrow />,
		prevArrow: <HandlePrevArrow />,
		arrows: true,
	};

	return (
		<ComponentWrapper>
			{data ? (
				<CustomSlider {...settings}>
					{data.map((value) => (
						<MainBannerContent
							key={value.no}
							title={value.title}
							contents={value.contents}
							advertImageUrl={value.advertImageUrl}
							advertUrl={value.advertUrl}
						/>
					))}
				</CustomSlider>
			) : (
				<SkeletonTopBanner />
			)}
		</ComponentWrapper>
	);
}

const CustomSlider = styled(Slider)`
	z-index: 1;
	position: relative;
	display: block;
	box-sizing: border-box;
	user-select: none;
	touch-action: pan-y;

	.slick-active {
		filter: brightness(100%) !important;
		.box-information {
			opacity: 1 !important;
		}
	}

	.slick-list {
		padding: 0px 50px;
		position: relative;
		overflow: hidden;
		display: block;
		margin: 0;
		.box-information {
			opacity: 0;
		}
	}

	.slick-slide {
		display: inline-block;
		filter: brightness(50%);
		padding: 0 12px;
		float: left;
		width: 1060px;
		/* width: ${(props) => props.width || '1060px'}; */
	}
`;

const ComponentWrapper = styled.div`
	height: auto;
	position: relative;
	overflow: hidden;
`;

export default TopBanner;
