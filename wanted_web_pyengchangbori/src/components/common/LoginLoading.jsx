import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function LoginLoading() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<LoadingStatus>
			<div>
				<b />
			</div>
		</LoadingStatus>
	);
}
const LoadingStatus = styled.div`
	background-color: #fff;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 100;
	div {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		b {
			width: 100px;
			height: 100px;
			border-radius: 50%;
			background-color: #36f;
		}
	}
`;
export default LoginLoading;
