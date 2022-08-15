import React from 'react';
import styled from 'styled-components';

export function LeftArticleArrow({ className, onClick, customStyle }) {
	return (
		<ArticleArrow
			isDisabled={className?.includes('slick-disabled')}
			style={customStyle}
			type="Left"
			onClick={onClick}
		>
			<span className="icon-wrapper">
				<svg className="icon-svg" viewBox="0 0 18 18">
					<path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z" />
				</svg>
			</span>
		</ArticleArrow>
	);
}

export function RightArticleArrow({ className, onClick, customStyle }) {
	return (
		<ArticleArrow
			isDisabled={className?.includes('slick-disabled')}
			style={customStyle}
			onClick={onClick}
			type="Right"
		>
			<span className="icon-wrapper">
				<svg className="icon-svg" viewBox="0 0 18 18">
					<path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
				</svg>
			</span>
		</ArticleArrow>
	);
}

export const ArticleArrow = styled.div`
	cursor: pointer;

	top: 0;
	right: ${(props) => props.type === 'Right' && '10px'};
	left: ${(props) => props.type === 'Left' && '10px'};

	position: absolute;

	height: 44px;
	font-size: 22px;
	min-width: 36px;
	min-height: 36px;
	display: inline-flex;
	display: ${(props) => props.isDisabled && 'none'};

	justify-content: center;
	align-items: center;
	border: 1px solid #e1e2e3;
	border-radius: 50%;
	background-color: #fff;
	box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
	color: #767676;
	background: linear-gradient(90deg, #fff 21.82%, hsla(0, 0%, 100%, 0));
	opacity: ${(props) => (props.disabled ? '0.2' : '1')};

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
