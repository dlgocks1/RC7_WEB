import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CvIntro from './CvIntro';
import CvList from './CvList';

function Cvpage() {
	const { isLogin } = useSelector((state) => state.UserDataReducer);

	return (
		<ComponnentWrapper>
			{!isLogin ? <CvIntro /> : <CvList />}
		</ComponnentWrapper>
	);
}

const ComponnentWrapper = styled.div``;

export default Cvpage;
