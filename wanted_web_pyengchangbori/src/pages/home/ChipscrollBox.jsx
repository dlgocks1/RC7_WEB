/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext, useState } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export function ChipScrollBox({
	defaultColor,
	url,
	itemId,
	selected,
	onClick,
	title,
}) {
	const navigate = useNavigate();
	const visibility = useContext(VisibilityContext);

	const visible = visibility.isItemVisible(itemId);
	const [onhover, setHover] = useState(false);

	return (
		<ChipButton
			defaultColor={defaultColor}
			onMouseLeave={() => setHover(false)}
			onMouseEnter={() => setHover(true)}
			onClick={() => {
				onClick(visibility);
				navigate(`${url}?tag=${itemId}`);
			}}
			selected={selected}
			onhover={onhover}
		>
			{title}
		</ChipButton>
	);
}

const ChipButton = styled.button`
	font-weight: ${(props) => props.selected && 700};
	color: ${(props) => (props.selected ? props.defaultColor : '#333')};
	background-color: ${(props) => (props.selected ? `#fff` : '#f2f4f7')};
	border: ${(props) =>
		props.selected
			? `1px solid ${props.defaultColor}`
			: '1px solid #f2f4f7'};
	outline: ${(props) => props.selected && 'none'};

	font-weight: ${(props) => props.onhover && 700};
	color: ${(props) => props.onhover && props.defaultColor};
	background-color: ${(props) => props.onhover && `#fff`};
	border: ${(props) => props.onhover && `1px solid ${props.defaultColor}`};
	outline: ${(props) => props.onhover && 'none'};

	transition: all 0.3s;

	font-family: inherit;
	padding: 0 29px;
	height: 50px;
	font-size: 15px;
	scroll-snap-align: start;
	margin-right: 10px;
	/* background-color: #f2f4f7; */
	border-radius: 5px;
	white-space: nowrap;
	scroll-margin-left: 400px;

	letter-spacing: -1px;
`;
