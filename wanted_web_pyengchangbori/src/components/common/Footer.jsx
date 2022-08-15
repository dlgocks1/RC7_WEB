import React from 'react';
import styled from 'styled-components';

function Footer() {
	return (
		<FooterContainer>
			<div className="rowclass-footer">
				<div className="nav-footerlink">
					<div className="logo-footerlink">
						<img
							src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&amp;w=110&amp;q=100"
							alt="wanted"
						/>
					</div>
					<div className="NavLinks_NavLinks__links__bQozT">
						<a
							href="https://www.wantedlab.com/"
							className=""
							target="_blank"
							rel="noreferrer"
						>
							기업소개
						</a>
						<a
							href="https://help.wanted.co.kr/hc/ko/articles/360035844551"
							className=""
							target="_blank"
							rel="noopener noreferrer"
						>
							이용약관
						</a>
						<a
							href="https://www.wanted.co.kr/privacy"
							className=""
							target="_blank"
							rel="noopener noreferrer"
						>
							개인정보 처리방침
						</a>
						<a
							href="https://help.wanted.co.kr/hc/ko/"
							className=""
							target="_blank"
							rel="noopener noreferrer"
						>
							고객센터
						</a>
					</div>
				</div>

				<div className="nav-socaillink">
					<a
						href="https://www.instagram.com/wantedjobs.kr/"
						className=""
						aria-label=""
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&amp;w=20&amp;q=100"
							alt="instagram"
						/>
					</a>
					<a
						href="https://www.youtube.com/channel/UC0tGZ6MqieGG2m5lA5PeQsw"
						className=""
						aria-label=""
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&amp;w=25&amp;q=100"
							alt="youtube"
						/>
					</a>
					<a
						href="https://www.facebook.com/wantedkr"
						className=""
						aria-label=""
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&amp;w=20&amp;q=100"
							alt="facebook"
						/>
					</a>
					<a
						href="https://blog.naver.com/wantedlab"
						className=""
						aria-label=""
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&amp;w=20&amp;q=100"
							alt="blog"
						/>
					</a>
					<a
						href="https://pf.kakao.com/_XqCIxl"
						className=""
						aria-label=""
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&amp;w=19&amp;q=100"
							alt="kakao"
						/>
					</a>
					<a
						href="https://post.naver.com/my.nhn?memberNo=18284175"
						className=""
						aria-label=""
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&amp;w=20&amp;q=100"
							alt="post"
						/>
					</a>
					<a
						href="https://apps.apple.com/kr/app/id1074569961"
						className=""
						aria-label=""
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&amp;w=17&amp;q=100"
							alt="apple"
						/>
					</a>
					<a
						href="https://play.google.com/store/apps/details?id=com.wanted.android.wanted"
						className=""
						aria-label=""
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&amp;w=17&amp;q=100"
							alt="google"
						/>
					</a>
				</div>
			</div>

			<div className="border-footer rowclass-footer">
				<p className="footer-text kr">
					(주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로
					300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
					<br />
					유료직업소개사업등록번호 : (국내)
					제2020-3230259-14-5-00018호 | (국외) 서울동부-유-2020-2 |
					사업자등록번호 : 299-86-00021 | 02-539-7118
					<br />© Wantedlab, Inc.
				</p>
				<div className="localSelect">
					<img
						className="countryIcon"
						src="https://static.wanted.co.kr/images/userweb/ico_KR.svg"
						alt="country flag KR"
					/>
					<select>
						<option value="KR">한국 (한국어)</option>
						<option value="JP">日本 (日本語)</option>
						<option value="WW">Worldwide (English)</option>
						<option value="SG">Singapore (English)</option>
					</select>
					<i className="icon-play3" />
				</div>
			</div>
		</FooterContainer>
	);
}

const FooterContainer = styled.footer`
	padding: 18px 0 65px;
	background-color: #fff;
	border-top: 1px solid #ececec;

	.localSelect {
		position: relative;
		width: 250px;
		height: 36px;
		float: left;
		img {
			position: absolute;
			left: 15px;
			top: 55%;
			transform: translateY(-50%);
			width: 24px;
			height: 17px;
			z-index: 1;
		}
		select {
			width: 100%;
			height: 40px;
			background: #f2f4f7;
			border-radius: 5px;
			border: none;
			font-size: 14px;
			line-height: 2.1;
			color: #717171;
			padding: 0 45px;
			appearance: none;
			font-weight: 500;
		}
		i {
			position: absolute;
			width: 10px;
			height: 10px;
			font-size: 10px;
			line-height: 1.6;
			right: 15px;
			top: 50%;
			transform: translateY(-50%);
			color: #717171;
		}
	}

	.footer-text {
		float: left;
		font-size: 12px;
		font-weight: 500;
		line-height: 1.6666666667em;
		color: #767676;
		width: calc(100% - 290px);
		margin-right: 40px;
	}
	.border-footer {
		border-top: 1px solid #ececec;
		padding-top: 25px;
	}
	.rowclass-footer {
		width: 90%;
		max-width: 1060px;
		margin: 0 auto 18px;
		display: flex;
		.nav-footerlink {
			flex-grow: 1;
			display: flex;
			align-items: center;
			.logo-footerlink {
				margin-right: 50px;
			}
			a {
				font-size: 15px;
				color: #3a3a3a;
				font-weight: 500;
				line-height: 2.6;
				margin-right: 45px;
				white-space: nowrap;
			}
		}
		.nav-socaillink {
			display: flex;
			flex-wrap: nowrap;
			line-height: 2.6;
			a {
				position: relative;
				display: block;
				float: left;
				height: 20px;
			}
			a img {
				margin-left: 14px;
			}
		}
	}
`;

export default Footer;
