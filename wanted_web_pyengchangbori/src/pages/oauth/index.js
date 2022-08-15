import Loading from 'components/common/Loading';
import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

function KakaoCallbackPage() {
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<div style={{ hegiht: '100vh' }}>
			<Loading />
		</div>
	);
}

export default KakaoCallbackPage;
