import React from 'react';
import styled from 'styled-components';

function SkeletonTopBanner() {
	return (
		<ComponentWrapper>
			<div className="box-topbanner">
				<div className="skeleton-ui">
					<div className="box-skeleton-ui" />
				</div>
			</div>
		</ComponentWrapper>
	);
}
const ComponentWrapper = styled.div`
	height: auto;
	position: relative;
	overflow: hidden;
	.box-topbanner {
		display: flex;
		padding: 0 12px;
		width: 100%;
		justify-content: center;
	}
	.skeleton-ui {
		width: 1060px;
		position: relative;
		padding-top: 20%;
	}
`;

export default SkeletonTopBanner;
