import React, { useState } from 'react';
import styled from 'styled-components';

function LabelResponseLevel() {
	const [onHover, setOnHover] = useState(false);

	return (
		<ComponentWrapper>
			<div
				onMouseEnter={() => {
					setOnHover(true);
				}}
				onMouseLeave={() => {
					setOnHover(false);
				}}
				className="label-response-container"
			>
				<span>응답률 매우 높음</span>
			</div>
			{onHover && (
				<div className="tooltip-container">
					지원 후 응답받을 확률이 95% 이상입니다.
				</div>
			)}
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	.label-response-container {
		border: 1px solid #00aead;
		color: #00aead;
		border-radius: 2px;
		background-color: #fff;
		display: inline-block;
		font-size: 10px;
		font-weight: 600;
		height: 19px;
		line-height: 19px;
		margin-top: 4px;
		padding: 0 5px;
	}
	> span {
		position: relative;
		line-height: 19px;
		top: -1px;
	}
	.tooltip-container {
		color: #333;
		font-size: 12px;
		font-weight: 400;
		min-height: 40px;
		height: auto;
		line-height: normal;
		position: absolute;
		padding: 11px 12px;
		background: #fff;
		border: 1px solid #999;
		z-index: 1;
		/* display: none; */
		white-space: nowrap;
		top: calc(100% + 4px);
		left: 50%;
		transform: translateX(-50%);
	}
`;

export default LabelResponseLevel;
