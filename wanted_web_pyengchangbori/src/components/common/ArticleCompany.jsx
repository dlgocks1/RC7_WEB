import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function ArticleCompany({ name, type, profileImg, imgUrl }) {
	return (
		<ComponentWrapper>
			<div className="company-container">
				<Link to="/company/16591">
					<header
						role="img"
						style={{
							backgroundImage: `url(${imgUrl})`,
						}}
					/>
					<div className="company-body">
						<div className="company-body-flex">
							<div
								role="img"
								className="company-body-img"
								style={{
									backgroundImage: `url(${profileImg})`,
								}}
							/>
							<div className="company-body-info">
								<p className="company-body-info-title">
									{name}
								</p>
								<p className="company-body-location">{type}</p>
							</div>
						</div>
						<button type="button" className="btn-company-body">
							<span>팔로우</span>
						</button>
					</div>
				</Link>
			</div>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	.company-container {
		padding: 10px;
		> a {
			display: block;
		}
		header {
			padding-bottom: 52%;
			background-size: cover;
			background-position: 50%;
			border-radius: 4px;
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
		background-repeat: no-repeat;
	}
	.company-body-info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
	}
	.company-body-info-title {
		font-size: 18px;
		font-weight: 700;
		color: #333;
		word-break: break-all;
	}
	.company-body-location {
		font-size: 14px;
		font-weight: 500;
		color: #999;
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
export default ArticleCompany;
