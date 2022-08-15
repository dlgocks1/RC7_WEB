/* eslint-disable react/no-children-prop */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React, { useContext, useEffect, useState } from 'react';
import {
	VisibilityContext,
	slidingWindow,
	getItemsPos,
} from 'react-horizontal-scrolling-menu';
import styled from 'styled-components';

function Arrow({ direction, children, disabled, onClick }) {
	return (
		<ArrowButton
			direction={direction}
			disabled={disabled}
			onClick={onClick}
			children={children}
		/>
	);
}

export function LeftArrow() {
	const {
		items,
		visibleItems,
		getItemById,
		isFirstItemVisible,
		scrollToItem,
		visibleItemsWithoutSeparators,
		initComplete,
	} = useContext(VisibilityContext);

	const [disabled, setDisabled] = useState(
		!initComplete || (initComplete && isFirstItemVisible),
	);

	useEffect(() => {
		// NOTE: detect if whole component visible
		if (visibleItemsWithoutSeparators.length) {
			setDisabled(isFirstItemVisible);
		}
	}, [isFirstItemVisible, visibleItemsWithoutSeparators]);
	// NOTE: for center items
	const prevGroupItems = slidingWindow(
		items.toItemsKeys(),
		visibleItems,
	).prev();
	const { center } = getItemsPos(prevGroupItems);
	const scrollPrevCentered = () =>
		scrollToItem(getItemById(center), 'smooth', 'center');

	return (
		<Arrow
			direction="Left"
			disabled={disabled}
			onClick={() => {
				scrollPrevCentered();
			}}
		>
			<span className="icon-wrapper">
				<svg className="icon-svg" viewBox="0 0 18 18">
					<path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z" />
				</svg>
			</span>
		</Arrow>
	);
}

export function RightArrow() {
	const {
		getItemById,
		isLastItemVisible,
		items,
		scrollToItem,
		visibleItems,
		visibleItemsWithoutSeparators,
	} = useContext(VisibilityContext);
	const [disabled, setDisabled] = useState(
		!visibleItemsWithoutSeparators.length && isLastItemVisible,
	);
	useEffect(() => {
		if (visibleItemsWithoutSeparators.length) {
			setDisabled(isLastItemVisible);
		}
	}, [isLastItemVisible, visibleItemsWithoutSeparators]);
	// NOTE: for center items
	const nextGroupItems = slidingWindow(
		items.toItemsKeys(),
		visibleItems,
	).next();
	const { center } = getItemsPos(nextGroupItems);
	const scrollNextCentered = () =>
		scrollToItem(getItemById(center), 'smooth', 'center');

	return (
		<Arrow
			direction="Left"
			disabled={disabled}
			onClick={() => {
				scrollNextCentered();
			}}
		>
			<span className="icon-wrapper">
				<svg className="icon-svg" viewBox="0 0 18 18">
					<path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
				</svg>
			</span>
		</Arrow>
	);
}

const ArrowButton = styled.div`
	cursor: pointer;

	height: 44px;
	font-size: 22px;
	top: 3px;
	position: relative;
	min-width: 36px;
	min-height: 36px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #e1e2e3;
	border-radius: 50%;
	background-color: #fff;
	box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
	color: #767676;
	opacity: ${(props) => (props.disabled ? '0' : '1')};

	.icon-wrapper {
		width: 100%;
		display: flex;
		align-items: inherit;
		justify-content: inherit;
	}

	.icon-svg {
		user-select: none;
		width: 1em;
		height: 1em;
		display: inline-block;
		fill: currentColor;
		flex-shrink: 0;
		font-size: inherit;
	}
`;
