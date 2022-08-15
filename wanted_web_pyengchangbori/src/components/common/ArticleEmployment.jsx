import LabelResponseLevel from 'components/LabelResponseLevel';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ArticleEmployment({ jobno, companyImageUrl, country, name, title }) {
	return (
		<ComponentWrapper>
			<Link to={`/wd/${jobno}`}>
				<header
					className="container-employment"
					style={{ backgroundImage: `url(${companyImageUrl}` }}
				/>
				<div className="content-employment-body">
					<div className="job-card-position">{title}</div>
					<div className="job-card-company-name">{name}</div>
					<div className="container-tooltip">
						<button className="tooltip-label" type="button">
							<LabelResponseLevel />
						</button>
					</div>
					<div className="job-card-company-location">
						서울<span className="addressDot">.</span>
						<span>{country}</span>
					</div>
					<div className="text-reward">채용보상금 1,000,000원</div>
				</div>
			</Link>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	.text-reward {
		margin-top: 10px;
		color: #333;
		font-size: 14px;
		font-weight: 500;
		text-align: left;
		word-break: break-word;
		width: 100%;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.addressDot {
		margin: 0 3px;
		top: -4px;
		position: relative;
	}
	.job-card-company-location {
		font-weight: 400;
		color: #999;
		font-size: 14px;
		line-height: normal;
		text-align: left;
		word-break: break-word;
		width: 100%;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		margin-top: 10px;
	}
	.container-tooltip {
		position: relative;
		button {
			position: relative;
		}
	}

	.content-employment-body {
		padding: 14px 0;
		.job-card-company-name {
			color: #333;
			font-size: 14px;

			line-height: normal;
			text-align: left;
			word-break: break-word;
			width: 100%;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			margin-top: 10px;
		}
		.job-card-position {
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			position: relative;
			color: #333;
			font-size: 18px;
			font-weight: 600;
			line-height: 1.2;
			max-height: 2.4em;
			overflow: hidden;
			text-align: left;
			word-break: break-word;
		}
	}
	.container-employment {
		padding-bottom: 75%;
		position: relative;
		background-size: cover;
		background-position: 50%;
		border-radius: 4px;
		box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
		background-image: url(https://image.wanted.co.kr/optimize?src=https://static.wanted.co.kr/images/company/22411/nqzjarwsifuzq9ob__400_400.jpg&w=400&q=75);
	}
`;

export default ArticleEmployment;
