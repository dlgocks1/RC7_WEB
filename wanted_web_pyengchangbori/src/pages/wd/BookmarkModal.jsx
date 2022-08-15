/* eslint-disable no-return-assign */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function BookmarkModal({ setBookMarkModal }) {
	const navigate = useNavigate();

	useEffect(() => {
		document.body.style = `overflow: hidden`;
		return () => (document.body.style = `overflow: auto`);
	}, []);

	return (
		<ComponentWrapper>
			<div className="Modal_modalContent__0zuTn BookmarkedModal_customModalContainer__tEjxA">
				<div
					id="MODAL_BODY"
					className="ModalBody Body_body__KI0OY BookmarkedModal_customModalBody__2hpFR"
				>
					<div className="BookmarkedModal_container__OPpVC">
						<button
							className="BookmarkedModal_closeBtn__cjiz7"
							type="button"
							onClick={() => {
								setBookMarkModal(false);
							}}
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								color="#999"
							>
								<path
									fill="currentColor"
									d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
								/>
							</svg>
						</button>
						<p>북마크에 저장되었습니다.</p>
						<button
							className="BookmarkedModal_linkBtn__2fG_7"
							type="button"
							onClick={() => {
								navigate('/profile/bookmarks');
							}}
						>
							저장된 포지션 보기
						</button>
					</div>
				</div>
			</div>
			<div
				onClick={() => {
					setBookMarkModal(false);
				}}
				role="presentation"
				className="Modal_modalOverlay__1sCXi"
			/>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	position: fixed;
	overflow: hidden;
	z-index: 1400;
	.Modal_modalContent__0zuTn {
		top: 50%;
		left: 50%;
		width: 100%;
		max-width: 500px;
		max-height: calc(100vh - 150px);
		transform: translate(-50%, -50%);
		z-index: 5;
		overflow-y: auto;
		scrollbar-width: none;
		border-radius: 5px;
		background-color: #fff;
		position: absolute;
		overflow: hidden;
		height: 160px;
		border: 1px solid #aaa;
		.Body_body__KI0OY {
			padding: 20px;
		}
		.BookmarkedModal_container__OPpVC {
			height: 118px;
			font-weight: 700;
			font-stretch: normal;
			font-style: normal;
			line-height: normal;
			letter-spacing: normal;
			color: #333;
			text-align: center;
			display: flex;
			font-size: 16px;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}
		.BookmarkedModal_linkBtn__2fG_7 {
			color: #36f;
			font-size: 16px;
			margin-top: 15px;
			font-weight: 600;
			font-family: inherit;
		}
		.BookmarkedModal_closeBtn__cjiz7 {
			position: absolute;
			top: 20px;
			right: 20px;
		}
	}
	.Modal_modalOverlay__1sCXi {
		background-color: transparent;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 4;
	}
`;

export default BookmarkModal;
