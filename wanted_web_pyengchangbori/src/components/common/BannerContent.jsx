import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function BannerContent({ title, contents, advertImageUrl, advertUrl }) {
	return (
		<ComponentWrapper>
			<div className="box-img-wrapper">
				<img src={advertImageUrl} alt={title} />
			</div>
			<div className="box-information">
				<h2>{title}</h2>
				<h3>{contents}</h3>
				<hr className="divider" />
				<a href={advertUrl}>
					<span className="btn-endicon">
						바로가기
						<span>
							<span>
								<svg className="icon-svg" viewBox="0 0 18 18">
									<path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
								</svg>
							</span>
						</span>
					</span>
				</a>
			</div>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	width: 100%;
	display: inline-block;
	.box-img-wrapper {
		position: relative;
		padding-bottom: 28.3%;
		filter: brightness(100%);
		img {
			display: inline-block;
			position: absolute;
			left: 0;
			right: 0;
			width: 100%;
			height: 100%;
			border-radius: 4px;
			object-fit: cover;
		}
	}

	.box-information {
		position: absolute;
		opacity: 1;
		/* bottom: 21px; */
		/* left: 34px; */
		/* right: 0px; */
		top: 132px;
		margin-left: 30px;
		width: 330px;
		height: 146px;
		border-radius: 4px;
		background-color: #fff;
		text-align: left;
		> h2 {
			margin-left: 20px;
			margin-right: 20px;
			font-size: 20px;
			line-height: 1.5;
			font-weight: 700;
			color: #333;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			margin-top: 20px;
		}
		> h3 {
			margin: 0 20px;
			height: 44px;
			font-size: 14px;
			line-height: 1.64;
			color: #333;
			font-weight: 500;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
		.divider {
			height: 1px;
			margin: 0;
			border: none;
			-ms-flex-negative: 0;
			flex-shrink: 0;
			background-color: #ececec;
		}
		a {
			color: #36f;
			margin: 6px 0 0 13px;
			font-size: 14px;
			font-weight: 700;
			line-height: 1;
			height: 40px;
			padding: 6px 8px;

			position: relative;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			vertical-align: middle;
			min-width: 64px;
			box-sizing: border-box;
			border-radius: 25px;
			border: none;
			cursor: pointer;
		}
	}

	.btn-endicon {
		margin-top: -2px;
		margin-right: -1px;
		margin-left: 2px;
	}
`;

export default BannerContent;
