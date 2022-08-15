import Loading from 'components/common/Loading';
import { ErrorBoundary } from 'hoc/ErrorBoundary';
import React, { Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchResumeList } from './fetchCVList';
import ResumeListHeader from './ResumeListHeader';
import ResumeListWrapper from './ResumeListWrapper';

function CvList() {
	const { userId, jwt } = useSelector((state) => state.UserDataReducer);

	const [resumeList, setResumeList] = useState(
		fetchResumeList({ userId, jwt }),
	);
	const [reload, setReload] = useState(5);

	useEffect(() => {
		setResumeList(fetchResumeList({ userId, jwt }));
	}, [reload]);

	return (
		<ComponentWrapper>
			<ResumeListHeader />
			<ErrorBoundary>
				<Suspense fallback={<Loading />}>
					<ResumeListWrapper
						setResumeList={setResumeList}
						resumeList={resumeList}
						setReload={setReload}
					/>
				</Suspense>
			</ErrorBoundary>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	margin: 0 auto;
	width: 87.72%;
	position: relative;
	max-width: 1060px;
`;

export default CvList;
