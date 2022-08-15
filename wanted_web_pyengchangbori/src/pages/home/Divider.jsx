import React from 'react';
import styled from 'styled-components';

function Divider() {
	return (
		<ComponentWrapper>
			<hr className="Divider_Divider__root__f2LD0" />
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	max-width: 1060px;
	width: 87.72%;
	margin: 0 auto;
	hr {
		height: 1px;
		margin: 0;
		border: none;
		flex-shrink: 0;
		background-color: #ececec;
	}
`;

export default Divider;
