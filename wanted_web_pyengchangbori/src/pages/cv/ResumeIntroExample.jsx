import React from 'react';
import styled from 'styled-components';

function ResumeIntroExample(props) {
	return (
		<ComponentWrapper>
			<div className="resume-intro-content">
				<h1>쓰는 사람도 보는 사람도 편하게</h1>
				<a
					data-attribute-id="introResume__downloadResume"
					target="_blank"
					href="https://static.wanted.co.kr/images/userweb/resume-sample/sample_resume_ko.pdf"
					rel="noreferrer"
				>
					<p>이력서 샘플 다운로드</p>
				</a>
			</div>
			<div className="resumeintro-example-list">
				<div>
					<div className="resumeintro-example-summary">
						<h1>김티드</h1>
						<div className="Kr_bubbleContainer__8d0zf bublecontainer">
							이메일: wanted@wantedlab.com
							<br />
							연락처: 000-0000-0000
							<div className="bubble">
								성별, 사진 등 불필요한 개인정보 최소화
							</div>
						</div>
						<p>
							Next.js, TypeScript, React 기반의 5년차 프론트엔드
							개발자 김티드입니다.
							<br />
							새로운 기술을 활용해 비즈니스 문제를 해결하는 것에
							관심이 많습니다.
						</p>
						<div className="Kr_bubbleContainer__8d0zf bublecontainer">
							<ul>
								<li>
									웹/앱 서비스의 프론트엔드 설계, 개발, 운영
									경험
								</li>
								<li>
									다수의 UI 구현 경험으로 사용자 인터렉션에
									대한 높은 이해도
								</li>
								<li>
									제한된 리소스 환경에서 기획 단계부터 참여한
									프로젝트 다수
								</li>
								<li>
									프로젝트 리딩 및 다양한 팀과의 협업 경험
								</li>
							</ul>
							<div className="bubble">
								깔끔한 UI와 가독성 높은 디자인
							</div>
						</div>
					</div>
					<hr className="Divider_Divider__root__f2LD0" />
					<div className="resumeintro-example-list-career">
						<div className="resumeintro-exaple-title">
							<h5>경력</h5>
						</div>
						<div className="resumenintro-career-content">
							<div className="resumeintro-examplelist-career">
								<div>
									<h5>원티드랩</h5>
									<p>프론트엔드팀 / 팀원</p>
								</div>
								<p>2020.07 - 현재 재직중</p>
							</div>
							<ul>
								<li className="Kr_bubbleContainer__8d0zf bublecontainer">
									<div>
										<h6>
											<span>웹사이트 SEO</span>2022.05 -
											2022.06
										</h6>
										<p>
											도메인 정책 수립 및 URL
											표준화(canonical) 및 페이지 별
											메타태그/키워드 검증
											<br />- 성과: 오가닉 트래픽 30% 증가
											<br />- 사용 기술: Next.js, Google
											Search Console
											<br />- 링크:
											https://www.wanted.co.kr
										</p>
									</div>
									<div className="bubble">
										업무 강점과 경력을 강조하는 템플릿
									</div>
								</li>
								<li>
									<h6>
										<span>
											글로벌 채용 서비스 신규 개발
										</span>
										2021.08 - 2022.04
									</h6>
									<p>
										메인 프론트엔드 개발자로 프로젝트 구조
										설계 및 각종 컴포넌트 개발 (기여도 70%)
										<br />- 성과: 일본/싱가폴/대만 3개국
										대상 채용 서비스 출시
										<br />- 사용 기술: React.js, Next.js,
										redux, styled-component
										<br />- 링크:
										https://www.wantedglobal.com
									</p>
								</li>
								<li>
									<h6>
										<span>사내 자동화 도구 개발</span>
										2021.01 - 2021.07
									</h6>
									<p>
										번역키 관리 자동화, 릴리즈 노트 자동
										생성 등 각종 기능 개발하여 사내 자동화
										시스템 구축
										<br />- 성과: 개발자 주당 업무 시간 15%
										단축
										<br />- 사용기술: Next.js, Node.js,
										express, antd, fxjs
										<br />- 링크: https://medium.com/wanted1
									</p>
								</li>
								<li>
									<h6>
										<span>
											콘텐츠 구독 서비스 개발 및 유지 보수
										</span>
										2020.07 - 2020.12
									</h6>
									<p>
										서브 프론트엔드 개발자로 구독자 증대를
										위한 기능 다수 개발 (기여도 30%)
										<br />
										코드 리팩토링 및 SSR 적용 및 팀 내
										React-query 도입
										<br />- 성과: 콘텐츠 공유 기능, 직무
										맞춤 콘텐츠 추천 기능 개발 → 구독 전환율
										개선에 기여
										<br />- 사용 기술: Next.js, React-query
									</p>
								</li>
							</ul>
							<hr className="Divider_Divider__root__f2LD0" />
							<div>
								<div>
									<h5>한국빅컴퍼니</h5>
									<p>디지털기술개발팀 / 사원</p>
								</div>
								<p>2018.03 - 2020.06</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.section`
	padding-top: 100px;
	position: relative;
	background-color: #f2f4f7;
	.resume-intro-content {
		text-align: center;
		max-width: 1060px;
		margin: 0 auto;
		word-break: keep-all;
		word-wrap: break-word;
		h1 {
			font-weight: 600;
			font-size: 40px;
			margin: 0;
		}
		> div a {
			display: -ms-flexbox;
			display: flex;
			-ms-flex-pack: center;
			justify-content: center;
			-ms-flex-align: center;
			align-items: center;
			width: 197px;
			height: 50px;
			margin: 43px auto 0;
			background-color: #36f;
			letter-spacing: 0.0056em;
			border-radius: 50px;
			p {
				color: #fff;
				font-weight: 600;
				font-size: 16px;
				line-height: 24px;
			}
		}
	}
	.resumeintro-example-list {
		margin-top: 50px;
		> div {
			max-width: 1060px;
			margin: 0 auto;
			padding: 90px 90px 20px;
			background-color: #fff;
		}
	}

	.resumeintro-example-summary {
		line-height: 150%;
		font-weight: 400;
		font-size: 16px;
		> h1 {
			font-weight: 700;
			font-size: 28px;
			margin-top: 20px;
		}
		> * {
			margin-top: 20px;
		}
		> div ul {
			margin: 0;
			list-style-type: disc;
			padding-left: 25px;
			letter-spacing: 0.0056em;
		}
		> div:last-child {
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: #08ba9c !important;
			transition: color 1s linear 0.1s;
			display: flex !important;
		}
	}
	.bublecontainer {
		color: #08ba9c !important;
		transition: color 1s linear 0.1s;
		display: flex !important;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
		> div:last-child {
			visibility: visible;
			transform: translate3d(0, -25%, 0);
			opacity: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 242px;
			height: 36.55px;
			background-color: #08ba9c;
			border-radius: 30px;
			font-weight: 600;
			font-size: 13px;
			color: #fff;
			line-height: 18px;
			letter-spacing: 0.025em;
		}
	}
	.bubble:after {
		content: '';
		display: block;
		position: absolute;
		border-color: #08ba9c transparent;
		border-style: solid;
		border-width: 10px 6px 0;
		width: 0;
		z-index: 1;
		bottom: -2px;
		left: -4px;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
	}
	.resumeintro-example-list hr {
		margin: 50px 0;
		background-color: #333;
		height: 1px;
		flex-shrink: 0;
		opacity: 0.2;
	}
	.resumeintro-example-list-career {
		display: flex;
		position: relative;
		::after {
			content: '';
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 150px;
			background: linear-gradient(180deg, hsla(0, 0%, 97%, 0), #f8f8f8);
		}
	}

	.resumeintro-exaple-title {
		width: 78px;
		h5 {
			font-weight: 400;
			font-size: 16px;
		}
	}
	.resumenintro-career-content {
		width: 100%;
		> ul {
			margin-top: 20px;
			letter-spacing: 0.0145em;
			li {
				position: relative;
				padding-left: 19px;
				transition: color 1s linear 0.1s;
				::before {
					content: '·';
					position: absolute;
					top: -2px;
					left: 0;
					font-size: 60px;
					line-height: 14px;
				}
				h6 {
					margin-bottom: 10px;
					span {
						font-weight: 600;
						font-size: 14px;
						margin-right: 10px;
					}
				}
			}
			li + li {
				margin-top: 20px;
			}
		}
	}
	.resumeintro-examplelist-career {
		display: flex;
		justify-content: space-between;
		font-weight: 600;
		font-size: 16px;
		> p {
			font-weight: 600;
			font-size: 16px;
			line-height: 150%;
			letter-spacing: 0.0056em;
		}
		> div h5 {
			font-weight: 600;
			font-size: 16px;
			line-height: 150%;
			letter-spacing: 0.0056em;
		}
		> div p {
			margin-top: 5px;
			font-weight: 400;
			font-size: 14px;
			line-height: 142.9%;
			letter-spacing: 0.0145em;
		}
	}
`;
export default ResumeIntroExample;
