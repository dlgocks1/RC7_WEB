import React from 'react';
import styled from 'styled-components';

function JobMoreBtn({ isMoreJob, setIsmoreJob, title }) {
	return (
		<MoreButton
			clicked={isMoreJob}
			onClick={() => {
				setIsmoreJob(!isMoreJob);
			}}
		>
			<span className="text-jobgroup-title">{title}</span>
			<span className="btn-jobgroup">
				<svg
					xmlns="https://www.w3.org/2000/svg"
					width="12"
					height="12"
					viewBox="0 0 12 12"
				>
					<path
						fill="#666"
						fillRule="nonzero"
						d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"
					/>
				</svg>
			</span>
		</MoreButton>
	);
}
const MoreButton = styled.button`
	display: flex;
	align-items: center;
	white-space: nowrap;

	.text-jobgroup-title {
		padding-top: 3px;
		margin-right: 15.5px;
		font-size: 24px;
		line-height: 29px;
		font-weight: 700;
		color: #333;
	}
	.btn-jobgroup {
		transform: ${(props) => props.clicked && 'rotate(180deg)'};
		position: relative;
		border: 1px solid #e1e2e3;
		border-radius: 9999px;
		background-color: #fff;
		width: 26px;
		height: 26px;
		transition: 0.3s;
		flex-shrink: 0;
		svg {
			margin-top: 7px;
		}
	}
`;

export default JobMoreBtn;
