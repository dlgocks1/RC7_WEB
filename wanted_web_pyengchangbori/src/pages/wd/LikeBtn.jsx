import React, { useState } from 'react';
import styled from 'styled-components';

function LikeBtn({ isLiked, handleClickAside, likeCount }) {
	return (
		<ComponentWrapper isLiked={isLiked} className="reaction">
			<button
				onClick={() => {
					handleClickAside('like');
				}}
				className="likes"
				type="button"
			>
				<i className="icon-heart" />
				<span>{likeCount}</span>
			</button>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	i {
		color: ${(props) => props.isLiked && '#fe415c !important'};
	}
`;

export default LikeBtn;
