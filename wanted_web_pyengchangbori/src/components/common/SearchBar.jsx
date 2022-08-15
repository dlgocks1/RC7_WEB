import React, { useDeferredValue, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import RecentSearch from './RecentSearch';
import RecTagContainer from './RecTagContainer';

function SearchBar({
	inputTextState,
	handleSubmitInput,
	setInputText,
	setIsSearching,
}) {
	const handleChangeInput = (e) => {
		setInputText(e.target.value);
	};

	return (
		<ComponentWrapper>
			<div className="searchbar-container">
				<form
					onSubmit={(e) => {
						handleSubmitInput(e);
					}}
					role="presentation"
					action="."
				>
					<input
						type="search"
						placeholder="#태그, 회사, 포지션 검색"
						autoComplete="off"
						value={inputTextState}
						onChange={(e) => {
							handleChangeInput(e);
						}}
					/>
					<svg
						xmlns="https://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 18 18"
						className="searchbar-searchicon"
					>
						<defs>
							<path
								id="qt2dnsql4a"
								d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
							/>
						</defs>
						<g fill="none" fillRule="evenodd">
							<use
								fill="#333"
								fillRule="nonzero"
								stroke="#333"
								strokeWidth=".3"
								xlinkHref="#qt2dnsql4a"
							/>
						</g>
					</svg>
					<button type="button" className="searchbar-close-icon">
						<svg width="24" height="24" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
							/>
						</svg>
					</button>
				</form>

				<div
					onClick={() => {
						setIsSearching(false);
					}}
					role="presentation"
					className="result-container"
				>
					<div className="container" role="presentation">
						<RecTagContainer />
						<RecentSearch />
					</div>
				</div>
			</div>
			<div
				onClick={() => {
					setIsSearching(false);
				}}
				role="presentation"
				className="searchresult-overlay"
			/>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	left: 0;
	top: 0;
	width: 100%;
	position: absolute;
	background: #fff;
	.searchresult-overlay {
		content: '';
		display: block;
		position: fixed;
		top: 50px;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: -1;
	}
	.recentsearchresult-rightsidebtn {
		float: right;
		font-size: 14px;
		font-weight: 400;
		line-height: 20px;
		color: #767676 !important;
		font-family: inherit;
	}
	.recentsearchresult-searchlabel {
		display: inline-block;
		font-size: 14px;
		line-height: 20px;
		font-weight: 600;
		color: #333;
	}
	.recentsearchresult-listClassbtn {
		display: inline-block;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		line-height: 1;
		color: #939393;
	}
	.recentsearchresult-container {
		padding: 20px 0 50px;
		> li {
			width: 100%;
			position: relative;
			display: block;
			font-size: 18px;
			font-weight: 400;
			line-height: 35px;
			color: #333;
			:hover {
				background: #f9f9f9;
			}
			> a {
				display: inline-block;
				width: calc(100% - 24px);
			}
		}
	}
	.searchbar-container {
		width: 100%;
		max-width: 1060px;
		margin: 0 auto;
		padding: 30px 0 140px;
		position: relative;
		background-color: #fff;
		> form {
			position: relative;
			> input {
				height: 50px;
				line-height: 50px;
				width: 100%;
				margin: 0;
				padding: 0 36px 0 60px;
				border: 1px solid #f2f4f7;
				border-radius: 25px;
				font-size: 16px;
				font-weight: 400;
				color: #767676;
				background-color: #f2f4f7;
				overflow: hidden;
				text-overflow: ellipsis;
				font-family: inherit;
				white-space: nowrap;
				outline: none;
				:focus {
					border: 1px solid #36f;
					color: #333;
					background-color: #fff;
				}
				::placeholder {
					color: #767676;
					font-family: inherit;
				}
			}
		}
	}

	.searchbar-searchicon {
		position: absolute;
		top: 26px;
		left: 20px;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		color: #939393;
		width: 18px;
		height: 18px;
		margin: 0 16px 0 6px;
	}
	.searchbar-close-icon {
		display: none;
		position: absolute;
		font-size: 12px;
		right: 10px;
		top: -2px;
		width: 50px;
		height: 50px;
		color: #999;
		padding: 15px;
	}
	.result-container {
		position: fixed;
		left: 0;
		right: 0;
		background-color: #fff;
		.container {
			position: relative;
			margin: 0 auto;
			padding: 50px 0 0;
			width: 87.72%;
			max-width: 1060px;
			::before {
				content: ' ';
				display: table;
			}
			::after {
				clear: both;
			}
		}
		.recentresult-container {
			display: inline-block;
			font-size: 14px;
			line-height: 20px;
			font-weight: 600;
			color: #333;
		}
	}
	.recentresult-rightsidebtn {
		float: right;
		font-size: 14px;
		font-weight: 400;
		line-height: 20px;
		color: #767676 !important;
		> svg {
			margin-left: 3px;
		}
	}
	.recentsearch-result-container {
		padding: 20px 0 50px;
		::after {
			display: block;
			content: '';
			clear: both;
		}
		> .taglist-item {
			float: left;
			font-family: inherit;
			width: auto;
			position: relative;
			display: block;
			font-size: 18px;
			font-weight: 400;
			line-height: 35px;
			color: #333;
			:first-of-type {
				margin-left: 0;
			}
			:nth-of-type(5n + 1) > button {
				background: #f0f8f8;
			}
			:nth-of-type(5n + 2) > button {
				background: #eeedf4;
			}
			:nth-of-type(5n + 3) > button {
				background: #e8edf3;
			}
			:nth-of-type(5n + 4) > button {
				background: #e9f4fb;
			}
			:nth-of-type(5n + 5) > button {
				background: #effbf3;
			}
		}
		.tag-container {
			display: inline-block;
			height: 50px;
			line-height: 50px;
			font-size: 15px;
			font-weight: 400;
			color: #333;
			border-radius: 3px;
			margin-left: 10px;
			margin-bottom: 10px;
			padding: 0 26px;
			background-color: #f3f5f8;
			border-radius: 25px;
			> button {
				margin-bottom: 0;
			}
		}
	}

	font-family: inherit;
`;
export default SearchBar;
