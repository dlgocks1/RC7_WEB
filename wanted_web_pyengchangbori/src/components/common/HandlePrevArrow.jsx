import React from 'react';
import styled from 'styled-components';

function HandlePrevArrow({ onClick }) {
	return (
		<ComponentWrapper onClick={onClick}>
			<span className="icon-svg-wrapper">
				<svg className="icon-svg" viewBox="0 0 18 18">
					<path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z" />
				</svg>
			</span>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.button`
	top: 120px;
	left: calc((100% - 1210px) / 2);

	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	width: 30px;
	height: 60px;
	opacity: 0.5;
	border-radius: 15px;
	background-color: #fff;
	font-size: 16px;
	z-index: 10;
`;

export default HandlePrevArrow;
