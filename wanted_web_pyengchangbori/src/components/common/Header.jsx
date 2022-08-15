/* eslint-disable no-return-assign */
import React, { useDeferredValue, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginModalVisible } from 'store/action/LoginAction';
// import { setJobCategoryVisible } from 'store/action/JobCategoryAction';
import UserPopup from 'components/UserPopup';
import { useOutsideClick } from 'hoc/useOutsideClick';
import JobCategory from './JobCategory';
import { PaddingHeader } from './styled';
import SearchBar from './SearchBar';

function Header() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const userpopupRef = useRef();

	const [inputTextState, setInputText] = useState('');
	const inputText = useDeferredValue(inputTextState);

	const { profileImageUrl, userId, isLogin } = useSelector(
		(state) => state.UserDataReducer,
	);
	// const { jobcategoryVisible } = useSelector(
	// 	(state) => state.JobCategoryReducer,
	// );
	const [jobcategoryVisible, setJobCategoryVisible] = useState(false);

	// const [isUserPopup, setIsUserPopup] = useState(false);
	const [isUserPopup, setIsUserPopup] = useOutsideClick(userpopupRef, false);
	const [isSearching, setIsSearching] = useState(false);

	// const handleClickOutside = (e, onClick) => {
	// 	if (!userpopupRef.current || !userpopupRef.current.contains(e.target)) {
	// 		setIsUserPopup(false);
	// 	}
	// };

	// useEffect(() => {
	// 	document.addEventListener('mousedown', handleClickOutside);
	// 	return () => {
	// 		document.removeEventListener('mousedown', handleClickOutside);
	// 	};
	// });

	const handleSubmitInput = (e) => {
		e.preventDefault();
		// localStorage.setItem("key", JSON.stringify(arr));
		const output = localStorage.getItem('recentSearch');
		const arr = JSON.parse(output);
		if (arr === null) {
			localStorage.setItem('recentSearch', JSON.stringify([inputText]));
		} else if (!arr.includes(inputText)) {
			localStorage.setItem(
				'recentSearch',
				JSON.stringify([...arr, inputText]),
			);
		}
		setIsSearching(false);
		navigate(`/search?query=${inputText}`);
	};

	// const setJobVisibleReducer = () => {
	// 	dispatch(setJobCategoryVisible());
	// };

	const handleLoginVisible = () => {
		dispatch(setLoginModalVisible());
	};

	return (
		<>
			<ComponentsWrapper>
				<div className="box-mainbar">
					<nav className="box-mainbar-nav">
						<NavLogo>
							<button
								type="button"
								onMouseEnter={() => setJobCategoryVisible(true)}
							>
								<img
									src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&amp;w=undefined&amp;q=75"
									alt="hamberger menu"
								/>
							</button>
							<Link className="icon-logo-new" to="/">
								{/* <i className="icon-logo-new" /> */}
								<svg
									version="1.0"
									id="레이어_1"
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									viewBox="0 0 226.8 49.9"
									enableBackground="new 0 0 226.8 49.9"
									xmlSpace="preserve"
									className="icon-logo"
								>
									<g>
										<g>
											<path
												fill="#0C0C0C"
												d="M145.6,3.5l-9.1,3.8v7.6h-6.3v8.2h6.2V39c-0.4,5.6,3.7,10.5,9.3,10.9c0.5,0,1,0,1.5,0
			c1.8,0.1,3.5-0.2,5.2-0.8v-8c-0.9,0.2-1.9,0.3-2.8,0.3c-2.5,0-4-1-4-3.9V23.1h6.8V15h-6.8V3.5z"
											/>
											<polygon
												fill="#0C0C0C"
												points="46.3,15 40,36.9 32.5,15 23.5,15 16,36.9 9.7,15 0,15 10.9,49.1 20.7,49.1 28,26.1 35.4,49.1 
			45.1,49.1 56,15 		"
											/>
											<path
												fill="#0C0C0C"
												d="M217.8,3.5v13.4c-2.3-1.6-5-2.5-7.9-2.7h-0.5h-1c-0.5,0-1,0-1.5,0c-7.6,0.6-13.8,6.4-14.8,14
			c-0.2,1.1-0.3,2.3-0.3,3.4c0,0.1,0,0.2,0,0.4c0,0.3,0,0.6,0,0.9c0,0.5,0,1,0,1.5c1,8.7,7.1,15.5,16.5,15.5c3.4,0.1,6.8-1,9.6-2.9
			V49h0.4h8.5V0L217.8,3.5z M209.4,41.7L209.4,41.7c-5.3-0.5-9.3-5.1-8.9-10.4c0.3-4.8,4.2-8.6,8.9-8.9c4.8,0,8.6,3.4,8.6,9.5
			S214.2,41.7,209.4,41.7z"
											/>
											<path
												fill="#0C0C0C"
												d="M188.4,28.2c-1.3-9-9.7-15.2-18.7-13.9c-7.2,1.1-12.8,6.7-13.9,13.9c-0.2,1.3-0.3,2.6-0.3,3.9
			c0,0.8,0,1.6,0.1,2.4c0.9,8.7,7.1,15.5,16.5,15.5c6.8,0.1,12.9-4.1,15.2-10.5l-8.2-1.7c-1.2,2.9-4,4.8-7.2,4.9
			c-4.4,0-7.4-3.5-8.1-8.1h24.6c0-0.8,0.1-1.6,0.1-2.4C188.6,30.7,188.5,29.4,188.4,28.2L188.4,28.2z M164.4,28.2
			c1.3-4.2,5.8-6.6,10-5.3c2.5,0.8,4.5,2.8,5.3,5.3H164.4z"
											/>
											<path
												fill="#0C0C0C"
												d="M82.1,17.2c-1.2-0.9-2.6-1.6-4-2.1c-1.5-0.6-3-0.9-4.6-1h-1c-9.5,0.4-16.9,8.3-16.6,17.7
			c0,0.2,0,0.4,0,0.7V33c0.2,9.1,7.3,16.4,16.4,16.9h1.2c3.1-0.2,6.1-1.3,8.6-3.2V49h8.9V15h-8.9L82.1,17.2z M73.6,41.7
			c-5.3-0.3-9.4-4.8-9.2-10.1c0.3-4.9,4.2-8.9,9.2-9.2c4.8,0,8.5,3.4,8.5,9.5S78.4,41.7,73.6,41.7z"
											/>
											<path
												fill="#0C0C0C"
												d="M115.3,14.1c-3.9-0.1-7.5,1.7-9.7,4.9v-4h-9.2V49h9.2V29.4c-0.4-3.5,2.2-6.7,5.7-7c0.2,0,0.4,0,0.7,0
			c3.3-0.2,6.2,2.3,6.4,5.6c0,0.4,0,0.8,0,1.2V49h9.2V27.5C127.6,20.1,123.8,14.1,115.3,14.1z"
											/>
										</g>
									</g>
								</svg>
							</Link>
						</NavLogo>
						<MenuClassName>
							<li
								className={
									pathname.includes('jobsfeed') &&
									'selectedNav'
								}
							>
								<Link to="/jobsfeed">채용</Link>
							</li>
							<li
								className={
									pathname.includes('events') && 'selectedNav'
								}
							>
								<Link to="/events">이벤트</Link>
							</li>
							<li
								className={
									pathname.includes('salary') && 'selectedNav'
								}
							>
								<Link to="/salary">직군별 연봉</Link>
							</li>
							<li
								className={
									pathname.includes('cv') && 'selectedNav'
								}
							>
								<Link to="/cv/list">이력서</Link>
							</li>
							<li
								className={
									pathname.includes('community') &&
									'selectedNav'
								}
							>
								<Link to="/community">
									커뮤니티
									<em>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="11"
											viewBox="0 0 18 11"
										>
											<g
												fill="none"
												fillRule="evenodd"
												fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
												fontSize="9"
												fontWeight="500"
											>
												<g fill="#36F">
													<g>
														<g>
															<g>
																<g>
																	<g>
																		<g>
																			<text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
																				<tspan
																					x="0"
																					y="8"
																				>
																					New
																				</tspan>
																			</text>
																		</g>
																	</g>
																</g>
															</g>
														</g>
													</g>
												</g>
											</g>
										</svg>
									</em>
								</Link>
							</li>
							<li>
								<Link to="https://www.wanted.co.kr/gigs/experts">
									프리랜서
								</Link>
							</li>
							<li
								className={
									pathname.includes('aiscore') &&
									'selectedNav'
								}
							>
								<Link to="/aiscore/resume">
									AI 합격예측
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="11"
											viewBox="0 0 18 11"
										>
											<g
												fill="none"
												fillRule="evenodd"
												fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
												fontSize="9"
												fontWeight="500"
											>
												<g fill="#36F">
													<g>
														<g>
															<g>
																<g>
																	<g>
																		<g>
																			<text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
																				<tspan
																					x="0"
																					y="8"
																				>
																					Beta
																				</tspan>
																			</text>
																		</g>
																	</g>
																</g>
															</g>
														</g>
													</g>
												</g>
											</g>
										</svg>
									</span>
								</Link>
							</li>
						</MenuClassName>
						<Aside>
							<ul>
								<li>
									<button
										onClick={() => {
											setIsSearching(true);
										}}
										className="btn-search"
										type="button"
									>
										<svg
											xmlns="https://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 18 18"
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
									</button>
								</li>
								{isLogin ? (
									<>
										<li>
											<button
												type="button"
												className="btn-notification"
											>
												<svg
													xmlns="https://www.w3.org/2000/svg"
													width="18"
													height="18"
													viewBox="0 0 18 18"
												>
													<defs>
														<path
															id="bpnpn3yn0a"
															d="M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z"
														/>
													</defs>
													<g
														fill="none"
														fillRule="evenodd"
													>
														<g transform="translate(-1079 -16) translate(224 7) translate(855 9)">
															<mask
																id="1dencd96ob"
																fill="#fff"
															>
																<use xlinkHref="#bpnpn3yn0a" />
															</mask>
															<use
																fillRule="nonzero"
																stroke="currentColor"
																strokeWidth=".3"
																xlinkHref="#bpnpn3yn0a"
															/>
															<g
																fill="currentColor"
																mask="url(#1dencd96ob)"
															>
																<path d="M0 0H18V18H0z" />
															</g>
														</g>
													</g>
												</svg>
											</button>
										</li>
										<li
											className="profilebox"
											onClick={(e) => {
												setIsUserPopup(!isUserPopup);
											}}
											role="presentation"
										>
											<button
												type="button"
												className="btn-frofile"
											>
												<div className="avatarBorder">
													<div
														className="avatarImage"
														ref={userpopupRef}
														style={{
															backgroundImage: `url(${profileImageUrl}), url(https://static.wanted.co.kr/images/profile_default.png)`,
														}}
													/>
												</div>
											</button>
											{/* <span
													className="Badge_Badge__BJTzL"
													style={{
														backgroundColor: `rgb(51, 102, 255)`,
														width: `13px`,
														height: `13px`,
													}}
												>
													<svg
														className=""
														width="5"
														height="5"
														viewBox="0 0 6 6"
													>
														<g
															fill="#fff"
															fillRule="nonzero"
														>
															<path
																d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z"
																transform="translate(-123 -375) translate(20 365) translate(98 5)"
															/>
														</g>
													</svg>
												</span> */}
											{isUserPopup && <UserPopup />}
										</li>
									</>
								) : (
									<button
										onClick={() => {
											handleLoginVisible();
										}}
										className="btn-signup"
										type="button"
									>
										회원가입/로그인
									</button>
								)}
								<li className="left-division">
									<Link
										className="btn-dashboard"
										to="/dashboard"
									>
										기업 서비스
									</Link>
								</li>
							</ul>
						</Aside>
					</nav>
					{jobcategoryVisible && (
						<JobCategory
							setJobCategoryVisible={setJobCategoryVisible}
						/>
					)}
				</div>

				{isSearching && (
					<SearchBar
						inputTextState={inputTextState}
						setInputText={setInputText}
						handleSubmitInput={handleSubmitInput}
						setIsSearching={setIsSearching}
					/>
				)}
			</ComponentsWrapper>
			<PaddingHeader />
			<Outlet />
		</>
	);
}

