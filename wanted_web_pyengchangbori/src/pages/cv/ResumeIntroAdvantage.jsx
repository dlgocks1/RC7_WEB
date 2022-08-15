import React from 'react';
import styled from 'styled-components';

function ResumeIntroAdvantage() {
	return (
		<ComponentWrapper>
			<div className="resumeintro-content">
				<h1>원티드 이력서는 이런 점이 좋아요!</h1>
				<ul>
					<li className="resumenintro-advantage-first">
						<div>
							<h2>이력서 하나로 모든 준비 끝</h2>
							<h3>
								이력서 작성부터 지원까지 한 곳에서!
								<br />
								회사별 양식에 맞출 필요 없이 하나의 이력서만
								작성하세요.
							</h3>
						</div>
						<picture>
							<source
								media="(max-width: 767px)"
								srcSet="https://static.wanted.co.kr/images/userweb/resume_intro/m_resume_advantage_01.png"
							/>
							<img
								width="520"
								height="312"
								src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_advantage_01.png"
								alt="resume_advantage_01"
							/>
						</picture>
					</li>
					<li className="resumenintro-advantage-second">
						<div>
							<h2>완성도를 높여주는 이력서 코칭</h2>
							<h3>
								이력서 코칭*으로 서류 합격률 30% UP
								<br /> 300만 합격 데이터를 분석해 합·불합격
								단어를 알려드려요.
							</h3>
							<h6>*일부 직군에서는 사용 제한, 추후 확대 예정</h6>
						</div>
						<picture>
							<source
								media="(max-width: 767px)"
								srcSet="https://static.wanted.co.kr/images/userweb/resume_intro/m_resume_advantage_02.png"
							/>
							<img
								width="520"
								height="256"
								src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_advantage_02.png"
								alt="resume_advantage_02"
							/>
						</picture>
					</li>
					<li className="resumenintro-advantage-third">
						<div>
							<h2>이력서만 등록해도 찾아오는 면접 제안</h2>
							<h3>
								매치업은 서류 전형 없이 바로 면접 진행!
								<br />
								채용담당자가 직접 면접을 제안합니다.
							</h3>
						</div>
						<picture>
							<source
								media="(max-width: 767px)"
								srcSet="https://static.wanted.co.kr/images/userweb/resume_intro/m_resume_advantage_03.png"
							/>
							<img
								width="520"
								height="282"
								src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_advantage_03.png"
								alt="resume_advantage_03"
							/>
						</picture>
					</li>
					<li className="resumenintro-advantage-last">
						<div>
							<h2>언제 어디서나 자유롭게 작성</h2>
							<h3>
								주말엔 노트북, 출퇴근길엔 스마트폰으로.
								<br />
								자유롭게 작성하고 필요할 땐 PDF로 저장하세요.
							</h3>
						</div>
						<picture>
							<source
								media="(max-width: 767px)"
								srcSet="https://static.wanted.co.kr/images/userweb/resume_intro/m_resume_advantage_04.png"
							/>
							<img
								width="520"
								height="282"
								src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_advantage_04.png"
								alt="resume_advantage_04"
							/>
						</picture>
					</li>
				</ul>
			</div>
		</ComponentWrapper>
	);
}
const ComponentWrapper = styled.div`
	padding-top: 100px;
	width: 100%;
	padding-bottom: 100px;
	.resumenintro-advantage-first {
		background-color: #f1f7fe;
	}
	.resumenintro-advantage-second {
		background-color: #f1f1fe;
	}
	.resumenintro-advantage-third {
		margin-top: 20px;
		background-color: #f3f8ee;
	}
	.resumenintro-advantage-last {
		margin-top: 20px;
		background-color: #ecf8fb;
	}
	.resumeintro-content {
		text-align: center;
		max-width: 1060px;
		margin: 0 auto;
		word-break: keep-all;
		word-wrap: break-word;
		h1 {
			font-weight: 700;
			font-size: 36px;
			margin: 0;
		}
		ul {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin-top: 50px;
			li {
				display: flex;
				flex-wrap: wrap;
				align-content: space-between;
				width: 520px;
				height: 480px;
				padding-top: 50px;
				border-radius: 10px;
				text-align: left;
				> div {
					padding-left: 50px;
					h2 {
						margin-top: 0;
						font-weight: 600;
						font-size: 26px;
						line-height: 135.7%;
					}
					h3 {
						font-weight: 400;
						font-size: 16px;
						line-height: 150%;
						margin-top: 15px;
					}
				}
			}
		}
	}
`;
export default ResumeIntroAdvantage;
