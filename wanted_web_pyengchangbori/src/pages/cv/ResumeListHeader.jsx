import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function ResumeListHeader() {
	return (
		<ComponentWrapper>
			<div>
				<h4>최근 문서</h4>
				<Link to="/cv/intro" className="resumelist-header">
					<span>원티드 이력서 소개</span>
					<i className="icon-information-outline" />
				</Link>
			</div>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	> div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		margin-top: 25px;
		margin-bottom: 5px;
		> h4 {
			font-size: 16px;
			font-weight: 600;
			line-height: 1.4;
			margin: 0;
			padding: 15px 0;
			color: #333;
			word-wrap: break-word;
		}
	}
	.resumelist-header {
		font-size: 16px;
		font-weight: 600;
		margin: 0;
		padding: 15px 0;
		color: #36f !important;
		display: flex;
		align-items: center;
		> i {
			margin-left: 8px;
			position: relative;
			bottom: 1px;
		}
	}
`;

export default ResumeListHeader;
