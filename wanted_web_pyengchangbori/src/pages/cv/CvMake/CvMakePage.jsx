import Loading from 'components/common/Loading';
import { ErrorBoundary } from 'hoc/ErrorBoundary';
import React, { Suspense, useDeferredValue, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { CustomPost, CustomPut } from 'utils/api';
import { fetchCvData } from './fetchCvdata';
import ResumeDetailBody from './ResumeDetailBody';
import ResumeDetailFooter from './ResumeDetailFooter';
import ResumeDetailToolbar from './ResumeDetailToolbar';

function CvMakePage() {
	const navigate = useNavigate();
	const { cvId } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const modify = searchParams.get('modify');

	const { isLogin, userId, jwt } = useSelector(
		(state) => state.UserDataReducer,
	);
	const [introductionState, setIntroduction] = useState('');
	const introduction = useDeferredValue(introductionState);
	const [exportData, setExportData] = useState();
	const [isLoading, setLoading] = useState(false);

	const [cvData, setCVdata] = useState(
		modify === 'Y' &&
			fetchCvData({
				userId,
				cvId,
				jwt,
			}),
	);

	const handleSubmitData = (type) => {
		setLoading(true);
		if (modify === 'N') {
			const result = CustomPost({
				url: `web/resume/${userId}`,
				body: { ...exportData, writing_status: type },
				headers: {
					'x-access-token': jwt,
				},
			});
			result.then((res) => {
				console.log(res);
				if (res.code === 1026) {
					setLoading(false);
					navigate('/cv/list');
				}
				setLoading(false);
			});
		} else {
			const result = CustomPut({
				url: `web/resume/${userId}/${cvId}`,
				body: { ...exportData, writing_status: type },
				headers: {
					'x-access-token': jwt,
				},
			});
			result.then((res) => {
				console.log(res);
				if (res.code === 1028) {
					setLoading(false);
					navigate('/cv/list');
				}
				setLoading(false);
			});
		}
	};

	useEffect(() => {
		if (isLogin === false) {
			navigate('/cv/list');
		}
	}, []);

	return (
		<ComponentWrapper>
			<ResumeDetailToolbar />
			{isLoading ? (
				<Loading />
			) : (
				<>
					{modify === 'Y' ? (
						<ErrorBoundary>
							<Suspense fallback={<Loading />}>
								<ResumeDetailBody
									cvData={cvData}
									introduction={introduction}
									setIntroduction={setIntroduction}
									setExportData={setExportData}
								/>
							</Suspense>
						</ErrorBoundary>
					) : (
						<ResumeDetailBody
							introduction={introduction}
							setExportData={setExportData}
							setIntroduction={setIntroduction}
						/>
					)}

					<ResumeDetailFooter
						handleSubmitData={handleSubmitData}
						introduction={introduction}
					/>
				</>
			)}
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	width: 87.72%;
	padding: 0;
	max-width: 1060px;
	margin: 0 auto;
`;

export default CvMakePage;
