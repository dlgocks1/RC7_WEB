import React from 'react';
import styled from 'styled-components';

function HandleNextArrow({ onClick }) {
	return (
		<HandleNextArrowWrapper onClick={onClick}>
			<span className="icon-svg-wrapper">
				<svg className="icon-svg" viewBox="0 0 18 18">
					<path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
				</svg>
			</span>
		</HandleNextArrowWrapper>
	);
}

export const HandleNextArrowWrapper = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 120px;
	width: 30px;
	height: 60px;
	opacity: 0.5;
	border-radius: 15px;
	background-color: #fff;
	font-size: 16px;
	z-index: 10;
	right: calc((100% - 1200px) / 2);
`;

export default HandleNextArrow;
