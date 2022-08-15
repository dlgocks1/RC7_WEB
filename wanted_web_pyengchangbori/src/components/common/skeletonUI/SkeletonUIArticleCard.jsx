import React from 'react';
import styled from 'styled-components';

function SkeletonUIArticleCard() {
	return (
		<ComponentWrapper>
			<a href="/">
				<div className="img-wrapper">
					<div className="box-skeleton-ui" />
				</div>

				<p className="title-wrapper">
					<div className="box-skeleton-ui" />
				</p>
				{/* <p className="subcontent-wrapper">asdasd</p> */}
				<div className="publisher-wrapper">
					<div className="box-skeleton-ui" />
				</div>
			</a>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.li`
	display: flex;
	flex-direction: column;
	width: ${(props) => !(props.type === 'List') && 'calc(25% - 20px)'};
	margin: 0 10px 50px;

	.title-wrapper {
		overflow: hidden;
		line-height: 24px;
		margin-top: 10px;
		position: relative;
		height: auto;
		padding-bottom: 16px;
	}
	.img-wrapper {
		position: relative;
		height: auto;
		padding-bottom: 70%;
		> div {
			border-radius: 10px;
		}
	}
	.publisher-wrapper {
		margin-top: 12px;
		padding-top: 15px;
		margin-right: 40%;
		position: relative;
		height: auto;
	}

	.container-eventLabels {
		display: flex;
		margin-top: 12px;
	}
`;

export default SkeletonUIArticleCard;