const Aside = styled.aside`
	height: 100%;
	padding: 10px 0;

	.btn-signup {
		margin-right: 6px;
		line-height: 1.4;
		padding: 0 3px;
		font-size: 14px;
		color: #333;
		font-weight: 600;
		font-family: inherit;
	}
	> ul {
		height: 100%;
		margin: 0;
		.left-division {
			display: inline-flex;
			::before {
				display: block;
				content: '';
				width: 1px;
				height: 10px;
				background-color: #e1e2e3;
				margin: auto 10px auto 5px;
			}
		}
	}
	.profilebox {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		margin-right: 10px;
		.avatarBorder {
			width: 32px;
			height: 32px;
			border-radius: 50%;
			border: 1px solid #e1e2e3;
			background-color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
			> div {
				width: 28px;
				height: 28px;
				border-radius: 50%;
				background-position: 50%;
				background-size: cover;
				background-repeat: no-repeat;
			}
		}
	}
	> ul li {
		position: relative;
		display: inline-block;
		height: 100%;
		vertical-align: middle;
		margin-right: 5px;
		* {
			font-size: 14px;
			color: #333;
			font-weight: 600;
			line-height: 1;
		}
		.btn-search {
			position: relative;
			margin-top: 5px;
			padding: 0 5px;
		}

		.btn-notification {
			position: relative;
			margin-top: 5px;
			padding: 0 5px;
		}
		.btn-profile {
			height: 32px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			vertical-align: top;
			padding: 0;
		}
		.btn-dashboard {
			font-size: 13px;
			color: #666;
			line-height: 30px;
			height: 30px;
			border: 1px solid #e1e2e3;
			border-radius: 15px;
			padding: 0 10px;
			margin-left: 15px;
			font-weight: 400;
			display: inline-block;
			vertical-align: bottom;
		}
	}
`;

