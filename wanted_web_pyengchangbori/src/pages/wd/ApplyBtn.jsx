import React from 'react';

function ApplyBtn({ handleClickAside }) {
	return (
		<div className="btn-apply">
			<button
				onClick={(e) => {
					handleClickAside(e, 'apply');
				}}
				type="button"
			>
				지원하기
			</button>
		</div>
	);
}

export default ApplyBtn;
