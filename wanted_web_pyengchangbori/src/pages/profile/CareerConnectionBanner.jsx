import React from 'react';
import styled from 'styled-components';

function CareerConnectionBanner() {
	return (
		<ComponentWrapper>
			<button
				type="button"
				className="banner-content"
				data-attribute-id="profile__scrapCareer__banner__click"
			>
				<div className="banner-content-text">
					<div>
						<p className="CareerConnectBanner_mainTitle__obanG">
							입사일 퇴사일 헷갈릴 때, 내 경력 한눈에 모아보기!
						</p>
					</div>
					<strong className="CareerConnectBanner_commonBtn__qQ9jT">
						지금 확인하기
					</strong>
					<picture>
						<source
							srcSet="https://static.wanted.co.kr/career_connect/banner.webp"
							type="image/webp"
						/>
						<img
							src="https://static.wanted.co.kr/career_connect/banner.png"
							alt="career-connect-banner"
						/>
					</picture>
				</div>
			</button>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.aside`
	width: 100%;
	height: 105px;
	border-radius: 3px;
	margin-bottom: 20px;
	background: linear-gradient(90deg, #ddebff -0.28%, #b7d8ff);
	cursor: pointer;
	.banner-content {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
		padding: 0 24px;
		font-size: 16px;
		font-weight: 700;
		line-height: 19px;
		color: #5071dc;
		.banner-content-text {
			z-index: 0;
			display: flex;
			flex-direction: column;
			> div > p {
				display: inline-flex;
				margin-right: 2px;
			}
			> strong {
				align-items: center;
				justify-content: center;

				display: flex;
				width: 119px;
				height: 32px;
				margin-top: 10px;
				border-radius: 25px;
				background-color: #5071dc;
				color: #fff;
				font-size: 13px;
				font-weight: 700;
				line-height: 16px;
			}
			> picture {
				z-index: -1;
				position: absolute;
				right: 46px;
				bottom: 16px;
				width: 164px;
				height: 108px;
				> img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
`;

export default CareerConnectionBanner;
