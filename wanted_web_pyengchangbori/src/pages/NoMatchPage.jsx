import React from 'react';
import styled from 'styled-components';

function NoMatchPage() {
	return (
		<ComponentWrapper>
			<div className="imageContainer">
				<img
					className="errorImage"
					src="https://static.wanted.co.kr/images/error/lighthouse.png"
					alt="wanted-error"
				/>
			</div>
			<h2>PAGE NOT FOUND</h2>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	text-align: center;
	.imageContainer {
		position: relative;
		max-width: 400px;
		margin: 80px auto 50px;
	}
	.errorImage {
		width: 100%;
	}
	h2 {
		line-height: 1.4;
		word-wrap: break-word;
		margin: 20px 0 15px;
		font-size: 26px;
		font-weight: 600;
		color: #b5b5b5;
	}
`;
export default NoMatchPage;
