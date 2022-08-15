import ArticleEmployment from 'components/common/ArticleEmployment';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchFilter from './SearchFilter';

function SearchBody({ fetchSearchData }) {
	const [provideData, setProvideData] = useState(
		fetchSearchData.read().data.result,
	);

	useEffect(() => {
		setProvideData(fetchSearchData.read().data.result);
	}, [fetchSearchData]);

	return (
		<ComponentWrapper>
			<div className="search-container">
				<h2 className="search-label">
					연관 직무<span>{provideData.dutyName.length}</span>
				</h2>

				<div className="category-tag-container">
					{provideData.dutyName.map((value) => (
						<Link to="/" className="category-tagitem">
							{value.name}
						</Link>
					))}
				</div>
			</div>

			<div className="search-container">
				<h2 className="search-label">
					회사 <span>{provideData.company.length}</span>
				</h2>
				{provideData.length !== 0 && (
					<div className="company-container">
						{provideData.company.map((value) => (
							<div className="company-item">
								<div className="CompanyItem_logoGroup__ugDSt">
									<div
										className="CompanyItem_logoClassName__UTrBh"
										style={{
											backgroundImage: `url(${value.profileImageUrl})`,
										}}
									/>
									<div className="CompanyItem_textClassName__Dxods">
										<h5>{value.name}</h5>
										<h6>{value.relatedWord}</h6>
									</div>
								</div>
								<button
									type="button"
									className="Button_Button__root__V1ie3 Button_Button__outlined__H2mkd undefined Button_Button__sizeMedium__k0A1w CompanyItem_buttonDefault__r02xH"
								>
									<span className="Button_Button__label__1Kk0v">
										팔로우
									</span>
								</button>
							</div>
						))}
					</div>
				)}
			</div>

			<div className="search-container">
				<h2 className="search-label">
					포지션 <span>{provideData.duty.length}</span>
				</h2>

				<SearchFilter />

				<div className="list-container">
					{provideData.duty.length !== 0 && (
						<ul>
							{provideData.duty.map((value) => (
								<li>
									<ArticleEmployment
										jobno={value.no}
										companyImageUrl={value.companyImageUrl}
										country={value.country}
										name={value.name}
										title={value.title}
									/>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	margin: 60px auto 80px;
	width: 87.72%;
	position: relative;
	max-width: 1060px;
	.company-container {
		display: flex;
		flex-wrap: wrap;
		.company-item {
			width: calc(50% - 20px);
			margin: 10px;
			float: left;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 21px 20px;
			background: #fff;
			border-radius: 2px;
			.CompanyItem_logoGroup__ugDSt {
				display: flex;
				align-items: center;
				flex-direction: row;
				width: calc(100% - 110px);
			}
			.CompanyItem_logoClassName__UTrBh {
				width: 58px;
				height: 58px;
				margin-right: 20px;
				background-size: 100%;
				background-position: 50%;
				background-repeat: no-repeat;
			}
			.CompanyItem_textClassName__Dxods {
				width: calc(100% - 78px);
				height: 58px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				h5 {
					color: #333;
					font-size: 18px;
					font-weight: 400;
					line-height: 27px;
					margin-bottom: 4px;
				}
				.CompanyItem_textClassName__Dxods h6 {
					color: #999;
					font-size: 14px;
					font-weight: 400;
					line-height: 20px;
				}
			}
			.Button_Button__outlined__H2mkd {
				color: #36f;
				background-color: #fff;
				border: 1px solid #e1e2e3;
				height: 40px;
				font-size: 15px;
				position: relative;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				vertical-align: middle;
				min-width: 64px;
				padding: 0 27px;
				box-sizing: border-box;
				border-radius: 25px;
				font-weight: 700;
				line-height: normal;
				font-family: inherit;
				cursor: pointer;
				span {
					font-family: inherit;
					width: 100%;
					font-size: 15px;
				}
			}
		}
	}
	.list-container {
		ul {
			margin: -10px;
			padding: 0px;
			> li {
				width: 25%;
				padding: 10px;
				list-style: none;
				display: inline-block;
				vertical-align: top;
			}
		}
	}
	.search-container {
		padding-bottom: 60px;
	}
	.search-label {
		font-size: 24px;
		font-weight: 600;
		line-height: 36px;
		margin-bottom: 18px;
		color: #333;
		> span {
			margin-left: 10px;
			font-weight: 400;
		}
	}
	.category-tag-container {
		position: relative;
		width: 100%;
		text-align: left;
		.category-tagitem {
			display: inline-block;
			background-color: #fff;
			text-align: center;
			padding: 0 18px;
			height: 40px;
			line-height: 40px;
			border: 1px solid #e1e2e3;
			border-radius: 20px;
			font-size: 16px;
			font-weight: 400;
			color: #333;
			margin: 0 6px 6px 0;
			font-family: inherit;
		}
	}

	/* .CompanyList_className__onSYS {
		margin: -10px;
		position: relative;
		scrollbar-width: none;
	} */
`;

export default SearchBody;
