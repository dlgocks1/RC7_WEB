import React from 'react';
import { useDispatch } from 'react-redux';
import { setLoginModalVisible } from 'store/action/LoginAction';
import styled from 'styled-components';

function ResumeIntoEdit() {
	const dispatch = useDispatch();

	const handleClickCvBtn = () => {
		dispatch(setLoginModalVisible());
	};

	return (
		<ComponentWrapper>
			<div className="resumeintro-content">
				<picture>
					<source
						media="(max-width: 767px)"
						srcSet="https://static.wanted.co.kr/images/userweb/resume_intro/m_resume_intro_title.png"
					/>
					<img
						src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_intro_title.png"
						alt="resume_intro_title"
					/>
				</picture>
				<h1>합격을 부르는 이력서</h1>
				<h2>
					원티드 이력서로 지원 시 일반 이력서보다
					<br /> 서류 합격률이 2배* 높아집니다.
				</h2>
				<button onClick={handleClickCvBtn} type="button">
					<span>원티드 이력서 작성하기</span>
				</button>
				<p className="resumneintro-edit-desc">
					*21/01/01 ~ 22/01/01 기간 중 원티드를 통해
					<br /> 지원한 이용자의 평균 서류 합격률 기준
				</p>
			</div>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.section`
	height: 440px;
	position: relative;
	z-index: 0;
	background-color: #f1f7fe;

	.resumeintro-content {
		text-align: left;
		padding-top: 100px !important;
		padding-bottom: 0 !important;
		max-width: 1060px;
		margin: 0 auto;
		word-break: keep-all;
		word-wrap: break-word;

		h1 {
			font-weight: 700;
			font-size: 48px;
			letter-spacing: -0.027em;
			line-height: 62px;
		}
		h2 {
			font-weight: 400;
			font-size: 20px;
			line-height: 32px;
			margin-top: 15px;
			margin: 20px 0 0;
		}
		button {
			height: 50px;
			padding: 13px 32px;
			margin-top: 50px;
			font-weight: 600;
			font-size: 16px;

			color: #fff;
			background-color: #36f;
			border: none;

			position: relative;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			vertical-align: middle;
			min-width: 64px;
			box-sizing: border-box;
			border-radius: 25px;
			font-size: 16px;
			line-height: normal;
			cursor: pointer;
		}
	}
	.resumeintro-content img {
		display: -ms-flexbox;
		display: flex;
		justify-self: center;
		max-width: 1440px;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: -1;
		margin: 0 auto;
	}
	.btn-label {
		width: 100%;
		font-size: inherit;
		font-weight: inherit;
		display: inherit;
		-ms-flex-align: inherit;
		align-items: inherit;
		-ms-flex-pack: inherit;
		justify-content: inherit;
		color: inherit;
	}
	.resumneintro-edit-desc {
		margin-top: 18px;
		text-align: right;
		font-weight: 400;
		font-size: 12px;
		line-height: 16px;
		color: #939393;
		letter-spacing: 0.031em;
	}
`;

export default ResumeIntoEdit;
