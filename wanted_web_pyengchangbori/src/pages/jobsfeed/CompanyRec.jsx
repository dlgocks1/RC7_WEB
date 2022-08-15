import ArticleCard from 'components/common/ArticleCard';
import {
	LeftArticleArrow,
	RightArticleArrow,
} from 'components/common/ArticleArrows';
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ArticleCompany from 'components/common/ArticleCompany';
import {
	RightArticleArrowOpacity,
	LeftArticleArrowOpacity,
} from 'components/common/ArticleArrowsOpacity';
import ArticleThemeCompany from 'components/common/ArticleThemeCompany';
import ArticleEmployment from 'components/common/ArticleEmployment';

function CompanyRec({ company, theme, title, icon, data }) {
	const settings = {
		dots: false,
		infinite: false,
		speed: 600,
		slidesToShow: 2,
		slidesToScroll: 2,
		nextArrow: <RightArticleArrowOpacity />,
		prevArrow: <LeftArticleArrowOpacity />,
		arrows: true,
	};

	return (
		<ComponentsWrapper>
			<header className="titlelist-header">
				<div className="titlelist-title-wrapper">
					<h2 className="titlelist-title">
						<Link to="/wdlist">
							{title}
							{company && <img src={icon} alt="user tag icon" />}
						</Link>
						{company && <span>회사를 소개합니다</span>}
					</h2>

					<div className="titlelist-button-container">
						{company && (
							<Link to="/wdlist">
								<span>포지션으로 더보기</span>
								<span className="btn-right">
									<svg
										xmlns="https://www.w3.org/2000/svg"
										width="6"
										height="10"
										viewBox="0 0 6 10"
										fill="none"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M0.34467 8.24802C0.0517767 8.51161 0.0517767 8.93898 0.34467 9.20257C0.637563 9.46617 1.11244 9.46617 1.40533 9.20257L5.65533 5.37773C5.94822 5.11414 5.94822 4.68677 5.65533 4.42317L1.40533 0.59833C1.11244 0.334736 0.637563 0.334736 0.34467 0.59833C0.0517767 0.861923 0.0517767 1.28929 0.34467 1.55288L4.06434 4.90045L0.34467 8.24802Z"
											fill="currentColor"
										/>
									</svg>
								</span>
							</Link>
						)}
					</div>
				</div>
				<div>
					<button type="button" className="btn-right" disabled>
						<span>
							<svg viewBox="0 0 18 18">
								<path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z" />
							</svg>
						</span>
					</button>
					<button type="button" className="btn-right">
						<span>
							<svg viewBox="0 0 18 18">
								<path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
							</svg>
						</span>
					</button>
				</div>
			</header>
			{company && (
				<CustomSlider {...settings}>
					{data.map((value) => (
						<ArticleCompany
							key={value.idx}
							name={value.name}
							type={value.relatedWord}
							profileImg={value.profileImageUrl}
							imgUrl={value.companyImageUrl}
						/>
					))}
				</CustomSlider>
			)}
			{theme && (
				<CustomSlider {...settings}>
					{data.map((value) => (
						<ArticleThemeCompany
							key={value.idx}
							imgUrl={value.imgUrl}
							title={value.title}
							subtitle={value.subtitle}
							logos={value.logos}
						/>
					))}
				</CustomSlider>
			)}
		</ComponentsWrapper>
	);
}

const ComponentsWrapper = styled.div`
	position: relative;
	margin-bottom: -70px;
	.titlelist-header {
		position: relative;
		margin-bottom: 40px;
	}
	.titlelist-title-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 51px;
		padding-top: 36px;
	}
	.titlelist-title {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 9px;
		font-size: 22px;
		font-weight: 700;
		color: #333;
		text-align: center;
		> span {
			font-weight: 400;
		}
		> a > img {
			position: relative;
			top: 3px;
			width: 24px;
			height: 24px;
			margin: 0 8px 0 4px;
		}
	}
	.titlelist-button-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		> a > span:first-child {
			padding-top: 2px;
			margin-right: 6px;
			font-style: normal;
			font-weight: 500;
			font-size: 15px;
			line-height: 18px;
			color: #767676;
		}
		> a {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.btn-right {
			width: 6px;
			height: 10px;
			padding: 0;
			margin: 0;
			color: #767676;
			> svg {
				position: absolute;
				width: inherit;
				height: inherit;
				color: inherit;
			}
		}
	}
`;

const CustomSlider = styled(Slider)`
	z-index: 1;
	position: relative;
	display: block;
	box-sizing: border-box;
	user-select: none;
	touch-action: pan-y;
	padding-top: 70px;
	top: -100px;
	overflow-x: hidden;

	.slick-slide {
		float: left;
		height: 100%;
		min-height: 1px;
		display: inline-block;
	}
`;

export default CompanyRec;
