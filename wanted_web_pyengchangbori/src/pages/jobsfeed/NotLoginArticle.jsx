import React from 'react';
import styled from 'styled-components';

function NotLoginArticle({ isLogin }) {
	return (
		<ComponentWrapper>
			<article className="maching-container">
				<header className="maching-title-wrapper">
					<h2 className="maching-title">
						<div className="maching-title-main">
							<img
								aria-label="wantedai-logo"
								src="https://static.wanted.co.kr/images/ai/logo-wantedai.png"
								width="114"
								alt="logo-wantedai"
								style={{ marginBottom: '3px' }}
							/>
							가 제안하는 합격률 높은 포지션{' '}
							<button
								type="button"
								className="MatchedJobList_matching__title_main_ai__vsRfz"
							>
								<svg
									width="24"
									height="24"
									className="MatchedJobList_questionMark__pcXLi"
									viewBox="0 0 17 17"
								>
									<defs>
										<filter id="bfoh3u0w3a">
											<feColorMatrix
												in="SourceGraphic"
												values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"
											/>
										</filter>
									</defs>
									<g fill="none" fillRule="evenodd">
										<g>
											<g>
												<g transform="translate(-1080 -374) translate(1080 374)">
													<g>
														<path
															stroke="#999"
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="1.2"
															d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745"
															transform="translate(1 1)"
														/>
														<path
															fill="#999"
															d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671"
															transform="translate(1 1) rotate(-180 7.053 10.408)"
														/>
														<path
															stroke="#999"
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="1.2"
															d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783"
															transform="translate(1 1)"
														/>
													</g>
												</g>
											</g>
										</g>
									</g>
								</svg>
							</button>
						</div>
					</h2>
				</header>
				{!isLogin && (
					<div className="emptymatching-container">
						<h3>회원가입하면 포지션을 추천해드려요.</h3>
						<button type="button">지금 시작하기</button>
					</div>
				)}
			</article>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	.maching-container {
		margin: 0 auto;
		padding: 0 0 45px;
		width: 87.72%;
		position: relative;
		max-width: 1060px;
	}
	.maching-title-wrapper {
		position: relative;
		margin-bottom: 30px;
	}
	.maching-title {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0;
		margin: 0;
		font-size: 22px;
		font-weight: 700;
		line-height: 1.05;
		letter-spacing: normal;
		text-align: left;
		color: #111;
		img {
			width: 114px;
			vertical-align: -4px;
			margin-right: 3px;
		}
		button {
			vertical-align: 0;
			width: 23px;
			height: 23px;
		}
	}
	.maching-title-main {
		margin-bottom: 6px;
		text-align: center;
	}
	.maching-title-more {
		position: relative;
		z-index: 1;
	}
	.emptymatching-container {
		margin-top: 10px;
		margin-bottom: 35px;
		padding: 25px 30px 25px 50px;
		max-width: 1060px;
		border-radius: 45px;
		background-color: #f3f9fe;
		display: flex;
		justify-content: space-between;
		align-items: center;
		h3 {
			line-height: 1.28;
			color: #111;
			word-break: keep-all;
			font-weight: 500;
			font-size: 18px;
			font-family: inherit;
		}
		button {
			padding: 10px 20px;
			border-radius: 25px;
			background-color: #36f;
			font-size: 16px;
			font-weight: 700;
			color: #fefefe;
			line-height: 22px;
			font-family: inherit;
			flex: 0 0 auto;
		}
	}
`;

export default NotLoginArticle;
