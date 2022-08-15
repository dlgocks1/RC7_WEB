import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Shortcut(props) {
	return (
		<ComponentWrapper>
			<section className="shortcut-container">
				<ul className="shorcut-list">
					<li>
						<Link to="/wdlist">
							<svg
								width="28"
								height="28"
								viewBox="0 0 28 28"
								xmlns="https://www.w3.org/2000/svg"
								style={{ color: 'rgb(51, 51, 51)' }}
							>
								<defs>
									<path
										d="M24.465 25.702a.875.875 0 0 0 1.237-1.237L18.12 16.88l-.296-.257a.875.875 0 0 0-1.187.043 7.876 7.876 0 1 1 1.96-3.216.875.875 0 0 0 1.67.525c.292-.93.442-1.902.442-2.893a9.625 9.625 0 0 0-9.625-9.625 9.625 9.625 0 0 0-9.625 9.625c0 5.315 4.31 9.625 9.625 9.625a9.589 9.589 0 0 0 6.161-2.23l7.22 7.224z"
										id="jobsfeed_shortcut_search_a"
									/>
								</defs>
								<g fill="none" fillRule="evenodd">
									<mask
										id="jobsfeed_shortcut_search_b"
										fill="#fff"
									>
										<use xlinkHref="#jobsfeed_shortcut_search_a" />
									</mask>
									<use
										fill="none"
										fillRule="nonzero"
										xlinkHref="#jobsfeed_shortcut_search_b"
									/>
									<g
										mask="url(#jobsfeed_shortcut_search_b)"
										fill="currentColor"
									>
										<path d="M0 0h28v28H0z" />
									</g>
								</g>
							</svg>{' '}
							채용공고
						</Link>
					</li>
					<li>
						<Link to="/profile">
							<svg
								width="28"
								height="28"
								viewBox="0 0 28 28"
								xmlns="http://www.w3.org/2000/svg"
							>
								<defs>
									<path
										d="M16.46 12.565c-.631.802-1.025 1.667-1.039 2.59-.02 1.45.793 2.538 2.286 3.154l.116.038c3.487.898 5.788 2.958 5.788 5.03l.014 1.226c0 .026-.194.188-.35.189H4.662c-.136 0-.274-.122-.274-.178l-.014-1.248c0-1.997 2.086-3.93 5.412-4.868a4.468 4.468 0 0 0 1.275-.538c.775-.474 1.316-1.135 1.448-2.014a.875.875 0 0 0-1.731-.259c-.044.292-.256.552-.629.779a2.898 2.898 0 0 1-.795.337c-4.04 1.137-6.73 3.632-6.73 6.573l.014 1.248c0 1.062.965 1.918 2.024 1.918h18.613c1.061-.003 2.099-.871 2.099-1.949l-.014-1.227c0-3.003-2.9-5.612-7.039-6.697-.825-.354-1.16-.816-1.15-1.49.006-.473.248-1.003.663-1.53.272-.346.545-.606.71-.736l.087-.08c1.233-1.29 2.03-3 2.03-4.666 0-3.648-3.053-6.709-6.692-6.709-3.639 0-6.692 3.061-6.692 6.709 0 1.57.443 2.914 1.357 4.048a.875.875 0 1 0 1.363-1.097c-.655-.813-.97-1.768-.97-2.951 0-2.682 2.27-4.959 4.942-4.959s4.941 2.276 4.941 4.959c0 1.162-.587 2.437-1.506 3.417-.258.211-.6.545-.944.981z"
										id="jobsfeed_shortcut_profile_a"
									/>
								</defs>
								<g fill="none" fillRule="evenodd">
									<mask
										id="jobsfeed_shortcut_profile_b"
										fill="#fff"
									>
										<use xlinkHref="#jobsfeed_shortcut_profile_a" />
									</mask>
									<use
										fill="#333"
										fillRule="nonzero"
										xlinkHref="#jobsfeed_shortcut_profile_a"
									/>
									<g
										mask="url(#jobsfeed_shortcut_profile_b)"
										fill="#333"
									>
										<path d="M0 0h28v28H0z" />
									</g>
								</g>
							</svg>
							내 프로필
						</Link>
					</li>
					<li>
						<Link to="/matchup/intro/">
							<svg
								width="28"
								height="28"
								viewBox="0 0 28 28"
								xmlns="http://www.w3.org/2000/svg"
							>
								<defs>
									<path
										d="M10.208 25.083a.875.875 0 0 1-.875-.875v-6.125h-1.75v6.125a.875.875 0 0 1-.875.875H2.042a.875.875 0 0 1-.875-.875V4.375c0-.483.391-.875.875-.875h12.833c.483 0 .875.392.875.875v3.791h9.625c.446 0 .814.334.868.766l.007.11v10.5a.875.875 0 0 1-1.75 0V9.917h-8.75v13.416h9.625a.875.875 0 0 1 0 1.75H10.208zM14 5.25H2.917v18.083h2.916v-6.125c0-.483.392-.875.875-.875h3.5c.484 0 .875.392.875.875v6.125H14V5.25zm4.375 10.792c.644 0 1.167.522 1.167 1.166v1.167a1.167 1.167 0 0 1-2.334 0v-1.167c0-.644.523-1.166 1.167-1.166zm0-4.667c.644 0 1.167.522 1.167 1.167v1.166a1.167 1.167 0 0 1-2.334 0v-1.166c0-.645.523-1.167 1.167-1.167zm-11.5 0a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-.333a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h.333zm0-4.667a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-.333a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h.333z"
										id="jobsfeed_shortcut_company_a"
									/>
								</defs>
								<g fill="none" fillRule="evenodd">
									<mask
										id="jobsfeed_shortcut_company_b"
										fill="#fff"
									>
										<use xlinkHref="#jobsfeed_shortcut_company_a" />
									</mask>
									<use
										fill="#333"
										fillRule="nonzero"
										xlinkHref="#jobsfeed_shortcut_company_a"
									/>
									<g
										mask="url(#jobsfeed_shortcut_company_b)"
										fill="#333"
									>
										<path d="M0 0h28v28H0z" />
									</g>
								</g>
							</svg>{' '}
							매치업
						</Link>
					</li>
					<li>
						<Link to="/salary">
							<svg
								width="28"
								height="28"
								viewBox="0 0 28 28"
								xmlns="http://www.w3.org/2000/svg"
							>
								<defs>
									<path
										d="M9.333 18.958a3.21 3.21 0 0 1 3.088 2.334H24.5a.875.875 0 1 1 0 1.75H12.42a3.21 3.21 0 0 1-6.174 0H3.5a.875.875 0 0 1 0-1.75h2.746a3.21 3.21 0 0 1 3.087-2.334zm0 1.75a1.46 1.46 0 1 0 .002 2.919 1.46 1.46 0 0 0-.002-2.919zm9.334-9.916a3.21 3.21 0 0 1 3.087 2.333H24.5a.875.875 0 1 1 0 1.75h-2.746a3.21 3.21 0 0 1-6.175 0H3.5a.875.875 0 1 1 0-1.75h12.08a3.21 3.21 0 0 1 3.087-2.333zm0 1.75a1.46 1.46 0 1 0 .001 2.918 1.46 1.46 0 0 0-.001-2.918zM9.333 2.625a3.21 3.21 0 0 1 3.088 2.334H24.5a.875.875 0 1 1 0 1.75H12.42a3.21 3.21 0 0 1-6.174 0H3.5a.875.875 0 1 1 0-1.75h2.746a3.21 3.21 0 0 1 3.087-2.334zm0 1.75a1.46 1.46 0 1 0 .002 2.918 1.46 1.46 0 0 0-.002-2.918z"
										id="jobsfeed_shortcut_filter_a"
									/>
								</defs>
								<g fill="none" fillRule="evenodd">
									<mask
										id="jobsfeed_shortcut_filter_b"
										fill="#fff"
									>
										<use xlinkHref="#jobsfeed_shortcut_filter_a" />
									</mask>
									<use
										fill="#333"
										fillRule="nonzero"
										xlinkHref="#jobsfeed_shortcut_filter_a"
									/>
									<g
										mask="url(#jobsfeed_shortcut_filter_b)"
										fill="#333"
									>
										<path d="M0 0h28v28H0z" />
									</g>
								</g>
							</svg>
							직군별 연봉
						</Link>
					</li>
				</ul>
			</section>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	.shortcut-container {
		margin: 0 auto;
		padding: 40px 0 85px;
		width: 87.72%;
		max-width: 1060px;
	}
	.shorcut-list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		color: #333;
		font-size: 18px;
		font-weight: 500;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
		word-break: break-all;
		> li:first-child {
			background-color: #f2f5ff;
			border-top-left-radius: 40px;
			border-bottom-left-radius: 40px;
			border-left: none;
		}
		> li:nth-child(2) {
			background-color: #f3f9fe;
		}
		> li:nth-child(3) {
			background-color: #eefaf9;
		}
		> li:last-child {
			border-top-right-radius: 40px;
			border-bottom-right-radius: 40px;
			background-color: #f2fbf5;
		}
		> li {
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 1 0;
			height: 80px;
			border-left: 1px solid #fff;
			> a {
				display: flex;
				justify-content: center;
				align-items: center;
				margin: auto 20px;
			}
		}
	}
`;

export default Shortcut;
