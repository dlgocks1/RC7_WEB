import React, { Component, useState } from 'react';
import styled from 'styled-components';

function ResumeDetailToolbar() {
	const [istoggle, setIsToggle] = useState(false);

	return (
		<ComponentWrapper>
			<div className="resumedetail-toolbar-container">
				<i className="icon-network" />
				<select className="resumedetail-toolbar-lang-container">
					<option value="ko" selected="">
						한국어
					</option>
					<option value="ja">日本語</option>
					<option value="tw">繁體中文</option>
					<option value="en">English</option>
				</select>
				<i className="icon-play" />
			</div>
			<div className="resumedetail-otherbtns">
				<div className="guidebtn-container">
					<div className="guidebtn-item">
						<button type="button" className="guidebtn-item-button">
							<span>합격 / 불합격 단어 가이드</span>
						</button>
					</div>
					<div className="guidebtn-item GuideButton_check__DdN8Q">
						<button type="button" className="guidebtn-item-text">
							<span>내 이력서 단어 체크</span>
						</button>
						<ToogleBtn
							istoggle={istoggle}
							className="guidebtn-item-toggle"
							onClick={() => {
								setIsToggle(!istoggle);
							}}
						>
							<input
								className="guidebtn-input"
								type="checkbox"
								id="togglecheck"
							/>
							<span className="togglebtn-slider" />
						</ToogleBtn>
					</div>
				</div>
				<button
					type="button"
					className="resumedetail-download-btn btn btn-default"
				>
					<i className="icon-download" />
				</button>
			</div>
		</ComponentWrapper>
	);
}
const ToogleBtn = styled.button`
	margin-bottom: 3px;
	position: relative;
	display: inline-block;
	width: 56px;
	height: 30px;

	.togglebtn-slider {
		font-size: 14px;
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		transition: 0.4s;
		border-radius: 15px;
		border: 1px solid #ececec;

		background-color: ${(props) =>
			props.istoggle ? '#03c803' : `#f2f4f7`};
		border: ${(props) => props.istoggle && 'none'};

		::before {
			position: absolute;
			content: '';
			height: 26px;
			width: 26px;
			border-radius: 50%;
			left: 2px;
			top: 1px;
			background-color: #fff;
			transition: 0.4s;
			border: 1px solid #e1e2e3;
			top: ${(props) => props.istoggle && '2px'};
			left: ${(props) => props.istoggle && '3px'};
			border: ${(props) => props.istoggle && 'none'};
			transform: ${(props) => props.istoggle && 'translateX(24px)'};
		}
	}
`;

const ComponentWrapper = styled.div`
	width: 1060px;
	margin: 0 auto;
	position: fixed;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	background-color: #fff;
	align-items: center;
	top: 50px;
	right: 5%;
	left: 5%;
	z-index: 4;
	padding: 20px 0;

	.icon-download {
		color: #999;
		font-size: 15px;
		line-height: 40px;
	}

	.icon-play {
		right: 3px;
		font-size: 14px;
		color: #666;
		position: absolute;
		top: 55%;
		display: block;
		transform: translateY(-50%) rotate(90deg);
	}
	.guidebtn-container {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background-color: #fff;

		margin-right: 30px;
	}
	.resumedetail-toolbar-container {
		padding: 0;
		height: 40px;
		width: 102px;
		border-radius: 2px;
		border: 1px solid #333;
		background-color: #fff;
		position: relative;
		.icon-network {
			font-size: 16px;
			color: #666;
			left: 10px;
			position: absolute;
			top: 55%;
			transform: translateY(-50%);
		}
	}
	.resumedetail-toolbar-lang-container {
		background: none;
		position: relative;
		width: 100%;
		min-width: 98px;
		height: 100%;
		padding-left: 37px;
		font-size: 14px;
		border: #e0e0e0;
		background-color: transparent;
		box-shadow: none;
		font-family: inherit;

		-webkit-appearance: none;
	}
	.icon-cheveron-right {
		right: 0;
		font-size: 18px;
		color: #666;
		position: absolute;
		top: 10px;
	}
	.resumedetail-otherbtns {
		vertical-align: middle;
		display: flex;
	}
	.guidebtn-desktop {
		margin-right: 30px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background-color: #fff;
	}
	.guidebtn-item {
		display: flex;
		justify-content: center;
		align-items: center;
		span {
			font-size: 14px;
			padding: 0.2em 0.6em 0.3em;
			font-weight: 600;
		}
	}
	.guidebtn-item-button {
		padding-right: 5px !important;
		height: 40px;
		font-size: 15px;
		color: #36f;
		padding: 6px 8px;
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		vertical-align: middle;
		min-width: 64px;
		box-sizing: border-box;
		border-radius: 25px;
		font-weight: 700;
		line-height: normal;
		border: none;
		background-color: none;
		cursor: pointer;
	}
	.guidebtn-item-text {
		position: relative;
		padding: 6px 4px 6px 6px !important;
		height: 40px;
		font-size: 15px;
		color: #333;
		::before {
			content: '';
			width: 1px;
			height: 14px;
			background-color: #ccc;
			position: absolute;
			left: 0;
		}
	}

	.guidebtn-input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.btn {
		display: inline-block;
		margin-bottom: 0;
		font-weight: normal;
		text-align: center;
		vertical-align: middle;
		touch-action: manipulation;
		cursor: pointer;
		background-image: none;
		border: 1px solid transparent;
		white-space: nowrap;
		padding: 6px 12px;
		font-size: 14px;
		line-height: 1.42857143;
		border-radius: 3px;
		user-select: none;
	}
	.resumedetail-download-btn {
		border-color: #999;
		width: 40px;
		min-width: unset;
		height: 40px;
		padding: 0;
		outline: none !important;
		color: #76797e;
		border-color: #76797e;
	}
`;
export default ResumeDetailToolbar;
