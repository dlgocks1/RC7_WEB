import Footer from 'components/common/Footer';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import SalaryBody from './SalaryBody';
import SalaryGraph from './SalaryGraph';

function SalaryPage() {
	const { jobIdx } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (jobIdx === undefined) {
			navigate('/salary/4');
		}
	}, []);

	return (
		<ComponentWrapper>
			<SalaryGraph jobIdx={jobIdx === undefined ? '522' : jobIdx} />
			<SalaryBody />
			<Footer />
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div``;

export default SalaryPage;
