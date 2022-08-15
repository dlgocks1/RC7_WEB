import React from 'react';
import styled from 'styled-components';

function ResumeIntroAi() {
	return (
		<ComponentWrapper>
			<div>
				<div className="resumeintroAi-content">
					<div>
						이력서 완성하면
						<p>
							<img
								src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_ai_logo.png"
								width="198"
								height="33"
								alt="ai_logo"
							/>
							가 포지션 추천까지
						</p>
					</div>
					<p>
						이력서를 분석하여 딱 맞는 포지션을 찾아드려요.
						<br />
						원티드AI가 추천한 포지션은 서류합격률이 일반 지원 대비
						4배 높습니다.
					</p>
					<button type="button">
						<span>원티드 이력서 시작하기</span>
					</button>
				</div>
				<img
					src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_ai_sample.png"
					width="516"
					height="352"
					alt="ai_sample"
				/>
			</div>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.section`
	padding: 0 !important;
	height: 452px;
	> div {
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		text-align: left;
		max-width: 1060px;
		margin: 0 auto;
		word-break: keep-all;
		word-wrap: break-word;
		> img {
			position: absolute;
			bottom: 0;
			left: 575px;
		}
	}
	.resumeintroAi-content > div {
		font-weight: 700;
		font-size: 36px;
		line-height: 130%;
		letter-spacing: -0.024em;
		> p {
			height: 47px;
			display: flex;
			align-items: baseline;
			grid-gap: 5px;
			gap: 5px;
		}
	}
	.resumeintroAi-content > p {
		font-weight: 400;
		font-size: 18px;
		line-height: 160%;
		margin-top: 20px;
	}
	.resumeintroAi-content button {
		height: 50px;
		margin-top: 30px;
		font-size: 15px;
		color: #fff;
		background-color: #36f;
		border: none;
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		vertical-align: middle;
		min-width: 64px;
		padding: 0 27px;
		box-sizing: border-box;
		border-radius: 25px;
		font-weight: 700;
		line-height: normal;
		cursor: pointer;
	}
`;
export default ResumeIntroAi;