const NavLogo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	button {
		margin-top: -2px;
		margin-right: 15px;
		img {
			width: 17px;
			height: 14px;
			object-fit: contain;
		}
	}
	i {
		font-family: 'Elysio Bold' !important;
		line-height: 0.7;
		font-size: 23px;
	}
	/* .icon-logo-new::before {
		content: 'wanted';
	} */
	a {
		height: 23px;
		position: relative;
		color: #333;
		text-align: center;
		font-size: 16px;
		font-weight: 600;
		svg {
			width: 80px;
			font-family: 'Elysio Bold' !important;
			line-height: 0.7;
		}
	}
`;

const MenuClassName = styled.ul`
	height: inherit;
	text-align: center;
	margin: 0;
	.selectedNav {
		box-shadow: inset 0 -2px #258bf7;
	}
	li {
		height: inherit;
		display: inline-block;
		a {
			position: relative;
			vertical-align: middle;
			font-size: 14px;
			line-height: 20px;
			font-weight: 600;
			padding: 15px;
			display: inline-block;
			:hover {
				box-shadow: inset 0 -2px #ddd;
			}
			em {
				position: absolute;
				top: 10px;
				right: -5px;
				pointer-events: none;
				font-style: normal;
			}
		}
		a:after {
			height: 100%;
			content: '';
			display: inline-block;
			vertical-align: middle;
		}
	}
`;

const ComponentsWrapper = styled.div`
	position: fixed;
	padding-right: initial;
	width: 100%;
	background-color: #fff;
	box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
	z-index: 800;
	.box-mainbar {
		margin: 0 auto;
		height: 50px;
		width: 90%;
		position: relative;
		max-width: 1060px;
		.box-mainbar-nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-direction: row;
			flex-wrap: nowrap;
		}
	}
`;

export default Header;
