/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import JobGroupSetting from './JobGroupSetting';
import OccupationSetting from './OccupationSetting';
import TagsSetting from './TagsSetting';

function OnboardingPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const level = searchParams.get('level');
	const fromSignup = searchParams.get('fromSignup');
	const { userId, jwt } = useSelector((state) => state.UserDataReducer);

	return (
		<OnboardingPageWrapper>
			<div className="wrapper-onboarding">
				<div className="wrapper-logo">
					<svg width="50" height="20" viewBox="0 0 79 32">
						<path
							fill="#24e0a6"
							d="M27.755 5.155A15.953 15.953 0 0015.992 0C7.152 0-.012 7.164-.012 16.004s7.164 16.004 16.004 16.004c4.653 0 8.84-1.985 11.763-5.155A15.953 15.953 0 0031.996 16c0-4.183-1.606-7.992-4.241-10.845z"
						/>
						<path
							fill="#438bff"
							d="M51.286 5.155A15.953 15.953 0 0039.523 0c-8.84 0-16.004 7.164-16.004 16.004s7.164 16.004 16.004 16.004c4.653 0 8.84-1.985 11.763-5.155A15.953 15.953 0 0055.527 16c0-4.179-1.61-7.992-4.241-10.845z"
						/>
						<path
							fill="#2c5bf2"
							d="M74.812 5.155A15.953 15.953 0 0063.049 0c-8.84 0-16.004 7.164-16.004 16.004s7.164 16.004 16.004 16.004c4.653 0 8.84-1.985 11.763-5.155A15.953 15.953 0 0079.053 16c0-4.183-1.61-7.992-4.241-10.845z"
						/>
						<path
							fill="#24e0bc"
							d="M27.755 5.155A15.953 15.953 0 0015.992 0C7.152 0-.012 7.164-.012 16.004s7.164 16.004 16.004 16.004c4.653 0 8.84-1.985 11.763-5.155A15.953 15.953 0 0123.514 16c0-4.183 1.61-7.992 4.241-10.845z"
						/>
						<path
							fill="#438bff"
							d="M51.282 5.155C48.359 1.985 44.171 0 39.519 0s-8.84 1.985-11.763 5.155a15.953 15.953 0 014.241 10.853c0 4.187-1.61 8-4.241 10.853 2.923 3.17 7.111 5.155 11.763 5.155s8.84-1.985 11.763-5.155c-2.631-2.853-4.241-6.662-4.241-10.853s1.61-8 4.241-10.853z"
						/>
						<path
							fill="#3a68f9"
							d="M27.755 5.155a15.953 15.953 0 00-4.241 10.853c0 4.187 1.61 8 4.241 10.853 2.631-2.853 4.241-6.662 4.241-10.853s-1.606-8-4.241-10.853z"
						/>
						<path
							fill="#2c5bf2"
							d="M63.049 0c-4.653 0-8.84 1.985-11.763 5.155a15.953 15.953 0 014.241 10.853c0 4.187-1.61 8-4.241 10.853a15.953 15.953 0 0011.763 5.155c8.84 0 16.004-7.164 16.004-16.004C79.053 7.164 71.885 0 63.049 0z"
						/>
						<path
							fill="#0049db"
							d="M51.282 5.155a15.953 15.953 0 00-4.241 10.853c0 4.187 1.61 8 4.241 10.853a15.953 15.953 0 004.241-10.853c.004-4.191-1.606-8-4.241-10.853z"
						/>
					</svg>
					<svg width="87.5" height="20" viewBox="0 0 140 32">
						<path
							fill="currentColor"
							d="M89.8 2.2l-5.6 2.4v4.8h-3.8v5.2h3.8v10.2c0 4.2 2.6 7 6.6 7 1.6 0 2.6-.4 3.2-.6V26c-.2 0-1 .2-1.8.2-1.6 0-2.4-.6-2.4-2.6v-8.8H94V9.6h-4.2V2.2zM28.6 9.6l-4 14-4.6-14h-5.6l-4.6 14L6 9.6H0l6.8 21.8h6l4.4-14.6 4.6 14.6h6l6.8-21.8zM134.4 2.2v8.6c-1.4-1-3-1.6-4.8-1.8h-.4-1.6c-5 .4-8.2 4.2-9.2 9-.2.8-.2 1.4-.2 2.2V22c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.4V0l-5.4 2.2zm-5.2 24.4c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM116.2 18c-.8-5.2-4.6-9-10-9s-9.2 3.8-10 9c-.2.8-.2 1.6-.2 2.6v1.6c.6 5.6 4.4 10 10.2 10 4.6 0 8-2.8 9.4-6.8l-5-1.2c-.8 1.8-2.4 3.2-4.4 3.2-2.8 0-4.6-2.2-5-5.2h15.2v-1.6c0-1 0-1.8-.2-2.6zm-14.8 0c.8-2.2 2.4-3.6 4.8-3.6s4 1.6 4.8 3.6h-9.6zM50.6 11c-1.4-1-3.2-1.8-5.2-1.8H44.8h-.6c-5.2.4-8.6 4-9.4 9-.2.8-.2 1.4-.2 2.2v1.8c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.6V9.6h-5.6V11zm-5.2 15.6c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM71.2 9c-2.2 0-4.6 1-6 3.2V9.6h-5.6v21.8h5.6V18.8c0-2.6 1.4-4.6 4-4.6 2.8 0 3.8 2 3.8 4.4v12.8h5.6V17.6c.2-4.8-2.2-8.6-7.4-8.6z"
						/>
					</svg>
				</div>
				<div className="wrapper-body">
					<div className="step">
						<ul className="step-container">
							<li
								className={
									level === '1'
										? 'active'
										: (level === '2' || level === '3') &&
										  'completed'
								}
								style={{
									marginRight:
										(level === '2' || level === '3') && '0',
								}}
							>
								<em
									style={{
										padding:
											(level === '2' || level === '3') &&
											'5px 0 0 2px',
									}}
								>
									{level === '1' ? (
										<span>1</span>
									) : (
										<svg
											className=""
											width="15"
											height="15"
											viewBox="0 0 15 15"
										>
											<defs>
												<path
													id="al3je9dvha"
													d="M576.95 196.13c-.217-.217-.57-.217-.787 0-.217.218-.217.57 0 .788l3.71 3.71c.217.217.57.217.787 0l6.677-6.678c.217-.217.217-.57 0-.787-.217-.217-.57-.217-.787 0l-6.284 6.284-3.316-3.316z"
												/>
											</defs>
											<g
												fill="currentColor"
												fillRule="evenodd"
											>
												<g transform="translate(-575 -192)">
													<use
														fill="#FFF"
														fillRule="nonzero"
														stroke="#FFF"
														strokeWidth=".3"
														xlinkHref="#al3je9dvha"
													/>
												</g>
											</g>
										</svg>
									)}
								</em>
								<span>{level === '1' && '전문분야 설정'}</span>
							</li>
							<li
								className={
									level === '2'
										? 'active'
										: level === '3' && 'completed'
								}
								style={{ marginRight: level === '3' && '0' }}
							>
								<em
									style={{
										padding: level === '3' && '5px 0 0 2px',
									}}
								>
									{level === '1' || level === '2' ? (
										<span>2</span>
									) : (
										<svg
											className=""
											width="15"
											height="15"
											viewBox="0 0 15 15"
										>
											<defs>
												<path
													id="al3je9dvha"
													d="M576.95 196.13c-.217-.217-.57-.217-.787 0-.217.218-.217.57 0 .788l3.71 3.71c.217.217.57.217.787 0l6.677-6.678c.217-.217.217-.57 0-.787-.217-.217-.57-.217-.787 0l-6.284 6.284-3.316-3.316z"
												/>
											</defs>
											<g
												fill="currentColor"
												fillRule="evenodd"
											>
												<g transform="translate(-575 -192)">
													<use
														fill="#FFF"
														fillRule="nonzero"
														stroke="#FFF"
														strokeWidth=".3"
														xlinkHref="#al3je9dvha"
													/>
												</g>
											</g>
										</svg>
									)}
								</em>
								<span>{level === '2' && '학교/직장 설정'}</span>
							</li>
							<li className={level === '3' && 'active'}>
								<em>
									<span>3</span>
								</em>
								<span>{level === '3' && '관심태그 설정'}</span>
							</li>
						</ul>
					</div>

					{level === '1' && (
						<JobGroupSetting userId={userId} jwt={jwt} />
					)}
					{level === '2' && (
						<OccupationSetting userId={userId} jwt={jwt} />
					)}
					{level === '3' && <TagsSetting userId={userId} jwt={jwt} />}
				</div>
			</div>
		</OnboardingPageWrapper>
	);
}

