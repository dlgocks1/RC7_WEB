import React from 'react';
import styled from 'styled-components';

function Loading() {
	return (
		<LoadingWrapper>
			<div />
			<div />
			<div />
		</LoadingWrapper>
	);
}

const LoadingWrapper = styled.div`
	width: 100%;
	height: 100%;
	margin-top: 150px;
	margin-bottom: 150px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1500;
	div:first-child {
		background-color: #24dfa6;
		width: 70px;
		height: 70px;
		opacity: 0.7;
		border-radius: 50%;
		animation: loadingAnimation 0.5s 0s infinite alternate;
	}
	div:nth-child(2) {
		background-color: #438aff;
		width: 70px;
		height: 70px;
		margin-left: -20px;
		opacity: 0.7;
		border-radius: 50%;
		animation: loadingAnimation 0.5s 0.2s infinite alternate;
	}
	div:nth-child(3) {
		background-color: #2c5bef;
		width: 70px;
		height: 70px;
		margin-left: -20px;
		opacity: 0.7;
		border-radius: 50%;
		animation: loadingAnimation 0.5s 0.4s infinite alternate;
	}
	@keyframes loadingAnimation {
		0% {
			margin-top: 0px;
		} /* 처음 위치 */
		100% {
			margin-top: 50px;
		} /* 마지막 위치 */
	}
`;

export default Loading;
