import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function JobGroupOverlayComponent({
	JobMainCategoryDummy,
	title,
	setIsmoreJob,
}) {
	return (
		<JobGroupOverlay>
			<ul>
				{JobMainCategoryDummy.map((value) => (
					<li>
						<Link
							className={
								title === value.title ? 'active' : undefined
							}
							to={`/wdlist/${value.idx}`}
							onClick={() => {
								setIsmoreJob(false);
							}}
						>
							{value.title}
						</Link>
					</li>
				))}
			</ul>
		</JobGroupOverlay>
	);
}

const JobGroupOverlay = styled.section`
	position: absolute;
	max-width: 190px;
	left: 0;
	right: 0;
	bottom: 0;
	top: 50px;
	overflow-y: scroll;
	height: 70vh;
	background-color: #fff;
	border: 1px solid #e1e2e3;
	box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
	border-radius: 5px;
	z-index: 99;
	padding: 15px 0;

	.active {
		color: #36f;
	}

	::-webkit-scrollbar {
		width: 6px; /* 스크롤바의 너비 */
	}

	::-webkit-scrollbar-thumb {
		height: 30%; /* 스크롤바의 길이 */
		background: #cccccc; /* 스크롤바의 색상 */

		border-radius: 10px;
	}

	a {
		font-weight: 500;
		font-size: 16px;
		padding: 10px 0 10px 25px;
		display: flex;
		color: #333;
		align-items: center;
		:hover {
			background-color: #f8f8f8;
			color: #36f;
		}
	}
`;
export default JobGroupOverlayComponent;
