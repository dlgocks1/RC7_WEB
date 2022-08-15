import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CustomPatch } from 'utils/api';

function ResumeBt({
	setResumeList,
	setReload,
	idx,
	basicResume,
	date,
	resumeName,
	writingStatus,
}) {
	const { userId, jwt } = useSelector((state) => state.UserDataReducer);

	const [isMoreInfo, setMoreInfo] = useState(false);
	const navigate = useNavigate();

	const handleClickResumeBt = () => {
		navigate(`/cv/make/${idx}?modify=Y`);
	};
	const handleClickModify = (type) => {
		if (type === 'delete') {
			const result = CustomPatch({
				url: `web/resume/${userId}/${idx}/status`,
				body: {
					status: 'N',
				},
				headers: {
					'x-access-token': jwt,
				},
			});
			result.then((res) => {
				console.log(res);
				setReload(Math.random());
			});
			// if (result.isSuccess) {
			// 	navigate('/profile/matching?level=3');
			// }
		}
	};

	return (
		<ComponentWrapper className="resumeitem" role="button">
			<div role="presentation" onClick={handleClickResumeBt}>
				<div className="resumelist-badge">
					<div className="matchup-badge">
						<p>매치업 이력서</p>
					</div>
				</div>
				<div className="resumeitem-title">
					<h3 iswriting="1">{resumeName}</h3>
					<p>{date}</p>
				</div>
			</div>

			<div className="resumeitem-info">
				<div className="resumeitem-lang" iswriting="1">
					한
				</div>
				<span
					className={`writing ${
						writingStatus === '작성 완료' && 'iswriting'
					}`}
					iswriting="1"
				>
					{writingStatus}
				</span>
				<div className="resumeitem-menu">
					<button
						onClick={() => {
							setMoreInfo(!isMoreInfo);
						}}
						type="button"
					>
						<i className="icon-dots-horizontal-triple" />
					</button>
				</div>

				{isMoreInfo && (
					<>
						<div
							role="presentation"
							onClick={() => {
								setMoreInfo(false);
							}}
							className="dropdown-overlay"
						/>
						<div className="dropdown-menu">
							<button type="button">이름 변경</button>
							<button type="button">다운로드</button>
							<button
								onClick={() => {
									handleClickModify('delete');
								}}
								type="button"
							>
								삭제
							</button>
						</div>
					</>
				)}
			</div>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	.dropdown-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
	}
	.dropdown-menu {
		z-index: 101;
		position: absolute;
		top: 26px;
		right: 12px;
		display: flex;
		flex-direction: column;
		min-width: 160px;
		box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
		border: 1px solid #d2d2d2;
		background-color: #fff;
		padding: 5px 0;
		> button {
			height: 26px;
			border: none;
			color: #272b33;
			font-family: inherit;
			text-align: left;
			padding: 3px 20px;
			font-size: 14px;
			:hover {
				background-color: #f5f5f5;
			}
		}
	}
`;
export default ResumeBt;
