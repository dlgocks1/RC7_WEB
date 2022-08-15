import React, { useContext, useState } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ChipButton({ title, itemId, onClick, selected }) {
	const visibility = useContext(VisibilityContext);
	const navigate = useNavigate();

	const [onhover, setHover] = useState(false);

	return (
		<ComponentContainer
			onMouseLeave={() => setHover(false)}
			onMouseEnter={() => setHover(true)}
			selected={selected}
			onClick={() => {
				onClick(visibility);
				navigate(`/?tag=${itemId}`);
			}}
			onhover={onhover}
		>
			{title}
		</ComponentContainer>
	);
}

const ComponentContainer = styled.button`
	font-weight: ${(props) => props.selected && 700};
	color: ${(props) => (props.selected ? '#36f' : '#333')};
	background-color: ${(props) => (props.selected ? `#fff` : '#f2f4f7')};
	border: ${(props) =>
		props.selected ? `1px solid #36f` : '1px solid #f2f4f7'};
	outline: ${(props) => props.selected && 'none'};

	font-weight: ${(props) => props.onhover && 700};
	color: ${(props) => props.onhover && '#36f'};
	background-color: ${(props) => props.onhover && `#fff`};
	border: ${(props) => props.onhover && `1px solid #36f`};
	outline: ${(props) => props.onhover && 'none'};

	padding: 0 29px;
	height: 50px;
	font-size: 15px;
	scroll-snap-align: start;
	margin-right: 10px;
	border-radius: 5px;
	white-space: nowrap;
	scroll-margin-left: 400px;

	letter-spacing: -1px;
`;

export default ChipButton;
