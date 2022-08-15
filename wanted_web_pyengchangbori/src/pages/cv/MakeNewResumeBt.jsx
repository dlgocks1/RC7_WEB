import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function MakeNewResumeBt() {
	const navigate = useNavigate();

	const handleClicknewResume = () => {
		navigate('/cv/make?modify=N');
	};

	return (
		<ComponentWrapper
			onClick={handleClicknewResume}
			className="resumeitem"
			role="button"
		>
			<div className="resumelist-additem">
				<div className="resumelist-additem-icon">
					<i className="icon-edit-copy" />
				</div>
				<p>새 이력서 작성</p>
			</div>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div``;

export default MakeNewResumeBt;
