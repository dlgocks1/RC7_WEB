/* eslint-disable no-undef */
/* eslint-disable import/no-mutable-exports */
import { WindowsFilled } from '@ant-design/icons';
import axios from 'axios';
import ArticleEmployment from 'components/common/ArticleEmployment';
import Loading from 'components/common/Loading';
import LabelResponseLevel from 'components/LabelResponseLevel';
import { ErrorBoundary } from 'hoc/ErrorBoundary';
import React, {
	Suspense,
	useDeferredValue,
	useEffect,
	useRef,
	useState,
} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { JobFeedDummydata } from 'utils/mockData';
import { fetchWddData } from './fetchWdData';
import PostingDetail from './PostingDetail';

function WdPage() {
	const { wdIndex } = useParams();

	const { isLogin, userId, jwt } = useSelector(
		(state) => state.UserDataReducer,
	);

	const [fetchWdData, setFetchWdData] = useState(
		fetchWddData({ wdIndex, userId, jwt }),
	);

	return (
		<ComponentWrapper>
			<div className="jobDetail-container">
				<ErrorBoundary>
					<Suspense fallback={<Loading />}>
						<PostingDetail
							wdIndex={wdIndex}
							fetchWdData={fetchWdData}
						/>
						<div className="associated-container">
							<h5 className="associated-title">
								이 포지션을 찾고 계셨나요?
							</h5>
							<div className="associated-joblist">
								<ul>
									{JobFeedDummydata.map((value) => (
										<li>
											<ArticleEmployment
												jobno={value.no}
												companyImageUrl={
													value.companyImageUrl
												}
												country={value.country}
												name={value.name}
												title={value.title}
											/>
										</li>
									))}
								</ul>
							</div>
						</div>
					</Suspense>
				</ErrorBoundary>
			</div>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	margin: 0 auto;
	padding: 20px 0 80px;
	width: 87.72%;
	max-width: 1060px;
	.wantedAi-popup {
		margin-top: -5px;
		margin-left: 4px;
		margin-right: 4px;
		width: auto;
		background-color: #fff;
		border: 1px solid #999;
		position: relative;
		padding: 0 16px 15px;
		color: #333;
		z-index: 3;
		> hr {
			margin: 0;
			height: 1px;
			flex-shrink: 0;
			border: none;
			background-color: #ededed;
		}
		.wantedAi-title {
			margin-top: 20px;
			font-weight: 600;
			font-size: 13px;
		}
		.btn-closewantedAi {
			position: absolute;
			top: 11px;
			right: 11px;
		}
		.description-wantedAipopup {
			margin-top: 5px;
			font-size: 12px;
			line-height: normal;
			letter-spacing: normal;
		}
		.text-gotofrofile {
			margin-top: 5px;
			align-items: stretch;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: space-between;
			align-content: stretch;
			align-items: flex-end;
			border-radius: 4px;
		}
		.wantedAipopup-conatiner-item > * {
			margin-right: 5px;
			vertical-align: middle;
			font-size: 12px;
			font-weight: 600;
			color: #3466ff !important;
		}
	}

	.onfixed {
		bottom: 0px;
		position: absolute !important;
		/* right: 0px !important; */
		right: calc((100% - 1060px) / 2) !important;
	}

	.jobprocess-container {
		width: 340px;
		position: fixed;
		right: calc((100% - 1060px) / 2);

		.footer-jobprogress {
			margin-top: 10px;
		}
		.wantedAi-container {
			margin-top: 4px;
			align-items: stretch;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: space-between;
			align-content: stretch;
			border-radius: 4px;
			background-color: #f3f5f8;
			padding: 11px 15px 10px;
			.item-description {
				line-height: 1.5;
				color: #999;
				order: 0;
				flex: 0 1 auto;
				align-self: auto;
				font-size: 12px;
				.btn-question {
					width: 17px;
					height: 17px;
					margin-left: 6px;
					margin-right: 3px;
					background-color: transparent;
					vertical-align: -4px;
				}
			}
			.item-content {
				order: 0;
				flex: 0 1 auto;
				align-self: auto;
				font-size: 12px;
				color: #111;
				> img {
					margin-right: 5px;
					vertical-align: middle;
				}
				> span {
					font-weight: 600;
					margin-right: 5px;
					vertical-align: -1px;
				}
			}
		}

		header {
			width: 340px;
			border: 1px solid #e1e2e3;
			background-color: #fff;
			padding: 24px 20px;
			.reaction {
				margin: 24px 0 0;
				height: 30px;
				.likes {
					height: 30px;
					border-radius: 15px;
					border: 1px solid #e1e2e3;
					margin-right: 12px;
					padding: 0 15px;
					float: left;
					> i {
						/* 좋아요했을 때  */
						/* color: #fe415c; */
						font-size: 16px;
						color: #dbdbdb;
						margin-right: 10px;
						position: relative;
						top: 1px;
					}
					> span {
						font-size: 14px;
						font-weight: 600;
						line-height: 30px;
						letter-spacing: normal;
						text-align: left;
						color: #333;
						position: relative;
						top: -1px;
					}
				}
			}
			.btn-apply {
				order: 0;
				flex: 1 1;
				align-self: auto;
				> button {
					width: 100%;
					height: 50px;
					border-radius: 25px;
					background-color: #36f;
					font-family: inherit;
					font-size: 16px;
					font-weight: 600;
					letter-spacing: normal;
					color: #fff;
					text-align: center;
				}
			}
			.btn-bookmark {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				justify-content: center;
				align-content: stretch;
				align-items: center;
				width: 100%;
				font-family: inherit;
				height: 50px;
				border-radius: 25px;
				background-color: #fff;
				border: 1px solid #36f;
				font-size: 16px;
				font-weight: 600;
				letter-spacing: normal;
				color: #36f;
				text-align: center;
				margin-bottom: 10px;
				> svg {
					margin-right: 8px;
				}
			}
			.btn-share {
				margin-bottom: 10px;
				position: absolute;
				top: 20px;
				right: 20px;
				width: 40px;
				height: 40px;
				background: #fff;
				border-radius: 20px;
				border: 1px solid #e1e2e3;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			h3 {
				font-size: 15px;
				font-weight: 600;
				letter-spacing: normal;
				text-align: left;
				color: #333;
			}
			ul {
				overflow: hidden;
				margin: 24px 0;
				> li {
					float: left;
					width: 50%;
					letter-spacing: normal;
					text-align: left;
				}
			}
		}
	}

	.associated-container {
		margin: 80px 0 0;
		.associated-title {
			margin: 0 0 20px;
			font-size: 20px;
			font-weight: 600;
			color: #333;
			line-height: normal;
		}
		.associated-joblist {
			margin: -10px;
			padding: 0;
			ul li {
				width: 25%;
				padding: 10px;
				list-style: none;
				display: inline-block;
				vertical-align: top;
			}
		}
	}

	.warning {
		margin-top: 10px;
		border-radius: 5px;
		background-color: #f3f5f8;
		.warning-header {
			padding: 25px 30px;
			display: flex;
			align-items: center;
		}

		.warning-header-content {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			> h5 {
				margin: 0 20px;
				font-size: 12px;
				font-weight: 700;
				line-height: 22px;
				color: #333;
			}
			i {
				display: block;
				transform: rotate(90deg);
			}
		}
	}

	.companyInfo {
		border-radius: 3px;
		border: 1px solid #e1e2e3;
		padding: 20px;
		margin: 80px 0 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		.btn-follow {
			border: 1px solid #e1e2e3;
			height: 40px;
			font-size: 15px;
			color: #36f;
			background-color: #fff;
			border: 1px solid inherit;
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
			cursor: pointer;
		}
		h6 {
			color: #999;
			font-size: 15px;
			font-weight: 600;
			margin: 0;
			padding-right: 10px;
		}
		h5 {
			color: #333;
			font-size: 15px;
			font-weight: 600;
			margin: 0 0 5px;
			word-break: break-word;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			padding-right: 10px;
		}
		.logo {
			background-position: 50%;
			background-size: contain;
			width: 50px;
			height: 50px;
			box-shadow: 0 0 1px 0 rgb(0 0 0 / 10%);
			margin-right: 15px;
			background-repeat: no-repeat;
		}
		.left {
			display: flex;
			align-items: center;
			flex-direction: row;
			text-align: left;
		}
	}

	.jobimage-imgcontainer {
		position: relative;
		overflow: hidden;

		.jobimage-slider {
			display: flex;
			flex-wrap: nowrap;
			flex-direction: row;
			align-items: flex-start;
			padding-bottom: 4px;
			height: auto;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
			overscroll-behavior: contain;
			.arrow-right {
				right: 0;
			}
			.arrow-left {
				i {
					display: block;
					transform: rotate(180deg);
				}
			}
			::-webkit-scrollbar {
				height: 10px;
			}
			::-webkit-scrollbar-thumb {
				background-color: #b5b5b5;
				border-radius: 10px;
			}

			.img-jobimage {
				scroll-snap-align: start;
				position: relative;
				width: 100%;
				flex-shrink: 0;
				padding-bottom: 70%;
			}
			img {
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0;
				top: 0;
				border-radius: 4px;
				object-fit: cover;
				outline: 1px solid rgba(0, 0, 0, 0.05);
				outline-offset: -1px;
			}
		}
	}
	.jobcontent-container {
		display: inline-block;
		width: calc(100% - 360px);
		vertical-align: top;

		.jobworkplace {
			margin: 40px 0;
			.navepMap {
				display: block;
				width: 100%;
				height: 100%;
				> img {
					display: block;
					width: 100%;
					background-size: cover;
					background-position: 50%;
				}
			}
			> div {
				margin-bottom: 20px;
			}
			.header {
				color: #999;
				width: 80px;
			}
			.body,
			.header {
				display: inline-block;
				font-size: 16px;
				font-weight: 600;
				vertical-align: text-top;
			}
		}

		.divider {
			margin: 0;
			border: 0;
			border-top: 1px solid #eee;
			box-sizing: content-box;
			height: 0;
		}

		.jobdecription {
			margin-bottom: 60px;
			padding-right: 20px;
			margin: 40px 0;
			.skill-wrapper {
				display: flex;
				flex-wrap: wrap;
				grid-gap: 10px 8px;
				gap: 10px 8px;
				margin-top: 5px;
			}
			.skillitem {
				background-color: #e4f4ec;
				border-radius: 20px;
				padding: 9px 14px;
				font-size: 12px;
				line-height: 14.4px;
				font-weight: 600;
			}
			p {
				color: #333;
				font-weight: 400;
				word-wrap: break-word;
				white-space: pre-wrap;

				font-size: 16px;
				line-height: 1.75;
			}
		}
		.jobheader {
			margin: 40px 0 30px;
			.taglist {
				margin-top: 20px;
				> ul > li {
					display: inline-block;
				}
				> ul > li > a {
					display: inline-block;
					margin-right: 6px;
					margin-bottom: 10px;
					padding: 9px 14px;
					font-size: 12px;
					font-weight: 500;
					line-height: 1;
					color: #333;
					background-color: #f3f5f8;
					border-radius: 25px;
				}
			}
			> h2 {
				color: #333;
				font-size: 22px;
				font-weight: 600;
				margin: 0 0 10px;
				word-break: keep-all;
				word-wrap: break-word;
			}
			> div > h6 {
				color: #999;
				font-size: 14px;
				font-weight: 600;
				margin: 0;
				display: inline-flex;
			}
			> div > div {
				display: inline-flex;
			}
			.label-response-container {
				display: inline-flex;
				white-space: nowrap;
				margin: 0 0 0 10px;
				position: relative;
				top: -1px;
			}
			> div > span {
				padding: 0 10px;
				position: relative;
				white-space: nowrap;
				margin-left: 10px;
				color: #999;
				:before {
					content: '';
					display: block;
					width: 1px;
					height: 12px;
					background: #e1e2e3;
					position: absolute;
					top: 4px;
					left: 0;
				}
				.header-dot {
					margin: 0 5px;
					top: -3px;
					position: relative;
				}
				> div:after {
					display: block;
					content: '';
					clear: both;
				}
			}
		}
	}
`;

export default WdPage;
