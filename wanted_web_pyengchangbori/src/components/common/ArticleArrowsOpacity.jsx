import React from 'react';
import styled from 'styled-components';
import { ArticleArrow } from './ArticleArrows';

export function LeftArticleArrowOpacity({ className, onClick, customStyle }) {
	return (
		<CustomArticleArrows
			disabled={className?.includes('slick-disabled')}
			style={customStyle}
			type="Left"
			onClick={onClick}
		>
			<span className="icon-wrapper">
				<svg className="icon-svg" viewBox="0 0 18 18">
					<path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z" />
				</svg>
			</span>
		</CustomArticleArrows>
	);
}

export function RightArticleArrowOpacity({ className, onClick, customStyle }) {
	return (
		<CustomArticleArrows
			disabled={className?.includes('slick-disabled')}
			style={customStyle}
			onClick={onClick}
			type="Right"
		>
			<span className="icon-wrapper">
				<svg className="icon-svg" viewBox="0 0 18 18">
					<path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
				</svg>
			</span>
		</CustomArticleArrows>
	);
}

const CustomArticleArrows = styled(ArticleArrow)`
	:disabled {
		cursor: not-allowed;
		opacity: 0.7;
		color: #ddd;
		border: 1px solid #eee;
	}
`;
