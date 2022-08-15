import React from 'react';
import styled from 'styled-components';

function SearchHeader({ query }) {
	return (
		<ComponentWrapper>
			<div>
				<button type="button" className="searchinput-keyword">
					{query}
				</button>
			</div>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 160px;
	background: #fff;
	border-bottom: 1px solid #e1e2e3;
	z-index: 1;
	.searchinput-keyword {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		max-width: 90%;
		font-size: 48px;
		line-height: 2;
		color: #333;
		padding: 0;
		margin: 0;
		border: 0;
		cursor: pointer;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
`;

export default SearchHeader;
