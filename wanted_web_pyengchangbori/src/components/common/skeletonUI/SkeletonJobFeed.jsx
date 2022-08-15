import React from 'react';
import styled from 'styled-components';
import ArticleCompany from '../ArticleCompany';

function SkeletonJobFeed(props) {
	return (
		<ComponentWrapper>
			<div className="company-container">
				<header role="img" />
				<div className="company-body">
					<div className="company-body-flex">
						<div role="img" className="company-body-img" />
						<div className="company-body-info">
							<div className="company-body-info-title" />
							<p className="company-body-location" />
						</div>
					</div>
				</div>
			</div>
			<div className="company-container">
				<header role="img" />
				<div className="company-body">
					<div className="company-body-flex">
						<div role="img" className="company-body-img" />
						<div className="company-body-info">
							<div className="company-body-info-title" />
							<p className="company-body-location" />
						</div>
					</div>
				</div>
			</div>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	max-width: 1060px;
	width: 87.72%;
	margin: 60px auto;
	display: flex;

	.company-container {
		padding: 10px;
		width: 50%;
		> a {
			display: block;
		}
		header {
			padding-bottom: 52%;
			background-size: cover;
			background-position: 50%;
			border-radius: 4px;
			-webkit-animation: skeleton-gradient 1.8s infinite ease-in-out;
			animation: skeleton-gradient 1.8s infinite ease-in-out;
			box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
		}
	}
	.company-body {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		margin-top: 17px;
	}
	.company-body-flex {
		display: flex;
		flex: 1 0;
	}
	.company-body-img {
		width: 42px;
		height: 42px;
		flex-grow: 0;
		flex-shrink: 0;
		box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
		background-size: contain;
		background-position: 50%;
		margin-right: 12px;
		-webkit-animation: skeleton-gradient 1.8s infinite ease-in-out;
		animation: skeleton-gradient 1.8s infinite ease-in-out;
	}
	.company-body-info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-style: normal;
		line-height: normal;
		width: 70%;
		letter-spacing: normal;
	}
	.company-body-info-title {
		width: 70%;
		height: 100%;
		margin: 3px 0;
		-webkit-animation: skeleton-gradient 1.8s infinite ease-in-out;
		animation: skeleton-gradient 1.8s infinite ease-in-out;
	}
	.company-body-location {
		width: 70%;
		height: 70%;
		margin: 3px 0;
		-webkit-animation: skeleton-gradient 1.8s infinite ease-in-out;
		animation: skeleton-gradient 1.8s infinite ease-in-out;
	}
	.btn-company-body {
		border: 1px solid #e1e2e3;
		padding: 12px 25.5px 11px;
		line-height: 1;
		height: 40px;
		font-size: 15px;
		color: #36f;
		background-color: #fff;
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		vertical-align: middle;
		min-width: 64px;
		box-sizing: border-box;
		border-radius: 25px;
		font-weight: 700;
		cursor: pointer;
		span {
			width: 100%;
			font-size: inherit;
			font-weight: inherit;
			display: inherit;
			-ms-flex-align: inherit;
			align-items: inherit;
			-ms-flex-pack: inherit;
			justify-content: inherit;
			color: inherit;
		}
	}
`;
export default SkeletonJobFeed;
