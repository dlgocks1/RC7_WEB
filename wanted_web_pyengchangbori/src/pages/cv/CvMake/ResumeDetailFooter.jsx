/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function ResumeDetailFooter({ introduction, handleSubmitData }) {
	return (
		<ComponentWrapper
			descColor={introduction.length < 400}
			barSize={100 - (introduction.length / 1600) * 100}
		>
			<div className="resumedetail-footer">
				<div className="resumedetail-footer-progress">
					<div className="progressbar">
						<div className="progressbar-graph">
							<div className="progressbar-graph-top">
								<div className="progressbar-graph-top-text">
									{introduction.length}
								</div>
							</div>
							<div className="progressbar-graph-bar">
								<div className="progressbar-graph-bar-progress" />
								<div className="progressbar-graph-bar-pin" />
							</div>
							<div className="progressbar-graph-bottom">
								<div>0</div>
								<div>400</div>
							</div>
						</div>
						<div className="progressbar-emoji">💪</div>
						<div className="progressbar-desc">
							<div>
								{introduction.length < 400
									? '400자 이상 작성하시면 이력서를 완료할 수 있어요!'
									: introduction.length <= 1300
									? `원티드 회원들은 평균 1,300자 정도 작성했어요.`
									: `훌륭한 이력서를 보유하고 계시는군요!`}
							</div>
						</div>
					</div>
				</div>
				<div className="progressbar-footer-btns">
					<button
						onClick={() => {
							handleSubmitData('WRITING');
						}}
						type="button"
						className="progressbar-root btn-outlined  btn-size-large resumedetail-footer-btns-btn resumdetail-temp"
					>
						<span>임시 저장</span>
					</button>
					<button
						onClick={() => {
							handleSubmitData('COMPLETE');
						}}
						type="button"
						className="progressbar-root btn-contained  btn-size-large resumedetail-footer-btns-btn"
					>
						<span>작성 완료</span>
					</button>
				</div>
			</div>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	position: fixed;
	top: auto;
	left: 0;
	right: 0;
	bottom: 0;
	margin: 0;
	padding: 0 50px;
	background-color: #fff;
	border-top: 1px solid #e0e0e0;
	.resumedetail-footer {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		width: 100%;
		max-width: 1060px;
		padding: 15px 0;
		margin: 0 auto;
		> div {
			-ms-flex-direction: row;
			flex-direction: row;
		}
	}
	.resumedetail-footer-progress {
		flex: 1 1 auto;
	}
	.progressbar {
		display: flex;
		align-content: stretch;
		align-items: center;
		margin-top: 3px;
		position: relative;
		overflow: hidden;
		transform: translateZ(0);
	}
	.progressbar-graph {
		position: relative;
		flex: 0 1 150px;
	}
	.progressbar-graph-top {
		position: relative;
		overflow: hidden;
		height: 17px;
	}
	.progressbar-graph-top-text {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		transition: transform 0.4s linear;
		transition: transform 0.4s linear, -webkit-transform 0.4s linear;
		transform-origin: left;
		font-size: 10px;
		font-weight: 600;

		transform: ${(props) =>
			`translateX(${Math.abs(
				90 - props.barSize > 80 ? 83 : 100 - props.barSize,
			)}%)`};

		display: inherit;
		color: rgb(51, 51, 51);
		color: ${(props) => !props.descColor && 'rgb(51, 102, 255)'};
	}

	.progressbar-graph-bottom {
		position: relative;
		overflow: hidden;
		height: 14px;
	}
	.progressbar-graph-bar {
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 9px;
		border-radius: 4.5px;
		background-color: #e1e2e3;
		transform: translateZ(0);
	}

	.progressbar-graph-bar-progress {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		transition: transform 0.4s linear;
		transition: transform 0.4s linear, -webkit-transform 0.4s linear;
		transform-origin: left;
		border-radius: 4.5px 0 0 4.5px;

		transform: ${(props) => `translateX(-${props.barSize}%)`};
		/* transform: translateX(-76.75%); */
		background-color: rgb(51, 51, 51);
		background-color: ${(props) => !props.descColor && 'rgb(51, 102, 255)'};
	}
	.progressbar-graph-bar-pin {
		position: absolute;
		top: 0;
		bottom: 0;
		border-left: 1px dotted #36f;
		left: 25%;
		left: ${(props) => !props.descColor && '81%'};
	}
	.progressbar-graph-bottom {
		position: relative;
		overflow: hidden;
		height: 14px;
	}
	.progressbar-emoji {
		flex: 0 1 auto;
		width: 32px;
		margin-top: 2px;
		margin-left: 6px;
		font-size: 16px;
	}
	.progressbar-desc {
		-ms-flex: 1 1 41%;
		flex: 1 1 41%;
		font-size: 13px;
		margin-top: 3px;
		color: #333;
		font-weight: 600;
	}

	.progressbar-footer-btns {
		flex: 0 1 auto;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-end;
		align-content: stretch;
		align-items: flex-start;
	}
	.progressbar-root {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		vertical-align: middle;
		min-width: 64px;
		padding: 0 27px;
		box-sizing: border-box;
		border-radius: 25px;
		font-size: 16px;
		font-weight: 700;
		line-height: normal;
		border: none;
		background-color: none;
		cursor: pointer;
	}
	.btn-outlined {
		color: #36f;
		background-color: #fff;
		border: 1px solid #36f;
	}
	.resumedetail-footer-btns-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 0 1 auto;
		align-self: auto;
		width: 173px;
	}
	.btn-size-large {
		height: 50px;
		font-size: 16px;
	}

	.resumedetail-footer-btns-btn.resumdetail-temp {
		margin-right: 9px;
	}

	.btn-contained {
		color: #fff;
		background-color: #36f;
		border: none;
	}
`;
export default ResumeDetailFooter;