const OnboardingPageWrapper = styled.div`
	display: flex;
	justify-content: center;
	min-height: 100vh;
	padding-top: 105px;
	padding-bottom: 105px;
	background-color: #f8f8fa;
	.style-divider {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 34px;
		font-weight: 600;
		color: #36f;
	}
	.container-check {
		display: flex;
		align-items: center;
		position: relative;
		height: 14px;
	}
	.footer-level1 {
		margin-top: 18px;
	}
	.style-label {
		flex: 1 1;
		font-size: 15px;
	}

	.style-check {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 17.3px;
		height: 17.3px;
	}
	.link-agreement {
		float: right;
		font-size: 13px;
		line-height: 19px;
		color: #767676 !important;
	}
	.checkbox-agreement {
		margin-bottom: 40px;
		color: #ececec;
		> div:first-of-type {
			margin-right: 5px;
		}
		> div:last-of-type {
			color: #939393;
		}
		p {
			font-weight: 400;
		}
	}
	.wrapper-skip {
		margin-top: 20px;
		font-size: 14px;
		font-weight: 700;
		text-align: center;
		color: #767676;
		button {
			color: #767676;
			font-family: 'Pretendard', 'PretendardStd-ExtraLight',
				'PretendardStd-Thin', 'PretendardStd-Light', 'PretendardStd';
			font-size: 14px;
		}
		svg {
			margin-left: 5px;
		}
	}
	.style-guidance {
		color: #767676;
		bottom: 0;
		margin-top: 6px;
		font-size: 12px;
	}
	.hint-level1 {
		font-weight: 500;
		font-size: 12px;
		color: #aaa;
		margin-top: 10px;
	}
	.hint-level2 {
		font-weight: 500;
		font-size: 12px;
		color: #aaa;
		margin-top: 10px;
	}
	.select-icon {
		position: absolute;
		top: 50%;
		right: 10px;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
	}

	.style-wrapper {
		position: relative;
		padding-bottom: 22px;
		color: #767676;

		input[type='checkbox'] {
			position: absolute;
			left: 1px;
			opacity: 0;
			vertical-align: top;
			cursor: pointer;
		}
	}
	.style-body {
		margin-top: 11px;
	}
	.wrapper-body-container {
		padding: 29px 19px 24px;
	}
	.header-wrapper {
		margin-bottom: 34px;
		font-size: 15px;
		text-align: left;
		color: #333;
		font-weight: 600;
	}
	.header-desc {
		line-height: 1.53;
		white-space: pre-line;
	}

	.step {
		position: relative;
		border-bottom: 1px solid #e1e2e3;
		padding: 20px;
	}
	.step-container {
		display: flex;
		justify-content: flex-start;
		> li {
			flex: none;
			height: 23px;
		}
		> li > span {
			display: inline-block;
			font-size: 14px;
			color: #333;
			margin-left: 4px;
			font-weight: 700;
			line-height: 23px;
		}
		> li.active,
		> li.completed {
			margin-left: 0;
			color: #333;
			margin-right: auto;
			::after {
				background: #36f;
				transition: width 0.5s;
				width: 33.33%;
				transition: width 0.5s;
				left: 0;
				position: absolute;
				content: '';
				display: block;
				bottom: -1px;
				height: 1px;
			}
		}

		> li.active > em,
		> li.completed > em {
			background: #36f;
			color: #fff;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: 23px;
			height: 23px;
			line-height: 1em;
			border-radius: 50%;
			font-style: normal;
			margin-right: 6px;
		}

		> li > em {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: 23px;
			height: 23px;
			line-height: 1em;
			border-radius: 50%;
			font-style: normal;
			background: #f2f4f7;
			color: #ccc;
			margin-right: 6px;
		}
		> li:nth-of-type(2):after {
			left: 33.33%;
		}
		> li:nth-of-type(3):after {
			left: 66.66%;
		}
		> li:after {
			position: absolute;
			content: '';
			display: block;
			bottom: -1px;
			height: 1px;
			width: 0;
		}
	}
	.wrapper-body {
		border: 1px solid #ececec;
		border-radius: 5px;
		margin-top: 39px;
		background-color: #fff;
	}

	.wrapper-onboarding {
		width: 400px;
		max-width: 100vw;
	}
	.wrapper-logo {
		display: flex;
		justify-content: center;
		align-items: center;
		> svg:nth-child(2) {
			margin-top: -4px px;
			margin-left: 6px;
		}
	}
`;

export default OnboardingPage;
