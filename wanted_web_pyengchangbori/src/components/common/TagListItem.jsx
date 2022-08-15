import React, { useState } from 'react';
import styled from 'styled-components';

function TagListItem({ idx, hasClicked, onClick, content, color, imgUrl }) {
	return (
		<Button
			onClick={(e) => {
				onClick(e, idx);
			}}
			color={color}
			type="button"
			hasClicked={hasClicked}
		>
			{content}
			<img src={imgUrl} alt={content} />
		</Button>
	);
}

const Button = styled.button`
	white-space: pre;

	.selected {
		border: 1px solid #36f;
		color: #36f;
		font-weight: 600;
	}

	:hover {
		border: 1px solid rgba(51, 102, 255, 0.3);
	}
	background: ${(props) => props.color};
	position: relative;
	height: 32px;
	padding: 8px 14px;
	border-radius: 20px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin-right: 8px;
	font-size: 13px;
	line-height: 16px;
	font-weight: 400;
	color: #333;
	font-family: inherit;
	border: 1px solid transparent;

	color: ${(props) => props.hasClicked && '#36f'};
	border: 1px solid ${(props) => (props.hasClicked ? '#36f' : 'transparent')};
	font-weight: ${(props) => props.hasClicked && '600'};
	> img {
		width: 16px;
		height: 16px;
		margin-left: 5px;
		display: block;
	}
`;

export default TagListItem;
