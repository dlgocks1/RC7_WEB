import React from 'react';
import styled from 'styled-components';

function ArticleThemeCompany({ imgUrl, title, subtitle, logos }) {
	return (
		<ComponentWrapper>
			<div className="theme-container">
				<a href="/themes/4dayswork" className="">
					<div className="theme-thumbnail">
						<img src={imgUrl} alt="img" loading="lazy" />
					</div>
					<h2 className="theme-title">{title}</h2>
					<h5 className="theme-subtitle">{subtitle}</h5>
				</a>
				<div className="theme-logos">
					<img
						src="https://static.wanted.co.kr/images/wdes/0_5.b518db18.png"
						width="30"
						height="30"
						alt=""
					/>
					{logos.map((value) => (
						<img
							src={value.logoUrl}
							width="30"
							height="30"
							alt=""
						/>
					))}

					<a href="/themes/4dayswork" className="">
						<span>+6</span>
					</a>
				</div>
			</div>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	.theme-container {
		display: flex;
		flex-direction: column;
		padding: 10px;
	}
	.theme-thumbnail > img {
		width: 100%;
		height: 100%;
		max-height: 301px;
		border-radius: 4px;
		outline: 1px solid rgba(0, 0, 0, 0.05);
		outline-offset: -1px;
		-o-object-fit: cover;
		object-fit: cover;
	}
	.theme-title {
		margin-top: 16px;
		font-size: 18px;
		font-weight: 700;
		line-height: 21.6px;
		color: #333;
	}
	.theme-subtitle {
		margin-top: 8px;
		font-size: 14px;
		line-height: 16.8px;
		font-weight: 500;
		color: #939393;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.theme-logos {
		margin-top: 8px;
		> img {
			display: inline;
			margin-right: 8px;
			margin-top: 8px;
			border: 1px solid rgba(0, 0, 0, 0.05);
		}
	}
`;
export default ArticleThemeCompany;
