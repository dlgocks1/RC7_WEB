import Footer from 'components/common/Footer';
import React from 'react';
import styled from 'styled-components';
import ResumeIntoEdit from './ResumeIntoEdit';
import ResumeIntroAdvantage from './ResumeIntroAdvantage';
import ResumeIntroAi from './ResumeIntroAi';
import ResumeIntroExample from './ResumeIntroExample';

function CvIntro(props) {
	return (
		<ComponentWrapper>
			<ResumeIntoEdit />
			<ResumeIntroAdvantage />
			<ResumeIntroExample />
			<ResumeIntroAi />
			<Footer />
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	width: 100%;
	overflow-x: hidden;
	background-color: #fff;
	color: #333;
`;

export default CvIntro;
