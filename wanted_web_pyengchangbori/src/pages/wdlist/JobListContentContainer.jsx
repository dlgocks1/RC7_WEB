import ArticleEmployment from 'components/common/ArticleEmployment';
import React from 'react';
import styled from 'styled-components';

function JobListContentContainer({ contentList }) {
	return (
		<ComponentWrapper>
			<div className="bookmark-section">
				<button type="button">
					<svg
						width="13"
						height="17"
						viewBox="0 0 13 17"
						style={{ color: 'rgb(51, 102, 255)' }}
					>
						<defs>
							<path
								id="bookmarkIconFill"
								d="M6.25 13.21L.905 16.22c-.403.228-.905-.06-.905-.517V.596C0 .267.27 0 .605 0h11.29c.334 0 .605.267.605.596v15.107c0 .458-.502.745-.905.518L6.25 13.209z"
							/>
						</defs>
						<g
							fill="none"
							fillRule="evenodd"
							transform="translate(.188)"
						>
							<use
								fill="currentColor"
								xlinkHref="#bookmarkIconFill"
							/>
						</g>
					</svg>
					<span>북마크 모아보기</span>
					<svg width="12" height="12" viewBox="0 0 12 12">
						<path
							fill="currentColor"
							d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"
						/>
					</svg>
				</button>
			</div>
			<ul>
				{contentList.map((value) => (
					<li>
						<ArticleEmployment
							jobno={value.no}
							companyImageUrl={value.companyImageUrl}
							country={value.country}
							name={value.name}
							key={value.no}
							title={value.title}
						/>
					</li>
				))}
			</ul>
			{contentList.length === 0 && (
				<div className="emptylist-container">
					<h3>
						바로 지원할 곳이 없다면?
						<br />
						<br />
						매치업에 등록하고 면접제안 받으세요!
					</h3>
					<button type="button">매치업 등록하기</button>
				</div>
			)}
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	.emptylist-container {
		text-align: center;
		> h3 {
			font-size: 18px;
			font-weight: 400;
			line-height: 1.5;
			letter-spacing: normal;
			text-align: center;
			font-family: inherit;
			color: #333;
			margin: 150px auto 20px;
		}
		> button {
			width: 150px;
			height: 40px;
			border-radius: 34px;
			font-family: inherit;
			background-color: #36f;
			font-size: 14px;
			font-weight: 600;
			color: #fff;
			margin-bottom: 100px;
		}
	}
	> ul {
		margin: -10px;
		padding: 0;
	}
	> ul li {
		width: 25%;
		padding: 10px;
		list-style: none;
		display: inline-block;
		vertical-align: top;
	}
	.title {
		font-size: 22px;
		font-weight: 600;
		line-height: normal;
		letter-spacing: -0.3px;
		color: #333;
		margin: 20px 0 14px;
	}
	.bookmark-section {
		margin-bottom: 12px;
		> button {
			display: flex;
			align-items: center;
			line-height: 24px;
			color: #36f;
		}
		button > svg {
			width: 11px;
			height: 16px;
			margin-right: 8px;
		}
		> button > span {
			font-size: 15px;
			font-weight: 600;
			font-stretch: normal;
			font-style: normal;
			line-height: 24px;
			letter-spacing: normal;
		}
		svg:last-of-type {
			width: 10px;
			margin: 0 0 0 2px;
		}
	}
`;

export default JobListContentContainer;
