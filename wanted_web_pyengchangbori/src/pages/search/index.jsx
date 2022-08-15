import Loading from 'components/common/Loading';
import { ErrorBoundary } from 'hoc/ErrorBoundary';
import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchQueryData } from './fetchSearchData';
import SearchBody from './SearchBody';
import SearchHeader from './SearchHeader';

function SearchPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get('query');

	const [fetchSearchData, setFetchSearchData] = useState(
		fetchQueryData({ queryStr: query }),
	);

	useEffect(() => {
		setFetchSearchData(fetchQueryData({ queryStr: query }));
	}, [query]);

	return (
		<>
			<SearchHeader query={query} />
			<ErrorBoundary>
				<Suspense fallback={<Loading />}>
					<SearchBody fetchSearchData={fetchSearchData} />
				</Suspense>
			</ErrorBoundary>
		</>
	);
}

export default SearchPage;
